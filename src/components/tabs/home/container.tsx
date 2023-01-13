import React, { useState } from 'react'

import HomeLayout from './layout'
import { SearchContext } from './types'

export default function HomeContainer(): JSX.Element {
    const searchFocusedState = useState(false)
    const searchTextState = useState<string>()
    return (
        <SearchContext.Provider value={{ searchFocusedState, searchTextState }}>
            <HomeLayout />
        </SearchContext.Provider>
    )
}
