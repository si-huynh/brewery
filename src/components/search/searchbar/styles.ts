import { StyleSheet } from 'react-native'

import { Colors, Dimens } from '@resources'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingHorizontal: Dimens.Padding.medium,
    },
    content: {
        flexDirection: 'row',
        backgroundColor: Colors.amber50,
        height: 48,
        borderRadius: 24,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        alignItems: 'center',
    },
    logo: {
        height: 48,
        width: 48,
        borderRadius: 24,
        marginLeft: Dimens.Margin.normal,
    },
    input: {
        flex: 1,
        height: 48,
        marginHorizontal: Dimens.Margin.medium,
    },
    placeholder: {
        flex: 1,
        color: Colors.lightgray,
        marginHorizontal: Dimens.Margin.medium,
    },
})
