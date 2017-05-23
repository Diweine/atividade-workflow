var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

/*
 * Variáveis
 */
// Diretório de origem dos arquivos sass
var scssFiles = './source/scss/*.scss';

//Diretórios destino dos arquivos CSS
var cssDest = './dist/css';

// Opções para o arquivo em Desenvolvimento
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Opções para o arquivo em Produção
var sassProdOptions = {
  outputStyle: 'compressed'
}


/*
 * Tasks
 */
// Task 'sassdev' - roda com o comando 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Task 'sass_p_base' - roda com o comando 'gulp sass_p_base'
gulp.task('sass_p_base', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('base.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'sass_p_layout' - roda com o comando 'gulp sass_p_layout'
gulp.task('sass_p_layout', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('layout.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'sass_p_style' - roda com o comando 'gulp sass_p_style'
gulp.task('sass_p_style', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'watch' - Roda com o comando 'gulp watch'
gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sassdev', 'sass_p_base', 'sass_p_layout', 'sass_p_style']);
});

// Default task - roda com o comando 'gulp'
gulp.task('default', ['sassdev', 'sass_p_base', 'sass_p_layout', 'sass_p_style', 'watch']);