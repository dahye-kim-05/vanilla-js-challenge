const widthPicxel = document.querySelector("#width");
const body = document.body;
// html 의 body 태그를 js에서 사용할 수 있도록 선언해 줌.

const big_Screen = "bigScreen";
const medium_Screen = "mediumScreen";
const small_Screen = "smallScreen";

function handleWindowSize() {
  widthPicxel.textContent = window.innerWidth;
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(big_Screen);
    body.classList.remove(medium_Screen);
  } else if (width <= 1000 && width >= 800) {
    body.classList.add(medium_Screen);
    body.classList.remove(big_Screen, small_Screen);
    // 이 때,  remove 메서드에 'small_Screen' 도 추가해야 함. 
    // 지워주지 않는다면, 브라우저 창 size 늘렸을 때 small 메서드가 지속됨.
  } else {
    body.classList.remove(medium_Screen);
    body.classList.add(small_Screen);
  }
}

window.addEventListener("resize", handleWindowSize);
