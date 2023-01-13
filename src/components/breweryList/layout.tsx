import React, { useCallback } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'

import { Brewery } from '@types'

import { BreweryItem } from './itemView'
import styles from './styles'
import { BreweryListLayoutProps } from './types'

export default function BreweryListLayout(props: BreweryListLayoutProps): JSX.Element {
    const { data, isLoadingMore, onEndReached } = props

    const renderItem = useCallback((info: ListRenderItemInfo<Brewery>) => {
        return <BreweryItem data={info.item} />
    }, [])

    const ListFooterComponent = useCallback(() => {
        return isLoadingMore ? (
            <View style={styles.listFooter}>
                <ActivityIndicator />
            </View>
        ) : null
    }, [isLoadingMore])

    return (
        <FlashList
            contentContainerStyle={styles.list}
            data={data}
            renderItem={renderItem}
            estimatedItemSize={1000}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={ListFooterComponent}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
        />
    )
}
