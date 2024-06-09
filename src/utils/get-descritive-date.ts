export function getDescritiveDate(date: string) {
  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(parsedDate);
}
