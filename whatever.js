const title = document.querySelector(".hello h1:first-child");

function handleClickevent() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClickevent);
// event = listner function 기능들. (ex. click, submit, etc..)
