import React, {useState,useEffect} from "react";
import Logo from "../../assets/bagburger.svg";
import Trash from "../../assets/trash.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Image, H1, Div, Button, DivUser, Costumes } from "./styles";

function Costumer() {
  const [costumers, setCostumer] = useState([])
  const navigate = useNavigate()
  

  
useEffect(()=>{
  
  async function fetchCostumers(){
      const {data: newCostumer} = await axios.get("http://localhost:3001/users/")
     
      setCostumer(newCostumer)
      
    }
    
  
  fetchCostumers()
   },[])

  async function deleteUserId(userId){

    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = costumers.filter((user) => user.id !== userId)
    
    setCostumer(newUsers)
  }
  
  function back(){
    navigate('/')
  }
  
  

  return (
    <Container >
      <Image src={Logo} alt="logo" />

      <Div>
        <H1>Pedidos</H1>

        <ul className="pedidos">
          {costumers.map((client) => (
            <Costumes key={client.id}>
              <DivUser>
                <p>{client.order}</p> <h1>{client.clientName}</h1>
              </DivUser>
              <button onClick={()=> deleteUserId(client.id)}>
                <img src={Trash} alt="lata-lixo" />
              </button>
            </Costumes>
          ))}
        </ul>

        <Button onClick={back}>Voltar</Button>
      </Div>
    </Container>
  );
}

export default Costumer;
