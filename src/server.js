// importar dependencia
const express = require('express'); // chama os pacotes/dependencias
const path =require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express();
server
// utilizar body do request
.use(express.urlencoded({extended: true}))
//utilizando os arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.get('/', pages.index)
.post('/save-orphanage',pages.saveOrphanage)

// ligar os servidor
server.listen(5500);