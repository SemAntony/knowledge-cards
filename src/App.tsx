import { AppProvider } from '@/provider'

import { AppRouter } from './router'

export function App() {
  return (
    <AppProvider>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          rowGap: '16px',
        }}
      >
        <AppRouter />
      </div>
    </AppProvider>
  )
}
