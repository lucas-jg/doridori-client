import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import styled from 'styled-components'

const MainPage = loadable(() => import('./pages/MainPage'))
const PostPage = loadable(() => import('./pages/PostPage'))

const AppTemplate = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    font-family: 'Noto Sans KR', sans-serif;
`

function App() {
    return (
        <Router>
            <HelmetProvider>
                <AppTemplate className='App'>
                    <Helmet>
                        <title>DoriDori</title>
                        <meta name='description' content='도리도리 블로그' />
                        <meta property='fb:app_id' content='203040656938507' />
                    </Helmet>
                    <Switch>
                        <Route path='/post/:title' component={PostPage} />
                        <Route path='/about' component={MainPage} />
                        <Route path='/' component={MainPage} />
                        <Route component={MainPage} />
                    </Switch>
                </AppTemplate>
            </HelmetProvider>
        </Router>
    )
}

export default App
