import React, {useState, useRef} from "react";
import Logo from "../../assets/burger.svg"
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Container,
  Image,
  H1,
  Div,
  InputLabel,
  Input,
  Button,
  
} from "./styles"




function App() {

  const [costumes, setCostumer] = useState([])
  const inputCostumer = useRef()
  const inputName = useRef()
  const Navigate = useNavigate()


  async function AddNewCostumer(){

   if(!inputName.current.value  || !inputCostumer.current.value){
    return toast.error('Preencha os campos abaixo')
  }else{toast.success('ok')}
  
     const {data: newCostumer} = await axios.post("http://localhost:3001/users",{
   order: inputCostumer.current.value,
   clientName: inputName.current.value
  })
  

  setCostumer([...costumes, newCostumer])
 
  Navigate("/usuarios")
 }

  return (
    <Container>
      <Image src={Logo} alt="logo" />
     
     <Div className="App">
     
     <H1>Faça seu pedido!</H1>

     <InputLabel>Pedido</InputLabel>
     <Input ref={inputCostumer} placeholder="Digite seu pedido"></Input>

     <InputLabel>Cliente</InputLabel>
     <Input type='text' ref={inputName} placeholder="Digite seu nome"></Input>

     <Button  onClick={AddNewCostumer}>Novo Pedido</Button>

    </Div> 
    <ToastContainer/>
    </Container>
  )
}

export default App;
