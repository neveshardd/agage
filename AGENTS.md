<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# agage.com.br — guia do projeto

Site institucional da AGAGE (construção civil e montagem industrial). Next.js (App Router) +
Tailwind CSS v4 + TypeScript, em quatro idiomas (`pt`, `en`, `es`, `zh`). A **página inicial é a
referência visual**: toda página nova ou alterada segue os padrões abaixo.

Comandos: `npm run dev`, `npm run lint` (Biome), `npx tsc --noEmit`. Rode lint e typecheck antes
de concluir qualquer mudança. Comentários e textos de interface em português.

## Estrutura

- `src/app/[lang]/…` — páginas. Toda página usa `getI18n()` para textos e imagens, exporta
  `generateMetadata` com `getAlternates(locale, "/caminho")` e é registrada em `src/app/sitemap.ts`.
- `src/components/<seção>/` — um componente por seção, com `index.ts`, `data.ts` (dados fixos) e
  `types.ts` quando necessário.
- `src/i18n/dictionaries/{pt,en,es,zh}.ts` — **todo texto visível** (inclusive `alt`, `aria-label`
  e metadados). `pt.ts` define o formato; os outros idiomas precisam ter as mesmas chaves.
- `src/content/` — conteúdo editável pelo backoffice (ver “Conteúdo editável”).
- `src/lib/backoffice.ts` — cliente da API pública do backoffice (`AGAGE_API_URL`).

## Conteúdo editável (backoffice)

Textos e imagens podem ser alterados no backoffice (menu **Site**) sem deploy:

- Os dicionários são o **padrão**; o backoffice guarda só as alterações. `getI18n()` busca as
  alterações em `/api/public/site-content` (cache de 60 s) e as aplica sobre o dicionário. Se a API
  falhar, o site usa o padrão — nunca quebra.
- Imagens: cada imagem do site é um **slot** em `src/content/images.ts` (chave → arquivo padrão em
  `public/`). Componentes leem `images["chave"]` de `getI18n()` / `useI18n()`; **nunca** escreva o
  caminho da imagem direto no componente.
- `/api/site-content-schema` publica para o backoffice as seções, campos, padrões e slots. Ao
  criar uma seção ou página: adicione os textos aos quatro dicionários, os slots de imagem em
  `src/content/images.ts` e o rótulo da seção em `src/content/sections.ts`.
- Não renomeie chaves de dicionário ou de slots sem necessidade: alterações salvas no backoffice
  ficam presas à chave antiga.

## Visual

**Cores** (tokens em `globals.css`, use as classes `brand-*`): `brand-navy` (#1b2a5b) para títulos e
fundos escuros, `brand-orange` (#f2a122) como destaque e CTA principal, `brand-blue` (#2563eb) como
destaque secundário. Texto corrido em `slate-600`; bordas e divisórias em `slate-200`; fundos
alternativos em `slate-50`. Fonte única: Figtree (`font-sans`).

**Layout**
- Contêiner padrão: `mx-auto w-full max-w-screen-2xl px-6 lg:px-10` — o mesmo da navbar.
- Espaçamento vertical das seções: `py-16 sm:py-20` (ou `py-20 sm:py-24` nas seções de destaque).
- Blocos de destaque ficam **recuados dentro do contêiner, com cantos arredondados** (como a hero e a
  ouvidoria), não de ponta a ponta. Faixas de largura total só para fotos de fundo
  (certificações, mão de obra) e para o rodapé.
- Celular: margem lateral de 16–24px, nada de rolagem horizontal.

**Tipografia**
- `h1` (cabeçalho de página): `text-3xl sm:text-4xl lg:text-5xl font-bold text-balance`.
- `h2` de seção: `text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy text-balance`.
- `h3` de card: `text-lg font-bold leading-snug text-brand-navy`.
- Rótulo/sobretítulo: `text-xs font-semibold uppercase tracking-wider` (laranja ou `slate-400`).
- Texto: `text-sm sm:text-base leading-relaxed text-slate-600`.

**Cantos**: cards e blocos `rounded-2xl` (pequenos `rounded-xl`); botões, badges e chips
`rounded-full`. Evite cantos retos.

**Componentes recorrentes**
- Botão principal: pílula laranja — `rounded-full bg-brand-orange px-6 py-3 text-sm font-bold
  uppercase tracking-wide text-white hover:bg-brand-orange-dark`, com `IconArrowRight` à direita.
  Secundário: mesma pílula em `brand-navy` ou com borda `border-brand-navy`.
- Botões de navegação de carrossel: círculo `h-10 w-10 rounded-full border border-slate-200` com
  `IconChevronLeft/Right` de `h-5 w-5` (o ícone ocupa ~50% do círculo).
- Card de serviço: grade com linhas finas (`gap-px bg-slate-200` dentro de `rounded-2xl`), barrinha
  colorida no topo, título à esquerda e ícone num quadrado `rounded-xl` com fundo `cor/10` à direita.
- Card de foto (obras): foto inteira 3:4 `rounded-2xl`, degradê `brand-navy` de baixo para cima,
  texto branco por cima e badge branca `rounded-full` com a localização.
- Badge: `rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy`, sem borda/sombra.

**Ícones**: somente Tabler (`@tabler/icons-react`), sempre com `aria-hidden` quando decorativos.
Não crie SVGs de ícone à mão (exceção: o mapa do Brasil).

**Imagens**: sempre `next/image` com `sizes` correto; fotos com `object-cover`. `alt` vem do
dicionário (vazio só quando a imagem é decorativa).

**Movimento e hover**: discreto. Permitido: mudança de cor de fundo/texto, a barrinha laranja que
cresce, a seta do botão que anda 2px e a entrada `data-reveal` ao rolar. **Proibido**: zoom em
imagens no hover, cards que sobem/escalam, sombras que aparecem, efeitos chamativos. Respeite
`motion-reduce`. Imagens clicáveis usam `cursor-pointer`.

## Acessibilidade

Hierarquia de títulos correta (um `h1` por página, no `PageHeader` ou na hero), `aria-label` vindo do
dicionário em botões só com ícone, foco visível (`focus-visible:outline-*`), contraste AA e
`lang` correto (`HTML_LANG`).
