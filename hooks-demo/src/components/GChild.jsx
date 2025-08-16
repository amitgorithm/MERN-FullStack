import React from 'react'
import {useContext} from 'react'
import {UserContext} from './UserContext'

const GChild = () => {

  const user = useContext(UserContext)
  return (
    <div>
      
      <h1> I am Grand Child {user} </h1>
      
      </div>
  )
}

export default GChild

// consume the context 