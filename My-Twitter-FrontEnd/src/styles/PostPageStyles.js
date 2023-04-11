import styled from 'styled-components'

export const GlobalPostPage = styled.section`
display: flex;
flex-direction: column;
max-width: 100vw;
min-height: 92vh;
align-items: center;
`
export const InputPost = styled.input `
width: 22.75rem;
height: 8.188rem;
background-color: #EDEDED;
padding: 1rem ;
border: none;
margin-top: 2rem;
margin-bottom: 0.75rem;
border-radius: 0.75rem;

::placeholder {
    font-family: 'IBM Plex Sans', sans-serif ;
    font-size: 1.125rem;
    line-height: 1.463rem;
    color:#6F6F6F;
}
`

export const Post = styled.img `
margin-bottom:  2rem;
`

export const Line = styled.img `
margin-bottom: 1.625rem ;
`