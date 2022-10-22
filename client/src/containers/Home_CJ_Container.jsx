import React from "react";
import { Flex, Box, Text, Stack, Progress } from "@chakra-ui/react";
import CJCard from "../components/CJ_Card";
import { useDispatch, useSelector } from 'react-redux';

const CJ_Container = () => {
  const journeyCards = [];
  const { modules } = useSelector(state => state.user)
  // console.log('modules:', modules)
  let finish = false;
  // console.log('props.journeyList: ', props.journeyList)
  if (modules.length > 0) {

    //creates shallow copy bc modules cant be edited
    let objs = [...modules];
    objs.sort((a,b) => a.order - b.order);

    for (let x = 0; x < objs.length; x++) {
      journeyCards.push(<CJCard key={x} imageURL={objs[x].image[0]} module={objs[x].name} url={objs[x].url} />);
    }
    finish = true;
  }

  return (
    <>
      {finish ?
        <Box maxW={{base:"none", md: "750px" ,lg:"1000px"}}>
          <Text fontSize={28} pt={8} pb={5}>Career Journey</Text>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            w="100%"
            spacing={5}
            overflowX="scroll"
          >
            {journeyCards}
          </Stack>
        </Box> : <p>Loading...</p>
      }
    </>
  )
}

export default CJ_Container;