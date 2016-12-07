## Minha Agenda

> Forneça: **nome**, **telefone**, **e-mail** e uma **nota** para cadastrar um contato.

[![Demo Online.](https://img.shields.io/badge/demo-online-green.svg)](https://thulioph.github.io/minha-agenda/app/) [![Issues](https://img.shields.io/github/issues/thulioph/minha-agenda.svg)](https://github.com/thulioph/minha-agenda/issues) [![Stars](https://img.shields.io/github/stars/thulioph/minha-agenda.svg)](https://github.com/thulioph/minha-agenda/stargazers) [![Code Climate](https://codeclimate.com/github/thulioph/minha-agenda/badges/gpa.svg)](https://codeclimate.com/github/thulioph/minha-agenda)

## Sobre

Esta aplicação tem o objetivo de testar as habilidades e conhecimentos de desenvolvimento de um sistema utilizando a **MEAN** stack, que vai desde a sua concepção até a publicação. Está sendo utilizado **Github pages** para publicação dos arquivos de **Frontend**, para publicação dos arquivos de **backend** o **Heroku**, e para o **banco de dados** está sendo utilizado o **mLab**.

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

#### monitoramento
- [Opbeat][opbeat]

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

## Autenticação

Existem atualmente dois modelos de autenticação:

- via Facebook
  - inicializa o setup do SDK [link][fb-init]
  - verifica o status de login do usuário [link][fb-state]
  - realizo o login caso esteja deslogado [link][fb-login]
  - obtenho as informações necessárias [link][fb-getdata]
- via Google
  - realize o load da lib necessária [link][gl-login]
  - inicializa o cliente com as credenciais [link][gl-login]
  - verifica o status de login do usuário [link][gl-login]
  - realizo o login caso esteja deslogado [link][gl-login]
  - obtenho as informações necessárias [link][gl-login]

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

[fb-init]: https://developers.facebook.com/docs/javascript/reference/FB.init/v2.8 "Setup para o SDK"
[fb-state]: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus "Verifica se o usuário está logado ou não"
[fb-login]: https://developers.facebook.com/docs/reference/javascript/FB.login/v2.8 "Realizo o login do usuário através do Facebook"
[fb-getdata]: https://developers.facebook.com/docs/javascript/reference/FB.api "Realizo o get das informações do usuário"

[gl-login]: https://developers.google.com/api-client-library/javascript/samples/samples "Como realizar autenticação utilizando o Google"

[opbeat]: https://opbeat.com/ "Monitoramento de performance e erros"
