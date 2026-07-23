/* =========================================================
   THE CAPTAIN COMPANY — shared UI + behaviour (single source)
   Footer injection · theme toggle · FR/EN toggle · reveal · WhatsApp.
   ========================================================= */
(function () {
  "use strict";

  // ---- Contact constants (single source of truth) ----
  var EMAIL = "contact@thecaptaincompany.com";
  var GITHUB = "https://github.com/TheCaptainCompany";
  // Shared WhatsApp entry point (same link as Captain.Food).
  var WA = "https://wa.me/message/LTDD42WUFXINA1";

  function svg(d) {
    return '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + d + '"/></svg>';
  }
  var WA_PATH = "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.004c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 18.15h-.003c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.23 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01s-.43.06-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z";
  var ICON = {
    mail: svg("M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"),
    wa: svg(WA_PATH),
    github: svg("M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12")
  };
  var waHref = WA || ("mailto:" + EMAIL);

  // ---- Footer ----
  var FOOTER =
    '<div class="container footer-grid">' +
      '<div class="footer-col">' +
        '<div class="footer-brand"><img src="/assets/brand/icon-gold.png" alt="" width="34" height="34">' +
          '<span class="fw">THE CAPTAIN <span class="b-co">COMPANY</span></span></div>' +
        '<p class="footer-tag"><span class="t-en">Open, spec-driven software against extractive platforms. A Caring Hope Foundation initiative.</span>' +
          '<span class="t-fr">Des logiciels ouverts, pilotés par la spécification, contre les plateformes extractives. Une initiative de la Caring Hope Foundation.</span></p>' +
      '</div>' +
      '<div class="footer-col">' +
        '<h2 class="footer-h"><span class="t-en">Explore</span><span class="t-fr">Explorer</span></h2>' +
        '<ul class="footer-list">' +
          '<li><a href="/#how"><span class="t-en">How we build</span><span class="t-fr">Comment on construit</span></a></li>' +
          '<li><a href="/#products"><span class="t-en">Products</span><span class="t-fr">Produits</span></a></li>' +
          '<li><a href="https://join.captain.food" target="_blank" rel="noopener">Captain.Food</a></li>' +
          '<li><a href="' + GITHUB + '" target="_blank" rel="noopener">' + ICON.github + ' GitHub</a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="footer-col">' +
        '<h2 class="footer-h">Contact</h2>' +
        '<ul class="footer-list">' +
          '<li><a href="mailto:' + EMAIL + '">' + ICON.mail + ' ' + EMAIL + '</a></li>' +
          '<li><a href="' + waHref + '"' + (WA ? ' target="_blank" rel="noopener"' : '') + '>' + ICON.wa + ' WhatsApp</a></li>' +
          '<li><a href="/mentions-legales.html"><span class="t-en">Legal notice</span><span class="t-fr">Mentions légales</span></a></li>' +
          '<li><a href="/confidentialite.html"><span class="t-en">Privacy</span><span class="t-fr">Confidentialité</span></a></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
    '<div class="container footer-bottom">© 2026 THE CAPTAIN COMPANY — ' +
      '<span class="t-en">a Caring Hope Foundation initiative.</span>' +
      '<span class="t-fr">une initiative de la Caring Hope Foundation.</span></div>';

  var slots = document.querySelectorAll("[data-shared-footer]");
  for (var i = 0; i < slots.length; i++) slots[i].innerHTML = FOOTER;

  // Wire any [data-wa] links across the page
  var waLinks = document.querySelectorAll("[data-wa]");
  for (var j = 0; j < waLinks.length; j++) {
    waLinks[j].setAttribute("href", waHref);
    if (WA) { waLinks[j].setAttribute("target", "_blank"); waLinks[j].setAttribute("rel", "noopener"); }
  }

  // ---- Theme (light/dark) ----
  var root = document.documentElement;
  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem("tcc-theme", t); } catch (e) {}
    var b = document.querySelector("[data-theme-toggle]");
    if (b) { b.textContent = t === "dark" ? "☀︎" : "☾"; b.setAttribute("aria-pressed", t === "dark"); }
  }
  var savedTheme;
  try { savedTheme = localStorage.getItem("tcc-theme"); } catch (e) {}
  if (!savedTheme) savedTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(savedTheme);

  // ---- Language (FR/EN) ----
  function applyLang(l) {
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    try { localStorage.setItem("tcc-lang", l); } catch (e) {}
    var b = document.querySelector("[data-lang-toggle]");
    if (b) b.textContent = l === "en" ? "FR" : "EN";
  }
  var savedLang;
  try { savedLang = localStorage.getItem("tcc-lang"); } catch (e) {}
  if (!savedLang) savedLang = (navigator.language || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  applyLang(savedLang);

  document.addEventListener("click", function (e) {
    var tt = e.target.closest && e.target.closest("[data-theme-toggle]");
    if (tt) { applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"); }
    var lt = e.target.closest && e.target.closest("[data-lang-toggle]");
    if (lt) { applyLang(root.getAttribute("data-lang") === "en" ? "fr" : "en"); }
  });

  // ---- Floating WhatsApp bubble (only when a real link exists) ----
  if (WA && !document.querySelector(".wa-fab")) {
    var fab = document.createElement("a");
    fab.className = "wa-fab"; fab.href = WA; fab.target = "_blank"; fab.rel = "noopener";
    fab.setAttribute("aria-label", "WhatsApp");
    fab.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + WA_PATH + '"/></svg>';
    document.body.appendChild(fab);
  }

  // ---- Reveal on scroll ----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
