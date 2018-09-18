var gulp = require('gulp');
var smushit = require('gulp-smushit');

gulp.task('default', function () {
    return gulp.src('images/*')
        .pipe(smushit({
            verbose: true
        }))
        .pipe(gulp.dest('smushit-img'));
});
