import logoicon from '../assets/logoicon.svg'
import Login from '../assets/login.svg'
import LoginLine from '../assets/loginline.svg'
import {GlobalHeader, LogoArea, Title, SubTitle, InputArea, InputLogin, ButtonArea, GradientButton, SignUpButton} from '../styles/LoginPageStyles'
import { goToSignUpPage} from '../routes/coordinator'
import {useNavigate} from 'react-router-dom'

export function LoginPage () {

    const navigate = useNavigate()

    return (
        <GlobalHeader>
        <LogoArea>
        <img src={logoicon} alt='logoicon' />
        <Title>MyTwitter</Title>
        <SubTitle>Rede Social da Labenu</SubTitle>
        </LogoArea>
        <InputArea>
        <InputLogin placeholder='Email' />
        <InputLogin placeholder='Senha' />
        </InputArea>
        <ButtonArea>
        <GradientButton src={Login} alt='Go Button' />
        <img src={LoginLine} />
        <SignUpButton onClick={()=> goToSignUpPage(navigate)} >Criar Conta</SignUpButton>
        </ButtonArea>
        </GlobalHeader>
    )
}