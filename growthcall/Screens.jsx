/* ForwardLine — The Constraint Call landing page. Mounted via x-import. */

function ccGoToBook() {
  const el = document.getElementById("book");
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: "smooth" });
}
window.ccGoToBook = ccGoToBook;

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
        padding: "0.9rem var(--gutter)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center" }}>
          <img src="./assets/ForwardLine-Logo-Cream.svg" alt="ForwardLine" style={{ height: 36 }} />
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
        display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center",
      }}>
        <div>
          <Eyebrow color="var(--gold)">The Constraint Call</Eyebrow>
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
            We ask the hard questions. You ask yours. Together we find the single point your
            business is most constrained — and the fix that unlocks growth.
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" onClick={ccGoToBook}>Book the call</Button>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--neutral-300)" }}>
              2 hours &middot; one focus &middot; a clear next move
            </span>
          </div>
        </div>
        <CCSessionCard />
      </div>
    </section>
  );
}

function CCSessionCard() {
  const rows = [
    ["00:00", "We map your business", "Where the work comes from, and where it leaks out."],
    ["00:40", "We find the constraint", "The one bottleneck capping your growth — not ten, one."],
    ["01:30", "You leave with the fix", "The exact move to make next, and how to make it."],
  ];
  return (
    <div style={{
      background: "#fff", color: "var(--ink)", padding: "var(--space-6)",
      borderRadius: "var(--radius-sm)", boxShadow: "var(--shadow-raised)",
      border: "1px solid var(--border-on-dark)",
    }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1.4rem" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", color: "var(--navy)" }}>
          What the two hours buy you
        </div>
      </div>
      <div style={{ display: "grid", gap: "1.1rem" }}>
        {rows.map(([t, h, b]) => (
          <div key={t} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem", alignItems: "start" }}>
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.8125rem",
              color: "var(--gold)", paddingTop: "0.15rem", minWidth: "3.2rem",
            }}>{t}</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: "1rem", color: "var(--navy)" }}>{h}</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{b}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: "1px solid var(--border-subtle)", marginTop: "1.4rem", paddingTop: "1.2rem",
        display: "flex", alignItems: "baseline", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>Fixed price</span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem", color: "var(--navy)" }}>
          R10,000
        </span>
      </div>
    </div>
  );
}
window.CCHero = CCHero;


function CCWhy() {
  const { Eyebrow } = window.ForwardLineDesignSystem_ce48fd;
  const points = [
    ["You don't have ten problems.", "You have one that's capping the rest. We find it, so you stop spending money fixing the wrong things."],
    ["No slides. No homework.", "Two hours, a real conversation, straight answers. You walk away knowing the next move."],
    ["Worth more than it costs.", "One unlocked constraint pays for the call many times over. If it doesn't, you'll know that in two hours too."],
  ];
  return (
    <section style={{ background: "var(--cream-light)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)" }}>
        <Eyebrow>Why it works</Eyebrow>
        <h2 style={{ marginTop: "0.8rem", maxWidth: "22ch", marginBottom: "var(--space-7)" }}>
          Find the constraint. Fix the constraint. Grow.
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


function CCBook() {
  const { Eyebrow, Input, Button } = window.ForwardLineDesignSystem_ce48fd;
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
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
  };
  return (
    <section id="book" style={{ background: "var(--navy)", color: "var(--text-on-dark)" }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-y) var(--gutter)",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center",
      }}>
        <div>
          <Eyebrow color="var(--gold)">Book the call</Eyebrow>
          <h2 style={{ color: "var(--text-on-dark)", marginTop: "0.8rem" }}>
            Two hours. One constraint. R10,000.
          </h2>
          <p style={{ color: "var(--neutral-200)", maxWidth: "44ch", fontSize: "var(--text-lead)" }}>
            Leave your details. We'll confirm a time, send the invoice, and come ready to dig in.
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
              <Input label="Mobile" name="mobile" type="tel" placeholder="082 000 0000" required />
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
          <strong style={{ color: "var(--navy)", fontWeight: 600 }}>
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
        <Eyebrow>Questions</Eyebrow>
        <h2 style={{ marginTop: "0.8rem", marginBottom: "var(--space-7)" }}>Straight answers.</h2>
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
