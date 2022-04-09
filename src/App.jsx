import 'sweetalert2/dist/sweetalert2.min.css'
import '@sweetalert2/theme-wordpress-admin/wordpress-admin.min.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import UserProvider from './context/UserProvider'

function App () {
  return (
    <UserProvider>
      <NavBar />
      <Main />
    </UserProvider>
  )
}

export default App
