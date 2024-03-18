import { writable } from "svelte/store";
import { CardStore } from "./store.cards";

const MAXIMUM_SOUND_TIME = 2000;

/**@type { MainStore } */
const initialStore = {
  user: "",
  currentCard: 0,
  currentCardContent: null,
  soundPlaying: true,
};

/**
 * @type {CardContent[]}
 */
let allCards = CardStore.getAllCards();

/**@type { HTMLAudioElement | null} */
let audio;

const CreateMainStore = () => {
  const { subscribe, set, update } = writable(initialStore);
  /**@type {NodeJS.Timeout } */
  let timeoutRef;
  const cardChosen = (/** @type {number} */ cardId) => {
    update((s) => {
      s.currentCard = cardId || 0;
      const card = allCards.find((c) => c.id === cardId);
      const fileName = card?.soundFile || "car_remote";
      if (!audio) {
        audio = new Audio();
        audio.addEventListener("ended", (event) => {
          update((s) => {
            s.currentCard = 0;
            return s;
          });
        });
      }
      audio.setAttribute("src", `/audio/${fileName}.mp3`);
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
const  setSoundPlaying = (/** @type {boolean} */ isPlaying) => {
    update((s) => {
      s.soundPlaying = isPlaying;

      return s;
    });
  };
  return {
    subscribe,
    cardChosen,
    setSoundPlaying
  };
};
export const MainStore = CreateMainStore();
