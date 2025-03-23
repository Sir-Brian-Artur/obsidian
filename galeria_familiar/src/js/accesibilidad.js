
import { cerrarTarjeta } from './tarjeta.js';

export function activarAccesibilidad() {
  document.addEventListener('keydown', (e) => {
    const modalAbierto = !document.getElementById('tarjeta').classList.contains('oculto');
    if (e.key === 'Escape' && modalAbierto) {
      cerrarTarjeta();
    }
  });
}
