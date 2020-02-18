import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import loadable from '@loadable/component'

const MainPage = loadable(() => import('./pages/MainPage'))
const PostPage = loadable(() => import('./pages/PostPage'))

function App() {
    return (
        <Router>
            <HelmetProvider>
                <div className='App'>
                    <Helmet>
                        <title>DoriDori</title>
                        <meta name='description' content='도리도리 블로그' />
                        <meta property='fb:app_id' content='203040656938507' />
                    </Helmet>
                    <Link to='/'>Go Home</Link>
                    <Link to='/post'>Go Post</Link>
                    <Switch>
                        <Route path='/post' component={PostPage} />
                        <Route path='/' component={MainPage} />
                        <Route component={MainPage} />
                    </Switch>
                </div>
            </HelmetProvider>
        </Router>
    )
}

export default App
