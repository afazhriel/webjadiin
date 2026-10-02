path = 'src/data/config.ts'
with open(path, encoding='utf-8') as f:
    s = f.read()

s = s.replace('halo@nexadigital.co.id', 'halo@hafi.digital')

with open(path, 'w', encoding='utf-8') as f:
    f.write(s)
print('ok')