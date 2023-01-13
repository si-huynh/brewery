import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { useAppDispatch } from '@hooks'
import { HomeTabNavigationProps } from '@navigator'
import { removeBookMark } from '@store'

import { BookmarkItemLayout } from './layout'
import { BookmarkItemContainerProps } from './types'

export default function BookmarkItemContainer(props: BookmarkItemContainerProps): JSX.Element {
    const navigation = useNavigation<HomeTabNavigationProps>()
    const dispatch = useAppDispatch()
    const {
        data: { id, name, type, address, bookmarked_at },
    } = props

    const onUnBookmarked = useCallback(() => {
        dispatch(removeBookMark(id))
    }, [dispatch, id])

    const onSelected = useCallback(() => {
        console.log('onBrewerySelected: ', id, bookmarked_at)
        navigation.navigate('BreweryDetail', { id })
    }, [navigation, id, bookmarked_at])

    return <BookmarkItemLayout {...{ onUnBookmarked, onSelected, data: { name, address, type } }} />
}
