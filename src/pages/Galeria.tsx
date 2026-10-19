import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryItems } from '../data';

const initialVisibleCount = 9;
const revealCount = 8;

export default function Galeria() {
  const [active, setActive] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const move = (direction: number) => {
    const next = active === null ? 0 : (active + direction + galleryItems.length) % galleryItems.length;
    setActive(next);
    setVisibleCount((count) => Math.max(count, next + 1));
  };
  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (active === null) return; if (e.key === 'Escape') setActive(null); if (e.key === 'ArrowRight') move(1); if (e.key === 'ArrowLeft') move(-1); };
    window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key);
  }, [active]);
  return (
    <section className="scene gallery-scene">
      <div className="gallery-bg" />
      <div className="gallery-scroll">
        <div className="gallery-content">
          <div className="gallery-heading"><p className="eyebrow">GALERIA</p><h2>Imagens que <em>inspiram</em></h2><p>Momentos de uma vida repleta de fé, simplicidade e amor por Deus.</p></div>
          <div className="gallery-grid" aria-label="Fotos da Galeria">
            {galleryItems.slice(0, visibleCount).map((item, index) => <button key={item.src} className={`gallery-item gallery-tile-${index % 9 + 1}`} onClick={() => setActive(index)}><img src={item.src} alt={`${item.label} da galeria`} style={{ objectPosition: item.objectPosition }} loading="lazy" /><span>{item.label}</span></button>)}
          </div>
          {visibleCount < galleryItems.length && (
            <button className="gallery-more" type="button" onClick={() => setVisibleCount((count) => Math.min(count + revealCount, galleryItems.length))}>
              DESCUBRA MAIS
            </button>
          )}
        </div>
      </div>
      {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Visualização da galeria: ${galleryItems[active].label}`}><button className="lightbox-close" onClick={() => setActive(null)} aria-label="Fechar"><X /></button><button className="lightbox-arrow left" onClick={() => move(-1)} aria-label="Anterior"><ChevronLeft /></button><img src={galleryItems[active].src} alt={`${galleryItems[active].label} da galeria`} /><button className="lightbox-arrow right" onClick={() => move(1)} aria-label="Próxima"><ChevronRight /></button></div>}
    </section>
  );
}
