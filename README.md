<br />
<p align="center">
    <img src="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png" alt="Logo" width="200">

  <h3 align="center">Biblioteca by <a href="https://github.com/Lorenalgm">Lorena</a></h3>
 <br />
  <p align="center">
     Sistema de gerenciamento de biblioteca
       <br />
    <br />
    <a href="https://github.com/devchallenge-io/biblioteca-backend">Desafio</a>
    ·
    <a href="https://www.devchallenge.com.br/">DevChallenge</a>
  </p>
</p>

## Índice

* [Devchallenge](#devchallenge) 
* [Desafio](#desafio)
* [Tecnologias](#tecnologias)
*  [How To Run](#how-to-run)
* [devChallenge](#comunidade)

# Devchallenge
<a href="https://devchallenge.now.sh/"> DevChallenge</a> permite que você evolua suas skills como programador! Participe da nossa <a href="https://discord.gg/yvYXhGj">comunidade</a> o/


# Desafio
Seu desafio é criar o backend para um sistema de gerenciamento de uma biblioteca!
Desafio criado por  <a href="https://www.linkedin.com/in/lorenagmontes/">Lorena</a> :)

## Requisitos:
### Rotas da aplicação:
<b>[POST] </b> /obras :  A rota deverá receber titulo, editora, foto, e autores dentro do corpo da requisição. Ao cadastrar um novo projeto, ele deverá ser armazenado dentro de um objeto no seguinte formato: { id: 1, titulo: 'Harry Potter', editora: 'Rocco',foto: 'https://i.imgur.com/UH3IPXw.jpg', autores: ["JK Rowling", "..."]};<br><br>
<b>[GET] </b> /obras/ : A rota deverá listar todas as obras cadastradas<br><br>
<b>[PUT] </b> /obras/:id: : A rota deverá atualizar as informações de titulo, editora, foto e autores da obra com o id presente nos parâmetros da rota<br><br>
<b>[DELETE] </b> /obras/:id: : A rota deverá deletar a obra com o id presente nos parâmetros da rota<br>


# Tecnologias: 
- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [typeorm](https://typeorm.io/#/)
- [SQLite3](https://www.sqlite.org/index.html)

# How to run:
- Clone the project 
- enter the following commands: 
```cl

yarn
``` 
```cl

yarn typeorm migration:run
``` 
```cl
yarn dev 
``` 



# Comunidade
Site: https://www.devchallenge.com.br/ <br>
Discord: https://discord.gg/yvYXhGj <br>
Linkedin: https://www.linkedin.com/company/devchallenge/<br>
Twitter: https://twitter.com/dev_challenge<br>
Instagram: https://www.instagram.com/devchallenge/<br>

