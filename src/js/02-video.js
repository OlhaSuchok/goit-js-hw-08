import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframe);

player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(event) {
  const currentTimeStorage = event;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTimeStorage));
  console.log(event);
}

const сurrentTime = localStorage.getItem(LOCALSTORAGE_KEY);
const parseCurrentTime = JSON.parse(сurrentTime);
const { seconds } = parseCurrentTime;

player
  .setCurrentTime(seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
