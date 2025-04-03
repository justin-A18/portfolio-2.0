import { motion, useScroll } from 'motion/react';

const ScrollLinked = ({ children }: { children: React.ReactNode }) => {
	const { scrollYProgress } = useScroll();

	return (
		<>
			<motion.div
				id='scroll-indicator'
				style={{
					scaleX: scrollYProgress,
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					height: 5,
					originX: 0,
					backgroundColor: 'var(--color-primary)',
				}}
			/>

			{children}
		</>
	);
};

export default ScrollLinked;
