import Like from '../assets/likeicon.png'
import Dislike from '../assets/dislikeicon.png'
import Comment from '../assets/commenticon.svg'
import { GlobalPostCard, UserWhoPosted, PostContent, FooterCardArea, LikeDislike, LikeDislikePic, LikeCounter, Comments, CommentCounter } from '../styles/PostsStyles'

export function Posts () {

    

    return (
        <>
        <GlobalPostCard>
        <UserWhoPosted>Enviado por: LucasCalabria7</UserWhoPosted>
        <PostContent>Qual super-poder você gostaria de ter ?</PostContent>
        <FooterCardArea>
            <LikeDislike>
                <LikeDislikePic src={Like} alt='like' />
                <LikeCounter>345</LikeCounter>
                <LikeDislikePic src={Dislike} alt='dislike' />
            </LikeDislike>
            <Comments>
                <img src={Comment} alt='commenticon' />
                <CommentCounter>255</CommentCounter>
            </Comments>
        </FooterCardArea>
        </GlobalPostCard>
        </>
    )
}