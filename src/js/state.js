// state.js

export default {
    position: null,
    init: function(key) {
        var value = null;
        try {
            // try to get from local storage
            value = JSON.parse(localStorage.getItem(key));
            if(!value) {
                throw 'nope';
            }
        } catch {
            // else try to get from config
            // and update local storage
            value = config[key];
            if(value) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        }
        if(value) {
            // either way update state
            this[key] = value;
        }
    }
};
