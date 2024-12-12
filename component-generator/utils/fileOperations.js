import fs from 'fs/promises'
import path from 'path'

import { componentTemplate } from '../templates/component.js'
import { indexTemplate } from '../templates/index.js'
import { storiesTemplate } from '../templates/stories.js'
import { stylesTemplate } from '../templates/styles.js'
import { formatAndLintFile } from './formatter.js'
import { logError, logInfo } from './logger.js'

export const createComponent = async componentName => {
  const componentDir = `src/components/ui/${componentName}`

  try {
    await fs.mkdir(componentDir, { recursive: true })
    logInfo(`Directory created at ${componentDir}`)

    const files = [
      {
        content: componentTemplate(componentName),
        name: `${componentName}.tsx`,
        parser: 'babel-ts',
      },
      {
        content: indexTemplate(componentName),
        name: 'index.ts',
        parser: 'typescript',
      },
      {
        content: storiesTemplate(componentName),
        name: `${componentName}.stories.tsx`,
        parser: 'babel-ts',
      },
      {
        content: stylesTemplate(),
        name: `${componentName}.module.scss`,
        parser: 'scss',
      },
    ]

    for (const file of files) {
      const filePath = path.join(componentDir, file.name)

      await fs.writeFile(filePath, file.content)
      logInfo(`File created at ${filePath}`)
      await formatAndLintFile(filePath, file.parser)
    }

    const mainIndexPath = 'src/components/ui/index.ts'
    const exportStatement = `export * from './${componentName}';`

    const mainIndexContent = await fs.readFile(mainIndexPath, 'utf8')

    if (!mainIndexContent.includes(exportStatement)) {
      await fs.appendFile(mainIndexPath, `\n${exportStatement}`)
      logInfo(`Main index updated with ${componentName}`)
      await formatAndLintFile(mainIndexPath, 'typescript')
    }
  } catch (error) {
    logError(`Failed to create component: ${error.message}`)
  }
}
