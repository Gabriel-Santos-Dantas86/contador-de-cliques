🎯 Contador de Cliques

Aplicação web simples desenvolvida em React 18 que implementa um contador interativo.
A cada clique no botão, o contador incrementa em +1, exibindo estados visuais dinâmicos, animações suaves e design responsivo.

O projeto demonstra conceitos fundamentais do React moderno, como Hooks, componentização e otimização de funções.

🚀 Funcionalidades

➕ Contador que incrementa +1 a cada clique

🔄 Botão de reset para zerar o contador

🎨 Estados visuais dinâmicos baseados no valor do contador

✨ Animações suaves

📱 Design responsivo para desktop e mobile

⚡ Interface moderna com feedback visual

🛠️ Tecnologias Utilizadas

React 18

JavaScript (ES6+)

Hooks do React

useState

useCallback

CSS3

animações

transições

layout responsivo

GitHub Pages para deploy

📦 Instalação

Clone o repositório e instale as dependências.

git clone https://github.com/seu-usuario/contador-clicks.git
cd contador-clicks
npm install
npm start

O projeto será executado em:

http://localhost:3000
🌐 Deploy no GitHub Pages

Para publicar o projeto no GitHub Pages:

1️⃣ Crie um repositório no GitHub

Exemplo:

contador-clicks
2️⃣ Suba o código
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/contador-clicks.git
git push -u origin main
3️⃣ Configure o GitHub Pages

Vá em Settings

Clique em Pages

Em Source selecione:

Deploy from a branch

Escolha a branch:

gh-pages
4️⃣ Execute o deploy
npm run deploy

Após o deploy, a aplicação estará disponível em:

https://seu-usuario.github.io/contador-clicks
📁 Estrutura do Projeto
src/
├── components/
│   └── Contador/
│       ├── Contador.jsx
│       └── Contador.css
│
├── App.jsx
└── index.js
Descrição
Arquivo	Função
Contador.jsx	Componente principal do contador
Contador.css	Estilos específicos do contador
App.jsx	Componente raiz da aplicação
index.js	Ponto de entrada do React
📝 Conceitos Demonstrados

Este projeto demonstra diversos conceitos importantes do React moderno:

🔹 Gerenciamento de Estado

Uso do hook:

useState

Para controlar o valor do contador.

🔹 Otimização de Funções

Uso do hook:

useCallback

Para evitar recriações desnecessárias de funções.

🔹 Manipulação de Eventos

Uso do evento:

onClick

Para interação do usuário.

🔹 Renderização Condicional

Exibição de mensagens e estilos diferentes conforme o valor do contador.

🔹 Estilização Modular

Uso de CSS separado por componente, facilitando manutenção e reutilização.

🎨 Preview Visual

A aplicação possui:

🎨 Design moderno com gradientes

💎 Efeito glassmorphism

✨ Animações suaves

🔵 Feedback visual que muda conforme o valor aumenta

📱 Interface totalmente responsiva

✅ Boas Práticas Aplicadas

✔️ Uso de Hooks do React

✔️ Componentização

✔️ Separação de responsabilidades

✔️ CSS modular

✔️ Acessibilidade básica (aria-labels)

Projeto desenvolvido para fins de estudo por Gabriel Dantas
Dúvidas: glef.gestoes@gmail.com

✔️ Estrutura preparada para deploy no GitHub Pages

💡 Projeto ideal para estudo de React, Hooks e publicação no GitHub Pages.
