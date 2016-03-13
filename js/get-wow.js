
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}


function removeCookie(c_name) {
    console.log('removing', c_name);
    console.log(document.cookie);
    cookieStr = c_name + "=" + escape('') + "; ";
    var date = new Date();
    // set expiration to a minute ago
    date.setTime(date.getTime() - (60 * 1000));
    expires = "expires=" + date.toGMTString() + "; ";
    cookieStr += expires;
    cookieStr += "path=/";
    document.cookie = cookieStr;
    console.log('REMOVED');
    console.log(document.cookie);
    window.location.reload(false);
}


function doit() {
    cookie = getCookie('pyladiespdx_wow');
    console.log("GOT COOKIE!", cookie);
    if (cookie == 'yes'){
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/css/bootstrap.min.css') );
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/css/geor.css') );

        title = '<h1 id="pyladies-title">Welcome to <FONT COLOR="#FF0000">P</FONT><FONT COLOR="#FF5A00">y</FONT><FONT COLOR="#FFB400">L</FONT><FONT COLOR="#FFff00">a</FONT><FONT COLOR="#A5ff00">d</FONT><FONT COLOR="#4Bff00">i</FONT><FONT COLOR="#00ff00">e</FONT><FONT COLOR="#00ff5A">s</FONT> <blink><FONT COLOR="#00ffB4">P</FONT><FONT COLOR="#00ffff">D</FONT><FONT COLOR="#00B4ff">X</FONT> !!!</blink></h1>';
        $('#pyladies-title').replaceWith(title);
        $('#potential-hampsters').replaceWith('<img src="/images/hampster2.gif"><img src="/images/hampster1.gif"><img src="/images/hampster3.gif">');
        $('#potential-gerbil').replaceWith('<img src="/images/gerbil.gif">');
        $('.pyladies-wide').replaceWith('<img class="pyladies-wide" src="../images/way_cool_collage.png" alt="pyladies of portland" />');
        $('#less-wow').replaceWith('<a id="less-wow" href="#">Click here for less WOW</a>');
        $('#less-wow').click(function () { 
            console.log('clicked');
            removeCookie("pyladiespdx_wow"); 
        });
        console.log('Let the wow');
    } else {
        console.log('BORING!');
    }
};
doit();