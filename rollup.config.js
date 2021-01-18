// rollup.config.js

import copy from 'rollup-plugin-copy';

export default {
    input: 'src/js/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [copy({
        targets: [{
            src: ['src/css/*', 'src/icon/*', 'src/img/*', 'src/meta/*', 'src/*.ico'],
            dest: 'dist'
        }, {
            src: ['src/*.html', 'src/*.webmanifest', 'src/*.xml', 'src/*.js'],
            dest: 'dist',
            transform: (contents) => {
                return contents.toString()
                .replace(/css\//g, '')
                .replace(/img\//g, '')
                .replace('type="module" src="js/main.js"', 'src="bundle.js"');
            }
        }]
    })]
};
