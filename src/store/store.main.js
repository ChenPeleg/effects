import { writable } from 'svelte/store';
//import { CardsStore } from './store.cards';

const MAXIMUM_SOUND_TIME = 2000;

/**@type{MainStore} */
const initialStore = {
	user: '',
	currentCard: 0,
	currentCardContent: null
};

/**
 * @type {CardContent[]}
 */
let allCards;
//CardsStore.subscribe((c) => (allCards = c));

const CreateMainStore = () => {
	const { subscribe, set, update } = writable(initialStore);
	/**@type {NodeJS.Timeout } */
	let timeoutRef;
	const cardChosen = (/** @type {number} */ cardId) => {
		update((s) => {
			s.currentCard = cardId || 0;
			const audio = new Audio(`audio/${'car_remote'}.mp3`);
			audio.play();

			//	const card = allCards.find((c) => c.id === cardId);
			// if (card) {
			// 	card.audioElement?.load();
			// 	card.audioElement?.play();
			// }

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
