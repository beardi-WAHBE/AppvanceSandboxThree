/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
include("{ds}/ReusableFunctions/AccessorFunctions.js");
include("{ds}/ReusableFunctions/TestLinkHelperFunctions.js");

// Link Class

class TestLink {

    constructor(in_webElement, in_parentXPath) {
        this.parentXPath = in_parentXPath;
        this.myXPath = GenerateUniqueXPath(in_webElement, in_parentXPath);
        this.href = getAttribute(in_webElement, "href");

        this.flags = {
            appLink: (this.href.contains("/HBEWeb/")),
            opensNewTab: false,
            hasNewTabIcon: false,
            externalLink: false,
            viewableFile: false,
            downloadableFile: false,
            inHeader: false,
            inFooter: false,
            inNavElement: false,
            isButton: false,
            containsImage: false,
            hasText: false,

            shouldNotBeUnderlined: (inHeader || inFooter || inNavElement || isButton || containsImage),
            shouldNotHaveExternalIcon: (inHeader || inFooter || isButton || containsImage || !hasText),
        }
    }

    
}