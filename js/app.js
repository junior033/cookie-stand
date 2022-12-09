"use strict"

let hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

let storesTable = document.getElementById('stores');

let storeForm = document.getElementById('storeForm');

let total = 0;

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

let tableElem = document.createElement('table');
storesTable.appendChild(tableElem);

let row1 = document.createElement('tr');
tableElem.appendChild(row1);

let firstCell = document.createElement('th');
firstCell.textContent = '';
row1.appendChild(firstCell);

for (let i = 0; i < hours.length; i++) {
  let th1Elem = document.createElement('th');
  th1Elem.textContent = hours[i];
  row1.appendChild(th1Elem);
}

let locationTotal = document.createElement('th');
locationTotal.textContent = 'Daily Location Total';
row1.appendChild(locationTotal);

Store.prototype.render = function () {
  this.cookiesBoughtEachHour();

  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.name;
  row2.appendChild(td1Elem);

  for (let i = 0; i < hours.length; i++) {
    let td2Elem = document.createElement('td');
    td2Elem.textContent = this.cookiesPerHour[i];
    row2.appendChild(td2Elem);
  }

  let dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.totalCookies;
  row2.appendChild(dailyTotal);


}


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Toyko', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

let cities = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < cities.length; i++) {
  cities[i].render();
}
let row3 = document.createElement('tr');

function footer(){
let grandTotal = 0;
tableElem.appendChild(row3);

let totalCell = document.createElement('td');
totalCell.textContent = 'Total';
row3.appendChild(totalCell);

for (let i = 0; i < hours.length; i++) {  
  let hourlyTotals = 0;
  for (let j = 0; j < cities.length; j++) { 
    let cookies = cities[j].cookiesPerHour[i];
    hourlyTotals += cookies;
  }
  let hourlyTotalData = document.createElement('td');
  hourlyTotalData.textContent = hourlyTotals;
  row3.appendChild(hourlyTotalData);
  grandTotal += hourlyTotals; 
}

let grandTotalData = document.createElement('td');
grandTotalData.textContent = grandTotal;
row3.appendChild(grandTotalData);
}


function handleSubmit(event){
  event.preventDefault();
  
  let storeName = event.target.storeName.value;
  let minimumCustomer = parseInt(event.target.minimumCustomers.value);
  let maximumCustomer = parseInt(event.target.maximumCustomers.value);
  let averageCookiesBought = parseInt(event.target.averageCookiesBought.value);
  
  let newStore = new Store(storeName, minimumCustomer, maximumCustomer, averageCookiesBought);
  cities.push(newStore);
  newStore.render();
  row3.innerHTML = '';
  footer();
  document.getElementById('storeForm').reset();
}

footer();

storeForm.addEventListener('submit', handleSubmit);
