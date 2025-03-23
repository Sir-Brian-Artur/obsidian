
import { familia } from './familia.js';
import { mostrarTarjeta } from './tarjeta.js';

export function cargarGaleria() {
  const contenedor = document.getElementById('galeria');
  const personas = obtenerTodasLasPersonas(familia);

  personas.forEach((persona, index) => {
    const img = document.createElement('img');
    img.src = persona.miniatura;
    img.alt = persona.nombre;
    img.tabIndex = 0;
    img.setAttribute('data-id', persona.id);

    img.addEventListener('click', () => mostrarTarjeta(persona.id));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        mostrarTarjeta(persona.id);
      } else if (e.key === 'ArrowRight') {
        const siguiente = contenedor.children[index + 1];
        if (siguiente) siguiente.focus();
      } else if (e.key === 'ArrowLeft') {
        const anterior = contenedor.children[index - 1];
        if (anterior) anterior.focus();
      }
    });

    contenedor.appendChild(img);
  });
}

function obtenerTodasLasPersonas(familia) {
  const personas = [];
  Object.values(familia.abuelos).forEach(lista => personas.push(...lista));
  personas.push(...familia.padres);
  familia.hermanos.forEach(hermano => {
    personas.push(hermano);
    if (hermano.esposa) personas.push(hermano.esposa);
    if (hermano.hijos) personas.push(...hermano.hijos);
  });
  return personas;
}
