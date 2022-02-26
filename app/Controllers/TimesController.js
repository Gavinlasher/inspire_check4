function showTime() {
  const d = new Date();
  let currentTime = d.toLocaleTimeString();
  document.getElementById("time").innerHTML = `<li>${currentTime}</li>`;
}

export class TimesController {
  constructor() {
    console.log("times controller ios working");
    setInterval(showTime, 1000);
  }
}
