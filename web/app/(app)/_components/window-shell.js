export default function WindowShell({
  eyebrow,
  title,
  subtitle,
  badge,
  actions,
  children,
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
      <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white/80 shadow-lg shadow-black/5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#f3c4ad]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f6e2b9]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#cfe1d3]" />
            </div>
            <div>
              {eyebrow ? (
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="text-2xl font-semibold text-slate-900 font-[var(--font-display)]">
                {title}
              </h1>
              {subtitle ? (
                <p className="text-sm text-slate-500">{subtitle}</p>
              ) : null}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {badge ? (
              <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {badge}
              </span>
            ) : null}
            {actions}
          </div>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
