# A.L.M.A. — Sitio web

**Asistente de Localización, Monitoreo y Acompañamiento**
Proyecto del Instituto Tecnológico de Villahermosa · InnovaTecNM 2026

Sitio estático (HTML, CSS y JavaScript) listo para publicarse gratis en GitHub Pages.

## Estructura

```
mi-pagina/
├── index.html            Inicio: problemática, solución, funciones, resultados
├── 404.html              Página para enlaces rotos
├── pages/
│   ├── acerca.html       Quiénes somos, misión, visión, valores, historia, equipo
│   └── contacto.html     Formulario de contacto y preguntas frecuentes
├── assets/
│   ├── images/           Logotipos
│   └── icons/            Íconos SVG y favicon
├── css/
│   ├── main.css          Estilos y paleta de colores
│   └── responsive.css    Adaptación a tabletas y celulares
└── js/
    └── main.js           Menú móvil, animaciones y formulario
```

## Paleta de colores (del pitch InnovaTecNM)

| Uso            | Color     |
|----------------|-----------|
| Azul marino    | `#0B3B82` |
| Cian (acento)  | `#16B5F1` |
| Menta          | `#79DDC5` |
| Fondo azul     | `#EAF6FF` |
| Texto suave    | `#58637A` |

Todos los colores están como variables al inicio de `css/main.css`.

## Ver el sitio en tu computadora

Abre `index.html` con doble clic, o para una prueba más fiel usa la extensión
**Live Server** de VS Code.

## Publicar en GitHub Pages

1. Crea un repositorio **público** en GitHub (por ejemplo `alma`).
2. Sube el **contenido** de esta carpeta (que `index.html` quede en la raíz del repositorio).
3. Ve a **Settings → Pages**.
4. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
5. En uno o dos minutos el sitio estará en `https://TU-USUARIO.github.io/alma/`.

## Pendientes antes de publicar

- [ ] Cambiar `correo@ejemplo.com` por el correo oficial en `pages/contacto.html` (aparece 2 veces).
- [ ] (Opcional) Agregar fotos del equipo en `assets/images/` (ver comentario en `pages/acerca.html`).
- [ ] (Opcional) Usar Formspree para recibir mensajes sin abrir el correo del visitante:
      crea un formulario en https://formspree.io y en `contacto.html` agrega
      `action="https://formspree.io/f/TU_ID" method="POST"` a la etiqueta `<form>`.

## Código QR

Cuando el sitio esté publicado, genera un QR **estático** con la URL final.
Si cambias el nombre del repositorio, la URL cambia y habrá que generar un QR nuevo.
