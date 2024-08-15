'use client';
import { useEffect, useRef } from 'react';

type Props = {};
export default function DragAndDrop({}: Props) {
	let elementDrag = useRef<HTMLDivElement>(null);
	let dino = useRef<HTMLDivElement>(null);

	useEffect(() => {
		elementDrag.current?.addEventListener('dragover', (event) => {
			event.preventDefault();
		});

		elementDrag.current?.addEventListener('drop', (event) => {
			event.preventDefault();
			let imageContainer = dino.current;
			// console.log('hola dropeaste');
			const files = event.dataTransfer?.files;

			if (files?.length) {
				const img = document.createElement('img');
				img.src = URL.createObjectURL(files[0]);
				img.style.maxWidth = '100%';
				imageContainer?.appendChild(img);
				// console.log({ imageContainer, img });
			} else {
				const text = event.dataTransfer?.getData('text');
				console.log(text);
			}
		});

		elementDrag.current?.addEventListener('paste', (event) => {
			// console.log('pasteo');
			// let clipboardData = (event.clipboardData || window.clipboardData).getData(
			// 	'text'
			// );
			// console.log(clipboardData);
			// console.log(event);
			// const items = clipboardData.items;
			// let imageContainer = dino.current;

			// for (let i = 0; i < items.length; i++) {
			// 	if (items[i].type.startsWith('image/')) {
			// 		const file = items[i].getAsFile();
			// 		const img = document.createElement('img');
			// 		img.src = URL.createObjectURL(file);
			// 		imageContainer?.appendChild(img);
			// 	}
			// }

			const clipboardData: any = event.clipboardData;
			const items = clipboardData.items;
			let imageContainer = dino.current;
			for (let i = 0; i < items.length; i++) {
				if (items[i].type.startsWith('image/')) {
					const file = items[i].getAsFile();
					const img = document.createElement('img');
					img.src = URL.createObjectURL(file);
					imageContainer?.appendChild(img);
				}
			}
		});
	}, []);

	return (
		<div className="flex justify-center items-center flex-col h-dvh">
			<div
				ref={elementDrag}
				// contentEditable="true"
				className="border-2 border-dashed border-white p-5 rounded text-center w-[350px]"
			>
				Arrastra aqui pé
			</div>

			<div ref={dino}></div>
			<button className="border-white border-2 p-3 mt-5 rounded">
				Apachurrame
			</button>
		</div>
	);
}
