import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export interface GalleryImageItem {
  src: string;
  alt: string;
  title?: string;
  category?: string;
}

export interface InfiniteGalleryProps {
  images: GalleryImageItem[];
  speed?: number;
  zSpacing?: number;
  visibleCount?: number;
  falloff?: { near: number; far: number };
  className?: string;
  autoplay?: boolean;
}

// Custom Cloth / Flag Wave Shader Material
const ClothShaderMaterial = {
  uniforms: {
    uTexture: { value: null },
    uTime: { value: 0 },
    uHover: { value: 0 },
    uOpacity: { value: 1.0 },
    uBlur: { value: 0.0 }
  },
  vertexShader: `
    uniform float uTime;
    uniform float uHover;
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      vUv = uv;
      vNormal = normal;
      vec3 pos = position;

      // Subtle cloth/flag wave effect amplified on hover
      float waveX = sin(pos.y * 3.0 + uTime * 2.5) * 0.08 * uHover;
      float waveY = cos(pos.x * 3.0 + uTime * 2.0) * 0.05 * uHover;
      float waveZ = sin((pos.x + pos.y) * 4.0 + uTime * 3.0) * 0.12 * uHover;

      // Base gentle ambient movement
      float ambientWave = sin(pos.y * 1.5 + uTime * 0.8) * 0.02;
      
      pos.z += waveZ + ambientWave;
      pos.x += waveX;
      pos.y += waveY;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    uniform float uOpacity;
    uniform float uHover;
    uniform float uBlur;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Subtle zoom on hover
      uv = (uv - 0.5) * (1.0 - uHover * 0.05) + 0.5;

      vec4 texColor = texture2D(uTexture, uv);
      
      // Apply depth fade and hover brightness adjustment
      vec3 color = texColor.rgb * (1.0 + uHover * 0.15);
      
      gl_FragColor = vec4(color, texColor.a * uOpacity);
    }
  `
};

interface GalleryPlaneProps {
  item: GalleryImageItem;
  position: [number, number, number];
  opacity: number;
  scale: number;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

const GalleryPlane: React.FC<GalleryPlaneProps> = ({ item, position, opacity, scale, isHovered, onHover }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const texture = useTexture(item.src);
  
  // Custom material clone to avoid shared uniform mutations
  const customMaterial = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(ClothShaderMaterial.uniforms),
      vertexShader: ClothShaderMaterial.vertexShader,
      fragmentShader: ClothShaderMaterial.fragmentShader,
      transparent: true,
      side: THREE.DoubleSide
    });
    mat.uniforms.uTexture.value = texture;
    return mat;
  }, [texture]);

  // Fewer subdivisions on narrow screens: identical silhouette, much lighter
  // vertex work so the cloth wave stays smooth on phones.
  const segments = scale < 1 ? 12 : 32;

  const currentHover = useRef(0);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      
      // Smooth hover interpolation
      const targetHover = isHovered ? 1.0 : 0.0;
      currentHover.current = THREE.MathUtils.lerp(currentHover.current, targetHover, delta * 6.0);
      materialRef.current.uniforms.uHover.value = currentHover.current;
      materialRef.current.uniforms.uOpacity.value = opacity;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(true);
      }}
      onPointerOut={() => onHover(false)}
    >
      <planeGeometry args={[3.2 * scale, 2.1 * scale, segments, segments]} />
      <primitive object={customMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
};

interface SceneProps {
  images: GalleryImageItem[];
  scrollOffset: number;
  zSpacing: number;
  visibleCount: number;
  falloff: { near: number; far: number };
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const GalleryScene: React.FC<SceneProps> = ({
  images,
  scrollOffset,
  zSpacing,
  visibleCount,
  falloff,
  hoveredIndex,
  setHoveredIndex
}) => {
  const { viewport } = useThree();
  const totalCount = images.length;
  if (totalCount === 0) return null;

  const loopLength = totalCount * zSpacing;

  // Narrow / portrait viewports get smaller, tighter cards so the 3D stack
  // still reads as a gallery instead of one cropped, over-zoomed plane.
  const isNarrow = viewport.aspect < 1.2;
  const planeScale = isNarrow ? 0.55 : 1;
  const staggerUnit = isNarrow ? 0.8 : 1.8;
  const staggerAmplitude = isNarrow ? 0.45 : 0.7;

  return (
    <group>
      {images.map((item, index) => {
        // Base Z calculation along infinite sequence
        const baseZ = -index * zSpacing;
        // Wrapped position in infinite loop
        let zPos = (baseZ + (scrollOffset % loopLength)) % loopLength;
        if (zPos > zSpacing * 2) {
          zPos -= loopLength;
        }

        // Distance from camera view
        const dist = Math.abs(zPos);

        // Opacity & Fade calculations
        let opacity = 1.0;
        if (zPos > 0) {
          // Fade out as it comes behind or passes camera
          opacity = THREE.MathUtils.clamp(1.0 - zPos / falloff.near, 0, 1);
        } else if (Math.abs(zPos) > falloff.far - 4) {
          // Fade out towards deep background
          opacity = THREE.MathUtils.clamp((falloff.far - Math.abs(zPos)) / 4, 0, 1);
        }

        if (opacity <= 0.01) return null;

        // X/Y staggered position for dynamic 3D depth gallery look
        const staggerX = ((index % 3) - 1) * (viewport.width > 10 ? 2.8 : staggerUnit);
        const staggerY = Math.sin(index * 1.3) * staggerAmplitude;

        return (
          <GalleryPlane
            key={`${item.src}-${index}`}
            item={item}
            position={[staggerX, staggerY, zPos]}
            opacity={opacity}
            scale={planeScale}
            isHovered={hoveredIndex === index}
            onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
          />
        );
      })}
    </group>
  );
};

// WebGL Fallback Component for devices without WebGL support
const WebGLFallback: React.FC<{ images: GalleryImageItem[] }> = ({ images }) => {
  return (
    <div className="w-full max-w-full min-h-[400px] sm:min-h-[600px] bg-slate-950 px-4 py-8 sm:py-12 text-slate-100 flex flex-col items-center">
      <div className="max-w-6xl w-full max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-sky-500/50"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={img.src}
                alt={img.alt || `Gallery Image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            {img.title && (
              <div className="p-4 bg-slate-900/95">
                <span className="text-xs uppercase tracking-wider text-sky-400 font-medium">
                  {img.category || 'Portfolio'}
                </span>
                <h4 className="text-sm font-semibold text-slate-100 mt-1">{img.title}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const InfiniteGallery: React.FC<InfiniteGalleryProps> = ({
  images,
  speed = 1.2,
  zSpacing = 3,
  visibleCount = 12,
  falloff = { near: 0.8, far: 14 },
  className = "h-screen w-full overflow-hidden",
  autoplay = true
}) => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTouchY = useRef<number | null>(null);
  const lastInteractionTime = useRef<number>(Date.now());
  const animationFrameRef = useRef<number | null>(null);

  // Check WebGL Availability
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  // Autoplay Logic
  useEffect(() => {
    if (!autoplay || hasWebGL === false) return;

    let mounted = true;
    const loop = () => {
      const timeSinceInteraction = Date.now() - lastInteractionTime.current;
      if (timeSinceInteraction > 2500 && hoveredIndex === null) {
        setScrollOffset((prev) => prev + 0.015 * speed);
      }
      if (mounted) {
        animationFrameRef.current = requestAnimationFrame(loop);
      }
    };

    animationFrameRef.current = requestAnimationFrame(loop);
    return () => {
      mounted = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [autoplay, speed, hoveredIndex, hasWebGL]);

  // Wheel Interaction (Scoped to container)
  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      lastInteractionTime.current = Date.now();
      setScrollOffset((prev) => prev + e.deltaY * 0.005 * speed);
    },
    [speed]
  );

  // Touch Interaction
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      lastTouchY.current = e.touches[0].clientY;
      lastInteractionTime.current = Date.now();
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (lastTouchY.current !== null && e.touches.length > 0) {
      const deltaY = lastTouchY.current - e.touches[0].clientY;
      lastTouchY.current = e.touches[0].clientY;
      lastInteractionTime.current = Date.now();
      setScrollOffset((prev) => prev + deltaY * 0.01 * speed);
    }
  };

  const handleTouchEnd = () => {
    lastTouchY.current = null;
  };

  // Keyboard Navigation when container is focused or hovered
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        lastInteractionTime.current = Date.now();
        setScrollOffset((prev) => prev + 1.2 * speed);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        lastInteractionTime.current = Date.now();
        setScrollOffset((prev) => prev - 1.2 * speed);
      }
    };

    const container = containerRef.current;
    if (!container) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [speed]);

  if (hasWebGL === false) {
    return <WebGLFallback images={images} />;
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full max-w-full select-none outline-none focus:ring-0 ${className}`}
    >
      {hasWebGL && (
        <Canvas
          camera={{ position: [0, 0, 0.1], fov: 60, near: 0.1, far: 50 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1.0} />
          <GalleryScene
            images={images}
            scrollOffset={scrollOffset}
            zSpacing={zSpacing}
            visibleCount={visibleCount}
            falloff={falloff}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </Canvas>
      )}
    </div>
  );
};

export default InfiniteGallery;
