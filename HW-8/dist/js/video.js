import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
var iframe = document.querySelector('iframe');
if (iframe instanceof HTMLIFrameElement) {
    var player = new Player(iframe);
    var VIDEO_PLAYER_CURRENT_TIME_1 = 'video-player-current-time';
    var getTime = localStorage.getItem(VIDEO_PLAYER_CURRENT_TIME_1);
    if (getTime) {
        player.setCurrentTime(Number(getTime));
    }
    player.on('timeupdate', throttle(function (event) {
        setLocalStorage_1(event);
    }, 250));
    var setLocalStorage_1 = function (event) {
        localStorage.setItem(VIDEO_PLAYER_CURRENT_TIME_1, event.seconds.toString());
        if (event.seconds === event.duration) {
            localStorage.removeItem(VIDEO_PLAYER_CURRENT_TIME_1);
        }
    };
}
//# sourceMappingURL=video.js.map