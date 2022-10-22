
import React from 'react';
import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  useDisclosure,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Drawer,
  DrawerContent,
  CloseButton,
  Link,
  Icon
} from '@chakra-ui/react';

import {
  FiMenu,
  FiBell,
  FiChevronDown,
  FiMail
} from 'react-icons/fi';

import {
  FaHome,
  FaUsers,
  FaUser,
} from 'react-icons/fa';

import {
  TbBooks,
} from 'react-icons/tb';

import {
  IoRocketSharp
} from 'react-icons/io5';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header({ ...rest }) {
  const { first_name, photo} = useSelector(state => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let avatar = structuredClone(photo);

  return (
    <>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="lg"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Flex
        ml={{ base: 0, md: 0 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        w="100%"
        pr="10%"
        bg={{ base: '#011936', md: 'none' }}
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          bg={{ base: 'white', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Image display={{base: 'flex', md:'none'}} src="./logo.svg" htmlWidth="25%" htmlHeight="25%"></Image>

        <HStack spacing={{ base: '0', md: '6' }}>
          <IconButton
            size="md"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
            bg="white"
            color="black"
            borderRadius={22.5}
            boxShadow="0px 1px 2px grey"
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={0.5}
                pr={2.5}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}
                bg="white"
                borderRadius={20}
                boxShadow="0px 1px 2px grey"
              >
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={avatar ? avatar.pop() : undefined}
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-end"
                    w="100%"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm" fontWeight={600}>{first_name}</Text>
                  </VStack>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue('white', 'gray.900')}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <MenuItem>Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};

const LinkItems = [
  { name: 'Home', icon: FaHome, link: '/' },
  { name: 'Community', icon: FaUsers, link:'/community'},
  { name: 'Programs', icon: TbBooks, link:'/programs' },
  { name: 'Inbox', icon: FiMail, link:'/inbox' },
  { name: 'ACCOUNT PAGES', pointerEvents: "none"},
  { name: 'Profile', icon: FaUser, link:'/profile' },
  { name: 'Sign Up', icon: IoRocketSharp, link:'/signup' },
];

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
      <Flex h="40" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} bg="white" w="40px" h="40px" onClick={onClose} _hover={{color:"black"}}/>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} pEvents={link.pointerEvents}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
const NavItem = ({ icon, children, onClose,pEvents, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none', pointerEvents: pEvents }} _focus={{ boxShadow: 'none' }} onClick={onClose}>
      <Flex
        display="flex"
        justifyContent="center"
        align="center"
        fontSize={30}
        p="0"
        py="10"
        mx="0"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="white"
        _hover={{
          bg: 'white',
          color: 'black',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="60"
            _groupHover={{
              color: '#27AF66',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};