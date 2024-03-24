import {providerService} from './provider.service.js';


const LS_KEY = "effects_data";
const CUSTOM_CATEGORIES = "CustomCategories";
const LAST_CATEGORY = "LastSelection";

export const storageService = {
    saveCategories: (cats /**@type {CustomCategory []} */) => {
        const stringifiedData = localStorage.getItem(LS_KEY);
        let data;
        if (!stringifiedData) {
            data = {};
        } else {
            data = JSON.parse(stringifiedData);
        }
        data[CUSTOM_CATEGORIES] = cats;
        data.timestamp = new Date().getTime();
        localStorage.setItem(LS_KEY, JSON.stringify(data));
        // providerService.saveDebounce(data);
    }, getCategories: () => {
        const stringifiedData = localStorage.getItem(LS_KEY);
        let data = {};
        if (stringifiedData) {
            data = JSON.parse(stringifiedData);
        }
        return data[CUSTOM_CATEGORIES] || null;
    }, saveSelection: (cat) => {
        const stringifiedData = localStorage.getItem(LS_KEY);
        let data;
        if (!stringifiedData) {
            data = {};
        } else {
            data = JSON.parse(stringifiedData);
        }
        data[LAST_CATEGORY] = cat;
        data.timestamp = new Date().getTime();
        localStorage.setItem(LS_KEY, JSON.stringify(data));
        providerService.saveDebounce(data);

    }, getSelection: () => {
        const stringifyData = localStorage.getItem(LS_KEY);
        let data = {};
        if (stringifyData) {
            data = JSON.parse(stringifyData);
        }
        return data[LAST_CATEGORY] || null;
    },
};
