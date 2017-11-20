const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rimraf = require('rimraf');
const rename = require('gulp-rename');

/* Server */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/* Pug complite */
gulp.task('templates:compile', function buildHTML() {
    return gulp.src('source/template/index.pug')       //Точка входа
        .pipe(pug({
            pretty: true  // Вид кода в шаблоне - обычный (несжатый)
        }))
        .pipe(gulp.dest('build'))
});

/* Styles complite */
gulp.task('styles:compile', function () {
    return gulp.src('source/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('build'));
});

/* Delite */
gulp.task('clean', function del(cb) {
    return rimraf('build', cb);

})

/* Copy font */
gulp.task('copy:fonts', function () {
    return gulp.src('./source/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'));

})

/* Copy images */
gulp.task('copy:images', function () {
    return gulp.src('./source/images/**/*.*')
        .pipe(gulp.dest('build/images'));

})

/* Copy */
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));

/* Watchers*/
gulp.task('watch', function () {
    gulp.watch('source/template/**/*.pug', gulp.series('templates:compile'));
    gulp.watch('source/styles/**/*.scss', gulp.series('styles:compile'));

})

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('templates:compile', 'styles:compile', 'copy'),
    gulp.parallel('watch', 'browser-sync')
    )
);