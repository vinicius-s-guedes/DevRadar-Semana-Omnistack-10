# Semana Omnistack 10
> Durante a Semana Omnistack 10, foi desenvolvido o devradar.

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
  <a aria-label="React Native" href="https://img.shields.io/badge/reactnative-OK-blueviolet">
  	<img src="https://img.shields.io/badge/reactnative-OK-blueviolet"></img>
  </a>
</p>

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
