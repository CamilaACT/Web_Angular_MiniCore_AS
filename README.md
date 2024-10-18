# Web Angular MiniCore AS

Este proyecto fue desarrollado con [Angular CLI](https://github.com/angular/angular-cli). Proporciona una interfaz frontend que interactúa con una API backend en ASP.NET Core.

## Tabla de Contenidos

1. [Servidor de desarrollo](#servidor-de-desarrollo)
2. [Generación de componentes](#generación-de-componentes)
3. [Compilación](#compilación)
4. [Pruebas unitarias](#pruebas-unitarias)
5. [Pruebas end-to-end](#pruebas-end-to-end)
6. [Deploy](#deploy).
7. [Conexión con la API backend](#conexión-con-la-api-backend)


## 1. Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias cualquiera de los archivos fuente.

## 2. Generación de componentes

Ejecuta `ng generate component nombre-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 3. Compilación

Ejecuta `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## 4. Pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## 5. Pruebas end-to-end

Ejecuta `ng e2e` para ejecutar las pruebas end-to-end mediante la plataforma de tu elección. Para usar este comando, primero necesitas añadir un paquete que implemente capacidades de pruebas end-to-end.

## 6. Deploy
El deploy del proyecto se encuentra en:

https://regal-hotteok-b7b9ef.netlify.app/

## 7. Conexión con la API backend



Este proyecto está diseñado para interactuar con una API backend desarrollada en ASP.NET Core. Asegúrate de que la API esté ejecutándose en un servidor antes de interactuar con ella desde la aplicación Angular. 



La configuración de las rutas para la API se puede ajustar en el archivo `environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api' // Cambiar a la URL de la API en producción
};



