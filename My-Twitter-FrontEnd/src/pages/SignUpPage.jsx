import styled from 'styled-components'
import { WebSiteHeader } from '../components/WebsiteHeader'
import SignUpButton from '../assets/signupbutton.svg'

export function SignUpPage() {

    const GlobalSignUp = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 92vh;
    align-items: center;
    `

    const WelcomeSection = styled.div`
    width: 22.75rem;
    height: 5.375rem;
    margin-top: 1.813rem;
    margin-bottom: 10rem;
    `

    const Welcome = styled.p`
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.681rem;
    font-family: 'IBM Plex Sans', sans-serif ;
    color: #373737;
    `

    const InputArea = styled.div`
    width: 22.688rem;
    min-height: 11.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 4rem;
    `

    const InputSignUp = styled.input`
    height: 3.75rem;
    border-radius: 0.25rem;
    border: 1px solid #D5D8DE;
    background-color: transparent;
    padding-left: 1rem;
    ::placeholder {
        color: #323941;
        font-weight: 400;
        font-size: 1rem;
        font-family: 'Noto Sans';
        opacity: 0.8;
    }
    `

    const TermsArea = styled.div`
    height: 5.813rem;
    width: 22.688rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.75rem;
    `

    const PrivacyLink = styled.p`
    font-family: 'Noto Sans';
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.188rem;
    `

    const Anchor = styled.a`
    color: #4088CB;
    text-decoration: none;
    `

    const InputCheckbox = styled.input`
    border: 1px solid #c4c4c4;
    border-radius: 2px;
    `;

    const Label = styled.label`
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.188rem;
    color: black;
    `;


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
                    <Label for="check" >
                    <InputCheckbox type='checkbox' id='check' />
                    Eu concordo em receber emails sobre coisas legais no Labeddit
                    </Label>
                </TermsArea>
                <img src={SignUpButton} alt='signup' />
            </GlobalSignUp>
        </>
    )
}