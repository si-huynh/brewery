import React, { useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Colors, Icon } from '@resources'

import styles from './styles'
import { BookmarkItemLayoutProps } from './types'

export function BookmarkItemLayout(props: BookmarkItemLayoutProps): JSX.Element {
    const {
        data: { name, address, type },
        onSelected,
        onUnBookmarked,
    } = props

    const onPress = useCallback(() => onSelected(), [onSelected])
    const onBookmarkPressed = useCallback(() => onUnBookmarked(), [onUnBookmarked])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.leftContent}>
                <Text style={styles.type}>{type}</Text>
                <Text numberOfLines={1} ellipsizeMode="middle" style={styles.title}>
                    {name}
                </Text>
                <View style={styles.addressRow}>
                    <Icon name="location" size={12} color={Colors.tomato} />
                    <Text style={styles.addressText}>{address}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.bookmarkButton} onPress={onBookmarkPressed}>
                <Icon name="bookmark" size={14} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
