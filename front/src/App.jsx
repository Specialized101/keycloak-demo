import './App.css'
import Users from './components/Users'
import useAuth from './hooks/useAuth'

export default function App() {
  const [isLogin, token] = useAuth()

  return isLogin && <Users token={ token }/>
}
