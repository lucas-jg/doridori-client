import * as React from 'react'
import PageTemplate from '../components/base/PageTemplate'
import { Link } from 'react-router-dom'

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <PageTemplate>
            <div>Main</div>
            <Link to='/post'>Go Post</Link>
        </PageTemplate>
    )
}

export default MainPage
