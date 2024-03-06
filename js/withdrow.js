//step1:please withdrow button click
document.getElementById('btn-Withdraw').addEventListener('click',function(){
    //step2:Get the withdrow from input
    const withdrawField = document.getElementById('withdrawFieldSet');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    
    //step7: clear field
    withdrawField.value ='';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide  A VALIDE NUMBER');
        return;
    }
    //step:3  Get the withdrow total amount
    const withdrawTotalElement = document.getElementById('withdrawFieldSetNumber');
    const previousWithdrowTotalString = withdrawTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
    
    //step5:Balance Total 
    const TotalBalanceElement = document.getElementById('totalBalance');
    const totalBalanceElementString = TotalBalanceElement.innerText;
    const previoustotalBalanceElement = parseFloat(totalBalanceElementString);

    
    if(newWithdrawAmount > previoustotalBalanceElement){
        alert('Bank a ato taka nai');
        return;
    }

    //step:4 new and previous value addig and add to new section update value like withdraw
    const currentWithdrowTotal = previousWithdrowTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrowTotal;

    //step:6 calculate balance total
    const newBalanceTotal = previoustotalBalanceElement - newWithdrawAmount ;
    withdrawTotalElement.innerText = newBalanceTotal;

})