## Minha Agenda

Aplicação que permite a adição de contatos a uma lista qualquer. 
Forneça: **nome**, **telefone**, **e-mail** e uma **nota** para cadastrar um contato.


## Requisitos

- [Git][git]
- [NodeJS][nodejs]
- [Bower][bower]
- [MongoDB][mongodb]

## Utilitários

- [Express][express]
- [AngularJS][angularjs]
- [Milligram][milligram]
- [Mongoose][mongoose]

## Setup

1. Realize o **download das dependências** do projeto com os comandos:

```sh
$ bower install --save
```

> dependências do bower.json

```sh
$ npm install
```

> dependências do package.json

2. Inicie o **MongoDB** com o comando:

```sh
$ mongod --dbpath ~/path/
```

> **--dbpath** é um comando alternativo, e **path** será a pasta onde os dados do mongo serão salvos.

3. Inicie o servidor para os arquivos da pasta **server** com o comando:

```sh
$ npm run server
```

4. Inicie o servidor para os arquivos do **Frontend** com o comando:

```sh
$ npm run app
```

## Comandos úteis

- `brew install mongodb` (instale o mongodb via brew)
- `npm install -g mongo-hacker` (melhora a visualização do terminal ao utilizar mongodb)
- `mongo` (inicia o shell do MongoDB)


[git]: http://git-scm.com/downloads/  "Git"
[nodejs]: https://nodejs.org/en/  "Nodejs"
[bower]: https://bower.io/ "Bower"
[mongodb]: https://www.mongodb.com/download-center?jmp=nav#community/  "MongoDB"
[heroku]: https://devcenter.heroku.com/articles/heroku-command-line/  "Heroku CLI"
[milligram]: https://milligram.github.io/  "Milligram"
[express]: http://expressjs.com/  "Express"
[angularjs]: https://angularjs.org/  "AngularJS"
[mongoose]: http://mongoosejs.com/  "Mongoose"
