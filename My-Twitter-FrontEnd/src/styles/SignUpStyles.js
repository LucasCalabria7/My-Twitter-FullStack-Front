import styled from 'styled-components'

export const GlobalSignUp = styled.section`
display: flex;
flex-direction: column;
max-width: 100vw;
min-height: 92vh;
align-items: center;
`

export const WelcomeSection = styled.div`
width: 22.75rem;
height: 5.375rem;
margin-top: 1.813rem;
margin-bottom: 10rem;
`

export const Welcome = styled.p`
font-weight: 700;
font-size: 2rem;
line-height: 2.681rem;
font-family: 'IBM Plex Sans', sans-serif ;
color: #373737;
`

export const InputArea = styled.div`
width: 22.688rem;
min-height: 11.25rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 4rem;
`

export const InputSignUp = styled.input`
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

export const TermsArea = styled.div`
height: 5.813rem;
width: 22.688rem;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
gap: 1rem;
margin-bottom: 1.75rem;
`

export const PrivacyLink = styled.p`
font-family: 'Noto Sans';
font-size: 0.875rem;
font-weight: 500;
line-height: 1.188rem;
`

export const Anchor = styled.a`
color: #4088CB;
text-decoration: none;
`

export const InputCheckbox = styled.input`
border: 1px solid #c4c4c4;
border-radius: 2px;
`;

export const Label = styled.label`
font-family: "Noto Sans";
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.188rem;
color: black;
`;
