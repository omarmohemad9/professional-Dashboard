let lis = document.querySelectorAll(".left ol li");
// let body = document.querySelector("body ")

lis.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        lis.forEach((el) => {
            el.classList.remove("active");
        });
        history.pushState({ o: 1 }, "none", e.currentTarget.dataset.history);
        e.currentTarget.classList.add("active");
    });
});

// part doughnut chart

let section_hid = document.querySelector(".rightAndLeft");

let btn_sectionHid = document.getElementById("section-hid-1");

btn_sectionHid.onclick = function() {
    section_hid.classList.toggle("active");
};

// part right of doughnut chart

let btn_sectionHid_2 = document.getElementById("section-hid-2");

btn_sectionHid_2.onclick = () => {
    section_hid.classList.toggle("active-2");
};

let btn_sectionHid_3 = document.getElementById("bullets");
let rightParent = document.querySelector("#right");
let LisRight = document.querySelectorAll(" .right .section-hid-3 ol li a ");

btn_sectionHid_3.onclick = function() {
    rightParent.classList.toggle("active-3");
};

LisRight.forEach((ele) => {
    ele.onclick = function() {
        rightParent.classList.remove("active-3");
    };
});

// btn to show navbar in mobile

let btn_out = document.querySelectorAll("#btn");
let navbar_hid = document.querySelector(".nav");

btn_out.forEach((ele) => {
    ele.onclick = function() {
        navbar_hid.classList.toggle("active");
    };
});