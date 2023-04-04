import styled from 'styled-components'
import logoicon from '../assets/logoicon.svg'
import GoButton from '../assets/gradientbutton.svg'
import LoginLine from '../assets/loginline.svg'

export function LoginPage () {

    const GlobalHeader = styled.div `
    min-height: 94.8vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

    const Logo = styled.img `
    padding-bottom:0.6875rem;
    `

    const Title = styled.h2 `
    font-size: 2.25rem ;
    font-weight: 700;
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 2.925rem;
    `

    const SubTitle = styled.p `
    font-family: 'IBM Plex Sans', sans-serif ;
    font-size: 1rem;
    line-height: 1.3rem;
    `

    const InputArea = styled.div `
    width: 100%;
    height:7.5rem ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 6.6875rem ;
    `

    const InputLogin = styled.input `
    width: 22.6875rem ;
    height: 3.75rem;
    border-radius: 0.25rem ;
    border: 1px solid #d5d8de;
    padding-left: 1rem;

    ::placeholder {
        color: #323941 ;
        font-family: 'Noto Sans';
    }
    `

const ButtonArea = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const GradientButton = styled.img `
    width: 22.6875rem;
    height: 3.1875rem;
    margin-top: 3.5rem ;
`

const SignUpButton = styled.button `
    width: 22.6875rem;
    height: 3.1875rem;
    background-color: transparent;
    border: 2px solid #FE7E02;
    color: #FE7E02 ;
    font-family: 'Noto Sans';
    border-radius: 1.6875rem;

`
    return (
        <GlobalHeader>
        <Logo src={logoicon} alt='logoicon' />
        <Title>MyTwitter</Title>
        <SubTitle>Rede Social da Labenu</SubTitle>
        <InputArea>
        <InputLogin placeholder='Email' />
        <InputLogin placeholder='Senha' />
        </InputArea>
        <ButtonArea>
        <GradientButton src={GoButton} alt='Go Button' />
        <img src={LoginLine} />
        <SignUpButton >Criar Conta</SignUpButton>
        </ButtonArea>
        </GlobalHeader>
    )
}