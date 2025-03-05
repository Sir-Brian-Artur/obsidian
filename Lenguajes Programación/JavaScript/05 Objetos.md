Los OJBETOS, normalmente los albergamos en constantes porque no los vamos a modificar por completo. Tan sólo vamos a querer alterar alguna de sus propiedades
```javascript
const persona = {           
    nombre: 'Carmen',      
    apellido: 'Moure',      
    telefono: 607943112,
    edad: 26
}
```

### Acceder a la propiedad de un objeto
```javascript
console.log(persona.apellido)       // --> Moure
console.log(persona["telefono"])    // --> 607943112   
```

### Modificar un atributo
El conjunto OBJ.PROP actúa como una variable por lo que podemos reasignar su valor. No podemos modificar la constante "persona", pero sí las PROP internas.
```javascript
persona.nombre = 'Silvia';          
console.log(persona.nombre);        // --> "Silva"
```

## Objeto en objeto
Constantes que no cambian, se escriben en mayusculas
```javascript
const IVA_GENERAL = 1.21;       
const IVA_REDUCIDO = 1.10;      
```

### Objeto 1
```javascript
const item1 = {                   
    precio: 15,
    cantidad: 2,
    impuestos: IVA_GENERAL
};
```

### Objeto 2
```javascript
const item2 = {            
    precio: 25,
    cantida: 3,
    impuestos: IVA_REDUCIDO
}; 
```

### Objeto 3: Objeto 1 y Objeto 2
```javascript
const factura = {              
    primerItem: item1,
    segundoItem: item2
}
```

Podemos escribir la PROP y su OBJ de forma distinta o igual.
```javascript
const factura2 = {              
    item1: item1,               
    item2: item2
}
```

Cuando una PROP y su valor se llamar igual podemos hacer un atajo en la sintaxis.
```javascript
const factura3 = {             
    item1,                     
    item2
}
```

## Métodos
Al igual que asignamos NUM o STRING a una variable, también podemos asignar FUN_(). Esta es la forma en la que creamos *MÉTODOS*.
```javascript
const item3 = {                         
    precio: 10,                    // Atributos Java
    cantidad: 4,                        
    impuestos: IVA_GENERAL,

    calcularTotal: function () {                                
        return this.precio * this.cantidad * this.impuestos    
    }    

};

console.log(item3.calcularTotal())  // 48.4
```
  
Un MÉTODO es una FUN. , guardada en un atributo, dentro de un objeto. Para ejecutarlo tenemos que entrar en él. "OBJ + . + ATRI + ()"

## This
Debemos emplear el `this` si queremos hacer la operación con los valores guardados dentro del OBJ. Para `this` no valen las *funciones flecha* , por lo que empleamos `FUN ()`.
```javascript
const IVA_GENERAL = 1.21;       
const IVA_REDUCIDO = 1.10;      

const item1 = {                       
    precio: 15,                       
    cantidad: 2,                      
    impuestos: IVA_GENERAL,
    calcularTotal: function () {   // NO ()=>{}
        return this.precio * this.cantidad * this.impuestos    
    }                                                          
};
```

`this` e `item2` hacen referencia al mismo ámbito. Sin el `this` podemos usar las `()=>{}`. Pero es una ***mala práctica*** porque deja de ser escalable.
```javascript
const item2 = {                         
    precio: 25,                         
    cantidad: 3,                        
    impuestos: IVA_REDUCIDO,           
    calcularTotal: () => {              
        return item2.precio * item2.cantidad * item2.impuestos
    }
};
```

Acordarse de hacer la ejecución y no sólo mostrar la función.
```js
const factura = {                      
    item1,                            
    item2,                              
    calcularTotal: function (descuento) {
        return (this.item1.calcularTotal() + this.item2.calcularTotal()) * descuento;  
    }
}                  

console.log(factura.calcularTotal(0.8))
```


![[Pasted image 20250305094851.png]]

