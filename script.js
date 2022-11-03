let button__one = document.querySelector(".button__one__one");
let button__two = document.querySelector(".button__two__two");

button__one.addEventListener("click", function() {
   button__one.classList.add("button__one");
   if (button__two != 1) {
      button__two.classList.add("button__two");
   }
})
button__two.addEventListener("click", function() {
   if (button__two != 1) {
   button__one.classList.remove("button__one");
   button__two.classList.remove("button__two");
   }
   button__two = 1;
})