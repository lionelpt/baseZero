# baseZero

Aplicação de gestão financeira em Next.js com perfis persistidos, despesas, orçamento, cenários e definições em `pt-PT`.

## O que inclui

- perfis de contexto (`Pessoal`, `Estudante`, `Família`, `Casa`)
- despesas com criação, edição e exportação de resumo
- orçamento por categoria com métricas derivadas
- cenários simples de impacto mensal
- definições de perfil e plano com reposição local
- testes E2E com Playwright

## Arranque local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000/visao/painel`.

## Scripts

- `npm run dev` inicia o servidor de desenvolvimento
- `npm run build` cria o build de produção
- `npm run start` arranca a app em produção
- `npm run lint` executa o ESLint
- `npm run test:e2e:install` instala o Chromium para Playwright
- `npm run test:e2e` executa a suite E2E
- `npm run test:e2e:headed` executa a suite E2E com browser visível

## Estrutura principal

- `app/(app)` páginas e shell da aplicação
- `config/routes.mjs` rotas canónicas e redirects legados
- `lib/finance-store.js` estado persistido e cálculos derivados
- `messages/pt-PT` copy e labels da interface
- `tests/e2e` regressão funcional com Playwright

## CI

O repositório inclui um workflow GitHub Actions em `.github/workflows/ci.yml` que corre:

- `npm run lint`
- `npm run build`
- `npm run test:e2e`
