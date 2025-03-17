---

data: 2025-03-14

---
# Principios SOLID

  

- _Single_ : Una función debe hacer una única cosa; y que la haga bien.

- _Open/Close_ : Un agente externo no puede modificar lo que está está dentro de nustro código. Pero sí que puede nuestro código desde dentro puede aportar hacia fuera.

- _Liskov_ : Todo objeto tiene propiedades, y puede tener métodos:

    - Las propiedades se definen con sustantibos

    - Los métodos se

- _Intefaz_ : Es mejor tener una interfaz pequeña que haga pequeñas cosas, que una muy grande.

- _Abstración_ : Hacer que algo se condense en la información esencial.

![alt text](CalculadoraBasica.svg)

  

> [!tip]
> *"Me entiendes?"* demuestra alarde de superioridad. Infravalora a quien está escuchando. En vez de eso decir *"Me explico?"*

  

# Mercados internacionales

  

Mercados muy buenos para el mundo de la programación:

- El mercado Americano. Es el primer mercado

- El mercado de los países que hablan árabe. Hay muy pocas aplicaciones escritas para ese mercado.

- El mercado asiático.

  

> [!important]
> La semana que viene vamos a ver la unidad formativa y lo que nos interesa de GIT.
> Luego retomaremos las bases de JavaScript

  

# Clean Code

  

La nomenglatura del código fuente tiene que estar en inglés.

  

BOF : Marca de donde comienza a leer el archivo

EOF : Marca que indica donde finaliza el archivo

  

# GIT : comandos

  

- `pwd` : para saber donde estamos, en qué carpeta

- ctrl + l : limpiar terminal bash

  

- `ls -la` : nos devuelve una lista ampliada

- `ls -l` : nos da un lista

> Cuando un archivo/directorio lleva espacios, hay que envolverlo entre comillas

  

- `git init` : para inicializar un repositorio con GIT.

  - Con esto ya vamos a poder realizar el control de versiones.

- `nano` : es para crear el archivo que quieras desda la consola

  - ctrl + x : salir

  - y : guardar

  - intro

  

- `git add .` : le da seguimiento a ese archivo

- `git commit -m "Initial commit"` : confirmación de los cambios

- `git config --global user.email "email"`

- `git config --global user.name "NickName"`

- `git config --list` : para ver nuestros datos

- q : salir

- `git commit -m "Update file"` : Para actualización de archivo

- `git reset --soft b6ed4525` : para volver a una versión anterior, sin destrucción

- `git reset --hard b6ed4525` : para volver a una versión anterior, con destrucción *NO HACER NUNCA!!*

![alt text](git.svg)