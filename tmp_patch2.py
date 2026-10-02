path = 'src/App.tsx'
with open(path, encoding='utf-8') as f:
    s = f.read()

# Add component after FAQ and before FinalCTA
marker = '''      {/* 12. FAQ SECTION */}
      <FAQ />

      {/* 13. FINAL CTA SECTION */}
      <FinalCTA />'''
new = '''      {/* 12. FAQ SECTION */}
      <FAQ />

      {/* 13. CONTACT FORM SECTION */}
      <ContactForm />

      {/* 14. FINAL CTA SECTION */}
      <FinalCTA />'''

if marker in s:
    s = s.replace(marker, new)
else:
    # fallback: add after FAQ
    s = s.replace('<FAQ />', '<FAQ />\n\n      <ContactForm />')

with open(path, 'w', encoding='utf-8') as f:
    f.write(s)
print('ok')