const gulp              = require('gulp');
const sass              = require('gulp-sass');
const sourcemaps        = require('gulp-sourcemaps');
const concat            = require('gulp-concat');
const autoprefixer      = require('gulp-autoprefixer');
const cleanCSS          = require('gulp-clean-css');
const uglify            = require('gulp-uglify');
const browserSync       = require('browser-sync').create();
const panini            = require('panini');
const imagemin          = require('gulp-imagemin');


const sassFiles = [
    './src/sass/styles.sass'
]


const jsFiles = [
    './src/js/main.js'
] 

const htmlFiles = [
    './src/tpl/*.html'
]

const imgFiles = [
    './src/img/**'
]


function styles() {
    return gulp.src(sassFiles)
    .pipe(concat('style.sass'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/css'))

    .pipe(browserSync.stream());
};

function scripts() {
    return gulp.src(jsFiles)
    .pipe(concat('script.js'))

    .pipe(uglify())

    .pipe(gulp.dest('./build/js'))

    .pipe(browserSync.stream());
};

function html() {
    panini.refresh();
    return gulp.src(htmlFiles)
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/tpl/layouts/',
            partials: 'src/tpl/partials/',
            helpers: 'src/tpl/helpers/',
            data: 'src/tpl/data/'
        }))
        .pipe(gulp.dest('./build'))
        
        .pipe(browserSync.stream());
        
};

function imgmin(){
    return gulp.src(imgFiles)
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 80, progressive: true}),
        imagemin.optipng({optimizationLevel: 2}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
        ]
    })
    ]))
        .pipe(gulp.dest('./build/img'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
    gulp.watch('./src/sass/*.sass', styles,  browserSync.reload)
    gulp.watch('./src/js/**/*.js', scripts, browserSync.reload)
    gulp.watch('./src/img/**', imgmin,  browserSync.reload)
    gulp.watch('./src/tpl/**/*.html').on('change', html, browserSync.reload);

}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('imgin', imgmin);
gulp.task('html', html);
gulp.task('watch', watch);
gulp.task('build', gulp.parallel(html, styles, scripts, imgmin));
gulp.task('dev', gulp.series('build', 'watch'));