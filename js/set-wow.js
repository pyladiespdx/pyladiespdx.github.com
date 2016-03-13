var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}


// If the url that loads this script is visited, we store the following cookie,
// Which the rest of the site will look for to make the site styling more wow.
window.onload = function() {
    createCookie('pyladiespdx_wow', 'yes', 365);
    window.location = '/';
};