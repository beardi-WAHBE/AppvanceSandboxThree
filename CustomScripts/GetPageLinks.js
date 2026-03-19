/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function GetPageLinks(in_parentXPath) {
    let links = _eval("ds$('#block-whbelanguageswitcher').find('a')");
    log(links.length);
}

navigateTo("https://www.wahealthplanfinder.org/us/en/home-page.html");
log("Does this log work???");

GetPageLinks("header");
log(getBrowserURL());