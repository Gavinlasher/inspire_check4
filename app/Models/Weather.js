export class Weather {
  constructor(data) {
    this.name = data.name;
    this.temperture = data.main.temp;
    this.clicked = false;
  }
  //
  get Template() {
    return `
    
    <h2>${this.name}</h2>
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onclick="app.weatherController.toggleWeather()">
  <label class="form-check-label" for="flexSwitchCheckDefault">${this.Conver}${
    this.clicked ? "C" : "F"
  }</label>
  
   
    
    

    `;
  }

  get Conver() {
    let out = 0;

    if (this.clicked) {
      let temperture = this.temperture;
      out = temperture - 273.15;
    } else {
      let t = this.temperture;
      out = 1.8 * (t - 273) + 32;
    }

    return Math.round(out);
  }
}
