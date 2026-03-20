/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

function GenerateUniqueXPath(in_webElement, in_parentXPath) {
    let xpath = "";
    const target_name = (getAttribute(in_webElement, "name") !== undefined)
                            ? ` contains(@name, "${getAttribute(in_webElement, "name")}") `
                            : "";
    const target_href = ` contains(@href, "${getAttribute(in_webElement, "href")}") `;
    const target_class = ` contains(@class, "${getAttribute(in_webElement, "class")}") `;
    const target_text = (getTextSelenium(in_webElement).contains(`"`)) 
                            ? `contains(., '${getTextSelenium(in_webElement)}') ` 
                            : `contains(., "${getTextSelenium(in_webElement)}") `;

    xpath = `${in_parentXPath}//a[${target_name} and ${target_href} and ${target_class} and ${target_text}]`;
    return xpath;
}

function LinkObj(in_webElement, in_parentXPath) {
    this.webElement = in_webElement;
    this.href = ""
}