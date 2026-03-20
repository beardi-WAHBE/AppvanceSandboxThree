/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function FindByXPath(in_xpath) {
    return _eval(`let parentNode = ds$(document); parentNode.evaluate("//header//a", parentNode, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);`);
}

function GenerateXPathProp(in_att, in_val) {
    if (in_val == "undefined") return "";
    else return (in_val.contains(`"`)) ? `contains(${in_att}, '${in_val}') ` : `contains(${in_att}, "${in_val}") `;
}

function GenerateUniqueXPath(in_webElement, in_parentXPath) {
    let xpath = in_parentXPath;
    
    const arr_XPathProps = [
        GenerateXPathProp("@name", getAttribute(in_webElement, "name")),
        GenerateXPathProp("@href", getAttribute(in_webElement, "href")),
        GenerateXPathProp("@class", getAttribute(in_webElement, "name")),
        GenerateXPathProp(".", getTextSelenium(in_webElement)),
    ]

    xpath += "//a[";
    for(let i = 0; i < arr_XPathProps.length; i++) {
        if (arr_XPathProps[i] == "") continue;
        
        xpath += arr_XPathProps[i];

        if (i != arr_XPathProps.length - 1) xpath += " and "
    }
    xpath += "]";

    let bool_unique = (FindByXPath(xpath).length == 1);
    log(bool_unique);
    
    return xpath;
}

// Unit Tests
navigateTo("https://www.wahealthplanfinder.org/us/en/home-page.html");
log(FindByXPath("//header//a"));