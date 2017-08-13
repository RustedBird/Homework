;(function ($) {
    var playList = [
        {
            author: "LED ZEPPELIN",
            song: "STAIRWAY TO HEAVEN"
        },
        {
            author: "QUEEN",
            song: "BOHEMIAN RHAPSODY"
        },
        {
            author: "LYNYRD SKYNYRD",
            song: "FREE BIRD"
        },
        {
            author: "DEEP PURPLE",
            song: "SMOKE ON THE WATER"
        },
        {
            author: "JIMI HENDRIX",
            song: "ALL ALONG THE WATCHTOWER"
        },
        {
            author: "AC/DC",
            song: "BACK IN BLACK"
        },
        {
            author: "QUEEN",
            song: "WE WILL ROCK YOU"
        },
        {
            author: "METALLICA",
            song: "ENTER SANDMAN"
        }
    ];
    /*var el = document.querySelector('main');
    el.innerHTML += '<ol></ol>';
    var list = document.querySelector('ol');
    for (key in playList) {
        list.innerHTML += '<li></li>';
    }
    var items = list.childNodes;
    for (key in items) {
        items[key].innerHTML += playList[key].song + ' ' + playList[key].author;
    }*/

    var body = $('body');
    body.append('<ol>');
    for (var key in playList) {
        body.find('ol').append('<li>Автор: ' + playList[key].author + '<br>Песня: ' + playList[key].song + '</li>');
    }
})(jQuery);