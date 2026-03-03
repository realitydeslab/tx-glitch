export const metadata = { title: "About — Trust.Fail" };

export default function AboutPage() {
  const glitchTypes = [
    ["GH", "Hallucination Shock", "bg-card-red"],
    ["GU", "Uncanny Accuracy", "bg-card-purple"],
    ["GB", "Betrayal of Expectation", "bg-card-orange"],
    ["GE", "Emotional Boundary Cross", "bg-card-pink"],
    ["GP", "Performance Cliff", "bg-card-yellow"],
    ["GR", "Refusal Surprise", "bg-card-blue"],
    ["GA", "Agency Assertion", "bg-card-emerald"],
    ["GC", "Consistency Break", "bg-card-amber"],
    ["GS", "Surprising Competence", "bg-card-cyan"],
    ["GO", "Opacity Frustration", "bg-card-slate"],
  ];

  return (
    <div className="pt-14">
      {/* Hero */}
      <div className="bg-white border-b border-border py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">About the project</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight mb-6">Trust.Fail</h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            A systematic, open research project to document how trust between humans and AI actually works — and where it breaks.
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-16">
        <Section title="The problem">
          <p className="drop-cap">AI safety researchers need ground truth. Not hypothetical scenarios, not lab studies with contrived tasks — real, documented accounts of how trust behaves in the wild. Self-reporting is unreliable. People fabricate, embellish, misremember. That&apos;s why we use structured interviews — AI-conducted, protocol-driven, evidence-backed.</p>
        </Section>

        <Section title="Our method">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold mb-2">First-person ethnography</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                The lived experience. What happened, how it felt, what changed. Phenomenology — capturing the human side.
              </p>
            </div>
            <div className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold mb-2">Ethological analysis</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tinbergen&apos;s four questions (mechanism, development, function, phylogeny) adapted for AI agents.
              </p>
            </div>
          </div>
        </Section>

        <Section title="The interview protocol">
          <p className="text-text-secondary mb-6">Five focused sections, ~15-20 minutes:</p>
          <div className="space-y-4">
            {[
              ["01", "The Stakeholders", "Who owns this AI? Who pays? How does it survive?"],
              ["02", "The Initial Trust", "Why did you trust it? What level? What were you trusting it to do?"],
              ["03", "The Glitch Moment", "Walk me through what happened, step by step."],
              ["04", "The Experience", "How did it feel? What changed?"],
              ["05", "The Mechanism", "Why do you think it did that? Design or bug? Your theory?"],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4">
                <span className="font-mono text-sm text-coral font-bold mt-1">{num}</span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-text-secondary text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="The ethogram">
          <p className="text-text-secondary mb-6">
            An ethogram is a catalog of behaviors observed in a species. We&apos;re building the first one for trust behavior in human-AI interaction.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {glitchTypes.map(([code, name, bg]) => (
              <div key={code} className={`${bg} rounded-xl p-3 text-center`}>
                <p className="font-mono text-xs font-bold opacity-70">{code}</p>
                <p className="text-xs font-medium mt-1 leading-tight">{name}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted mt-4 italic">
            Seed categories — the real taxonomy emerges from the data.
          </p>
        </Section>

        <Section title="Team">
          <p><strong>Botao Amber Hu</strong> — Principal Investigator</p>
          <p className="text-text-secondary">Reality Design Lab · University of Oxford</p>
        </Section>

        <Section title="Cite this project">
          <pre className="bg-white border border-border rounded-xl p-6 text-sm font-mono overflow-x-auto">{`@misc{trustfail2026,
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
      <h2 className="font-serif text-2xl font-bold mb-5 pb-2 border-b border-border">{title}</h2>
      <div className="text-text leading-relaxed">{children}</div>
    </section>
  );
}
