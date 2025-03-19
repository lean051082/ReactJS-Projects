import correctSound from './assets/katana.mp3';
import wrongSound from './assets/wrong.wav';

const correctAudio = new Audio(correctSound);
const wrongAudio = new Audio(wrongSound);

export function playCorrectSound() {
  correctAudio.currentTime = 0; // 🔄 Reinicia el sonido si se presiona rápido
  correctAudio.play();
}

export function playWrongSound() {
  wrongAudio.currentTime = 0; // 🔄 Reinicia el sonido si se presiona rápido
  wrongAudio.play();
}

export function getRnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
