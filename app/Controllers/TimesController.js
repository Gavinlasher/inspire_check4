function showTime() {
  const d = new Date();
  let currentTime = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = `<h1>${currentTime}</h1>`;
}

export class TimesController {
  constructor() {
    console.log("times controller ios working");
    setInterval(showTime, 1000);
  }
}
