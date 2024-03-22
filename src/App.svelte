<script>
    import Layout from "./lib/Layout.svelte";

    import {CardStore} from './store/store.cards.js';
    import {MainStore} from './store/store.main.js';
 //   import {providerService} from './services/provider.service.js';
    import {appConfig} from './config/appConfig.js';

    void (CardStore && MainStore);
    if (appConfig.hasSaveOption) {
      //  providerService.init();
    }


</script>

<Layout/>
