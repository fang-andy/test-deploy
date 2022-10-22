import React, { ReactNode } from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import {
  FiChevronRight,
} from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

export default function ConnectionsMessage({name, id, photo, about, job, pairing}) {
  // console.log("in connection message: ", pairing)
  return (
    <RouterLink to="/connections" state={{ id: id, photo: photo, about: about, job: job, name: name, pairing: pairing}}>
      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={{base:'lg' , md:'sm'}}
                  src={
                    photo
                  }
                  borderRadius="8px"
                />
                <VStack
                  display={{ base: 'flex', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  w="100%"
                >
                  <Text fontWeight={600} fontSize={{base:'lg' , md:'xs'}}>{name}</Text>
                  {/* <Text noOfLines={1} fontSize={{base:'lg', md:"xs"}} color="#718096">Hi I wanted to know if you were free for an interview with Firstly. Let me know as soon as possible, You go girl.Hi I wanted to know if you were free for an interview with Firstly. Let me know as soon as possible, You go girl.</Text> */}
                </VStack>
                <Box display={{ base: 'flex', md: 'flex' }}>
                  <FiChevronRight />
                </Box>
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </RouterLink>
  )
}