import {APPLinksClient, ApplinksPanel} from '../provider/appLinksClient.js';

import {MainStore} from '../store/store.main.js';

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
            switch (data.type) {
                case APPLinksClient.ApplinksClientEvents.UserWasSet:

                    break;
                case APPLinksClient.ApplinksClientEvents.UserLoggedOut:

                    break;
            }
           MainStore.updateUser(this.client.user);
        };
        if (this.client.userStatus === APPLinksClient.Messages.UserWasSet) {
            this.client.loadSavedRecords().then((data) => {
console.log(data)
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
