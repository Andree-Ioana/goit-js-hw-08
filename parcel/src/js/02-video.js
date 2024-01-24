
import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Vimeo(iframe);
const localStorageKey = 'videoplayer-current-time';

player.on('loaded', () => {
    const saveTime = localStorage.getItem(localStorageKey) || '';
    player.setCurrentTime(saveTime).the(function(seconds) {

    }).catch(function(error) {
        switch(error.name){
            case 'RangeError':
                break;
                default:
                    break;
        }
    });
   
});

player.on('timeupdate', _throttle(({seconds})=> {
     localStorage.setItem(localStorageKey, seconds);
}, 1000));