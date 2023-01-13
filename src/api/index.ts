import axios from 'axios'

import { AutocompleteResult, Brewery } from '@types'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

type APIProps = {
    method: Method
    url?: string
    data?: object
}

const BreweryAxios = axios.create()

const BreweryAPI = async <T>(props: APIProps) => {
    return BreweryAxios.request<T>({
        baseURL: 'https://api.openbrewerydb.org/',
        ...props,
    })
}

export const getBerweryList = (page: number, perPage: number = 10) => {
    return BreweryAPI<Array<Brewery>>({
        method: 'GET',
        url: `breweries?page=${page}&per_page=${perPage}`,
    })
}

export const getBerweryById = (id: string) => {
    return BreweryAPI<Brewery>({
        method: 'GET',
        url: `breweries/${id}`,
    })
}

export const autocomplete = (text: string) => {
    return BreweryAPI<Array<AutocompleteResult>>({
        method: 'GET',
        url: `breweries/search?query=${text}`,
    })
}

export const searchBreweriesByName = (query: string, page: number, perPage: number = 10) => {
    return BreweryAPI<Array<Brewery>>({
        method: 'GET',
        url: `breweries?by_name=${query}&page=${page}&per_page=${perPage}`,
    })
}
