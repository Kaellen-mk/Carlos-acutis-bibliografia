import { useEffect, useRef, useState } from 'react';
import { storySegments } from '../data';
import { animationConfig } from '../config';

type Props = { onNext: (force?: boolean) => void; setHistoryReady: (ready: boolean) => void };

export default function Historia({ onNext, setHistoryReady }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [segment, setSegment] = useState(storySegments[0]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const sync = () => {
      const time = video.currentTime || 0;
      const duration = video.duration || 125.43;
      const index = Math.min(storySegments.length - 1, Math.floor((time / duration) * storySegments.length));
      setSegment(storySegments[index]);
      setProgress(time / duration);
      if (index === storySegments.length - 1) setHistoryReady(true);
    };
    const ended = () => setHistoryReady(true);
    video.currentTime = 0;
    video.playbackRate = animationConfig.historyPlaybackRate;
    setSegment(storySegments[0]);
    video.play().catch(() => {});
    video.addEventListener('timeupdate', sync);
    video.addEventListener('ended', ended);
    return () => {
      video.pause();
      video.removeEventListener('timeupdate', sync);
      video.removeEventListener('ended', ended);
    };
  }, [setHistoryReady]);

  const segmentIndex = Number(segment.number) - 1;

  const goToSegment = (index: number) => {
    const video = videoRef.current;
    const duration = video?.duration || 125.43;
    const time = (index / storySegments.length) * duration;

    if (video) {
      video.currentTime = time;
      video.play().catch(() => {});
    }

    setSegment(storySegments[index]);
    setProgress(time / duration);
    if (index === storySegments.length - 1) setHistoryReady(true);
  };

  return (
    <section className="scene story-scene">
      <video ref={videoRef} className="story-video" src="/media/Video-Acuti.mp4" muted playsInline preload="metadata" aria-label="Vídeo de fundo da história de Carlo Acutis" />
      <div className="story-overlay" />
      <div className="story-frame mobile-page-scroll">
        <aside className="chapter-rail" aria-label="Capítulos da história">
          {storySegments.map((item, index) => (
            <button
              key={item.number}
              className={index === segmentIndex ? 'current' : ''}
              onClick={() => goToSegment(index)}
            >
              <i /> <span>{item.title}</span>
            </button>
          ))}
        </aside>
        <article className="story-copy" key={segment.number}>
          <p className="eyebrow">CAPÍTULO {segment.number}</p>
          <p className="story-period">{segment.period}</p>
          <h2>{segment.title}</h2>
          <p className="story-text">{segment.text}</p>

          {segment.number === '03' && (
            <a
              className="story-original-site"
              href="https://www.miracolieucaristici.org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar o site dos milagres eucarísticos"
            >
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect x="5" y="7" width="38" height="27" rx="2" />
                <path d="M18 41h12M24 34v7" />
              </svg>
              <span>
                Clicar aqui para visualizar o site
                <br />
                original de Carlo
              </span>
            </a>
          )}

          <nav className="story-navigation" aria-label="Navegação dos capítulos">
            <button
              type="button"
              disabled={segmentIndex === 0}
              onClick={() => goToSegment(segmentIndex - 1)}
            >
              ← Anterior
            </button>
            <button
              type="button"
              disabled={segmentIndex === storySegments.length - 1}
              onClick={() => goToSegment(segmentIndex + 1)}
            >
              Próximo →
            </button>
          </nav>
        </article>
        <div className="story-progress"><span style={{ width: `${progress * 100}%` }} /></div>
        {segmentIndex === storySegments.length - 1 && <button className="story-next" type="button" onClick={() => onNext(true)}>ROLE PARA CONTINUAR <span>↓</span></button>}
      </div>
      <div className="story-footer-mark">Carlo Acutis</div>
    </section>
  );
}
