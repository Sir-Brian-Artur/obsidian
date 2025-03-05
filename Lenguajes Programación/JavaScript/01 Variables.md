 Palabra reservada para declarar una variable
```javascript
let;
```

Variable donde queremos que se almacenen datos
```javascript
let miVariable;
```

Valor introducido mediante el operador de asignación "="
```javascript
let miVariable = 3; 
```

JavaScript es un lenguaje de tipado dinámico. Así que podemos cambiarle el tipo de valor a la variable, siempre y cuando la hayamos declarado con `let`.
``` javascript
console.log(miVariable);  //  ->   miVariable = 3;

miVariable = "Hola";     
console.log(miVariable); // ->   miVariable = "hola";
```

Reasignamos el valor de una variable por el cálculo de su valor con una constante, declaradas anteriormente.

``` javascript
const IVA = 1.21;   //Los valores de constantes van en "SNAKE_CASE_UP"
let precio = 25;
precio = precio * IVA;  
```

Definimos la variable "totalFactura" como e resultado de la operación entre 2 variables.
```javascript
let cantidad = 3;
let totalFactura = precio * cantidad;
```