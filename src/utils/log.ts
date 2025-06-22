export const log = (msg: string) => {
  // biome-ignore lint/suspicious/noConsole: it is allowed here for logging
  console.log(`${new Date().toISOString().substring(0, 19)} ${msg}`);
};
