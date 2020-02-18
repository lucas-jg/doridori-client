import * as React from 'react'
import PageTemplate from '../components/base/PageTemplate'

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = () => {
    return <PageTemplate hideHeader>Post</PageTemplate>
}

export default PostPage
