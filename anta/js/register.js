  //注册 验证码
    $('.code').css('color',getRandomColor());
    $('.code2').css('color',getRandomColor());
    var code = document.querySelector('.code');
    var code2 = document.querySelector('.code2');
    function checkcode(){ 
            var html = "";
            for(var i = 0 ; i < 4 ; i ++){
                 var random_int = parseInt(36 * Math.random()).toString(36)
                html += random_int;
            } 
            return html;
        }  
        code.innerHTML = checkcode();
        code2.innerHTML = checkcode();
        function getRandomColor(){
              var random_color = "#";
              for(var i = 0 ; i < 6 ; i ++){
                    random_color += parseInt(Math.random() * 16).toString(16);
              }
              return random_color;
        }
        code.onclick = function(){
              code.innerHTML = checkcode();
              $('.code').css('color',getRandomColor());
              console.log(code.innerHTML);
        }
        code2.onclick = function(){
            code2.innerHTML = checkcode();
            $('.code2').css('color',getRandomColor());
      }
   
var count = 0;
var num = 0;
//手机注册（不可用） 邮箱注册
    var user = document.getElementById('user');
    var codeInp = document.getElementById('code');
    var codeInp2 = document.querySelector('.codeInp2');
    var email = document.getElementById('email');
    var confirmMobile = document.querySelector('.confirmMobile');
    var confirmEmail = document.querySelector('.confirmEmail');
    var errorTip = document.querySelector('.errorTip');
    var errorTip2 = document.querySelector('.errorTip2');
    var confirmPass = document.querySelector('.confirmPass');
    var pass = document.getElementById('pass');
    var form = document.querySelectorAll('form')[0];
    var form2 = document.querySelectorAll('form')[1];
    var confirmmobile = document.querySelector('#confirm-mobile');
    var confirmemail = document.querySelector('#confirm-email');
    //checkbox选框
    var checkbox = document.querySelectorAll('.main-checkbox input')[0];
    //邮箱注册的checkbox
    var checkbox2 = document.querySelectorAll('.main-checkbox input')[1];

    user.addEventListener("blur", function(){
    var user_value = user.value;
    var user_reg = /^1\d{10}$/;
    if (!user_reg.test(user_value)) {
        confirmMobile.style.display="block";
        errorTip.innerHTML="手机号码不正确";
        confirmMobile.style.color = ""
    }else{
        confirmMobile.style.display="none";
        count ++;
    } 

    })
    codeInp.addEventListener('blur',function(){
        var codeInp_value = codeInp.value;
        if (!(codeInp_value == code.innerHTML)) {
            confirmMobile.style.display="block";
            errorTip.innerHTML="验证码不正确";

        }else{
            confirmMobile.style.display="none";
            count ++;
        }

    })
            
    email.addEventListener('blur',function(){
        var email_value = email.value;
        var email_reg = /^\w{6,20}@([a-z]{2,10}|163)\.(com|cn)$/;
        if (!email_reg.test(email_value)) {
            confirmEmail.style.display="block";
            errorTip2.innerHTML="邮箱地址不正确";
        }else{
            confirmEmail.style.display="none";
            num ++;
        }
    })
    pass.addEventListener('blur',function(){
        var pass_value = pass.value;
        var length_reg = /^.{6,}$/;
        if (!length_reg.test(pass_value)) {
            confirmEmail.style.display = "block";
            errorTip2.innerHTML="密码至少六位数";
        } else {
            confirmEmail.style.display = "none";
            num ++;
        }
    })
  
    codeInp2.addEventListener('blur',function(){
        var codeInp2_value = codeInp2.value;
        if (!(codeInp2_value == code2.innerHTML)) {
            confirmEmail.style.display="block";
            errorTip2.innerHTML="验证码不正确";

        }else{
            confirmEmail.style.display="none";
            num ++;
        }

    })
console.log(count);
form.onsubmit = function(e){
    //阻止浏览器的默认跳转动作   
    e = e||window.event;
    e.preventDefault?e.preventDefault():e.returnValue =false;
    //手动跳转到login.php
    if(!(checkbox.checked == true)){
        confirmMobile.style.display="block";
        errorTip.innerHTML="请先阅读并接受隐私政策";
    }else{
        confirmMobile.style.display="none";
    }
    if((count == 2)&&(checkbox.checked)){
        alert('此手机注册正在维护当中，请使用邮箱注册，信息配合！')
    }else{
        alert('还有信息未填，或者填写错误！');
    }
    
}
var btn = document.querySelectorAll('.main-confirm input')[1];
/* var btn = document.querySelector('button'); */
btn.onclick = function(e){
    //阻止浏览器的默认跳转动作
    e = e||window.event;
    e.preventDefault?e.preventDefault():e.returnValue =false; 
    // //手动跳转到login.php
    if(!(checkbox2.checked == true)){
        confirmEmail.style.display="block";
        errorTip2.innerHTML="请先阅读并接受隐私政策";
    }else{
        confirmEmail.style.display="none";
    } 
    console.log(num);
    if((num == 3)&&(checkbox2.checked == true)){
        console.log(email.value);
        $.ajax({
            type:'post',
            url:'http://127.0.0.1/anta/interface/register.php',
            data:{
                email:email.value,
                password:pass.value
            },  
            /* dataType:"json", */
            success: function(data){
                console.log(data);
                location.href = 'http://127.0.0.1/anta/pages/login.html'
            } 
        })
    }else{ 
        alert('还有信息未填，或者填写错误！');
    }
    
}