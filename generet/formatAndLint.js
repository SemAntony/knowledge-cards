import { exec } from 'child_process'
import util from 'util'

import { logger } from '../loggers/index.js'

const execPromise = util.promisify(exec)

export async function formatAndLint(filePath) {
  try {
    const prettierResult = await execPromise(`npx prettier --write ${filePath}`)

    if (prettierResult.stderr) {
      logger.error(
        `Error formatting ${filePath} with Prettier: ${prettierResult.stderr}`
      )
    } else {
      logger.info(
        `Formatted ${filePath} with Prettier: ${prettierResult.stdout}`
      )
    }

    if (!filePath.endsWith('.scss')) {
      const eslintResult = await execPromise(`npx eslint --fix ${filePath}`)

      if (eslintResult.stderr) {
        logger.error(
          `Error linting ${filePath} with ESLint: ${eslintResult.stderr}`
        )
      } else {
        logger.info(`Linted ${filePath} with ESLint: ${eslintResult.stdout}`)
      }
    }
  } catch (error) {
    logger.error(`Failed to format and lint ${filePath}: ${error.message}`)
    if (error.stdout) {
      logger.error(`stdout: ${error.stdout}`)
    }
    if (error.stderr) {
      logger.error(`stderr: ${error.stderr}`)
    }
  }
}
