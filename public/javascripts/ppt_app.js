'use strict';
$(window).on('keydown', function (e) {

    if(!e.shiftKey || !e.ctrlKey){
        return;
    }
    switch(e.keyCode){
        case 37: // left
            e.preventDefault();
            toPage(-1);
        break;
        case 39: // right
            e.preventDefault();
            toPage(1);
        break;
    }
});

function toPage (n) {
    var current =  + location.href.match(/ppt\/(\d+)$/)[1];
    current += n;

    if (current < 0) {
        current = 0;
    }

    location.href = '/ppt/' + current;
}