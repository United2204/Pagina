# United Software

Sitio personal estático construido con Astro. Centraliza proyectos, artículos, actualizaciones y formas opcionales de apoyar el desarrollo.

El diseño prioriza accesibilidad, contenido editable, bajo JavaScript y despliegue en GitHub Pages.

## Requisitos

- Node.js 22 o superior.
- npm 10 o superior.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Para revisar la versión de producción:

```bash
npm run check
npm run lint
npm run build
npm run preview
```

## Scripts

| Script                 | Uso                                             |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Inicia el servidor de desarrollo.               |
| `npm run check`        | Comprueba tipos, contenido y componentes Astro. |
| `npm run lint`         | Ejecuta ESLint.                                 |
| `npm run format`       | Comprueba el formato con Prettier.              |
| `npm run format:write` | Corrige el formato.                             |
| `npm run build`        | Genera el sitio estático en `dist/`.            |
| `npm run preview`      | Sirve el resultado generado localmente.         |

## Estructura

```text
src/
  components/       Componentes reutilizables del diseño
  config/site.ts    Marca, URL, navegación, contacto y enlaces de apoyo
  content.config.ts Esquema validado de los artículos
  data/blog/        Artículos Markdown
  data/projects.ts  Catálogo de proyectos
  pages/            Rutas estáticas de Astro
  styles/           Estilos globales y temas
.github/workflows/  Despliegue automático de GitHub Pages
```

## Valores que debes reemplazar

Abre [`src/config/site.ts`](src/config/site.ts) y modifica estos campos:

| Campo                                                              | Qué colocar                                                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `name` y `shortName`                                               | Tu marca o nombre.                                                                                      |
| `description`                                                      | Presentación corta del sitio.                                                                           |
| `origin`                                                           | `https://TU-USUARIO.github.io`.                                                                         |
| `basePath`                                                         | `''` para un repo llamado `TU-USUARIO.github.io`; `'/NOMBRE-DEL-REPO'` para un repositorio de proyecto. |
| `url`                                                              | URL pública completa. Ejemplo: `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO`.                          |
| `author`                                                           | Nombre, bio y correo real.                                                                              |
| `social.github`, `social.kofi`, `social.sponsors`, `social.paypal` | Enlaces reales. Mantén los placeholders hasta tenerlos; no inventes cuentas.                            |
| `repositories`                                                     | URLs de los repositorios de cada proyecto.                                                              |

Al cambiar el nombre del repositorio debes actualizar **a la vez** `basePath` y `url`. Para un sitio de usuario (`usuario.github.io`), ambos quedan así:

```ts
basePath: '',
url: 'https://usuario.github.io',
```

## Agregar o editar un proyecto

Edita [`src/data/projects.ts`](src/data/projects.ts). Cada objeto genera automáticamente:

- una tarjeta en `/projects/`;
- una página individual en `/projects/slug/`;
- sus enlaces de descarga, repositorio y reporte de errores cuando estén definidos.

Ejemplo mínimo:

```ts
{
  slug: 'mi-proyecto',
  name: 'Mi proyecto',
  summary: 'Resumen de una línea.',
  description: 'Descripción amplia del proyecto.',
  status: 'Activo',
  technologies: ['TypeScript'],
  platforms: ['macOS'],
  repository: 'https://github.com/TU-USUARIO/mi-proyecto',
  downloadUrl: 'https://github.com/TU-USUARIO/mi-proyecto/releases/latest',
  issuesUrl: 'https://github.com/TU-USUARIO/mi-proyecto/issues',
  changelog: [],
  features: ['Una característica'],
  contribution: 'Indica cómo colaborar.',
  placeholder: 'MIP',
}
```

Los placeholders actuales son intencionales para que ningún proyecto invente una captura. Para añadir una imagen real, guárdala en `public/images/` y agrega al proyecto:

```ts
image: '/images/mi-proyecto.webp',
imageAlt: 'Descripción útil de la captura',
```

Usa WebP o AVIF, una imagen comprimida y texto alternativo que explique la captura.

## Agregar un artículo

Crea un archivo `.md` en [`src/data/blog`](src/data/blog). El nombre determina la URL: `mi-nota.md` se publica en `/blog/mi-nota/`.

```md
---
title: Título de la nota
description: Resumen que aparece en tarjetas y buscadores.
pubDate: 2026-07-19
author: Tu nombre
tags: [etiqueta, otra-etiqueta]
project: mi-proyecto # opcional; debe ser el slug de un proyecto
draft: false
---

Contenido del artículo en Markdown.
```

Los artículos con `draft: true` no se publican. Las etiquetas y los proyectos relacionados generan páginas de filtro estáticas.

## Colores y textos

- Colores y temas: [`src/styles/global.css`](src/styles/global.css), en las variables al principio del archivo.
- Marca, textos globales, navegación y enlaces: [`src/config/site.ts`](src/config/site.ts).
- Texto de cada proyecto: [`src/data/projects.ts`](src/data/projects.ts).
- Artículos: `src/data/blog/`.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. Abre **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Haz push a `main` o ejecuta manualmente el flujo **Publicar sitio Astro en GitHub Pages** desde la pestaña Actions.
5. Cuando el flujo termine, GitHub mostrará la URL publicada.

El flujo está en [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Instala dependencias, ejecuta comprobación de tipos, lint, compilación y publicación. También intenta habilitar Pages si todavía no existe.

## Dominio personalizado

1. Configura el registro DNS que indique tu proveedor hacia GitHub Pages.
2. En **Settings → Pages**, agrega el dominio y activa HTTPS cuando esté disponible.
3. Actualiza `origin`, `basePath` y `url` en `src/config/site.ts`:

```ts
origin: 'https://ejemplo.com',
basePath: '',
url: 'https://ejemplo.com',
```

4. Vuelve a publicar.

## Actualizar el sitio

1. Cambia el contenido o los datos correspondientes.
2. Ejecuta `npm run check && npm run lint && npm run build`.
3. Sube los cambios a `main`.

GitHub Actions publicará la nueva versión automáticamente.
