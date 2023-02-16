
document.getElementById('calculate-btn').addEventListener('click',function(){
  
  //income id niya kaj korte hbe :
  const input = document.getElementById('income');
  const inputs = input.value ;

  //food id niya kaj koreci:
  const food = document.getElementById('food') ;
  const foods = food.value ;

  //rent id niya kaj korte hbe :
  const rent = document.getElementById('rent') ;
  const rents =rent.value ;
  
  //clothes id niya kaj kore value dekate hbe :
  const clothes = document.getElementById('clothes') ;
  const clothess = clothes.value ;
  //console.log(inputs ,foods,rents ,clothess)

  const total = parseInt(foods)+ parseInt(rents)+ parseInt(clothess)
  
  // const newTotal = parseInt(total);
  // console.log(newTotal)
  const totalExpense = document.getElementById('total-expense')
  totalExpense.innerText = total ;
  //totalExpenses.innerText =newTotal ;
  //console.log(totalExpenses)
  
 if(inputs>total){
  alert('user input is valid number');
 }
 else{
  alert('input er value theke kom diye hbe');
  return inputs ;
 }
  //inpit theke totol cost free the minus korbo:
  const balance= document.getElementById('balance')
  balance.innerText = parseInt(inputs) - parseInt(total) ;
})
//2nd step kaj korte heb:

document.getElementById('calculate-2').addEventListener('click',function(){

  const input = document.getElementById('income');
  const inputs = input.value ;

  const save = document.getElementById('save') ;
  const saves = save.value ;
  
  //divition kaj korte hbe:
  const discound = (inputs*saves / 100);
  const savingAmount = document.getElementById('saving-amount')
  savingAmount.innerText  = discound ;
  
  const totalDiscound = balance.innerText-savingAmount.innerText;
  //total-theke dicound minus korte hbe ;
  const remainingBalance = document.getElementById('remaining-balance')
   remainingBalance.innerText = totalDiscound ; 
})