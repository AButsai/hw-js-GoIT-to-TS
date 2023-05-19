import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe: HTMLIFrameElement | null = document.querySelector('iframe');

if (iframe instanceof HTMLIFrameElement) {
  const player = new Player(iframe);
  const VIDEO_PLAYER_CURRENT_TIME = 'video-player-current-time';
  const getTime = localStorage.getItem(VIDEO_PLAYER_CURRENT_TIME);

  if (getTime) {
    player.setCurrentTime(Number(getTime));
  }

  player.on(
    'timeupdate',
    throttle((event: { seconds: number; duration: number }) => {
      setLocalStorage(event);
    }, 250)
  );

  const setLocalStorage = (event: { seconds: number; duration: number }) => {
    localStorage.setItem(VIDEO_PLAYER_CURRENT_TIME, event.seconds.toString());
    if (event.seconds === event.duration) {
      localStorage.removeItem(VIDEO_PLAYER_CURRENT_TIME);
    }
  };
}
