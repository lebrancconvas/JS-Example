import './style.css';
import JSConfetti from 'js-confetti';
import coinImgURL from './assets/coin-64.png';
import billImgURL from './assets/bill-64.png';

const balance = document.getElementById('balance');
const display = document.getElementById('display');

const addCoinButton = document.getElementById('addcoin');
const addBillButton = document.getElementById('addbill');

const coinImg = `<img src="${coinImgURL}" alt="coin" />`;
const billImg = `<img src="${billImgURL}" alt="bill" />`;

const jsconfetti = new JSConfetti();

balance.innerHTML = '0';

const minBalanceToRich = 1000
const maxBalanceToRich = 2000;
const targetBalanceToRich = Math.floor(Math.random() * (maxBalanceToRich - minBalanceToRich) + minBalanceToRich);

// Method when clicking on add coin button.
addCoinButton.addEventListener('click', () => {
  let balanceNumber = parseInt(balance.innerHTML);
  balanceNumber += 10;
  balance.innerHTML = balanceNumber;
  display.insertAdjacentHTML('beforeend', coinImg);

  if(balanceNumber > targetBalanceToRich) {
    jsconfetti.addConfetti();
    addCoinButton.disabled = true;
    addBillButton.disabled = true;
    balance.innerHTML = `ยินดีด้วยคุณรวยแล้ว!! ที่จำนวนเงินในบัญชี ${balanceNumber}`;
  }
});

// Method when clicking on add bill button. 
addBillButton.addEventListener('click', () => {
  let balanceNumber = parseInt(balance.innerHTML);
  balanceNumber += 100;
  balance.innerHTML = balanceNumber;
  display.insertAdjacentHTML('beforeend', billImg); 
  
  if(balanceNumber > targetBalanceToRich) {
    jsconfetti.addConfetti(); 
    addCoinButton.disabled = true;
    addBillButton.disabled = true;
    balance.innerHTML = `ยินดีด้วยคุณรวยแล้ว!! ที่จำนวนเงินในบัญชี ${balanceNumber}`; 
  } 
});