const title = document.querySelector("div.hello h1:first-child");

function handleClickevent() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

function handleMouseRight() {
  title.innerText = "Menu";
  title.style.color = "brown";
}

function handleWindowResize(){
  title.style.color = "tomato";
}

title.addEventListener("click", handleClickevent);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
title.addEventListener("contextmenu", handleMouseRight);

window.addEventListener("resize", handleWindowResize);
