import { useCallback, useEffect, useRef, useState } from 'react';
import { pages, type PageId } from './data';
import { animationConfig } from './config';
import Header from './components/Header';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Milagres from './pages/Milagres';
import Canonizacao from './pages/Canonizacao';
import Galeria from './pages/Galeria';
import Oracao from './pages/Oracao';

const renderPage = (page: PageId, props: { onNext: (force?: boolean) => void; historyReady: boolean; setHistoryReady: (ready: boolean) => void }) => {
  switch (page) {
    case 'home': return <Home {...props} />;
    case 'historia': return <Historia {...props} />;
    case 'milagres': return <Milagres />;
    case 'canonizacao': return <Canonizacao />;
    case 'galeria': return <Galeria />;
    case 'oracao': return <Oracao />;
  }
};

const getScrollableTarget = (target: EventTarget | null) => {
  if (!(target instanceof Element)) return null;
  const element = target.closest<HTMLElement>('.mobile-page-scroll');
  if (!element) return null;
  const overflowY = window.getComputedStyle(element).overflowY;
  return (overflowY === 'auto' || overflowY === 'scroll') && element.scrollHeight > element.clientHeight + 1
    ? element
    : null;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [locked, setLocked] = useState(false);
  const [historyReady, setHistoryReady] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const touchStartScroller = useRef<HTMLElement | null>(null);
  const touchStartScrollTop = useRef(0);

  const goTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(pages.length - 1, index));
    if (next === currentPage || locked) return;
    setDirection(next > currentPage ? 1 : -1);
    setLocked(true);
    setCurrentPage(next);
    window.setTimeout(() => setLocked(false), animationConfig.navigationLockMs);
  }, [currentPage, locked]);

  const handleNext = useCallback((force = false) => {
    if (currentPage === 1 && !historyReady && !force) return;
    goTo(currentPage + 1);
  }, [currentPage, historyReady, goTo]);

  const handlePrev = useCallback(() => goTo(currentPage - 1), [currentPage, goTo]);

  useEffect(() => {
    const wheel = (e: WheelEvent) => {
      if (pages[currentPage] === 'galeria') {
        if (e.ctrlKey) return;
        const gallery = document.querySelector<HTMLElement>('.gallery-scroll');
        if (!gallery) return;
        e.preventDefault();
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        const multiplier = e.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? 16
          : e.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? gallery.clientHeight
            : 1;
        gallery.scrollTop += delta * multiplier;
        return;
      }
      const target = e.target instanceof Element ? e.target : null;
      const scrollable = getScrollableTarget(target);
      const scrollDelta = e.deltaY;
      if (
        scrollable &&
        ((scrollDelta > 0 && scrollable.scrollTop + scrollable.clientHeight < scrollable.scrollHeight - 1) ||
          (scrollDelta < 0 && scrollable.scrollTop > 0))
      ) return;
      e.preventDefault();
      if (Math.abs(e.deltaY) < animationConfig.wheelThreshold || locked) return;
      e.deltaY > 0 ? handleNext() : handlePrev();
    };
    const key = (e: KeyboardEvent) => {
      if (pages[currentPage] === 'galeria') return;
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); handleNext(); }
      if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); handlePrev(); }
      if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      if (e.key === 'End') { e.preventDefault(); goTo(pages.length - 1); }
    };
    const touchStart = (e: TouchEvent) => {
      touchStartY.current = e.changedTouches[0]?.clientY ?? null;
      touchStartScroller.current = getScrollableTarget(e.target);
      touchStartScrollTop.current = touchStartScroller.current?.scrollTop ?? 0;
    };
    const touchEnd = (e: TouchEvent) => {
      if (pages[currentPage] === 'galeria') {
        touchStartY.current = null;
        touchStartScroller.current = null;
        return;
      }
      if (touchStartY.current == null || locked) {
        touchStartY.current = null;
        touchStartScroller.current = null;
        return;
      }
      const delta = touchStartY.current - (e.changedTouches[0]?.clientY ?? touchStartY.current);
      const scroller = touchStartScroller.current;
      if (scroller && Math.abs(scroller.scrollTop - touchStartScrollTop.current) > 1) {
        touchStartY.current = null;
        touchStartScroller.current = null;
        return;
      }
      if (
        scroller &&
        ((delta > 0 && scroller.scrollTop + scroller.clientHeight < scroller.scrollHeight - 1) ||
          (delta < 0 && scroller.scrollTop > 0))
      ) {
        touchStartY.current = null;
        touchStartScroller.current = null;
        return;
      }
      if (Math.abs(delta) > animationConfig.touchThreshold) delta > 0 ? handleNext() : handlePrev();
      touchStartY.current = null;
      touchStartScroller.current = null;
    };
    window.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('keydown', key);
    window.addEventListener('touchstart', touchStart, { passive: true });
    window.addEventListener('touchend', touchEnd, { passive: true });
    return () => {
      window.removeEventListener('wheel', wheel);
      window.removeEventListener('keydown', key);
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchend', touchEnd);
    };
  }, [currentPage, goTo, handleNext, handlePrev, locked]);

  const navigate = (page: PageId) => {
    const target = pages.indexOf(page);
    if (target >= 0) goTo(target);
  };

  return (
    <main className="app">
      <Header currentPage={pages[currentPage]} onNavigate={navigate} />
      <PageTransition page={pages[currentPage]} direction={direction}>
        {renderPage(pages[currentPage], { onNext: handleNext, historyReady, setHistoryReady })}
      </PageTransition>
    </main>
  );
}
