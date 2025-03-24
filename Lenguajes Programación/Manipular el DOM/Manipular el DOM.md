# Qué es el DOM?

Representación de los objetos (elementos) que conforman la estructura de un documento en la web.
![[Draw 25-03-24 09.03.57.excalidraw]]

![[Pasted image 20250323100742.png|280]]

Representar el HTML a través del DOM nos permite **acceder** a sus elementos y **manipularlos**.

El DOM represanta a los elementos como *nodos* y *objetos* con los cuales podemos trabajar el JavaScript.

![[Draw 25-03-23 09.28.29.excalidraw]]
Con JavaScript podemos trabajar con las *propiedades*, *métodos*, y con distintos *eventos*. El **DOM** es lo que le aporta esa capacidad funcional para trabajar esos elementos HTML en JavaScript.

> [!nota]
> El navegador web (browser) es ese programa que nos permite transformar ese código HTML inicial en una gerarquía de nodos en el DOM. Luego podremos manipular como si fuesen objetos, a través del JavaScript.
# Nodo

Un puntos específico del diagrama o árbol del nodos del DOM.

Partes que se incluyen como nodos:
- Documento
- Elementos HTML
- Texto : el que se incluye entre las etiquetas
- Comentarios : los que escribamos en el HTML que a priori no se muestran, sí que pasan al DOM

# Nodo vs Elemento

El concepto de nodo es más amplio que el concepto de elemento en el contexto del DOM. Un nodo puede contener más tipo de información que un elemento.

Ya que, tanto el texto, como los comentarios, pueden ser nodos del DOM. No sólo debemos pensar en que son las etiquetas HTML quienes se convierten en nodos; abarca más.

![[Draw 25-03-23 18.23.29.excalidraw|500]]

![[Draw 25-03-23 18.38.57.excalidraw|500]]

![[Drawing 2025-03-24 16.48.31.excalidraw|500]]

![[Drawing 2025-03-24 17.35.48.excalidraw|transparent]]
