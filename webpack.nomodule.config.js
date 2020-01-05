const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
								"useBuiltIns": "usage",
								"corejs": 3,
								"targets":{
									"esmodules": false
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

    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns : ['*.js']
          })
    ],

	output: {
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[chunkhash].js'
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