import { StyleSheet } from 'react-native'

import { Colors, Dimens } from '@resources'

export const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 48 * 5,
        margin: Dimens.Margin.medium,
        zIndex: 1000,
    },
    item: {
        height: 48,
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 16,
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.primary,
    },
})
