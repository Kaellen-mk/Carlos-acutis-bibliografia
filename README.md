# São Carlo Acutis — React + Vite + TypeScript

Projeto adaptado a partir do mockup fornecido.

## Stack
- React 18
- Vite 6
- TypeScript
- CSS3
- lucide-react

## Executar
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Controle das animações
Os principais parâmetros estão em `src/config.ts`.

- `historyPlaybackRate`: velocidade do vídeo da História. `0.82` deixa a narrativa mais lenta e confortável.
- `textTransitionMs`: duração da transição dos textos.
- `navigationLockMs`: tempo de bloqueio entre mudanças de página.
- `pageTransitionMs`: duração da transição entre telas.

A História usa o vídeo real em `public/media/Video-Acutis.mp4` e troca os capítulos progressivamente conforme o tempo do vídeo.
