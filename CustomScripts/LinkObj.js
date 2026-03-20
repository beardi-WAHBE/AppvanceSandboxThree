/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
function GenerateXPathProp(in_att, in_val) {
    if (in_val == "undefined") return "";
    else return (in_val.contains(`"`)) ? `contains(${in_att}, '${in_val}') ` : `contains(${in_att}, "${in_val}") `;
}

function GenerateUniqueXPath(in_webElement, in_parentXPath) {
    let xpath = "";
    
    const target_name = GenerateXPathProp("@name", getAttribute(in_webElement, "name"));
    const target_href = GenerateXPathProp("@href", getAttribute(in_webElement, "href"));
    const target_class = GenerateXPathProp("@class", getAttribute(in_webElement, "name"));
    const target_text = GenerateXPathProp(".", getTextSelenium(in_webElement));

    xpath = `${in_parentXPath}//a[${target_name} and ${target_href} and ${target_class} and ${target_text}]`;
    return xpath;
}

function LinkObj(in_webElement, in_parentXPath) {
    this.webElement = in_webElement;
    this.href = ""
}