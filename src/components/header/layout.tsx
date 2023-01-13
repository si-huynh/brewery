import React, { useCallback } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import { Colors, Icon } from '@resources'

import styles, { DEFAULT_HEADER_BAR_HEIGHT } from './styles'

export default function AppHeaderLayout(props: BottomTabHeaderProps): JSX.Element {
    const { route, navigation } = props
    const { top } = useSafeAreaInsets()

    const onSearchButtonPressed = useCallback(() => {
        navigation.navigate('Search')
    }, [navigation])
    return (
        <View style={[styles.container, { height: top + DEFAULT_HEADER_BAR_HEIGHT, paddingTop: top }]}>
            <Text style={styles.title}>{route.name}</Text>
            <TouchableOpacity onPress={onSearchButtonPressed}>
                <Icon name="magnifyingglass" size={24} color={Colors.white} />
            </TouchableOpacity>
        </View>
    )
}
