import * as React from 'react'
import PageTemplate from '../components/base/PageTemplate'
import { Link } from 'react-router-dom'
import UserImage from '../components/base/UserImage'

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <PageTemplate>
            <div>Main</div>
            <Link to='/post'>Go Post</Link>
            <UserImage username='lucas' />
        </PageTemplate>
    )
}

export default MainPage
