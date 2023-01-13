import { StyleSheet } from 'react-native'

import { Colors, Dimens } from '@resources'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        padding: Dimens.Padding.normal,
        borderRadius: 8,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        alignItems: 'center',
        marginBottom: Dimens.Margin.medium,
    },
    leftContent: {
        flex: 1,
        marginRight: Dimens.Margin.medium,
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        marginTop: Dimens.Margin.small,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Dimens.Margin.small,
    },
    addressText: {
        fontSize: 12,
        marginLeft: Dimens.Margin.normal,
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
    bookmarkButton: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles
