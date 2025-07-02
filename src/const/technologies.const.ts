import TypeScriptIcon from '../assets/icons/TypeScriptIcon.astro';
import TailwindIcon from '../assets/icons/TailwindIcon.astro';
import JestIcon from '../assets/icons/JestIcon.astro';
import NextIcon from '../assets/icons/NextIcon.astro';
import ReactIcon from '../assets/icons/ReactIcon.astro';
import ReduxIcon from '../assets/icons/ReduxIcon.astro';
import AstroIcon from '../assets/icons/AstroIcon.astro';
import NestIcon from '../assets/icons/NestIcon.astro';
import ExpressIcon from '../assets/icons/ExpressIcon.astro';
import MongoDBIcon from '../assets/icons/MongoDBIcon.astro';
import PostgreSQLIcon from '../assets/icons/PostgreSQLIcon.astro';
import LinuxIcon from '../assets/icons/LinuxIcon.astro';
import BashIcon from '../assets/icons/BashIcon.astro';
import GitIcon from '../assets/icons/GitIcon.astro';
import DockerIcon from '../assets/icons/DockerIcon.astro';


export const TECHNOLOGIES = [
	{
		title: "Frontend",
		stack: [
			{
				name: 'TypeScript',
				icon: TypeScriptIcon
			},
			{
				name: 'React',
				icon: ReactIcon,
			},
			{
				name: 'Next Js',
				icon: NextIcon,
			},
			{
				name: 'Astro',
				icon: AstroIcon,
			},
			{
				name: 'Redux',
				icon: ReduxIcon,
			},
			{
				name: 'Tailwind CSS',
				icon: TailwindIcon,
			},
			{
				name: 'Jest',
				icon: JestIcon,
			},
		]
	},
	{
		title: "Backend",
		stack: [
			{
				name: 'Express Js',
				icon: ExpressIcon,
			},
			{
				name: 'Nest Js',
				icon: NestIcon,
			}
		]
	},
	{
		title: "Database",
		stack: [
			{
				name: 'PostgreSQL',
				icon: PostgreSQLIcon,
			},
			{
				name: 'MongoDB',
				icon: MongoDBIcon,
			}
		]
	},
	{
		title: "Tools",
		stack: [
			{
				name: 'Linux',
				icon: LinuxIcon,
			},
			{
				name: 'Bash',
				icon: BashIcon,
			},
			{
				name: 'Git',
				icon: GitIcon,
			},
			{
				name: 'Docker',
				icon: DockerIcon,
			}
		]
	},
];