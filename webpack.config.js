var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var merge = require('webpack-merge');
var allFilenamesExceptJavaScript = /\.(?!js(\?|$))([^.]+(\?|$))/;
var projectRoot = path.resolve(__dirname, '../');

var assetsPath = function (_path) {
    return path.posix.join('static', _path)
}

// Configuration in common to both client-side and server-side bundles
var sharedConfig = {
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../ClientApp'),
            'assets': path.resolve(__dirname, '../ClientApp/assets'),
            'components': path.resolve(__dirname, '../ClientApp/components'),           
            vue: 'vue/dist/vue.js' //'vue$': 'vue/dist/vue.common.js' 
        }
    },
    output: {
        filename: '[name].js',
        publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            // { test: /\.ts$/, include: /ClientApp/, loader: 'ts', query: { silent: true } },
            { test: /\.js$/, loader: 'babel', include: projectRoot, exclude: /node_modules/ },
            { test: /\.json$/, loader: 'json' },
            { test: /\.html$/, loader: 'vue-html' }, //{ test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: "style-loader!css-loader" }, //{ test: /\.css$/, loader: 'to-string!css' },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            // { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url', query: { limit: 25000 } }
            { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, loader: 'url-loader?limit=100000' },
            //{ test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url', query: { limit: 10000, name: assetsPath('fonts/[name].[hash:7].[ext]') } }
        ]
    }
};

// Configuration for client-side bundle suitable for running in browsers
var clientBundleConfig = merge(sharedConfig, {
    //entry: { 'main-client': './ClientApp/boot-client.ts' },
    entry: {
        // The loader will follow all chains of reference from this entry point...
        mainclient: ['./ClientApp/main.js']
    },
    output: { path: path.join(__dirname, './wwwroot/dist') },
    devtool: isDevBuild ? 'inline-source-map' : null,
    plugins: [
        //new webpack.DllReferencePlugin({
        //    context: __dirname,
        //    manifest: require('./wwwroot/dist/vendor-manifest.json')
        //})
    ].concat(isDevBuild ? [] : [
        // Plugins that apply in production builds only
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ])
});

// Configuration for server-side (prerendering) bundle suitable for running in Node
var serverBundleConfig = merge(sharedConfig, {
    //entry: { 'main-server': './ClientApp/boot-server.ts' },
    entry: {
        // The loader will follow all chains of reference from this entry point...
        mainserver: ['./ClientApp/main.js']
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, './ClientApp/dist')
    },
    target: 'node',
    devtool: 'inline-source-map',
    externals: [nodeExternals({ whitelist: [allFilenamesExceptJavaScript] })] // Don't bundle .js files from node_modules
});

module.exports = [clientBundleConfig, serverBundleConfig];
