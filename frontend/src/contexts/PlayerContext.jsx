import React, { createContext, useState } from 'react'

export const PlayerContext = createContext()


function PlayerContextProvider(props) {
  const [context, setContext] = useState({
    videoId: null,
  })

  function updateContext(values) {
    setContext(
      ...context,
      ...values)
  }



  return (
    <PlayerContext.Provider value={[context, setContext]}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider
