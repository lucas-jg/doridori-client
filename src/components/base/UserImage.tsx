import * as React from 'react'
import styled from 'styled-components'
import lucasIcon from '../../assets/img/lucas.jpg'

const UserImageTemplate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 7rem;
`
const ImageIcon = styled.img`
    border-radius: 1rem;
    width: 2rem;
    height: 2rem;
`
const Name = styled.div`
    width: 100%;
    margin-left: 0.5rem;
`

//https://images.unsplash.com/photo-1422207134147-65fb81f59e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&q=40

interface UserImageProps {
    username: string
}

const UserImage: React.FC<UserImageProps> = ({ username }) => {
    return (
        <UserImageTemplate>
            <ImageIcon src={lucasIcon} alt='user-img' />
            <Name>{username}</Name>
        </UserImageTemplate>
    )
}

export default UserImage
