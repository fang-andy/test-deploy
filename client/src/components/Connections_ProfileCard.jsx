import React from 'react';

import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function ProfileCard({context}) {
    // console.log('context: ', context)
    return (
      <Center> {/*py = 6 -> pb = 4*/}
        <Box
          maxW={'360px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'flex-end'} mt={-12} mr={7}> {/*center -> space-evenly*/}
            <Avatar
              size={'xl'}
              src={
                context.photo
              }
              alt={'Connection'}
              css={{
                border: '6px solid white',
              }}
            />
          </Flex>
  
          <Box p={4}>
            <Stack spacing={0} textAlign={'left'} mt={-12}> {/* align={'center'} mb={5} */}
              <Heading fontSize={'20px'} color="#2D3748" fontWeight={800} lineHeight="22px" fontFamily={'body'}>
                {context.name}
              </Heading>
              <Text fontSize='13px' fontWeight={600} color={'#2D3748'} lineHeight="20px">{context.job}</Text>
              <Text fontSize='12px' fontWeight={500} color={'#2D3748'} lineHeight= "18px" width="328px">{context.about}</Text>
            </Stack>
  
  
          </Box>
        </Box>
      </Center>
    );
  }