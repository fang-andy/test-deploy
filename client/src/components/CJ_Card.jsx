import React from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';

import { FiShoppingCart, FiChevronRight } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';


function CJCard(props) {
  const link = `/cj?module=${props.url}`

  return (
    <RouterLink to={link}>
      <Box
        // bg={`linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%), url(${props.imageURL})`}
        background={`url(${props.imageURL})`}
        bgPos="center"
        justifyContent="center"
        backgroundSize="cover"
        display="flex"
        minW="3xs"
        // maxW="sm"
        minH="2xs"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        mr="2%"
        position="relative">
        <Box
          p="2"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          w="100%"
        >
          <Flex mt="1" justifyContent="center" alignContent="center">
            <Box
              fontSize="lg"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color="white"
            >
              {props.module}
            </Box>
          </Flex>
          <Flex justifyContent="flex-end" alignItems="stretch" p={1}>
            <Icon as={FiChevronRight}
              color="#27AF66"
              bgColor="white"
              borderRadius="8px"
              height="28px"
              width="auto"
            />
          </Flex>
        </Box>
      </Box>
    </RouterLink>
  );
}

export default CJCard;