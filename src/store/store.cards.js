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
  { color: "blue", soundFile: "scream_1", name: "scream", id: 3, icon: "😱" },
  {
    color: "blue",
    soundFile: "applause_1",
    name: "clapping",
    id: 4,
    icon: "👏",
  },
  { color: "green", soundFile: "psycho", name: "psycho", id: 5, icon: "🔪" },
  {
    color: "red",
    soundFile: "toilet",
    name: "toilet",
    id: 6,
    icon: "🚽",
  },
  { color: "blue", soundFile: "winning", name: "winning", id: 7, icon: "🏆" },
  {
    color: "blue",
    soundFile: "door-bell",
    name: "door bell",
    id: 8,
    icon: "🚚",
  },
  {
    color: "blue",
    soundFile: "glass-breaking",
    name: "glass breaking",
    id: 9,
    icon: "🔨",
  },
  { color: "blue", soundFile: "snoring", name: "snoring", id: 10, icon: "😴" },
  { color: "blue", soundFile: "gong", name: "gong", id: 11, icon: "🔔" },
  { color: "blue", soundFile: "fart", name: "fart", id: 12, icon: "💩" },
  { color: "blue", soundFile: "alien", name: "alien", id: 13, icon: "👽" },
  { color: "blue", soundFile: "kiss", name: "kiss", id: 14, icon: "💋" },
  { color: "blue", soundFile: "wrong", name: "wrong", id: 15, icon: "👎" },
  { color: "blue", soundFile: "magic", name: "magic", id: 16, icon: "🧙" },
  { color: "blue", soundFile: "joke-drums", name: "game", id: 17, icon: "🎮" },
  { color: "blue", soundFile: "alarm", name: "alarm", id: 18, icon: "⏰" },
  { color: "blue", soundFile: "slayer", name: "slayer", id: 19, icon: "🎸" },
  {
    color: "blue",
    soundFile: "twilight-zone",
    name: "twilight zone",
    id: 20,
    icon: "💀",
  },
  {
    color: "blue",
    soundFile: "mizrahi",
    name: "mizrahi",
    id: 21,
    icon: "🎤",
  },
  {
    color: "blue",
    soundFile: "stop",
    name: "stop",
    id: 22,
    icon: "🎹",
  },
];
const allCardsWithAudio = allCards.map((c) => ({
  ...c,
  audioElement: AudioService.getAudioElement(c),
}));
export const CardsStore = readable(allCards);
