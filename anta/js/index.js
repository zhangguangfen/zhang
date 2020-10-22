 //图片2中的移入移出事件
 $('.img2-con>a').mouseenter(function(){
    $(this)
    .children('div')
    .children('.hover-up')
    .css("display","block")
    .animate({
        bottom:0,
        opacity:1
    },200)
})
$('.img2-con>a').mouseout(function(){
    $(this)
    .children('div')
    .children('.hover-up')
    .css("display","block")
    .animate({
        bottom:-50,
        opacity:0
    },200)
    .delay(100)
})
var picture = $('.move-middle-con div');
var index = 0;
$('#next').click(function(){
   index ++;
   if(index > 3){
        index = 3;
       $('.move-middle-con').css("left","-315*index")
    }
   /* console.log(index); */
   var length = index*(-315)+"px";
    $('.move-middle-con').animate({
        left:length
    },1000)
})

$('#prev').click(function(){
   index --;
   if(index < 0){
       $('.move-middle-con').css("left","0px");
       index = 0;
    }
   /* console.log(index); */
   var length = index * (-315)+ "px";
   $('.move-middle-con').animate({
        "left":length
    },1000);      
})
//倒计时
function countDown( target , fn ){
    // 目标时间 : target 是一个数组;
    // [2020,11,11,00,00,00];
    // 年月日拼接 : 2020/10/22
    var date_ymd = target.slice(0,3).join("/");
    // 时分秒的拼接 : 18:30:00;
    var date_hms = target.slice(3).join(":");
    var date_str = date_ymd + " " + date_hms;
    // 把数组拼接成符合时间规则的字符串;
    var target_d = new Date(date_str);
    //      console.log(target_d);
    // 目标时间的时间戳;
    var target_t = target_d.getTime();
    // 当前时间 :
    var t = setInterval( function(){
        // 获取当前时间;
        var now_t = Date.now();
        // 计算目标和当前时间的时间戳差值;
        var reduce = target_t - now_t;
        // 如果时间戳的差值已经小于0了表示当前时间已经超过了目标时间,那么没有必要倒计时;
        if( reduce <= 0){
           clearInterval(t);
           return false;
        }
        // 当前的倒计时是不是带天数的;
        // 如果大于了 86400000则表示大于 1 天;
        if( reduce > 864e+5 ){
           // 计算应该带有天数;
           var d=parseInt(reduce/1000/3600/24);
           reduce=reduce-d*864e+5;
           var h = Math.floor(reduce / 36e+5); 
           var m = Math.floor(reduce / 60000 % 60)
           var s = Math.round(reduce / 1000 % 60)
           var ms = reduce % 1000;
           fn({
                 day:d,
                 hours : h , 
                 min   : m , 
                 sec   : s,
               //   ms    : ms 
           });
        }else{
           // 计算时没有天数;
           var h = Math.floor(reduce / 36e+5); 
           var m = Math.floor(reduce / 60000 % 60)
           var s = Math.round(reduce / 1000 % 60)
           // var ms = reduce % 1000;
           var d=0;
           fn({
                 day:d,
                 hours : h , 
                 min   : m , 
                 sec   : s,
           });
        }
    } , 1000)

}
countDown([2020,11,11,11,11,11] , function( count_down ){
   var day=count_down.day;
   $('.box3').text(day);
   var hours=count_down.hours;
   $('.box5').text(hours);
   var min=count_down.min;
   $('.box7').text(min);
   var sec=count_down.sec;
   if(sec<10){
       $('.box9').text("0"+sec);
   }else{
    $('.box9').text(sec);
   }
    //  console.log(count_down); 
});
//点击立即选购出现 
$('.img2-con a').click(function(){
    $('.img2-con span').css("display","block");
    var time = setTimeout(function(){
        $('.img2-con span').css("display","none");
    },1000);
})
$('.now-show1 a').click(function(){
    $('.now-show1 span').css("display","block");
    var time = setTimeout(function(){
        $('.now-show1 span').css("display","none");
    },1000);
})
$('.now-show2 a').click(function(){
    $('.now-show2 span').css("display","block");
    var time = setTimeout(function(){
        $('.now-show2 span').css("display","none");
    },1000);
})





//渲染轮播图的数据
$(function(){ 
 $.ajax({
  type:"get",
  url:"http://127.0.0.1/anta/js/data.json",
  dataType:"json",
  success:function(res){
   $.each(res.data, function(index,item) {
       $('.move-middle-con').append(`<div class="picture">
       <a  href='./detail.html?dataId="${item.id}"' title="${item.title}"  target="_blank"><img width="100%" src="${item.img}" alt="">
       <span>${item.title}</span></a>
   </div>`)
  });
 },
 error:function(){
  alert("error")
 }
});
})