/* ==========================================================================
   Christina Rounds — San Diego rental analysis landing
   Vanilla JS, no dependencies. Cloned from colorado-rental-landing's script.js.

   ⚠ THE PAGE IS ENGLISH-ONLY. Christina does not speak Spanish — she serves
   Spanish-speaking owners, but she does not speak it herself, so promising a
   Spanish conversation would break on the first phone call. The translation
   below is kept, complete and INACTIVE, in case she ever asks for it: see
   "REACTIVATING SPANISH" in README.md (three steps, nothing to re-translate).

   Two things this version adds over the Colorado/David pages:
     1. A single CONTACT object. Phone/email live here and nowhere else, so
        changing them is a one-place edit instead of hunting six links.
     2. A language engine that is wired and tested, just pointed at one
        language.
   ========================================================================== */

/* -------------------------------------------------------------------------
   0. CONTACT — every phone/email on the page is fed from here
   -------------------------------------------------------------------------
     phone       : what the visitor SEES
     phoneHref   : what the phone DIALS
     email       : both shown and mailto'd

   If any of these is left as "PENDING", the page renders it as a dashed chip
   and makes the link inert rather than shipping a dead tel: that looks real.
   ------------------------------------------------------------------------- */
const CONTACT = {
  phone: "(858) 220-9017",
  phoneHref: "+18582209017",
  email: "crounds@encorerealtysd.com",
};

/* -------------------------------------------------------------------------
   1. COPY STRINGS
   -------------------------------------------------------------------------
   ⚠ Everything here about Christina personally (bio, quote) is DRAFT
   copywriting in her voice — not her words. She approves it before this goes
   live. Nothing on this page claims a market statistic, deliberately: the
   only claims made are promises about her own service, which she can stand
   behind without a source.

   The `es` block is INACTIVE (see SUPPORTED below). It stays complete so that
   turning Spanish back on is a switch, not a translation job.
   ------------------------------------------------------------------------- */
const STRINGS = {
  en: {
    // --- document-level ---
    "meta.title": "Free Rental Analysis | Christina Rounds — South Bay San Diego Property Owners",
    "meta.description": "Thinking of renting out your South Bay property? Get a free, no-obligation rental analysis with real local numbers and honest advice. Zero pressure.",
    "lang.switchLabel": "Choose language",

    // --- header ---
    "brand.sub": "Realtor & Property Manager · Encore Realty",
    "header.callAria": "Call Christina Rounds",

    // --- CTAs ---
    "cta.primary": "Get My Free Rental Analysis",
    "cta.sticky": "Get My Free Analysis",

    // --- hero ---
    "hero.headline": "Thinking of Renting Out Your South Bay Property? Get the Real Numbers.",
    "hero.sub": "A free, no-obligation rental analysis for your property in Chula Vista, Bonita, Eastlake or anywhere in the South Bay. Real local numbers, honest advice, zero pressure.",
    "hero.bulletsAria": "Why this is safe",
    "hero.bullet1": "No cost, no obligation",
    "hero.bullet2": "Real South Bay numbers",
    "hero.bullet3": "We only talk if you want to",

    // --- form ---
    "form.title": "Get your free rental analysis",
    "form.subtitle": "Takes about 60 seconds. No cost, no obligation.",
    "form.name": "Full name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.address": "Property address",
    "form.situation": "What best describes your situation? (optional)",
    "form.situation.placeholder": "Select one…",
    "form.situation.opt1": "I'm relocating",
    "form.situation.opt2": "I inherited a property",
    "form.situation.opt3": "It's an investment property",
    "form.situation.opt4": "I'm deciding whether to sell",
    "form.situation.opt5": "Other",
    "form.consent": "I agree to be contacted by phone, text or email about my rental analysis. Message and data rates may apply. Consent is not a condition of any service.",
    "form.reassure": "No cost. No obligation. Your information stays private.",

    // --- validation ---
    "err.name": "Please enter your name.",
    "err.email": "Please enter a valid email address.",
    "err.phone": "Please enter a phone number we can reach you at.",
    "err.address": "Please enter the property address.",
    "err.consent": "Please check this box so we're allowed to reply to you.",
    "err.generic": "Something went wrong. Please try again, or call us.",

    // --- success ---
    "success.title": "Thanks — you're all set!",
    "success.body": "Christina will be in touch within 1–2 business days with your rental analysis.",
    "success.call": "Prefer to talk now? Call",

    // --- trust bar ---
    "trust.aria": "Why owners trust Christina",
    "trust.1": "Licensed Realtor & Property Manager",
    "trust.2": "South Bay, San Diego",
    "trust.3": "No Obligation",
    "trust.4": "Straight Answers, No Sales Pitch",

    // --- problem ---
    "problem.title": "Owning a property shouldn't feel like guesswork.",
    "problem.p1": "A vacant property loses money every month it sits empty.",
    "problem.p2": "You're not sure what your place would actually rent for.",
    "problem.p3": "You worry about the wrong tenant, late rent, or getting California's rules wrong.",
    "problem.p4": "You're tired of handling maintenance calls and paperwork yourself.",

    // --- what you get ---
    "get.title": "Here's exactly what you'll receive",
    "get.c1.title": "A real rent estimate",
    "get.c1.body": "A rent estimate for your specific property — not a generic range off a website.",
    "get.c2.title": "An honest rent-vs-sell comparison",
    "get.c2.body": "A straight comparison of renting it out versus selling it in today's market.",
    "get.c3.title": "A clear recommendation",
    "get.c3.body": "A clear recommendation — with zero obligation either way.",

    // --- how it works ---
    "how.title": "Three simple steps",
    "how.s1": "Tell us about your property (60-second form).",
    "how.s2": "Christina works up the numbers for your specific address.",
    "how.s3": "You get your analysis — and we only talk if you want to.",

    // --- why Christina (DRAFT — hers to approve) ---
    "christina.title": "You'll be working with someone who answers the phone",
    "christina.bio": "Christina Rounds is a licensed Realtor and property manager with Encore Realty, working with owners across Chula Vista, Bonita, Eastlake, Otay Ranch and the rest of the South Bay. She works both sides of the same question owners are really asking — what your property is worth as a rental, and what it's worth if you sell. Because she does both, the answer isn't steered toward the one she happens to be selling that day.",
    "christina.quote": "“I'd rather give you the honest number and lose the business than talk you into the wrong plan for your property.”",

    // --- testimonials (placeholders — real ones only) ---
    "testi.title": "What South Bay owners say",
    "testi.placeholder": "“[ Real owner testimonial goes here. ]”",
    "testi.author": "— First name, neighborhood",
    "testi.note": "Real testimonials from local property owners — added as they come in.",

    // --- FAQ ---
    "faq.title": "Questions owners ask",
    "faq.q1": "Is the rental analysis really free?",
    "faq.a1": "Yes, completely. No catch and no obligation.",
    "faq.q2": "Do I have to commit to anything?",
    "faq.a2": "No. The analysis is yours to keep, whether or not we ever work together.",
    "faq.q3": "What information do you need?",
    "faq.a3": "Just basic property details — your name, how to reach you, and the property address.",
    "faq.q4": "How long does it take?",
    "faq.a4": "Typically within a couple of business days.",

    // --- final CTA ---
    "final.title": "Find out what your property can do for you.",
    "final.sub": "Get your free, no-obligation rental analysis today.",

    // --- footer ---
    "footer.tagline": "Realtor & Property Manager · South Bay, San Diego",
    "footer.license": "Christina Rounds, California DRE #01861996 · Encore Realty, DRE #01308692",
    "footer.equalhousing": "Equal Housing Opportunity",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "All rights reserved.",
    "footer.disclosure": "If your property is already managed by another company, please disregard this message — it is not a solicitation.",

    // --- pending-data chips ---
    "pending.phone": "[ phone pending ]",
    "pending.email": "[ email pending ]",
  },

  /* ------------------------------------------------------------------------
     SPANISH — INACTIVE. Not reachable while SUPPORTED is ["en"]; kept whole so
     that turning it on is a switch rather than a translation job. If it is
     ever switched on, the geography strings below still say "San Diego"
     generally where the English now says South Bay — reconcile them first.
     ---------------------------------------------------------------------- */
  es: {
    // --- document-level ---
    "meta.title": "Análisis de renta gratis | Christina Rounds — Propietarios en San Diego",
    "meta.description": "¿Está pensando en rentar su propiedad en San Diego? Reciba un análisis de renta gratuito y sin compromiso, con números reales de la zona y consejo honesto.",
    "lang.switchLabel": "Elegir idioma",

    // --- header ---
    "brand.sub": "Realtor y administradora de propiedades · Encore Realty",
    "header.callAria": "Llamar a Christina Rounds",

    // --- CTAs ---
    "cta.primary": "Quiero mi análisis gratuito",
    "cta.sticky": "Quiero mi análisis",

    // --- hero ---
    "hero.headline": "¿Está pensando en rentar su propiedad en San Diego? Conozca los números reales.",
    "hero.sub": "Un análisis de renta gratuito y sin compromiso para su propiedad en San Diego. Números reales de la zona, consejo honesto y cero presión.",
    "hero.bulletsAria": "Por qué esto no tiene riesgo",
    "hero.bullet1": "Sin costo ni compromiso",
    "hero.bullet2": "Números reales de San Diego",
    "hero.bullet3": "Solo hablamos si usted quiere",

    // --- form ---
    "form.title": "Reciba su análisis de renta gratuito",
    "form.subtitle": "Toma como 60 segundos. Sin costo ni compromiso.",
    "form.name": "Nombre completo",
    "form.email": "Correo electrónico",
    "form.phone": "Teléfono",
    "form.address": "Dirección de la propiedad",
    "form.situation": "¿Qué describe mejor su situación? (opcional)",
    "form.situation.placeholder": "Seleccione una…",
    "form.situation.opt1": "Me estoy mudando",
    "form.situation.opt2": "Heredé una propiedad",
    "form.situation.opt3": "Es una propiedad de inversión",
    "form.situation.opt4": "Estoy decidiendo si vender",
    "form.situation.opt5": "Otra",
    "form.consent": "Acepto que me contacten por teléfono, mensaje de texto o correo sobre mi análisis de renta. Pueden aplicar cargos por mensajes y datos. Dar este consentimiento no es condición para recibir ningún servicio.",
    "form.reassure": "Sin costo. Sin compromiso. Su información no se comparte.",

    // --- validation ---
    "err.name": "Por favor escriba su nombre.",
    "err.email": "Por favor escriba un correo electrónico válido.",
    "err.phone": "Por favor escriba un teléfono donde podamos localizarlo.",
    "err.address": "Por favor escriba la dirección de la propiedad.",
    "err.consent": "Marque esta casilla para que podamos responderle.",
    "err.generic": "Algo salió mal. Vuelva a intentarlo o llámenos.",

    // --- success ---
    "success.title": "¡Listo, gracias!",
    "success.body": "Christina le escribirá en 1 o 2 días hábiles con su análisis de renta.",
    "success.call": "¿Prefiere hablar ahora? Llame al",

    // --- trust bar ---
    "trust.aria": "Por qué los propietarios confían en Christina",
    "trust.1": "Realtor y administradora con licencia",
    "trust.2": "Condado de San Diego",
    "trust.3": "Sin compromiso",
    "trust.4": "Respuestas claras, sin discurso de venta",

    // --- problem ---
    "problem.title": "Ser propietario no debería ser adivinar.",
    "problem.p1": "Una propiedad vacía pierde dinero cada mes que pasa sin rentarse.",
    "problem.p2": "No está seguro de cuánto rentaría de verdad su propiedad.",
    "problem.p3": "Le preocupa el inquilino equivocado, la renta atrasada o equivocarse con las reglas de California.",
    "problem.p4": "Está cansado de atender llamadas de mantenimiento y papeleo usted mismo.",

    // --- what you get ---
    "get.title": "Esto es exactamente lo que va a recibir",
    "get.c1.title": "Un estimado de renta real",
    "get.c1.body": "Un estimado para su propiedad específica, no un rango genérico sacado de una página web.",
    "get.c2.title": "Una comparación honesta entre rentar y vender",
    "get.c2.body": "Una comparación directa entre rentarla o venderla en el mercado de hoy.",
    "get.c3.title": "Una recomendación clara",
    "get.c3.body": "Una recomendación clara, sin ningún compromiso en ninguno de los dos casos.",

    // --- how it works ---
    "how.title": "Tres pasos sencillos",
    "how.s1": "Cuéntenos de su propiedad (formulario de 60 segundos).",
    "how.s2": "Christina saca los números para su dirección específica.",
    "how.s3": "Usted recibe su análisis, y solo hablamos si usted quiere.",

    // --- why Christina (BORRADOR — ella lo aprueba) ---
    "christina.title": "Va a tratar con alguien que sí contesta el teléfono",
    "christina.bio": "Christina Rounds es Realtor y administradora de propiedades con licencia en Encore Realty, San Diego. Trabaja los dos lados de la pregunta que los propietarios de verdad se hacen: cuánto vale su propiedad rentada y cuánto vale si la vende. Como hace las dos cosas, la respuesta no se inclina hacia la que a ella le convenga vender ese día.",
    "christina.quote": "«Prefiero darle el número honesto y perder el negocio que convencerlo del plan equivocado para su propiedad.»",

    // --- testimonials ---
    "testi.title": "Lo que dicen los propietarios de San Diego",
    "testi.placeholder": "«[ Aquí va un testimonio real de un propietario. ]»",
    "testi.author": "— Nombre, vecindario",
    "testi.note": "Testimonios reales de propietarios de la zona; se agregan conforme llegan.",

    // --- FAQ ---
    "faq.title": "Preguntas que hacen los propietarios",
    "faq.q1": "¿El análisis de renta de verdad es gratis?",
    "faq.a1": "Sí, completamente. Sin trucos y sin compromiso.",
    "faq.q2": "¿Tengo que comprometerme a algo?",
    "faq.a2": "No. El análisis es suyo, trabajemos juntos después o no.",
    "faq.q3": "¿Qué información necesitan?",
    "faq.a3": "Solo datos básicos: su nombre, cómo localizarlo y la dirección de la propiedad.",
    "faq.q4": "¿Cuánto tarda?",
    "faq.a4": "Normalmente un par de días hábiles.",
    "faq.q5": "¿Podemos hacer todo esto en español?",
    "faq.a5": "Sí. Pida su análisis en inglés o en español y le damos seguimiento en el idioma que prefiera.",

    // --- final CTA ---
    "final.title": "Descubra lo que su propiedad puede hacer por usted.",
    "final.sub": "Reciba hoy su análisis de renta gratuito y sin compromiso.",

    // --- footer ---
    "footer.tagline": "Realtor y administradora de propiedades · Condado de San Diego",
    "footer.license": "Christina Rounds, DRE de California #01861996 · Encore Realty, DRE #01308692",
    "footer.equalhousing": "Igualdad de oportunidad en la vivienda",
    "footer.privacy": "Aviso de privacidad",
    "footer.rights": "Todos los derechos reservados.",
    "footer.disclosure": "Si su propiedad ya la administra otra compañía, haga caso omiso de este mensaje: no es una solicitud.",

    // --- pending-data chips ---
    "pending.phone": "[ falta el teléfono ]",
    "pending.email": "[ falta el correo ]",
  },
};

/* -------------------------------------------------------------------------
   2. LANGUAGE ENGINE
   ------------------------------------------------------------------------- */
// >>> Spanish is OFF. Adding "es" back here is step 1 of 3 — see README. <<<
const SUPPORTED = ["en"];
const LANG_KEY = "cr-lang"; // localStorage key
let LANG = "en";

const t = (key) => {
  const dict = STRINGS[LANG] || STRINGS.en;
  // fall back to English before falling back to the raw key, so a missing
  // Spanish string shows real copy instead of "faq.a5"
  return dict[key] != null ? dict[key] : (STRINGS.en[key] != null ? STRINGS.en[key] : key);
};

/** Stored choice first, then the browser's preference, then English.
    With SUPPORTED = ["en"] every branch lands on English, including a browser
    set to Spanish — which is the point: a Spanish-speaking visitor must not be
    handed a page that implies Christina will answer in Spanish. */
function detectLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch (e) {
    /* private mode / storage blocked — fall through to browser preference */
  }
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  const preferred = nav.toLowerCase().startsWith("es") ? "es" : "en";
  return SUPPORTED.includes(preferred) ? preferred : "en";
}

/** Rewrite every [data-i18n] node and every [data-i18n-attr] attribute. */
function applyStrings() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  // data-i18n-attr="attr:key" (comma-separated for more than one)
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  document.title = t("meta.title");
}

function setLang(lang, { persist = true } = {}) {
  LANG = SUPPORTED.includes(lang) ? lang : "en";
  document.documentElement.setAttribute("lang", LANG);

  applyStrings();
  renderContact();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === LANG));
  });

  // an open FAQ panel was sized in the old language — re-measure it
  refreshAccordionHeights();
  // and any error message already on screen has to switch language too
  if (typeof window.__revalidateTouchedFields === "function") {
    window.__revalidateTouchedFields();
  }

  if (persist) {
    try { localStorage.setItem(LANG_KEY, LANG); } catch (e) { /* non-fatal */ }
  }
}

function initLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

/* -------------------------------------------------------------------------
   3. CONTACT RENDERING — one object feeds every phone/email on the page
   ------------------------------------------------------------------------- */
const isPending = (v) => !v || v === "PENDING" || /^\s*$/.test(v);

function renderContact() {
  const pendingPhone = isPending(CONTACT.phone) || isPending(CONTACT.phoneHref);
  const pendingEmail = isPending(CONTACT.email);

  document.querySelectorAll("[data-contact]").forEach((el) => {
    const kind = el.getAttribute("data-contact");
    const pending = kind === "phone" ? pendingPhone : pendingEmail;
    el.textContent = pending ? t("pending." + kind) : CONTACT[kind];
    el.classList.toggle("pending-data", pending);
  });

  document.querySelectorAll("[data-contact-link]").forEach((a) => {
    const kind = a.getAttribute("data-contact-link");
    const pending = kind === "phone" ? pendingPhone : pendingEmail;
    if (pending) {
      a.setAttribute("href", "#");
      a.classList.add("is-pending");
      a.setAttribute("aria-disabled", "true");
      a.setAttribute("tabindex", "-1");
    } else {
      a.setAttribute("href", kind === "phone" ? "tel:" + CONTACT.phoneHref : "mailto:" + CONTACT.email);
      a.classList.remove("is-pending");
      a.removeAttribute("aria-disabled");
      a.removeAttribute("tabindex");
    }
  });

  if (pendingPhone || pendingEmail) {
    console.warn(
      "[CONTACT] Still missing: " +
        [pendingPhone && "phone", pendingEmail && "email"].filter(Boolean).join(", ") +
        ". Fill the CONTACT object at the top of script.js — see README.md."
    );
  }
}

/* -------------------------------------------------------------------------
   4. INIT
   ------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // don't persist the auto-detected language: only an explicit click means
  // "this is my choice"
  setLang(detectLang(), { persist: false });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initLangSwitch();
  initSmoothScroll();
  initAccordion();
  initStickyCta();
  initForm();
});

/* -------------------------------------------------------------------------
   5. SMOOTH SCROLL for [data-scroll] anchors → form (respects header height)
   ------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[data-scroll]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector(".site-header")?.offsetHeight || 0;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerH - 12;
      window.scrollTo({ top: y, behavior: "smooth" });
      // move focus to first field for accessibility
      const firstInput = target.querySelector("input, select, button");
      if (firstInput) setTimeout(() => firstInput.focus({ preventScroll: true }), 450);
    });
  });
}

/* -------------------------------------------------------------------------
   6. FAQ ACCORDION
   ------------------------------------------------------------------------- */
function initAccordion() {
  document.querySelectorAll(".acc-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(!expanded));
      panel.style.maxHeight = expanded ? null : panel.scrollHeight + "px";
    });
  });
}

/** Spanish answers are longer than English ones, so a panel left open across
    a language switch would clip. Re-measure whatever is open. */
function refreshAccordionHeights() {
  document.querySelectorAll('.acc-trigger[aria-expanded="true"]').forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
  });
}

/* -------------------------------------------------------------------------
   7. STICKY MOBILE CTA — show after hero scrolls away, hide when form visible
   ------------------------------------------------------------------------- */
function initStickyCta() {
  const bar = document.getElementById("sticky-cta");
  const form = document.getElementById("lead-form");
  if (!bar) return;

  let formInView = false;

  // Hide the bar while the form itself is on screen (avoids redundancy).
  if ("IntersectionObserver" in window && form) {
    new IntersectionObserver(
      ([entry]) => {
        formInView = entry.isIntersecting;
        bar.classList.toggle("hidden-by-form", formInView);
      },
      { threshold: 0.25 }
    ).observe(form);
  }

  const onScroll = () => {
    const scrolledPastHero = window.pageYOffset > window.innerHeight * 0.6;
    bar.classList.toggle("visible", scrolledPastHero && !formInView);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* -------------------------------------------------------------------------
   8. LEAD FORM — inline validation + Mailchimp JSONP submit
   ------------------------------------------------------------------------- */
function initForm() {
  const form = document.getElementById("rental-form");
  if (!form) return;

  const feedback = document.getElementById("form-feedback");
  const successBox = document.getElementById("form-success");
  const submitBtn = form.querySelector(".btn-submit");

  // ---- validators ----
  // Each validator receives the INPUT ELEMENT (not just its value) so the
  // consent checkbox can check `.checked` instead of `.value`.
  const validators = {
    "f-name": (input) => (input.value.trim().length >= 2 ? "" : t("err.name")),
    "f-email": (input) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()) ? "" : t("err.email")),
    "f-phone": (input) => (input.value.replace(/\D/g, "").length >= 10 ? "" : t("err.phone")),
    "f-address": (input) => (input.value.trim().length >= 4 ? "" : t("err.address")),
    "f-consent": (input) => (input.checked ? "" : t("err.consent")),
  };

  function validateField(id) {
    const input = document.getElementById(id);
    const errEl = document.querySelector(`[data-error-for="${id}"]`);
    const msg = validators[id] ? validators[id](input) : "";
    if (msg) {
      input.setAttribute("aria-invalid", "true");
      errEl.textContent = msg;
      errEl.classList.add("show");
    } else {
      input.removeAttribute("aria-invalid");
      errEl.textContent = "";
      errEl.classList.remove("show");
    }
    return !msg;
  }

  // Re-run only the fields already showing an error, so switching language
  // translates visible messages without scolding untouched fields.
  window.__revalidateTouchedFields = () => {
    Object.keys(validators).forEach((id) => {
      const input = document.getElementById(id);
      if (input && input.getAttribute("aria-invalid") === "true") validateField(id);
    });
  };

  // validate on blur once touched; clear error as they fix it
  Object.keys(validators).forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("blur", () => validateField(id));
    // checkboxes fire "change", text inputs fire "input"
    const liveEvent = input.type === "checkbox" ? "change" : "input";
    input.addEventListener(liveEvent, () => {
      if (input.getAttribute("aria-invalid") === "true") validateField(id);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    feedback.textContent = "";
    feedback.classList.remove("error");

    const allValid = Object.keys(validators)
      .map(validateField)
      .every(Boolean);

    if (!allValid) {
      const firstBad = form.querySelector('[aria-invalid="true"]');
      if (firstBad) firstBad.focus();
      return;
    }

    submitToMailchimp(form, {
      onStart: () => submitBtn.classList.add("is-loading"),
      onSuccess: () => {
        form.hidden = true;
        successBox.hidden = false;
        successBox.scrollIntoView({ behavior: "smooth", block: "center" });
        // (Optional) fire analytics/conversion pixel here.
      },
      onError: (message) => {
        submitBtn.classList.remove("is-loading");
        feedback.textContent = message || t("err.generic");
        feedback.classList.add("error");
      },
    });
  });
}

/* -------------------------------------------------------------------------
   9. MAILCHIMP JSONP submit (no backend, no page redirect, no CORS issue)
   ------------------------------------------------------------------------- */
function submitToMailchimp(form, { onStart, onSuccess, onError }) {
  const action = form.getAttribute("action");

  // Guard: if placeholders weren't replaced, don't pretend it worked.
  if (action.includes("PLACEHOLDER") || action.includes("YOUR_DC")) {
    console.warn(
      "[Mailchimp] Form action still has placeholders. " +
      "Replace the action URL and honeypot name — see README.md."
    );
    // In dev we still show success so the flow is reviewable.
    onStart();
    setTimeout(onSuccess, 600);
    return;
  }

  onStart();

  // Build query string from the form (Mailchimp expects EMAIL, FNAME, etc.)
  const params = new URLSearchParams(new FormData(form)).toString();
  const cb = "mc_cb_" + Date.now();
  const url = action + (action.includes("?") ? "&" : "?") + params + "&c=" + cb;

  const script = document.createElement("script");
  const timeout = setTimeout(() => cleanup(onError, null), 10000);

  window[cb] = (data) => {
    clearTimeout(timeout);
    if (data && data.result === "success") {
      onSuccess();
    } else {
      // Mailchimp returns "already subscribed" as an error — treat as success.
      const msg = (data && data.msg) || "";
      if (/already subscribed/i.test(msg)) onSuccess();
      else onError(stripHtml(msg));
    }
    cleanupScript();
  };

  function cleanup(cbErr, msg) { cbErr(msg); cleanupScript(); }
  function cleanupScript() {
    if (script.parentNode) script.parentNode.removeChild(script);
    try { delete window[cb]; } catch (e) { window[cb] = undefined; }
  }

  script.src = url.replace("/post?", "/post-json?");
  script.onerror = () => { clearTimeout(timeout); cleanup(onError, null); };
  document.body.appendChild(script);
}

function stripHtml(s) {
  if (!s) return "";
  const d = document.createElement("div");
  d.innerHTML = s;
  return d.textContent || d.innerText || "";
}
