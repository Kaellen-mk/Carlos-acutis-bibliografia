export default function Canonizacao() {
  return (
    <section className="scene canon-scene mobile-page-scroll">
      <div className="canon-backdrop" />
      <div className="canon-copy">
        <p className="eyebrow">CANONIZAÇÃO</p>
        <h2>SUA <em>CANONIZAÇÃO</em></h2>
        <p>Um dia que entrou para a história da Igreja.</p>
        <p className="body-copy">
          Em 7 de setembro de 2025, na Praça de São Pedro, o Papa Leão XIV
          presidiu a celebração em que Carlo Acutis foi proclamado santo.
        </p>
      </div>

      <button
        type="button"
        className="canon-video"
        aria-label="Assistir à canonização"
        onClick={() =>
          window.open(
            'https://www.youtube.com/watch?v=hk-YmvqGHpA',
            '_blank',
            'noopener,noreferrer'
          )
        }
      >
        <div className="canon-video-image">
          <img src="/media/e-sao-carlos-background.png" alt="" />
          <span className="play">▶</span>
        </div>
        <strong>ASSISTA À CANONIZAÇÃO</strong>
        <small>Santa Missa e Rito da Canonização — 7 de setembro de 2025</small>
      </button>
    </section>
  );
}
