import React, { useCallback } from 'react'
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'

import { BookMarkBrewery } from '@types'

import { BookmarkItem } from './itemView'
import styles from './styles'
import { BookmarkListLayoutProps } from './types'

export default function BookmarkListLayout(props: BookmarkListLayoutProps): JSX.Element {
    const { data } = props

    const renderItem = useCallback((info: ListRenderItemInfo<BookMarkBrewery>) => {
        return <BookmarkItem data={info.item} />
    }, [])

    return (
        <FlashList
            contentContainerStyle={styles.container}
            data={data}
            renderItem={renderItem}
            estimatedItemSize={1000}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
        />
    )
}
