import './app.css'
import { mount } from 'svelte'
import App from './App.svelte'
import { CardStore } from './store/store.cards.js'

const app = mount(App, {
  target: document.getElementById('app')
})

export default app
