/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function GetPageLinks(in_parentXPath) {
    let links = byXPath(in_parentXPath + "//a[contains(@href, '/us/en/home-page.html')]");
    log(links);
    return links;
}

navigateTo("https://www.wahealthplanfinder.org/us/en/home-page.html");
log("Does this log work???");

GetPageLinks("//header");