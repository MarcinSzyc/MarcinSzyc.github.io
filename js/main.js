// Keep [data-years-since="YYYY-MM"] counting on its own, so the figure does not
// quietly go stale. The markup carries today's correct value as a fallback, so
// this only ever has to agree with it or move it forward.
for (const el of document.querySelectorAll('[data-years-since]')) {
  const [year, month] = el.dataset.yearsSince.split('-').map(Number);
  if (!year || !month) continue;

  const now = new Date();
  // month is 1-based in the attribute, 0-based on Date
  const elapsed = now.getFullYear() - year - (now.getMonth() < month - 1 ? 1 : 0);
  if (elapsed > 0) el.textContent = elapsed;
}

// Pointer-tracked spotlight on the bento tiles. Everything else is CSS.
if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  for (const tile of document.querySelectorAll('.tile')) {
    tile.addEventListener('pointermove', ({ clientX, clientY }) => {
      const { left, top } = tile.getBoundingClientRect();
      tile.style.setProperty('--mx', `${clientX - left}px`);
      tile.style.setProperty('--my', `${clientY - top}px`);
    });
  }
}
