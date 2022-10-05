import { writable } from 'svelte/store';

const MAXIMUM_SOUND_TIME = 2000;

/**@type{MainStore} */
const initialStore = {
	user: '',
	currentCard: 0,
	currentCardContent: null
};

const CreateMainStore = () => {
	const { subscribe, set, update } = writable(initialStore);
	/**@type {NodeJS.Timeout } */
	let timeoutRef;
	const cardChosen = (/** @type {number} */ cardId) => {
		update((s) => {
			s.currentCard = cardId || 0;
			return s;
		});
		clearTimeout(timeoutRef);
		timeoutRef = setTimeout(() => {
			update((s) => {
				s.currentCard = 0;
				return s;
			});
		}, MAXIMUM_SOUND_TIME);
	};
	return {
		subscribe,
		cardChosen
	};
};
export const MainStore = CreateMainStore();
