// Instanciando módulos
import gulp from "gulp";
import { src, dest } from "gulp";

// import gulp from "gulp";
// const { src, dest } = gulp;
import htmlmin from "gulp-htmlmin";

import autoprefixer from "gulp-autoprefixer";
import * as sass from "sass";
import gulpSass from "gulp-sass";
const sassCompiler = gulpSass(sass);
import purgecss from "gulp-purgecss";
import cleanCSS from "gulp-clean-css";

import babel from "gulp-babel";
import uglify from "gulp-uglify";
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import { deleteAsync } from "del";
import zip from "gulp-zip";
import path from "path";

/**
 * Exclui todos os arquivos e diretórios do diretório 'dist'
 *
 * @return {Promise} Uma Promise que é resolvida quando todos os
 * arquivos e diretórios são excluídos.
 */

gulp.task("clean", () => {
  return deleteAsync(["dist/**"]);
});

/**
 * Copia o arquivo 'index.html' para o diretório 'dist'.
 *
 * @return {Stream} O fluxo de arquivos que foi copiado.
 */
gulp.task("copyHtml", () => {
  return src("index.html").pipe(dest("dist/scorm_open/"));
});


 
gulp.task('minifyHtml', () => {
  return gulp.src('dist/scorm_open/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/scorm_open/'));
});

/**
 * Copia os arquivos XML e XSD para o diretório 'dist/scorm_open/'.
 *
 * @return {Stream} O fluxo de arquivos que foi copiado.
 */
gulp.task('copyXml', () => {
  return gulp
    .src(['*.xml', '*.xsd'])
    .pipe(gulp.dest('dist/scorm_open/'))
});

/**
 * Compila minificando os arquivos JavaScript.
 *
 * @return {Stream} O fluxo de arquivos JavaScript compilados.
 */

gulp.task("buildJs", () => {
  return (
    gulp
      // Pasta de origem, pega todos os arquivos JS em todas as pastas
      .src("src/js/**/*.js")
      // Não funcionou com o materialize.js
      // .pipe(
      //   babel({
      //     presets: ["@babel/env"],
      //   })
      // )
      // Minifica arquivos JS.
      .pipe(uglify())
      // Pasta de destino
      .pipe(gulp.dest("dist/scorm_open/src/js"))
  );
});


/**
 * Otimiza imagens.
 *
 * @return {Stream} O fluxo de arquivos de imagem otimizados.
 */
gulp.task("buildImg", () => {
  return (
    gulp
      // Pasta de origem
      .src("src/img/**", {
        base: "src/img",
        encoding: false,
      })
      .pipe(
        imagemin([
          // Otimiza imagens GIF
          gifsicle({ interlaced: true, optimizationLevel: 3 }),
          // Otimiza imagens JPEG
          mozjpeg({ quality: 80, progressive: true }),
          // Otimiza imagens PNG
          optipng({ optimizationLevel: 5 }),
          // Otimiza imagens SVG
          svgo({
            plugins: [
              // Remove attribute 'viewBox' dos SVGs
              { name: "removeViewBox", active: true },
              // Limpa IDs dos SVGs
              { name: "cleanupIDs", active: false },
            ],
          }),
        ])
      )
      // Pasta de destino
      .pipe(gulp.dest("dist/scorm_open/src/img"))
  );
});




/**
 * Copia o arquivo 'aos.css' para o diretório 'dist/scorm_open/src/css'.
 *
 * @return {Promise<void>} Uma promessa que é resolvida quando o arquivo 'aos.css' é copiado para o diretório 'dist/src/css'.
 */
gulp.task("copyCss", () => {
  return src("src/css/aos.css")
  .pipe(dest("dist/scorm_open/src/css"));
});

/**
 * Compila os arquivos SCSS para CSS e aplica o Autoprefixer.
 *
 * @return {Promise<void>} Uma promessa que é resolvida quando os arquivos SCSS são compilados e o Autoprefixer é aplicado.
 */
gulp.task("buildScss", () => {
  return gulp
    .src(["src/scss/main.scss"])
    .pipe(
      sassCompiler({
        outputStyle: "expanded", // Primeiro compilar sem minificar
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("dist/scorm_open/src/css"));
});


/**
 * Aplica o PurgeCSS aos arquivos CSS no diretório 'dist/scorm_open/src/css'.
 *
 * O PurgeCSS remove todas as classes que não são usadas em nenhum arquivo HTML
 * ou JavaScript. Isso é útil para reduzir o tamanho dos arquivos CSS e melhorar
 * o desempenho da página.
 * 
 * Atenção que elementos que não carregam inicialmente na página terão seu CSS removidos! Uma solução é aplicar o CSS inline no HTML.
 *
 * @return {Promise<void>} Uma promessa que é resolvida quando o PurgeCSS é aplicado.
 */
gulp.task("purgecss", () => {
  return gulp
    .src("dist/scorm_open/src/css/*.css")
    .pipe(
      purgecss({
        // Arquivos HTML e JavaScript que contêm referências a classes CSS.
        content: ["*.html", "src/**/*.js"],
      })
    )
    .pipe(gulp.dest("dist/scorm_open/src/css"));
});


/**
 * Minifica os arquivos CSS no diretório 'dist/scorm_open/src/css'.
 *
 * @return {Promise<void>} Uma promessa que é resolvida quando os arquivos
 * CSS são minificados.
 */
gulp.task("minify-css", () => {
  // Seleciona todos os arquivos CSS no diretório 'dist/src/css'
  return (
    gulp
      .src("dist/scorm_open/src/css/*.css")
      // Minifica os arquivos CSS usando a biblioteca clean-css
      .pipe(cleanCSS({ compatibility: "ie8" }))
      // Especifica o diretório de destino para os arquivos minificados
      .pipe(gulp.dest("dist/scorm_open/src/css"))
  );
});


/**
 * Cria um arquivo zip contendo todos os arquivos do diretório 'dist'.
 *
 * @return {Promise} Uma Promise que é resolvida quando o arquivo zip é criado.
 */

gulp.task("zip", () => {
  // Obtém o nome do diretório pai
  const dirname = path.basename(path.resolve());
  return gulp
    .src("dist/scorm_open/**", {encoding: false})
    .pipe(zip(`${dirname}_SCORM-PKG.zip`))
    .pipe(gulp.dest("dist"));
});

let functionsNames = [
  "clean",
  "copyHtml",
  "minifyHtml",
  "copyXml",
  "buildJs",
  "copyCss",
  "buildScss",
  "purgecss",
  "minify-css",
  "buildImg",
  "zip",
];
// Executa de forma sequencial
gulp.task("default", gulp.series(functionsNames));
