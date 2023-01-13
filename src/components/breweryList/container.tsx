import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import { getBerweryList, searchBreweriesByName } from '@api'
import { SearchContext } from '@components'
import { Brewery } from '@types'

import BreweryListLayout from './layout'

export default function BreweryListContainer(): JSX.Element {
    const {
        searchFocusedState: [isSearchFocused],
        searchTextState: [searchText],
    } = useContext(SearchContext)

    const [currentPage, setCurrentPage] = useState(0)
    const [breweryListData, setBreweryListData] = useState<Array<Brewery>>([])

    const [searchResultData, setSearchResultData] = useState<Array<Brewery>>([])

    const [isLoadingMore, setLoadingMore] = useState(false)
    const fetchBreweryList = useCallback(() => {
        const nextPage = currentPage + 1
        if (isLoadingMore) {
            return
        }
        setLoadingMore(true)

        setTimeout(() => {
            getBerweryList(nextPage)
                .then(response => {
                    if (response.status === 200 && response.data) {
                        setCurrentPage(nextPage)
                        setBreweryListData(value => value.concat(response.data))
                    }
                })
                .finally(() => setLoadingMore(false))
        }, 1000)
    }, [currentPage, isLoadingMore])

    const searchByName = useCallback((query: string) => {
        searchBreweriesByName(query, 0)
            .then(response => {
                if (response.status === 200 && response.data) {
                    setSearchResultData(response.data)
                }
            })
            .catch(e => console.error(e))
    }, [])

    const onLoadingMore = useCallback(() => {
        if (isSearchFocused || searchText) {
            return
        }
        fetchBreweryList()
    }, [isSearchFocused, fetchBreweryList, searchText])

    const searchTimeoutRef = useRef<NodeJS.Timeout>()
    useEffect(() => {
        if (searchText && searchTimeoutRef.current === undefined) {
            searchTimeoutRef.current = setTimeout(() => searchByName(searchText), 500)
        } else {
            clearTimeout(searchTimeoutRef.current)
            searchTimeoutRef.current = undefined
        }

        return () => {
            clearTimeout(searchTimeoutRef.current)
            searchTimeoutRef.current = undefined
        }
    }, [searchText, searchByName])

    useEffect(() => {
        if (searchText?.length === 0 && !isSearchFocused) {
            setSearchResultData([])
        }
    }, [searchText, isSearchFocused])

    return (
        <BreweryListLayout
            data={isSearchFocused || searchText ? searchResultData : breweryListData}
            isLoadingMore={isLoadingMore}
            onEndReached={onLoadingMore}
        />
    )
}
