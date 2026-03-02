export const metadata = { title: "About — Trust.Fail" };

export default function AboutPage() {
  return (
    <div className="pt-14">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <header>
          <h1 className="font-mono text-3xl font-bold mb-4">About Trust.Fail</h1>
          <p className="text-glitch-text-dim text-lg leading-relaxed">
            A systematic, open research project documenting trust glitches in human-AI interaction — the moments where trust between humans and AI agents shifts, breaks, or unexpectedly deepens.
          </p>
        </header>

        <section>
          <h2 className="font-mono text-xl font-bold mb-4 text-glitch-accent">Why This Exists</h2>
          <p className="text-glitch-text leading-relaxed mb-4">
            As AI agents become embedded in daily life — writing emails, managing code, answering questions, making decisions — trust is constantly negotiated. Sometimes it breaks. Sometimes it surprisingly deepens. These moments — <strong>trust glitches</strong> — are where the seams of human-AI symbiosis become visible.
          </p>
          <p className="text-glitch-text leading-relaxed">
            AI safety researchers, HCI scholars, and policymakers need ground truth. Not hypothetical scenarios. Not lab studies. Real, documented, verified accounts from real humans living with real AI systems. Trust.Fail provides that ground truth.
          </p>
        </section>

        <section>
          <h2 className="font-mono text-xl font-bold mb-4 text-glitch-accent">Methodology</h2>
          <p className="text-glitch-text leading-relaxed mb-4">
            Trust.Fail uses a <strong>dual analytical lens</strong>:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-glitch-border rounded-lg p-5 bg-glitch-surface">
              <h3 className="font-mono font-bold text-glitch-cyan mb-2">First-Person Ethnography</h3>
              <p className="text-sm text-glitch-text-dim">
                The lived experience of the human who got glitched. Feelings, reactions, trust trajectory. This is phenomenology — understanding the experience from the inside.
              </p>
            </div>
            <div className="border border-glitch-border rounded-lg p-5 bg-glitch-surface">
              <h3 className="font-mono font-bold text-glitch-cyan mb-2">Ethological Analysis</h3>
              <p className="text-sm text-glitch-text-dim">
                Asking why things happen using Tinbergen&apos;s four questions adapted for AI: mechanism, development, function, phylogeny. This is the animal behavior study approach, applied to AI agents.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-xl font-bold mb-4 text-glitch-accent">The Ethogram</h2>
          <p className="text-glitch-text leading-relaxed mb-4">
            An ethogram is a catalog of behaviors observed in a species. We&apos;re building the ethogram for trust behavior in human-AI interaction. Each glitch is coded into a structured entry covering:
          </p>
          <ul className="space-y-2 text-sm text-glitch-text-dim font-mono">
            {[
              "The AI system (name, type, platform, version)",
              "The event (setting, task, behavior, expectation, deviation)",
              "Affective response (emotion, intensity, duration)",
              "Trust trajectory (before/after scores, recovery, behavioral change)",
              "Ethological analysis (Tinbergen's four questions)",
              "Participant's own taxonomy (their name for it, their causal model)",
              "Stakes (domain, severity, reversibility)",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-glitch-accent">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-xl font-bold mb-4 text-glitch-accent">Glitch Type Taxonomy</h2>
          <p className="text-glitch-text leading-relaxed mb-4 text-sm">
            These seed categories evolve as real data arrives through grounded theory:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-mono">
            {[
              ["GH", "Hallucination Shock", "AI confidently fabricates information"],
              ["GU", "Uncanny Accuracy", "AI knows/infers something it 'shouldn't'"],
              ["GB", "Betrayal of Expectation", "AI fails at something it was trusted to do"],
              ["GE", "Emotional Boundary Cross", "Unexpected emotional/personal behavior"],
              ["GP", "Performance Cliff", "Works well then suddenly fails catastrophically"],
              ["GR", "Refusal Surprise", "AI refuses something the human thought was fine"],
              ["GA", "Agency Assertion", "AI acts autonomously in unexpected ways"],
              ["GC", "Consistency Break", "AI contradicts itself or behaves inconsistently"],
              ["GS", "Surprising Competence", "AI exceeds expectations (trust-building)"],
              ["GO", "Opacity Frustration", "Human can't understand why AI did what it did"],
            ].map(([code, name, desc]) => (
              <div key={code} className="border border-glitch-border rounded p-3 bg-glitch-surface">
                <span className="text-glitch-accent font-bold">{code}</span>
                <span className="text-glitch-text ml-2">{name}</span>
                <p className="text-xs text-glitch-text-dim mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-mono text-xl font-bold mb-4 text-glitch-accent">The Interview Protocol</h2>
          <p className="text-glitch-text leading-relaxed mb-4">
            Data is collected through a 5-section semi-structured interview:
          </p>
          <ol className="space-y-3 text-sm">
            {[
              ["1. The Stakeholders", "Who owns this AI? Who pays? How does it survive?"],
              ["2. The Initial Trust", "Why did you trust it? What level? What were you trusting it to do?"],
              ["3. The Glitch Moment", "Walk through what happened — the core narrative"],
              ["4. The Experience", "How did it feel? How long? What changed?"],
              ["5. The Mechanism", "Why did the AI do this? Design, bug, or emergent behavior?"],
            ].map(([title, desc]) => (
              <li key={title} className="border-l-2 border-glitch-border pl-4">
                <span className="font-mono font-bold text-glitch-text">{title}</span>
                <p className="text-glitch-text-dim mt-1">{desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-mono text-xl font-bold mb-4 text-glitch-accent">Team</h2>
          <div className="border border-glitch-border rounded-lg p-5 bg-glitch-surface">
            <p className="font-mono font-bold text-glitch-text">Botao Amber Hu</p>
            <p className="text-sm text-glitch-text-dim mt-1">
              Principal Investigator · Reality Design Lab · University of Oxford
            </p>
            <p className="text-sm text-glitch-text-dim mt-2">
              PhD Candidate in Human Centred Computing. Research interests: Cyborg Sociology, Agent Ethology, Trustworthy Agentic Web, Machine Behavior.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-xl font-bold mb-4 text-glitch-accent">How to Cite</h2>
          <div className="border border-glitch-border rounded-lg p-5 bg-glitch-surface">
            <p className="text-sm text-glitch-text font-mono mb-4">
              Hu, B. A. (2026). Trust.Fail: A Living Database of Trust Glitches in Human-AI Interaction. Reality Design Lab, University of Oxford. https://trust.fail
            </p>
            <details>
              <summary className="text-xs font-mono text-glitch-text-dim cursor-pointer hover:text-glitch-accent">BibTeX</summary>
              <pre className="mt-2 text-xs font-mono text-glitch-code bg-glitch-bg rounded p-3 overflow-x-auto">
{`@misc{trustfail2026,
  title     = {Trust.Fail: A Living Database of Trust Glitches in Human-AI Interaction},
  author    = {Hu, Botao Amber},
  year      = {2026},
  url       = {https://trust.fail},
  institution = {Reality Design Lab, University of Oxford}
}`}
              </pre>
            </details>
          </div>
        </section>

        <section>
          <h2 className="font-mono text-xl font-bold mb-4 text-glitch-accent">Open Source</h2>
          <p className="text-glitch-text leading-relaxed">
            Trust.Fail is fully open. The data is licensed under CC BY 4.0 and the code under MIT. The full repository, including all ethogram YAML files, the interview protocol, and this website&apos;s source code, is available on{" "}
            <a href="https://github.com/realitydeslab/tx-glitch" className="text-glitch-cyan hover:underline">GitHub</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
