import SmallerLogo from '../assets/smallerlogo.svg'
import { GlobalHeader, HeaderItems, GoToLogin } from '../styles/WebSiteHeader'
import {useLocation, useNavigate} from 'react-router-dom'
import { goToLoginPage} from '../routes/coordinator'



export function WebSiteHeader() {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
        <GlobalHeader>
            <HeaderItems>
            <img src={SmallerLogo} alt='smalllogo' />
            {location.pathname === '/signup' ? 
            <GoToLogin onClick={()=> goToLoginPage(navigate)} >Login</GoToLogin> :
            <GoToLogin onClick={()=> goToLoginPage(navigate)}>Logout</GoToLogin>}
            </HeaderItems>
        </GlobalHeader>
        </>
    )
}