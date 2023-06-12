document.addEventListener("DOMContentLoaded", function() {
    var img = document.querySelector("#image");
    var saveButton = document.querySelector("#save-button");
    // To get a variable
    chrome.storage.local.get(["imgDataURL"], function(result) {
        img.src = result.imgDataURL;
    });
    saveButton.addEventListener("click", function() {
        var canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
        var link = document.createElement("a");
        link.download = "edited-image.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});
