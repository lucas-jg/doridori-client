import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderTemplate = styled.div`
    background: #111111;
    padding: 20px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const HeaderLogo = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Patua+One&display=swap');
    font-family: 'Patua One', cursive;
    color: #ffffff;
    padding: 0 40px;
    font-size: 30px;
    font-weight: 600;
`

const LinkButton = styled(Link)`
    color: #ffffff;
    padding: 0 10px;
    &:link {
        color: #ffffff;
        text-decoration: none;
    }
    &:visited {
        color: #ffffff;
        text-decoration: none;
    }
    &:hover {
        color: #ffffff;
        text-decoration: none;
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