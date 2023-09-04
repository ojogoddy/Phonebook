import React, { useState } from 'react'
import styled from "@emotion/styled"
import {BsTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {AiFillDelete} from "react-icons/ai"
import Nigeria from "../assets/react.svg"
import Ghana from "../assets/react.svg"
import USA from "../assets/react.svg"
import China from "../assets/react.svg"

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Card = styled.div`
width: 250px;
border: 1px solid #f1f1f1;
background-color: white;
padding: 10px;
border-radius: 5px;
display: flex;
flex-direction: column;
margin: 10px;

span{
    font-size: 11px;
}
`
const Logo = styled.img`
height: 30px;
width: 30px;
background-color: silver;
border-radius: 50%;
object-fit: cover;
`
const Form = styled.form`
width: 400px;
border: 1px solid #f1f1f1;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: white;
`
const Name = styled.div`
font-weight: bold;
`
const Input = styled.input`
height: 25px;
margin-bottom: 10px;
width: 100%;
padding: 5px;
border-radius: 3px;
border: 1px solid #dcdce9;
transition: all 350ms;
outline-color: #aba5f5;
padding-left: 10px;
`
const Hold = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const TName = styled.div``
const CardHold = styled.div`
display: flex;
flex-wrap: wrap;
`

const Select = styled.select`
height: 30px;
margin-bottom: 10px;
width: 420px;
padding: 5px;
border-radius: 3px;
border: 1px solid #dcdce9;
transition: all 350ms;
outline-color: #aba5f5;
padding-left: 10px;
`
const Button = styled.button`
width: 200px;
height: 40px;
outline: none;
border: none;
background-color: #123456;
color: white;
cursor: pointer;
`
const Del = styled.div`
color: red;
`
const Box =styled.div`
    color: gray;
    border: 1px solid gray;
    padding: 15px 5px 10px 5px;
    height: 10px;
`
interface UData{
    id:string;
    fullName:string;
    email:string;
    country:string;
    phoneNumber:string
}


const MainScreen:React.FC = () => {
    const [fullName, setFullName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [data, setData] = useState<Array<UData>>([])
    const [Country, setCountry] = useState<string>("")

    const SubmitData= () =>{
        setData((prev:any)=> [
            ...prev,
            {
                fullName,
                email,
                phoneNumber,
                Country,
                id:`${Math.random()* 4000000}`,
            },
        ])
    }
    console.log(data)

    const RemoveUser = (id:string) =>{
        const delecting = data.filter((el)=>el.id !== id);
        setData(delecting)
    }
  return (
    <Container>
        <Form
        onSubmit={(e)=>{
            e.preventDefault();
            SubmitData()
        }}>
            <h2>Add Contact</h2>
            <Input
             onChange={(e)=>{
                setFullName(e.target.value)
             }}
             required placeholder='Enter FullName' type='text'/>
            <Input
                onChange={(e)=>{
                setEmail(e.target.value)
             }} required placeholder='Enter email' type='email'/>
            <Input
                onChange={(e)=>{
                setPhoneNumber(e.target.value)
                 }}
            required placeholder='e.g 09000000001' />
            <Select 
                onChange={(e)=>{
                setCountry(e.target.value)
                 }}>
                <option selected disabled>--Select Country--</option>
                <option value={USA}>USA</option>
                <option value={Nigeria}>Nigeria</option>
                <option value={Ghana}>Ghana</option>
                <option value={China}>China</option>
            </Select>
            <Button type='submit' >Submit</Button>
        </Form>
        <h2>All Contacts</h2>
       <CardHold>
        {data?.map((props)=>(
             <Card>
             <Hold>
                 <TName>
                     <Name>{props.fullName}</Name>
                     <span>Alfred co.</span>
                     <span>{props.country}</span>
                 </TName>
                 {props.country === "Nigeria"?<Logo src={Nigeria}/>: null}
                 {props.country === "Ghana"?<Logo src={Ghana}/>: null}
                 {props.country === "USA"?<Logo src={USA}/>: null}
                 {props.country === "China"?<Logo src={China}/>: null}
             </Hold>
             <Box>
                 <BsTelephoneFill/> {props.phoneNumber}
             </Box>
             <Box>
                <MdEmail/> {props.email}
             </Box>
             <Del 
             onClick={()=>{
                RemoveUser(props.id)
             }}>
                <AiFillDelete/>
             </Del>
         </Card>
        ))

        }
       </CardHold>
    </Container>
  )
}

export default MainScreen