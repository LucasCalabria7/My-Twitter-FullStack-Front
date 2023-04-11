import { WebSiteHeader } from '../components/WebsiteHeader'
import SignUpButton from '../assets/signupbutton.svg'
import {GlobalSignUp, WelcomeSection, Welcome, InputArea, InputSignUp, TermsArea, PrivacyLink, Anchor, InputCheckbox, Label} from '../styles/SignUpStyles'
import { useNavigate } from 'react-router-dom'
import { goToPostsPage} from '../routes/coordinator'

export function SignUpPage() {

const navigate = useNavigate()

    return (
        <>
            <GlobalSignUp>
                <WebSiteHeader />
                <WelcomeSection>
                    <Welcome>Olá, bem-vindo ao MyTwitter 🧑🏽‍💻</Welcome>
                </WelcomeSection>
                <InputArea>
                    <InputSignUp placeholder='Username' />
                    <InputSignUp placeholder='Email' />
                    <InputSignUp placeholder='Senha' />
                </InputArea>
                <TermsArea>
                    <PrivacyLink>Ao continuar, você concorda com o nosso
                        <Anchor href='https://zyro.com/br/ferramentas/gerador-de-termos-de-uso' target='_blank' > Contrato de usuário </Anchor>
                        e nossa
                        <Anchor href='https://zyro.com/br/ferramentas/gerador-de-termos-de-uso' target='_blank' > Política de Privacidade</Anchor>
                    </PrivacyLink>
                    <Label htmlFor="check" >
                    <InputCheckbox type='checkbox' id='check' />
                    Eu concordo em receber emails sobre coisas legais no MyTwitter
                    </Label>
                </TermsArea>
                <img src={SignUpButton} alt='signup' onClick={()=> goToPostsPage(navigate)} />
            </GlobalSignUp>
        </>
    )
}