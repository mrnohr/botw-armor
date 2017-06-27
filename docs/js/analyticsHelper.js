function trackShare() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'click',
        eventLabel: 'Share'
    });
}

function trackRandom() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'click',
        eventLabel: 'Random'
    });
}