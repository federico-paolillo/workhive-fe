export function toYyyymmdd(date: Date) {
  return date.toLocaleDateString("en-CA");
}

export function getHours(date: Date): string {
  return date.toLocaleString('en-US', {
    timeZone: 'Europe/Berlin',
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function getDay(date: Date): string {
  return date.toLocaleString('en-US', {
    timeZone: 'Europe/Berlin',
    day: "2-digit",
    month: "2-digit",
  });
}


