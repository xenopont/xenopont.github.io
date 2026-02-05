/** biome-ignore-all lint/suspicious/noConsole: ILogger implementation */
type TDebuggable = string | number | object | undefined | unknown;

interface ILogger {
  info: (message: string) => void;
  debug: (...data: TDebuggable[]) => void;
}

export const logger: ILogger = {
  info: (message: string) => console.log(message),
  debug: (...data: TDebuggable[]) => console.log(data),
};
