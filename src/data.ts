export type PageId = 'home' | 'historia' | 'milagres' | 'canonizacao' | 'galeria' | 'oracao';

export type StorySegment = {
  number: string;
  period: string;
  title: string;
  text: string;
  quote: string;
};

export const pages: PageId[] = ['home', 'historia', 'milagres', 'canonizacao', 'galeria', 'oracao'];

export const navItems: Array<[PageId, string]> = [
  ['home', 'Início'],
  ['historia', 'Sua História'],
  ['milagres', 'Milagres'],
  ['canonizacao', 'Canonização'],
  ['galeria', 'Galeria'],
];

export const storySegments: StorySegment[] = [
  {
    number: '01', period: '03 DE MAIO DE 1991', title: 'O Menino',
    text: 'Em Londres, nascia Carlo Acutis. Desde muito cedo, demonstraria uma profunda sensibilidade para as coisas de Deus. Alegre, curioso e próximo de sua família, cresceu como um menino de seu tempo, mas com um coração voltado para o céu.',
    quote: '“Todos nascem como originais, mas muitos morrem como fotópias.”',
  },
  {
    number: '02', period: 'A EUCARISTIA', title: 'Diante de Jesus',
    text: 'Para Carlo, a Eucaristia era o centro de sua vida. Ele encontrava na Santa Missa e na adoração ao Santíssimo Sacramento uma maneira de permanecer próximo de Cristo.',
    quote: '“A Eucaristia é a minha estrada para o céu.”',
  },
  {
    number: '03', period: 'UM JOVEM E A TECNOLOGIA', title: 'Fé na era digital',
    text: 'Carlo cresceu em uma época marcada pelo avanço da informática e da internet, onde gostava de computadores, programação, videogames e criação de conteúdo. Mas ele enxergava na tecnologia algo maior do que o entretenimento, utilizando seus conhecimentos para aproximar as pessoas do sagrado. Com esse propósito delicado e inovador, Carlo criou um site especial para reunir e catalogar relatos de milagres eucarísticos ao redor do mundo, transformando a internet em um verdadeiro instrumento de amor, fé e evangelização.',
    quote: '“A internet também pode ser um caminho para Deus.”',
  },
  {
    number: '04', period: 'AMAR A DEUS. AMAR O PRÓXIMO.', title: 'Uma vida de caridade',
    text: 'A fé de Carlo não permanecia apenas dentro da igreja. Ele procurava enxergar Cristo nas pessoas que encontrava, especialmente nos pobres, nos que sofriam e nos que estavam sozinhos. Seus gestos de caridade eram simples e discretos, mas cheios de amor.',
    quote: '“O que nos une a Deus nos une também aos outros.”',
  },
  {
    number: '05', period: 'OUTUBRO DE 2006', title: 'A última prova',
    text: 'Em outubro de 2006, Carlo foi diagnosticado com leucemia. Mesmo diante da doença, manteve sua fé, sua alegria e sua confiança em Deus. Ele ofereceu seu sofrimento e continuou próximo de sua família e dos que o amavam.',
    quote: '“Estou feliz por morrer porque vivi minha vida sem desperdiçar nem um minuto com coisas que não agradam a Deus.”',
  },
  {
    number: '06', period: 'SEU LEGADO CONTINUA', title: 'Um legado que continua',
    text: 'Carlo viveu apenas quinze anos, mas sua história não terminou naquele dia. Seu testemunho atravessou fronteiras e alcançou especialmente os jovens, mostrando que a santidade pode ser buscada também no cotidiano.',
    quote: '“Não eu, mas Deus.”',
  },
];

type GalleryImagePosition = `${number}% ${number}%`;

const galleryImagePositions: Record<string, GalleryImagePosition> = {
  '/media/imagens-extraidas-originais/img-004.jpg': '50% 22%',
  // Defina cada enquadramento independentemente, por exemplo: '30% 50%' ou '70% 40%'.
};

const galleryImageSources = [
  '/media/carlo-2.jpg',
  '/media/carlo-03.jpg',
  '/media/carlo-04.jpg',
  '/media/carlo-05.jpg',
  '/media/carlo-06.jpg',
  ...[
    'img-004.jpg',
    'img-005.jpg',
    'img-006.jpg',
    'img-007.jpg',
    'img-008.jpg',
    'img-009.jpg',
    'img-010.jpg',
    'img-011.jpg',
    'img-012.jpg',
    'img-013.jpg',
    'img-014.jpg',
    'img-015.jpg',
    'img-016.jpg',
    'img-017.jpg',
    'img-018.jpg',
    'img-019.jpg',
    'img-020.jpg',
    'img-021.jpg',
    'img-022.jpg',
    'img-023.jpg',
    'img-024.jpg',
    'img-025.jpg',
    'img-026.jpg',
    'img-027.jpg',
    'img-028.jpg',
    'img-029.jpg',
    'img-030.jpg',
    'img-031.jpg',
    'img-032.jpg',
    'img-034.jpg',
    'img-035.jpg',
    'img-036.jpg',
    'img-037.jpg',
    'img-038.jpg',
    'img-040.jpg',
    'img-044.jpg',
    'img-045.jpg',
    'img-046.jpg',
    'img-047.jpg',
    'img-048.jpg',
    'img-049.jpg',
    'img-050.jpg',
    'img-051.jpg',
    'img-052.jpg',
    'img-053.jpg',
    'img-054.jpg',
    'img-055.jpg',
  ].map((filename) => `/media/imagens-extraidas-originais/${filename}`),
];

export const galleryItems = galleryImageSources.map((src, index) => ({
  src,
  label: `REGISTRO ${String(index + 1).padStart(2, '0')}`,
  objectPosition: galleryImagePositions[src] ?? '50% 50%',
}));

export const rosarySteps = [
  ['01', 'No Crucifixo', 'Reze o Credo.'],
  ['02', 'Jaculatórias', '“Jesus, aumenta minha fé, esperança e amor.”'],
  ['03', 'Na conta azul', 'Reza-se o Pai-Nosso.'],
  ['04', '1º Mistério', 'Amor à Eucaristia + 10 Ave-Marias.'],
] as const;
