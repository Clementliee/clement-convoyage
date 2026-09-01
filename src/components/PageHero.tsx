export function PageHero({
  kicker,
  title,
  accent,
  text,
  image,
  alt,
}: {
  kicker?: string;
  title: string;
  accent?: string;
  text?: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {image ? (
        <div className="relative h-64 w-full sm:h-80">
          <img src={image} alt={alt ?? ""} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy/45" />
        </div>
      ) : null}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {kicker ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-coral">{kicker}</p>
        ) : null}
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          {title}
          {accent ? (
            <>
              {" "}
              <span className="text-coral">{accent}</span>
            </>
          ) : null}
        </h1>
        {text ? <p className="mt-4 max-w-2xl text-lg text-muted">{text}</p> : null}
      </div>
    </section>
  );
}
