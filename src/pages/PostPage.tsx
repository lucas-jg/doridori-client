import * as React from 'react'
import PageTemplate from '../components/base/PageTemplate'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import Axios from 'axios'
import { RouteComponentProps } from 'react-router'

interface PostPageProps
    extends RouteComponentProps<{
        title: string
    }> {}

const PostPage: React.FC<PostPageProps> = ({ match }) => {
    const [input, setInput] = React.useState(
        '# This is a MARK_DOWN header1\n\n## This is a header2\n\n### This is a header3\n\n * And this is a paragraph'
    )

    React.useEffect(() => {
        Axios.get(
            `https://raw.githubusercontent.com/lucas-jg/doridori-post/master/posts/${match.params.title}`
        ).then(res => {
            setInput(res.data)
        })
    }, [match.params.title])

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
