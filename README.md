# file-system-booking 🏨

## Sistema de archivos del proyecto de booking

## Desarrollo 👩‍💻

### Inicio

- Cuando descargues el código por primera vez utiliza el comando "npm install" para instalar las dependencias necesarias

### Comandos

    	Ejecuta el comando "npm run start" para iniciar el servidor de desarrollo

    	 Ejecuta el comando "npm run build" para generar los archivos de producción

    	 Ejecuta el comando "npm run lint" para que eslint revise tu código

### Carpetas

- Todo el código frontend está en la carpeta src

- En los archivos .js de cada carpeta van todos los componentes

- La carpeta src/pages/inicio tiene la página principal

- En la carpeta src/components los componentes están divididos según la página

- En la carpeta src/components/common van todos los componentes que se van a usar en todas las páginas

### Servidor de desarrollo

- Para moverte entre las diferentes páginas durante el desarrollo: La página de inicio no está en la raíz, cada página está dento de una carpeta con su mismo nombre, por lo que si quieres ir de la página de inicio a login la url sería:

  /login/login.html

### Estilos

- Todas las páginas deben de incluir los default-styles.css que se encuentran en src/styles/default-styles.css

- Para incluir css solo se importa al archivo JS que lo va a utilizar

### Linter

- Se utiliza eslint y husky para mantener un estandar de código, si ese estandar no se cumple no se pueden hacer commits

### Github

- Recuerda hacer siempre pull request antes de hacer un push

## Extensiones de vsCode recomendadas: 👾

- https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme (Iconos)
- https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer (Colores)
- https://marketplace.visualstudio.com/items?itemName=jakob101.RelativePath (Ayuda a poner la ruta de los archivos)

## Extensiones necesarias: 👷‍♂️

- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode (Ayuda a formatear el código para que sea se vea mejor)
- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint (Ayuda a estandarizar el código)
