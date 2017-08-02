import path from 'path'
import webpack from 'webpack' // eslint-disable-line
import merge from 'webpack-merge'
import baseConfig from './webpack.config'

import HtmlWebpackPlugin from 'html-webpack-plugin' // eslint-disable-line

const rootPath = path.resolve(__dirname, '../')
const assetsPath = path.resolve(rootPath, 'build')

const babelOptions = {
	presets: [
		'react',
		['es2015', { "loose" : true, modules: false }],
		'stage-0',
	],
	plugins: [
		['transform-runtime'],
		['add-module-exports'],
	],
}

const config = {
	devtool: 'cheap-module-eval-source-map',

	performance: { hints: false },

	entry: {
		index: [
			'react-hot-loader/patch',
			baseConfig.entry.index,
		],
	},

	module: {
		rules: [{
			test:    /\.jsx?$/,
			exclude: /node_modules\/.*/,

			use: [
				{
					loader: 'react-hot-loader/webpack',
				},
				{
					loader:  'babel-loader',
					options: babelOptions,
				},
			],
		}],
	},

	output: {
		filename:      '[name].js',
		chunkFilename: '[name].js',
	},

	devServer: {
		contentBase: assetsPath,
		port:        3000,
		hot:         true,
	},

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			},
		}),
		new HtmlWebpackPlugin({
			title:    'Index app',
			template: path.resolve(__dirname, 'index.ejs'),
		}),
	],
}

//console.log(JSON.stringify(merge.smart(baseConfig, config)))

export default merge(baseConfig, config)
