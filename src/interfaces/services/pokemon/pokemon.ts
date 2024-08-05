export interface typesPokemon {
	type: {
		name: string;
	};
}

export interface responsePokemon {
	name: string;
	img: string;
	sprites: { front_default: string };
	types: typesPokemon[];
}

export interface responsePagePokemon {
	name: string;
	url: string;
}

export interface pokemon {
	name: string;
	img: string;
	types: typesPokemon[];
}
