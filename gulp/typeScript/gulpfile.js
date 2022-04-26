const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const { isExportSpecifier } = require('typescript')
const tsProject = ts.createProject('ts_config.json')

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)