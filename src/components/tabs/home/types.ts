import { createContext, Dispatch, SetStateAction } from 'react'

import { Brewery } from '@types'

export interface HomeLayoutProps {
    data: Array<Brewery>
}

export interface ISearchContext {
    searchFocusedState: [boolean, Dispatch<SetStateAction<boolean>>]
    searchTextState: [string | undefined, Dispatch<SetStateAction<string | undefined>>]
}

export const SearchContext = createContext<ISearchContext>({
    searchFocusedState: [false, (): void => {}],
    searchTextState: ['', (): void => {}],
})
