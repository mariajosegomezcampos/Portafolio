// src/data/portfolioData.ts
export interface FeatureBlock {
  title: string;
  description: string;
}

interface ProjectData {
  id: string
  title: string
  description: string
  image: string
  tags: string[]


}


export const PRINCIPLES_SUMMARY: FeatureBlock[] = [
  {
    title: 'Arquitecturas Robustas',
    description: 'Especializada en la creación de Microfrontends (MFE) independientes utilizando Vite, Module Federation y Shadow DOM.',
  },
  {
    title: 'Calidad de Código',
    description: 'Garantía de estabilidad mediante la aplicación rigurosa de principios SOLID, Clean Architecture y pruebas unitarias strictly typed.',
  },
  {
    title: 'Enfoque de Negocio',
    description: 'Experiencia en el sector financiero y de e-commerce de alta escala, traduciendo requerimientos complejos en soluciones mantenibles.',
  }
];

export const FEATURE_BLOCKS = [
  {
    title: 'Desarrollo Escalable',
    description: 'Arquitectura limpia pensada para crecer, utilizando React, TypeScript y las mejores prácticas.',
    iconKey: 'code' // Identificador simple
  },
  {
    title: 'Rendimiento Optimizado',
    description: 'Enfocada en Core Web Vitals, asegurando tiempos de carga ultra rápidos y gran experiencia.',
    iconKey: 'zap'
  },
  {
    title: 'Soluciones Ágiles',
    description: 'Capacidad de prototipar y llevar ideas a producción rápidamente con iteraciones constantes.',
    iconKey: 'rocket'
  },
  {
    title: 'Enfoque Creativo',
    description: 'Cada línea de código busca equilibrar la funcionalidad técnica con una estética moderna.',
    iconKey: 'coffee'
  }
];

export const PROJECTS: ProjectData[] = [
  {
    id: 'p1',
    title: 'Burger Queen',
    description: 'Sistema de interfaz para restaurantes que permite gestionar pedidos en tiempo real, optimizando la comunicación entre cocina y meseros.',
    image: '/images/projects/burguer.png',
    tags: ['React', 'Node.js']
  },
  {
    id: 'p2',
    title: 'Movilennias',
    description: 'Plataforma web estilo hackathon diseñada para visualizar, buscar y organizar catálogos de películas con un enfoque UX responsivo.',
    image: '/images/projects/Movilennias.png',
    tags: ['JavaScript', 'API']
  },
  {
    id: 'p3',
    title: 'Rick and Morty',
    description: 'Aplicación de consulta de personajes de la serie "Rick and Morty" utilizando la API oficial, con funcionalidades de búsqueda y filtrado.',
    image: '/images/projects/Data.png',
    tags: ['React', 'CSS']
  }
];

export const PHILOSOPHY_PILLARS = [
  { id: 'S', title: 'SOLID & Clean Architecture', description: 'Defensora del código desacoplado y limpio. Diseño componentes basados en la separación estricta de responsabilidades, facilitando su extensión y testeo continuo.' },
  { id: 'M', title: 'Cultura de Documentación', description: 'Creo firmemente que el software escalable requiere claridad colectiva. Redacto Spikes Técnicos rigurosos en Confluence y modelo flujos complejos mediante diagramas de secuencia en Mermaid.' },
  { id: 'V', title: 'Impacto e Innovación Social', description: 'He colaborado como Especialista en Innovación para el Banco Interamericano de Desarrollo, evaluando herramientas de código abierto con impacto social y generando documentación técnica de alta calidad.' },
];

export const EDUCATION_ITEMS = [
  { year: '2023 - En curso', title: 'Ingeniería en Computación e Informática', institution: 'Universidad Andrés Bello (UNAB)', active: true },
  { year: '2019 - 2020', title: 'Certificado Frontend Developer', institution: 'Laboratoria', active: false },
  { year: '2010 - 2015', title: 'Licenciatura en Enfermería', institution: "U. N. E. 'Rómulo Gallegos'", active: false },
];