import { AudioService } from '../services/audio.service';
import { readable } from 'svelte/store';
/**@type {CardContent []} */
const allCards = [
	{ color: 'green', content: 'car-keys', name: 'car keys', id: 1, icon: '🚗' },
	{ color: 'red', content: 'laughing-kid', name: 'laugh', id: 2, icon: '😂' },
	{ color: 'blue', content: 'scream', name: 'scream', id: 3, icon: '😱' },
	{ color: 'blue', content: 'clapping', name: 'clapping', id: 4, icon: '👏' },
	{ color: 'green', content: 'psycho', name: 'psycho', id: 5, icon: '🔪' },
	{ color: 'red', content: 'toilet-flushing', name: 'toilet', id: 6, icon: '🚽' },
	{ color: 'blue', content: 'winning', name: 'winning', id: 7, icon: '🏆' },
	{ color: 'blue', content: 'reverse', name: 'reverse', id: 8, icon: '🚚' },
	{ color: 'blue', content: 'joke-drums', name: 'joke', id: 9, icon: '🥁' }
];
const allCardsWithAudio = allCards.map((c) => ({
	...c,
	audioElement: AudioService.getAudioElement(c)
}));
export const CardsStore = readable(allCards);
