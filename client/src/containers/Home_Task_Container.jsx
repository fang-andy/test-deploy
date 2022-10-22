import React, { useState } from "react";
import { Task1 } from "../../stories/Tasks.stories";
import { Box, Text, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';

const TaskContainer = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const { tasks } = useSelector(state => state.user);
  const taskCards = [];
  // console.log('task container: ', props)
  // setIsLoading(true);
  if (tasks.length > 0) {
    // console.log('tasks: ', tasks)
    for (let x = 0; x < tasks.length; x++) {
      taskCards.push(<Task1 
        key={x}
        order=            {tasks[x].order}
        title=            {tasks[x].task_name}
        full_name_mentor= {tasks[x].full_name_mentor} 
        full_name_mentee= {tasks[x].full_name_mentee} 
        mentor_pic=       {tasks[x].mentor_pic}
        mentee_pic=       {tasks[x].mentee_pic} 
        mentee_rec=       {tasks[x].mentee_user_from_pairings} 
        mentor_rec=       {tasks[x].mentor_user_from_pairings}
        status=           {tasks[x].status}
        task_recordid=    {tasks[x].task_recordid}
        description=      {tasks[x].description[0]} 
        cta=              {tasks[x].cta_label[0]}
        image=            {tasks[x].task_image[0]} 
        url=              {tasks[x].url[0]}
        type=             {tasks[x].task_type[0]}
        pairing=          {tasks[x].task_pairings[0]}
        />)
      }

    taskCards.sort((a,b) => a.props.order - b.props.order)
    // setIsLoading(false);
    // console.log('rendered')
  }

  return (
    <>
      {taskCards.length > 0 ?
        <Box
          maxW={{base:"none", md: "750px" ,lg:"1000px"}}
          // px={{base: "10px", md: "0"}}
        >
          <Text fontSize={28} pb={5}>To Do List</Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            // justifyContent={{ base: 'center'}}
            // alignContent={{base: 'center'}}
            w="100%"
            spacing={5}
            // overflowY="auto"
            overflowX="auto"
          >
            {taskCards}
          </Stack>
        </Box> : <p>Loading...</p>
      }
    </>
  )
}

export default TaskContainer;