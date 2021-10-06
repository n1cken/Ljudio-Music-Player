import React, { createContext, useState } from 'react'

// export reference to connect with this context
export const SearchContext = createContext()

function SearchContextProvider(props) {
    const [ context, setContext ] = useState({
        activeSearch: null,
    })


    // use spread to keep old data and only
    // replace the once who match
    function updateSearch(values) {
        setContext({
            ...context,
            ...values
        })
    }

    return (
        <SearchContext.Provider value={[context, updateSearch]}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider
