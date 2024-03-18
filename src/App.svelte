<script>
  import Layout from "./lib/Layout.svelte";
  import {recordService} from './services/record.service.js';
  import {appConfig} from './config/appConfig.js';

  console.log(import.meta.env.VITE_MODE_NAME)
  if (appConfig.hasSaveOption) {
      recordService.init()
  }


</script>

<Layout />
