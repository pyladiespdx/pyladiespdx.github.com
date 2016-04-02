
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
    cookieStr = c_name + "=" + escape('') + "; ";
    var date = new Date();
    // set expiration to a minute ago
    date.setTime(date.getTime() - (60 * 1000));
    expires = "expires=" + date.toGMTString() + "; ";
    cookieStr += expires;
    cookieStr += "path=/";
    document.cookie = cookieStr;
    console.log('Boring site style enabled, no fun :(');
    window.location.reload(false);
}

// Look for cookie if special url was visited, and add wow!

function doit() {
    cookie = getCookie('pyladiespdx_wow');
    if (cookie === 'yes'){
        console.log("Adding WOW to site style!");
        // add css and js
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/css/geor.css') );
        $('body').append( $('<script src="https://bloggerxtutorials.googlecode.com/files/pinksparkle-min.js" type="text/javascript"></script>') );

        // Make existing components "pop" more
        $('#content-container').append( '<iframe width="0" height="0" src="https://www.youtube.com/embed/gJLIiF15wjQ?rel=0&amp;controls=0&amp;showinfo=0&amp;start=49&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>' );
        $('#main-img').replaceWith('<img id="main-img" class="img-responsive" src="/images/pyladies_pdx_wow.png" alt="pyladies pdx logo" />');
        title = '<h1 id="pyladies-title">Welcome to <FONT COLOR="#FF0000">P</FONT><FONT COLOR="#FF5A00">y</FONT><FONT COLOR="#FFB400">L</FONT><FONT COLOR="#FFff00">a</FONT><FONT COLOR="#A5ff00">d</FONT><FONT COLOR="#4Bff00">i</FONT><FONT COLOR="#00ff00">e</FONT><FONT COLOR="#00ff5A">s</FONT> <blink><FONT COLOR="#00ffB4">P</FONT><FONT COLOR="#00ffff">D</FONT><FONT COLOR="#00B4ff">X</FONT> !!!</blink></h1>';
        $('#pyladies-title').replaceWith(title);

        // add silly hampsters
        $('#potential-hampsters').replaceWith('<img src="/images/hampster2.gif"><img src="/images/hampster1.gif"><img src="/images/hampster3.gif">');
        $('#potential-gerbil').replaceWith('<img src="/images/gerbil.gif">');

        // Add ability to remove wow -- why would anyone do this???? Georgia???
        $('#less-wow').replaceWith('<h3><a id="less-wow" href="#">Click here for less WOW</a></h3>');
        $('#less-wow').click(function () { 
            removeCookie("pyladiespdx_wow"); 
        });
        console.log('Let the wow');
    } else {
        console.log('BORING!');
    }
};
doit();