import fs from 'fs'
import fsPromises from 'node:fs/promises'

import { capitalizeFirstLetter } from './capitalizeFirstLetter.js'
import { formatAndLint } from './formatAndLint.js'
import { logInfo } from './loggers/index.js'

export async function createComponent(pathName, name) {
  const dirPath = `src/components/ui/${name}`
  const capitalizedName = capitalizeFirstLetter(name)

  const paths = {
    component: `${dirPath}/${name}.tsx`,
    index: `${dirPath}/index.ts`,
    story: `${dirPath}/${name}.stories.tsx`,
    style: `${dirPath}/${name}.module.scss`,
  }

  const contents = {
    component: `
      import React from 'react';
      import s from './${name}.module.scss';

      export type ${capitalizedName}Props = {};

      export const ${capitalizedName}: React.FC<${capitalizedName}Props> = ({}) => {
        return <div className={s.container}>${capitalizedName}</div>;
      };
    `,
    index: `export * from './${name}';`,
    story: `
      import type { Meta, StoryObj } from '@storybook/react';
      import { ${capitalizedName} } from './${name}';

      const meta = {
        component: ${capitalizedName},
        tags: ['autodocs'],
        title: '${pathName}/${capitalizedName}'
      } satisfies Meta<typeof ${capitalizedName}>;

      export default meta;
      type Story = StoryObj<typeof meta>;

      export const Default: Story = { args: {} };
    `,
    style: `.container {}`,
  }

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
    logInfo(`Directory created at ${dirPath}`)

    // Создание всех файлов перед форматированием и линтингом
    for (const [key, filePath] of Object.entries(paths)) {
      await fsPromises.writeFile(filePath, contents[key.trim()], 'utf8')
      logInfo(`File created at ${filePath}`)
    }

    // Форматирование и линтинг всех файлов
    for (const filePath of Object.values(paths)) {
      await formatAndLint(filePath)
    }

    logInfo('Component created successfully')
  } else {
    logInfo('Components are already in place')
  }
}
