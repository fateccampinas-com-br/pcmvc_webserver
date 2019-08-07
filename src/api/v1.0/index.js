/**
 * api/v1.0/index.js
 * 
 * @description handler de todos os requests para a v1.0 da API
 */

const express = require('express')

const ApiV10Handler = express()
ApiV10Handler.use(express.Router())

/**
 * @description /telemetry é a parte da API relacionada aos dados
 * de telemetria recebida dos módulos de campo (ex: o arduino), a API suporta
 * inserir dados, com um método POST, e colher dados, com um método GET
 */
ApiV10Handler.route('/telemetry')
	.get(require('./gather_telemetry'))
	.post(require('./insert_telemetry'))

module.exports = ApiV10Handler