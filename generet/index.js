import { createComponent } from './createComponent.js'
import { logError, logInfo, logWarn } from './loggers/index.js'
import { updateMainIndex } from './updateMainIndex.js'

if (process.argv.length < 4) {
  logError('Usage: node script.js <componentName> <pathNameForStorybook>')
  logWarn('<componentName> - Name of the component (at least 3 characters)')
  logInfo('<pathNameForStorybook> - Path name for the storybook')
  process.exit(1)
}

const args = Object.freeze({
  name: process.argv[3],
  path: process.argv[2],
})

if (!args.path) {
  logError('Please provide a path name for the storybook')
  process.exit(1)
}
if (!args.name) {
  logError('Please provide a name for the component')
  process.exit(1)
}
if (args.name.length < 3) {
  logError('Name must be at least 3 characters long')
  process.exit(1)
}

await createComponent(args.path, args.name)
await updateMainIndex(args.name)
