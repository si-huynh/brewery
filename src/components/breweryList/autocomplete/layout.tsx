import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'

import { AutocompleteResult } from '@types'

import { styles } from './styles'
import { AutocompleteLayoutProps } from './types'

export default function AutocompleteLayout(props: AutocompleteLayoutProps): JSX.Element {
    const { data, onItemSelected } = props

    const renderItem = (info: ListRenderItemInfo<AutocompleteResult>) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => onItemSelected(info.item.name)}>
                <Text style={styles.itemText}>{info.item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlashList
                data={data}
                renderItem={renderItem}
                estimatedItemSize={10}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.divider} />}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
            />
        </View>
    )
}
