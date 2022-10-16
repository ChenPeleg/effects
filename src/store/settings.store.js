/**
 * @typedef ISetting
 * @prop {number | null} slotInEdit
 * @prop {string} userName
 */

import { writable } from "svelte/store";

/**@type {ISetting} */
const initialSettings = {
  slotInEdit: null,
  userName: "",
};

const createSettingsStore = (
  /**@type { ISetting} */
  initial
) => {
  const { set, update, subscribe } = writable(initial);

  const setSlotInEdit = (slotNumber) => {
    update((s) => {
      s.slotInEdit = slotNumber;
      return s;
    });
  };
  return { setSlotInEdit, subscribe };
};
export const SettingsStore = createSettingsStore(initialSettings);
