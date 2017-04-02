'use strict';

const browserSync = require("browser-sync");
const gulp = require('gulp');
const nodemon = require('nodemon');

gulp.task('default', ['serve']);

gulp.task('serve', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:8080/src",
        files: ['./src/**/*.html', './src/**/**/*.js'],
        browser: "safari" || "google chrome",
        port: 3000
    });
    browserSync.reload
});

gulp.task('nodemon', function(cb) {
    var started = false;
    return nodemon({
        script: 'node_modules/.bin/webpack-dev-server'
    }).on('start', function() {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});
