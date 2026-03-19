/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function GetPageLinks(in_parentXPath) {
    let links = _eval("let returnStr = ''; ds$('#block-whbelanguageswitcher').find('a').each(function() {returnStr += ds$(this).attr('href')}); return returnStr;");
    links.forEach(link => {
        log(link.href);
    });
}

navigateTo("https://www.wahealthplanfinder.org/us/en/home-page.html");
log("Does this log work???");

GetPageLinks("header");
log(getBrowserURL());