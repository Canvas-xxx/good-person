import { createStackNavigator, createAppContainer } from 'react-navigation'
import Splash from '../../features/splash/components'

const appNavigator = createStackNavigator({
    SplashScreen: Splash
}, {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
})

const App = createAppContainer(appNavigator)

export default App