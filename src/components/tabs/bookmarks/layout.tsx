import React from 'react'
import { View } from 'react-native'

import { BookmarkList } from '@components'

import styles from './styles'

export default function BookMarksLayout(): JSX.Element {
    return (
        <View style={styles.container}>
            <BookmarkList />
        </View>
    )
}
