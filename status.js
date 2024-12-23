function getTextStatusContent() {
    var textStatus = document.querySelector(".x10l6tqk.x1nrll8i.x11lhmoz.xwa60dl.x9f619.x78zum5.x6s0dn4.xl56j7k.xh8yej3.x1lwm3bp");
    if (textStatus) {
        var spanElement = textStatus.querySelector("._ao3e");
        if (spanElement) {
            var textContent = spanElement.innerText;
            console.log(textContent);
            return textContent;
        } else {
            console.log("Span element not found.");
            return "ERROR";
        }
    } else {
        console.log("Div element not found.");
        return "ERROR";
    }
}

function statusType() {
    var videoElement = document.querySelector("video");
    var imgclasses = "x1n2onr6.x1lliihq.x5yr21d.xkrivgy.x1gryazu._ao3e";
    var imgElement = document.querySelector("img." + imgclasses);
    if (videoElement) {
        console.log("Video tag exists on the page.");
        return "VIDEO";
    } else if (imgElement) {
        console.log("Image tag exists on the page.");
        return "IMAGE";
    } else {
        console.log("No video and image tag found on the page.");
        return "TEXT";
    }
}

function getVideoImageStatusContent() {
    var divElement = document.querySelector(".xyamay9.xkxsfb.x19mlwdh.x1kki2sl.xuix1fa.x13faqbe");
    if (divElement) {
        var spanElement = divElement.querySelector("._ao3e");
        if (spanElement) {
            var textContent = spanElement.innerText;
            console.log("Text content:", textContent);
            return textContent;
        } else {
            console.log("No span element found inside the div.");
            return "NONE";
        }
    } else {
        console.log("Div element not found.");
        return "NONE";
    }
}

function getName() {
    var spanElement = document.querySelector('span.x1jchvi3.x1fpc5dy.x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft.x1rg5ohu._ao3e');
    var nickname = spanElement.textContent;
    console.log('name:', nickname);
    return nickname;
}

function getTime() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    var formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    console.log('Today\'s date:', formattedDate);
    console.log('Current time:', formattedTime);
    return formattedDate + "_" + formattedTime;
}

function downloadStatusVideo() {
    var divElement = document.querySelector('div.x1n2onr6.xh8yej3.x5yr21d.x6ikm8r.x10wlt62');
    if (divElement) {
        var videoElement = divElement.querySelector('video');
        if (videoElement && videoElement.src.startsWith('blob:')) {
            var blobUrl = videoElement.src;
            var anchor = document.createElement('a');
            anchor.href = blobUrl;
            anchor.download = 'status_video.mp4';
            anchor.click();
        } else {
            console.error('Video element not found or src attribute does not start with "blob:"');
        }
    } else {
        console.error('Div element not found.');
    }
}

function downloadStatusImage() {
    var divElement = document.querySelector('div.x1n2onr6.xh8yej3.x5yr21d.x6ikm8r.x10wlt62');
    if (divElement) {
        var imageElement = divElement.querySelector('img');
        if (imageElement && imageElement.src.startsWith('blob:')) {
            var blobUrl = imageElement.src;
            var anchor = document.createElement('a');
            anchor.href = blobUrl;
            anchor.download = 'status_image.png';
            anchor.click();
        } else {
            console.error('Image element not found or src attribute does not start with "blob:"');
        }
    } else {
        console.error('Div element not found.');
    }
}

function downloadStatus() {
    var type = statusType();
    if (type === "VIDEO") {
        downloadStatusVideo();
        var userName = getName();
        var currentTime = getTime();
        var infoContent = [];
        infoContent[0] = userName;
        infoContent[1] = currentTime;
        infoContent[2] = getVideoImageStatusContent();
        var lines = [
            "NAME: " + infoContent[0] + '\n',
            "TIME: " + infoContent[1] + '\n',
            "TEXT: " + infoContent[2] + '\n'
        ];

        var blob = new Blob(lines, { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        filename = "VIDEO_STATUS_INFO.txt";
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);

    } else if (type === "TEXT") {
        var userName = getName();
        var currentTime = getTime();
        var infoContent = [];
        infoContent[0] = userName;
        infoContent[1] = currentTime;
        infoContent[2] = getTextStatusContent();
        var lines = [
            "NAME: " + infoContent[0] + '\n',
            "TIME: " + infoContent[1] + '\n',
            "TEXT: " + infoContent[2] + '\n'
        ];
        var blob = new Blob(lines, { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        filename = "TEXT_STATUS_INFO.txt";
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);

    } else if (type === "IMAGE") {
        downloadStatusImage();
        var userName = getName();
        var currentTime = getTime();
        var infoContent = [];
        infoContent[0] = userName;
        infoContent[1] = currentTime;
        infoContent[2] = getVideoImageStatusContent();
        var lines = [
            "NAME: " + infoContent[0] + '\n',
            "TIME: " + infoContent[1] + '\n',
            "TEXT: " + infoContent[2] + '\n'
        ];
        var blob = new Blob(lines, { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        filename = "IMAGE_STATUS_INFO.txt";
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);

    } else {
        console.log(type);
        return "ERROR";
    }
}

function addDownloadButton() {
    var elementExists = document.querySelector('div._ak4w._ak4x');
    if (elementExists) {
        var muteButton = document.querySelector('li._aj-r._aj-q._aj-_[data-animate-dropdown-item="true"] div[aria-label="Mute"]');
        if (muteButton) {
            var downloadBTN = document.querySelector('[aria-label="Download"]');
            if (!downloadBTN) {
                var newLiElement = document.createElement('li');
                newLiElement.setAttribute('tabindex', '0');
                newLiElement.classList.add('_aj-r', '_aj-q', '_aj-_');
                newLiElement.setAttribute('data-animate-dropdown-item', 'true');
                newLiElement.style.opacity = '1';

                var newDivElement = document.createElement('div');
                newDivElement.classList.add('_aj-z', '_aj-t', '_alxo');
                newDivElement.setAttribute('role', 'button');
                newDivElement.setAttribute('aria-label', 'Download');
                newDivElement.textContent = 'Download';
                newDivElement.addEventListener('click', function () {
                    downloadStatus();
                });

                newLiElement.appendChild(newDivElement);
                muteButton.parentElement.parentElement.insertAdjacentElement('afterend', newLiElement);
            }
        } else {
            console.error("Mute button not found.");
        }
    } else {
        console.error("Parent container not found.");
    }
}

// Usage
setInterval(addDownloadButton, 1200);
