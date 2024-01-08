import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { CardCtn, CardContent, CardItemImg, CardItemCtn } from './styled';
import { Label2 , InputNumber, InputSelect, InputText, Div50 } from '../../../Base/Containers/styled';


export function CreditClient() {
const handleSubmit=()=>{
  console.log('Cadastro registrado')
}

  return (
    

<Flex w={"40%"}>
<Box>
<form method="get" onChange={handleSubmit}>
  <Label2 forHTML="nomeUsuario">
 Nome Completo
 <InputText type="text" forHTML="nomeUsuario" placeholder='nome Completo' id="nomeUsuario"/> 
  <span>
 SEM NUMEROS e CARACTERES ESPECIAIS
 </span>
 </Label2>
<Label2 forHTML="cpfUsuario">CPF:
<InputText type="text" name="cepUsuario" id="cepUsuario"/></Label2>

<Label2 forHTML="cepUsuario">CEP:
<InputText type="text" name="cpfUsuario" id="cpfUsuario"/></Label2>

<Label2 forHTML="emailUser">E-mail
<InputText type="email" name="emailUser" id="emailUser" minlength="9" maxlength="250" /></Label2>
<Label2 class="dateBirth">Data Nacimento
<input type="date" name="dateBirth" id="dateBirth"/>
</Label2>
<Label2 class="dateBirth">Senha
<input type="password" name="passwordUser" id="passwordUser"
placeholder='Senha Usuario'
/>
<input type="password" name="passwordUser_passwordUser" id="passwordUser"
  placeholder='Confirmar Senha'
/>

</Label2>
<label>
  <input type="checkbox" value="userAgree" /> Estou de acordo com 
</label>
<Div50>
<label type="submit" onSubmit={handleSubmit}>Enviar datos</label>
</Div50>
</form>
<Box bg='whitesmoke' minW={'450px'} w={'50%'} minH={'200px'} alignSelf={'center'}>
<h1>Cadastro</h1>
</Box>


  <h2>Conferir Dados</h2>

</Box>

</Flex>                    );
  }