En JavaScript y en otros lenguajes de tipado dinámico, realizar operaciones entre valores de distinto tipo es posible. JavaScript va a convertir los 2 valores a un único tipo de valor común. Y a a intentar hacer esa operación siempre. Y lo va a hacer de una forma implícita.

##  Concatena el STRING con el NUMBER

``` javascript
let resultado = "2" + 2;        // --> "22"
```

Al querer hacer la multiplicación como no es posible multiplicar `STRING`, lo pasa nuevamente a `NUMBER`.

```javascript
resultado *= 2;             // --> 44
```

## Implícita

```javascript
const cadena = "5";
const numero = 5;
const boolean = true;
const nulo = null;
let indefinido;     //Los indefinidos los definiremos con LET  
```

`STRING` es el tipo más fuerte cuando estamos sumando. Por eso prevalece su tipo y se convierten a `STRING`.

```javascript
cadena + numero     // --> "55"       
console.log(cadena + boolean);    //

console.log(cadena + nulo);         //

console.log(cadena + indefinido);   //
```
`TRUE` pasa a 1, al igual que `FALSE` pasaría a 0
```javascript
console.log(numero + boolean);
```

`NULL` siempre se convierte a 0

```javvascript
console.log(numero + nulo);         
```

Pasamos a ver un NaN que indica que lo que estamos calculando No es Un Numero; aunque este sí esté en formato NUMBER.*/
```javascript
console.log(numero + indefinido);
```

Sale un 0 NUMBER porque no se puede hacer otra cosa que sumar los STRING. Así que pasa a ser un NUMBER
```javascript
numero - cadena         // --> 0   
```

Cualquier cosa que no se pueda pasar a NUMBER, pasa a `NaN`. Todo lo operado con `NaN`, sigue siendo `NaN`
```javascript
const cadena2 = "Hola";
console.log(numero - cadena2);     // NaN
```

>Todo pasa a `NUMBER` cuando se trata de una operación que no sea SUMA

## Explícita
```javascript
String();           //Pasar a STRING
Number();           //Pasar a NUMBER
Boolean();          //Pasar a BOOLEAN
```

```javascript
const cadena = "Hola";
const numero = 5;
const boolean = false;
const nulo = null;
let indefinido;
``` 

```javascript
String(numero);
String(boolean);

Number(boolean);       // --> 0
Number(nulo);          // --> 0
```

La única opción para que un `STRING` pase a ser un `FALSE` es que sea una cadena vacía. De lo contrario siempre será `TRUE`. Pasa algo similar con los números. Tan solo el 0 pasa a ser FALSE; el resto serán TRUE.
```javascript
Boolean("");               // --> false
Boolean(0);                // --> false
Boolean(nulo)              // --> false
Boolean(indefinido)        // --> false
```

## Parsear
```javascript
parseInt();                 //Parte ENTERA
parseFloat();               //Parte DECIMAL
```

```javascript
const cadena = "5.95";
parseInt(cadena);          // --> 5
parseFloat(cadena);        // --> 5.95
```