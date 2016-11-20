## Minha Agenda

[![Code Climate](https://codeclimate.com/github/thulioph/minha-agenda/badges/gpa.svg)](https://codeclimate.com/github/thulioph/minha-agenda) [![Just for fun.](https://img.shields.io/badge/just%20for-fun-47B500.svg)](https://github.com/thulioph/minha-agenda)

> Forneça: **nome**, **telefone**, **e-mail** e uma **nota** para cadastrar um contato.

## Objetivo

Esta aplicação tem o objetivo de testar as habilidades e conhecimentos de desenvolvimento de um sistema utilizando a **MEAN** stack, que vai desde a sua concepção até a publicação. Está sendo utilizado **Github pages** para publicação dos arquivos de **Frontend**, para publicação dos arquivos de backend o **Heroku**, e para o banco de dados está sendo utilizado o **mLab**.

## Requisitos

- [Git][git]
- [NodeJS][nodejs]
- [Bower][bower]
- [MongoDB][mongodb]

## Utilitários

#### desenvolvimento
- [http-server][http-server]
- [Express][express]
- [AngularJS][angularjs]
- [Milligram][milligram]
- [Mongoose][mongoose]

#### publicação
- [Github Pages][github-pages]
- [Heroku][heroku]
- [mLab][mLab]

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

> altere o valor de `API_URL` para `http://localhost:3000`, onde o mongo irá rodar localmente.

## Comandos úteis

- `brew install mongodb` (instale o mongodb via brew)
- `npm install -g mongo-hacker` (melhora a visualização do terminal ao utilizar mongodb)
- `mongo` (inicia o shell do MongoDB)

## Licença

[MIT License][mit-license] © Thulio Philipe

[git]: http://git-scm.com/downloads/  "Git"
[nodejs]: https://nodejs.org/en/  "Nodejs"
[bower]: https://bower.io/ "Bower"
[mongodb]: https://www.mongodb.com/download-center?jmp=nav#community/  "MongoDB"
[heroku]: https://devcenter.heroku.com/articles/heroku-command-line/  "Heroku CLI"
[milligram]: https://milligram.github.io/  "Milligram"
[express]: http://expressjs.com/  "Express"
[angularjs]: https://angularjs.org/  "AngularJS"
[mongoose]: http://mongoosejs.com/  "Mongoose"
[http-server]: https://github.com/indexzero/http-server/  "HTTP Server"
[github-pages]: https://pages.github.com/ "Github Pages"
[heroku]: https://www.heroku.com/ "Heroku"
[mLab]: https://mlab.com/ "mLab"
[mit-license]: http://thulioph.mit-license.org/ "Licença de uso"
