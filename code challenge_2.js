const widthPicxel = document.querySelector("#width");
document.body.style.backgroundColor = "purple";

function handleWindowSize() {
  widthPicxel.textContent = window.innerWidth;
  const width = window.innerWidth;
  if (width >= 1000) {
    document.body.style.backgroundColor = "purple";
  } else if (1000 > width && width >= 800) {
    document.body.style.backgroundColor = "yellow";
  } else if (800 > width) {
    document.body.style.backgroundColor = "brown";
  }
}

window.addEventListener("resize", handleWindowSize);
