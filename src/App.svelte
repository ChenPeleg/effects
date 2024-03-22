<script>
  import Layout from "./lib/Layout.svelte";
  import {providerService} from './services/provider.service.js';
  import {appConfig} from './config/appConfig.js';

  console.log(import.meta.env.VITE_MODE_NAME)
  if (appConfig.hasSaveOption) {
      providerService.init()
  }


</script>

<Layout />
