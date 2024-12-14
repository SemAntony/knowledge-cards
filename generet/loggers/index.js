import { createLogger, format, transports } from 'winston'

// Убедитесь, что уровни правильно настроены
const levels = {
  debug: 4,
  error: 0,
  info: 2,
  silly: 5,
  verbose: 3,
  warn: 1,
}

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS A',
    }),
    format.colorize(),
    format.simple(),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`
    })
  ),
  level: process.env.LOG_LEVEL || 'info', // Установите уровень по умолчанию
  levels,
  transports: [
    new transports.Console(),
    new transports.File({ filename: './logger/app.log' }),
    new transports.File({
      filename: './logger/app-error.log',
      format: format.combine(
        format.errors({ stack: true }),
        format.printf(
          ({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`
        )
      ),
      level: 'error',
    }),
    new transports.File({
      filename: './logger/app-info.log',
      level: 'info',
    }),
    new transports.File({
      filename: './logger/app-warn.log',
      level: 'warn',
    }),
  ],
})

export const logInfo = message => logger.info(message)
export const logError = message => logger.error(message)
export const logWarn = message => logger.warn(message)
