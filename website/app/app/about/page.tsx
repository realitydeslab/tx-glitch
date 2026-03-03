export const metadata = { title: "About — Trust.Fail" };

export default function AboutPage() {
  return (
    <div className="pt-16">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-5xl mb-6">About Trust.Fail</h1>
        <p className="text-xl text-warm-dim leading-relaxed mb-12">
          A systematic, open research project to document how trust between humans and AI actually works — and where it breaks.
        </p>

        <Section title="The problem">
          <p>AI safety researchers need ground truth. Not hypothetical scenarios, not lab studies with contrived tasks — real, documented accounts of how trust behaves in the wild.</p>
          <p className="mt-4">Self-reporting is unreliable. People fabricate, embellish, misremember. That&apos;s why we use structured interviews — AI-conducted, protocol-driven, evidence-backed.</p>
        </Section>

        <Section title="Our method: dual analytical lens">
          <p>Each glitch is analyzed through two perspectives:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-warm-light rounded-2xl p-6">
              <h3 className="font-serif text-xl mb-2">First-person ethnography</h3>
              <p className="text-warm-dim text-sm leading-relaxed">
                The lived experience. What happened, how it felt, what changed. Phenomenology — capturing the human side of the glitch.
              </p>
            </div>
            <div className="bg-warm-light rounded-2xl p-6">
              <h3 className="font-serif text-xl mb-2">Ethological analysis</h3>
              <p className="text-warm-dim text-sm leading-relaxed">
                The behavioral science. Using Tinbergen&apos;s four questions (mechanism, development, function, phylogeny) adapted for AI agents.
              </p>
            </div>
          </div>
        </Section>

        <Section title="The interview protocol">
          <p>Five focused sections, ~15-20 minutes:</p>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            <li><strong>The Stakeholders</strong> — Who owns this AI? Who pays? How does it survive?</li>
            <li><strong>The Initial Trust</strong> — Why did you trust it? What level? What were you trusting it to do?</li>
            <li><strong>The Glitch Moment</strong> — Walk me through what happened, step by step</li>
            <li><strong>The Experience</strong> — How did it feel? What changed?</li>
            <li><strong>The Mechanism</strong> — Why do you think it did that? Design or bug? Your theory?</li>
          </ol>
        </Section>

        <Section title="The ethogram">
          <p className="mb-4">An ethogram is a catalog of behaviors observed in a species. We&apos;re building the first ethogram for trust behavior in human-AI interaction.</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ["GH", "Hallucination Shock", "🫣"],
              ["GU", "Uncanny Accuracy", "😳"],
              ["GB", "Betrayal of Expectation", "💔"],
              ["GE", "Emotional Boundary Cross", "😬"],
              ["GP", "Performance Cliff", "📉"],
              ["GR", "Refusal Surprise", "🚫"],
              ["GA", "Agency Assertion", "🤖"],
              ["GC", "Consistency Break", "🔀"],
              ["GS", "Surprising Competence", "✨"],
              ["GO", "Opacity Frustration", "🤷"],
            ].map(([code, name, emoji]) => (
              <div key={code} className="bg-warm-light rounded-xl p-3 flex items-center gap-3">
                <span className="text-xl">{emoji}</span>
                <div>
                  <span className="font-mono text-xs text-coral">{code}</span>
                  <span className="ml-2">{name}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-warm-dim mt-4 italic">
            These categories are seeds — the real taxonomy will emerge from the data through grounded theory.
          </p>
        </Section>

        <Section title="Analogies">
          <div className="space-y-4">
            <p><strong>NASA ASRS</strong> — The Aviation Safety Reporting System transformed aviation safety through voluntary incident reporting. Trust.Fail is the ASRS for human-AI trust.</p>
            <p><strong>Ethograms</strong> — Standardized behavioral catalogs from animal behavior science. We&apos;re building one for a new kind of interaction.</p>
            <p><strong>Broad listening</strong> — Technology-assisted deliberation that surfaces patterns across many voices. Our database enables broad listening about trust.</p>
          </div>
        </Section>

        <Section title="Team">
          <p><strong>Botao Amber Hu</strong> — Principal Investigator</p>
          <p className="text-warm-dim">Reality Design Lab · University of Oxford</p>
        </Section>

        <Section title="Cite this project">
          <pre className="bg-warm-light rounded-xl p-6 text-sm font-mono overflow-x-auto border border-warm-border">{`@misc{trustfail2026,
  title  = {Trust.Fail: An Open Ethnographic Database
            of Trust Glitches in Human-AI Interaction},
  author = {Hu, Botao Amber and {Reality Design Lab}},
  year   = {2026},
  url    = {https://trust.fail}
}`}</pre>
        </Section>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="font-serif text-2xl mb-4">{title}</h2>
      <div className="text-warm-dark leading-relaxed">{children}</div>
    </section>
  );
}
