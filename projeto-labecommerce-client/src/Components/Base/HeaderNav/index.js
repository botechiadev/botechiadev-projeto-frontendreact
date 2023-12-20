import React from 'react';
import { useState } from 'react';
 NavButton} from './styled'



export function HeaderNav({ modalDisplay, setModalDispay, setPages}){
const [titlePage, setTitlePage] = useState("Bem Vindo")


    const showModal = (modalDisplay) =>{
        setModalDispay(1) 
        
    }
    
    
    const showPage1 = (pages) =>{
        setPages(1) 
        setTitlePage("Produtos")
    }
    
    const showPage2 = (pages) =>{
        setPages(2) 
        setTitlePage("Ofertas")
        
    }
    const showPage3= (pages) =>{
        setPages(3) 
        setTitlePage("Projeto")
        
    }
    
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
return(
  <div>
<NavList>
     
        <NavButton onClick={showPage1}>
          Produtos
          </NavButton>
        <NavButton onClick={showPage2}>Ofertas</NavButton>
        <ButtonList
                  onClick={() => handleClick(size)}
                key={size[1]}
                m={4}
              >Notes</ButtonList>
                <ButtonList
                  onClick={() => handleClick(size)}
                key={size[1]}
                m={4}
              >Notes</ButtonList>
                  <Drawer onClose={onClose} isOpen={isOpen} size={size[1]}>

        <NavButton onClick={showModal}>Carrinho</NavButton>
  </NavList>
    
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>TaskList</DrawerHeader>
                <DrawerBody>
                 <TaskList/>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

</div>
)
}

