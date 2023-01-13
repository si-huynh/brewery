import React from 'react'
import { View } from 'react-native'

import { BreweryList, SearchBar } from '@components'

import styles from './styles'

export default function HomeLayout(): JSX.Element {
    return (
        <View style={styles.container}>
            <SearchBar />
            <BreweryList />
        </View>
    )
}
