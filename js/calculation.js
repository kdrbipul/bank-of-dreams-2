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


depositBtn.addEventListener('click',function(){
    // console.log("clicked ");
    const depositFieldValue=depositField.value;
    // console.log(typeof depositFieldValue);
    const depositConvertAmount=parseFloat(depositFieldValue);
    // console.log(depositConvertAmount);
    // console.log(typeof depositConvertAmount);
    const previousDeposit=depositAmount.innerText;
    const previousBalance=balanceAmount.innerText;
    const previousBalanceConvert=parseFloat(previousBalance);
    // console.log(previousDeposit);
    const previousDepositConvert=parseFloat(previousDeposit);
    // console.log(typeof previousDepositConvert);
    // console.log(depositConvertAmount,previousDepositConvert);
    const totalDeposit=previousDepositConvert+depositConvertAmount;
    const totalBalance=depositConvertAmount+previousBalanceConvert;
    // console.log(totalDeposit);
    depositAmount.innerText=totalDeposit;
    balanceAmount.innerText=totalBalance;
    depositField.value="";
});

withdrawBtn.addEventListener('click', function(){
    const withdrawFieldValue=withdrawField.value;
    // console.log(withdrawFieldValue);
    const withdrawConvertAmount=parseFloat(withdrawFieldValue);
    // console.log(withdrawConvertAmount);
    const previousWithdraw=withdrawAmount.innerText;
    const currentBalance=balanceAmount.innerText;
    // console.log(previousWithdraw);
    const  previousWithdrawConvert=parseFloat(previousWithdraw);
    const currentBalanceConvert=parseFloat(currentBalance);
    // console.log(previousWithdrawConvert);
    const totalWithdraw=previousWithdrawConvert-withdrawConvertAmount;
    const totalBalance=withdrawConvertAmount-currentBalanceConvert;
    // console.log(totalWithdraw);
    withdrawAmount.innerText=totalWithdraw;
    balanceAmount.innerText=totalBalance;
    withdrawField.value="";
    // withdrawAmount.innerText="";
});