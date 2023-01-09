const img = document.querySelector("img");

let wrapper;
let width;
let height;

function zoomStart(e) {
  wrapper = e.target;
  width = wrapper.offsetWidth;
  height = wrapper.offsetHeight;
}

function zoom(e) {
  const moveX = (e.offsetX / width) * 50;
  const moveY = (e.offsetY / height) * 50;

  img.style.minHeight = height * 2 + "px";
  img.style.minWidth = width * 2 + "px";
  img.style.transform = `translate(-${moveX}%, -${moveY}%)`;
}

function zoomEnd() {
  img.style.minHeight = "";
  img.style.minWidth = "";
  img.style.transform = "";
}
