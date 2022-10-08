import { AudioService } from "../services/audio.service";
import { readable } from "svelte/store";
/**@type {CardContent []} */
const allCards = [
  {
    color: "green",
    soundFile: "car-keys",
    name: "car keys",
    id: 1,
    icon: "🚗",
  },
  { color: "red", soundFile: "laughing-kid", name: "laugh", id: 2, icon: "😂" },
  { color: "blue", soundFile: "applause_1", name: "scream", id: 3, icon: "😱" },
  { color: "blue", soundFile: "clapping", name: "clapping", id: 4, icon: "👏" },
  { color: "green", soundFile: "psycho", name: "psycho", id: 5, icon: "🔪" },
  {
    color: "red",
    soundFile: "toilet-flushing",
    name: "toilet",
    id: 6,
    icon: "🚽",
  },
  { color: "blue", soundFile: "winning", name: "winning", id: 7, icon: "🏆" },
  { color: "blue", soundFile: "reverse", name: "reverse", id: 8, icon: "🚚" },
  { color: "blue", soundFile: "joke-drums", name: "stop", id: 9, icon: "📛" },
  { color: "blue", soundFile: "joke-drums", name: "burp", id: 10, icon: "💨" },
  { color: "blue", soundFile: "joke-drums", name: "doh!", id: 11, icon: "🤦‍♂️" },
  { color: "blue", soundFile: "joke-drums", name: "fart", id: 12, icon: "💩" },
  { color: "blue", soundFile: "joke-drums", name: "alien", id: 13, icon: "👽" },
  { color: "blue", soundFile: "joke-drums", name: "kiss", id: 14, icon: "💋" },
  { color: "blue", soundFile: "joke-drums", name: "boo", id: 15, icon: "👎" },
  { color: "blue", soundFile: "joke-drums", name: "magic", id: 16, icon: "🧙" },
  { color: "blue", soundFile: "joke-drums", name: "train", id: 17, icon: "🚂" },
  { color: "blue", soundFile: "joke-drums", name: "alarm", id: 18, icon: "⏰" },
  { color: "blue", soundFile: "joke-drums", name: "game", id: 19, icon: "🎮" },
  { color: "blue", soundFile: "joke-drums", name: "song", id: 20, icon: "🎵" },
  {
    color: "blue",
    soundFile: "joke-drums",
    name: "song 2",
    id: 21,
    icon: "🎤",
  },
  {
    color: "blue",
    soundFile: "joke-drums",
    name: "song 3",
    id: 21,
    icon: "🎹",
  },
];
const allCardsWithAudio = allCards.map((c) => ({
  ...c,
  audioElement: AudioService.getAudioElement(c),
}));
export const CardsStore = readable(allCards);
