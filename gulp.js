const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('./imgages/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'))
);
