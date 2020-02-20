import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

test('renders learn react link', () => {
    const { getByText } = render(
        <Router history={createMemoryHistory()}>
            <App />
        </Router>
    )
})
