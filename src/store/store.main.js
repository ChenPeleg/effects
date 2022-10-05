import { writable } from 'svelte/store';

/**@type{MainStore} */
const initialStore = {
	user: '',
	currentCard: 0,
	currentCardContent: null
};
export const MainStore = writable(initialStore);

export const MainStore2 = () => {
	const { subscribe, set, update } = writable(initialStore);
	const cardChosen = (/** @type {number} */ cardId) => {
		update((s) => {
			s.currentCard = cardId || 0;
			return s;
		});
	};
	return {
		subscribe,
		cardChosen
	};
};
