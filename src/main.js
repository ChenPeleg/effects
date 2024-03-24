import './app.css'
import App from './App.svelte'
import { CardStore } from './store/store.cards.js'
const app = new App({
  target: document.getElementById('app')
})

export default app
