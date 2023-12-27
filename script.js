// alert("BISMILLAH");
const loader = document.getElementById("loader");
const main = document.getElementById("main");
main.style.display = "none";
window.addEventListener("load", () => {
    loader.style.display = "none";
    main.style.display = "unset";
});

// HamBar
const hbar = document.querySelector(".ham");
const mnav = document.querySelector(".mobnav")
hbar.addEventListener("click", () => {
    hbar.classList.toggle("active");
    mnav.classList.toggle("active");
});

//Caraousel

let imageIndex = 0;

let images = [
    {
        filePath: "assets/image1.jpg",
        headText: "Head1",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam doloribus aut nostrum! Tempore officia nostrum, quo delectus quas ipsam alias explicabo. Amet, in. Minima, eius enim quibusdam iure voluptatum inventore!",
    },
    {
        filePath: "assets/image2.jpg",
        headText: "Head2",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam doloribus aut nostrum! Tempore officia nostrum, quo delectus quas ipsam alias explicabo. Amet, in. Minima, eius enim quibusdam iure voluptatum inventore!",
    },
    {
        filePath: "assets/image3.jpg",
        headText: "Head3",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam doloribus aut nostrum! Tempore officia nostrum, quo delectus quas ipsam alias explicabo. Amet, in. Minima, eius enim quibusdam iure voluptatum inventore!",
    },
];

let numberOfImages = images.length;

const right = document.getElementById("right");
const left = document.getElementById("left");

var time = 5000;

// function changeImage(){
//     document.getElementById("caraouselimg").src = images[imageIndex].filePath;
//     if (imageIndex < numberOfImages - 1) {
//         imageIndex++;
//     }
//     else{
//         imageIndex = 0;
//     }
//     setTimeout("changeImage()",time);
// }

// window.onload = changeImage;

let imageItems = Array.from(document.getElementsByClassName("caraousel"));

imageItems.forEach((element) => {
    element.getElementsByClassName("caraouselpic")[0].src = images[imageIndex].filePath;
    element.getElementsByClassName("head")[0].innerHTML = images[imageIndex].headText;
    element.getElementsByClassName("body")[0].innerHTML = images[imageIndex].bodyText;
    setInterval(() => {
        imageIndex++;
        if (imageIndex == numberOfImages) {
            imageIndex = 0;
        }
        element.getElementsByClassName("caraouselpic")[0].src = images[imageIndex].filePath;
        element.getElementsByClassName("head")[0].innerHTML = images[imageIndex].headText;
        element.getElementsByClassName("body")[0].innerHTML = images[imageIndex].bodyText;
    }, time);
    right.addEventListener("click", () => {
        imageIndex++;
        if (imageIndex == numberOfImages) {
            imageIndex = 0;
        }
        element.getElementsByClassName("caraouselpic")[0].src = images[imageIndex].filePath;
        element.getElementsByClassName("head")[0].innerHTML = images[imageIndex].headText;
        element.getElementsByClassName("body")[0].innerHTML = images[imageIndex].bodyText;
    });
    left.addEventListener("click", () => {
        imageIndex--;
        if (imageIndex < 0) {
            imageIndex = numberOfImages - 1;
        }
        element.getElementsByClassName("caraouselpic")[0].src = images[imageIndex].filePath;
        element.getElementsByClassName("head")[0].innerHTML = images[imageIndex].headText;
        element.getElementsByClassName("body")[0].innerHTML = images[imageIndex].bodyText;
    });
});