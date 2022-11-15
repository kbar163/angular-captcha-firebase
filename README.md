# AngularCaptcha

NOTA: Para poder clonar cualquier proyecto alojado en GitHub a su maquina local, es necesario tener instalado Git en su computador, para Windows descargue el instalador en el siguiente enlace [Git](https://gitforwindows.org/)

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

Para todos los detalles de como instalar angular en su computador, visite el siguiente enlace [Instalar Angular](https://angular.io/guide/setup-local)

## Instrucciones de Instalacion del proyecto

Primero, instale Nodejs, esto es un requisito para poder instalar Angular, descargue el ejecutable de instalacion desde el siguiente enlace [Instalar Nodejs](https://nodejs.org/en/download/).

![image](https://user-images.githubusercontent.com/25675816/202011108-ba6aa0c3-f746-4efb-9bea-1e25db129c3d.png)

Despues de seguir el instalation wizard, puede comprobar su instalacion de angular ejecutando el comando `node -v` en una terminal, esto deberia de mostrarle le numero de version de Nodejs instalada.


Seguidamente, instale Angular. Para esto es necesario abrir una terminal y ejecutar el comando `npm install -g @angular/cli`. Para confirmar que angular fue instalado correctamente, ejecute el comando `ng version` el cual deberia de mostrar una leyenda similar a la presentada a continuacion.

![image](https://user-images.githubusercontent.com/25675816/202011970-d204e4ce-c32c-436c-9aa8-cbb8a1a69b65.png)


## Servidor de desarrollo

Clone el repostiorio a su maquina local e instale las dependencias del proyecto, para esto abra una terminal en el folder del proyecto y ejecute el comando `npm install`. Ejecute `ng serve` en una terminal en el folder del proyecto para girar un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicacion se recargara automaticamente si hace algun cambio en el codigo fuente.

## Code scaffolding

Ejecute `ng generate component component-name` para generar un nuevo componente. Tambien puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Ejecute `ng build` para construir el proyecto. Los artefactos construidos se guardaran en el directorio `dist/`.

