import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Splash from '../../features/splash/components'
import Login from '../../features/login/components'
import Home from '../../features/home/components'
import Report from '../../features/report/components'
import News from '../../features/news/components'
import Help from '../../features/help/components'
import HelpInformation from '../../features/help/components/help-information'

const AuthNavigator = createStackNavigator({
    SplashScreen: { screen: Splash },
    LoginScreen: { screen: Login }
}, {
    headerMode: 'none'
})

const HomeNavigator = createStackNavigator({
    HomeScreen: { screen: Home, navigationOptions: { header: null } },
    ReportScreen: { screen: Report, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } },
    NewsScreen: { screen: News, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } },
    HelpScreen: { screen: Help, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } },
    HelpInformationScreen: { screen: HelpInformation, navigationOptions: { headerStyle: { backgroundColor: '#0f52ba' }, headerTintColor: '#fff' } }
}, {
    initialRouteName: 'HomeScreen'
})

const AppNavigator = createSwitchNavigator({
    Login: AuthNavigator,
    // App: HomeNavigator
}, {
    initialRouteName: 'Login'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppNavigator