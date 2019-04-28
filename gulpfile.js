const {series, parallel, src, dest} = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

const clean = cb => {
    del.sync(['./dist']);
    cb();
};

const css = cb => {
    src('src/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(dest('dist'));
    cb();
};

const javascript = cb => {
    src('src/**/*.js')
        .pipe(babel())
        .pipe(dest('dist'));
    cb();
};

exports.default = series(clean, parallel(css, javascript));