'use client';
import { PokemonService } from '@/services/pokemon/pokemon';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { Card } from '../card/Card';
import Link from 'next/link';

export const Main = () => {
	const { getPokemons } = PokemonService();
	const {
		data,
		fetchNextPage,
		// hasNextPage,
		isFetching,
		// isFetchingNextPage,
		// status,
	} = useInfiniteQuery({
		queryKey: ['postdsda'],
		queryFn: (context: QueryFunctionContext) => getPokemons(context),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => lastPage.nextCursor,
	});

	console.log(data);
	const pokemones = data?.pages.flatMap((page) => page.pokemones);

	return (
		<div className="p-10">
			<div className="grid grid-cols-[repeat(5,150px)] gap-2 justify-center items-center">
				{pokemones &&
					pokemones.map((pokemon) => (
						<Link key={`${pokemon.name}`} href={`/pokemon/${pokemon.name}`}>
							<Card data={pokemon}></Card>
						</Link>
					))}
			</div>
			{isFetching && <div className="text-center">cargando ...</div>}

			<button
				className="border-2 border-white rounded p-2 m-auto block mt-5"
				onClick={() => fetchNextPage()}
			>
				More Results
			</button>
		</div>
	);
};
