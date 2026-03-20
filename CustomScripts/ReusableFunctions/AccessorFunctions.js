/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

// --=|| Helpers ||=--

function FilterAppLinks(in_href) {
    if(in_href.contains("/HBEWeb/")) return in_href.split("&id=")[0];
    else return in_href;
}

// --=|| Reusable Functions ||=--

function FindElementsByXPath(in_xpath) {
    return  _eval(`
        const parentNode = ds$(document)[0]; 
        const result = parentNode.evaluate(\`${in_xpath}\`, parentNode, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
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
        GenerateXPathProp("@href", FilterAppLinks(getAttribute(in_webElement, "href"))),
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
    return (FindElementsByXPath(in_XPath).length == 1);
}

// Unit Tests
function UnitTest_FindElementsByXPath(in_page, in_xpath) {
    navigateTo(in_page);
    const elements = FindElementsByXPath(in_xpath);

    let logStr = `
        -=|| FindElementsByXPath('${in_xpath}) ||=- \n
        Elements(${elements.length}): \n
    `;

    for(let i = 0; i < elements.length; i++) {
        let elementXPath = GenerateUniqueXPath(elements[i], "");
        let isUnique = (XPathIsUnique(elementXPath)) ? "Unique" : "Not Unique";

        logStr += ` - ${getTextSelenium(elements[i])}: ${elementXPath} (${isUnique}) \n`;
    }

    log(logStr);
}

function UnitTest_XpathIsUnique(in_page, in_XPath, in_expectedResult) {
    navigateTo(in_page);
    let actualResult = XPathIsUnique(in_XPath);
    log(`
    \n${in_XPath}: 
    \n - Length: ${FindElementsByXPath(in_XPath).length}
    \n - Expected: ${in_expectedResult}
    \n - Actual:   ${actualResult}
    `);
}

function UnitTest_UseBuiltInLinkFind(in_page) {
    navigateTo(in_page);
    let foundLinks = links(byTagName("header"));
    log(foundLinks);
}


//UnitTest_FindElementsByXPath("https://uat.wahpf.org/us/en/home-page.html", "//header//a");
//UnitTest_XpathIsUnique("https://uat.wahpf.org/us/en/home-page.html", `//A[contains(@href, "#") and contains(., "My Account") ]`, true)
UnitTest_UseBuiltInLinkFind("https://uat.wahpf.org/us/en/home-page.html");




