import path from 'path'
import webpack from 'webpack'

const rootPath = path.resolve(__dirname, '../')
const srcPath = path.resolve(rootPath, 'src')
const assetsPath = path.resolve(rootPath, 'build')
const mainModulesPath = path.resolve(rootPath, 'node_modules')

const config = {
	context: srcPath,

	entry: {
		index: './index',
	},

	output: {
		publicPath: '/assets/',
		path:       assetsPath,
	},

	resolve: {
		modules:    [mainModulesPath],
		extensions: ['.js', '.jsx'],
		alias: {
      	app: path.resolve(rootPath, 'src'),
		},
	},

	// module: {
	// 	rules: [{
	// 		test:    /\.jsx?$/,
	// 		exclude: /node_modules\/.*/,
	// 		loader:  'babel-loader',
	// 	}],
	// },

	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',

			minChunks: module => (
				module.context && module.context.indexOf('node_modules') !== -1
			),
		}),
	],
}

export default config
