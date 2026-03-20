/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
include("{ds}/LinkObj.js")

function GetPageLinks(in_parentXPath) {
    let links = _eval("ds$('#block-whbelanguageswitcher').find('a')");
    log(links.length);
    for (let i = 0; i < links.length; i++) {
        let href = getAttribute(links[i], "href")
        log(i + ": " + href);
        GenerateUniqueXPath(links[i], in_parentXPath);
    }
}
