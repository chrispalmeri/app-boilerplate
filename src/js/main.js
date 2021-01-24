// main.js

import config from './config.js';
import state from './state.js';

// so you can change stuff in the console or other scripts
// it is not necessary once bundled though
window.config = config;

// initialize state
state.init('position');

// need to test this works as expected vs old 'unload'
window.addEventListener('pagehide', function() {
    // write storage
    localStorage.setItem('position', JSON.stringify(state.position));
});


if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('worker.js');
}
