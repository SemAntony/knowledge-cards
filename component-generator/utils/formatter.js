import { exec } from 'child_process'
import fs from 'fs/promises'

import prettier from 'prettier'

import { prettierConfig } from '../config/prettier.config.js'
import { logError, logInfo } from './logger.js'

export const formatAndLintFile = async (filePath, parser) => {
  try {
    const content = await fs.readFile(filePath, 'utf8')
    const formatted = prettier.format(content, { ...prettierConfig, parser })

    await fs.writeFile(filePath, await formatted)
    logInfo(`Formatted ${filePath} with Prettier`)

    exec(`npx eslint --fix ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        logError(`Failed to format and lint ${filePath}: ${stderr}`)

        return
      }
      logInfo(`Linted ${filePath} with ESLint`)
    })
  } catch (error) {
    logError(`Error formatting and linting file: ${error.message}`)
  }
}
