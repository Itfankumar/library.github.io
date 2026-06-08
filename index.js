console.log("js is working");
let slide = document.querySelector(".slides");

let index = 1;

setInterval(() => {

    index++;

    if(index > 2){
        index = 0;
    }

    slide.style.transform =
        `translateX(-${index * 100}%)`;

}, 3000);