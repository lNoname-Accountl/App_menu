import react from "react"
import {Router, Scene} from 'react-native-router-flux'
import Login from './component/Login.js'
import Menu from './component/Menu.js'

const Routes = () => (
    <Router>
        <Scene key = 'root'>
            <Scene key = 'login' component={Login} title = 'Login' initial={true} />
            <Scene key = 'menu' component={Menu} title = 'Menu' />
        </Scene>
    </Router>
)

export default Routes

