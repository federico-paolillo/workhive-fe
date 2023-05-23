export function toYyyymmdd(date: Date) {
  return date.toISOString();
}

export function getHours(date: Date): string {
  return date.toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getDay(date: Date): string {
  return date.toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
    day: "2-digit",
    month: "2-digit",
  });
}

export function toRelativeDate(date: Date): string {
  const today = new Date();

  if (
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return `Today from ${getHours(date)}`;
  } else {
    return `${getDay(date)} from ${getHours(date)}`;
  }
}
