/** biome-ignore-all lint/suspicious/noConsole: ILogger implementation */
// biome-ignore lint/suspicious/noExplicitAny: This really must be anything
type TAnything = any;

interface ILogger {
  info: (message: string) => void;
  debug: (...data: TAnything[]) => void;
  error: (...data: TAnything[]) => void;
}

class TLogger implements ILogger {
  public info(message: string): void {
    console.log(message);
  }

  public debug(...data: TAnything[]): void {
    console.log(...data);
  }

  public error(...data: TAnything[]): void {
    console.error(...data);
  }
}

export const logger: ILogger = new TLogger();
