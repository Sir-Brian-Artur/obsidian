## 1. Estructura HTML
El formulario HTML es la interfaz que el usuario ve y con la que interactúa. Aquí está el desglose:
```html
<form id="registroForm">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password" required><br><br>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" required><br><br>

    <button type="submit">Registrar</button>
</form>
```
- **`<form>`**: Es el contenedor del formulario. Tiene un `id="registroForm"` para identificarlo en JavaScript.
- **`<label>`**: Describe el campo de entrada. El atributo `for` vincula el label con el `id` del input correspondiente.
- **`<input>`**: Campos de entrada para que el usuario ingrese datos.
    - `type="text"`: Para texto (nombre).
    - `type="email"`: Para correos electrónicos (valida automáticamente el formato).
    - `type="password"`: Para contraseñas (oculta el texto).
    - `type="number"`: Para números (edad).
    - `required`: Hace que el campo sea obligatorio.
- **`<button>`**: Botón para enviar el formulario. El tipo `submit` indica que enviará los datos del formulario.
## 2. JavaScript (Funcionalidad)
El JavaScript es el encargado de manejar la lógica del formulario, como capturar los datos y almacenarlos en un array de objetos.
```js
let usuarios = []; // Array para almacenar los usuarios
```
- **`usuarios`**: Es un array vacío donde se guardarán los objetos de usuario.
---
#### Event Listener para el formulario
```js
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
});
```
- **`addEventListener`**: Escucha el evento `submit` del formulario. Cuando el usuario hace clic en el botón "Registrar", se ejecuta la función.
- **`event.preventDefault()`**: Evita que el formulario se envíe y la página se recargue (comportamiento por defecto de un formulario).
---

#### Captura de datos del formulario
```js
let nombre = document.getElementById('nombre').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let edad = document.getElementById('edad').value;
```
- **`document.getElementById()`**: Obtiene el elemento del DOM por su `id`.
- **`.value`**: Extrae el valor ingresado por el usuario en cada campo.
---

#### Creación del objeto de usuario
```js
let usuario = {
    nombre: nombre,
    email: email,
    password: password,
    edad: edad
};
```
- Se crea un objeto llamado `usuario` con las propiedades `nombre`, `email`, `password` y `edad`. Cada propiedad toma el valor correspondiente capturado del formulario.
---

#### Almacenamiento en el array
```js
usuarios.push(usuario);
```
- **`push()`**: Añade el objeto `usuario` al array `usuarios`.
---

#### Limpieza del formulario
```js
document.getElementById('registroForm').reset();
```
- **`.reset()`**: Limpia todos los campos del formulario después de registrar al usuario.
---

#### Verificación en consola
```js
console.log(usuarios);
```
- **`console.log()`**: Muestra el array `usuarios` en la consola del navegador para verificar que los datos se están almacenando correctamente.

![[Drawing 2025-03-08 19.18.04.excalidraw.png]]

![[diagrama.png]]