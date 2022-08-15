
import { writable } from "svelte/store";
import { reducer } from "./reducer";


/**@typedef { (action: any) => void } Dispatch */
/**@typedef { (this: void, run: import("svelte/store").Subscriber<any>, invalidate?: any ) => import("svelte/store").Unsubscriber} Subscribe */


/**
 * 
 * @param {Reducer} reducer the reducer function
 * @param {StoreModel} initialState 
 * @returns  {{subscribe :Subscribe,dispatch :Dispatch}}
 */
const createStore = (reducer, initialState) => {
    const { subscribe, update } = writable(initialState);

    /**@type {ReactDispatcher} */
    const dispatch = (action) => update((state) => reducer(state, action));
    return { subscribe, dispatch };
};


/**@type {StoreModel} */
const initialStore = {
    user: "",
    currentCard: 0,
    currentCardContent: undefined
};


export const ReactStore = createStore(reducer, initialStore);