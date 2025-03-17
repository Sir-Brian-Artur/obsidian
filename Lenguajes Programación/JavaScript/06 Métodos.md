## 01 Find()
El método **`find()`** devuelve el **valor** del ***primer elemento*** del array que cumple la función de prueba proporcionada.
```jsx
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

## 02 Map()
El método **`map()`** crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
```jsx
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
```

## 03 Pop()

El método **`pop()`** elimina el **último** elemento de un array y lo devuelve. Este método cambia la longitud del array.

```jsx
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
```

# 04 FindIndex()

El método **`findIndex()`** devuelve el **índice** del **primer elemento** de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

```jsx
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

```

## 05 Splice()

El método **`splice()`** cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

### 01 Parámetros

- [`start`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#start) Índice donde se comenzará a cambiar el array (con 0 como origen). Si es mayor que la longitud del array, el punto inicial será la longitud del array. Si es negativo, empezará esa cantidad de elementos contando desde el final.
- [`deleteCount`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#deletecount) Opcional Un entero indicando el número de elementos a eliminar del array antiguo.
- [`item1, item2, ...`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#item1_item2_) Opcional Los elementos que se agregarán al array, empezando en el índice `start`. Si no se especifica ningún elemento, `splice()` solamente eliminará elementos del array.

### 02 Ejemplos

- Eliminar 0 elementos desde el índice 2 e insertar "drum"
    
    ```jsx
    var myFish = ["angel", "clown", "mandarin", "sturgeon"];
    var removed = myFish.splice(2, 0, "drum");
    
    // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
    ```
    
- **Eliminar 1 elemento desde el índice 3**
    
    ```jsx
    var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
    var removed = myFish.splice(3, 1);
    
    // removed is ["mandarin"]
    // myFish is ["angel", "clown", "drum", "sturgeon"]
    ```

## 06 Includes

El `includes()` método comprueba si una matriz contiene un elemento específico o no.

```jsx
// defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");

console.log(check); 

// Output: true
```

### Sintaxis

`array.includes(element, start)`

### Parámetros

| _element_ | Required | The value to search for       |
| --------- | -------- | ----------------------------- |
| _start_   | Optional | Start position. Default is 0. |

### Valor devuelto

| A boolean | `true` if the value is found, otherwise `false`. |
| --------- | ------------------------------------------------ |

## Every
Determina si todos los *elementos* en el array satisfacen una ==condición.==

```jsx
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```