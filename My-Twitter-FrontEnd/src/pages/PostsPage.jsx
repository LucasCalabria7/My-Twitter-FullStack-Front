import {WebSiteHeader} from '../components/WebsiteHeader'
import {Posts} from '../components/Posts'
import { GlobalPostPage, InputPost, Post, Line } from '../styles/PostPageStyles'
import PostButton from '../assets/postbutton.svg'
import PostLine from '../assets/postline.svg'

export function PostsPage () {



    return (
        <>
        <GlobalPostPage>
        <WebSiteHeader />
        <InputPost type='text' placeholder='Escreva seu post ...' />
        <Post src={PostButton} alt='post' />
        <Line src={PostLine} alt='line' />
        <Posts />
        <Posts />
        <Posts />
        </GlobalPostPage>
        </>
    )
}