<h1 align="center">
    <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./assets/home.png" />
</h1>

<h4 align="center"> 
	NextLevelWeek 2.0 🚀
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Oppadayo/proffy?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Oppadayo/proffy">	
  
  <a href="https://github.com/Oppadayo/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Oppadayo/proffy">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/Oppadayo/proffy/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/Oppadayo/proffy?style=social">
  </a>
</p>


## 💻 Sobre o projeto

📚 Proffy - é uma aplicação Web e Mobile feita para auxiliar na conexão entre os alunos e os professores

Os professores poderão se cadastrar na plataforma web enviando:
- uma imagem de avatar
- nome, whatsapp, 
- matéria, custo da hora/aula  
- além de adicionar um ou vários horários disponíveis
 
 Os alunos poderão consultar na plataforma web:
 - os professores disponíveis por matéria e horários
 - entrar em contato com eles pelo whatsapp
 

Projeto desenvolvido durante a **NLW - Next Level Week 2** oferecida pela [Rocketseat].
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.



### Mobile

<p align="center">
 🚧 Em construção... 🚧
</p>

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./assets/proffycadastro.gif" height="400px">

  <img alt="NextLevelWeek2" title="#NextLevelWeek2" src="./assets/proffybuscar.gif" height="400px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]


## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta server) 
2. Front End (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/Oppadayo/proffy

# Acesse a pasta do projeto no terminal/cmd
$ cd proffy

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

#Rode as migrations para criação do banco de dados
$ npm run knex:seed

#Rode as migrations para alimentar o banco de dados
$ npm run knex:migrate

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/Oppadayo/proffy

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 🧭 Rodando a aplicação mobile (Mobile) 🚧 Em construção... 🚧

```bash
# Clone este repositório
$ git clone https://github.com/Oppadayo/proffy

# Acesse a pasta do projeto no seu terminal/cmd
$ cd proffy

# Vá para a pasta da aplicação Front End
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na 19001 - Ela abre uma aba com as opções de rodar a aplicação no emulador ou no celular usando o QR code
```

### 📝 ToDos
- [ ] Máscara para o whatsapp.
- [ ] Adicionar arquivos de imagem para avatar
- [ ] Arrumar bug da hora não calcular quando colocar 00:00
