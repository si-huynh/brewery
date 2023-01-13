import { Brewery } from '@types'

export interface BreweryDetailLayoutProps {
    data: Brewery
    isBookmarked: boolean
    onSaveButtonPressed: () => void
    onCallButtonPressed: () => void
    onURLButtonPressed: () => void
}
