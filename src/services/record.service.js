import {APPLinksClient, ApplinksPanel} from '../provider/appLinksClient.js';

export const recordService = {
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

    }, saveDebounce(data) {
        if (this.client === null) {
            return;
        }
        this.client.debounceSave(data);
    }
};
