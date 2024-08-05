'use client';
import { PokemonService } from '@/services/pokemon/pokemon';
import { Card } from '@/components/card/Card';
// import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
const url = process.env.NEXT_PUBLIC_BASE_URL;
const PokemonID = ({ params }: any) => {
	// const [data, setData] = useState({} as { name: string; img: string });

	const { getPokemonByName } = PokemonService();

	const { isLoading, isError, data } = useQuery({
		queryKey: ['pokemon'],
		queryFn: async () => await getPokemonByName(params.id),
	});

	return (
		<div className="flex justify-center items-center h-screen">
			{isLoading && <div>cargando...</div>}
			{isError && <div>:V error papu error</div>}
			{data && <Card data={data} />}
		</div>
	);
};

export default PokemonID;
