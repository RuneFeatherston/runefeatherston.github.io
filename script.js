$(document).ready(function() {
    // Initialize everything when page loads
    initializeCookies();
});

// Cookie Management
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function initializeCookies() {
    const lastVisit = getCookie('lastVisit');
    const welcomeMsg = document.getElementById('welcome-message');
    
    if (lastVisit) {
        welcomeMsg.innerHTML = `<strong>Welcome back!</strong> Your last visit was on ${lastVisit}`;
        welcomeMsg.className = 'alert alert-success';
    } else {
        welcomeMsg.innerHTML = '<strong>Welcome to my homepage for the first time!</strong>';
        welcomeMsg.className = 'alert alert-info';
    }
    
    // Set cookie for current visit
    const now = new Date().toLocaleString();
    setCookie('lastVisit', now, 365);
}

// Email Show/Hide Functions
function showEmail() {
    $('#email-display').removeClass('hidden');
}

function hideEmail() {
    $('#email-display').addClass('hidden');
}

// Smooth scrolling for internal links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
