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

const coinSound = document.getElementById('coin-audio');
const billSound = document.getElementById('bill-audio');
const richSound = document.getElementById('rich-audio'); 

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
  coinSound.play();

  if(balanceNumber >= targetBalanceToRich) {
    jsconfetti.addConfetti();
    balance.innerHTML = `ยินดีด้วยคุณรวยแล้ว!! ที่จำนวนเงินในบัญชี ${balanceNumber}`;
    addCoinButton.remove(); 
    addBillButton.remove();
    richSound.volume = 0.5;
    richSound.play();
  }
});

// Method when clicking on add bill button. 
addBillButton.addEventListener('click', () => {
  let balanceNumber = parseInt(balance.innerHTML);
  balanceNumber += 100;
  balance.innerHTML = balanceNumber;
  display.insertAdjacentHTML('beforeend', billImg); 
  billSound.play(); 
  
  if(balanceNumber >= targetBalanceToRich) {
    jsconfetti.addConfetti(); 
    balance.innerHTML = `ยินดีด้วยคุณรวยแล้ว!! ที่จำนวนเงินในบัญชี ${balanceNumber}`; 
    addCoinButton.remove(); 
    addBillButton.remove();
    richSound.volume = 0.5;
    richSound.play(); 
  } 
});