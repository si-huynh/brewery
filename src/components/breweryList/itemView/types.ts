import { Brewery, BreweryType } from '@types'

export interface BreweryItemContainerProps {
    data: Brewery
}

export interface BreweryItemLayoutProps {
    data: {
        name: string
        type: BreweryType
        address: string
    }
    onBookmarked: () => void
    onSelected: () => void
    isBookmarked: boolean
}
