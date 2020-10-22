
var user = document.getElementById('user');
var pass = document.getElementById('pass');
var form = document.querySelectorAll('.form')[0];
var btn = document.querySelector('.login input');

// 2 点击登陆按钮,会触发form表单的提交事件
btn.onclick = function(e){
    //阻止浏览器的默认跳转动作   
    e = e||window.event;
    e.preventDefault?e.preventDefault():e.returnValue =false; 
    //手动跳转到login.php
    //console.log(user.value);
        $.ajax({
        url:'http://127.0.0.1/anta/interface/login.php',
        dataType: 'json',
        cache : false,
        data:{
            email:user.value,
            password:pass.value
        },
        success: function(data){
            location.href = 'http://127.0.0.1/anta/pages/cart.html'
        } 
    })   
}