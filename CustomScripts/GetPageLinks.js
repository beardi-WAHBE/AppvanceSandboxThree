/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function GetPageLinks(in_parentXPath) {
    let links = _eval("ds$('#block-whbelanguageswitcher').find('a')");
    log(links.length);
    for (let i = 0; i < links.length; i++) {
        let href = getAttribute(links[i], "href")
        log(i + ": " + href);
        click(links[i]);
        verifyContains(getBrowserURL(), href);
        navigateTo("https://www.wahealthplanfinder.org/us/en/home-page.html");
    }
}

navigateTo("https://www.wahealthplanfinder.org/us/en/home-page.html");
GetPageLinks("header");