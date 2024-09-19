
document.getElementById('cash-out-money-btn').addEventListener('click',function(event){

    event.preventDefault();
    const cashOutAmount=document.getElementById('cash-out-amount').value;  //input field

    const pinNumber=document.getElementById('cash-out-pin').value;   //input field

    if(pinNumber==='1234'){

        const mainBalance=document.getElementById('main-balance').innerText; //text field

        const updatedBalance= parseInt(mainBalance)-parseInt(cashOutAmount);

        document.getElementById('main-balance').innerText= updatedBalance;
    }else{
        alert('Wrong information!')
    }

})