const gulp         = require('gulp');
const runSequence  = require('run-sequence');
const babel        = require('gulp-babel');
const browserify   = require('browserify');
const sourceStream = require('vinyl-source-stream');
const buffer       = require('vinyl-buffer');
const sass         = require('gulp-sass');
const del          = require('del');

gulp.task('html', () => {
  return gulp.src('app/html/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
  return gulp.src('app/scss/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('js', () => {
  return browserify('app/js/index.js').bundle()
    .pipe(sourceStream('index.js'))
    .pipe(buffer())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('app/html/index.html', ['html']);
  gulp.watch('app/scss/index.scss', ['sass']);
  gulp.watch('app/js/index.js', ['js']);
});

gulp.task('clean:dist', () => {
  return del.sync('dist');
});

gulp.task('build', (callback) => {
  runSequence('clean:dist', ['html', 'sass', 'js'], callback);
});
