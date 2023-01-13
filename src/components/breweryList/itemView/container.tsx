import React, { useCallback, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

import { useAppDispatch, useAppSelector } from '@hooks'
import { HomeTabNavigationProps } from '@navigator'
import { addBookMark } from '@store'

import { BreweryItemLayout } from './layout'
import { BreweryItemContainerProps } from './types'

export default function BreweryItemContainer(props: BreweryItemContainerProps): JSX.Element {
    const navigation = useNavigation<HomeTabNavigationProps>()
    const dispatch = useAppDispatch()
    const {
        data: { id, name, street, city, state, country, brewery_type: type },
    } = props

    const isBookmarked = useAppSelector(store => store.bookmark.data.findIndex(item => item.id === id) > -1)

    const address = useMemo(() => `${street || ''} ${city} ${state}\n${country}`.trim(), [street, city, state, country])

    const onBookmarked = useCallback(() => {
        const bookmarked_at = moment().toISOString()
        dispatch(addBookMark({ id, name, address, type, bookmarked_at }))
    }, [dispatch, id, name, type, address])

    const onSelected = useCallback(() => {
        console.log('onBrewerySelected: ', id)
        navigation.navigate('BreweryDetail', { id })
    }, [navigation, id])

    return <BreweryItemLayout {...{ onBookmarked, onSelected, data: { name, address, type }, isBookmarked }} />
}
