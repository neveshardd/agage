# 🏗️ Agage Construtora - Website Institucional

> **"O progresso é o nosso produto"**

Este é o repositório do website oficial da **Agage Construtora**. Uma aplicação web moderna, responsiva e performática, focada em apresentar a marca, seus serviços, metodologias, projetos e clientes de forma dinâmica e elegante.

## 🚀 Sobre o Projeto

O portal foi desenvolvido visando proporcionar uma experiência de usuário (UX) premium com animações fluidas e navegação intuitiva. A arquitetura foi pensada para garantir alto desempenho de carregamento (SEO técnico), acessibilidade e facilidade de manutenção.

A página inicial no padrão "*One-Page/Landing Page*" está estruturada nas seguintes seções:
- **Hero Section**: Impacto inicial com o manifesto da marca.
- **Sobre (About)**: História e valores da Agage Construtora.
- **Missão (Mission)**: Propósitos e objetivos da empresa.
- **Serviços (Services)**: Core business e atuações no mercado.
- **Projetos (Projects)**: Portfólio de obras e construções.
- **Clientes (Clients)**: Parceiros que confiam em nosso progresso.
- **Header & Footer**: Navegação otimizada e contatos interativos.

---

## 💻 Stack Tecnológica

O ecossistema do projeto é baseado em tecnologias de ponta do mercado de frontend:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Biblioteca UI**: [React 19](https://react.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações**: [GSAP](https://gsap.com/) & [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Carrosséis / Sliders**: [Swiper](https://swiperjs.com/)
- **Componentes Base**: [Radix UI](https://www.radix-ui.com/)
- **Ícones**: Phosphor Icons, Lucide React & React Icons
- **Envio de Formulários**: [Resend](https://resend.com/) / EmailJS
- **Tipagem**: TypeScript

---

## 🛠️ Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 20+ recomendada) e um gerenciador de pacotes (`npm`, `yarn`, `pnpm` ou `bun`) instalados em sua máquina.

### Passo a Passo

1. **Clone repositório e acesse o diretório:**
   ```bash
   git clone <url-do-repositorio> agage
   cd agage
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou yarn install / pnpm install
   ```

3. **Configuração de Variáveis de Ambiente:**
   Crie um arquivo `.env.local` na raiz do projeto contendo as chaves necessárias para serviços de e-mail (Resend/EmailJS) ou outras integrações, de acordo com as necessidades do projeto.

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no Navegador:**
   Abra [http://localhost:3000](http://localhost:3000) e visualize o site em tempo real. Edições em `app/page.tsx` refletem imediatamente na página.

---

## 📂 Estrutura de Diretórios Principal

```text
agage/
├── app/               # Rotas e layout do Next.js App Router (page.tsx, layout.tsx, etc)
├── components/        # Componentes globais e as seções da página.
│   ├── layout/        # Componentes de base (Header, Footer, Sidebar, etc)
│   ├── ui/            # Componentes reutilizáveis e Radix primitives
│   └── ...            # Seções (HeroSection, AboutSection, etc)
├── hooks/             # Custom React Hooks
├── lib/               # Utilitários, configurações (ex: utils.ts para cn/tailwind-merge)
└── public/            # Assets estáticos (imagens, favicons, etc)
```

---

## 🚢 Deploy (Vercel)

A forma mais fácil de fazer o deploy desta aplicação em produção é através da plataforma [Vercel](https://vercel.com/new). Como o projeto é construído em Next.js, a Vercel garante zero configuração com suporte imediato às Edge Functions e otimizações de imagens e fontes.

---

Feito com 🏗️ e dedicação. O progresso não para!
