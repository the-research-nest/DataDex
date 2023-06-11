document.addEventListener("DOMContentLoaded", function() {
    var img = document.querySelector("#image");
    var saveButton = document.querySelector("#save-button");
    // To get a variable
    chrome.storage.local.get(["imgDataURL"], function(result) {
        img.src = result.imgDataURL;
    });
    saveButton.addEventListener("click", function() {
        var canvas = document.createElement("canvas");
        console.log(img.offsetWidth);
        if (img.offsetWidth > 1400) {
            r = 1.3;
        } else {
            r = 2;
        };
        canvas.width = img.offsetWidth * r;
        canvas.height = img.offsetHeight * r;
        var context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
        var link = document.createElement("a");
        link.download = "edited-image.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});
