import React from 'react'
import ComponentC from './components/ComponentC'
import './styles.css'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export default function App() {
  return (
    <div className="container m-5">
      <h1 className="text-primary display-4">Hello World</h1>
      <UserContext.Provider value={'Matias'}>
        <ChannelContext.Provider value={'Front End Master.'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
