import NavBarMobileLogged from './NavBarMobileLogged'
import NavBarMobileNotLogged from './NavBarMobileNotLogged'

const NavBarMobile = ({ token }) => {
  return (
    <>
      <div className='z-50 fixed bottom-0 w-full border-t border-gray-400 border-opacity-10  bg-blue-600 flex overflow-x-auto py-1 lg:hidden'>
        {
            token ? <NavBarMobileLogged /> : <NavBarMobileNotLogged />
        }

      </div>

    </>
  )
}

export default NavBarMobile
