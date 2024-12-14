import { createLogger, format, transports } from 'winston'

export const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`
    })
  ),
  level: 'info',
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'loggers/app.log' }),
  ],
})
