import { AutocompleteResult } from '@types'

export interface AutocompleteLayoutProps {
    data: Array<AutocompleteResult>
    onItemSelected: (text: string) => void
}

export interface AutocompleteContainerProps {
    data: Array<AutocompleteResult>
    onItemSelected: (text: string) => void
}
