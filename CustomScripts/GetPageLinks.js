/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function GetPageLinks(in_parentXPath) {
    let parent = ds$(document).getElementByTagName('header');
    let links = parent.getElementsByTagName('a');
    links.forEach(link => {
        log(link.href);
    });
}

navigateTo("https://www.wahealthplanfinder.org/us/en/home-page.html");
log("Does this log work???");

GetPageLinks("header");
log(getBrowserURL());