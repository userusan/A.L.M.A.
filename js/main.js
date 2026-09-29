// =========================================================
// A.L.M.A. — Interacciones básicas
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // --- Menú móvil ---
  const boton = document.querySelector(".menu-boton");
  const nav = document.querySelector(".nav");
  if (boton && nav) {
    boton.addEventListener("click", () => {
      const abierto = nav.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto);
      const icono = boton.querySelector(".icono");
      icono.classList.toggle("i-menu", !abierto);
      icono.classList.toggle("i-cerrar", abierto);
    });
    // Cerrar al elegir una opción
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      })
    );
  }

  // --- Sombra del encabezado al hacer scroll ---
  const encabezado = document.querySelector(".encabezado");
  const alScroll = () => encabezado?.classList.toggle("con-sombra", window.scrollY > 10);
  window.addEventListener("scroll", alScroll, { passive: true });
  alScroll();

  // --- Aparición de elementos y barras de resultados ---
  const elementos = document.querySelectorAll(".aparecer, .barras");
  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observador.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elementos.forEach((el) => observador.observe(el));
  } else {
    elementos.forEach((el) => el.classList.add("visible"));
  }

  // --- Año actual en el pie ---
  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();

  // --- Formulario de contacto (abre el correo del usuario) ---
  // GitHub Pages no procesa formularios. Esta versión arma un correo con mailto.
  // Si prefieres recibirlos sin abrir el correo, usa Formspree o Web3Forms
  // (ver README.md).
  const form = document.getElementById("form-contacto");
  if (form && !form.getAttribute("action")) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const datos = new FormData(form);
      const destino = form.dataset.correo;
      const asunto = `[Web A.L.M.A.] ${datos.get("motivo")} — ${datos.get("nombre")}`;
      const cuerpo =
        `Nombre: ${datos.get("nombre")}\n` +
        `Correo: ${datos.get("correo")}\n` +
        `Motivo: ${datos.get("motivo")}\n\n` +
        `${datos.get("mensaje")}`;
      window.location.href =
        `mailto:${destino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    });
  }
});
