# FEVI - Aplicación Ionic (Android e iOS)


## Getting started

Para poder ejecutar y compilar el proyecto, será necesario tener instalado:

- Node v18.16.0 (compatible con Ionic v7)
- Ionic CLI
- Capacitor 5.0.0

Adicionalmente, para la compilación de las aplicaciones, será necesario:

- Android: Android SDK Tools, Java JDK, Gradle. Mas información en https://ionicframework.com/docs/installation/android
- iOS: Xcode. Mas información en https://ionicframework.com/docs/installation/ios

Ejemplo de configuración válida para la compilación y ejecución de la aplicación:

```sh
$ `ionic info`

Ionic:

   Ionic CLI                     : 7.1.1 (/usr/local/lib/node_modules/@ionic/cli)
   Ionic Framework               : @ionic/angular 7.3.0
   @angular-devkit/build-angular : 16.2.0
   @angular-devkit/schematics    : 16.2.0
   @angular/cli                  : 16.2.0
   @ionic/angular-toolkit        : 9.0.0

Capacitor:

   Capacitor CLI      : 5.2.3
   @capacitor/android : 5.2.3
   @capacitor/core    : 5.2.3
   @capacitor/ios     : not installed

Utility:

   cordova-res : 0.15.4
   native-run  : 1.7.2

System:

   NodeJS : v18.16.0 (/usr/local/bin/node)
   npm    : 9.6.6
   OS     : macOS Unknown

```

## Installation

```sh
$ git clone 
$ cd app
(remove `package-lock.json`)
$ `npm i`
```

## Program in browser

```sh
$ npm run ng:ssl
```

## Add platforms
```sh
$ npm run add:platforms
```

## Building for source
### Generating APKs/IPAs
Platforms:
* *android*
* *ios*

Environments:
* *dev* (Desarrollo)
* *pre* (Preproduction) - No operativo
* *prod* (Production)

```sh
$ npm run ion:build:<platform>:<environment>
```

## Resources (app icon and splash screens)

```sh
$ npm run resources
```

## Update Versions
Cambiar el número de version en el *package.json* y ejecutar:

```sh
$ npm run ion:release
```

- Para la primera vez tener en cuenta, para android y para ios:

* Android
`android/app/build.gradle`

versionCode: this is the version you have to increment every time you submit a new version to google play. It’s an integer.
versionName: this is the visible version that will be displayed in google play. It’s a string.

Es necesario que las variables se encuentren en este formato:

```sh
$ versionCode 1000000 // MAYOR{1+}MINOR{2}PATCH{2}BUILD{2}
$ versionName "1.0.0"
```

* iOS
`ios/App/App.xcodeproj/project.pbxproj`
Es necesario que las variables se encuentren en este formato:

```sh
$ MARKETING_VERSION = 1.0.0;
$ CURRENT_PROJECT_VERSION = 1.0.0.0;
```

## Informacion

* sqlite

plugin:
`https://github.com/capacitor-community/sqlite#web-quirks`

teoria:
`https://github.com/capacitor-community/sqlite/blob/master/docs/Ionic-Angular-Usage.md`

ejemplo:
`https://github.com/jepiqueau/ionic7-angular-sqlite-starter`


## Instructions

## Despliegue

## ERRORS

* 