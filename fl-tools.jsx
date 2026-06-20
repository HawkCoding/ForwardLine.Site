/* ─────────────────────────────────────────────
   ForwardLine — Free Tools page (website)
   The diagnostic tools we run for clients, opened
   up for anyone to use. Section-snap scroll +
   reveal-on-enter, matching the rest of the site.

   Routing:
     #/tools          → gallery (FLTools, no slug)
     #/tools/<slug>   → individual tool widget
   For now each widget renders a polished "in the
   workshop" placeholder; the calculators/diagnostics
   drop straight into FL_TOOLS by slug later.
   ───────────────────────────────────────────── */

/* Single source of truth for the tool gallery.
   `kind` drives the small corner tag; `slug` is the
   hash route (#/tools/<slug>). Order here is the
   order shown in the grid. */
const FL_TOOLS = [
  {
    slug: 'cac',
    num: 'i.',
    kind: 'Calculator',
    title: 'Customer Acquisition Cost',
    blurb: 'What it truly costs to win one new customer once every rand of sales and marketing is counted.',
  },
  {
    slug: 'ltv',
    num: 'ii.',
    kind: 'Calculator',
    title: 'Customer Lifetime Value',
    blurb: 'What a single customer is worth to you across the whole of the relationship — not just the first sale.',
  },
  {
    slug: 'ltv-cac',
    num: 'iii.',
    kind: 'Calculator',
    title: 'LTV : CAC Ratio',
    blurb: 'The one ratio that tells you whether your growth spend is building the business or quietly draining it.',
  },
  {
    slug: 'customer-value',
    num: 'iv.',
    kind: 'Calculator',
    title: 'True Value of a Customer',
    blurb: 'Repeat business, margin and referrals folded into a single honest number you can act on.',
  },
  {
    slug: 'break-even',
    num: 'v.',
    kind: 'Calculator',
    title: 'Break-Even Point',
    blurb: 'The exact revenue you need before a single rand of profit appears — fixed and variable costs accounted for.',
  },
  {
    slug: 'margin',
    num: 'vi.',
    kind: 'Calculator',
    title: 'Profit Leak Finder',
    blurb: 'Walk the path from top-line revenue to take-home profit and see precisely where the margin escapes.',
  },
  {
    slug: 'bottleneck',
    num: 'vii.',
    kind: 'Diagnostic',
    title: 'Bottleneck Finder',
    blurb: 'A short, candid diagnostic that surfaces the single constraint holding your growth back right now.',
  },
  {
    slug: 'next-hire',
    num: 'viii.',
    kind: 'Diagnostic',
    title: 'Next Hire Advisor',
    blurb: 'Where you are capacity-bound, and the one role that will unlock the most room when you fill it next.',
  },
];

function flToolBySlug(slug) {
  return FL_TOOLS.find(t => t.slug === slug) || null;
}

/* ── Single tool card — segmented, clearly its own space ── */
function FLToolCard({ tool, index, isMobile }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={`#/tools/${tool.slug}`}
      className={`fl-reveal fl-r${(index % 6) + 1}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 12,
        padding: isMobile ? '24px' : '28px 30px',
        borderRight: `1px solid ${FL_LINEN}`,
        borderBottom: `1px solid ${FL_LINEN}`,
        background: hover ? FL_IVORY : FL_IVORY_2,
        textDecoration: 'none', color: FL_NAVY,
        position: 'relative', minHeight: isMobile ? 0 : 210,
        transition: 'background .25s ease',
      }}
    >
      {/* gold top accent that draws in on hover */}
      <span style={{
        position: 'absolute', top: 0, left: 0, height: 2,
        width: hover ? '100%' : 0, background: FL_GOLD,
        transition: 'width .35s cubic-bezier(.22,.61,.36,1)',
      }} />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
        <span style={{ fontFamily: FL_DISPLAY, fontStyle: 'italic', fontSize: 22, color: FL_SAND, fontWeight: 500 }}>{tool.num}</span>
        <span style={{ fontFamily: FL_CAPS, fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', color: FL_GOLD }}>{tool.kind}</span>
      </div>
      <h3 style={{ margin: 0, fontFamily: FL_DISPLAY, fontSize: 23, fontWeight: 600, color: FL_NAVY, lineHeight: 1.15 }}>
        {tool.title}
      </h3>
      <p style={{ margin: 0, fontSize: 13.5, color: FL_GRAPHITE, lineHeight: 1.7, flex: 1 }}>
        {tool.blurb}
      </p>
      <span style={{
        fontFamily: FL_CAPS, fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase',
        color: hover ? FL_NAVY : FL_GRAPHITE, display: 'inline-flex', alignItems: 'center', gap: 8,
        transition: 'color .25s ease',
      }}>
        Open Tool
        <span style={{
          display: 'inline-block',
          transform: hover ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform .25s ease',
        }}>→</span>
      </span>
    </a>
  );
}

/* ── Individual tool view — placeholder while widgets are built ── */
function FLToolWidget({ tool }) {
  const bp = useBreakpoint();
  const isMobile = bp === 'sm' || bp === 'xs';
  const sectionMinH = `calc(100vh - ${FL_STRIP_H}px)`;

  /* Unknown slug → send them back to the gallery. */
  if (!tool) {
    return (
      <div style={{ background: FL_IVORY, fontFamily: FL_BODY, color: FL_NAVY }}>
        <div style={{ minHeight: sectionMinH, display: 'flex', flexDirection: 'column' }}>
          <FLNav active="Free Tools" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, padding: '40px 24px', textAlign: 'center' }}>
            <FLEyebrow>Not Found</FLEyebrow>
            <h1 style={{ margin: 0, fontFamily: FL_DISPLAY, fontSize: isMobile ? 36 : 52, fontWeight: 500, color: FL_NAVY }}>
              That tool isn't here.
            </h1>
            <p style={{ margin: 0, fontSize: 15, color: FL_GRAPHITE, maxWidth: 460, lineHeight: 1.8 }}>
              The link may have changed. Head back to the workshop and pick from the full set.
            </p>
            <FLButton href="#/tools" variant="outline">← Back to Free Tools</FLButton>
          </div>
        </div>
        <FLFooter />
      </div>
    );
  }

  return (
    <div style={{ background: FL_IVORY, fontFamily: FL_BODY, color: FL_NAVY }}>
      <div style={{ minHeight: sectionMinH, display: 'flex', flexDirection: 'column' }}>
        <FLNav active="Free Tools" />
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: isMobile ? '48px 24px' : '40px 40px',
        }}>
          <div style={{ maxWidth: 760, margin: '0 auto', width: '100%' }}>
            <a href="#/tools" style={{
              fontFamily: FL_CAPS, fontSize: 10, letterSpacing: 2.5, textTransform: 'uppercase',
              color: FL_GRAPHITE, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span>←</span> All Free Tools
            </a>

            <div style={{
              marginTop: 28, border: `1px solid ${FL_SAND}`, background: FL_IVORY_2,
              padding: isMobile ? '36px 26px' : '52px 56px',
              display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, alignSelf: 'flex-start' }}>
                <span style={{ color: FL_GOLD, fontSize: 8, letterSpacing: 4, transform: 'translateY(-1px)' }}>◆</span>
                <FLEyebrow color={FL_NAVY} style={{ letterSpacing: 4 }}>{tool.kind}</FLEyebrow>
              </div>
              <h1 style={{ margin: 0, fontFamily: FL_DISPLAY, fontSize: isMobile ? 38 : 60, lineHeight: 1.02, fontWeight: 500, color: FL_NAVY, letterSpacing: -0.5 }}>
                {tool.title}
              </h1>
              <p style={{ margin: 0, fontSize: 16, color: FL_INK, lineHeight: 1.8, maxWidth: 560 }}>
                {tool.blurb}
              </p>

              <div style={{ margin: '6px 0 2px' }}>
                <FLDivider />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontFamily: FL_CAPS, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: FL_GOLD }}>In the workshop</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: FL_GRAPHITE, lineHeight: 1.8, maxWidth: 560 }}>
                We're finishing this one off. It'll open right here — free to use, the same instrument we run inside a quarter. In the meantime, the rest of the toolkit is ready, and a discovery call walks you through the lot against your own numbers.
              </p>

              <div style={{ display: 'flex', gap: 14, marginTop: 12, flexWrap: 'wrap' }}>
                <FLButton href="#/contact" variant="filled">Book a Discovery Call →</FLButton>
                <FLButton href="#/tools" variant="outline">Browse the Toolkit</FLButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FLFooter />
    </div>
  );
}

/* ── Gallery (landing) ── */
function FLTools({ slug = null }) {
  const bp = useBreakpoint();
  const isMobile = bp === 'sm' || bp === 'xs';

  const tracker = useSnapTracker();
  const railVisible = !isMobile && tracker.index >= 1;

  const sectionMinH = `calc(100vh - ${FL_STRIP_H}px)`;

  /* A slug routes to the individual tool view instead of the gallery. */
  if (slug) {
    return <FLToolWidget tool={flToolBySlug(slug)} />;
  }

  return (
    <div style={{ background: FL_IVORY, fontFamily: FL_BODY, color: FL_NAVY }}>

      {/* ── 1. Editorial intro ── */}
      <FLSection
        id="fl-tools-intro"
        style={{
          minHeight: sectionMinH,
          background: FL_IVORY,
          display: 'flex', flexDirection: 'column',
        }}
      >
        <FLNav active="Free Tools" />
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: isMobile ? '48px 24px' : '40px 40px',
        }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr', gap: isMobile ? 32 : 80, alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <FLEyebrow className="fl-reveal fl-r1">Free Tools · The Instruments We Use</FLEyebrow>
                <h1 className="fl-reveal fl-r2" style={{
                  margin: 0, fontFamily: FL_DISPLAY,
                  fontSize: isMobile ? 44 : 76,
                  lineHeight: 1.02, fontWeight: 500, color: FL_NAVY, letterSpacing: -1,
                }}>
                  The same tools<br />
                  we run for clients.<br />
                  <span style={{ fontStyle: 'italic' }}>Yours to use,<br />for free.</span>
                </h1>
              </div>
              <div className="fl-reveal fl-r3" style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingTop: isMobile ? 0 : 14 }}>
                <p style={{ margin: 0, fontSize: 16, color: FL_INK, lineHeight: 1.8, fontFamily: FL_BODY }}>
                  When we sit down with a business, we reach for a small set of instruments — quick diagnostics that cut through the noise and put a number on what's really going on. The cost of a customer. The value of one. The role that's quietly missing. The constraint holding everything back.
                </p>
                <p style={{ margin: 0, fontSize: 14.5, color: FL_GRAPHITE, lineHeight: 1.8, fontFamily: FL_BODY }}>
                  We've opened them up. No sign-up, no catch — the same tools we use internally for diagnostic checks, free for anyone to put to work. Pick one below and get an honest read in a couple of minutes.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6 }}>
                  <span style={{ width: 56, height: 1, background: FL_NAVY }} />
                  <span style={{ fontFamily: FL_CAPS, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: FL_NAVY }}>Measure · Diagnose · Decide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FLSection>

      {/* ── 2. The toolkit grid ── */}
      <FLSection
        id="fl-tools-grid"
        style={{
          minHeight: sectionMinH,
          background: FL_LINEN,
          display: 'flex', alignItems: 'center',
          padding: isMobile ? '64px 24px' : '64px 40px',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? 28 : 72, alignItems: 'start', marginBottom: isMobile ? 32 : 44 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <FLEyebrow className="fl-reveal fl-r1">The Toolkit</FLEyebrow>
              <h2 className="fl-reveal fl-r2" style={{ margin: 0, fontFamily: FL_DISPLAY, fontSize: isMobile ? 30 : 44, lineHeight: 1.05, fontWeight: 500, color: FL_NAVY, letterSpacing: -0.4 }}>
                Eight ways to see <span style={{ fontStyle: 'italic' }}>your</span> numbers clearly.
              </h2>
            </div>
            <p className="fl-reveal fl-r3" style={{ margin: 0, fontSize: 14.5, color: FL_GRAPHITE, lineHeight: 1.8, paddingTop: isMobile ? 0 : 8 }}>
              Each tool stands on its own — open it, answer a few questions, get a number you can act on the same day. Calculators for the economics, diagnostics for the harder calls. Start anywhere.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: 0, borderTop: `1px solid ${FL_LINEN}`, borderLeft: `1px solid ${FL_LINEN}`,
          }}>
            {FL_TOOLS.map((tool, i) => (
              <FLToolCard key={tool.slug} tool={tool} index={i} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </FLSection>

      {/* ── 3. Closing CTA ── */}
      <FLSection
        id="fl-tools-cta"
        style={{
          minHeight: sectionMinH,
          background: FL_IVORY,
          display: 'flex', alignItems: 'center',
          padding: isMobile ? '60px 24px' : '60px 40px',
        }}
      >
        <div className="fl-reveal fl-r1" style={{
          maxWidth: 1100, margin: '0 auto', width: '100%',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 36, padding: isMobile ? '32px 24px' : '44px 56px',
          border: `1px solid ${FL_SAND}`, background: FL_IVORY_2,
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 580 }}>
            <FLEyebrow>The Tools Are A Taste</FLEyebrow>
            <h3 style={{ margin: 0, fontFamily: FL_DISPLAY, fontSize: isMobile ? 26 : 34, fontWeight: 500, color: FL_NAVY, lineHeight: 1.15, letterSpacing: -0.3 }}>
              A calculator gives you a number.<br />
              <span style={{ fontStyle: 'italic', color: FL_GRAPHITE }}>A quarter gives you the plan to move it.</span>
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
            <FLButton href="#/contact" variant="filled">Book a Discovery Call →</FLButton>
            <span style={{ fontFamily: FL_DISPLAY, fontStyle: 'italic', fontSize: 14, color: FL_GRAPHITE, maxWidth: 320, textAlign: isMobile ? 'left' : 'right' }}>
              We'll run these against your real numbers, together.
            </span>
          </div>
        </div>
      </FLSection>

      <FLFooter />

      {/* Imperial section rail — appears past the intro */}
      <FLSectionRail
        count={Math.max(1, tracker.count || 3)}
        currentIndex={tracker.index}
        progress={tracker.progress}
        visible={railVisible}
      />
    </div>
  );
}

window.FLTools = FLTools;
