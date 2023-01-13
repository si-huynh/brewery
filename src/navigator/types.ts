import { NavigationProp, RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
    HomeBottomTab: undefined
    BreweryDetail: { id: string }
    Search: undefined
}

export type HomeTabNavigationProps = NavigationProp<RootStackParamList, 'HomeBottomTab'>
export type BreweryDetailRouteProps = RouteProp<RootStackParamList, 'BreweryDetail'>
