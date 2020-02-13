 # DevRadar-Semana-Omnistack-10
> Na semana Omnistack, criei um radar de desenvolvedores

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
</p>

Esse projeto localiza os desenvolvedor que estão perto de você, tendo a opção de perquisar por tecnologias especificas e também acessar o GitHub da pessoa

![](./static/omnistack.png)

## Instalação
Configure o MongoDB e atualize a string de conexão com seu `User:Senha` no arquivo `index.js`.  
Para instalar as dependências e executar o **Servidor** (modo desenvolvimento), clone o projeto em seu computador e em seguida execute:
```bash
cd backend
yarn install
yarn dev
```
Para iniciar o **Frontend** do React utilize os comandos:
```bash
cd frontend
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto desenvolvido no dia 3 de 5.  

Para testar o **Mobile** do React Native, primeiro coloque o endereço do seu servidor (ou computador) no arquivo `src/services/api.js`, e depois execute os comandos:
```bash
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado!
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```

## Como usar

![](./static/devradar.png)

**web:**
Na versão web, é posível cadastrar um novo desenvolvedor na aplicação e também editar e excluir

**Mobile:**
Na parte mobile, você podera pesquisar por desenvolvedores que estão em um raio de 10km de sua localização, e também ver o github do mesmo, diretamente do aplicativo


## Licença

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)
