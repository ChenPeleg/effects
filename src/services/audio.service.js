export const AudioService = {
  /**
   * @param {CardContent} card
   * @return {any}
   */
  getAudioElement(card) {
    // const assets = require.context('../assets/sounds', true);
    // const loadSound = (fileName ) => assets(`./${fileName}`).default;
    // return  [].map((bird ) => {
    // 	const birdAudioElement= new Audio(loadSound(bird.mainSound));
    // 	return {
    // 		birdId: bird.id,
    // 		audioElement: birdAudioElement
    // 	};
    // });
    //const imp = import();
    return null; // new Audio('../assets/sound/car_remote.mp3');
  },
};
