//step1:please deposit button click
document.getElementById('btn-Deposit').addEventListener('click',function(){
    //step2: Get the deposit from input
    const depositField = document.getElementById('depositFieldSet');
    const newdepositAmountString = depositField.value;
    const newdepositAmount =parseFloat(newdepositAmountString);
      //step3: Get the deposit total amount
      const depositTotalElement = document.getElementById('depositFieldSetNumber');
      const previousdepositTotalString = depositTotalElement.innerText;
      const previousdepositTotal = parseFloat(previousdepositTotalString);

      //step4: new and previous value addig and add to new section update value like deposit
      const currentDepositeTotal = previousdepositTotal + newdepositAmount;
      depositTotalElement.innerText = currentDepositeTotal;
        
      //step5:Get Balance Total 
      const TotalBalanceElement = document.getElementById('totalBalance');
      const previousTotalBalanceString = TotalBalanceElement.innerText;
      const previoustotalBalance = parseFloat(previousTotalBalanceString);

      //step6: current total balance
      const currentBalanceTotals = previoustotalBalance + newdepositAmount;
      TotalBalanceElement.innerText = currentBalanceTotals;
      //step7: clear field
      depositField.value='';
})