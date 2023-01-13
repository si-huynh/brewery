import { Dimensions, StyleSheet } from 'react-native'

import { Colors, Dimens } from '@resources'

const MAX_WIDTH = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: MAX_WIDTH,
        height: MAX_WIDTH * (9 / 16),
    },
    content: {
        padding: Dimens.Padding.medium,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: Dimens.Margin.normal,
    },
    subTitle: {
        fontSize: 14,
        marginTop: Dimens.Margin.small,
    },
    type: {
        fontSize: 10,
        color: Colors.tomato,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 8,
        borderColor: Colors.tomato,
        padding: Dimens.Padding.small,
        width: 65,
        textAlign: 'center',
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.primary,
        marginVertical: Dimens.Margin.medium,
    },
    controls: {
        flexDirection: 'row',
        height: 48,
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: Colors.tomato,
        paddingVertical: Dimens.Padding.small,
        width: 100,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: Dimens.Margin.small,
    },
})
