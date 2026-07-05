// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '../_ds/forwardline-design-system-ce48fd24-a6c7-4dd8-adb3-4bdbc143518d';
  for (const p of ["tokens/fonts.css","tokens/colors.css","tokens/typography.css","tokens/spacing.css","tokens/effects.css","tokens/base.css","styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  // Injected scripts load async with no ordering guarantee vs. the page's own
  // scripts — anything rendering before this resolves must await it, or it'll
  // read the design system globals before they exist.
  window.__dsReady = new Promise((resolve, reject) => {
    s.onload = resolve;
    s.onerror = () => {
      console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
      reject(new Error('ds bundle failed to load'));
    };
  });
  document.head.appendChild(s);
})();
