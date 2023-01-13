import { Brewery } from '@types'

export interface BreweryListContainerProps {
    data: Array<Brewery>
}

export interface BreweryListLayoutProps {
    data: Array<Brewery>
    isLoadingMore: boolean
    onEndReached: () => void
}
