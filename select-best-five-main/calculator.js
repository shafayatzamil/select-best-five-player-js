 
 function getElementValueById(element){
    const amountElement= document.getElementById(element);
    const amountElementString= amountElement.value;
    const amount = parseFloat(amountElementString);
    return amount;
 }

 document.getElementById('calculate').addEventListener('click',function(){
    const perplayerAmount=getElementValueById('per-player-amount');

    const selectedPlayer= document.querySelectorAll('#selected-player li');
    // console.log(selectedPlayer.length);
    const totalPlayerCost = selectedPlayer.length*perplayerAmount;
    console.log(totalPlayerCost);

    const playerExpense= document.getElementById('player-expense');
    playerExpense.innerText=totalPlayerCost;

    
 

 })

 document.getElementById('total-calculate').addEventListener('click',function(){
   //  const managerAmount = document.getElementValueById('manager-amount');
   //  const coachAmount= document.getElementValueById('coach-amount');

   //  console.log(managerAmount,coachAmount);

   //  const playerAmount= document.getElementById('player-expense').innerText;
   //  const totalCostAmount= playerAmount+managerAmount+coachAmount;

   //  const totalamount= document.getElementById('cost');
   //  // totalamount.innerText= totalCostAmount;
   // //  console.log(totalamount.innerText=totalCostAmount);
   // totalamount.innerText=totalCostAmount;
    
const managerAmount = document.getElementById('manager-amount');
const managerAmountInput = managerAmount.value;
const managerAmountInputNumber = parseFloat(managerAmountInput);

const coachAmount= document.getElementById('coach-amount');
const coachAmountInput = coachAmount.value; 
const coachAmountInputNumber = parseFloat(coachAmountInput);

const totalAmount = managerAmountInputNumber + coachAmountInputNumber;


const playerAmount = document.getElementById('player-expense');
const playerAmountTotal = playerAmount.innerText;
const playerAmountTotalNumber = parseFloat(playerAmountTotal);

const playerTotal =  totalAmount + playerAmountTotalNumber;
  



const cost = document.getElementById('cost');
cost.innerText = playerTotal;






 });