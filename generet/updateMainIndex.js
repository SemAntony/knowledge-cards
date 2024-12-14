import fsPromises from 'node:fs/promises'

import { formatAndLint } from './formatAndLint.js'
import { logError, logInfo } from './loggers/index.js'

export async function updateMainIndex(name) {
  const mainIndexPath = 'src/components/ui/index.ts'
  const newExport = `export * from './${name}';`

  try {
    const mainIndexContent = await fsPromises.readFile(mainIndexPath, 'utf8')

    if (!mainIndexContent.includes(newExport)) {
      await fsPromises.appendFile(mainIndexPath, `\n${newExport}`)
      logInfo(`Main index updated with ${name}`)
      await formatAndLint(mainIndexPath)
    } else {
      logInfo(`Main index already contains export for ${name}`)
    }
  } catch (error) {
    logError(`Error updating main index: ${error.message}`)
  }
}
