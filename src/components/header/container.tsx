import React from 'react'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'

import AppHeaderLayout from './layout'

export default function AppHeaderContainer(props: BottomTabHeaderProps): JSX.Element {
    return <AppHeaderLayout {...props} />
}
