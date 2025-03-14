# My Site - Angular Project

## 📝 Descrição
Projeto desenvolvido em Angular 19 que apresenta componentes para exibição de informações sobre tecnologias, incluindo Laravel e Angular, com galerias de imagens interativas.

## 🔧 Tecnologias Utilizadas
- Angular
- PrimeNG (Galleria Component)
- TypeScript
- SCSS

## 📦 Componentes Principais

### Angular Component
- Componente standalone
- Galeria de imagens responsiva
- Layout adaptativo para diferentes tamanhos de tela

### Laravel Component
- Galeria de imagens com thumbnails
- Layout responsivo
- Integração com PrimeNG Galleria

## 🎨 Recursos
- Galleria com suporte para múltiplas imagens
- Opções responsivas configuradas para diferentes breakpoints:
  - Desktop (1024px): 5 imagens visíveis
  - Tablet (768px): 3 imagens visíveis
  - Mobile (560px): 1 imagem visível

## 🚀 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
ng serve
```

3. Acesse `http://localhost:4200` no seu navegador

## 📋 Pré-requisitos
- Node.js
- Angular CLI
- PrimeNG

## 🔍 Estrutura do Projeto
```
src/
  ├── app/
  │   └── components/
  │       ├── angular/
  │       │   ├── angular.component.ts
  │       │   ├── angular.component.html
  │       │   └── angular.component.scss
  │       └── laravel/
  │           ├── laravel.component.ts
  │           ├── laravel.component.html
  │           └── laravel.component.scss
  └── assets/
      └── 1696636178024.jpg
