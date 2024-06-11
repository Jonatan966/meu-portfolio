export function getRelativeTime(date: string) {
  const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

  const parsedDate = new Date(date);
  const now = new Date();

  const diffTime = parsedDate.getTime() - now.getTime();
  const diffDays = Math.floor(diffTime / ONE_DAY_IN_MS) + 1;

  if (diffDays === 0) {
    return "Hoje";
  }

  return new Intl.RelativeTimeFormat("pt-BR", { style: "short" }).format(
    diffDays,
    "days"
  );
}
