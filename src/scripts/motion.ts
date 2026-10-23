// Small, dependency-free interactions.
// 1. Statements marked data-fill fill in word by word as they scroll through the screen.
// 2. Index rows marked data-preview show the piece's photo following the pointer.
// Both are skipped when the visitor prefers reduced motion.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setupFill() {
  const blocks = document.querySelectorAll<HTMLElement>('[data-fill]');
  if (!blocks.length || reduce) return;

  const all: { el: HTMLElement; words: HTMLElement[] }[] = [];

  blocks.forEach((el) => {
    const text = el.textContent?.trim() ?? '';
    el.setAttribute('aria-label', text);
    el.textContent = '';
    const words = text.split(/\s+/).map((word, i, arr) => {
      const span = document.createElement('span');
      span.className = 'w';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = word + (i < arr.length - 1 ? ' ' : '');
      el.appendChild(span);
      return span;
    });
    all.push({ el, words });
  });

  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    all.forEach(({ el, words }) => {
      const r = el.getBoundingClientRect();
      // 0 when the block's top reaches 85% of the screen, 1 when its bottom reaches 45%
      const start = vh * 0.85;
      const end = vh * 0.45;
      const progress = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height)));
      const lit = Math.round(progress * words.length);
      words.forEach((w, i) => w.classList.toggle('on', i < lit));
    });
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

function setupPreview() {
  const rows = document.querySelectorAll<HTMLElement>('[data-preview]');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!rows.length || reduce || !finePointer) return;

  const box = document.createElement('div');
  box.className = 'preview';
  box.setAttribute('aria-hidden', 'true');
  const img = document.createElement('img');
  img.alt = '';
  box.appendChild(img);
  document.body.appendChild(box);

  let x = 0;
  let y = 0;
  let raf = 0;
  const place = () => {
    raf = 0;
    const w = box.offsetWidth;
    const h = box.offsetHeight;
    const px = Math.min(window.innerWidth - w - 16, x + 24);
    const py = Math.min(window.innerHeight - h - 16, Math.max(16, y - h / 2));
    box.style.setProperty('--x', `${px}px`);
    box.style.setProperty('--y', `${py}px`);
  };

  rows.forEach((row) => {
    const src = row.dataset.preview;
    if (!src) return;
    row.addEventListener('mouseenter', () => {
      img.src = src;
      box.classList.add('on');
    });
    row.addEventListener('mouseleave', () => box.classList.remove('on'));
    row.addEventListener('mousemove', (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(place);
    });
  });
}

setupFill();
setupPreview();
