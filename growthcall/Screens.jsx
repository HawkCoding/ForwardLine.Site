/* ForwardLine — The Constraint Call landing page. Mounted via x-import. */

function ccGoToBook() {
  const el = document.getElementById("book");
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: "smooth" });
}
window.ccGoToBook = ccGoToBook;

/* Gold brush-stroke strike-through, for slashing out the old price. */
function BrushStrike({ children, style }) {
  return (
    <span style={{ position: "relative", display: "inline-block", color: "var(--text-muted)", ...style }}>
      {children}
      <svg viewBox="0 0 120 34" preserveAspectRatio="none" style={{
        position: "absolute", left: "-4%", top: "6%", width: "108%", height: "88%",
        transform: "rotate(-3deg)", pointerEvents: "none",
      }}>
        <path d="M3,19 C22,9 38,27 58,15 C79,4 98,25 117,13"
          stroke="var(--gold)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.92" />
        <circle cx="9" cy="25" r="1.6" fill="var(--gold)" opacity="0.7" />
        <circle cx="108" cy="8" r="1.3" fill="var(--gold)" opacity="0.6" />
        <circle cx="118" cy="19" r="1" fill="var(--gold)" opacity="0.5" />
      </svg>
    </span>
  );
}

function SaveBadge({ children }) {
  return (
    <span style={{
      position: "absolute", top: "-0.8rem", right: "-1.6rem",
      background: "var(--gold)", color: "var(--navy)", fontFamily: "var(--font-body)",
      fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.03em",
      padding: "0.2rem 0.55rem", borderRadius: "999px", transform: "rotate(6deg)",
      boxShadow: "var(--shadow-raised)", whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

function CCHeader() {
  const { Button } = window.ForwardLineDesignSystem_ce48fd;
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "rgba(24,30,48,0.92)", backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-on-dark)",
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto",
        padding: "0.5rem var(--gutter)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center" }}>
          <img src="./assets/ForwardLine-Logo-Cream.svg" alt="ForwardLine" style={{ height: "clamp(2.75rem, 6vw, 4rem)" }} />
        </a>
        <Button variant="primary" size="sm" onClick={ccGoToBook}>Book the call</Button>
      </div>
    </header>
  );
}
window.CCHeader = CCHeader;


function CCHero() {
  const { Button, Eyebrow } = window.ForwardLineDesignSystem_ce48fd;
  return (
    <section id="top" style={{ background: "var(--navy)", color: "var(--text-on-dark)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto",
        padding: "var(--section-y) var(--gutter)",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "clamp(2rem,5vw,5rem)", alignItems: "center",
      }}>
        <div>
          <Eyebrow color="var(--gold)" style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)", letterSpacing: "0.08em" }}>
            The Growth Audit
          </Eyebrow>
          <h1 style={{
            color: "var(--text-on-dark)", fontSize: "var(--text-hero)",
            lineHeight: "var(--leading-display)", margin: "1rem 0 1.2rem",
          }}>
            Two hours to find the one thing holding your business back.
          </h1>
          <p style={{
            fontSize: "var(--text-lead)", color: "var(--neutral-200)",
            maxWidth: "48ch", margin: "0 0 2rem",
          }}>
            We ask the questions you don't think to ask. Together, we find what's holding your
            business back — and the plan that unlocks its growth potential.
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={ccGoToBook}>Book the call</Button>
          </div>
        </div>
        <CCSessionCard />
      </div>
    </section>
  );
}

function CCSessionCard() {
  const bonuses = [
    ["The Landing Page Template", "A proven recipe that turns clicks into customers.", "R2,950"],
    ["The Ad Template", "A visual example of exactly how a winning ad is built.", "R2,250"],
    ["Win-Back Lost Leads Scripts", "Exact messages that wake cold leads and missed calls.", "R1,500"],
    ["The Referral Loop Plan", "How every happy customer brings you the next one.", "R2,000"],
  ];
  return (
    <div style={{
      background: "#fff", color: "var(--ink)", padding: "var(--space-6)",
      borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-raised)",
      border: "1px solid var(--border-on-dark)",
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", color: "var(--navy)", marginBottom: "0.9rem" }}>
        Everything you get
      </div>

      {/* The call itself */}
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem", alignItems: "start" }}>
        <span style={{ color: "var(--gold)", fontSize: "1rem", paddingTop: "0.2rem", minWidth: "1rem" }}>&#9670;</span>
        <div>
          <div style={{ fontWeight: 600, fontSize: "1.05rem", color: "var(--navy)" }}>The Two-Hour Growth Audit</div>
          <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
            We find what's holding your business back — and you leave with the plan to fix it.
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.7rem", marginTop: "0.45rem", flexWrap: "wrap" }}>
            <BrushStrike style={{ fontSize: "1.05rem" }}>R5,000</BrushStrike>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.6rem", color: "var(--gold)" }}>R500</span>
            <span style={{
              background: "var(--gold)", color: "var(--navy)", fontFamily: "var(--font-body)",
              fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.03em",
              padding: "0.2rem 0.55rem", borderRadius: "999px", transform: "rotate(-2deg)",
              whiteSpace: "nowrap", alignSelf: "center",
            }}>90% off</span>
          </div>
        </div>
      </div>

      {/* Free bonuses — faded gold box */}
      <div style={{
        marginTop: "1.1rem", padding: "0.95rem 1rem 1.05rem",
        border: "1px solid rgba(184,137,59,0.45)", background: "rgba(184,137,59,0.06)",
        borderRadius: "var(--radius-sm)",
      }}>
        <div style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.75rem",
          letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-deep)",
          marginBottom: "0.75rem",
        }}>
          Included for free
        </div>
        <div style={{ display: "grid", gap: "0.7rem" }}>
          {bonuses.map(([h, b, worth]) => (
            <div key={h} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0.8rem", alignItems: "start" }}>
              <span style={{ color: "var(--gold)", fontSize: "0.85rem", paddingTop: "0.2rem" }}>&#9670;</span>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--navy)" }}>{h}</span>
                  <span style={{ whiteSpace: "nowrap", display: "inline-flex", alignItems: "baseline", gap: "0.45rem" }}>
                    <BrushStrike style={{ fontSize: "0.85rem" }}>{worth}</BrushStrike>
                    <span style={{
                      fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.7rem",
                      letterSpacing: "0.08em", color: "var(--gold-deep)",
                    }}>FREE</span>
                  </span>
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.1rem", lineHeight: 1.35 }}>{b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.CCHero = CCHero;


function CCWhy() {
  const { Eyebrow } = window.ForwardLineDesignSystem_ce48fd;
  const points = [
    ["Stop working on the wrong problem.", "Spend your time and money on the one thing that will give you the most return."],
    ["A conversation, not a presentation.", "You know your business best. We ask the questions and listen — then compare it to what works elsewhere, so we can see what's missing from your recipe for success."],
    ["Worth more than it costs.", "One fixed problem pays for the call many times over. If it doesn't, you'll know that in two hours too."],
  ];
  return (
    <section style={{ background: "var(--cream-light)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <Eyebrow style={{ fontSize: "clamp(1.25rem, 2.6vw, 1.75rem)", letterSpacing: "0.08em" }}>Why it works</Eyebrow>
        <h2 style={{ marginTop: "0.8rem", maxWidth: "22ch", marginBottom: "var(--space-7)" }}>
          Find what's holding you back. Fix it. Grow.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-6)" }}>
          {points.map(([t, b]) => (
            <div key={t}>
              <h3 style={{ margin: "0 0 0.5rem" }}>{t}</h3>
              <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.CCWhy = CCWhy;


const CC_CONFETTI = [
  { x: "8%", y: "9%", size: 15, r: -15, o: 0.9 },
  { x: "86%", y: "13%", size: 11, r: 20, o: 0.7 },
  { x: "92%", y: "54%", size: 17, r: 8, o: 0.8 },
  { x: "5%", y: "58%", size: 12, r: 30, o: 0.6 },
  { x: "15%", y: "87%", size: 10, r: -10, o: 0.7 },
  { x: "80%", y: "90%", size: 14, r: 15, o: 0.85 },
  { x: "48%", y: "5%", size: 9, r: 0, o: 0.6 },
  { x: "35%", y: "93%", size: 11, r: -20, o: 0.75 },
];

function CCCelebrateModal({ onClose }) {
  const { Button } = window.ForwardLineDesignSystem_ce48fd;
  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(24,30,48,0.72)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", overflow: "hidden", background: "#fff", color: "var(--ink)",
          borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-raised)",
          padding: "clamp(2.2rem, 5vw, 3.5rem)", maxWidth: "460px", width: "100%",
          textAlign: "center",
        }}
      >
        {CC_CONFETTI.map((c, i) => (
          <span key={i} style={{
            position: "absolute", left: c.x, top: c.y, color: "var(--gold)",
            fontSize: c.size, transform: `rotate(${c.r}deg)`, opacity: c.o, pointerEvents: "none",
          }}>&#9670;</span>
        ))}
        <div style={{
          position: "relative", fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "clamp(2rem, 4vw, 2.6rem)", color: "var(--navy)",
        }}>
          Well done.
        </div>
        <p style={{ position: "relative", color: "var(--text-muted)", fontSize: "var(--text-lead)", margin: "1rem 0 1.8rem" }}>
          That's the hard part done. You just moved your business one step closer to growing —
          and being more profitable. We'll be in touch soon to lock in your time.
        </p>
        <Button variant="primary" size="lg" onClick={onClose} style={{ position: "relative" }}>Got it</Button>
      </div>
    </div>,
    document.body
  );
}

function CCBook() {
  const { Eyebrow, Input, Button } = window.ForwardLineDesignSystem_ce48fd;
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [celebrate, setCelebrate] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    const data = new FormData(e.target);
    data.append("_subject", "Constraint Call booking request");
    try {
      await fetch("https://formspree.io/f/xbdbpdkq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
    } catch (err) { /* still confirm — we have the details */ }
    setBusy(false);
    setSent(true);
    setCelebrate(true);
  };
  return (
    <section id="book" style={{ background: "var(--navy)", color: "var(--text-on-dark)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "clamp(2rem,5vw,5rem)", alignItems: "center",
      }}>
        <div>
          <Eyebrow color="var(--gold)" style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)", letterSpacing: "0.08em" }}>
            Book the call
          </Eyebrow>
          <h2 style={{ color: "var(--text-on-dark)", marginTop: "0.8rem" }}>
            Two hours. One plan to reach your growth goal.
          </h2>
          <p style={{ color: "var(--neutral-200)", maxWidth: "44ch", fontSize: "var(--text-lead)" }}>
            Leave your details. We'll confirm a time, send the invoice — and it's time for your business to grow.
          </p>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1.4rem", margin: "1.6rem 0" }}>
            <span style={{ position: "relative", display: "inline-flex", alignItems: "baseline", gap: "0.9rem" }}>
              <BrushStrike style={{ fontSize: "1.2rem", color: "var(--neutral-300)" }}>R5,000</BrushStrike>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2.25rem", color: "var(--gold)" }}>
                R500
              </span>
              <SaveBadge>Save 90%</SaveBadge>
            </span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--neutral-300)", maxWidth: "22ch" }}>
              Pay once — all 4 free extras included.
            </span>
          </div>
          <p style={{ color: "var(--neutral-300)", fontSize: "var(--text-sm)", margin: 0 }}>
            You're one booking away from your business's growth.
          </p>
        </div>
        <div style={{
          background: "#fff", padding: "var(--space-6)", borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border-on-dark)", boxShadow: "var(--shadow-raised)",
        }}>
          {sent ? (
            <div style={{ padding: "1.5rem 0", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem", color: "var(--navy)" }}>
                You're in.
              </div>
              <p style={{ color: "var(--text-muted)", margin: "0.6rem 0 0" }}>
                We'll be in touch to lock a time for your call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.1rem" }}>
              <Input label="Your name" name="name" placeholder="Name and surname" required />
              <Input label="Mobile" name="mobile" type="tel" placeholder="063 097 7801" required />
              <Input label="Your business" name="business" placeholder="What you do, and roughly your size" />
              <Button variant="primary" size="lg" type="submit" disabled={busy} style={{ width: "100%" }}>
                {busy ? "Sending…" : "Book the call"}
              </Button>
              <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--text-muted)", textAlign: "center" }}>
                No payment now. We'll confirm the time first.
              </p>
            </form>
          )}
        </div>
      </div>
      {celebrate && <CCCelebrateModal onClose={() => setCelebrate(false)} />}
    </section>
  );
}
window.CCBook = CCBook;


function CCFaq() {
  const { Eyebrow } = window.ForwardLineDesignSystem_ce48fd;
  const items = [
    {
      q: "Would this be of value for you?",
      a: (
        <>
          <strong style={{ color: "var(--ink)", fontWeight: 700, fontStyle: "italic" }}>
            If you're committed to growing your business or fixing the issue, yes — this is for you.
          </strong>{" "}
          We give you the plan to grow your business. But it only works if you follow the plan.
        </>
      ),
    },
    {
      q: "What can I expect during the call?",
      a: (
        <>
          We ask about your business — what you do now, what works and what doesn't work.
          Then we discuss possible strategies your business can use to grow.
        </>
      ),
    },
    {
      q: "What happens after the call?",
      a: (
        <>
          You're not on your own. Your plan lands in your inbox the next day.
          For 7 days after, ask us anything about it.
        </>
      ),
    },
  ];
  const [open, setOpen] = React.useState(2);
  return (
    <section style={{ background: "var(--surface-page)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <h2 style={{ marginBottom: "var(--space-7)" }}>Frequently Asked Questions</h2>
        <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  ...(isOpen ? {
                    border: "1px solid var(--navy)",
                    borderRadius: "var(--radius-sm)",
                    margin: "0.5rem 0",
                  } : {}),
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%", background: "none", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem",
                    padding: "1.4rem var(--space-4)", textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem",
                    color: "var(--navy)", lineHeight: 1.2,
                  }}>{it.q}</span>
                  <span style={{ color: "var(--gold)", fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }}>
                    {isOpen ? "\u00d7" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p style={{
                    margin: 0, padding: "0 var(--space-4) 1.4rem",
                    color: "var(--text-muted)", fontSize: "var(--text-lead)",
                    maxWidth: "62ch", lineHeight: 1.55,
                  }}>{it.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.CCFaq = CCFaq;


function CCFooter() {
  return (
    <footer style={{ background: "var(--navy)", color: "var(--neutral-200)", borderTop: "1px solid var(--border-on-dark)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "1.4rem var(--gutter)",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1.5rem", flexWrap: "wrap",
        fontSize: "var(--text-xs)", color: "var(--neutral-300)" }}>
        <img src="./assets/ForwardLine-Logo-Cream.svg" alt="ForwardLine" style={{ height: 28 }} />
        <span>© 2026 ForwardLine. South Africa.</span>
      </div>
    </footer>
  );
}
window.CCFooter = CCFooter;


function CCConstraintPage() {
  const { CCHeader, CCHero, CCWhy, CCFaq, CCBook, CCFooter } = window;
  return (
    <div style={{ background: "var(--surface-page)" }}>
      <CCHeader />
      <CCHero />
      <CCWhy />
      <CCFaq />
      <CCBook />
      <CCFooter />
    </div>
  );
}
window.CCConstraintPage = CCConstraintPage;

if (typeof module !== "undefined") { module.exports = { CCConstraintPage }; }
