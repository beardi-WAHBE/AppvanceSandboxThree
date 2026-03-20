/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

// Link Parameters

const viewableFileTypes = [".jpeg", ".jpg", ".png", ".gif", ".svg", ".pdf", ".mp3"];
const downloadableFileTypes = [".docx", ".xlsx", ".pptx", ".ics"];
const deniedSymbols = ["|", "[", "]", "\\"];

const homepageURLs = {
    HPF: [
        ".wahpf.org/us/en/home-page.html",
        ".wahpf.org/us/es/home-page.html",
        ".wahpf.org/content/wahpf/us/en/home-page.html",
        ".wahpf.org/content/wahpf/us/es/home-page.html",
        "/content/wahpf/us/en/home-page.html",
        "/content/wahpf/us/es/home-page.html",
        ".wahealthplanfinder.org/",
        ".wahealthplanfinder.org/us/en/home-page.html",
        ".wahealthplanfinder.org/us/es/home-page.html",
    ],
    HBE: [
        "-corp.wahpf.org/",
        ".wahbexchange.org/home-page/",
    ],
    PWS: [
        ".wapathways.org",
    ],
};
const sites = {
    HPF: [".wahpf.org/us", ".wahealthplanfinder.org/us"],
    APP: [".wahpf.org/HBEWeb", ".wahealthplanfinder.org/HBEWeb/"],
    HBE: ["-corp.wahpf.org", ".wahbexchange.org"],
    PWS: [".wapathways.org"],
    EXT: [],
}
const envs = {
    UAT: "https://uat",
    DEV: "https://dev",
    PRD: "https://www",
    QA:  "https://qa.",
    EXT: "",
}

// Link Helper Functions

function GetSite(in_url) {
    let returnSite = "NULL";

    Object.keys(sites).forEach((site) => {
        // Check the URL for an identifier that corrsponds to one of our Sites
        sites[site].some((identifier) => {
            if(in_url.includes(identifier) && returnSite == "NULL") {
                returnSite = site
                return;
            };
        });
    });

    return returnSite;
}

function GetEnv(in_url) {
    let returnEnv = "NULL";

    Object.keys(envs).forEach((env) => {
        // Check the URL for an identifier that corrsponds to one of our Sites
        if(in_url.contains(envs[env]) && returnEnv == "NULL") {
            returnEnv = env;
        }
    });

    return returnEnv;
}

function IsOnHomepage(in_url) {
    const env = GetEnv(in_url);
    const site = GetSite(in_url);

    if (["EXT", "APP"].includes(site)) return false;

    let returnVal = false;
    homepageURLs[site].forEach((val) => {
        if (in_url == env + val && !returnVal) {
            returnVal = true;
        }
    });

    return returnVal;
}

// Unit Tests
function UnitTest_GetPageData(in_url) {
    //navigateTo(in_url);
    log(`
        GET PAGE DATA: ${in_url} \n
         - ENV:  ${GetEnv(in_url)}
         - SITE: ${GetSite(in_url)}
         - On Homepage: ${IsOnHomepage(in_url)}
    `);
}

UnitTest_GetPageData("https://qa.wapathways.org/");