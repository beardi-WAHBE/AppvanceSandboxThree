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
    
    const arr_XPathProps = [
        GenerateXPathProp("@name", getAttribute(in_webElement, "name")),
        GenerateXPathProp("@href", getAttribute(in_webElement, "href")),
        GenerateXPathProp("@class", getAttribute(in_webElement, "name")),
        GenerateXPathProp(".", getTextSelenium(in_webElement)),
    ]

    xpath = "//a[";
    for(let i = 0; i < arr_XPathProps.length; i++) {
        log(arr_XPathProps[i]);
        if (arr_XPathProps[i] != "") xpath += arr_XPathProps[i];

        if (i != arr_XPathProps.length - 1) xpath += "and"
    }
    xpath += "]";
    
    return xpath;
}

function LinkObj(in_webElement, in_parentXPath) {
    this.webElement = in_webElement;
    this.href = ""
}