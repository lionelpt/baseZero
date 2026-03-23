import Link from "next/link";

const variantMap = {
  compact: {
    container: "p-3",
    title: "text-sm",
    meta: "text-[11px]",
  },
  expanded: {
    container: "p-4",
    title: "text-sm",
    meta: "text-xs",
  },
};

export default function UseCaseCard({
  step,
  title,
  meta,
  tag,
  href,
  sticker,
  variant = "expanded",
}) {
  const styles = variantMap[variant] || variantMap.expanded;
  const Wrapper = href ? Link : "div";
  const wrapperProps = href
    ? { href, "aria-label": title }
    : { role: "group" };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex h-full flex-col rounded-2xl border border-black/5 bg-white/90 ${styles.container} text-sm transition hover:-translate-y-0.5 hover:bg-white`}
    >
      <div className="flex items-center justify-between">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-xl text-[11px] font-semibold text-slate-800"
          style={{ backgroundColor: sticker }}
        >
          {step}
        </span>
        <span className="rounded-full border border-black/10 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          {tag}
        </span>
      </div>
      <p className={`mt-3 font-medium text-slate-700 ${styles.title}`}>
        {title}
      </p>
      <p className={`mt-1 text-slate-500 ${styles.meta}`}>{meta}</p>
    </Wrapper>
  );
}
