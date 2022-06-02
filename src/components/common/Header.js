import Menu from './Menu';
import { useState, useRef, useEffect } from 'react';
const path = process.env.PUBLIC_URL;

function Header(props) {
	const menu = useRef(null);
	const mo_btn = useRef(null);
	const header = useRef(null);
	const [toggle, setToggle] = useState(false);
	const clickMo = () => {
		setToggle(!toggle);
	};

	useEffect(() => {
		if (toggle) {
			menu.current.open();
			mo_btn.current.classList.add('show');
		} else {
			menu.current.close();
			mo_btn.current.classList.remove('show');
		}
	}, [toggle]);

	useEffect(() => {
		!props.fisrtSec
			? header.current.classList.add('header_firstSec')
			: header.current.classList.remove('header_firstSec');
	}, [props.fisrtSec]);
	return (
		<>
			<header className='header_main' ref={header}>
				<div className='inner'>
					<h1 className='logo'>
						<a href='#intro'>
							<img src={`${path}/img/my_logo.svg`} alt='로고' />
						</a>
					</h1>
					<button
						type='button'
						className='mo_btn'
						ref={mo_btn}
						onClick={() => {
							clickMo();
						}}>
						<span className='hidden'>모바일 메뉴버튼</span>
						<div className='bars'>
							<span className='bar top'></span>
							<span className='bar center'></span>
							<span className='bar bottom'></span>
						</div>
					</button>
					<nav id='gnb'>
						<ul>
							<li>
								<a href='#intro'>Intro</a>
							</li>
							<li>
								<a href='#about'>About me</a>
							</li>
							<li>
								<a href='#skill'>Skill</a>
							</li>
							<li>
								<a href='#portReact'>Portfolio</a>
							</li>

							<li>
								<a href='#proEtc'>Publisher</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<Menu ref={menu} toggle={toggle} setToggle={setToggle} />
		</>
	);
}

export default Header;
