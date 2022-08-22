 
 function getElementValueById(element){
    const amountElement= document.getElementById(element);
    const amountElementString= amountElement.value;
    const amount = parseFloat(amountElementString);
    return amount;
 }

 document.getElementById('calculate').addEventListener('click',function(){
    const perplayerAmount=getElementValueById('per-player-amount');

    const selectedPlayer= document.querySelectorAll('#selected-player li');
    
    const totalPlayerCost = selectedPlayer.length*perplayerAmount;
    console.log(totalPlayerCost);

    const playerExpense= document.getElementById('player-expense');
    playerExpense.innerText=totalPlayerCost;


 });

 document.getElementById('total-calculate').addEventListener('click',function(){
    const managerAmount = getElementValueById('manager-amount');
    const coachAmount=getElementValueById('coach-amount');

    const playerAmountString= document.getElementById('player-expense').innerText;
    const playerAmount= parseFloat(playerAmountString);
    const totalCostAmount= playerAmount+managerAmount+coachAmount;

    const totalamount= document.getElementById('cost');
   totalamount.innerText=totalCostAmount;

 });