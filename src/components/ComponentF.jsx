import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <h2 className="text-primary font-weight-light">
                    User context value
                    <strong className="font-weight-bold">{` ${user}`}</strong>,
                    channel context value
                    <strong className="font-weight-bold">{` ${channel}`}</strong>
                  </h2>
                )
              }}
            </ChannelContext.Consumer>
          )
        }}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
