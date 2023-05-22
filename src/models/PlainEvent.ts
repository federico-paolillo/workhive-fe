export interface PlainEvent {
  id: string;
  startDateTime: number;
  endDateTime: number;
  location: string;
  eventType: number;
  description: string;
  maxGuest: number;
}

export enum EventType {
  None = 0,
  Work = 1,
  Fun = 2,
  Online = 4,
  Babysitting = 8,
  WorkAndFun = Work | Fun
}


