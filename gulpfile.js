const {src,dest} = require(`gulp`);
const {watch} = require(`gulp`);
const es = require(`gulp-eslint`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
const htmlCompress= require(`gulp-htmlmin`);
const cssCompress = require(`gulp-clean-css`);
const styleLint = require(`gulp-stylelint`);
const babel = require(`gulp-babel`);
const htmlValidator = require(`gulp-w3c-html-validator`);




/*Compress Whitespace of HTML*/
let compressHTML = () => {
    return src(`html/*.html`).pipe(htmlCompress({
        collapseWhitespace: true}))
        .pipe(dest(`temp/`));
};
/*HTML Validator*/
let validateHTML = () =>{
    return src(`html/*.html`)
        .pipe(htmlValidator())
        .pipe(htmlValidator.reporter())
        .pipe(compressHTML());
};
/*Compress Whitespace of CSS*/
let compressCSS = () => {
    return src(`css/*.css`).pipe(cssCompress({
        collapseWhitespace: true})).pipe(dest(`temp/css/`));
};
/* Verification of JS*/
let verifyJS = () => {
    return src(`js/*.js`).pipe(es({fix:true})).pipe(es.format())
        .pipe(es.failAfterError())
        .pipe(babel({
            presets: [`@babel/preset-env`]
        }))
        .pipe(dest(`temp/js/`));
};
/* Verification of CSS */
let verifyCSS = () => {
    return src(`css/*.css`).pipe(styleLint({
        fix: true,
        failAfterError: true,
        reporters: [
            {formatter: `string`, console: true},
            {formatter: `json`, save: `report.json`}
        ]
    })).pipe(compressCSS());
};
/*
Synchronization of modified files...
Development Track
 */
let dev = () =>{
    verifyCode();
    browserSync({
        server: {
            baseDir: `./temp`
        }
    });

    watch([
        `./html/*.html`,
        `./js/**/*.js`,
        `./css/*.css`
    ]).on(`change`,verifyJS)
        .on(`change`,verifyCSS)
        .on(`change`,validateHTML)
        .on(`change`,reload);};

let build = () => {
    return src(`temp/js/*.js`)
        .pipe(dest(`prod/js/`)),
    src(`temp/*.html`)
        .pipe(dest(`prod/`)),
    src(`temp/css/*.css`).pipe(dest(`prod/css/`));
};

/*
Function that will call all verification functions
 */
let verifyCode = () =>{
    return verifyCSS(),verifyJS(),validateHTML();
};

exports.default = verifyCode;
exports.verifyCode = verifyCode;
exports.dev = dev;
exports.build = build;

