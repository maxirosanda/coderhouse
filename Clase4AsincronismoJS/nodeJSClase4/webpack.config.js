const path = require('path');

module.exports = {
    entry: [
        './src/39_rxjs_observables_multiple_push.ts', 
        // './src/42_rxjs_observer_suscripcion.ts',
        // './src/46_rxjs_operadores.ts',
        // './src/49_rxjs_fromEvent_filter.ts',
        // './src/54_clase4_ejerc_3.ts',
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};