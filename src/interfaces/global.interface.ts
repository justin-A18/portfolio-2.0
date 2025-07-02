export interface Technology {
	title: string;
	stack: Stack[];
};

export interface Stack {
	icon: (_props: Record<string, any>) => any;
	name: string;
};

export interface Experience {
	title: string;
	company: string;
	date: string;
}