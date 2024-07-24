const clockTitle = document.querySelector(".js-clock");

function getDdayforChristmas () {
  const Xmas = new Date("2024-12-25T00:00:00");
  const Today = new Date();

  const LeftXmas = Xmas - Today;
  // 크리스마스까지 남은 시간

  console.log(LeftXmas);
  // 13228913271 -> ms로 표현됨

  const days = Math.floor(LeftXmas / (1000 * 60 * 60 *24 ));
  const hours = Math.floor((LeftXmas % (1000 * 60 * 60 *24 )) / (1000 * 60 * 60));
  const minutes = Math.floor((LeftXmas % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((LeftXmas % (1000 * 60)) / 1000);

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getDdayforChristmas();
setInterval(getDdayforChristmas, 1000);



