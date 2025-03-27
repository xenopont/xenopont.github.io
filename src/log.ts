export const log = (msg: string) => {
  // biome-ignore lint/suspicious/noConsole: it is allowed here for logging
  console.log(`${Date()}: ${msg}`);
};
