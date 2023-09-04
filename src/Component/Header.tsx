import React from 'react'
import styled from '@emotion/styled'
import {AiOutlineMenu} from "react-icons/ai"

const Container=styled.div`
background-color: #123456;
height: 70px;
`
const Head=styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
padding: 0 120px;
`
const Logo = styled.div`
margin-right: 30px;
font-size: 30px;
`
const Header:React.FC = () => {
  return (
    <Container>
        <Head>
            <h2>PhoneBook</h2>
           <Logo><AiOutlineMenu/></Logo> 
        </Head>
    </Container>
  )
}

export default Header