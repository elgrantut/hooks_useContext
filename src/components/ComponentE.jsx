import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <h3 className="text-primary font-weight-light">{`${user} - ${channel}`}</h3>
  )
}

export default ComponentE
