const depositBtn=document.getElementById('deposit-btn');
const withdrawBtn=document.getElementById('withdraw-btn');
// console.log(depositBtn, withdrawBtn);
const depositField=document.getElementById('deposit-field');
const withdrawField=document.getElementById('withdraw-field');
// console.log(depositField,withdrawField); 
 const depositAmount=document.getElementById('deposit-amount');
 const withdrawAmount=document.getElementById('withdraw-amount');
 const balanceAmount=document.getElementById('balance-amount');
//  console.log(depositAmount,withdrawAmount,balanceAm 


depositBtn.addEventListener('click', function(){
    // Input Field
    const depositInput=document.getElementById('deposit-field');
    const depositInputValue=depositInput.value;
    const depositAmount=parseFloat(depositInputValue);

    // Previous  Deposit Value
    const depositTotal=document.getElementById('deposit-amount');
    const depositValue=depositTotal.innerText;
    const depositPreviousAmount=parseFloat(depositValue);

    // Update new balance
    const totalBalance=document.getElementById('balance-amount');
    const totalBalanceValue=totalBalance.innerText;
    const totalBalanceAmount=parseFloat(totalBalanceValue);
    // console.log(depositAmount,depositPreviousAmount,totalBalance );


    // New Balance
    const newBalance=totalBalanceAmount+depositAmount;
    const newDeposit=depositPreviousAmount+depositAmount;

    depositTotal.innerText=newDeposit;
    totalBalance.innerText=newBalance;

    // Clear
    depositInput.value="";

});
