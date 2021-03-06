import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Splash from '../../features/splash/components'
import Login from '../../features/login/components'
import Home from '../../features/home/components'
import Report from '../../features/report/components'
import Map from '../../features/map/components'
import News from '../../features/news/components'
import Help from '../../features/help/components'
import HelpInformation from '../../features/help/components/help-information'

import Admin from '../../features/admin/components'
import Details from '../../features/admin/components/details'
import Approval from '../../features/admin/components/approval'

const AuthNavigator = createStackNavigator({
    SplashScreen: { screen: Splash },
    LoginScreen: { screen: Login }
}, {
    headerMode: 'none'
})

const HomeNavigator = createStackNavigator({
    HomeScreen: { screen: Home, navigationOptions: { header: null } },
    ReportScreen: { screen: Report, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } },
    MapScreen: { screen: Map, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } },
    NewsScreen: { screen: News, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } },
    HelpScreen: { screen: Help, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } },
    HelpInformationScreen: { screen: HelpInformation, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } }
}, {
    headerMode: 'none',
    initialRouteName: 'HomeScreen'
})

const AdminNavigator = createStackNavigator({
    AdminHomeScreen: { screen: Admin, navigationOptions: { header: null } },
    DetailsScreen: { screen: Details, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } },
    ApprovalScreen: { screen: Approval, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } }
}, {
    headerMode: 'none',
    initialRouteName: 'AdminHomeScreen'
})

const AppNavigator = createSwitchNavigator({
    Login: AuthNavigator,
    App: HomeNavigator,
    AdminApp: AdminNavigator
}, {
    initialRouteName: 'Login'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer