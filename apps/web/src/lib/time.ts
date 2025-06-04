import dayjs from "dayjs";

export function getDiff(start: string, end: string) {
  const hours = dayjs(end).diff(dayjs(start), "hours");
  const minutes = dayjs(end).diff(dayjs(start), "minutes");

  if (hours > 0) {
    if (minutes % 60 === 0) {
      return `${hours}h`;
    }

    return `${hours}h ${minutes % 60}m`;
  }

  return `${minutes}m`;
}
