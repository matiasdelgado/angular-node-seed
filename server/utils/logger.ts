import * as winston from "winston";
const { colorize, timestamp, splat, simple, printf } = winston.format;

const myFormat = printf(info => {
  const label = info.label ? `[${info.label}] ` : "";
  return `${info.timestamp} ${label}${info.level}: ${info.message}`;
});

export default winston.createLogger({
  format: winston.format.combine(
    colorize(),
    timestamp(),
    splat(),
    simple(),
    myFormat
  ),
  transports: [new winston.transports.Console()]
});
