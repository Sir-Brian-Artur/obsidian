import { cargarGaleria } from './galeria.js';
import { activarAccesibilidad } from './accesibilidad.js';

document.addEventListener('DOMContentLoaded', () => {
  cargarGaleria();
  activarAccesibilidad();
});
