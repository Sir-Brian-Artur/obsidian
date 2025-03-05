## Strings

Comillas dobles `"Hola"`

Comillas simples `'Hola'`

Las comas graves sirven para colocar "Template Strings" y así evitar que usemos strings con sólo un espacio de contenido.
``` javascript
const edad = 26
console.log(`Mi nombre es "Pablo" y tengo ${edad} años.`);

console.log('Mi nombre es "Pablo" y tengo' + ' ' + edad + ' ' + 'años.')
```

## Numbers
Todos los números, independientemente que sean enteros, decimales o exponencias; son NUMBER.

``` javascript
const num1 = 5;     //entero positivo
const num2 = -2;    //entero negativo
const num3 = 1.12;  //decimal positivo
const num4 = -3.5;  //decimal negativo
const num5 = 4e25;  //exponencial

console.log(num2 / num1);   //División
console.log(num2 % num1);   //Potencia (es para saber cuanto nos
                            //queda de resto en una ivisión)
```

Significan lo mismo. Es su forma abreviada
```javascript
numb = numb + 2;            
numb += 2                
```

``` javascript
numb++;     //Incremental (después)
++numb;     //Incremental (antes)
numb--;     //Decremental (después)
```

## Otros valores

``` javascript
const positivo = true;
const negativo = false;
```

`null` es un valor que no vale nada
```javascript
const nulo = null;      
```

`undefined` es como si guardásemos una variable, pero no le indicamos un valor
```javascript
const indefinido = undefined;   
```

```javascript
const array = []
const object = {}
const funcion = ()=>{}

console.log(typeof nulo)    //Valores nulos, array y objetos son
console.log(typeof [])      //considerados como valores objeto      
console.log(typeof {})

console.log(typeof funcion)     //Las funciones son funciones
```