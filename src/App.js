// components
import Modal from './components/common/Modal';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Visual from './components/Visual';
import About from './components/About';
import Skill from './components/Skill';
import PortReact from './components/PortReact';
import PortEs6 from './components/PortEs6';
import PortNode from './components/PortNode';
import PortEtc from './components/PortEtc';

import './scss/style.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.PROJECT.start });
	}, []);

	return (
		<>
			<Header />
			<Visual />
			<About />
			<Skill />
			<PortReact />
			<PortEs6 />
			<PortNode />
			<PortEtc />
			<Footer />
			<Modal />
		</>
	);
}

export default App;
