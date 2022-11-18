const year = new Date().getFullYear();
let yearSpan = document.getElementById("year-text");
yearSpan.textContent = year;

let pos = 2;
const photos = 7;

const carouselLeft = function() {
    if (pos === 0) {
        pos = photos - 1;
    } else {
        pos--;
    }
    insertNewPics();
};

const carouselRight = function() {
    if (pos === photos - 1) {
        pos = 0;
    } else {
        pos++;
    }
    insertNewPics();
};

const insertNewPics = function() {
    const carousel = document.getElementById("pfp-carousel");
    for (let i = 0; i <= 2; i++) {
        let newImgPos = pos + i;
        if (newImgPos > photos - 1) {
            newImgPos -= photos;
        }
        const newFile = "img/site/pfp/" + newImgPos + ".png";
        let currentImage = carousel.children[i].children[0];
        currentImage.src = newFile;
    }
};

document.getElementById("pfp-carousel-left").addEventListener("click", carouselLeft);
document.getElementById("pfp-carousel-right").addEventListener("click", carouselRight);