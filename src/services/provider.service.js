import {APPLinksClient, ApplinksPanel} from '../provider/appLinksClient.js';

import {MainStore} from '../store/store.main.js';
import {storageService} from './storage.service.js';
import {categoryStore} from '../store/store.custom.js';

export const providerService = {
    /**
     * @type {APPLinksClient | null}
     */
    client: null, init() {
        this.client = new APPLinksClient('effects-EFX107', {
            useClientPanel: true,
            useLocalStorage: true,
            panelOptions: new ApplinksPanel.Options({
                panelType: ApplinksPanel.Options.PanelType.rounded,
                x: 2,
                y: 7,
                sizeModifier: 115
            })
        });


        this.client.setClientActionCallBack = (data) => {
            console.log(data)
            switch (data.type) {
                case APPLinksClient.ApplinksClientEvents.UserWasSet:

                    break;
                case APPLinksClient.ApplinksClientEvents.UserLoggedOut:

                    break;
            }
            let user = this.client.user;
            if (this.client.userStatus === APPLinksClient.Messages.UserNotSet) {
                user = null;
            }
            MainStore.updateUser(user);
        };
        if (this.client.userStatus === APPLinksClient.Messages.UserIsSet) {
            this.client.loadSavedRecords().then((data) => {

                const timeStampFromProvider = data.app_data.timestamp;

                const timestampFromLs = storageService.getTimeStampFromLs();
                if (+timeStampFromProvider > +timestampFromLs) {
                    categoryStore.updateAllCategoriesFromSave(data.app_data.CustomCategories);
                }


            });
        }


    }, saveDebounce(data) {
        if (this.client === null) {
            return;
        }
        this.client.debounceSave(data);
    }, isLogged() {
        return this.client?.userStatus === APPLinksClient.Messages.UserWasSet;
    }
};
