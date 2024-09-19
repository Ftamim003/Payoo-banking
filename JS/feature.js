document.getElementById('cash-out-money-main-btn').addEventListener('click',function(){

    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('cash-in-form').classList.add('hidden');
})


document.getElementById('add-money-main-btn').addEventListener('click',function(){

    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('cash-in-form').classList.remove('hidden');
})