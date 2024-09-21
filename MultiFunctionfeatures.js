
// function transactionHistory(){
   
// }



function commonFunction(id){
 
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('cash-in-form').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
}


function getINputElementById(id){
   const inputValue= document.getElementById(id).value;

   return inputValue;
}
