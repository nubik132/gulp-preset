import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/index.html`, //поменять
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}