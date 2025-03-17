---
Use: String
---
El método **split()** se utiliza en cadenas de texto (strings) para dividirlas en un array de subcadenas, utilizando un separador que especifiques. La sintaxis básica es:

```js
cadena.split(separador, límite)
```

- **separador:** Especifica el carácter o la cadena que se usará para determinar dónde se debe dividir la cadena original. Si se omite, se devuelve un array con la cadena completa.
- **límite (opcional):** Es un número entero que indica el número máximo de elementos en el array resultante.

### Ejemplos:

#### 1. Dividir una frase en palabras:

```js
const frase = "Hola mundo, esto es JavaScript";
const palabras = frase.split(" ");
console.log(palabras);
// Salida: ["Hola", "mundo,", "esto", "es", "JavaScript"]

```

#### 2. Dividir una lista separada por comas:
```js
const lista = "manzana,banana,pera,uva";
const frutas = lista.split(",");
console.log(frutas);
// Salida: ["manzana", "banana", "pera", "uva"]
```

#### 3. Dividir por cada caracter:

```js
const palabra = "Hola";
const letras = palabra.split("");
console.log(letras);
// Salida: ["H", "o", "l", "a"]
```

#### 4. Usar el límite:

```js
const texto = "uno,dos,tres,cuatro";
const partes = texto.split(",", 2);
console.log(partes);
// Salida: ["uno", "dos"]
```