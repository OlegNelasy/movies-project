import {NavLink, Outlet} from 'react-router-dom'
import './index.css';

const setActive = ({isActive}) => isActive ? 'active-link' : '';

const Layout = () => {
  return (
    <>
        <div>
            <NavLink to='/' className={setActive}>Home</NavLink> <NavLink to='/test' className={setActive}>TestPages</NavLink> <NavLink to='/TestButton' className={setActive}>TestButton</NavLink >
        </div>
        <Outlet />
    </>
  )
}

export {Layout}

