import { siteConfig } from '../config/site';

export type ProjectStatus = 'Activo' | 'Experimental' | 'Próximamente' | 'Archivo';

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  version?: string;
  technologies: string[];
  platforms: string[];
  repository?: string;
  downloadUrl?: string;
  documentationUrl?: string;
  issuesUrl?: string;
  communityUrl?: string;
  changelog: { version: string; date: string; notes: string }[];
  features: string[];
  contribution: string;
  placeholder: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
};

const { repositories } = siteConfig;

export const projects: Project[] = [
  {
    slug: 'cartridge-macos',
    name: 'Cartridge para macOS',
    summary: 'Launcher nativo para ejecutar fangames de RPG Maker XP / Essentials en macOS.',
    description:
      'Cartridge permite abrir fangames compatibles de forma directa, sin instalar Wine ni configurar herramientas adicionales. La versión para macOS ya está disponible como release estable.',
    status: 'Activo',
    version: 'v1.0.0',
    technologies: ['macOS', 'RPG Maker XP', 'Pokémon Essentials'],
    platforms: ['macOS'],
    repository: repositories.cartridge,
    downloadUrl: `${repositories.cartridge}/releases/tag/v1.0.0`,
    issuesUrl: `${repositories.cartridge}/issues`,
    communityUrl: siteConfig.social.discord,
    changelog: [
      {
        version: 'v1.0.0',
        date: '3 de septiembre de 2026',
        notes:
          'Primera versión estable para macOS, con build universal Intel + Apple Silicon, actualizaciones automáticas y notarización de Apple.',
      },
      {
        version: 'v0.1-beta14',
        date: '9 de julio de 2026',
        notes:
          'Corrige un cierre inesperado al escribir el nombre del jugador en juegos con plugins de acentos.',
      },
    ],
    features: [
      'Inicio directo de juegos compatibles.',
      'Experiencia nativa en macOS sin depender de Wine.',
      'Actualización automática desde las betas y releases estables.',
    ],
    contribution:
      'Comparte los problemas que encuentres, indicando el juego, la versión de Cartridge y los pasos para reproducirlos.',
    placeholder: 'MAC',
    featured: true,
  },
  {
    slug: 'cartridge-android',
    name: 'Cartridge para Android',
    summary:
      'Launcher beta para importar y ejecutar fangames de RPG Maker XP / Essentials en Android.',
    description:
      'Cartridge para Android permite importar la carpeta de un juego y prepara la biblioteca para jugar desde el teléfono. Sigue siendo un proyecto experimental en etapa beta.',
    status: 'Activo',
    version: 'v0.1-beta5',
    technologies: ['Android', 'RPG Maker XP', 'Pokémon Essentials'],
    platforms: ['Android'],
    repository: repositories.cartridgeAndroid,
    downloadUrl: `${repositories.cartridgeAndroid}/releases/latest`,
    issuesUrl: `${repositories.cartridgeAndroid}/issues`,
    communityUrl: siteConfig.social.discord,
    changelog: [
      {
        version: 'v0.1-beta5',
        date: '10 de julio de 2026',
        notes:
          'Mejora notablemente el arranque, mueve la biblioteca al almacenamiento interno y corrige el problema con plugins de acentos.',
      },
    ],
    features: [
      'Importación de carpetas de juego.',
      'Biblioteca en almacenamiento interno para un inicio más rápido.',
      'Migración guiada de juegos existentes en el primer inicio.',
    ],
    contribution:
      'Prueba distintos juegos y reporta modelos de dispositivo, versión de Android y una descripción clara si aparece un problema.',
    placeholder: 'AND',
    featured: true,
  },
  {
    slug: 'cartridge-ios',
    name: 'Cartridge para iOS',
    summary: 'Versión beta de Cartridge para importar y jugar fangames desde iPhone y iPad.',
    description:
      'Cartridge para iOS se distribuye para pruebas mediante TestFlight. Permite importar la carpeta de un juego y mantiene el flujo de uso simple en dispositivos Apple.',
    status: 'Experimental',
    version: 'v0.1-beta1',
    technologies: ['iOS', 'TestFlight', 'RPG Maker XP'],
    platforms: ['iOS', 'iPadOS'],
    downloadUrl: 'https://testflight.apple.com/join/EvMPGxTB',
    communityUrl: siteConfig.social.discord,
    changelog: [
      {
        version: 'v0.1-beta1',
        date: 'Beta pública',
        notes: 'Primera versión para recibir pruebas y comentarios de la comunidad.',
      },
    ],
    features: [
      'Distribución de pruebas mediante TestFlight.',
      'Importación de la carpeta del juego.',
      'Flujo de inicio pensado para dispositivos iOS.',
    ],
    contribution:
      'Comparte comentarios desde TestFlight y detalla el juego y los pasos que realizaste si encuentras un error.',
    placeholder: 'iOS',
    featured: true,
  },
  {
    slug: 'pk3ds-mac',
    name: 'pk3DS Mac Port',
    summary:
      'Port para macOS de pk3DS, editor y randomizador de ROMs de Pokémon para Nintendo 3DS.',
    description:
      'pk3DS Mac Port adapta a macOS el editor de ROMs de juegos Pokémon para Nintendo 3DS. El proyecto está desarrollado en C# y se encuentra en preparación.',
    status: 'Próximamente',
    technologies: ['C#', '.NET', 'Nintendo 3DS'],
    platforms: ['macOS'],
    repository: repositories.pk3dsMac,
    issuesUrl: `${repositories.pk3dsMac}/issues`,
    changelog: [
      {
        version: 'En preparación',
        date: '2026',
        notes: 'La primera actualización pública llegará junto a una versión apta para pruebas.',
      },
    ],
    features: [
      'Edición de datos de juegos Pokémon para Nintendo 3DS.',
      'Herramientas de randomización para entrenadores, encuentros, movimientos y evoluciones.',
      'Port orientado a macOS.',
    ],
    contribution:
      'Cuando haya builds públicas, los reportes claros y las pruebas de compatibilidad ayudarán a priorizar el desarrollo.',
    placeholder: 'PK3',
    featured: true,
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
