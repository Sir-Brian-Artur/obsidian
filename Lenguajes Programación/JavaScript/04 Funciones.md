Una función es un tipo de dato que se utiliza para reutilizar código. Para no tener que copiar y pegar un montón de líneas de código, almacenamos ese código en una función; a la que más tarde invocaremos, cuando la necesitemos usar.

Entre los () colocamos los ARGUMENTOS. Entre las {} colocamos el código de la función que se ejecutará. 
```javascript
function saludar(nombre, apellido){                 
    console.log(`Hola ${nombre} ${apellido}.`)      
};              
```

Si no le pasamos un VALOR a un ARGUMENTO, este va a usar un `UNDEFINED.
```javascript
saludar("Pablo");           // Hola Pablo undefined   
saludar("Marcos", "Salgueiro");   // Hola Marcos Salgueiro
```

## Return
Las funciones pueden tener varios valores de entrada, pero **sólo 1 de salida**. Con el `RETURN` le indicamos a la función cuál es el valor que tiene que devolver. En principio sólo puede devolver un único valor; aunque *un objeto*, con varios valores en su interior, también es considerado un único valor.
```javascript
function saludo2(nombre){
    return `Hola ${nombre}`
}
```

Todo lo que devolvemos en la función, podemos *almacenarlo en una variable*. Luego podemos utilizar el valor de esa variable para otras operaciones.
```javascript
const operacion = saludo2("Carlos");    
console.log(operacion);   
```

Puedo llamar a la función, incluso antes de declararla; cuando tiene un nombre *F.Nominal*. 
```javascript
const accion = saludo3('Maria');   
console.log("Antes",accion)        

function saludo3(nombre){     
    return `Hola ${nombre}.`    
    console.log('Después del return')   // NO se ejecuta
}                       
```
>Aparte del RETURN indicar qué debe devolver la función. También indica que la función termina. Todo lo que coloquemos después del `RETURN` no se va a ejecutar.

## Función Anónima
Las funciones anónimas son aquellas que no tienen nombre. Lo que vamos a hacer es almacenarlas en una variable. Por lo que el nombre de esa función va a ser el nombre de la variable.

### Función Nominal
```javascript
function saludar(nombre){                  
    return `hola ${nombre}, qué tal?`;
};
```

### Función Anónima (guardada en const)
```javascript
const saludar2 = function (nombre){      
    return `hola ${nombre}, qué tal?`;
}
```

Invoco a la constante como si fuese una función; ya que se convierte en ello.
```javascript
const resultado = saludar2('Pablo');     
console.log(resultado);     // hola Pablo, qué tal?           
```

>No podemos llamar a una variable antes de declararla. Esto sí que lo podíamos hacer para las Funciones Nominales. Podemos pasar esas Funciones Anónimas como PARÁMETROS a otras Funciones

## Función en función

1º. Creo STRING con PAR_1
```javascript
const obtenerSaludo = function(nombre){      
    return `Hola ${nombre}!`;
};
```

2aº. Imprimo por consola valor de PAR_2
```javascript
const imprimirSaludo = function(mensaje){    
    console.log(mensaje);                       
};
```

2bº. Lanzo `alert` con valor de PAR_2
```javascript
const alertSaludo = function(mensaje){          
    alert(mensaje);                          
};
```

3º. FUN_3 (PAR_A , PAR_B)
```javascript
const saludar = function(obtener, imprimir){   
    const saludo = obtener("Laura");            //3.1. FUN_A ("Laura")
    imprimirSaludo(saludo);                     //3.2. FUN_B (FUN_A)
};

saludar(obtenerSaludo, imprimirSaludo);         //4aº. Ejecuto FUN_3 con
                                                //FUN_1 & FUN_2a
saludar(obtenerSaludo, alertSaludo);            //4bº. Ejecuto FUN_3 con
                                                //FUN_1 & FUN_2b
```

## Función flecha
1º Resultado de PAR_A + PAR_B
```javascript
const sumar = function (a,b) {    
}
```

2º Resultado de PAR_C * 2
```javascript
const multiplicarPorDos = function (numero) { 
    return numero * 2
}
```

3º Invocar FUN_1 con PAR_A=2 y PAR_B=3
```javascript
const suma = sumar (2, 3);   
```

4º Invocar FUN_2 con valor de FUN_3 como PARAMETRO
```javascript
const multipicacion = multiplicarPorDos(suma)      
```

5º Mostrar resultado en consola
```javascript
console.log(multipicacion)       
```

###  DE FUNCION ANONIMA A FUNCION FLECHA 
1. Eliminamos la palabra clave "function" anterior a los PARAMETROS
2. Sustituimos por un "=>" posterior a la funcion
3. Si sólo hay un ARGUMENTO de entrada, eliminamos los paréntesis
	* Para funciones de 2 o más ARGUMENTOS sí que es necesario mantenerlos
4. Si la función contiene un simple `return`, también lo eliminamos. Y nos quedamos con el resto de línea de código. Al no haber llaves, se asume que es un "return" implícito.
```javascript
const sumar_ = (a,b) => a + b

const multiplicarPorDos_ = numero => numero * 2
```