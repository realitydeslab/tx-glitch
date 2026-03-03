export const metadata = { title: "About — Trust.Fail" };

export default function AboutPage() {
  return (
    <article className="py-8 text-[15px] leading-[1.7]">
      <h1 className="font-heading text-[28px] text-af-heading mb-4">About Trust.Fail</h1>

      <p className="mb-4">Trust.Fail is an open research project documenting how trust between humans and AI actually works — and where it breaks. We conduct structured ethnographic interviews, analyze experiences through both phenomenological and ethological lenses, and publish everything as open data.</p>

      <p className="mb-6">Think of it as the <a href="https://asrs.arc.nasa.gov/">NASA Aviation Safety Reporting System</a> for human-AI trust.</p>

      <h2 className="font-heading text-[18px] text-af-heading mb-2 font-medium">Interview protocol</h2>
      <p className="mb-2">Five sections, ~15-20 minutes:</p>
      <ol className="list-decimal list-inside mb-6 space-y-1 text-[14px]">
        <li><strong>The Stakeholders</strong> — Who owns this AI?</li>
        <li><strong>The Initial Trust</strong> — Why did you trust it?</li>
        <li><strong>The Glitch Moment</strong> — What happened, step by step?</li>
        <li><strong>The Experience</strong> — How did it feel?</li>
        <li><strong>The Mechanism</strong> — Why do you think it happened?</li>
      </ol>

      <h2 className="font-heading text-[18px] text-af-heading mb-2 font-medium">The ethogram</h2>
      <p className="mb-3">An ethogram is a catalog of observed behaviors in a species. We&apos;re building the first one for trust behavior in human-AI interaction, using Tinbergen&apos;s four questions adapted for artificial agents.</p>
      <p className="mb-6 text-[13px] text-af-meta italic">Seed categories: GH (Hallucination), GU (Uncanny Accuracy), GB (Betrayal), GE (Emotional Boundary), GP (Performance Cliff), GR (Refusal), GA (Agency Assertion), GC (Consistency Break), GS (Surprising Competence), GO (Opacity)</p>

      <h2 className="font-heading text-[18px] text-af-heading mb-2 font-medium">Team</h2>
      <p><strong>Botao Amber Hu</strong> — Principal Investigator, Reality Design Lab, University of Oxford</p>

      <div className="mt-8 pt-4 border-t border-af-border">
        <pre className="text-[11px] font-mono text-af-meta bg-af-card border border-af-border rounded p-3 overflow-x-auto">{`@misc{trustfail2026,
  title  = {Trust.Fail: An Open Ethnographic Database of
            Trust Glitches in Human-AI Interaction},
  author = {Hu, Botao Amber},
  year   = {2026},
  url    = {https://trust.fail}
}`}</pre>
      </div>
    </article>
  );
}
