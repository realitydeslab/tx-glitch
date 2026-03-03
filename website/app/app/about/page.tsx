export const metadata = { title: "About — Trust.Fail" };

export default function AboutPage() {
  return (
    <article className="max-w-[680px] mx-auto px-5 py-16">
      <h1 className="font-sans font-semibold text-3xl mb-6">About Trust.Fail</h1>

      <p className="font-serif text-base leading-relaxed mb-6">
        Trust.Fail is an open research project documenting how trust between humans and AI actually works — and where it breaks. We conduct structured interviews, analyze experiences through ethnographic and ethological lenses, and publish everything as open data.
      </p>

      <p className="font-serif text-base leading-relaxed mb-10">
        Think of it as the <a href="https://asrs.arc.nasa.gov/" className="underline">NASA Aviation Safety Reporting System</a>, but for human-AI trust. Every glitch is an incident report. Every report makes the system safer.
      </p>

      <h2 className="font-sans font-semibold text-xl mb-4">The interview</h2>
      <p className="font-serif text-base leading-relaxed mb-3">Five sections, ~15-20 minutes:</p>
      <ol className="font-serif text-base leading-relaxed mb-10 list-decimal list-inside space-y-1">
        <li><strong>The Stakeholders</strong> — Who owns this AI?</li>
        <li><strong>The Initial Trust</strong> — Why did you trust it?</li>
        <li><strong>The Glitch Moment</strong> — What happened?</li>
        <li><strong>The Experience</strong> — How did it feel?</li>
        <li><strong>The Mechanism</strong> — Why did it happen?</li>
      </ol>

      <h2 className="font-sans font-semibold text-xl mb-4">The ethogram</h2>
      <p className="font-serif text-base leading-relaxed mb-4">
        An ethogram is a catalog of observed behaviors. We&apos;re building the first one for trust in human-AI interaction. Ten seed types:
      </p>
      <div className="font-mono text-sm space-y-1 mb-10">
        {[
          ["GH", "Hallucination Shock"], ["GU", "Uncanny Accuracy"], ["GB", "Betrayal of Expectation"],
          ["GE", "Emotional Boundary Cross"], ["GP", "Performance Cliff"], ["GR", "Refusal Surprise"],
          ["GA", "Agency Assertion"], ["GC", "Consistency Break"], ["GS", "Surprising Competence"],
          ["GO", "Opacity Frustration"],
        ].map(([code, name]) => (
          <p key={code} className="text-pudding-muted"><span className="text-pudding-text font-medium">{code}</span> {name}</p>
        ))}
      </div>

      <h2 className="font-sans font-semibold text-xl mb-4">Team</h2>
      <p className="font-serif text-base leading-relaxed mb-2"><strong>Botao Amber Hu</strong> — Principal Investigator</p>
      <p className="font-mono text-xs text-pudding-muted mb-10">Reality Design Lab · University of Oxford</p>

      <h2 className="font-sans font-semibold text-xl mb-4">Cite</h2>
      <pre className="font-mono text-xs text-pudding-muted leading-relaxed bg-[#F7F7F7] rounded p-5 overflow-x-auto">{`@misc{trustfail2026,
  title  = {Trust.Fail: An Open Ethnographic Database
            of Trust Glitches in Human-AI Interaction},
  author = {Hu, Botao Amber},
  year   = {2026},
  url    = {https://trust.fail}
}`}</pre>
    </article>
  );
}
