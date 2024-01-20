import { dayjs } from "../libs/dayjs";

export function translatePeriod(start: string, end: string) {
  const startDate = dayjs(start);
  const endDate = dayjs(end);

  const isAfterEndDate = dayjs().isAfter(endDate);

  const startPeriod = startDate.format("MMM YYYY");
  const endPeriod = isAfterEndDate ? endDate.format("MMM YYYY") : "atualmente";

  return `${startPeriod} - ${endPeriod}`;
}
