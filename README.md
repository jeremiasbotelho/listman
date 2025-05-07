# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Passo 1: Criar o projeto Vite
Abra o VS Code com o diretório listman (C:\Users\Jeremias\Documents\github\listman).
Abra o terminal (`Ctrl+``).
Execute:

npm create vite@latest . -- --template react

O . indica que o projeto será criado no diretório atual (listman).
--template react escolhe o template React com JavaScript (não TypeScript).
Confirme as opções se solicitado (nome do projeto: listman, framework: React, variante: JavaScript).
Após a criação, instale as dependências:

npm install

Passo 2: Instalar dependências iniciais
Vamos adicionar as dependências necessárias para Tailwind CSS, Supabase, e roteamento:

Instale o Tailwind CSS e suas dependências:

npm install -D tailwindcss postcss autoprefixer

(versão que funcionou: npm install tailwindcss@3.3.5 --save-dev)

npx tailwindcss init -p
Isso cria tailwind.config.js e postcss.config.js.

Instale o cliente Supabase:

npm install @supabase/supabase-js

Instale o React Router para navegação entre telas:

npm install react-router-dom

Passo 3: Configurar o Tailwind CSS
Abra o arquivo tailwind.config.js e substitua pelo seguinte:

/** @type {import('tailwindcss').Config} \*/
export default {
content: ['./index.html', './src/**/\*.{js,jsx}'],
theme: {
extend: {},
},
plugins: [],
};
