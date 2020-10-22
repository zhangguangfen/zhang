//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
   }
   //接收URL中的参数booksId
   var id = getUrlParam('dataId');
//    async function getAndRender(){
//        var data = await $.get('http://127.0.0.1/anta/js/data.json');
       $.ajax({ 
            type:'get',
            url:'http://127.0.0.1/anta/js/data.json',
            dataType:'json',
            async:false,
            success: function(data){
                $.each(data.data,(index,item)=>{
           if(id == `"${item.id}"`){
               //console.log('2');
               //console.log(item.img);
        $('.main-top').append(`<div class="top-left">
        <div class="left-img">
           <div class="left-img-top">
               <ul>
                   <li><img src="${item.img}" alt=""></li>
                   <li><img src="${item.img1}" alt=""></li>
                   <li><img src="${item.img2}" alt=""></li>
                   <li><img src="${item.img3}" alt=""></li>
                   <li><img src="${item.img4}" alt=""></li>
               </ul>
           </div>
           <div class="left-img-bottom">
               <a href="javascript:;">分享</a>
               <a href="javascript:;">收藏</a>
           </div>
       </div>
       <div class="right-img">
            <img src="${item.img}" alt=""> 
           <div class="focus-box">

           </div>
       </div> 
       <div class="bigImg">
           <img src="${item.img}" alt="">
       </div> 
   </div>
   <div class="top-right">
       <div class="cloth-price">
           <p>${item.cloth}</p>
           <h3>${item.cloth_title}</h3>
           <p>款号：<span>${item.id}</span></p>
           <p>${item.price}</p>
           <div class="cloth-price-bottom">
               <div class="goods">促销</div>
               <div class="goods-content">
                   <a href="javascript:;" title="满259减20满300减50满399减90满499减130">满259减20满300减50满399减90满499减130</a>
                   <a href="javascript:;"title="官方商城满100包邮" >官方商城满100包邮</a>
               </div>
           </div>
       </div>
       <div class="cloth-img">
           <ul>
               <li><img src="${item.img5}" alt=""></li>
               <li class="color-code"><img src="${item.img6}"  alt=""></li>
           </ul>
           <p>查看尺码对照表</p>
           <div class="cloth-size-chart">
               <div class="cloth-cell">
                   <div class="goods-size">
                       <span>尺码:</span>
                       <input type="text" placeholder="请选择尺码">
                       <i class="icon-triangle-left"></i>
                   </div>
                   <i class="line"></i>
                   <div class="goods-number">
                       <span>数量:</span>
                       <input value="1" type="text" placeholder="购买数量">
                       <i class="icon-triangle-right"></i>
                   </div>
                   <div class="cloth-cell size">
                       <i class="btn-close"></i>
                       <p>请选择符合您的码数</p>
                       <ul class="size-text">
                           <li title="XS">XS</li>
                           <li title="S">S</li>
                           <li title="M">M</li>
                           <li title="L">L</li>
                           <li title="XL">XL</li>
                           <li title="2XL">2XL</li>
                           <li title="3XL">3XL</li>
                       </ul>
                   </div>
                   <div class="number">
                   <ul class="number-text">
                       <li>1</li>
                       <li>2</li>
                       <li>3</li>
                       <li>4</li>
                       <li>5</li>
                       <li>6</li>
                       <li>7</li>
                       <li>8</li>
                       <li>9</li>
                       <li>10</li>
                   </ul>                  </div>
               </div>
               <div class="cloth-cell">
                   <div class="goods-youhui">
                       <span>领取优惠券</span>
                       <i class="icon-triangle-right"></i>
                   </div>
               </div>
           </div>
           <div class="goods-btn">
               <a href="javascript:;">加入购物车</a>
               <a href="javascript:;">立即购买</a>
           </div>
       </div>
   </div>`)
           $('.focus-box').css("background-image","url("+item.img+")");
           }
       })
            } 
        })   
       
//选项卡的按钮
 var img_list = document.querySelectorAll('.left-img-top ul li img');
var small_img = document.querySelector('.right-img img'); 
var small = document.querySelector('.right-img')
// 小图的焦点部分;
var focus_ele = document.querySelector(".focus-box");
// 大图的焦点部分;  
var bigImg = document.querySelector('.bigImg');
var bigImg_focus = document.querySelector(".bigImg img");

//如果左边的小图片变化的话 右边的图片全部跟着变化
// $('.left-img-top ul li').click(function(){
//     var Src = $(this).children().attr("src");
//     $(this)
//     .addClass('active')
//     .siblings() //所有兄弟元素(不包括自己)
//     .removeClass('active') //移除类名
//     .parents('.left-img')
//     .siblings('.right-img')
//     .children('img') 
//     .attr("src",Src)
//     .next()
//     .css("background-image","url("+Src+")")
//     .parents('.right-img')
//     .siblings('.bigImg')
//     .children()
//     .attr('src',Src);
     
// })

//鼠标移入小图片
small.addEventListener('mouseenter',function(){
    focus_ele.style.display = "block";
    bigImg.style.display = "block";
    small_img.style.opacity = 0.3;
})
//鼠标移出小图片
small.addEventListener('mouseleave',function(){
    focus_ele.style.display = "none";
    bigImg.style.display = "none";
    small_img.style.opacity = 1;
})
//更换图片
for(var i = 0 ; i < img_list.length ; i ++){
      img_list[i].onclick = function(){
            for(var j = 0 ; j < img_list.length ; j ++){
                img_list[j].className = "";
            }
            this.className = "active";
            //获取当前点击的图片的src
             var Src = this.getAttribute("src");
            // 更改小图片的src : 
            small_img.src = Src;
            // 改 focus 的背景图;
            focus_ele.style.backgroundImage = "url(" + Src + ")";
            // 改大图的图片src;
            bigImg_focus.src = Src;
            console.log(Src);
      }
}   

// 鼠标在small上移动的时候 focus 要跟着鼠标移动;
// 查看父级定位元素的属性 offsetParent;
 function getOffset(dom) {
    var res = {
          left: 0,
          top: 0
    }
    while (dom != document.body) {
          res.left += dom.offsetLeft;
          res.top += dom.offsetTop;
          dom = dom.offsetParent;
    }
    return res;
}
//var top_left = document.querySelector('.top-left');
 var offset = getOffset(small_img); 
// 获取focus元素的宽高; 
var focus_ele_size = {
    w: parseInt(getComputedStyle(focus_ele).width),
    h: parseInt(getComputedStyle(focus_ele).height)
};
// 获取small元素的宽高;
var small_size = {
    w: parseInt(getComputedStyle(small).width),
    h: parseInt(getComputedStyle(small).height)
};
// 获取bigImg_focus 元素的宽高;
var scale_img_size = {
    w: parseInt(getComputedStyle(bigImg_focus).width),
    h: parseInt(getComputedStyle(bigImg_focus).height)
};
// 获取 bigImg元素的宽高;
var scale_box_size = {
    w: parseInt(getComputedStyle(bigImg).width),
    h: parseInt(getComputedStyle(bigImg).height)
};

var focus_position = {
    x : 0 , 
    y : 0
}
small.onmousemove = function (e) {
    !e && (e = window.event);
    var _left = e.clientX + getScroll().left - offset.left - focus_ele_size.w / 2;
    var _top = e.clientY + getScroll().top - offset.top - focus_ele_size.h / 2;
    move( _left , _top );
    focus_position.x = _left;
    focus_position.y = _top;
}
function getScroll(){
	return {
		left:document.documentElement.scrollLeft||document.body.scrollLeft,
		top:document.documentElement.scrollTop||document.body.scrollTop
	}
}
function move( _left , _top ) {
    // left : 极值 0  small_ele.w - focus_ele.w ;
    // top  : 极值 0  small_ele.h - focus_ele.h ;
    // 边界检测 : 
    if (_left <= 0) {
          _left = 0;
    }
    var _max_left = small_size.w - focus_ele_size.w;
    if (_left >= _max_left) {
          _left = _max_left;
    }
    if (_top <= 0) {
          _top = 0;
    }
    var _max_top = small_size.h - focus_ele_size.h
    if (_top >= _max_top) {
          _top = _max_top;
    }

    focus_ele.style.left = _left + "px";
    focus_ele.style.top = _top + "px";

    // 让 focus 里面的背景图进行定位;
    focus_ele.style.backgroundPositionX = -1 *_left + "px";
    focus_ele.style.backgroundPositionY = -1 * _top + "px";

    // 计算当前运动的x，y总路程的百分比;
    var prop = {
          x: parseInt(_left * 100 / _max_left) / 100,
          y: parseInt(_top * 100 / _max_top) / 100
    }
    var scale_max_left = scale_img_size.w - scale_box_size.w;
    var scale_max_top  = scale_img_size.h - scale_box_size.h;

    bigImg_focus.style.left = -scale_max_left * prop.x + "px";
    bigImg_focus.style.top = -scale_max_top * prop.y + "px";
}
//放大镜放大缩小
(function(window,document) {      
    var   prefix = "", 
    _addEventListener, 
    onwheel, 
    // 存支持的滚轮事件类型;
    support;
    if ( window.addEventListener ) {
        _addEventListener = "addEventListener";
    } else {
            _addEventListener = "attachEvent";
            prefix = "on";
    }
    support = "onwheel" in document.createElement("div") ? "wheel" : // 各个厂商的高版本浏览器都支持"wheel"
            document.onmousewheel !== undefined ? "mousewheel" : // Webkit 和 IE一定支持"mousewheel"
            "DOMMouseScroll"; // 低版本firefox    
    window.addWheelListener = function( elem, callback, useCapture ) {
        _addWheelListener( elem, support, callback, useCapture )     
    // handle MozMousePixelScroll in older Firefox
    if( support == "DOMMouseScroll" ) {
        _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
    } 
};
            
    // 5. 事件绑定 : 
    function _addWheelListener( elem, eventName, callback, useCapture ) {
        elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
            !originalEvent && ( originalEvent = window.event );
            var event = {
                // 保留原事件对象;
                originalEvent: originalEvent,
                //  发生事件的元素
                target: originalEvent.target || originalEvent.srcElement,
                // 事件类型  ; 
                type: "wheel",
                deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                // 参考的主要数据;
                deltaX: 0,
                deltaZ: 0,
                // 自己默认创造了一个功能 ;
                preventDefault: function() {
                    // 兼容 IE 和 非 IE 默认事件阻止;
                    originalEvent.preventDefault ?
                        originalEvent.preventDefault() :
                        originalEvent.returnValue = false;
                }
            };
            
            // 根据事件计算 delataY ;
            if ( support == "mousewheel" ) {
                event.deltaY = - 1/40 * originalEvent.wheelDelta;
                // 
                originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
            } else {
                // 和 正常的deltaY 是相同的;
                event.deltaY = originalEvent.detail;
            }
            // 调用事件处理函数，把刚才创建好的事件对象进行传入;
            return callback( event );

        }, useCapture || false );
    }
})(window,document);



// 需要 鼠标滚轮事件;
// // 引入插件的时候必须在业务代码之前;
// // magnifier_small_focus_ele

 addWheelListener(focus_ele , function(e){
    !e && (e = window.event)
    // console.log("判定当前滚轮方向， deltaY" , e.deltaY);

    // 向下滚动是 放大 ;
    // 向上滚动是 缩小 ;
    if(e.deltaY > 0){
          // 鼠标滚轮向下 => 放大 
          focus_ele_size.w += 4;
          focus_ele_size.h += 4;
          focus_position.x -= 2;
          focus_position.y -= 2;
          // width : 2 / 321.5;
    }else{
          // 鼠标滚轮向上 => 缩小;
          focus_ele_size.w -= 4;
          focus_ele_size.h -= 4;
          focus_position.x += 2;
          focus_position.y += 2;
    }
    // 等比例进行放大|缩小;
    // 现在的宽度 = 大图图片的宽度  /   (原图宽度 / 增加|减少之后的宽度);
    scale_img_size.w = 400 * ( 645 / focus_ele_size.w)
    scale_img_size.h = 400 * ( 645 / focus_ele_size.h);
    bigImg_focus.style.width  =  scale_img_size.w + "px";
    bigImg_focus.style.height =  scale_img_size.h + "px";

    move( focus_position.x , focus_position.y );

    // 给focus 元素赋值width , height 
    focus_ele.style.width  = focus_ele_size.w + "px";
    focus_ele.style.height = focus_ele_size.h + "px";

    e.preventDefault();
})

//点击请选择尺码 出现尺码
$('.goods-size').click(function(){
    $('.size')
    .addClass('active')
})
//点击右上角 关闭
$('.btn-close').click(function(){
    $('.size')
    .removeClass('active')
})
//出现商品数量
$('.goods-number').click(function(){
    $('.number')
    .addClass('active');
    return false;
})
//双击两个 关闭数量
$('.goods-number').dblclick(function(){
    $('.number')
    .removeClass('active');
    return false;
})
//鼠标移入尺寸选项区
$('.size-text li').mouseenter(function(){
    $(this)
    .css("background",'rgb(236, 233, 233)');
})
//鼠标移出选项区
$('.size-text li ').mouseout(function(){
    $(this)
    .css("background",'#ffffff');
})
//鼠标移入数量选项区
$('.number-text li').mouseenter(function(){
    $(this)
    .css("background",'rgb(236, 233, 233)');
})
//鼠标移出数量选项区
$('.number-text li ').mouseout(function(){
    $(this)
    .css("background",'#ffffff');
})
//鼠标点击 尺码 到input框
var sizeLiArr = document.querySelectorAll('.size-text li');
var goodsInp = document.querySelector('.goods-size input')
for(var i = 0 ;i < sizeLiArr.length;i ++){
    sizeLiArr[i].onclick = function(){
        goodsInp.value = this.innerHTML;
        //console.log(this.innerHTML);
    }
}
//鼠标点击 数量 到input框
var numberLiArr = document.querySelectorAll('.number-text li');
var goodsNum = document.querySelector('.goods-number input')
for(var i = 0 ;i < numberLiArr.length;i ++){
    numberLiArr[i].onclick = function(){
        goodsNum.value = this.innerHTML;
        //console.log(this.innerHTML);
    }
}

//加入购物车
$('.goods-btn a').eq(0).click(function(){
    var size = $('.goods-size input').val();
    // console.log(size);
       if(size == ""){
           $('.tip').css("display","block");
           var timeId = setTimeout(function(){
            $('.tip').css("display","none");
           },2000);
       }else{
        $.ajax({
            url:'http://127.0.0.1/anta/interface/addwq.php',
            data:{
                id:$('.cloth-price p span').text(),
                name:$('.cloth-price p').eq(0).text(),
                price:$('.cloth-price p').eq(2).text(),
                img:$('.color-code img').attr('src'),
                num:$('.goods-number input').val(),
                attr:size,
            },
            success:function(res){
                console.log(res);
                if(res.code){
                    alert('商品加入成功')
                    location.href = "./cart.html";
                }    
            },
            dataType:'json'
        })
       }
       return false;
    }) 
//console.log($('.cloth-price p span').text())
//console.log($('.cloth-price p').eq(0).text());
//console.log($('.cloth-price p').eq(2).text());
//console.log($('.color-code img').attr('src'));
