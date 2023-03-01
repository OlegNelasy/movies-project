import { Link } from 'react-router-dom'

export const NotFound = () => {
    return(
        <>
            <div>
                <p>Page not found</p>  <Link to='/'>ComeHome</Link>
            </div>
        </>
    );
};