"use strict"

let hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

let citiesSection = document.getElementById('cities-profile');

let seattle = {
  name: `Seattle`,
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesPerHour: [],
  randCustEachHour: [],
  totalCookies: 0,
  custEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let custPerHour = randomNumber(this.minCust, this.maxCust);
      this.randCustEachHour.push(custPerHour);
    }
  },
  cookiesBoughtEachHour: function () {
    this.custEachHour();
    for (let i = 0; i < hours.length; i++) {
      let cookies = Math.round(this.avgCookieBought * this.randCustEachHour[i]);
      this.cookiesPerHour.push(cookies);
    }
  },
  render: function(){
  let articleElem = document.createElement('article');
  citiesSection.appendChild(articleElem);
  
  let h2Elem = document.createElement('h2');
  h2Elem.innerText = this.name;
  
  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  ulElem.appendChild(h2Elem);

  for(let i = 0; i < hours.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = `${hours[i]} ${this.cookiesPerHour[i]}`;
    ulElem.appendChild(liElem);
    this.totalCookies += this.cookiesPerHour[i];
  }
  
  let liTotal = document.createElement('li');
  liTotal.textContent = `Total: ${this.totalCookies}`;
  ulElem.appendChild(liTotal);
  },
}

let tokyo = {
    name: `Tokyo`,
    minCust: 3,
    maxCust: 24,
    avgCookieBought: 1.2,
    cookiesPerHour: [],
    randCustEachHour: [],
    totalCookies: 0,
    custEachHour: function () {
      for (let i = 0; i < hours.length; i++) {
        let custPerHour = randomNumber(this.minCust, this.maxCust);
        this.randCustEachHour.push(custPerHour);
      }
    },
    cookiesBoughtEachHour: function () {
      this.custEachHour();
      for (let i = 0; i < hours.length; i++) {
        let cookies = Math.round(this.avgCookieBought * this.randCustEachHour[i]);
        this.cookiesPerHour.push(cookies);
      }
    },
    render: function(){
      let articleElem = document.createElement('article');
      citiesSection.appendChild(articleElem);
      
      let h2Elem = document.createElement('h2');
      h2Elem.innerText = this.name;
      
      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);
      ulElem.appendChild(h2Elem);
    
      for(let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]} ${this.cookiesPerHour[i]}`;
        ulElem.appendChild(liElem);
        this.totalCookies += this.cookiesPerHour[i];
      }
      
      let liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookies}`;
      ulElem.appendChild(liTotal);
      },
  }

let dubai = {
    name: `Dubai`,
    minCust: 11,
    maxCust: 38,
    avgCookieBought: 3.7,
    cookiesPerHour: [],
    randCustEachHour: [],
    totalCookies: 0,
    custEachHour: function () {
      for (let i = 0; i < hours.length; i++) {
        let custPerHour = randomNumber(this.minCust, this.maxCust);
        this.randCustEachHour.push(custPerHour);
      }
    },
    cookiesBoughtEachHour: function () {
      this.custEachHour();
      for (let i = 0; i < hours.length; i++) {
        let cookies = Math.round(this.avgCookieBought * this.randCustEachHour[i]);
        this.cookiesPerHour.push(cookies);
      }
    },
    render: function(){
      let articleElem = document.createElement('article');
      citiesSection.appendChild(articleElem);
      
      let h2Elem = document.createElement('h2');
      h2Elem.innerText = this.name;
      
      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);
      ulElem.appendChild(h2Elem);
    
      for(let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]} ${this.cookiesPerHour[i]}`;
        ulElem.appendChild(liElem);
        this.totalCookies += this.cookiesPerHour[i];
      }
      
      let liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookies}`;
      ulElem.appendChild(liTotal);
      },
  }

let paris = {
    name: `Paris`,
    minCust: 20,
    maxCust: 38,
    avgCookieBought: 2.3,
    cookiesPerHour: [],
    randCustEachHour: [],
    totalCookies: 0,
    custEachHour: function () {
      for (let i = 0; i < hours.length; i++) {
        let custPerHour = randomNumber(this.minCust, this.maxCust);
        this.randCustEachHour.push(custPerHour);
      }
    },
    cookiesBoughtEachHour: function () {
      this.custEachHour();
      for (let i = 0; i < hours.length; i++) {
        let cookies = Math.round(this.avgCookieBought * this.randCustEachHour[i]);
        this.cookiesPerHour.push(cookies);
      }
    },
    render: function(){
      let articleElem = document.createElement('article');
      citiesSection.appendChild(articleElem);
      
      let h2Elem = document.createElement('h2');
      h2Elem.innerText = this.name;
      
      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);
      ulElem.appendChild(h2Elem);
    
      for(let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]} ${this.cookiesPerHour[i]}`;
        ulElem.appendChild(liElem);
        this.totalCookies += this.cookiesPerHour[i];
      }
      
      let liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookies}`;
      ulElem.appendChild(liTotal);
      },
  }

let lima = {
    name: `Lima`,
    minCust: 2,
    maxCust: 16,
    avgCookieBought: 4.6,
    cookiesPerHour: [],
    randCustEachHour: [],
    totalCookies: 0,
    custEachHour: function () {
      for (let i = 0; i < hours.length; i++) {
        let custPerHour = randomNumber(this.minCust, this.maxCust);
        this.randCustEachHour.push(custPerHour);
      }
    },
    cookiesBoughtEachHour: function () {
      this.custEachHour();
      for (let i = 0; i < hours.length; i++) {
        let cookies = Math.round(this.avgCookieBought * this.randCustEachHour[i]);
        this.cookiesPerHour.push(cookies);
      }
    },
    render: function(){
      let articleElem = document.createElement('article');
      citiesSection.appendChild(articleElem);
      
      let h2Elem = document.createElement('h2');
      h2Elem.innerText = this.name;
      
      let ulElem = document.createElement('ul');
      articleElem.appendChild(ulElem);
      ulElem.appendChild(h2Elem);
    
      for(let i = 0; i < hours.length; i++){
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]} ${this.cookiesPerHour[i]}`;
        ulElem.appendChild(liElem);
        this.totalCookies += this.cookiesPerHour[i];
      }
      
      let liTotal = document.createElement('li');
      liTotal.textContent = `Total: ${this.totalCookies}`;
      ulElem.appendChild(liTotal);
      },
  }

function randomNumber(min, max){
    // got from MDN docs
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let cities = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; cities.length; i++){
  cities[i].custEachHour();
  cities[i].cookiesBoughtEachHour();
  cities[i].render();
}
