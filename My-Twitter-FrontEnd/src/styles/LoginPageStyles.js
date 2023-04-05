import styled from 'styled-components'

export const GlobalHeader = styled.div `
min-height: 92vh;
max-width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`

export const LogoArea = styled.div `
display: flex;
width: 100%;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 30vh;
gap: 0.6875rem;
`

export const Title = styled.h2 `
font-size: 2.25rem ;
font-weight: 700;
font-family: 'IBM Plex Sans', sans-serif;
line-height: 2.925rem;
`

export const SubTitle = styled.p `
font-family: 'IBM Plex Sans', sans-serif ;
font-size: 1rem;
line-height: 1.3rem;
`

export const InputArea = styled.div `
width: 100%;
height:7.5rem ;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 0.5rem;
`

export const InputLogin = styled.input `
width: 22.6875rem ;
height: 3.75rem;
border-radius: 0.25rem ;
border: 1px solid #d5d8de;
padding-left: 1rem;

::placeholder {
    color: #323941 ;
    font-family: 'Noto Sans';
    opacity: 0.8;
}
`

export const ButtonArea = styled.div `
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
gap: 1rem;
`

export const GradientButton = styled.img `
width: 22.6875rem;
height: 3.1875rem;
margin-top: 3.5rem ;
cursor: pointer;
`

export const SignUpButton = styled.button `
width: 22.6875rem;
height: 3.1875rem;
background-color: transparent;
border: 2px solid #FE7E02;
color: #FE7E02 ;
font-family: 'Noto Sans';
font-weight: 700;
font-size: 1.125rem;
border-radius: 1.6875rem;
cursor: pointer;
`
