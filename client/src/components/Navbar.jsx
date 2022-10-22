import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  FiMail
} from 'react-icons/fi';

import {
  FaHome,
  FaUsers,
  FaUser,
} from 'react-icons/fa'

import {
  TbBooks,
} from 'react-icons/tb'

import {
  IoRocketSharp
} from 'react-icons/io5'

import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from "../app/user";
import CoachCard from './navCoachCard';

const LinkItems = [
  { name: 'Home', icon: FaHome, link: '/' },
  { name: 'Community', icon: FaUsers, link: 'community' },
  { name: 'Programs', icon: TbBooks, link: 'programs' },
  { name: 'Inbox', icon: FiMail, link: 'inbox' },
  { name: 'ACCOUNT PAGES', pointerEvents: "none" },
  { name: 'Profile', icon: FaUser, link: 'profile' },
  { name: 'Sign Up', icon: IoRocketSharp, link: 'signup' },
];



export default function Navbar({
  children,
}) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100%" bg="#f4f6f9">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Box ml={{ base: 0, md: 60 }} p="0">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg="#011936"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="./logo.svg" htmlWidth="75%"></Image>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} pEvents={link.pointerEvents} link={link.link}>
          {link.name}
        </NavItem>
      ))
      }
      <CoachCard />
    </Box>
  );
};


const NavItem = ({ icon, children, pEvents, link, ...rest }) => {
  const { view } = useSelector(state => state.user)
  let active = false;
  if (view === link) active = true;
  const dispatch = useDispatch();

  return (
    <RouterLink to={`${link}`} style={{ width: "100%" }} onClick={pEvents ?  undefined : () => {
      dispatch(changeView(link))}}
      >
      <Box style={{ textDecoration: 'none', pointerEvents: pEvents }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          p="4"
          my="4"
          mx="4"
          borderRadius="lg"
          fontSize={20}
          role="group"
          cursor="pointer"
          color={active ? "black" : "white"}
          bg={active && "white"}
          _hover={{
            bg: 'white',
            color: 'black',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="28"
              color={active ? "#27AF66" : "white"}
              _groupHover={{
                color: '#27AF66',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>

    </RouterLink>
  );
};
