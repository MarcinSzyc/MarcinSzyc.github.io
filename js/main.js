// Pointer-tracked spotlight on the bento tiles. Everything else is CSS.
const wantsMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

if (wantsMotion) {
  for (const tile of document.querySelectorAll('.tile')) {
    tile.addEventListener('pointermove', ({ clientX, clientY }) => {
      const { left, top } = tile.getBoundingClientRect();
      tile.style.setProperty('--mx', `${clientX - left}px`);
      tile.style.setProperty('--my', `${clientY - top}px`);
    });
  }
}
