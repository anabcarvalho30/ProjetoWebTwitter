# Project X — Mini Rede de Festas

O **Project X** é uma aplicação web inspirada no filme *Projeto X*, onde os usuários podem **compartilhar ideias de festas**, **ver sugestões de outros usuários** e **comentar** sobre elas.  

O projeto foi desenvolvido com **Node.js**, **Express**, **SQLite3**, **React** e **Axios**, unindo frontend e backend em um mini “Twitter de festas”.

---

## Tecnologias Utilizadas

### Frontend
- React  
- React Router DOM  
- Axios  
- CSS Modularizado  

### Backend
- Node.js  
- Express  
- SQLite3  
- CORS  
- Nodemon  

---

## Rotas da API

### Usuários

- **POST** `/users` → Cria um novo usuário  
- **GET** `/users` → Lista todos os usuários  

---

### Posts

- **POST** `/posts` → Cria um novo post (ideia de festa)  
- **GET** `/posts` → Lista todos os posts  

---

### Comentários

- **POST** `/comments` → Cria um comentário em um post  
- **GET** `/comments/:postId` → Lista comentários de um post  

---

## Banco de Dados (SQLite)

O banco **`database.sqlite`** armazena três tabelas principais:

### **Users**
- `id`  
- `name`  
- `username`  
- `bio`  

### **Posts**
- `id`  
- `content`  
- `userId` *(autor)*  

### **Comments**
- `id`  
- `content`  
- `userId`  
- `postId`  

> As associações são configuradas no **Sequelize**, permitindo que um usuário tenha vários posts e comentários.

---

## Como Executar o Projeto

### Backend

``` bash
cd ProjetoX
cd backend
npm install
npm start
```
O servidor backend iniciará em: http://localhost:3000

### Frontend

``` bash
cd ProjetoX
cd frontend
npm install
npm run dev
```
O servidor backend iniciará em: http://localhost:3004


### Estrutura do código:

``` bash
project-x/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── test.http
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── comments.css
│   │   ├── forms.css
│   │   ├── index.css
│   │   ├── layout.css
│   │   ├── navbar.css
│   │   ├── postPage.css
│   │   ├── posts.css
│   │   └── styles.css
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

