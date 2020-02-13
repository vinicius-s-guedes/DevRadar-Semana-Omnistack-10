const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket.js');

const app = express();

const server = http.Server(app);
setupWebSocket(server);


// nessa string você deve adcionar o link que o mongodb libera para acesso ao seu benco de dados
//No site domongo vá em Cluters -> connect -> connect your aplication

const  stringdb = `mongodb+srv://`;

if (stringdb.startsWith('<')){//if que vai verificar se você tirou o <>
  console.error("Você não configurou o MongoDB corretamente!");
  console.error("Dentro de backend/src/index.js há uma varivel stringdb que precisa ser preenchida");
  return;
}

mongoose.connect(stringdb,  {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true
    });

app.use(cors());
app.use(express.json());
app.use('/api', routes);
server.listen(3333); //porta que vai rodar a aplicação <localhost:3333>
