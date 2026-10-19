import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, type PageId } from '../data';

type Props = { currentPage: PageId; onNavigate: (page: PageId) => void };

export default function Header({ currentPage, onNavigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page: PageId) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className={`header${menuOpen ? ' menu-open' : ''}`}>
      <button className="brand" onClick={() => navigate('home')} aria-label="Ir para o início">
        <img className="brand-cross" src="/media/carlo-cross.png" alt="" aria-hidden="true" />
        <span className="brand-name">SÃO CARLO ACUTIS</span>
      </button>
      <nav className="nav" aria-label="Navegação principal">
        {navItems.map(([id, label]) => (
          <button key={id} className={`nav-link ${currentPage === id ? 'active' : ''}`} onClick={() => navigate(id)}>
            {label}
          </button>
        ))}
      </nav>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <button
        className="pray-button"
        type="button"
        onClick={() => navigate('oracao')}
      >
        <img src="/media/icone_rezar.png" alt="" />
        <span>REZAR</span>
      </button>
    </header>
  );
}
