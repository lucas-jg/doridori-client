import * as React from 'react'
import PageTemplate from '../components/base/PageTemplate'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = () => {
    const input =
        '# This is a MARK_DOWN header1\n\n## This is a header2\n\n### This is a header3\n\n * And this is a paragraph'
    return (
        <PageTemplate>
            <Helmet>
                <title>Dori Post</title>
            </Helmet>
            <ReactMarkdown source={input} />
        </PageTemplate>
    )
}

export default PostPage
