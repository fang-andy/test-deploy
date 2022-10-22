import React from "react";
import { Center, Box, Avatar, Stack, Text, Button } from "@chakra-ui/react";


export default function CoachCard() {
  return (
    <Center
    pt="50%"
    >
      <Box
        w="90%"
        bg='#27af66'
        boxShadow={'xl'}
        rounded={'3xl'}
        p={6}
        marginRight="5%"
        marginLeft="5%"
        overflow={'hidden'}
        backgroundImage="./coachCard.svg"
        bgRepeat='no-repeat'
        bgPosition="right"
        bgSize="contain"
      >
        <Avatar
          src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
          alt={'Author'}
          borderRadius="8px"
          size="sm"
        />
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'column'} spacing={0} fontSize={'xs'}>
            <Text fontWeight={600} color="white">Text your Career Coach</Text>
            <Text color={'white'}>+1 626 123 4567</Text>
          </Stack>
        </Stack>
        <Button
          mt={5}
          w={'full'}
          bg="white"
          color={'black'}
          rounded={'xl'}
          fontSize="xs"
          fontWeight={600}
        >
          DOCUMENTATION
        </Button>
      </Box>
    </Center>
  )
}