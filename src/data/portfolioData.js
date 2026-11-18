import annaPortrait from '../assets/images/foto.portfolio.jpeg';
import tasksImcPreview from '../assets/images/tasks_imc_showcase_1794147719476.jpg';
import cardapioPreview from '../assets/images/cardapio_showcase_1794147718480.jpg';
import finansmartPreview from '../assets/images/finansmart_showcase_1794147718112.jpg';

export const PERSONAL_INFO = {
  name: 'Anna Luiza Pereira Silva',
  role: {
    pt: 'Estudante de Engenharia de Software · PUC Minas',
    en: 'Software Engineering Student · PUC Minas'
  },
  institution: 'PUC Minas · 2º Período',
  location: 'Minas Gerais, Brasil',
  email: 'annalumodascolonial@gmail.com',
  github: 'https://github.com/annaluizapsilva-03',
  linkedin: 'https://www.linkedin.com/in/annaluizapereira03/',
  instagram: 'https://www.instagram.com/annapsilval/',
  whatsappUrl: 'https://wa.link/g9sdh1',
 avatarUrl: annaPortrait,
  about: {
   pt: {
  bio: 'Olá! Sou Anna Luiza, estudante de Engenharia de Software na PUC Minas, apaixonada por tecnologia, inovação e desenvolvimento de soluções que geram impacto positivo. Estou em constante aprendizado e aprimoramento, desenvolvendo habilidades em programação, desenvolvimento web e novas tecnologias, com interesse especial em inteligência artificial, gestão de produtos e inovação digital.',

  education: 'Cursando Engenharia de Software na PUC Minas, onde venho desenvolvendo conhecimentos em lógica de programação, algoritmos, desenvolvimento web, bancos de dados e arquitetura de software. Complemento minha formação por meio de estudos independentes e projetos práticos, buscando ampliar minhas habilidades técnicas e acompanhar as novas tendências do mercado de tecnologia.',

  careerGoals: 'Meu objetivo é construir uma trajetória profissional que una tecnologia, estratégia e criatividade. Busco oportunidades para aplicar meus conhecimentos, desenvolver novas habilidades e contribuir com equipes inovadoras. Tenho especial interesse em desenvolvimento de software, inteligência artificial e gestão de produtos, áreas nas quais desejo crescer profissionalmente e participar da criação de soluções eficientes e relevantes.'
},
en: {
  bio: "Hello! I'm Anna Luiza, a Software Engineering student at PUC Minas, passionate about technology, innovation, and developing solutions that create a positive impact. I am constantly learning and improving my skills in programming, web development, and emerging technologies, with a special interest in artificial intelligence, product management, and digital innovation.",

  education: 'Currently pursuing a degree in Software Engineering at PUC Minas, where I am developing knowledge in programming logic, algorithms, web development, databases, and software architecture. I complement my academic education with independent studies and practical projects, aiming to expand my technical skills and keep up with new trends in the technology industry.',

  careerGoals: 'My goal is to build a professional career that combines technology, strategy, and creativity. I am seeking opportunities to apply my knowledge, develop new skills, and contribute to innovative teams. I am particularly interested in software development, artificial intelligence, and product management, areas in which I aim to grow professionally and help create efficient and meaningful solutions.'
}
  }
};

export const PROJECTS = [
  {
    id: 'lista-de-tarefas',
    order: 1,
    title: 'Lista de Tarefas',
    slug: 'lista-de-tarefas',
    date: '07 de Julho, 2026',
    year: '2026',
    category: 'Produtividade',
    tagline: {
      pt: 'Aplicação web simples para gerenciar tarefas do dia a dia',
      en: 'Clean web application for managing daily tasks'
    },
    description: {
      pt: 'Aplicação web desenvolvida com HTML, CSS e JavaScript puro para organizar afazeres diários. Permite adicionar e remover tarefas por meio de uma interface simples, responsiva e intuitiva, criada para praticar os conceitos fundamentais de desenvolvimento web e manipulação do DOM.',
      en: 'Web application built with vanilla HTML, CSS, and JavaScript to organize daily tasks. Allows users to add and remove tasks through a clean, responsive interface created to practice web fundamentals and DOM manipulation.'
    },
    highlights: {
      pt: [
        'Adição e remoção dinâmica de tarefas na interface',
        'Manipulação direta do DOM com JavaScript puro',
        'Layout simples, direto e responsivo em HTML5 e CSS3'
      ],
      en: [
        'Dynamic task creation and removal in the interface',
        'Direct DOM manipulation using vanilla JavaScript',
        'Clean, straightforward responsive layout in HTML5 and CSS3'
      ]
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM API'],
    githubUrl: 'https://github.com/annaluizapsilva-03/Lista-de-Tarefas',
    previewImage: tasksImcPreview,
    hasInteractiveDemo: true
  },
  {
    id: 'calculadora-imc',
    order: 2,
    title: 'Calculadora IMC',
    slug: 'calculadora-imc',
    date: '08 de Julho, 2026',
    year: '2026',
    category: 'Saúde & Lógica',
    tagline: {
      pt: 'Cálculo interativo de Índice de Massa Corporal com JavaScript e DOM',
      en: 'Interactive Body Mass Index calculator with JavaScript and DOM'
    },
    description: {
      pt: 'Aplicação web desenvolvida com HTML, CSS e JavaScript que calcula o Índice de Massa Corporal (IMC) a partir do peso e da altura informados pelo usuário, classificando o resultado segundo faixas de referência e praticando lógica de programação e validação de entradas.',
      en: 'Web application built with HTML, CSS, and JavaScript that calculates Body Mass Index (BMI) from user weight and height inputs, classifying results across health ranges to practice programming logic and input validation.'
    },
    highlights: {
      pt: [
        'Cálculo automático de IMC a partir de peso e altura',
        'Classificação clara das faixas de resultado em tela',
        'Prática de lógica condicional e manipulação do DOM em JavaScript'
      ],
      en: [
        'Automatic BMI calculation from weight and height inputs',
        'Clear classification across reference intervals on screen',
        'Practice of conditional logic and DOM manipulation in JavaScript'
      ]
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'DOM API'],
    githubUrl: 'https://github.com/annaluizapsilva-03/Calculadora-IMC',
    previewImage: tasksImcPreview,
    hasInteractiveDemo: true
  },
  {
    id: 'cadastro-alunos',
    order: 3,
    title: 'Cadastro de Alunos',
    slug: 'cadastro-alunos',
    date: '08 de Julho, 2026',
    year: '2026',
    category: 'Python & CLI',
    tagline: {
      pt: 'Sistema em Python via terminal para cadastro e gestão de alunos',
      en: 'Python terminal system for student registration and management'
    },
    description: {
      pt: 'Sistema desenvolvido em Python durante os estudos de Engenharia de Software para cadastrar, listar, buscar e remover alunos através do terminal. Focado em fortalecer a lógica de programação, estruturas de dados e operações CRUD em linha de comando.',
      en: 'System developed in Python during Software Engineering studies to register, list, search, and remove students via terminal. Focused on strengthening programming logic, data structures, and command-line CRUD operations.'
    },
    highlights: {
      pt: [
        'Operações completas de cadastro, listagem, busca e remoção',
        'Estruturas de dados em memória (listas e dicionários) em Python',
        'Fluxo interativo de menu em linha de comando (CLI)'
      ],
      en: [
        'Complete registration, listing, search, and removal operations',
        'In-memory data structures (lists and dictionaries) in Python',
        'Interactive command-line menu workflow (CLI)'
      ]
    },
    technologies: ['Python', 'CLI / Terminal', 'Estruturas de Dados', 'CRUD'],
    githubUrl: 'https://github.com/annaluizapsilva-03/Cadastro-Alunos',
    previewImage: tasksImcPreview,
    hasInteractiveDemo: true
  },
  {
    id: 'cardapio-restaurante',
    order: 4,
    title: 'Cardápio Restaurante — Josephina',
    slug: 'cardapio-restaurante',
    date: '30 de Outubro, 2026',
    year: '2026',
    category: 'React & API Simulada',
    tagline: {
      pt: 'Catálogo interativo de produtos desenvolvido em React com JSON Server',
      en: 'Interactive product catalog built in React with JSON Server'
    },
    description: {
      pt: 'Catálogo de produtos criado para o restaurante Josephina durante as aulas de React. Permite visualizar pratos, pesquisar pelo nome e consultar detalhes completos dos itens, aplicando componentização, gerenciamento de estado (useState), props e consumo de dados com JSON Server.',
      en: 'Product catalog created for Josephina restaurant during React classes. Allows users to browse dishes, search by name, and inspect item details while applying componentization, state management, props, and JSON Server data fetching.'
    },
    highlights: {
      pt: [
        'Componentização, gerenciamento de estado e passagem de props em React',
        'Busca dinâmica de pratos por nome em tempo real',
        'Integração com banco simulado via JSON Server e build com Vite'
      ],
      en: [
        'Componentization, state management, and props flow in React',
        'Real-time dynamic dish search by name',
        'Mock REST API integration with JSON Server and Vite bundler'
      ]
    },
    technologies: ['React (JSX)', 'JavaScript', 'CSS3', 'Vite', 'JSON Server'],
    githubUrl: 'https://github.com/annaluizapsilva-03/Cardapio-Restaurante',
    previewImage: cardapioPreview,
    hasInteractiveDemo: true
  },
  {
    id: 'finansmart',
    order: 5,
    title: 'FinanSmart',
    slug: 'finansmart',
    date: '06 de Novembro, 2026',
    year: '2026',
    category: 'FinTech & Full-Stack',
    tagline: {
      pt: 'Aplicativo de gestão e planejamento de finanças pessoais',
      en: 'Personal finance control and planning application'
    },
    description: {
      pt: 'Aplicativo de gestão financeira desenvolvido para facilitar o controle e o planejamento das finanças pessoais. Combina uma interface moderna em React, TypeScript e Tailwind CSS com servidor Express em Node.js e integração com Gemini API.',
      en: 'Financial management application built to simplify personal finance tracking and planning. Pairs a modern React, TypeScript, and Tailwind CSS interface with a Node.js Express server and Gemini API integration.'
    },
    highlights: {
      pt: [
        'Controle de entradas, saídas e saldo consolidado em painel visual',
        'Front-end em React, TypeScript, Tailwind CSS e animações com Motion',
        'Back-end estruturado com Express e integração com Gemini API'
      ],
      en: [
        'Income, expense, and consolidated balance tracking dashboard',
        'Front-end built with React, TypeScript, Tailwind CSS, and Motion',
        'Structured Express back-end and Gemini API integration'
      ]
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js & Express', 'Gemini API'],
    githubUrl: 'https://github.com/annaluizapsilva-03/FinanSmart',
    previewImage: finansmartPreview,
    hasInteractiveDemo: true
  }
];

export const EXPERIENCES = [
  {
    id: 'exp-1',
    company: 'PUC Minas — Pontifícia Universidade Católica de Minas Gerais',
    role: {
      pt: 'Graduanda em Engenharia de Software (2º Período)',
      en: 'B.Sc. Student in Software Engineering (2nd Semester)'
    },
    period: {
      pt: '2026 — Presente',
      en: '2026 — Present'
    },
    location: 'Minas Gerais, Brasil',
    type: {
      pt: 'Formação Acadêmica',
      en: 'Academic Education'
    },
    description: {
      pt: 'Cursando o 2º período de Engenharia de Software na PUC Minas. Vivência diária com fundamentos de computação, algoritmos, programação modular e desenvolvimento de aplicações web e back-end em disciplinas práticas.',
      en: 'Currently in the 2nd semester of Software Engineering at PUC Minas. Hands-on coursework covering computing fundamentals, algorithms, modular programming, and web/back-end application development.'
    },
    achievements: {
      pt: [
        'Desenvolvimento de sistemas acadêmicos em Java (Programação Modular e Spring MVC) e Python (Introdução a Algoritmos)',
        'Criação de interfaces web modernas com HTML5, CSS3, JavaScript e React nas disciplinas de desenvolvimento web',
        'Modelagem e integração com bancos de dados relacionais e não relacionais (PostgreSQL e MongoDB/Mongoose)'
      ],
      en: [
        'Built academic systems in Java (Modular Programming & Spring MVC) and Python (Algorithms)',
        'Created modern web interfaces using HTML5, CSS3, JavaScript, and React in web courses',
        'Practiced integration with relational and NoSQL databases (PostgreSQL and MongoDB/Mongoose)'
      ]
    },
    technologies: ['Java', 'Python', 'HTML5 & CSS3', 'JavaScript', 'React', 'PostgreSQL']
  },
  {
    id: 'exp-2',
    company: 'Projetos Acadêmicos & Laboratórios no GitHub',
    role: {
      pt: 'Desenvolvimento de Projetos de Estudo',
      en: 'Academic & Study Projects'
    },
    period: {
      pt: 'Março 2026 — Presente',
      en: 'March 2026 — Present'
    },
    location: 'GitHub (@annaluizapsilva-03)',
    type: {
      pt: 'Laboratórios & Prática Acadêmica',
      en: 'Labs & Academic Practice'
    },
    description: {
      pt: 'Construção contínua de repositórios públicos para consolidar os conteúdos vistos em aula, evoluindo de páginas estáticas e scripts em Python até aplicações completas com React, TypeScript, Express e Docker.',
      en: 'Continuous development of public repositories to solidify coursework concepts, progressing from static pages and Python scripts to full applications with React, TypeScript, Express, and Docker.'
    },
    achievements: {
      pt: [
        'Evolução progressiva de JavaScript puro e Python CLI para React, Vite e TypeScript',
        'Prática de APIs REST, cookies/autenticação, JSON Server e persistência com Mongoose',
        'Versionamento organizado de código e documentação clara com READMEs no GitHub'
      ],
      en: [
        'Progressive evolution from vanilla JavaScript and Python CLI to React, Vite, and TypeScript',
        'Practiced REST APIs, cookie handling, JSON Server, and Mongoose persistence',
        'Maintained organized Git version control and clear README documentation on GitHub'
      ]
    },
    technologies: ['React', 'TypeScript', 'Node.js & Express', 'Spring Boot', 'Docker', 'Git & GitHub']
  },
  {
    id: 'exp-3',
    company: 'Eventos Acadêmicos & Comunidade Tech',
    role: {
      pt: 'Participante de Atividades e Workshops Técnicos',
      en: 'Tech Workshops & Academic Community Member'
    },
    period: {
      pt: '2026 — Presente',
      en: '2026 — Present'
    },
    location: 'PUC Minas & Comunidades Online',
    type: {
      pt: 'Eventos & Comunidade',
      en: 'Events & Community'
    },
    description: {
      pt: 'Participação em atividades acadêmicas, palestras técnicas, desafios de programação via GitHub Classroom e troca de experiências com colegas da área de Engenharia de Software.',
      en: 'Active participation in academic events, technical talks, GitHub Classroom programming challenges, and collaborative peer learning in Software Engineering.'
    },
    achievements: {
      pt: [
        'Conclusão de atividades práticas avaliativas e listas de revisão em ambiente colaborativo',
        'Acompanhamento constante de boas práticas de código limpo e prototipação no Figma'
      ],
      en: [
        'Completed practical graded assignments and collaborative code reviews',
        'Continuous adoption of clean code practices and UI prototyping in Figma'
      ]
    },
    technologies: ['GitHub Classroom', 'Figma', 'Markdown', 'Clean Code']
  }
];

export const SKILL_CATEGORIES = [
  {
    title: {
      pt: 'Linguagens',
      en: 'Languages'
    },
    skills: [
      { name: 'JavaScript (ES6+)', icon: 'Code' },
      { name: 'TypeScript', icon: 'FileCode2' },
      { name: 'Python', icon: 'Terminal' },
      { name: 'Java', icon: 'Cpu' },
      { name: 'HTML5 & CSS3', icon: 'Layout' }
    ]
  },
  {
    title: {
      pt: 'Front-End & UI',
      en: 'Front-End & UI'
    },
    skills: [
      { name: 'React (JSX)', icon: 'Atom' },
      { name: 'Tailwind CSS', icon: 'Palette' },
      { name: 'Vite', icon: 'Zap' },
      { name: 'Manipulação de DOM', icon: 'Layout' },
      { name: 'Figma', icon: 'Figma' }
    ]
  },
  {
    title: {
      pt: 'Back-End & Dados',
      en: 'Back-End & Data'
    },
    skills: [
      { name: 'Node.js & Express', icon: 'Server' },
      { name: 'Spring Boot / MVC', icon: 'Layers' },
      { name: 'PostgreSQL', icon: 'Database' },
      { name: 'MongoDB / Mongoose', icon: 'HardDrive' },
      { name: 'APIs REST & JSON Server', icon: 'ArrowLeftRight' }
    ]
  },
  {
    title: {
      pt: 'Ferramentas',
      en: 'Tools'
    },
    skills: [
      { name: 'Git & GitHub', icon: 'GitBranch' },
      { name: 'Docker', icon: 'Cloud' },
      { name: 'VS Code', icon: 'Terminal' },
      { name: 'Deploy (Vercel / Render)', icon: 'Cloud' }
    ]
  }
];

export const TEMPLATE_README_CONTENT = `# Portfólio Profissional — Anna Luiza Pereira Silva

> Portfólio acadêmico e profissional desenvolvido em **React (JSX)** + **Vite** para apresentar a trajetória, projetos e habilidades de **Anna Luiza Pereira Silva**, estudante do 2º período de Engenharia de Software na PUC Minas.

---

## 📌 Visão Geral do Sistema
Este website apresenta minha jornada na graduação em Engenharia de Software na PUC Minas, a linha do tempo cronológica dos projetos desenvolvidos no GitHub, habilidades técnicas e canais diretos de contato com design minimalista em **preto e dourado**, suporte bilíngue (Português/Inglês) e animações suaves ao rolar.

## 🚀 Tecnologias Utilizadas

### Front-End
- **React 19 (JSX)**: Construção de interfaces reativas e componentizadas.
- **JavaScript (ES6+)**: Linguagem principal dos componentes e lógica.
- **Vite 8**: Ferramenta de build rápida e servidor de desenvolvimento.
- **Tailwind CSS 4**: Estilização utilitária com paleta em preto e dourado.
- **Motion (Framer Motion)**: Animações suaves de entrada e rolagem.
- **Lucide React**: Ícones vetoriais leves.

### Hospedagem
- Preparado para deploy gratuito em nuvem na **Vercel**, **Render** ou **GitHub Pages**.

---

## 📂 Estrutura de Diretórios do Projeto

\`\`\`
portfolio-anna-luiza/
├── public/
├── src/
│   ├── assets/images/      # Foto de perfil e imagens de prévia
│   ├── components/
│   │   ├── Navbar.jsx      # Menu de navegação e seletor PT/EN
│   │   ├── Hero.jsx        # Apresentação inicial e destaques
│   │   ├── About.jsx       # Sobre Mim (Formação PUC Minas e Objetivos)
│   │   ├── Projects.jsx    # Linha do tempo cronológica (Jul/2026 - Nov/2026)
│   │   ├── ProjectModal.jsx# Demonstração interativa dos 5 projetos
│   │   ├── Experiences.jsx # Trajetória acadêmica, projetos e eventos
│   │   ├── Skills.jsx      # Habilidades técnicas diretas por categoria
│   │   ├── Contact.jsx     # Canais diretos (LinkedIn, GitHub, Instagram, WhatsApp, E-mail)
│   │   ├── ReadmeModal.jsx # Visualizador deste README
│   │   └── Footer.jsx      # Rodapé e links rápidos
│   ├── data/
│   │   └── portfolioData.js# Dados dos projetos, trajetória e biografia
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── metadata.json
├── package.json
└── vite.config.ts
\`\`\`

---

## 📦 Projetos da Linha do Tempo (GitHub)

1. **Lista de Tarefas** (Julho 2026) — HTML5, CSS3, JavaScript
2. **Calculadora IMC** (Julho 2026) — HTML5, CSS3, JavaScript
3. **Cadastro de Alunos** (Julho 2026) — Python (CLI / Terminal)
4. **Cardápio Restaurante — Josephina** (Outubro 2026) — React (JSX), JavaScript, CSS3, Vite, JSON Server
5. **FinanSmart** (Novembro 2026) — React, TypeScript, Tailwind CSS, Node.js, Express, Gemini API

---

## 💻 Instruções de Instalação e Execução Local

\`\`\`bash
git clone https://github.com/annaluizapsilva-03/portfolio.git
cd portfolio
npm install
npm run dev
\`\`\`

Para gerar o build de produção:
\`\`\`bash
npm run build
\`\`\`

---

## 👩‍💻 Autora & Contato
- **Nome**: Anna Luiza Pereira Silva — Estudante de Engenharia de Software (2º período, PUC Minas)
- **GitHub**: [github.com/annaluizapsilva-03](https://github.com/annaluizapsilva-03)
- **LinkedIn**: [linkedin.com/in/annaluizapereira03](https://www.linkedin.com/in/annaluizapereira03/)
- **Instagram**: [instagram.com/annapsilval](https://www.instagram.com/annapsilval/)
- **E-mail**: annalumodascolonial@gmail.com
`;

