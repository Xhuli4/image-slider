const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener('click', function () {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
})
prev.addEventListener('click', function () {
    const items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
})
