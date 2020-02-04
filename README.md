# Semana Omnistack 10
> Durante a Semana Omnistack 10, foi desenvolvido o devradar.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

O devRadar mostra no maps o desenvolvedores que estão próximo a sua localização, com a possibilidade de acessar o github do mesmo direto da aplicação.

![](./static/omnistack.png)

## Instalação

Primeiro configure o MongoDB, colocando o link de conexão em ./backend/src/index.js e após isso execute os comandos:

```sh
cd backend
yarn install
yarn src/index.js
```

Agora inicie o frontend:

```sh
cd frontend
yarn start
```

Para iniciar a aplicação mobile será necessário instalar o expo:

```sh
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```

Depois de carregar, é só instalar o expo na loja de apps do seu celular e escanear o QRcode
## Frontend e mobile

![](./static/devradar.png)


## Licença
MIT © Rocketseat