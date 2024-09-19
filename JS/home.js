
document.getElementById('add-money-btn').addEventListener('click',function(event){

    event.preventDefault();

    const inputAmount=document.getElementById('input-amount').value;

    const inputPin=document.getElementById('input-pin').value;


    if(inputPin==='1234'){
        
        const balance= document.getElementById('main-balance').innerText;

        const totalBalance= parseInt(inputAmount) + parseInt(balance);

        document.getElementById('main-balance').innerText=totalBalance;
    }
    else{
      alert("Invalid input! Please type valid input")  
    }

}) 