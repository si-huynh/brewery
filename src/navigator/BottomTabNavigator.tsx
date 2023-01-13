import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BookMarksTab, HomeTab } from '@components'
import { Colors, Dimens, Icon } from '@resources'

const MainBottomTabNavigator = createBottomTabNavigator()

export default function BottomTabNavigator(): JSX.Element {
    return (
        <MainBottomTabNavigator.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.tomato,
                },
                tabBarItemStyle: {
                    paddingVertical: Dimens.Padding.small,
                },
                tabBarActiveTintColor: Colors.amber50,
                tabBarInactiveTintColor: Colors.primary,
                tabBarLabelStyle: { fontWeight: '500' },
                headerShown: false,
            }}>
            <MainBottomTabNavigator.Screen
                name="Home"
                component={HomeTab}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="beer.mug.full" size={16} color={color} />,
                }}
            />
            <MainBottomTabNavigator.Screen
                name="BookMarks"
                component={BookMarksTab}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="bookmark.star" size={16} color={color} />,
                }}
            />
        </MainBottomTabNavigator.Navigator>
    )
}
