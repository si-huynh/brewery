import { StyleSheet } from 'react-native'

import { Dimens } from '@resources'

const styles = StyleSheet.create({
    container: {
        padding: Dimens.Padding.medium,
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
