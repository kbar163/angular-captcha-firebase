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

## Exponiendo el proyecto para pruebas remotas

Para exponer el servidor de prueba a acceso remoto, use una herramienta de tunneling como Ngrok. Para instlar Ngrok en windows, descargue el zip en el siguiente enlance [Ngrok](https://ngrok.com/download) y ejecute ngrok.exe. Esto instalara Ngrok en su maquina local. Es importante agregar Ngrok a PATH para poder ejecutarlo desde una terminal en cualquier directorio. Se recomienda seguir los pasos de instalacion detallados en el siguiente enlance [Instalacion Ngrok](https://www.c-sharpcorner.com/article/installing-ngrok-on-windows/).

Seguidamente, para poder crear un link de acceso remoto a su servidor de pruebas local con Ngrok, abra una terminal y ejecute el comando `ngrok http <PORT>`
Remplace <PORT> por el numero de puerto en el que se ejecuta su servidor de pruebas, por default, los proyectos de angular ejecutan el servidor de pruebas en el puerto
4200, en el caso de este proyecto el comando `ngrok http 4200` creara un Forwarding link que puede compartir para hacer uso externo. NO SE RECOMIENDA COMPARTIR el link
publicamente ya que Ngrok esta exponiendo su maquina local a traves de un tunel.


