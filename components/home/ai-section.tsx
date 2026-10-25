import { aiInProducts, aiInWorkflow, developerResponsibilities } from "@/lib/content";

export function AiSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="reveal rounded-3xl bg-ink-panel p-6 text-on-ink md:p-10 lg:col-span-7">
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-on-ink-2">AI inside the products I build</p>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2">
          {aiInProducts.map((item, index) => (
            <li key={item.title}>
              <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-ink-2">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5">
        <div className="reveal rounded-3xl border border-line bg-raised p-6 md:p-8">
          <p className="eyebrow">AI in how I build</p>
          <p className="mt-4 leading-relaxed text-ink-2">
            Claude Code and ChatGPT are part of my daily workflow, speeding up:
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {aiInWorkflow.map((item) => (
              <li key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal flex-1 rounded-3xl border border-accent/40 bg-accent-soft p-6 md:p-8">
          <p className="eyebrow !text-accent">What stays my responsibility</p>
          <ul className="mt-4 space-y-2.5">
            {developerResponsibilities.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-medium">
                <span aria-hidden className="text-accent">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
