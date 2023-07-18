import { data } from "./data.js";

document.addEventListener("click", click);
function click(event) {
  if (event.target.classList.contains("filter__input")) {
    console.log(event.target);
  }
}

for (let i = 0; i < data.length; i++) {
  console.log(data[i].title);
}
