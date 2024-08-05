import { colorback, getStyleTypes } from '@/util/fnPokemon';

export const Card = ({ data }: PropsCard) => {
	return (
		<div className="max-w-40 bg-[#0d0f15] text-white rounded-lg h-[178px] px-3 flex flex-col justify-center items-center overflow-hidden relative text-center border-[1px] border-[#ffffff12] ">
			<div
				className="w-[120%] h-[76%] absolute rounded-[50%] -top-10 left-[-10%] opacity-50"
				style={{ background: colorback(data.types[0].type.name) }}
			></div>
			<div className="relative flex flex-col justify-center items-center gap-1">
				<img src={data.img && data.img} alt="" className="aspect-square w-24" />
				<div className="font-semibold text-lg text-center">{data.name}</div>
				<div className="text-xs flex justify-center gap-1">
					{data.types.map((dataType) => {
						return (
							<span
								key={dataType.type.name}
								style={getStyleTypes(dataType.type.name)}
							>
								{dataType.type.name}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
};
type typesPokemon = {
	type: {
		name: string;
	};
};
type PropsCard = {
	data: {
		name: string;
		img: string;
		types: typesPokemon[];
	};
	// types: string;
};
