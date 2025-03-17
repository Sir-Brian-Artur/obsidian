```js
const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Tablet", precio: 300 }
];

// Aplicamos el 10% de descuento a cada producto
const productosConDescuento = productos.map(producto => {
  return {
    nombre: producto.nombre,
    precio: producto.precio * 0.9 // Aplica el 10% de descuento
  };
});

console.log(productosConDescuento);
```

### Salida esperada:

```js
[
  { nombre: 'Laptop', precio: 900 },
  { nombre: 'Celular', precio: 450 },
  { nombre: 'Tablet', precio: 270 }
]
```

### Explicación:

1. `map()` recorre cada objeto en el array `productos`.
2. Para cada producto, crea un **nuevo objeto** con el mismo `nombre`, pero con el `precio` reducido en un 10%.
3. Devuelve un nuevo array `productosConDescuento` sin modificar el original.

Este método es útil para transformar datos sin alterar la estructura original. 🚀