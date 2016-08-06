const gulp         = require('gulp');
const runSequence  = require('run-sequence');
const babel        = require('gulp-babel');
const jshint       = require('gulp-jshint');
const jasmineTests = require('gulp-jasmine');
const browserify   = require('browserify');
const sourceStream = require('vinyl-source-stream');
const buffer       = require('vinyl-buffer');
const sass         = require('gulp-sass');
const del          = require('del');

gulp.task('build:html', () => {
  return gulp.src('app/html/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('build:sass', () => {
  return gulp.src('app/scss/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('build:js', () => {
  return browserify('app/js/index.js').bundle()
    .pipe(sourceStream('index.js'))
    .pipe(buffer())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('dist'));
});

gulp.task('jshint:app', () => {
  return gulp.src(['app/js/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:tests', () => {
  return gulp.src(['tests/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint:gulpfile', () => {
  return gulp.src('gulpfile.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('jshint', ['jshint:gulpfile', 'jshint:app', 'jshint:tests']);

gulp.task('watch', () => {
  gulp.watch('app/html/index.html', ['build:html']);
  gulp.watch('app/scss/index.scss', ['build:sass']);
  gulp.watch('app/js/index.js', ['build-and-test']);
  gulp.watch('tests/**/*-test.js', ['jshint:tests', 'test']);
  gulp.watch('gulpfile.js', ['jshint:gulpfile']);
});

gulp.task('clean:dist', () => {
  return del.sync('dist');
});

gulp.task('build', (callback) => {
  runSequence('clean:dist', ['build:html', 'build:sass', 'jshint', 'build:js'], callback);
});

gulp.task('test', () => {
  return gulp.src('tests/**/*-test.js')
    .pipe(jasmineTests());
});

gulp.task('build-and-test', (callback) => {
  runSequence(['jshint:app', 'jshint:tests', 'build:js'], 'test', callback);
});
