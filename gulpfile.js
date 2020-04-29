const {src,dest} = require(`gulp`);
const {watch} = require(`gulp`);
const es = require(`gulp-eslint`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
const htmlCompress= require(`gulp-htmlmin`);
const cssCompress = require(`gulp-clean-css`);

let compressHTML = () => {
    return src(`html/*.html`).pipe(htmlCompress({
        collapseWhitespace: true})).pipe(dest(`temp/`));
};
let compressCSS = () => {
    return src(`css/*.css`).pipe(cssCompress({
        collapseWhitespace: true})).pipe(dest(`temp/css/`));
};
let verifyJS = () => {
    return src(`js/*.js`).pipe(es({fix:true})).pipe(es.format())
        .pipe(es.failAfterError())
        .pipe(dest(`temp/js/`));
};

let sync = () =>{
    browserSync({
        server: {
            baseDir: `./temp`
        }
    });

    watch([
        `./html/*.html`,
        `./js/**/*.js`,
        `./css/*.css`
    ]).on(`change`,compressHTML).on(`change`,compressCSS)
        .on(`change`,verifyJS)
        .on(`change`,reload);};

exports.default = compressHTML;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.sync = sync;
