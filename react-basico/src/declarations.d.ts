/// <reference types="vite/client"/>

interface ImportMetaEnv {
	readonly VITE_API_BASE: string;
}

declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}
declare module '*.scss';
declare module '*.svg';

declare module '*.jpg' {
	const content: string;
}

declare module '*.png' {
	const content: string;
}

declare module '*.json' {
	const content: string;
}

declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}
