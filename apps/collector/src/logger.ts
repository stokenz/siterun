import pino, { Logger } from "pino";

export function getLogger(): Logger {
  const logger = pino({
    transport:
      process.env.NODE_ENV === "development"
        ? {
            target: "pino-pretty",
            options: {
              colorize: true,
            },
          }
        : {
            target: "pino-logfmt",
            options: {
              flattenNestedObjects: true,
            },
          },
  });

  return logger;
}
