
import { familia } from './familia.js';

const tarjeta = document.getElementById('tarjeta');
const contenido = document.getElementById('contenidoTarjeta');
const btnCerrar = document.getElementById('cerrarTarjeta');

btnCerrar.addEventListener('click', cerrarTarjeta);

export function mostrarTarjeta(id) {
  const persona = buscarPersonaPorId(id);
  if (!persona) return;

  contenido.innerHTML = `
    <button id="cerrarTarjetaInterno" aria-label="Cerrar tarjeta" class="boton-cerrar">✖</button>
    <h2>${persona.nombre}</h2>
    <img src="${persona.foto}" alt="Foto de ${persona.nombre}" />
    <p><strong>Parentesco:</strong> ${persona.parentesco}</p>
    <p><strong>Sexo:</strong> ${persona.sexo}</p>
    <p><strong>Lugar de nacimiento:</strong> ${persona.lugar_nacimiento}</p>
    <p><strong>País:</strong> ${persona.pais}</p>
    <p><strong>Fecha de nacimiento:</strong> ${persona.fecha_nacimiento}</p>
    <p><strong>Estado civil:</strong> ${persona.estado_civil}</p>
    ${generarVinculos(id, persona)}
  `;

  document.getElementById('cerrarTarjetaInterno').addEventListener('click', cerrarTarjeta);

  tarjeta.classList.remove('oculto');
  tarjeta.setAttribute('tabindex', '-1');
  tarjeta.focus();
}

export function cerrarTarjeta() {
  tarjeta.classList.add('oculto');
  contenido.innerHTML = '';
}

function buscarPersonaPorId(id) {
  for (const lado of Object.values(familia.abuelos)) {
    for (const persona of lado) {
      if (persona.id === id) return persona;
    }
  }
  for (const persona of familia.padres) {
    if (persona.id === id) return persona;
  }
  for (const hermano of familia.hermanos) {
    if (hermano.id === id) return hermano;
    if (hermano.esposa && hermano.esposa.id === id) return hermano.esposa;
    if (hermano.hijos) {
      for (const hijo of hermano.hijos) {
        if (hijo.id === id) return hijo;
      }
    }
  }
  return null;
}

function generarVinculos(idActual, persona) {
  const vinculos = [];

  if (persona.conyuge_id) {
    const conyuge = buscarPersonaPorId(persona.conyuge_id);
    if (conyuge) {
      vinculos.push(`<a href="#" class="vinculo" data-id="${conyuge.id}">Ver cónyuge: ${conyuge.nombre}</a>`);
    }
  }

  if (persona.padre_id) {
    const padre = buscarPersonaPorId(persona.padre_id);
    if (padre) {
      vinculos.push(`<a href="#" class="vinculo" data-id="${padre.id}">Ver padre: ${padre.nombre}</a>`);
    }
  }

  if (persona.madre_id) {
    const madre = buscarPersonaPorId(persona.madre_id);
    if (madre) {
      vinculos.push(`<a href="#" class="vinculo" data-id="${madre.id}">Ver madre: ${madre.nombre}</a>`);
    }
  }

  if (persona.hijos) {
    persona.hijos.forEach(hijo => {
      vinculos.push(`<a href="#" class="vinculo" data-id="${hijo.id}">Ver hijo/a: ${hijo.nombre}</a>`);
    });
  }

  if (vinculos.length === 0) return '';
  return `
    <div class="vinculos">
      <h3>Vínculos familiares</h3>
      ${vinculos.join('<br>')}
    </div>
  `;
}

contenido.addEventListener('click', (e) => {
  if (e.target.classList.contains('vinculo')) {
    const nuevoId = e.target.getAttribute('data-id');
    mostrarTarjeta(nuevoId);
  }
});
