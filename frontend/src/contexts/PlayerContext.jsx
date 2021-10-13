import React, { createContext, useState } from 'react'

export const PlayerContext = createContext()


function PlayerContextProvider(props) {
  const [context, setContext] = useState({
    videoId: null,
    player: null,
    song: null,
    artist: null
  })

  function updateContext(values) {
    setContext({
      ...context,
      ...values
    })
  }



  return (
    <PlayerContext.Provider value={[context, updateContext, setContext]}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider
