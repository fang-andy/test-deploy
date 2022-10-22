import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Community from './pages/Community';
import Inbox from './pages/Inbox';
import Programs from './pages/Programs';
import Profile from './pages/Profile';
import SignUp from "./pages/SignUp";
import Home_CJ from './pages/Home_CJ';
import Home_Connections from './pages/Home_Connections';
import Header from './components/Header';

import './stylesheets/App.css';
import '@fontsource/dm-sans';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
	Navigate,
} from "react-router-dom";

const breakpoints = {
	xs: '600px',
	sm: '800px',
	md: '1250px',
	lg: '1600px',
	xl: '1920px',
	'2xl': '2560px'
}

const theme = extendTheme({
	fonts: {
		heading: `'DM Sans', sans-serif`,
		body: `'DM Sans', sans-serif`,
	},
	breakpoints
})




const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<div id='main'>
					<Navbar />
					<div id='content'>
						<Header />
						<Switch>
							<Route exact path="/" element={<Home />} />
							<Route path="/community" element={<Community />} />
							<Route path="/programs" element={<Programs />} />
							<Route path="/inbox" element={<Inbox />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/signUp" element={<SignUp />} />
							<Route path="/cj" element={<Home_CJ />}></Route>
							<Route path="/connections" element={<Home_Connections />}></Route>
							<Route path="*" element={<Navigate to="/" replace />} />
						</Switch>
					</div>
				</div>
			</Router>
		</ChakraProvider>
	)
}

export default App