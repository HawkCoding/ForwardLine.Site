/* @ds-bundle: {"format":4,"namespace":"ForwardLineDesignSystem_ce48fd","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d27e95a11813","components/core/Button.jsx":"e8c002f639ce","components/core/Card.jsx":"eb9d65624fd8","components/core/Eyebrow.jsx":"82d877f2b328","components/core/Stat.jsx":"d635b07d3c85","components/forms/Input.jsx":"eb4974f040c3","ui_kits/marketing-site/Footer.jsx":"bb34bb05646c","ui_kits/marketing-site/Header.jsx":"d7f1bc3e2995","ui_kits/marketing-site/Hero.jsx":"db9927bf129b","ui_kits/marketing-site/Sections.jsx":"6d105a82e9fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ForwardLineDesignSystem_ce48fd = window.ForwardLineDesignSystem_ce48fd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status / category label. Quiet by default; gold for emphasis. */
function Badge({
  children,
  tone = "neutral",
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "rgba(24,30,48,0.06)",
      color: "var(--navy)",
      border: "1px solid var(--border-subtle)"
    },
    gold: {
      background: "rgba(184,137,59,0.14)",
      color: "var(--gold-deep)",
      border: "1px solid rgba(184,137,59,0.35)"
    },
    dark: {
      background: "var(--navy)",
      color: "var(--cream-light)",
      border: "1px solid var(--navy)"
    },
    "on-dark": {
      background: "rgba(250,246,236,0.10)",
      color: "var(--cream-light)",
      border: "1px solid var(--border-on-dark)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "0.75rem",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      padding: "0.3rem 0.6rem",
      borderRadius: "var(--radius-sm)",
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ForwardLine Button.
 * Primary uses antique gold (reserve for the single main CTA on a view).
 * Secondary is a navy outline; ghost is text-only. Corners are sharp.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0.5rem 0.9rem",
      font: "0.875rem"
    },
    md: {
      padding: "0.75rem 1.4rem",
      font: "1rem"
    },
    lg: {
      padding: "1rem 1.9rem",
      font: "1.0625rem"
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.55rem",
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: s.font,
    lineHeight: 1,
    padding: s.padding,
    borderRadius: "var(--radius-sm)",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    letterSpacing: "0.01em"
  };
  const variants = {
    primary: {
      background: "var(--action)",
      color: "var(--action-text)",
      borderColor: "var(--action)"
    },
    secondary: {
      background: "transparent",
      color: "var(--navy)",
      borderColor: "var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--navy)",
      borderColor: "transparent",
      padding: s.padding.replace(/[\d.]+rem (?=[\d.])/, "0.4rem ")
    },
    "on-dark": {
      background: "var(--action)",
      color: "var(--action-text)",
      borderColor: "var(--action)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: "var(--action-hover)",
      borderColor: "var(--action-hover)"
    },
    secondary: {
      borderColor: "var(--navy)",
      background: "rgba(24,30,48,0.04)"
    },
    ghost: {
      background: "rgba(24,30,48,0.06)"
    },
    "on-dark": {
      background: "var(--action-hover)",
      borderColor: "var(--action-hover)"
    }
  }[variant] : {};
  const activeStyle = !disabled && active ? {
    transform: "translateY(1px)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...activeStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface card. Sharp corners, quiet navy-tinted shadow, hairline border. */
function Card({
  children,
  padding = "var(--space-6)",
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-sm)",
      boxShadow: hover ? "var(--shadow-raised)" : "var(--shadow-card)",
      padding,
      transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
      transform: hover ? "translateY(-2px)" : "none",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Cinzel small-caps eyebrow label. Sits above headlines; gold by default. */
function Eyebrow({
  children,
  color,
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: "var(--font-eyebrow)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)",
      color: color || "var(--gold)",
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big proof number with a supporting label. "Specific beats clever." */
function Stat({
  value,
  label,
  color,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)",
      color: color || "var(--gold)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--text-muted)",
      marginTop: "0.5rem",
      maxWidth: "22ch",
      marginInline: align === "center" ? "auto" : undefined
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label. Sharp corners, gold focus ring. */
function Input({
  label,
  hint,
  id,
  type = "text",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "0.875rem",
      fontWeight: 600,
      color: "var(--navy)",
      marginBottom: "0.4rem"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: "1rem",
      color: "var(--ink)",
      background: "#fff",
      padding: "0.7rem 0.85rem",
      border: `1.5px solid ${focus ? "var(--gold)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "0.8125rem",
      color: "var(--text-muted)",
      marginTop: "0.35rem"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
/* global React */
// Lead capture form + FAQ accordion + footer.
function LeadForm() {
  const {
    Eyebrow,
    Input,
    Button
  } = window.ForwardLineDesignSystem_ce48fd;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "book",
    style: {
      background: "var(--cream-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "clamp(2rem,5vw,5rem)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Book a callback"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "0.8rem"
    }
  }, "Tell us where the line breaks."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      maxWidth: "42ch"
    }
  }, "Leave your number. We'll call you back, ask five questions, and tell you the one thing costing you the most jobs. No charge for the call.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      padding: "var(--space-6)",
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-card)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "1.5rem 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.6rem",
      color: "var(--navy)"
    }
  }, "We've got it."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: "0.6rem 0 0"
    }
  }, "Suzy will call you back shortly.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gap: "1.1rem"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "e.g. Thabo",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile",
    type: "tel",
    placeholder: "082 000 0000",
    hint: "We'll call this number back.",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Trade",
    placeholder: "Plumbing, electrical, HVAC\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    style: {
      width: "100%"
    }
  }, "Request my callback")))));
}
function Faq() {
  const {
    Eyebrow
  } = window.ForwardLineDesignSystem_ce48fd;
  const items = [["What does it cost?", "Pricing is performance-based — we win when you win. We'll walk you through the numbers on the callback."], ["Do I need to install anything?", "No. Suzy works on the number you already use. Nothing new to learn."], ["What if I'm already busy?", "Good. We make sure the busy months stop being followed by quiet ones — so the line stays full."], ["Who is this for?", "Owner-run trades in South Africa doing under R3M a year — plumbers, electricians, HVAC, contractors."]];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "0.8rem",
      marginBottom: "var(--space-6)"
    }
  }, "Straight answers."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)"
    }
  }, items.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "1.2rem 0",
      textAlign: "left",
      fontFamily: "var(--font-display)",
      fontWeight: 500,
      fontSize: "1.25rem",
      color: "var(--navy)"
    }
  }, q, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)",
      fontSize: "1.4rem",
      flexShrink: 0,
      transition: "transform 220ms",
      transform: open === i ? "rotate(45deg)" : "none"
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open === i ? 200 : 0,
      overflow: "hidden",
      transition: "max-height 280ms var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingBottom: "1.4rem",
      color: "var(--text-muted)",
      maxWidth: "60ch"
    }
  }, a))))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--navy)",
      color: "var(--neutral-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "2rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ForwardLine-Logo-Cream.svg",
    alt: "ForwardLine",
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "1rem",
      fontSize: "var(--text-sm)",
      maxWidth: "30ch"
    }
  }, "Find and fix business growth blockers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "3rem",
      fontSize: "var(--text-sm)"
    }
  }, [["Company", ["How it works", "Proof", "Pricing"]], ["Contact", ["Book a callback", "FAQ"]]].map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--cream-light)",
      fontWeight: 600,
      marginBottom: "0.7rem"
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      marginBottom: "0.5rem",
      opacity: 0.8
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "1.2rem var(--gutter)",
      fontSize: "var(--text-xs)",
      color: "var(--neutral-300)"
    }
  }, "\xA9 2026 ForwardLine. South Africa.")));
}
window.LeadForm = LeadForm;
window.Faq = Faq;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Header.jsx
try { (() => {
/* global React */
// ForwardLine marketing site — sticky header.
function Header() {
  const {
    Button
  } = window.ForwardLineDesignSystem_ce48fd;
  const links = ["How it works", "Proof", "Pricing", "FAQ"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(244,239,227,0.88)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0.9rem var(--gutter)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2rem"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ForwardLine-Logo-Navy.svg",
    alt: "ForwardLine",
    style: {
      height: 38
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "1.9rem",
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      fontWeight: 600,
      color: "var(--navy)",
      textDecoration: "none",
      opacity: 0.85
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Book a callback")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
/* global React */
// Hero — navy band. The mechanism ("Suzy answers in 60s") is the focal proof.
function Hero() {
  const {
    Button,
    Eyebrow,
    Badge
  } = window.ForwardLineDesignSystem_ce48fd;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      background: "var(--navy)",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "clamp(2rem,5vw,5rem)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold)"
  }, "Done-for-you growth"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: "var(--text-on-dark)",
      fontSize: "var(--text-hero)",
      lineHeight: "var(--leading-display)",
      margin: "1rem 0 1.2rem"
    }
  }, "Find and fix what's blocking your growth."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-lead)",
      color: "var(--neutral-200)",
      maxWidth: "46ch",
      margin: "0 0 2rem"
    }
  }, "You miss calls when you're on a job. Suzy answers in 60 seconds, books the work, and keeps it off your competitor's books."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Book a callback"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192"),
    style: {
      color: "var(--cream-light)"
    }
  }, "See how it works")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--neutral-300)",
      marginTop: "1.6rem"
    }
  }, "For owner-run trades in South Africa doing under R3M.")), /*#__PURE__*/React.createElement(SuzyCard, null)));
}
function SuzyCard() {
  const {
    Badge
  } = window.ForwardLineDesignSystem_ce48fd;
  const [secs, setSecs] = React.useState(60);
  React.useEffect(() => {
    if (secs <= 0) return;
    const t = setTimeout(() => setSecs(s => s - 1), 900);
    return () => clearTimeout(t);
  }, [secs]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      color: "var(--ink)",
      padding: "var(--space-6)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-raised)",
      border: "1px solid var(--border-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1.2rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.7rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-pill)",
      background: "var(--navy)",
      color: "var(--gold)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 600
    }
  }, "S"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "0.9375rem",
      color: "var(--navy)"
    }
  }, "Suzy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.75rem",
      color: "var(--text-muted)"
    }
  }, "AI callback agent"))), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Calling back")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "3rem",
      color: "var(--navy)",
      lineHeight: 1
    }
  }, secs > 0 ? `00:${String(secs).padStart(2, "0")}` : "Booked ✓"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.875rem",
      color: "var(--text-muted)",
      marginTop: "0.5rem"
    }
  }, secs > 0 ? "Time to answer & book a missed call" : "Job booked into your calendar"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      marginTop: "1.4rem",
      paddingTop: "1.2rem",
      display: "grid",
      gap: "0.65rem"
    }
  }, [["Missed call from a customer", true], ["Suzy calls back in ~60s", true], ["Books the job, sends you the details", secs <= 0]].map(([t, done], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      fontSize: "0.9375rem",
      color: done ? "var(--navy)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "var(--radius-pill)",
      background: done ? "var(--gold)" : "transparent",
      border: done ? "none" : "1.5px solid var(--border-strong)",
      color: "var(--navy)",
      display: "grid",
      placeItems: "center",
      fontSize: "11px",
      fontWeight: 700
    }
  }, done ? "✓" : ""), t))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Sections.jsx
try { (() => {
/* global React */
// Proof band + How it works + Problem, on cream surfaces.
function ProofBand() {
  const {
    Stat
  } = window.ForwardLineDesignSystem_ce48fd;
  const stats = [["60s", "Average time for Suzy to answer and book a missed call."], ["R3M", "Built for owner-run trades doing under this a year."], ["1", "Person to talk to. We do the work, you do the jobs."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cream-light)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "clamp(1.5rem,4vw,4rem)"
    }
  }, stats.map(([v, l]) => /*#__PURE__*/React.createElement(Stat, {
    key: v,
    value: v,
    label: l
  }))));
}
function HowItWorks() {
  const {
    Eyebrow,
    Card
  } = window.ForwardLineDesignSystem_ce48fd;
  const steps = [["01", "We find the blocker", "You answer five questions. We map exactly where jobs are leaking out of your business."], ["02", "We put Suzy on your line", "Every missed call gets a callback in about 60 seconds — answered, qualified, and booked."], ["03", "You do the work", "Jobs land in your calendar. You stay on the tools. We keep the line moving."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "0.8rem",
      maxWidth: "18ch"
    }
  }, "Three steps. No new app to learn."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-5)",
      marginTop: "var(--space-7)"
    }
  }, steps.map(([n, t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "1.5rem",
      color: "var(--gold)"
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0.6rem 0 0.5rem"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, b)))));
}
function Problem() {
  const {
    Eyebrow,
    Badge
  } = window.ForwardLineDesignSystem_ce48fd;
  const points = ["A missed call goes to the next plumber on the list.", "Quotes sit in your inbox while you're under a sink.", "Your best month and your worst month look nothing alike."];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--navy)",
      color: "var(--text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-narrow)",
      margin: "0 auto",
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold)"
  }, "The blocker"), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "var(--text-on-dark)",
      marginTop: "0.8rem"
    }
  }, "You're not short on demand. You're short on hours to chase it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "0.9rem",
      marginTop: "var(--space-6)"
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: "flex",
      gap: "0.9rem",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)",
      fontWeight: 700,
      fontSize: "1.2rem",
      lineHeight: 1.3
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-lead)",
      color: "var(--neutral-200)"
    }
  }, p))))));
}
window.ProofBand = ProofBand;
window.HowItWorks = HowItWorks;
window.Problem = Problem;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Input = __ds_scope.Input;

})();

