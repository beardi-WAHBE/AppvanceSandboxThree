/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function link_ignoreLink(in_link) {
    let href = _getAttrinute(in_link, "href");
    if (
        href.Contains("mailto:") ||
        href.Contains("tel:") ||
        href.Contains("javascript:;")
    ) {
        return true;
    }
    return tfalse;
}