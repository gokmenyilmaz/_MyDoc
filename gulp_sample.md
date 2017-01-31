vscode da commandda task run diyip çalıştırıyon
````
const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');


gulp.task('clean', function () {
  return del('dist/**/*');
});


gulp.task('compile', ['clean'], function () {
  return gulp
    .src('ng2_app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/ng2_app'));
});

gulp.task('templatehtml',function () {
  return gulp
    .src('ng2_app/**/*.html')
     .pipe(gulp.dest('dist/ng2_app'));
});

gulp.task('templatecss',function () {
  return gulp
    .src('ng2_app/**/*.css')
     .pipe(gulp.dest('dist/ng2_app'));
});




gulp.task('copy:assets', ['clean','compile','templatehtml','templatecss'], function() {
  return gulp.src(['index.html', 'styles.css','systemjs.config.js'])
    .pipe(gulp.dest('dist'))
});
````
