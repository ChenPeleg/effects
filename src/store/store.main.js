import {writable} from "svelte/store";
import {CardStore} from "./store.cards";
import {appConfig} from '../config/appConfig.js';

const MAXIMUM_SOUND_TIME = 2000;




/**@type { MainStore } */
const initialStore = {
    user: "",
    currentCard: 0, currentCardContent: null,
        soundPlaying:
            localStorage.getItem('soundIs' )  === 'on',
};



/**@type { HTMLAudioElement | null} */
let audio;

const CreateMainStore = () => {
    const {subscribe, set, update} = writable(initialStore);
    /**@type {NodeJS.Timeout } */
    let timeoutRef;
    const cardChosen = (/** @type {number} */ cardId) => {
        update((s) => {
            s.currentCard = cardId || 0;
            const card = CardStore.getAllCards().find((c) => c.id === cardId);
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

            audio.setAttribute("src", `${appConfig.soundUrlPrefix}/audio/${fileName}.mp3`);
            audio.load();
            if (audio) {
                audio.volume = s.soundPlaying  ? 1 : 0;
            }
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
    const setSoundPlaying = (/** @type {boolean} */ isPlaying) => {
        update((s) => {
            s.soundPlaying = isPlaying;
            localStorage.setItem('soundIs' , isPlaying ? 'on' : 'off')
            if (audio) {
                audio.volume = isPlaying ? 1 : 0;
            }
            return s;
        });
    };

    return {
        subscribe, cardChosen, setSoundPlaying, updateUser: (/** @type {string} */ user) => {
            update((s) => {
                s.user = user;
                return s;
            });
        }
    };
};
export const MainStore = CreateMainStore();
