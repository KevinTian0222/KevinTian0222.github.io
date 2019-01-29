(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 1200) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 1200) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


/*导航栏*/
(function(){
    /*点击导航变颜色*/
    $('#nav_r li').click(function () {
        var index = $(this).index();
        $('#nav_r li a').eq(index).addClass('current02').parents().siblings().children().removeClass('current02');
        /* num = index;*/
    });


    /*导航滚动高度变色*/
    /*var spanPlace=$('#span').offset().top;*/

    //用滚动上去的距离进行判断；
    var $about = $('#about')
    var $dali = $('#dali');
    var $body = $('body');
    $(window).scroll(function(e) {
        var topH=$(window).scrollTop();
        /*
        $('#span').html(topH);

        if( topH>spanPlace ){
            $('span').css({'position':'fixed',top:0})
        };*/
        if( topH >= $body.outerHeight() - $dali.outerHeight() - 200){
            $('.nav_r li a').eq(2).addClass('current02').parents().siblings().children().removeClass('current02');
        }else if( topH<=$about.offset().top - 60){
            $('.nav_r li a').eq(0).addClass('current02').parents().siblings().children().removeClass('current02');
        }else if(topH<=$dali.offset().top - 60){
            $('.nav_r li a').eq(1).addClass('current02').parents().siblings().children().removeClass('current02');
        }else{
            $('.nav_r li a').eq(2).addClass('current02').parents().siblings().children().removeClass('current02');
        }
    });
})();
/*
//->MENU
$(function () {
    var $nav = $(".nav"),
        $menu = $(".menu");
    $menu.singleTap(function () {
        $nav.toggleClass("target");
    });
});*/

/*scroll封装*/
~ function () {
    var config = {
        reset: true,                   //鼠标滚动时，动画开关  默认false关闭
        origin: "left",                //动画开始的方向
        duration: 500,			         //动画持续时间
        delay: 0,				         //延迟
        rotate: {x: 0, y: 180, z: 0},    //过渡到0 的初始角度
        opacity: 0,                      //初始透明度
        scale: 0.9                    //缩放
    };

    var config1 = {
        reset: true,                     // 鼠标滚动时，动画开关  默认false关闭
        origin: "left",                //动画开始的方向
        duration: 500,				//动画持续时间
        delay: 500,				//延迟
        rotate: {x: 0, y: 0, z: 360},        //过渡到0 的初始角度
        opacity: 0,                            //初始透明度
        scale: 0.9                        //缩放
    };
    var config2={
        reset: true,                     // 鼠标滚动时，动画开关  默认false关闭
        origin: "left",                //动画开始的方向
        duration: 1000,				//动画持续时间
        translateZ:500,
        opacity: 0 ,                           //初始透明度
        scale: 0.9
    };
    var config3={
        reset: true,                     // 鼠标滚动时，动画开关  默认false关闭
        origin: "top",                //动画开始的方向
        duration: 1500,				//动画持续时间
        translateY:3000,
        opacity: 0 ,                           //初始透明度
        scale: 0.9
    };
    window.sr = ScrollReveal();
    sr.reveal('.sr', config);
    sr.reveal('.sr1', config1);
    sr.reveal('.sr2', config2);
    sr.reveal('.sr3', config3);

}();

/*木牛旋马*/
(function(){
    var flag = true;
    $('.all .right').click(function(){
        if(flag == true){
            flag = false;
            toggle('next')
        }
    });
    $('.all .left').click(function(){
        if(flag == true){
            flag = false;
            toggle('left')
        }
    });
    function toggle(dir){
        $('.all li').each(function(index,element){
            if(dir=='next'){
                var $li = $(element).next();
                $li = $li.get(0)?$li:$('.all li').eq(0);
            }else{
                var $li = $(element).prev();
                $li = $li.get(0)?$li:$('.all li').last();
            }
            var width = $li.width(),
                height = $li.height(),
                left = $li.css('left'),
                top = $li.css('top'),
                opacity = $li.css('opacity'),
                zIndex = $li.css('z-index');
            $(element).animate({zIndex:zIndex},1)
            $(element).animate({
                width:width,
                height:height,
                left:left,
                top:top,
                opacity:opacity,
                zIndex:zIndex,
            },function(){
                flag = true;
            });
        })
    }
})();

//移动端导航
(function () {
    var num=0;
    $('#menuToggle').click(function () {
        if (num===0) {
            $('#headerMenu').stop().animate({right: 0}, 800);
            num++
        } else {
            $('#headerMenu').stop().animate({right: -200}, 800);
            num--
        }
    })
})();







