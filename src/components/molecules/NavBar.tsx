import { useEffect, useState } from 'react';
import { NAVLINKS } from '../../const/links.const';

const NavBar = () => {
	const [currentHash, setCurrentHash] = useState('');

	useEffect(() => {
		setCurrentHash(window.location.hash);

		const handleHashChange = () => {
			setCurrentHash(window.location.hash);
		};

		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	return (
		<header className='fixed top-1 z-10 flex items-center justify-center w-full mx-auto mt-2'>
			<nav className='flex px-3 text-sm font-medium rounded-full text-gray-200 justify-center items-center bg-neutral-700'>
				{NAVLINKS.map(({ href, name }) => (
					<a
						key={name}
						className={`relative block px-2 py-2 transition hover:text-amber-500 ${
							currentHash === href || (name === 'Home' && currentHash === '')
								? 'text-amber-500'
								: ''
						} cursor-pointer`}
						href={href}>
						{name}
					</a>
				))}
			</nav>
		</header>
	);
};

export default NavBar;
