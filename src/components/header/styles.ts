import { StyleSheet } from 'react-native'

import { Colors, Dimens } from '@resources'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.tomato,
        paddingHorizontal: Dimens.Padding.medium,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
    },
})

export const DEFAULT_HEADER_BAR_HEIGHT = 64

export default styles
