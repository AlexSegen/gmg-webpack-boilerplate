# Geeksmotion Webpack 4 boilerplate
Ambiente de desarrollo para diseño de sitios estáticos. Este boilerplate utiliza Webpack 4 para automatizar procesos. Contiene preconfigurados: Bootstrap 3, JQuery, Font Awesome, eslint (airbnb), babel, scss, entre otros.

## Instrucciones

1. Clonar este respositorio
2. Ejecutar `npm install` para instalar las dependencias
3. Ejecutar `npm run dev` para correr servidor de desarrollo. Una nueva ventana de navegacion abrirá automáticamente en http://localhost:3000/ (configurable)
4. Ejecutar `npm run build`para generar los archivos dentro de una carpeta llamada `dist`.
5. Ejecutar `npm run build:prod`para generar los archivos *minificados* para producción dentro de una carpeta llamada `dist`.


## Requerimientos

Tener instalado [NodeJS](https://nodejs.org/es/) versión 8 o superior

#### Changelog

###### 24/07/2018
1. Added buttons variants to /page.html
2. Added button "border" variant for dark and light backgrounds
3. Added bg-dark and bg-light classes to _bg-theme.scss
4. Added text-dark and text-light classes to _text-theme.scss
5. Added more Margin and Padding helpers to _spacing.scss
6. Updated button "border" variants. (Add new class ".border-dark" for light backgrounds)

###### 27/06/2018
1. Added Web Elements in /page.html
2. Added bootstrap-sass (Now bootstrap elements extends theme colors in _settings.scss)
3. Updated colors variables in _settings.scss
4. Updated colors variables in _buttons.scss
5. Updated package.json declared dependencies

###### 04/06/2018
1. Fix style-loader, file-loader configuration
2. Remove Yarn file
###### 28/05/2018
1. Mover app.js a assets/js/
2. Corregir falla en comando "npm run build:prod" dentro de Package.json
3. Cambiar a auntoinject: false en Webpack Config
4. Agregar image-webpack-loader

###### 25/05/2018
1. First Commit