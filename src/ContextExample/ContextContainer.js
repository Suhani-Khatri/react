import React from 'react'
import { UserContextProvider, useUser } from './useUser'

const Button = () => {
    const {state,rest} = useUser()
    console.log(rest)
    
    return <button>{state.name}</button>
}

const ContextContainer = () => {
  return (
    <UserContextProvider value={{name: 'shubham'}}>
      <div>
        ContextContainer
        <Button/>
      </div>
    </UserContextProvider>
  )
}

export default ContextContainer