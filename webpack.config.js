var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry:'./src/lib/index.js',
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'',
        filename:'vue-toast-m.js',
        libraryTarget: "umd",
        library: 'VueToastM'
    },
    module:{
        rules:[
            {
               test:/\.js$/,
               loader:'babel-loader',
               include:path.join(__dirname,'src'),
               exclude:/node_modules/,
               query:{
                   presets:['env']
               }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                include:path.join(__dirname,'src'),
                exclude:/node_modules/,
                options:{
                    loaders:{
                        scss:'style-loader!css-loader!postcss-loader!sass-loader'
                    }
                }
            }
        ]
    }
}