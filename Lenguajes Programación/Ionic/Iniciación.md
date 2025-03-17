# Pasos para iniciar un proyecto en Ionic con Angular

## 1️⃣ Instalar Ionic CLI (si no lo tienes)

`npm install -g @ionic/cli`

## 2️⃣ Crear un nuevo proyecto con Ionic y Angular

`ionic start MiApp blank --type=angular`

- `MiApp`: Nombre de tu aplicación.
- `blank`: Usa una plantilla vacía (puedes elegir `tabs` o `sidemenu` si prefieres).
- `--type=angular`: Indica que usarás **Angular** como framework.

## 3️⃣ Entrar al proyecto y probarlo

`cd MiApp` 
`ionic serve`

Esto abrirá la aplicación en el navegador como una **web app**.

## 4️⃣ Probarlo en un emulador o dispositivo móvil

- Agrega la plataforma deseada:
    
    `ionic capacitor add android 
	`ionic capacitor add ios`
    
- Para correrlo en Android:
    
    `ionic capacitor run android`
    
- Para iOS (requiere macOS con Xcode):
    
    `ionic capacitor run ios`