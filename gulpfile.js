const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){
    return gulp.src([
        'node_modules/bootstrap/scss/bootstrap.scss',
        'src/scss/*.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Move the javascript files into our src/js folder
gulp.task('js', function(){
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js', 
        'node_modules/jquery/dist/jquery.min.js', 
        'node_modules/popper.js/dist/umd/popper.min.js',
    ])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
});

// Static server + watching scss/html files
gulp.task('serve', ['sass'], function(){

    browserSync.init({
        server: "./src"
    });

    gulp.watch([
        'src/scss/*.scss',
        'src/scss/abstract/*.scss',
        'src/scss/base/*.scss',
        'src/scss/components/*.scss',
        'src/scss/layout/*.scss',
        'src/scss/pages/*.scss'
    ], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Move css file fron font-awesome into our src/css folder
gulp.task('font-awesome', ['fonts'], () => {
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('src/css'));
});

// Move font files from font-awesome into src/fonts folder
gulp.task('fonts', () => {
    return gulp.src([
        'node_modules/font-awesome/fonts/*',
    ])
    .pipe(gulp.dest('src/fonts'));
});

// Copy slick folder into src/

gulp.task('slick', ['slick-fonts'], () => {
    return gulp.src('node_modules/slick-carousel/slick/*')
    .pipe(gulp.dest('src/slick'));
});

gulp.task('slick-fonts', () => {
    return gulp.src('node_modules/slick-carousel/slick/fonts/*')
    .pipe(gulp.dest('src/slick/fonts'));
});


gulp.task('default', ['js', 'serve', 'font-awesome', 'slick']);
