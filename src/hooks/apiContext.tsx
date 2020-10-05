import React, { createContext, useContext } from 'react'

import Animaisapi from '../api/animaisapi.json'
import { IAnimais } from '../interfaces/IAnimais'

interface IApiData {
  dados: IAnimais[]
}

const ApiContext = createContext<IApiData>({} as IApiData)

function useApi(): IApiData {
  const context = useContext(ApiContext)
  if (!ApiContext) {
    throw new Error('ApiContext must be used inside a Context')
  }
  return context
}

const ApiProvider: React.FC = ({ children }) => {
  return (
    <ApiContext.Provider value={{
      dados: Animaisapi
    }}>
      {children}
    </ApiContext.Provider>
  )
}

export { useApi, ApiProvider }