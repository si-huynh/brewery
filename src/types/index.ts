export type BreweryType =
    | 'micro'
    | 'regional'
    | 'brewpub'
    | 'large'
    | 'planning'
    | 'bar'
    | 'contract'
    | 'proprieter'
    | 'closed'

export interface Brewery {
    id: string
    name: string
    brewery_type: BreweryType
    street?: string
    address_2?: string
    address_3?: string
    city: string
    state: string
    county_province?: string
    postal_code: string
    country: string
    longitude: string
    latitude: string
    phone: string
    website_url?: string
    updated_at: string
    created_at: string
}

export interface BookMarkBrewery {
    id: string
    name: string
    type: BreweryType
    address: string
    bookmarked_at: string
}

export interface AutocompleteResult {
    id: string
    name: string
}
