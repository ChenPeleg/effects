import { writable } from "svelte/store";

/**@type{MainStore} */
const initialStore = {
    user: "",
    currentCard: 0,
    currentCardContent: undefined
}
export const MainStore = writable(initialStore)