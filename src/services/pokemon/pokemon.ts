import { QueryFunctionContext } from '@tanstack/react-query';
import { httpsRequest } from '../https-request';
import { POKEMON_ENDPOINT } from './constants/pokemon';
import {
	pokemon,
	responsePagePokemon,
	responsePokemon,
} from '@/interfaces/services/pokemon/pokemon';

export const PokemonService = () => {
	const { get, configRequest } = httpsRequest();

	const getPokemonById = async (id: string): Promise<pokemon> => {
		await new Promise((resolve) => setTimeout(resolve, 3000));

		configRequest({ endpoint: `pokemon/${id}` });
		let res = await get<responsePokemon>();
		let img = String(res.sprites.front_default);
		return {
			name: res.name,
			img,
			types: res.types,
		};
	};

	const getPokemonByName = async (name: string): Promise<pokemon> => {
		configRequest({ endpoint: `${POKEMON_ENDPOINT.POKEMON}/${name}` });
		let res = await get<responsePokemon>();
		let img = String(res.sprites.front_default);
		return {
			name: res.name,
			img,
			types: res.types,
		};
	};

	const getPokemons = async ({ pageParam = 1 }: QueryFunctionContext) => {
		let limit = 10;
		let offset = (Number(pageParam) - 1) * limit;
		configRequest({
			endpoint: `${POKEMON_ENDPOINT.POKEMON}?limit=${limit}&offset=${offset}`,
		});

		let resPagePokemon = await get<{
			next: string;
			results: responsePagePokemon[];
		}>();

		let resultAllPokemons = resPagePokemon.results.map(async (result) => {
			return await getPokemonByName(result.name);
		});

		let resultPromises = await Promise.all(resultAllPokemons);

		return {
			pokemones: resultPromises,
			nextCursor: resPagePokemon.next ? Number(pageParam) + 1 : null,
		};
	};

	return {
		getPokemonById,
		getPokemonByName,
		getPokemons,
	};
};
