import Player from '@vimeo/player';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Player(iframe);

player.on('timeupdate', function (data) {});

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
