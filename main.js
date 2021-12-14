// let lis = document.querySelectorAll(".collectOfLis ul li");
// let result = document.querySelector(".container .result");

// lis.forEach(function(ele) {
//     ele.addEventListener("click", function(e) {
//         lis.forEach((el) => {
//             el.classList.remove("active");
//         });
//         let col = e.target.dataset.color;
//         e.target.classList.add("active");
//         window.localStorage.setItem("color", col);
//         let getColor = window.localStorage.getItem("color");
//         result.style.backgroundColor = `${getColor}`;
//     });
// });
// if (window.localStorage.getItem("color")) {
//     result.style.backgroundColor = `${window.localStorage.getItem("color")}`;
//     lis.forEach((el) => {
//         el.classList.remove("active");
//     });
//     let getactive = document.querySelector(
//         `[data-color="${window.localStorage.getItem("color")}"]`
//     );
//     getactive.classList.add("active");
// }

let body = document.querySelector(".click");

body.addEventListener("click", function() {
    document.body.classList.toggle("disable");
});