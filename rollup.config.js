// rollup.config.js

import copy from 'rollup-plugin-copy';

export default {
	input: 'src/js/main.js',
	output: {
		file: 'dist/js/bundle.js',
		format: 'cjs'
	},
	plugins: [
		copy({
			targets: [{
				src: ['src/*', '!src/js/**', '!src/*.html'],
				dest: 'dist'
			}, {
				src: 'src/*.html',
				dest: 'dist',
				transform: (contents) => contents.toString().replace(
					'type="module" src="js/main.js"',
					'src="js/bundle.js"'
				)
			}]
		})
	]
};
