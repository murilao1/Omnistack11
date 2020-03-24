const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Busca uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?"
 * Route params: Parâmetros utilizados para identificar recursos
 * Ruquest Body: Corpo da requisição, utilizado para criar recursos
 */

/**
 * SQL: MySQL, SQLite, PostrgreSQL, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where('')
 */

app.listen(3333)