
document.getElementById('cash-out-money-btn').addEventListener('click',function(event){

    event.preventDefault();
    const cashOutAmount=getINputElementById('cash-out-amount') //input field 

    const pinNumber= getINputElementById('cash-out-pin') //input field

    if(pinNumber==='1234'){

        const mainBalance=document.getElementById('main-balance').innerText; //text field

        const updatedBalance= parseInt(mainBalance)-parseInt(cashOutAmount);

        document.getElementById('main-balance').innerText= updatedBalance;
    }else{
        alert('Wrong information!')
    }

})