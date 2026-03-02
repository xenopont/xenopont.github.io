/** biome-ignore-all lint/suspicious/noConsole: ILogger implementation */
// biome-ignore lint/suspicious/noExplicitAny: This really must be anything
type TAnything = any;

interface ILogger {
  info: (message: string) => void;
  debug: (...data: TAnything[]) => void;
  error: (...data: TAnything[]) => void;
  time: (label: string) => void;
  timeEnd: (label: string) => void;
}

class TLogger implements ILogger {
  public error(...data: TAnything[]): void {
    console.error(...data);
  }

  public debug(...data: TAnything[]): void {
    console.log(...data);
  }

  public info(message: string): void {
    console.log(message);
  }

  public time(label: string): void {
    console.time(label);
  }
  public timeEnd(label: string): void {
    console.timeEnd(label);
  }
}

export const logger: ILogger = new TLogger();
