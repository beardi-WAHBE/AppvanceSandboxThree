/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/

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