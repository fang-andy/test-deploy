import React from "react";
import {
  Button,
} from '@chakra-ui/react';

export default function ButtonTemplate ({text, mtop, width, bgColor, textColor, round, bgHover, onClick}) {

  return (
    <Button
      mt={mtop}
      w={width}
      bg={bgColor}
      color={textColor}
      rounded={round}
      // boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
      _hover={{
        bg: bgHover,
      }}
      // _focus={{
      //   bg: 'green.500',
      // }}
      onClick={onClick}
    >
    {text}
    </Button>
  )
}