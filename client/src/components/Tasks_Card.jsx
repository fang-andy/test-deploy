import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

import React from 'react';
import Button_Actions from './Tasks_Actions';
import { useSelector } from 'react-redux';

export default function Tasks({title, description, type, full_name_mentor, full_name_mentee, mentor_pic, mentee_pic, cta, image, mentee_rec, mentor_rec, status, task_recordid, url, pairing}) {
  const { user_id } = useSelector(state => state.user);
  let connection = {};

  if (pairing) {
    const mentee = {
      id: mentee_rec[0],
      pic: mentee_pic[0], 
      name:full_name_mentee[0]
    }
    const mentor = {
      id: mentor_rec[0],
      pic: mentor_pic[0], 
      name: full_name_mentor[0]
    }
    if (user_id === mentee.id) {
      connection = mentor;
    } else if (user_id === mentor.id) {
      connection = mentee;
    };
  }

  return (
    <Center pr="20px">
      <Box
        minW={{xs:'200px', sm:'200px', md:'250px', lg:'250px'}}
        minH="183px"
        // maxH="183px"
        w="100%"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'2xl'}
        p={6}
        overflow={'hidden'}>
        
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={{base: 'xl', md:'md'}}
            fontFamily={'body'}
          >
            {title}
          </Heading>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={connection.name ? connection.pic : image}
            alt={'task image'}
            borderRadius="8px"
            size="sm"
          />
          <Stack direction={'column'} spacing={0} fontSize={'xs'}>
            {connection.name !== undefined ? <Text fontWeight={600} fontSize={{base: "lg", md:'xs'}}>{connection.name}</Text> : <Text color={'gray.500'} fontSize={{base: "s", md:'2xs'}}>{description}</Text>}
            {/* <Text color={'gray.500'} fontSize={{base: "lg", md:'xs'}}>{description}</Text>
            <Text fontWeight={600} fontSize={{base: "lg", md:'xs'}}>{connection.name}</Text> */}
            {/* <Text color={'gray.500'} fontSize={{base: "lg", md:'xs'}}>{profile_pic}</Text> */}
          </Stack>
        </Stack>
          <Button_Actions text={cta} status={status} task={task_recordid} ActionType={type} url={url} pairing={pairing}/>
      </Box>
    </Center>
  );
}