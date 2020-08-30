# file-system-booking 🏨

## Sistema de archivos del proyecto de booking

## Desarrollo 👩‍💻

- Elimina el repositorio remoto con "git remote rm origin" y añade el de tu proyecto con "git remote add origin (url de tu repositorio)"

- Cuando descargues el código por primera vez utiliza el comando "npm install" para instalar las dependencias necesarias

- Ejecuta el comando "npm run" según la página que estés desarrollando

- Todo el código está y se va acrear en la carpeta src

- En los archivos index van todos los componentes de la pantalla

- En la carpeta pages/main está la vista principal que va a tener el usuario

- En la carpeta src/components van todos los componentes que se van a usar en todas las páginas

- Todas las páginas deben de incluir los default-styles.css que se encuantra en src/pasges/default-styles.css que solamente va a ir en el index-styles

- Para incluir css solo se importa al archivo JS que lo va a utilizar: import 'styles/style.css', en producción se crearán los archivos css necesarios

## Linters

- Se utiliza eslint y husky para mantener un estandar de código, si ese estandar no se cumple no se pueden hacer commits o push al repositorio.

## Extensiones de vsCode recomendadas: 👾

- https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme (Iconos)
- https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer (Colores)
- https://marketplace.visualstudio.com/items?itemName=jakob101.RelativePath (Ayuda a poner la ruta de los archivos)

## Extensiones necesarias: 👷‍♂️

- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode (Ayuda a formatear el código para que sea se vea mejor)
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint (Ayuda a estandarizar el código)
