import * as React from 'react'
import PageTemplate from '../components/base/PageTemplate'
import { Helmet, HelmetProvider } from 'react-helmet-async'

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = () => {
    return (
        <PageTemplate>
            <Helmet>
                <title>Dori Post</title>
            </Helmet>
            Post
        </PageTemplate>
    )
}

export default PostPage
