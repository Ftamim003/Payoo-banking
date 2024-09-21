
document.getElementById('add-money-btn').addEventListener('click',function(event){

    event.preventDefault();

    const inputAmount= getINputElementById('input-amount') 

    const inputPin=getINputElementById('input-pin') 


    if(inputPin==='1234'){
        
        const balance= document.getElementById('main-balance').innerText;

        const totalBalance= parseInt(inputAmount) + parseInt(balance);

        document.getElementById('main-balance').innerText=totalBalance;

        
        const cashHistory=document.createElement('p');

        cashHistory.innerText= `Amount added: ${parseInt(inputAmount)} New Balance: ${totalBalance}`;
        
        document.getElementById('transaction').appendChild(cashHistory);
       

    }
    else{
      alert("Invalid input! Please type valid input")  
    }

}) 