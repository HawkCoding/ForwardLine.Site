/* ─────────────────────────────────────────────
   ForwardLine — eased snap scroller
   Restores mandatory section snap on the home page, but animates
   the transition between sections with a long, calm easing curve
   instead of the browser's instantaneous commit.

   Approach:
   - Listen for wheel / touch / keyboard scroll intent on desktop home.
   - Each intent advances exactly one section (mandatory feel preserved).
   - The motion itself is a custom rAF tween (~900ms, easeInOutQuart)
     so it lands gracefully, not abruptly.
   - Native CSS snap is briefly disabled during the tween via
     html.fl-snapping (re-enabled when done), so the browser doesn't
     short-circuit our animation with its own snap.
   ───────────────────────────────────────────── */
(function () {
  const DURATION   = 1100;    // ms — slow and deliberate
  const COOLDOWN   = 120;     // ms after a tween before next intent is accepted
  const WHEEL_MIN  = 6;       // ignore tiny trackpad drift
  const TOUCH_MIN  = 40;      // px — minimum swipe to count as intent
  const SLOP       = 6;       // px tolerance when comparing section edges to viewport

  // Cubic-ish but a touch softer on both ends.
  const ease = (t) => (t < 0.5
    ? 8 * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 4) / 2);

  let animating = false;
  let lastEnd   = 0;
  let touchStartY = null;

  const isSnapRoute = () => {
    const r = document.documentElement.dataset.route;
    return r === 'home' || r === 'wwd';
  };
  const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches;
  const prefersReduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function getSections() {
    return Array.from(document.querySelectorAll('#app section[data-snap]'));
  }

  // Find which section is currently dominant in the viewport.
  function currentIndex(sections) {
    const y = window.scrollY + 32 + 4; // account for fixed utility strip
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      const top = sections[i].getBoundingClientRect().top + window.scrollY;
      if (top - 2 <= y) idx = i;
      else break;
    }
    return idx;
  }

  function targetYFor(section) {
    return section.getBoundingClientRect().top + window.scrollY - 32;
  }

  /* Decide whether a scroll intent should snap, or pass through to native
     scroll. We're strict about staying on a section — no mid-section drift —
     with one deliberate exception: at the last section, scrolling down passes
     through to native scroll so the user can reach the footer. The footer
     is intentionally compact so this is a short reveal, not a long free-roam.
     Mid-section overflow should be avoided by sizing sections to fit the
     typical viewport rather than papered over with mid-section scrolling. */
  function shouldSnap(direction) {
    const sections = getSections();
    if (!sections.length) return false;
    const cur = currentIndex(sections);
    if (direction > 0 && cur === sections.length - 1) return false;
    if (direction < 0 && cur === 0 && window.scrollY <= 4) return false;
    return true;
  }

  function tweenTo(targetY) {
    const startY = window.scrollY;
    const delta  = targetY - startY;
    if (Math.abs(delta) < 2) return;
    animating = true;
    document.documentElement.classList.add('fl-snapping');
    const t0 = performance.now();
    function step(now) {
      const p = Math.min(1, (now - t0) / DURATION);
      const y = startY + delta * ease(p);
      window.scrollTo(0, y);
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        animating = false;
        lastEnd = performance.now();
        document.documentElement.classList.remove('fl-snapping');
      }
    }
    requestAnimationFrame(step);
  }

  function go(direction) {
    if (animating) return;
    if (performance.now() - lastEnd < COOLDOWN) return;
    const sections = getSections();
    if (!sections.length) return;
    const cur = currentIndex(sections);

    /* If the user is parked below the current section's snap target
       (e.g. scrolled down into the footer from the last section) and
       is now scrolling UP, the first up-intent should re-seat them at
       the current section's top — NOT skip past it to the previous
       section. Without this guard, the rail jumps two stops up the
       moment you scroll back from the footer, which feels broken. */
    if (direction < 0) {
      const targetY = targetYFor(sections[cur]);
      if (window.scrollY > targetY + SLOP) {
        tweenTo(targetY);
        return;
      }
    }

    const next = Math.max(0, Math.min(sections.length - 1, cur + direction));
    if (next === cur) return;
    tweenTo(targetYFor(sections[next]));
  }

  function active() {
    return isSnapRoute() && isDesktop() && !prefersReduced();
  }

  // Wheel
  window.addEventListener('wheel', (e) => {
    if (!active()) return;
    if (Math.abs(e.deltaY) < WHEEL_MIN) return;
    const dir = e.deltaY > 0 ? 1 : -1;
    if (animating) {
      // Don't let native scroll fight our running tween.
      e.preventDefault();
      return;
    }
    if (!shouldSnap(dir)) {
      // Pass through to native scroll — overflow content or footer reach.
      return;
    }
    e.preventDefault();
    go(dir);
  }, { passive: false });

  // Keyboard
  window.addEventListener('keydown', (e) => {
    if (!active()) return;
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    const tryDir = (dir) => {
      if (!shouldSnap(dir)) return false;
      e.preventDefault(); go(dir); return true;
    };
    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        tryDir(1); break;
      case 'ArrowUp':
      case 'PageUp':
        tryDir(-1); break;
      case 'Home':
        e.preventDefault();
        if (!animating) {
          const s = getSections()[0];
          if (s) tweenTo(targetYFor(s));
        }
        break;
      case 'End':
        e.preventDefault();
        if (!animating) {
          const s = getSections();
          if (s.length) tweenTo(targetYFor(s[s.length - 1]));
        }
        break;
    }
  });

  // Touch
  window.addEventListener('touchstart', (e) => {
    if (!active()) return;
    if (e.touches.length !== 1) return;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (!active()) return;
    if (touchStartY == null) return;
    const endY = (e.changedTouches[0] || {}).clientY ?? touchStartY;
    const dy = touchStartY - endY;
    touchStartY = null;
    if (Math.abs(dy) < TOUCH_MIN) return;
    const dir = dy > 0 ? 1 : -1;
    if (!shouldSnap(dir)) return;
    go(dir);
  }, { passive: true });
})();
