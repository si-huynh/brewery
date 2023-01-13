import { BookMarkBrewery, BreweryType } from '@types'

export interface BookmarkItemContainerProps {
    data: BookMarkBrewery
}

export interface BookmarkItemLayoutProps {
    data: {
        name: string
        type: BreweryType
        address: string
    }
    onUnBookmarked: () => void
    onSelected: () => void
}
