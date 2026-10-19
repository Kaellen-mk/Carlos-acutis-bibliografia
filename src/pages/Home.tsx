type HomeProps = {
  onNext: () => void;
};

export default function Home({ onNext }: HomeProps) {
  return (
    <section className="scene home-scene">
      <img
        className="home-background"
        src="/media/e-sao-carlos-background.png"
        alt="Paisagem de Assis ao entardecer"
      />
      <div className="home-atmosphere" aria-hidden="true" />
      <img
        className="home-person"
        src="/media/carlo-hero.png"
        alt="São Carlo Acutis com uma mochila"
      />

      <div className="home-content">
        <p className="eyebrow">SÃO CARLO ACUTIS</p>

        <h1>
          <span>São Carlo</span>
          <em>Acutis</em>
        </h1>

        <p className="quote">“Não eu, mas Deus.”</p>
        <p className="years">1991 — 2006</p>

        <p className="intro">
          Um jovem que descobriu que a
          <br />
          santidade também pode ser
          <br />
          vivida no cotidiano.
        </p>

        <button className="gold-button" onClick={onNext}>
          <span>CONHECER SUA HISTÓRIA</span>
          <b aria-hidden="true">→</b>
        </button>
      </div>
    </section>
  );
}
