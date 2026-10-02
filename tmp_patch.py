import re

path = 'src/App.tsx'
with open(path, encoding='utf-8') as f:
    s = f.read()

if 'ContactForm' not in s:
    s = s.replace(
        "import { FinalCTA } from '@/components/FinalCTA';\nimport { Footer } from '@/components/Footer';",
        "import { FinalCTA } from '@/components/FinalCTA';\nimport { ContactForm } from '@/components/ContactForm';\nimport { Footer } from '@/components/Footer';"
    )

with open(path, 'w', encoding='utf-8') as f:
    f.write(s)
print('done')