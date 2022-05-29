import { NavLink } from 'react-router-dom';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	const clickBg = (e) => {
		if (e.target.classList.contains('mob_menu')) {
			setOpen(false);
			props.setToggle(!props.toggle);
		}
	};

	return (
		<AnimatePresence>
			{open && (
				<motion.nav
					className='mob_menu'
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
					}}
					exit={{ opacity: 0 }}
					onClick={(e) => clickBg(e)}>
					<motion.ul
						id='gnb'
						initial={{ x: -200 }}
						animate={{
							x: 0,
							transition: { type: 'spring', bounce: 0 },
						}}
						exit={{ x: -200 }}>
						<motion.li
							initial={{ opacity: 0, x: -20 }}
							animate={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.1 },
							}}
							exit={{ opacity: 0, x: -20 }}>
							<a href='#intro'>intro</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, x: -20 }}
							animate={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.2 },
							}}
							exit={{ opacity: 0, x: -20 }}>
							<a href='#about'>about</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, x: -20 }}
							animate={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.3 },
							}}
							exit={{ opacity: 0, x: -20 }}>
							<a href='#skill'>skill</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, x: -20 }}
							animate={{
								opacity: 1,
								x: 0,
								transition: { delay: 0.4 },
							}}
							exit={{ opacity: 0, x: -20 }}>
							<a href='#portfolio'>prtrfolio</a>
						</motion.li>
					</motion.ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
