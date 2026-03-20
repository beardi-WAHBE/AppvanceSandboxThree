/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function FindByXPath(in_xpath) {
    return  _eval(`
        const parentNode = ds$(document)[0]; 
        const result = parentNode.evaluate("//header//a", parentNode, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        let nodes = [];
        let node;
        while ((node = result.iterateNext()) !== null) {
            nodes.push(node);
        }
        nodes;
    `);
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

    xpath += `//${getProp(in_webElement, "tagName")}[`;
    for(let i = 0; i < arr_XPathProps.length; i++) {
        if (arr_XPathProps[i] == "") continue;
        
        xpath += arr_XPathProps[i];

        if (i != arr_XPathProps.length - 1) xpath += " and "
    }
    xpath += "]";
    
    return xpath;
}

function XPathIsUnique(in_XPath) {
    return (FindByXPath(in_XPath).length == 1);
}

// Unit Tests
function UnitTest_FindByXPath(in_page, in_xpath) {
    navigateTo(in_page);
    const elements = FindByXPath(in_xpath);

    let logStr = `
        -=|| FindByXPath('${in_xpath}) ||=- \n
        Elements(${elements.length}): \n
    `;

    for(let i = 0; i < elements.length; i++) {
        let isUnique = (XPathIsUnique(GenerateUniqueXPath(elements[i], ""))) ? "Unique" : "Not Unique";
        logStr += ` - ${getTextSelenium(elements[i])}: ${GenerateUniqueXPath(elements[i], "")} (${isUnique}) \n`;
    }

    log(logStr);
}


UnitTest_FindByXPath("https://uat.wahpf.org/us/en/home-page.html", "//header//a");