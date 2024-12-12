import { config, createLogger, format, transports } from 'winston' // Фильтры для разных уровней логирования

// Фильтры для разных уровней логирования
const errorFilter = format(info => (info.level === 'error' ? info : false))()
const infoFilter = format(info => (info.level === 'info' ? info : false))()
const warnFilter = format(info => (info.level === 'warn' ? info : false))()

const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.simple(),
    format.cli(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS A',
    }),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`
    })
  ),
  level: process.env.LOG_LEVEL || 'info' || 'error' || 'warn',
  levels: config.syslog.levels,
  transports: [
    new transports.Console(),
    new transports.File({ filename: './logger/app.log' }),
    new transports.File({
      filename: './logger/app-error.log',
      format: format.combine(errorFilter),
      level: 'error',
    }),
    new transports.File({
      filename: './logger/app-info.log',
      format: format.combine(infoFilter),
      level: 'info',
    }),
    new transports.File({
      filename: './logger/app-warn.log',
      format: format.combine(warnFilter),
      level: 'warn',
    }),
  ],
})

export const logInfo = message => logger.info(message)
export const logError = message => logger.error(message)
export const logWarn = message => logger.warn(message)
