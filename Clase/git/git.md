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

Palabra completa va con 2 `-`
`ls --all`

Pero si va una sola letra, va 1 solo `-`
`ls -a`

En el caso de queramos usar dos veces un `-` palabras
`ls -a -l`

Podemos resumirlo en 
`ls -al`

En cualquier comando de linux, cualquier comando que aparezca entre `[]` significa que es opcional.

[C:/Program%20Files/Git/mingw64/share/doc/git-doc/git-clone.html](file:///C:/Program%20Files/Git/mingw64/share/doc/git-doc/git-clone.html)

Cuando no sepamos qué significa un comando, podemos usar un `--help` para ayudarnos. 
`git push --help`
`git help push` realiza la misma operación.

Muchas veces la letra "Q" es para salir.

Hay 3 lugares diferentes en donde se puede usar GIT. `--system` `--global` `--local`

![[Excalidraw/svg/Dónde está Git.svg]]

`git config --global -e` NO USAR NUNCA. Porque podemos modificar cosas aquí;  y la idea es hacerlo desde fuera.

`mv nombreActual/ nuevoNombre` para renombrar

`git branch -m main` para cambiar el nombre de la rama que estamos usando

`ls -la` para ver los archivos de donde estamos, incluidos los ocultos.

La carpeta *.git* es la encargada de hacer el seguimiento de los archivos que hay en esa carpeta.

`git rm --cached <file>` sirve para sacar ese archivo de la estapa de stage.

`git rm --cached -r .` para sacar varios archivos dentro de carpetas.

Reinicializar un repositorio no hace que se pierda lo que ya tienes hecho.


![[resetStage.svg]]
`git reset carpeta`  forma antigua de hacer un reset de lo que esté en el stage.

`git config --global init.defaultBranch main` Para que utilice rama `main` por defecto

`git config --global core.autocrlf true` Para habilitar el CRLF en los archivos que se le hagan commit.

> [!nota]
> Hay que estudiar los fundamentos en todo lo que aprendas

`git log --oneline` Para que nos diga los commit que ha habido en sólo una línea.

![[Pasted image 20250318130356.png]]
Regresamos a un commit anterior, de forma blanda. `HEAD~1`

`git checkout -- .` va a llevar atrás lo que no esté en el repositorio

> [!consejo]
> La clave del GIT es saber en qué estado estoy, en el repositorio.
> Para ello debemos usar el `git status`

`git branch` Para saber en qué rama nos encontramos.

`git branch -m "nombre"` Para cambiar el nombre de una rama.

Una rama viene a ser una versión alterna del mundo en el que estamos.

Si estamos en una rama distinta, y queremos renombrar una rama, debemos escribir su nombre actual luego su nuevo nombre. `git branch -m "nombreActual" "nombreNuevo"`

Descargar Notepad++, instalarlo, y cambiar la configuración de git bash, para que use ese nuevo programa.

```
$ git config --global --get core.editor
'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar
-nosession -noPlugin
```
Para utilizar el Notepad++ como editor por defecto con Git Bash. Cuando usemos `git commit` nos abrirá ese editor. Y ahí tenemos que guardarlo; no sin antes escribiendo el la primera línea el nombre que queremos que tenga ese commit.

`git config --global core.editor "code --wait"` para volver al VSCode por defecto.

[Astro](https://astro.build/) Nos puede servir para hacer un esquema o guía de nuestros proyectos personales.

¿Cómo corriges el mensaje del último commit que has hecho?
`git commit --amend -m "Initial commit"` Sólo modifica el mansaje, nada más


`cat texto.txt` Para ver el contenido de un archivo, que en este caso se llama texto.txt

![[rutas relativas.svg]]

`git checkou -b "nuevaRama"` Para crear una nueva rama y movernos a esa.
`git branch "nuevaRama"` Para crear nueva rama sin cambiarnos de rama.
`git branch` Para ver cuantas ramas hay
`git switch "rama"` Para cambiarnos a esa rama
`touch archivo` para crear el archivo en blanco.
`git merge rama` Para traer los cambios que se han hecho en esa rama, a la rama en la que estamos.

En caso de que tengamos que hacer un *merge* de otra rama `git merge develop` , pisando los cambios que se han hecho, va a tener que ser un marge 'ort', una "fusion bruta".
![[gitMerge.svg]]
> [!tip]
> En caso de que tengamos mucho srchivos que comienzan con el mismo nombre, al darle TAB nos va a parar en la parte que se repite. Es ahí cuando debemos escribir la diferencia. Cuando lo hagamos, ya podremos volver a hacer otro TAB para autocompletar el resto.

`git add *.html` para subir los archivos con la extensión html

Normalmente los commit se nombrar comenzando por un verbo. Existe el eterno debate entre si poderlo en pasado o presente.

Parra GIT, ese repositorio/carpeta que esté vacío, no lo va a tener en cuenta; no le va a dar seguimiento. Para estos casos lo mejor es meter un *README.md*, y dentro poner la futura finalidad de esa carpeta. Otra cosa que puedes hacer es meter un *empty.info* o con la extensión que quieras. Es una forma parecida, pero otro desarrollador no va a saber qué finalidad tiene.

`git commit --amend -m "add . gitkeep -> new-folder"` El --amend sirve para renombrar el último commit.
`git commit --amend -m "add 'ignorar carpeta/' rule -> .gitignore"`
`git commit --amend -m "add << ignorar carpeta/ >> rule -> .gitignore"`
 
[Sourcetree](https://www.sourcetreeapp.com/) Alternativa a GitHub Desktop