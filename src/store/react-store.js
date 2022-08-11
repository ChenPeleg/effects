
import { writable } from "svelte/store";
/** @template {any} T */
/**@typedef {(value: T) => void} Subscriber<T> */
/**@prams {T} value2*/



/*-@typedef {  (this: void, run: Subscriber<any>, invalidate?: Invalidator<any>) => Unsubscriber} subscribe */

// function firstElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0];
//   }

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