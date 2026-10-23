# ✝️ São Carlo Acutis

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" alt="Em desenvolvimento" />
</p>

<p align="center">
  <strong>Fé, tecnologia e evangelização em uma experiência digital.</strong>
  <br />
  Uma aplicação inspirada na vida e no legado de São Carlo Acutis, desenvolvida com React, Vite e TypeScript.
</p>

---

## 💻 Sobre o projeto

O **São Carlo Acutis** é uma aplicação web construída a partir de um mockup de referência, com foco em uma interface moderna, navegação fluida e uma experiência visual envolvente.

O projeto incorpora transições entre telas, animações configuráveis e uma experiência audiovisual para apresentar progressivamente os capítulos da história de Carlo Acutis.

### ✨ Destaques

- 🎨 Interface desenvolvida a partir de um mockup de referência.
- 🎬 História narrada por meio de vídeo com progressão dos capítulos.
- ⚡ Navegação com transições e controle de interações.
- 🎞️ Animações configuráveis em um único arquivo.
- 🧩 Componentes construídos com React e TypeScript.

## 🛠️ Tech Stack

| Tecnologia | Aplicação |
|---|---|
| [React 18](https://react.dev/) | Construção da interface |
| [Vite 6](https://vite.dev/) | Servidor de desenvolvimento e build |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| CSS3 | Estilização e animações |
| [Lucide React](https://lucide.dev/) | Ícones da interface |

## 🚀 Começando

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm disponível no ambiente de desenvolvimento.

### Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd <PASTA_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação.

## 📦 Build de produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Para executar uma prévia local do build:

```bash
npm run preview
```

## ⚙️ Configuração das animações

Os principais parâmetros de animação e navegação estão centralizados em:

```text
src/config.ts
```

| Parâmetro | Descrição |
|---|---|
| `historyPlaybackRate` | Controla a velocidade de reprodução do vídeo da história. O valor `0.82` proporciona uma narrativa mais lenta. |
| `textTransitionMs` | Define a duração das transições de texto, em milissegundos. |
| `navigationLockMs` | Define o intervalo de bloqueio entre mudanças de página. |
| `pageTransitionMs` | Controla a duração das transições entre telas, em milissegundos. |

Esses parâmetros permitem ajustar a experiência de navegação sem precisar modificar diretamente a lógica principal da aplicação.

## 🎥 Experiência audiovisual

O módulo de história utiliza um arquivo de vídeo local:

```text
public/
└── media/
    └── Video-Acutis.mp4
```

Durante a reprodução, os capítulos são apresentados progressivamente de acordo com o tempo do vídeo, sincronizando o conteúdo exibido com a narrativa audiovisual.

> **Importante:** mantenha o arquivo de vídeo no caminho indicado para preservar o funcionamento dessa experiência.

## 📁 Estrutura do projeto

```text
.
├── public/
│   └── media/
│       └── Video-Acutis.mp4
├── src/
│   └── config.ts
├── package.json
└── README.md
```

*Estrutura ilustrativa com base nos caminhos conhecidos do projeto. Outros diretórios e arquivos podem existir no repositório.*

## 🧑‍💻 Desenvolvimento

Sugestões para evoluir o projeto:

- [ ] Aprimorar a acessibilidade e a navegação por teclado.
- [ ] Validar a experiência em diferentes tamanhos de tela.
- [ ] Otimizar o carregamento dos recursos audiovisuais.
- [ ] Documentar os componentes e suas responsabilidades.

## 📄 Licença

A licença ainda não foi especificada. Defina uma licença antes de distribuir o projeto publicamente.

---

<p align="center">
  Desenvolvido com ❤️, tecnologia e propósito.
  <br />
  <strong>São Carlo Acutis</strong> ✝️
</p>
