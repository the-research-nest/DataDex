// TODO: Add popup logic

// popup.js - This script will run in the popup extension

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("#screenshot-button");
    button.addEventListener("click", function() {
        chrome.tabs.captureVisibleTab(null, {}, function(dataUrl) {
            // To set a variable
            chrome.storage.local.set({imgDataURL: dataUrl});
            chrome.tabs.create({url: "src/html/photo-editor.html"});
        });
    });
});