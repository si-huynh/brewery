import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { Marker } from 'react-native-maps'

import { Colors, Icon } from '@resources'

import { styles } from './styles'
import { BreweryDetailLayoutProps } from './types'

export default function BreweryDetailLayout(props: BreweryDetailLayoutProps): JSX.Element {
    const {
        data: { latitude, longitude, name, brewery_type: type, street, city, state, country, postal_code },
        isBookmarked,
        onSaveButtonPressed,
        onCallButtonPressed,
        onURLButtonPressed,
    } = props

    const coordinate = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
    }

    const address = `${street || ''} ${city} ${state} - ${country}`.trim()

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    ...coordinate,
                    latitudeDelta: 0.004757,
                    longitudeDelta: 0.006866,
                }}
                showsPointsOfInterest={false}
                liteMode={true}
                scrollEnabled={false}
                zoomEnabled={false}>
                <Marker coordinate={coordinate} />
            </MapView>
            <View style={styles.content}>
                <Text style={styles.type}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{address}</Text>
                <Text style={styles.subTitle}>Postal Code: {postal_code}</Text>
                <View style={styles.divider} />
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.button} onPress={onCallButtonPressed}>
                        <Icon name="phone" color={Colors.white} size={18} />
                        <Text style={styles.buttonText}>Call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={onURLButtonPressed}>
                        <Icon name="browser.general" color={Colors.white} size={18} />
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={onSaveButtonPressed}>
                        <Icon name={isBookmarked ? 'bookmark.star' : 'bookmark'} color={Colors.white} size={18} />
                        <Text style={styles.buttonText}>{isBookmarked ? 'Unsave' : 'Save'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
