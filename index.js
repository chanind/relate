/* jshint node:true */
'use strict';

// Expose `React` as a global, because the RelateMixin assumes it's global.
var oldReact = global.React;
global.React = require('react');

// Require the lib to `Relate`. This module will be
// ignored when bundling for the browser with Browserify/Webpack.
var Relate = require('./dist/relate');

exports = module.exports = Relate;

// Put back `global.React` to how it was.
if (oldReact) {
    global.React = oldReact;
} else {
    // IE < 9 will throw when trying to delete something off the global object,
    // `window`, so this does the next best thing as sets it to `undefined`.
    try {
        delete global.React;
    } catch (e) {
        global.React = undefined;
    }
}