const path = require('path');

module.exports = {
	mode: 'production',
	entry:{
		app: './src/index.js'
	},
	module: {
		rules: [
			{
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',
				options: {
					plugins: ['syntax-dynamic-import', '@babel/plugin-proposal-class-properties'],
					presets: [
						[
							'@babel/preset-env',
							{
								"targets":{
									"esmodules": true
								}
							}
						],
						"@babel/preset-react"
					]
				},

				test: /\.js$/
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: 'style-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},

	output: {
		chunkFilename: '[name].[chunkhash].mjs',
		filename: '[name].[chunkhash].mjs'
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
