import { readable } from 'svelte/store';

const allCards = [
	{ color: 'green', content: 'car keys', name: 'car', id: 1 },
	{ color: 'red', content: 'laughing kid', name: 'laugh', id: 2 },
	{ color: 'blue', content: 'scream', name: 'scream', id: 3 },
	{ color: 'blue', content: 'clapping', name: 'clapping', id: 4 },
	{ color: 'green', content: 'car keys', name: 'horn', id: 5 },
	{ color: 'red', content: 'laughing kid', name: 'laugh 2', id: 6 },
	{ color: 'blue', content: 'scream', name: 'winning', id: 7 },
	{ color: 'blue', content: 'clapping', name: 'boo', id: 8 }
];
export const CardsStore = readable(allCards);
