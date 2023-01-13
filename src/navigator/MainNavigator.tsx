import React from 'react'
import { StatusBar } from 'react-native'
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import { BreweryDetail, Search } from '@components'
import { Colors } from '@resources'

import BottomTabNavigator from './BottomTabNavigator'
import { RootStackParamList } from './types'

const Stack = createStackNavigator<RootStackParamList>()

const AppTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.amber50,
    },
}

export default function MainNavigator(): JSX.Element {
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <NavigationContainer theme={AppTheme}>
                <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
                    <Stack.Screen name="HomeBottomTab" component={BottomTabNavigator} />
                    <Stack.Screen
                        name="BreweryDetail"
                        component={BreweryDetail}
                        options={{ presentation: 'modal', ...TransitionPresets.ModalPresentationIOS }}
                    />
                    <Stack.Screen
                        name="Search"
                        component={Search}
                        options={{ ...TransitionPresets.ModalFadeTransition }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
