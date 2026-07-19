export const siteConfig = {
  name: 'United Software',
  shortName: 'United',
  description:
    'Herramientas gratuitas, aplicaciones y experimentos para compartir con la comunidad.',
  origin: 'https://united2204.github.io',
  basePath: '/Pagina',
  url: 'https://united2204.github.io/Pagina',
  locale: 'es_UY',
  author: {
    name: 'Robert',
    bio: 'Me llamo Robert, tengo 34 años y estudio la Licenciatura en Tecnologías de la Información. Busco aportar a la comunidad de Pokémon mediante herramientas y proyectos gratuitos.',
    email: 'roo22hernandez@gmail.com',
  },
  social: {
    github: 'https://github.com/United2204',
    x: 'https://x.com/ZednanrehTrebor',
    kofi: 'https://ko-fi.com/united2204',
    sponsors: '',
    paypal: '',
  },
  repositories: {
    cartridge: 'https://github.com/United2204/cartridge-releases',
    cartridgeAndroid: 'https://github.com/United2204/cartridge-releases-android',
    pk3dsMac: 'https://github.com/United2204/pk3DS-mac-port',
  },
  navigation: [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/projects/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Sobre mí', href: '/about/' },
    { label: 'Apoyar', href: '/support/' },
  ],
} as const;

export const withBase = (path = '/') => {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.basePath}${normalizedPath}`.replace(/\/{2,}/g, '/');
};

export const absoluteUrl = (path = '/') => {
  const pathWithoutBase =
    siteConfig.basePath &&
    (path === siteConfig.basePath || path.startsWith(`${siteConfig.basePath}/`))
      ? path.slice(siteConfig.basePath.length) || '/'
      : path;

  return new URL(withBase(pathWithoutBase), siteConfig.origin).toString();
};
