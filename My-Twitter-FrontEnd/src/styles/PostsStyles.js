import styled from 'styled-components'

export const GlobalPostCard = styled.div `
width: 22.75rem;
min-height:7.563rem;
border-radius: 0.75rem;
padding: 0.563rem 0.625rem;
background-color: #FBFBFB;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 1.125rem;
`

export const UserWhoPosted = styled.p `
font-family: 'IBM Plex Sans', sans-serif ;
font-size: 0.75rem;
line-height: 1rem;
color:#6F6F6F ;
`

export const PostContent = styled.p `
font-family: 'IBM Plex Sans', sans-serif ;
font-size: 1.125rem;
line-height:1.463rem;
color: black;
`

export const FooterCardArea = styled.div `
width: 12rem;
height: 1.75rem;
display: flex;
justify-content: space-between;
`

export const LikeDislike = styled.div `
width: 50%;
height: 100%;
border: 1px solid #ECECEC;
border-radius: 1.75rem;
padding: 0.75rem;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Comments = styled.div `
width: 40%;
height: 100%;
border: 1px solid #ECECEC;
border-radius: 1.75rem;
padding: 0.75rem;
display: flex;
align-items: center;
justify-content: space-between;
`

export const LikeDislikePic = styled.img `
height: 1rem;
width: 1rem;
`

export const LikeCounter = styled.p `
font-family: 'IBM Plex Sans', sans-serif ;
font-weight: 700;
font-size: 0.6rem;
line-height: 0.777rem;
color: #6F6F6F;
`

export const CommentCounter = styled.p `
font-family: 'IBM Plex Sans', sans-serif ;
font-weight: 700;
font-size: 0.6rem;
line-height: 0.777rem;
color: #6F6F6F;
`
