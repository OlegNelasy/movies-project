// import {NavLink, Outlet} from 'react-router-dom'
import Header from './../Header';
import {Outlet} from 'react-router-dom'


const Layout = () => {

  return (
    <>
        <Header />
        {/* <div> */}
            {/* <NavLink to='/'>Home</NavLink > */}
            {/* <NavLink to='/test'>TestPages</NavLink>  */}
            {/* <NavLink to='/TestButton'>TestButton</NavLink > */}
        {/* </div> */}
        <Outlet />
    </>
  )
}

export {Layout}

