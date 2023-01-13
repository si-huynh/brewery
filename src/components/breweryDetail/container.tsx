import React, { useCallback, useState } from 'react'
import { Linking } from 'react-native'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import moment from 'moment'

import { getBerweryById } from '@api'
import { useAppDispatch, useAppSelector } from '@hooks'
import { BreweryDetailRouteProps } from '@navigator'
import { addBookMark, removeBookMark } from '@store'
import { Brewery } from '@types'

import BreweryDetailLayout from './layout'

export default function BreweryDetailContainer(): JSX.Element | null {
    const {
        params: { id },
    } = useRoute<BreweryDetailRouteProps>()

    const [data, setData] = useState<Brewery>()

    const isBookmarked = useAppSelector(store => store.bookmark.data.findIndex(item => item.id === id) > -1)

    useFocusEffect(
        useCallback(() => {
            getBerweryById(id).then(response => {
                if (response.status === 200 && response.data) {
                    setData(response.data)
                }
            })
        }, [id]),
    )

    const dispatch = useAppDispatch()
    const onSaveButtonPressed = useCallback(() => {
        if (isBookmarked) {
            dispatch(removeBookMark(id))
        } else if (data) {
            const bookmarked_at = moment().toISOString()
            const { name, street, city, state, country, brewery_type: type } = data
            const address = `${street || ''} ${city} ${state} - ${country}`.trim()
            dispatch(addBookMark({ id, name, address, type, bookmarked_at }))
        }
    }, [dispatch, id, data, isBookmarked])

    const onCallButtonPressed = useCallback(() => {
        if (data && data.phone) {
            Linking.openURL(`tel:${data.phone}`)
        }
    }, [data])

    const onURLButtonPressed = useCallback(() => {
        console.log(data?.website_url)
        if (data && data.website_url) {
            Linking.openURL(data.website_url)
        }
    }, [data])

    return data ? (
        <BreweryDetailLayout
            {...{ data, isBookmarked, onSaveButtonPressed, onCallButtonPressed, onURLButtonPressed }}
        />
    ) : null
}
