/* ============================================================
   main.js — nav, gallery lightbox, image fallback, reveal
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Mobile nav ---------- */
    var navToggle = document.getElementById("navToggle");
    var siteNav = document.getElementById("siteNav");
    if (navToggle && siteNav) {
      navToggle.addEventListener("click", function () {
        var open = siteNav.classList.toggle("open");
        navToggle.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      siteNav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          siteNav.classList.remove("open");
          navToggle.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    /* ---------- Reveal on scroll ---------- */
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("visible"); });
    }

    /* ---------- Image fallback (CSS jersey placeholder) ---------- */
    function fallbackSrc(num) {
      var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>" +
        "<rect width='800' height='600' fill='#0B3D23'/>" +
        "<rect y='0' width='800' height='16' fill='#00853F'/>" +
        "<rect y='16' width='800' height='16' fill='#FDEF42'/>" +
        "<rect y='32' width='800' height='16' fill='#E31B23'/>" +
        "<text x='400' y='200' font-family='Arial Black, Arial, sans-serif' font-size='52' fill='#FDEF42' text-anchor='middle'>DIATTA</text>" +
        "<text x='400' y='390' font-family='Arial Black, Arial, sans-serif' font-size='230' fill='#FDEF42' text-anchor='middle'>" + num + "</text>" +
        "</svg>";
      return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    }
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
      img.addEventListener("error", function handler() {
        img.removeEventListener("error", handler);
        var num = img.getAttribute("data-fallback") || "15";
        img.src = fallbackSrc(num);
        img.alt = num;
      });
    });

    /* ---------- Gallery lightbox ---------- */
    var items = Array.prototype.slice.call(document.querySelectorAll(".g-item"));
    var lb = document.getElementById("lightbox");
    var lbImg = document.getElementById("lbImg");
    var lbCap = document.getElementById("lbCaption");
    var lbCredit = document.getElementById("lbCredit");
    var lbCounter = document.getElementById("lbCounter");
    var lbClose = document.getElementById("lbClose");
    var lbPrev = document.getElementById("lbPrev");
    var lbNext = document.getElementById("lbNext");

    if (lb && items.length) {
      var current = 0;

      function creditFor(item) {
        var i18n = window.I18N;
        var by = i18n ? i18n.t("gallery.credit.by") : "Photo: ";
        var lic = i18n ? i18n.t("gallery.credit.license") : "License: ";
        return by + item.getAttribute("data-artist") + " · " + lic + item.getAttribute("data-license");
      }

      function render() {
        var item = items[current];
        var full = item.getAttribute("data-full");
        if (full) { lbImg.src = full; } else {
          var sm = item.querySelector("img");
          lbImg.src = sm ? sm.src : "";
        }
        var altKey = item.getAttribute("data-alt") || "";
        lbImg.alt = window.I18N ? window.I18N.t(altKey) : altKey;
        var capKey = item.getAttribute("data-cap");
        lbCap.textContent = window.I18N ? window.I18N.t(capKey) : capKey;
        lbCredit.textContent = creditFor(item);
        if (window.I18N) {
          lbCounter.textContent = window.I18N.formatCounter(window.I18N.t("gallery.lb.counter"), current + 1, items.length);
          lbClose.setAttribute("aria-label", window.I18N.t("gallery.lb.close"));
          lbPrev.setAttribute("aria-label", window.I18N.t("gallery.lb.prev"));
          lbNext.setAttribute("aria-label", window.I18N.t("gallery.lb.next"));
        } else {
          lbCounter.textContent = (current + 1) + " / " + items.length;
        }
      }

      function open(idx) {
        current = (idx + items.length) % items.length;
        render();
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
      }
      function close() {
        lb.classList.remove("open");
        document.body.style.overflow = "";
      }
      function step(dir) { current = (current + dir + items.length) % items.length; render(); }

      items.forEach(function (item, idx) {
        item.addEventListener("click", function () { open(idx); });
        // clicking a caption link (e.g. Commons) should not open the lightbox
        var links = item.querySelectorAll("a");
        for (var li = 0; li < links.length; li++) {
          links[li].addEventListener("click", function (e) { e.stopPropagation(); });
        }
      });
      lbClose.addEventListener("click", close);
      lbPrev.addEventListener("click", function () { step(-1); });
      lbNext.addEventListener("click", function () { step(1); });
      lb.addEventListener("click", function (e) {
        if (e.target === lb) close();
      });
      document.addEventListener("keydown", function (e) {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") step(-1);
        if (e.key === "ArrowRight") step(1);
      });
      document.addEventListener("i18n:changed", function () {
        if (lb.classList.contains("open")) render();
      });
    }

    /* ---------- Footer year ---------- */
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();