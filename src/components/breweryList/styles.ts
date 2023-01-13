import { StyleSheet } from 'react-native'

import { Dimens } from '@resources'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: Dimens.Padding.medium,
        paddingTop: Dimens.Padding.large,
    },
    seperator: {
        backgroundColor: 'pink',
        height: 16,
    },
    listFooter: {
        height: 48,
        justifyContent: 'center',
        // backgroundColor: 'pink',
    },
})

export default styles
