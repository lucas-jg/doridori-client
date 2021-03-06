import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderTemplate = styled.div`
    background: #111111;
    padding: 0.5em 0;
    font-size: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const HeaderLogo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');
    font-family: 'Fredoka One', cursive;
    color: #ffffff;
    padding: 0 2rem;
    font-weight: 600;
`

const LinkButton = styled(Link)`
    color: #ffffff;
    font-size: 0.5em;
    padding: 0 1em;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <HeaderTemplate>
            <HeaderLogo>DoriDori</HeaderLogo>
            <LinkButton to='/'>Home</LinkButton>
            <LinkButton to='/about'>About</LinkButton>
        </HeaderTemplate>
    )
}

export default Header
