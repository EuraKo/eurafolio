import { forwardRef, useState, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.aside
						className={`pop ${props.type}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.3 } }}
						exit={{ opacity: 0, transition: { duration: 0.3 } }}>
						<div className='inner'>
							<motion.div className='con'>{props.children}</motion.div>
							<button
								type='button'
								className='close'
								onClick={() => {
									setOpen(false);
								}}>
								<span className='hidden'>close</span>
							</button>
						</div>
					</motion.aside>
				)}
			</AnimatePresence>
		</>
	);
});

export default Modal;
