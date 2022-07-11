import './style.css';
import coinImgURL from './assets/coin-64.png';
import billImgURL from './assets/bill-64.png';

const balance = document.getElementById('balance');
const display = document.getElementById('display');

const addCoinButton = document.getElementById('addcoin');
const addBillButton = document.getElementById('addbill');

const coinImg = `<img src="${coinImgURL}" alt="coin" />`;
const billImg = `<img src="${billImgURL}" alt="bill" />`;

balance.innerHTML = '0';

// Method when clicking on add coin button.
addCoinButton.addEventListener('click', () => {
  let balanceNumber = parseInt(balance.innerHTML);
  balanceNumber += 10;
  balance.innerHTML = balanceNumber;
  display.insertAdjacentHTML('beforeend', coinImg);
});

// Method when clicking on add bill button. 
addBillButton.addEventListener('click', () => {
  let balanceNumber = parseInt(balance.innerHTML);
  balanceNumber += 100;
  balance.innerHTML = balanceNumber;
  display.insertAdjacentHTML('beforeend', billImg); 
});