document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    if(email === 'raj@gmail.com' && password === 'secret'){
        window.location.href="insideBapperBank.html";
    }
    else{
        alert('invalid user');
    }
})