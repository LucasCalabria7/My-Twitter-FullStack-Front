import SmallerLogo from '../assets/smallerlogo.svg'
import { GlobalHeader, HeaderItems, GoToLogin } from '../styles/WebSiteHeader'
import {useNavigate} from 'react-router-dom'
import { goToLoginPage} from '../routes/coordinator'



export function WebSiteHeader() {

    const navigate = useNavigate()

    return (
        <>
        <GlobalHeader>
            <HeaderItems>
            <img src={SmallerLogo} alt='smalllogo' />
            <GoToLogin onClick={()=> goToLoginPage(navigate)} >Login</GoToLogin>
            </HeaderItems>
        </GlobalHeader>
        </>
    )
}