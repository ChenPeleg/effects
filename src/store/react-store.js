
import { writable } from "svelte/store";


/**@typedef { (action: any) => void } Dispatch */
/**@typedef { (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: any ) => import("svelte/store").Unsubscriber} Subscribe */


/**
 * 
 * @param {any} reducer the reducer function
 * @param {any} initialState 
 * @returns  {{subscribe :Subscribe,dispatch :Dispatch}}
 */
const createStore = (reducer, initialState) => {
    const { subscribe, update } = writable(initialState);
    const dispatch = (action) => update((state) => reducer(state, action));
    return { subscribe, dispatch };
};



const initialStore = {
    user: "",
    currentCard: 0,
    currentCardContent: undefined
};


export const MainStore = writable(initialStore);