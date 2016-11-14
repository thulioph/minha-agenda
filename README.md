## Minha Agenda

Aplicação que permite a adição de contatos a uma lista qualquer. 
Forneça: **nome**, **telefone**, **e-mail** e uma **nota** para cadastrar um contato.

## Requisitos

- [Git][git]
- [NodeJS][nodejs]
- [Bower][bower]
- [MongoDB][mongodb]
- [Heroku CLI][heroku]

## Pacotes

- [Express][express]
- [AngularJS][angularjs]
- [Milligram][milligram]
- [Mongoose][mongoose]

## Melhorias

- O fluxo correto para desenvolvimento da aplicação é:
  - Angular consome os dados que vem do NODEJS
  - O NODEJS consome os dados que vem do MONGODB
  - Angular -> NodeJS -> MongoDB
  - MongoDB -> NodeJS -> Angular



---

#### comandos 

- `bower init` / bower@1.7.9
- `npm init` / node@6.3.0
- `brew install mongodb` / mongo@3.2.10
- `mongod --dbpath /minha/pasta`
- `mongo` (inicia o shell do MongoDB)
- `npm install -g mongo-hacker` (melhora a visualização do terminal ao utilizar mongodb)


[git]: http://git-scm.com/downloads/  "Git"
[nodejs]: https://nodejs.org/en/  "Nodejs"
[bower]: https://bower.io/ "Bower"
[mongodb]: https://www.mongodb.com/download-center?jmp=nav#community/  "MongoDB"
[heroku]: https://devcenter.heroku.com/articles/heroku-command-line/  "Heroku CLI"
[milligram]: https://milligram.github.io/  "Milligram"
[express]: http://expressjs.com/  "Express"
[angularjs]: https://angularjs.org/  "AngularJS"
[mongoose]: http://mongoosejs.com/  "Mongoose"