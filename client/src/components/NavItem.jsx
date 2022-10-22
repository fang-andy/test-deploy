import React from 'react'
import {
	Flex,
	Text,
	Icon,
	Link,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	color,
	Box
} from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux';
import { changeView } from "../app/user";
import { Link as RouterLink } from 'react-router-dom';

export default function NavItem({ icon, title, navSize, pagePath }) {

	const dispatch = useDispatch();
	const { view } = useSelector(state => state.user)

	let active = false;
	if (view === pagePath) active = true;

	return (
		<Flex
			mt={30}
			flexDir="column"
			w="100%"
			alignItems={navSize == "small" ? "center" : "flex-start"}
		>
			<Menu placement="right">
				<RouterLink to={`/${pagePath}`} style={{ width: "100%" }} onClick={() => dispatch(changeView(pagePath))}>
					<Box
						role="group"
						backgroundColor={active && "white"}
						p={3}
						borderRadius={8}
						_hover={{ textDecor: 'none', backgroundColor: "white" }}
						w="100%"
					>
						<MenuButton w="100%" id="NavButton">
							<Flex>
								<Icon as={icon} fontSize="xl" _groupHover={{ color: "#27AF66" }} color={active ? "#27AF66" : "white"} />
								<Text ml={5} display={navSize == "small" ? "none" : "flex"} _groupHover={{ color: "black" }} color={active ? "black" : "white"}>{title}</Text>
							</Flex>
						</MenuButton>
					</Box>
				</RouterLink>
			</Menu>
		</Flex>
	)
}