export const componentTemplate = componentName => `
import React from 'react';
import s from './${componentName}.module.scss';

export type ${componentName}Props = {};

export const ${componentName}: React.FC<${componentName}Props> = ({}) => {
  return <div className={s.container}>${componentName}</div>;
};
`
