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

`git branch --move nombre-antiguo nombre-nuevo` Renombrar rama
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


Si estamos modificando el nombre de un archivo, lo que va a pasar es que primero crea una copia de ese con el nombre deseado. Luego elimina el archivo antiguo.

![[visualizar deltas.svg]]

`git diff` para ver los cambios que se han hecho sin haber comiteado aún.

> [!tip]
> Debemos ir comiteando paso por paso para llevar un orden. Como un banco de trabajo, poder encontrar fácilmente cada uno de los cambios.

`git commit -am "mensaje"` Fusión entre *git add* y *git commit*. No se puede emplear si el archivo no está traqueado.

![[git reset-soft.svg]]

`git reset --mixed ec225ae` No es aconsejable porque vamos a modificar sin querer, archivos con los que estamos trabajando actualmente.

![[Draw 25-03-20 13.57.06.excalidraw.svg]]
## Git Commands

### 1. Git configuration

These commands are used for setting up configuration values like first name, last name, and email ID across all local repositories. Using these commands you are introducing yourself to Git.

| **Commands**                                        | **Description**                                                                                                           |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| git config –global user.name “[firstname lastname]” | Set the global configuration for the Git user’s name.                                                                     |
| git config –global user.email “[valid-email]”       | Set the global configuration for the Git email.                                                                           |
| git config –global color.ui auto                    | Enable automatic coloring for Git output, i.e., Git will automatically colorize its output when it’s going to a terminal. |
| git config –list                                    | Displays the current configuration settings for Git on your system.                                                       |

### **2. Setup and Initialization**

These commands are used to initialize a repository which means setting up a new project or cloning an existing repository.

| **Commands**    | **Description**                                                   |
| --------------- | ----------------------------------------------------------------- |
| git init        | Initialize an existing directory.                                 |
| git clone [url] | Retrieve the repository from the hosted location through the URL. |

### **3. Staging and Snapshots**

These commands will help you with all the operations done in the Git Staging Area, i.e., before you commit the changes to the branch.

| **Commands**                                     | **Description**                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------- |
| git status                                       | To know the status                                                         |
| git diff                                         | Displays what has been changed but not staged yet.                         |
| git add [file]                                   | To add a file                                                              |
| git add [filename] [2nd filename] [3rd filename] | To add multiple files                                                      |
| git reset [file]                                 | Used to unstage a file while keeping the changes in the working directory. |
| git commit -m “[descriptive message]”            | Commit your staged content                                                 |
| git diff –staged                                 | Displays what has been staged but not committed yet.                       |
| git commit –amend -m “new_message”               | To amend the last commit or the last message                               |

### **4. Branch and Merge**

These commands will help you while developing a new feature in an isolated environment and later on, after proper review and testing merging it with the original codebase.

| **Commands**                                       | **Description**                            |
| -------------------------------------------------- | ------------------------------------------ |
| git branch                                         | To list branches                           |
| git branch -a                                      | To list all the branches                   |
| git branch [branch name]                           | To create a new branch                     |
| git branch -d [branch name]                        | To delete a branch                         |
| git push origin –delete [branchName]               | To delete a remote branch                  |
| git checkout -b [branch name]                      | To create and switch to a new branch       |
| git checkout -b [branch name] origin/[branch name] | To clone and switch to a remote branch     |
| git checkout [branch name]                         | To switch to a branch                      |
| git checkout –                                     | To switch to the branch last checked out   |
| git checkout — [file-name.txt]                     | Used to discard any changes made to a file |
| git merge [branch name]                            | To merge a branch into an active branch    |

### **5. Inspect and Compare**

These commands are used to inspect the logs that contain all the commit history. This can also help you with the differences between the branches.

|   |   |
|---|---|
|**Commands**|**Description**|
|git log|Show the commit history|
|git diff branchB…branchA|Show the difference between branchA and branchB|
|git log branchB..branchA|Show the commits on branchA that are not there on branchB|
|git log –follow [file]|Show the commits that changed the file|
|git show [SHA]|Show any object in a human-readable format|

### **6. Share and Update**

These commands are used for fetching fresh updates from the remote repository and accordingly updating the local repository. With the help of these commands, you will also be able to push new code to the remote repository from the local repository. Fetching updates from another repository and updating the local repositories.

| **Commands**                                                                    | **Description**                                                                           |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| git push origin [branch name]                                                   | To push a branch to a remote repository                                                   |
| git push -u origin [branch name]                                                | To push the changes made to a remote repository (-u remember the branch for the next use) |
| git push origin –delete [branch name]                                           | To delete a remote branch                                                                 |
| git pull                                                                        | To update a local repository to the newest commit                                         |
| git pull origin [branch name]                                                   | To pull the changes from a remote repository                                              |
| git remote add origin ssh://git@github.com/[username]/[repository-name].git     | To add a remote repository                                                                |
| git remote set-url origin ssh://git@github.com/[username]/[repository-name].git | To set a repository’s origin branch to SSH                                                |
| git fetch [alias]                                                               | Fetch all the branches from that hosted remote repository.                                |

### **7. Rewrite History**

These commands are used to rewrite branches, update  commits, and clear history.

| **Commands**             | **Description**                                                |
| ------------------------ | -------------------------------------------------------------- |
| git rebase [branch]      | Used to integrate changes from one branch into another branch. |
| git reset –hard [commit] | Used to reset the current branch to a specific commit          |

### **8. Temporary Commit**

These commands are used to create a temporary snapshot of your work using a commit. This could be useful in various scenarios, such as experimenting with changes or working on a feature that is not ready to be permanently committed to the version history.

| **Commands**    | **Description**                                      |
| --------------- | ---------------------------------------------------- |
| git stash       | To stash the changes in a dirty working directory    |
| git stash pop   | Write working from the top of the stash stack.       |
| git stash list  | List the stack-order of stashed file changes.        |
| git stash drop  | Discard the changes from the top of the stash stack. |
| git stash clear | To remove all the stashed entries                    |