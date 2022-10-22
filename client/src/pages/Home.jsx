import React, { useState, useEffect } from 'react';
import TaskContainer from "../containers/Home_Task_Container";
import CJ_Container from "../containers/Home_CJ_Container";
import Connections_Container from "../containers/Home_Connections_Container";
import { Flex, Heading, Text } from "@chakra-ui/react";
import axios from 'axios';

import { updateUser } from "../app/user";
import { useDispatch, useSelector } from 'react-redux';
// const { user_id } = useSelector(state => state.user);

const Home = () => {
  // const [tasks, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

    useEffect(() => {
      const GetUserData = async () => {
        setIsLoading(true);
        const login = await axios.get('/profile')
        const login_data = await login.data
        const res = await axios.get('/home',
          {
            headers: {
              'Content-Type': 'application/json',
            },
            params: {
              user_email : login_data.email
            },
          }
        );
        const user_data = await res.data.pop();
        // console.log('profile pic: ', user_data)
        dispatch(updateUser({
          user_id: user_data.recordid,
          first_name: user_data.full_name,
          full_name: user_data.full_name_full,
          role: user_data.role[0],
          photo: user_data.profile_photo,
          modules: user_data.journey,
          connections: user_data.pairings,
          tasks: user_data.tasks,
        }))
        setIsLoading(false);
      };
      GetUserData(); 
    }, [])

  return (
    <>
      {isLoading ? <p>Loading...</p> : 
        <Flex
          direction={{base:'column', md:'row'}}
          backgroundColor="#f4f6f9"
          w="100%"
          justifyContent={"space-between"}
          gap="30px"
          px={{base: "20px", md: "none"}}
        >
          <div id="column_layout">
            <TaskContainer />
            <CJ_Container/>
          </div>
          <Connections_Container/>
        </Flex>
      }
    </>
  );
};

export default Home;