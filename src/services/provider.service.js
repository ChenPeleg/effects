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
        this.client.loadSavedRecords().then((data) => {
            console.log(data);
        });

        this.client.setClientActionCallBack = (data) => {
            switch (data.type) {
                case APPLinksClient.ApplinksClientEvents.UserWasSet:
                    console.log('UserWasSet');
                    break;
                case APPLinksClient.ApplinksClientEvents.UserLoggedOut:
                    console.log('UserWasRemoved');
                    break;
            }
            // MainStore.updateUser(this.client.user);
        };

    }, saveDebounce(data) {
        if (this.client === null) {
            return;
        }
        this.client.debounceSave(data);
    }, isLogged() {
        return this.client?.userStatus === APPLinksClient.Messages.UserWasSet;
    }
};
