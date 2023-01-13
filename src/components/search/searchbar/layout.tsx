import React, { useCallback } from 'react'
import { Image, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Colors, Images } from '@resources'

import { styles } from './styles'
import { SearchBarLayoutProps } from './types'

export default function SearchBarLayout(props: SearchBarLayoutProps): JSX.Element {
    const { onTextInputFocusChanged, onTextInputChanged, searchText } = props
    const { top } = useSafeAreaInsets()

    const onTextInputFocus = useCallback(() => onTextInputFocusChanged(true), [onTextInputFocusChanged])
    const onTextInputBlur = useCallback(() => onTextInputFocusChanged(false), [onTextInputFocusChanged])

    return (
        <View style={[styles.container, { height: top + 48, paddingTop: top }]}>
            <View style={styles.content}>
                <Image style={styles.logo} source={Images.logo} />
                <TextInput
                    style={styles.input}
                    placeholder="Search here"
                    placeholderTextColor={Colors.lightgray}
                    clearButtonMode="always"
                    onFocus={onTextInputFocus}
                    onBlur={onTextInputBlur}
                    onChangeText={onTextInputChanged}
                    value={searchText}
                />
            </View>
        </View>
    )
}
