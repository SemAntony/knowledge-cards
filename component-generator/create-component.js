import { createComponent } from './utils/fileOperations.js'
import { logError, logInfo } from './utils/logger.js'

const componentName = process.argv[2]

if (!componentName) {
  logError('Please provide a name for the component')
  process.exit(1)
}
if (componentName.length < 3) {
  logError('Name must be at least 3 characters long')
  process.exit(1)
}

;(async () => {
  try {
    await createComponent(componentName)
    logInfo(`Component ${componentName} created successfully.`)
  } catch (error) {
    logError(`Failed to create component ${componentName}: ${error.message}`)
    process.exit(1)
  }
})()
