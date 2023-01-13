import React, { useCallback, useContext } from 'react'

import { SearchContext } from '@components'

import SearchBarLayout from './layout'

export default function SearchBarContainer(): JSX.Element {
    const {
        searchFocusedState: [, setSearchFocused],
        searchTextState: [searchText, setSearchText],
    } = useContext(SearchContext)

    const onTextInputFocusChanged = useCallback((isFocused: boolean) => setSearchFocused(isFocused), [setSearchFocused])
    const onTextInputChanged = useCallback(
        (text: string) => {
            setSearchText(text)
        },
        [setSearchText],
    )

    return <SearchBarLayout {...{ onTextInputFocusChanged, onTextInputChanged, searchText }} />
}
