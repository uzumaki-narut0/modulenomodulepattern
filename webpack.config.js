const webpack = require('webpack');
const webpackWithEsModule = require('./webpack.esmodule.config')
const webpackWithOutEsModule = require('./webpack.nomodule.config')

module.exports = [
	webpackWithEsModule,
	webpackWithOutEsModule
]