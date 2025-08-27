import UseCaseCard from "./use-case-card";

export default function UseCaseWindow({
  window,
  isActive,
  isMuted,
  onToggle,
  buildProfileHref,
  animationDelay,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border-2 border-black/10 bg-white/80 p-6 shadow-lg shadow-black/5 opacity-0 transition motion-safe:animate-[fade-up_0.8s_ease_forwards] ${
        isMuted ? "opacity-80" : ""
      } ${isActive ? "ring-2 ring-emerald-400/70" : ""}`}
      style={animationDelay ? { animationDelay } : undefined}
    >
      <div className="flex items-center justify-between border-b border-black/10 pb-3">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: window.sticker }}
          />
          <span className="h-2 w-2 rounded-full bg-black/10" />
          <span className="h-2 w-2 rounded-full bg-black/10" />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggle(window.title)}
            className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 ${
              isActive
                ? "border-emerald-200/80 bg-emerald-100/70 text-emerald-700"
                : "border-black/10 bg-white/70 text-slate-500"
            }`}
          >
            {isActive ? "Ativo" : "Ativar"}
          </button>
          <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
            {window.tag}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {window.title}
          </h3>
          <p className="text-xs text-slate-500">{window.subtitle}</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          {window.cases.length} etapas
        </span>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {window.cases.map((item, index) => (
          <UseCaseCard
            key={`${window.title}-${item.title}`}
            step={String(index + 1).padStart(2, "0")}
            title={item.title}
            meta={item.meta}
            tag={item.tag}
            sticker={window.sticker}
            href={buildProfileHref(item.href, window.title)}
            variant="expanded"
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -bottom-12 h-32 w-32 rounded-full blur-3xl"
        style={{ backgroundColor: window.sticker, opacity: 0.3 }}
      />
    </div>
  );
}
