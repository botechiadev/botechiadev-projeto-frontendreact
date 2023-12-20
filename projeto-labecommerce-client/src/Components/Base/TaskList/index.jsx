import { useState, Component } from "react";


import {  Input,  Td, Tr, Table, Button, Box, List, Flex} from "@chakra-ui/react";


export function TaskList() {
  const taskTemplate = {
    id: undefined,
    status: 1,
    module: 1,
    tags: []
  }
  const [newTask, setNewTask] = useState('') ;
const [taskList] = useState( [
  {
    id: 0,
    taskName: "HTML1",
    status: 1,
    module: 1,
    tags: ['HTML', 'CSS', 'M1']
  },
  {
    id: 1,
    taskName: "HTML2",
    status: 1,
    module: 1,
    tags: ['HTML', 'CSS', 'M1']
  },
  {
    id:2,
    taskName: "HTML3",
    status: 1,
    module: 1,
    tags: ['HTML', 'CSS', 'M1']
  }
])

  const onChangeTarefa = (event) => {
   /* const currentTasks = [...taskList]
*/
};
const renderTaskList = ()=>{
  return(
    taskList.map((item)=>(
    
        <Tr key={item.id}>
        <Td>
        {item.taskName}
        </Td>
        <Td>  <Button bg='red' color='whiteAlpha.100' m="3px">
        <i bg={'black'} class="fas fa-trash" aria-hidden="true"></i>
      </Button>
      <Button height={'100%'} >
        <img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clker.com%2Fcliparts%2FE%2FX%2FT%2Fd%2Fg%2FH%2Fred-edit-icon-glossy-hi.png&f=1&nofb=1&ipt=74c2fd79e5e2c7834bfb84d1f8619f653ddce79b9e810c14a75daa3244bb3328&ipo=images'}
        alt={'edit link button'} height={'36px'}  width={'36px'}/>
      </Button>
      </Td>
        </Tr>
  
  )))
}
  const addNewTask = (newTask) => {
      const currentTasks = [...taskList];
      
      renderTaskList(currentTasks.push([...currentTasks], newTask))
  };

  const removeTarefa = () => {};

  return (
    <Box>
      <Flex><Box>
        <Input
          placeholder="Nova Tarefa!"
            value={newTask}
          type="text"
        />
        <Button onClick={addNewTask(newTask)}>Adicionar</Button>
     </Box>
      </Flex>

    
        <Table>
        {renderTaskList()}
        </Table>
     
      </Box>
   
  );
}
