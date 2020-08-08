import { About } from './pages/About'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export default [
  {
    Component: About,
    path: '/about'
  },
  {
    Component: Home,
    path: '/'
  },
  {
    Component: Login,
    path: '/login'
  },
  {
    Component: Register,
    path: '/register'
  }
]
