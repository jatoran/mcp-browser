export type EventHandler = (data: any) => void;

export enum SystemEvent {
  ERROR = 'error',
  READY = 'ready'
}

