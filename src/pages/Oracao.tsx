import { useEffect, useRef, useState, type CSSProperties } from 'react';

type RosaryPart = {
  id: string;
  title: string;
  representation: string;
  guidance: string;
  prayer: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

const gloryPrayer = '“Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.”';

const rosaryParts: RosaryPart[] = [
  {
    id: 'cross',
    title: 'Início — Na Cruz',
    representation: 'Segurando a Cruz,comece o terço com o Sinal da Cruz e, ainda na Cruz, reze o Credo.',
    guidance:
      '1. Faça o Sinal da Cruz.\n' +
      '2. Reze o Credo completo.\n' +
      '3. Em seguida, siga para a primeira conta grande.',
    prayer: 'Sinal da Cruz: “Em nome do Pai, do Filho e do Espírito Santo. Amém.”\nO Credo: “Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra...” ',
    x: 80,
    y: 80,
    width: 13,
    height: 14,
  },
  {
    id: 'carlo',
    title: 'Encerramento — Oração a São Carlo',
    representation: 'Após o Glória ao Pai da quinta dezena, encerre o terço com a oração a São Carlo Acutis e a Salve Rainha.',
    guidance: 'Na medalha central ou na conta final, reze a oração a São Carlo Acutis, faça seu pedido em silêncio, reze a Salve Rainha e termine com o Sinal da Cruz.',
    prayer: '“Ó Deus, nosso Pai, obrigado por nos ter dado São Carlo, modelo de vida para os jovens e mensagem de amor para todos. Tu o fizeste apaixonar-se por Teu Filho Jesus, fazendo da Eucaristia a sua ‘estrada para o Céu’. Concede também a mim, por sua intercessão, a graça de que preciso... (fazer o pedido em silêncio). Amém.”\n\n“Salve Rainha, Mãe de Misericórdia, vida, doçura e esperança nossa, salve!...”',
    x: 64,
    y: 47,
    width: 11,
    height: 11,
  },
  {
    id: 'father-first',
    title: 'Pai-Nosso — Conta isolada',
    representation: 'Reze um Pai-Nosso nesta conta, antes de iniciar as Ave-Marias.',
    guidance: 'Segure a conta isolada e reze com calma e atenção a oração do Pai-Nosso. Ao terminar, siga para as três contas pequenas seguintes, rezando uma Ave-Maria em cada conta.',
    prayer: '“Pai nosso que estais nos Céus, santificado seja o vosso nome; venha a nós o vosso Reino, seja feita a vossa vontade, assim na Terra como no Céu...”',
    x: 72,
    y: 73,
    width: 11,
    height: 10,
  },
  {
    id: 'father-third',
    title: 'Três contas juntas — Ave-Marias',
    representation: 'As três contas que seguem a primeira conta isolada acompanham as Ave-Marias do início do terço.',
    guidance: 'Reze uma Ave-Maria em cada conta, totalizando três Ave-Marias.',
    prayer: 'Três Ave-Marias — uma em cada conta.',
    x: 62,
    y: 68,
    width: 16,
    height: 13,
  },
  {
    id: 'father-fourth',
    title: 'Espaço antes da primeira dezena — Glória ao Pai',
    representation: 'Antes de começar a primeira dezena, reze o Glória ao Pai.',
    guidance: 'Reze esta oração no espaço antes da primeira dezena.',
    prayer: gloryPrayer,
    x: 63,
    y: 41,
    width: 9,
    height: 10,
  },
  {
    id: 'mystery-one',
    title: '1º Mistério — Amor à Eucaristia',
    representation: '“No primeiro mistério, contemplamos o profundo amor de São Carlo Acutis por Jesus Sacramentado, fazendo da Comunhão diária o centro de sua vida. Carlo dizia: ‘A Eucaristia é a minha autoestrada para o Céu’.”',
    guidance: 'Na conta grande, reze um Pai-Nosso. Nas dez contas pequenas, reze dez Ave-Marias. Ao final, reze um Glória ao Pai.',
    prayer: gloryPrayer,
    
    x: 50,
    y: 28,
    width: 17,
    height: 12,
  },
  {
    id: 'mystery-two',
    title: '2º Mistério — Carlo, apóstolo da internet',
    representation: '“No segundo mistério, contemplamos o testemunho de Carlo como apóstolo da internet, usando as redes para evangelizar. Carlo dizia: ‘A internet não é má, é o uso que fazemos dela que importa’.”',
    guidance: 'Na conta grande, reze um Pai-Nosso. Nas dez contas pequenas, reze dez Ave-Marias. Ao final, reze um Glória ao Pai.',
    prayer: gloryPrayer,

    x: 17,
    y: 50,
    width: 19,
    height: 13,
  },
  {
    id: 'mystery-three',
    title: '3º Mistério — Viver a própria essência',
    representation: '“No terceiro mistério, contemplamos o chamado de Carlo a vivermos a nossa própria essência. Carlo dizia: ‘Todos nascemos originais, mas muitos morrem como fotocópias’.”',
    guidance: 'Na conta grande, reze um Pai-Nosso. Nas dez contas pequenas, reze dez Ave-Marias. Ao final, reze um Glória ao Pai.',
    prayer: gloryPrayer,

    x: 13,
    y: 15,
    width: 13,
    height: 19,
  },
  {
    id: 'mystery-four',
    title: '4º Mistério — A alegria cristã',
    representation: '“No quarto mistério, contemplamos a alegria cristã de Carlo, que nos ensina a olhar para Deus. Carlo dizia: ‘A tristeza é o olhar voltado para si; a felicidade é o olhar voltado para Deus’.”',
    guidance: 'Na conta grande, reze um Pai-Nosso. Nas dez contas pequenas, reze dez Ave-Marias. Ao final, reze um Glória ao Pai.',
    prayer: gloryPrayer,

    x: 42,
    y: 0,
    width: 19,
    height: 13,
  },
  {
    id: 'mystery-five',
    title: '5º Mistério — O infinito e o Céu',
    representation: '“No quinto mistério, contemplamos o desapego de Carlo pelas coisas da Terra. Carlo dizia: ‘A nossa meta deve ser o infinito, não o finito. O infinito é a nossa pátria. Desde sempre o Céu nos espera’.”',
    guidance: 'Na conta grande, reze um Pai-Nosso. Nas dez contas pequenas, reze dez Ave-Marias. Ao final, reze um Glória ao Pai. Depois, encerre com a oração a São Carlo Acutis e a Salve Rainha.',
    prayer: gloryPrayer,

    x: 73,
    y: 26,
    width: 13,
    height: 18,
  },
  {
    id: 'tail',
    title: 'Sinal da Cruz — Encerramento',
    representation: 'Depois da oração a São Carlo e da Salve Rainha, conclua o terço com o Sinal da Cruz.',
    guidance: 'Faça o Sinal da Cruz para encerrar a oração.',
    prayer: '“Em nome do Pai, do Filho e do Espírito Santo. Amém.”',
    // x: 72,
    // y: 73,
    x: 60,
    y: 59,
    width: 11,
    height: 10,
  },
];

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export default function Oracao() {
  const sceneRef = useRef<HTMLElement>(null);
  const rosaryRef = useRef<HTMLDivElement>(null);
  const revealTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);
  const [selectedPart, setSelectedPart] = useState<RosaryPart | null>(null);
  const [explanationVisible, setExplanationVisible] = useState(false);
  const [camera, setCamera] = useState({ x: 0, y: 0, scale: 1 });
  const [isClosing, setIsClosing] = useState(false);
  const animationWait = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 900;

  const focusPart = (part: RosaryPart, target: HTMLButtonElement) => {
    if (isClosing) return;
    const scene = sceneRef.current;
    const rosary = rosaryRef.current;
    if (!scene || !rosary) return;
    window.clearTimeout(revealTimer.current);
    window.clearTimeout(closeTimer.current);

    const sceneRect = scene.getBoundingClientRect();
    const rosaryRect = rosary.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const sceneCenterX = sceneRect.left + sceneRect.width / 2;
    const sceneCenterY = sceneRect.top + sceneRect.height * 0.44;
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;
    const scale = clamp(78 / Math.max(targetRect.width, targetRect.height), 2.5, 4.2);

    setCamera({
      x: sceneCenterX - (rosaryRect.left + rosaryRect.width / 2) - (targetX - (rosaryRect.left + rosaryRect.width / 2)) * scale,
      y: sceneCenterY - (rosaryRect.top + rosaryRect.height / 2) - (targetY - (rosaryRect.top + rosaryRect.height / 2)) * scale,
      scale,
    });
    setSelectedPart(part);
    setExplanationVisible(false);
    setIsClosing(false);
    revealTimer.current = window.setTimeout(() => setExplanationVisible(true), animationWait);
  };

  const closePart = () => {
    window.clearTimeout(revealTimer.current);
    setIsClosing(true);
    setCamera({ x: 0, y: 0, scale: 1 });
    closeTimer.current = window.setTimeout(() => {
      setSelectedPart(null);
      setExplanationVisible(false);
      setIsClosing(false);
    }, animationWait);
  };

  useEffect(() => () => {
    window.clearTimeout(revealTimer.current);
    window.clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    if (!selectedPart || isClosing) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePart();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedPart, isClosing]);

  return (
    <section
      className={`scene prayer-scene${selectedPart ? ' is-focused' : ''}`}
      ref={sceneRef}
      onWheel={(event) => { if (selectedPart) event.stopPropagation(); }}
      onTouchStart={(event) => { if (selectedPart) event.stopPropagation(); }}
      onTouchEnd={(event) => { if (selectedPart) event.stopPropagation(); }}
    >
      <div className="prayer-bg" />
      <header className={`prayer-copy${selectedPart ? ' copy-hidden' : ''}`}>
        <p className="eyebrow">SÃO CARLO ACUTIS</p>
        <p className="prayer-kicker">UM CAMINHO DE ORAÇÃO</p>
        <h2>Terço de <em>São Carlo Acutis</em></h2>
        <p>Toque em uma conta para se aproximar e descobrir o que ela nos ensina.</p>
      </header>

      <div
        className="rosary-camera"
        ref={rosaryRef}
        style={{
          '--camera-x': `${camera.x}px`,
          '--camera-y': `${camera.y}px`,
          '--camera-scale': camera.scale,
          '--camera-duration': `${animationWait}ms`,
        } as CSSProperties}
        aria-label="Terço de São Carlo Acutis"
      >
        <img className="rosary-image" src="/media/terço.png" alt="Terço azul e vermelho de São Carlo Acutis com medalha e crucifixo" />
        {rosaryParts.map((part) => (
          <button
            key={part.id}
            className={`rosary-hotspot${selectedPart?.id === part.id ? ' hotspot-selected' : ''}`}
            style={{ left: `${part.x}%`, top: `${part.y}%`, width: `${part.width}%`, height: `${part.height}%` }}
            aria-label={`Explorar: ${part.title}`}
            aria-pressed={selectedPart?.id === part.id}
            onClick={(event) => focusPart(part, event.currentTarget)}
            tabIndex={selectedPart ? -1 : 0}
            disabled={!!selectedPart}
          />
        ))}
      </div>

      {selectedPart && (
        <div className={`rosary-focus-shade${isClosing ? ' shade-closing' : ''}`} aria-hidden="true" />
      )}

      {selectedPart && explanationVisible && (
        <article
          className={`rosary-explanation mobile-page-scroll${isClosing ? ' explanation-closing' : ''}`}
          aria-live="polite"
        >
          <button className="rosary-back" type="button" onClick={closePart}>← Voltar ao Terço</button>
          <p className="eyebrow">CONTEMPLAR • REZAR • SEGUIR</p>
          <h3>{selectedPart.title}</h3>
          <p>{selectedPart.representation}</p>
          <p><strong>Como rezar</strong>{selectedPart.guidance}</p>
          <blockquote>{selectedPart.prayer}</blockquote>
        </article>
      )}
    </section>
  );
}
