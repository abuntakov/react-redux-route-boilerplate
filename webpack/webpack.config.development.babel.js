import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.config'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const rootPath = path.resolve(__dirname, '../')
const srcPath = path.resolve(rootPath, 'src')
const assetsPath = path.resolve(rootPath, 'build')

const config = {
	devtool: 'cheap-module-eval-source-map',

	performance: { hints: false },

	entry: {
		index: [
			//`webpack-hot-middleware/client?path=${host}:${port}/__webpack_hmr`,
			//'react-hot-loader/patch',
			baseConfig.entry.index,
		],
	},

	output: {
		filename:      '[name].js',
		chunkFilename: '[name].js',
	},

	devServer: {
		contentBase: path.resolve(rootPath, 'build'),
		port:        3000,
	},

	plugins: [
		//new webpack.HotModuleReplacementPlugin(),
		//new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			},
		}),
		new HtmlWebpackPlugin({
			title: 'Index app',
			template: path.resolve(__dirname, 'index.ejs'),
		}),
	],
}

export default merge(baseConfig, config)
