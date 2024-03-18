import {APPLinksClient} from '../provider/appLinksClient.js';

export const recordService = {
    client: null, init() {
        this.client = new APPLinksClient('effects-EFX107', {
            useDefaultPanel: true, useLocalStorage: true});
    }
};
