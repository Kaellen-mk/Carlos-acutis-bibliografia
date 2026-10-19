const miracles = [
  {
    number: '01',
    label: '1º MILAGRE — BRASIL (2013)',
    title: 'Caminho para',
    emphasis: 'Beatificação',
    description:
      'Uma criança enfrentava uma doença grave, e sua família decidiu pedir a intercessão de Carlo. O que aconteceu depois despertou a atenção de muitas pessoas.',
    image: '/media/Milagres_01.png',
    flag: '/media/Milagres_brasil.png',
    link: 'https://g1.globo.com/ms/mato-grosso-do-sul/noticia/2025/04/19/testemunho-de-fe-conheca-a-historia-do-jovem-curado-por-carlo-acutis-no-brasil.ghtml',
  },
  {
    number: '02',
    label: '2º MILAGRE — ITÁLIA (2022)',
    title: 'Caminho para',
    emphasis: 'Canonização',
    description:
      'Uma jovem ficou gravemente doente, e sua mãe pediu a intercessão de Carlo. Depois disso, sua recuperação tomou um rumo que ninguém esperava.',
    image: '/media/Milagres_02.png',
    flag: '/media/Milagres_costa-rica.png',
    link: 'https://www.youtube.com/watch?v=QpOcVV23C84',
  },
];

export default function Milagres() {
  return (
    <section className="scene miracles-scene mobile-page-scroll">
      <div className="miracles-top">
        <p className="eyebrow">SÃO CARLO ACUTIS</p>
        <span>CAMINHO PARA A SANTIDADE</span>
      </div>

      <div className="miracle-grid">
        {miracles.map((miracle) => (
          <article className="miracle-card" key={miracle.number}>
            <img
              className="miracle-image"
              src={miracle.image}
              alt="Imagem ilustrativa do caminho de canonização"
            />

            <div className="miracle-content">
              <p className="miracle-label">{miracle.label}</p>

              <h2>
                {miracle.title} <em>{miracle.emphasis}</em>
              </h2>

              <p>{miracle.description}</p>

              <div className="miracle-actions">
                <img src={miracle.flag} alt="" />

                <button
                  type="button"
                  onClick={() =>
                    window.open(miracle.link, '_blank', 'noopener,noreferrer')
                  }
                >
                  CONHECER O CASO <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}