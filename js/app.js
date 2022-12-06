"use strict"

let hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

let citiesSection = document.getElementById('cities-profile');

function custPerHour(min, max) {
  // got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Store(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
}

Store.prototype.cookiesBoughtEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let custEachHour = custPerHour(this.minCust, this.maxCust);
    let cookies = Math.round(this.avgCookieBought * custEachHour);
    this.cookiesPerHour.push(cookies);
    this.totalCookies += this.cookiesPerHour[i];
    
  }
}

Store.prototype.render = function (){
    let articleElem = document.createElement('article');
    citiesSection.appendChild(articleElem);
  
    let h2Elem = document.createElement('h2');
    h2Elem.innerText = this.name;
  
    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    ulElem.appendChild(h2Elem);
  
    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]} ${this.cookiesPerHour[i]}`;
      ulElem.appendChild(liElem);
    }
  
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total: ${this.totalCookies}`;
    ulElem.appendChild(liTotal);
}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Toyko', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

let cities = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < cities.length; i++) {
  cities[i].cookiesBoughtEachHour();
  cities[i].render();
}
