import React from 'react'

import { ApiProvider } from './apiContext'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ApiProvider>
      {children}
    </ApiProvider>
  )
}

export default AppProvider