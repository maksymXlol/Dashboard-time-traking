import { data } from "./data.js";

document.addEventListener("click", click);
function click(event) {
  if (event.target.classList.contains("filter__input")) {
    let frame = event.target.value;
    // console.log(data[0].timeframes[frame], frame);
    setTime(frame);
  }
}

function setTime(frame) {
  for (let i = 0; i < data.length; i++) {
    let title = data[i].title;
    let element = document.querySelector(`.info[data-info='${title}']`);
    let current = element.querySelector(".time");
    let previous = element.querySelector(".last");
    let frameString =
      frame == "daily"
        ? "Yesterday"
        : frame == "monthly"
        ? "Last Month"
        : "Last Week";
    current.textContent = `${data[i].timeframes[frame].current}hrs`;
    previous.textContent = `${frameString} - ${data[i].timeframes[frame].previous}hrs`;
  }
}

setTime(document.querySelector("input[checked]").value);

// for (const iterator of data) {
//   console.log(iterator.title);
// }

// data.forEach((item, index) => console.log(item.title, index));
