
// 一打开购物车页面,展示购物车里面的商品
showTbody();
function showTbody(){
$.ajax({
url:'http://127.0.0.1/anta/interface/showlist.php',
success:function(res){
    if(res.code){
        var arr = res.data;
        if(res.data){ 
            //如果有商品,table显示,cart-content隐藏
            $('table').show();
            $('.cart-content').hide();
            //在table里面展示商品信息
            $('tbody').empty();
        $.each(arr,function(index,item){
            $('tbody').prepend(`<tr class="goods-item" id="${item.product_id}">
            <td class="td-check"><input type="checkbox"></td>
            <i></i>
            <td class="td-img">
                <a href="javascript:;">
                <img src="${item.product_img}" alt="">
                </a>
            </td>
            <td class="td-info">
                <div class="td-info-top">
                    <div class="info-item">
                        <h5>${item.product_name}</h5>
                        <p>尺寸:${item.product_attr}</p>
                    </div>
                    <div class="info-price">
                        <span>${item.product_price}</span>
                    </div>
                </div>
                <div class="td-info-bot">
                    <p class="f1">
                        <span>数量</span>
                        <a class="num-minus" href="javascript:;">-</a>
                        <input type="text" value ="${item.product_num}" class="num-input">
                        <a class="num-plus" href="javascript:;">+</a>
                    </p>
                    <p class="fr">
                        <a class = "del" href="javascipt:;">删除</a>
                    </p>
                    </div>
                </div>
            </td>
        </tr>`)
    })
    }                 
        }else{
            //如果没有商品,table隐藏,div显示
            $('table').hide();
            $('.cart-content').show();                       
        } 
    },
    dataType:'json',
    cache:false
    })
}

$('tbody').click(function(e){
    var target = e.target;
    // target是一个dom节点
    if((target.className=='num-plus')||(target.className=='num-minus')){    
        // 点击+增加一个商品数量,点击-减少一个商品数量
        $.ajax({
            url:'http://127.0.0.1/anta/interface/updatewq.php',
            data:{
                type:target.className,
                id:$(target).parents('tr').attr('id')
            },
            success:function(res){
                console.log(1);
                if(res.code){
                    showTbody();
                }
            },
            dataType:'json'
        })
    }else if(target.className=='del'){
        // 点击删除按钮删除一个商品
        $.ajax({
            url:'http://127.0.0.1/anta/interface/delwq.php',
            data:{
                id:$(target).parents('tr').attr('id')
            },
            success:function(res){
                alert('是否删除这个商品')
                if(res.code){
                    showTbody();
                }
            },
            dataType:'json'
        })
    }
    return false;
})

    