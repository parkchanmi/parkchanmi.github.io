const clockTitle = document.querySelector(".js-clock h2");
const clockTime = document.querySelector(".js-clock h1");
function getTime() {
  const date = new Date();
  const nowYear = date.getFullYear();
  const nowMonth = String(date.getMonth()+1).padStart(2, "0");
  const nowDate = String(date.getDate()).padStart(2, "0");

  const seconds = String(date.getSeconds()).padStart(2, "0"); 
  const minutes = String(date.getMinutes()).padStart(2, "0"); 
  const hours = String(date.getHours()).padStart(2, "0");

  clockTitle.innerText = `${nowYear}-${nowMonth}-${nowDate}`;
  clockTime.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);