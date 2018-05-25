# Geeksmotion Webpack 4 boilerplate
Ambiente de desarrollo para diseño de sitios estáticos. Este boilerplate utiliza Webpack 4 para automatizar procesos. Contiene preconfigurados: Bootstrap 3, JQuery, Font Awesome, eslint (airbnb), babel, scss, entre otros.

## Instrucciones

1. Clonar este respositorio
2. Ejecutar `npm install` para instalar las dependencias
3. Ejecutar `npm run dev` para correr servidor de desarrollo
4. Una nueva ventana de navegacion abrirá automáticamente en localhost:8080/
5. Ejecutar `npm run build`para crear los archivos dentro de una carpeta llamada `dist`.
6. Ejecutar `npm run build:prod`para crear los archivos *minificados* para producción dentro de una carpeta llamada `dist`.


## Requerimientos

Tener instalado [NodeJS](https://nodejs.org/es/) versión 6 o superior

#### Changelog

###### XX/05/2018
1. Mover app.js desde la raiz hacia assets/js/
2. Corregir falla en comando "npm run build:prod" dentro de Package.json
3. Cambiar a auntoinject: false en Webpack Config
4. Agregar image-webpack-loader

###### 25/05/2018
1. First Commit