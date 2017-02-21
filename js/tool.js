/**
 * Created by Administrator on 2016/12/20.
 */
var tools={
    // "tabs":function (obj,oA) {//obj：是整体图片的盒子（$(".list")）；oA：
    //     auto()
    //    $(oA).eq(0).addClass("active")
    //     var timer;
    //     var dix=0;//按下时的距离。。。
    //     var list_L=0;//也是距离浏览器的位置
    //     var num=0;
    //     var dixNow;
    //     var oLeft;
    //     var w = $(obj).innerWidth();//每张图片的宽度-------
    //     //设置两套图片----------
    //     $(obj).html( $(obj).html()+ $(obj).html());
    //     //共有多少张图片-----
    //     var leng = $(obj+" li").length;
    //     //盒子的总宽度----------
    //     var wapW=$(obj).width($(obj+" li").length*w)
    //     $(obj).on("touchstart",function(ev){
    //         ev.preventDefault()
    //         var e =ev.originalEvent.targetTouches[0];
    //         dix =e.pageX;//按下时的距离。。。也是距离浏览器的位置
    //         $(this).css("transition","none");
    //         if(num==0){
    //             num=$(oA).length;
    //             $(this).css("left",-num*w+'px');
    //         };
    //         //console.log(-num,leng-1)
    //         if(-num==leng-1){
    //             num=$(oA).length-1;
    //             $(this).css("left",-num*w+'px');
    //         }
    //         list_L= $(this).offset().left;
    //     });
    //     $(obj).on("touchmove",function(ev){
    //         ev.preventDefault();
    //         var e =ev.originalEvent.targetTouches[0];
    //         dixNow=e.pageX-dix;
    //         oLeft = dixNow+list_L+'px'
    //         $(this).css("left",oLeft);
    //     });
    //     $(obj).on("touchend",function(ev){
    //         ev.preventDefault();
    //         num =Math.round($(this).offset().left/w)
    //         $(this).css("transition",".5s");
    //         $(this).css("left",num*w+'px');
    //         $(oA).eq(-num%$(oA).length).addClass("active").siblings().removeClass("active");
    //     });
    //     function auto(){
    //         timer = setInterval(
    //             function(){
    //                 if(num==leng-1){
    //                     num=$(oA).length-1;
    //                     $(obj).css("left",-num*w+'px');
    //                 }
    //                 $(obj).css("transition",".5s");
    //                 $(obj).css("left",-num*w+'px');
    //                 $(oA).eq(num%$(oA).length).addClass("active").siblings().removeClass("active");
    //
    //                 num++;
    //             },1000);
    //     }
    //
    // },
    "tabs":function (obj,oA) {//obj：是整体图片的盒子（$(".list")）；oA：

            auto();
            $(oA).eq(0).addClass("active")
            var timer;
            var dix=0;//按下时的距离。。。sss
            var list_L=0;//也是距离浏览器的位置
            var num=0;
            var dixNow;
            var oLeft;
            var w = $(obj).innerWidth();//每张图片的宽度-------
            //设置两套图片----------
            $(obj).html( $(obj).html()+ $(obj).html());
            //共有多少张图片-----
            var leng = $(obj+" li").length;
            //盒子的总宽度----------
            var wapW=$(obj).width($(obj+" li").length*w)
            $(obj).on("touchstart",function(ev){
                ev.preventDefault();
                clearInterval(timer)
                var e =ev.originalEvent.targetTouches[0];
                dix =e.pageX;//按下时的距离。。。也是距离浏览器的位置
                $(this).css("transition","none");
                if(num==0){
                    num=$(oA).length;
                    $(this).css("transform","translateX(-"+num*w+"px)");
                };
                if(num==leng-1){
                    num=$(oA).length-1;
                    $(this).css("transform","translateX(-"+num*w+"px)");
                }
                list_L= $(this).offset().left;
            });
            $(obj).on("touchmove",function(ev){
                ev.preventDefault();
                var e =ev.originalEvent.targetTouches[0];
                dixNow=e.pageX-dix;
                oLeft = dixNow+list_L+'px'
                $(this).css("transform","translateX("+oLeft+")");
            });
            $(obj).on("touchend",function(ev){
                ev.preventDefault();
                num =Math.round(-$(this).offset().left/w)
                tab();
                auto()
            });


        function auto(){
            clearInterval(timer)
            timer = setInterval(
                function(){
                    if(num==leng-1){
                        num=$(oA).length-1;
                        $(obj).css("transition","none");
                        $(obj).css("transform","translateX(-"+num*w+"px)");
                    }
                    setTimeout(function () {
                        num++;
                        tab()
                    },30)
                    },3000);
        }
        
        function tab() {
            $(obj).css("transition",".5s");
            $(obj).css("transform","translateX(-"+num*w+"px)");
            $(oA).eq(num%$(oA).length).addClass("active").siblings().removeClass("active");
        }

    },
    "twoNav":function(obj){
        $(obj).on("touchstart",function(event){
           $(this).siblings(".nav_first").addClass("my_nav_first").removeClass("my_first");
            event.stopPropagation();
        })
         $(".log_div").on("touchstart",function() {
             $(".nav_first").addClass("my_first").removeClass("my_nav_first")
         })
        $(".nav_first").on("touchstart",function(event) {
            event.stopPropagation();
        })
        $(document).on("touchstart",function(){
            if($(".nav_first").attr("class")=="nav_first my_nav_first"){
                $(".nav_first").addClass("my_first").removeClass("my_nav_first")
            }
        })
     },
    "topScroll":function(obj){
         var dixstart;//按下时的位置。。。
         var dic=0 ;//元素的初始位置。。。
        var maxTop = $(".wrap").innerHeight()-$(obj).height()
        $(obj).on("touchstart",function(ev){
            var e =ev.originalEvent.changedTouches[0];
            dixstart =e.pageY;//按下时的距离。。。也是距离浏览器的位置
            dic= $(this).offset().top;
        });
        $(obj).on("touchmove",function(ev){
            ev.preventDefault()
            var e =ev.originalEvent.changedTouches[0];
            var dixNow=e.pageY-dixstart;
            var oTop = dixNow+dic;
            if(oTop>=50){
                oTop=50
            }
            if(oTop<maxTop){
                oTop=maxTop
            }
            $(this).css("top",oTop+'px');
        });
    }

}