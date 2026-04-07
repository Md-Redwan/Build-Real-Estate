import AboutUs from "./AboutUs";

let counterup = document.querySelectorAll(".counter_up");
let convert = Array.from(counterup);
convert.map((counteritem) => {
  let counter = 0;
  function count() {
    counter++;
    counteritem.innerHTML = counter;
    if (counter == counteritem.dataset.number) {
      clearInterval(timing);
    }
  }
  let timing = setInterval(() => {
    count();
  }, counteritem.dataset.speed/counter);
});