# Página de descargas

Plantilla estática, sin dependencias ni compilación, para publicar tus aplicaciones en GitHub Pages.

## Personalización

Edita [`assets/software.js`](assets/software.js):

1. Cambia `brand`, `tagline` y `githubProfile`.
2. Sustituye los ejemplos dentro de `software` por tus programas.
3. Para cada programa, usa `repo: "tu-usuario/tu-repositorio"`. El botón **Descargar** llevará automáticamente a la última release publicada.
4. Si quieres enlazar un archivo específico, añade `downloadUrl` con la dirección exacta del instalador o ZIP dentro de la release.

## Publicación en GitHub Pages

1. Sube este repositorio a GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions** como fuente.
4. Haz `push` a la rama `main`. El flujo incluido publicará la página.

La URL resultante será normalmente `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Releases

Para crear una descarga, publica una [GitHub Release](https://docs.github.com/es/repositories/releasing-projects-on-github/managing-releases-in-a-repository) en el repositorio de tu aplicación y adjunta el instalador, `.zip`, `.dmg`, etc. La página enlaza a la release más reciente.
