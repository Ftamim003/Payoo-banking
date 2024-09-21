document.getElementById('button-login').addEventListener('click',function(event){
    
    event.preventDefault();

    // console.log("button clicked")

    const phoneNumber= document.getElementById('phone-number').value;
    
   const loginNumber= document.getElementById('login-id').value;

   if(phoneNumber==='01791430459' && loginNumber==='1234' ){
    console.log(" You're logged in");
    window.location.href="homePage.html";
   }
   else{
    alert("Wrong phone number or pin")
   }
}) 