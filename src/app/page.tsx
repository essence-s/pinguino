import { Main } from '@/components/main/Main';

const url = process.env.NEXT_BASE_URL;

export default function Home() {
	// console.log('ds', url);
	return <Main url={url} />;
}
