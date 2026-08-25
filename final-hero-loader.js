(async function loadApprovedHero(){
  const hero = document.querySelector('.hero-shell');
  if (!hero) return;

  try {
    const files = Array.from({length: 10}, (_, i) => `assets/final-hero-${String(i).padStart(2,'0')}.txt`);
    const responses = await Promise.all(files.map(async (file) => {
      const response = await fetch(file, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${file}: HTTP ${response.status}`);
      return (await response.text()).trim();
    }));

    const base64 = responses.join('').replace(/\s+/g, '');
    if (base64.length !== 146700) throw new Error(`Unexpected hero data length: ${base64.length}`);
    hero.style.backgroundImage = `url("data:image/webp;base64,${base64}")`;
    hero.classList.add('hero-loaded');
  } catch (error) {
    console.error('Saaya hero failed to load:', error);
    hero.classList.add('hero-load-error');
  }
})();
