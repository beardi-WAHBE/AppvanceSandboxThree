/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
include("{ds}/LinkObj.js")

function GetPageLinks(in_parentXPath) {
    let links = _eval("ds$('#block-whbelanguageswitcher').find('a')");
    log(links.length);
    for (let i = 0; i < links.length; i++) {
        let href = GenerateUniqueXPath(links[i], in_parentXPath);
        log(i + ": " + href);
    }
}
