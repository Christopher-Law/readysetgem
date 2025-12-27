export const homeClasses = {
  container: "mx-auto w-full max-w-5xl px-5",

  h2: "text-3xl font-bold text-amber-950",
  lead: "mt-3 text-lg text-amber-900/80",

  navLink: "px-3 py-2 text-sm font-medium text-amber-900/80 hover:bg-amber-100/60",

  btnPrimary:
    "inline-flex items-center justify-center border-2 border-amber-700 bg-amber-600 px-6 py-3 text-base font-bold text-white hover:bg-amber-700",
  btnPrimaryHeader:
    "ml-1 border-2 border-amber-700 bg-amber-600 px-4 py-2 text-sm font-bold text-white hover:bg-amber-700",
  btnPrimaryHeaderMobile:
    "border-2 border-amber-700 bg-amber-600 px-3 py-2 text-sm font-bold text-white hover:bg-amber-700",
  btnSecondary:
    "inline-flex items-center justify-center border-2 border-amber-300 bg-amber-50 px-6 py-3 text-base font-semibold text-amber-900 hover:bg-amber-100",

  card: "paper-card",
  cardElevated: "paper-card-elevated",
  panelP4: "paper-panel p-4",

  bulletItem: "flex items-start gap-2",
  dotAmber: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600",
  dotAmberDark: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-800",

  detailsSummary: "cursor-pointer list-none text-lg font-bold text-amber-950",

  stepBadge:
    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-amber-600 bg-amber-50 text-sm font-bold text-amber-900",
} as const;

export const homeDerivedClasses = {
  cardP6: `${homeClasses.card} p-6`,
  heroInner: "",
  detailsCard: `${homeClasses.card} group p-6`,
} as const;

