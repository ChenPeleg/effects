import { writable } from 'svelte/store';
import { CardsStore } from './store.cards';

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

/**@type { HTMLAudioElement | null} */
let audio;
CardsStore.subscribe((c) => (allCards = c));

const CreateMainStore = () => {
	const { subscribe, set, update } = writable(initialStore);
	/**@type {NodeJS.Timeout } */
	let timeoutRef;
	const cardChosen = (/** @type {number} */ cardId) => {
		update((s) => {
			s.currentCard = cardId || 0;
			const card = allCards.find((c) => c.id === cardId);
			const fileName = card?.content || 'car_remote';
			if (!audio) {
				audio = new Audio();
				audio.addEventListener('ended', (event) => {
					update((s) => {
						s.currentCard = 0;
						return s;
					});
				});
			}
			audio.setAttribute('src', `audio/${fileName}.mp3`);
			audio.load();
			audio.play();
			return s;
		});
		clearTimeout(timeoutRef);
		timeoutRef = setTimeout(() => {
			// update((s) => {
			// 	s.currentCard = 0;
			// 	return s;
			// });
		}, MAXIMUM_SOUND_TIME);
	};
	return {
		subscribe,
		cardChosen
	};
};
export const MainStore = CreateMainStore();
