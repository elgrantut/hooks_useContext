import React from 'react'
import { UserContext } from '../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <h2 className="text-primary font-weight-light">
              User context value{' '}
              <strong className="font-weight-bold">{user}</strong>
            </h2>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
