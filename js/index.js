/**
 * Created by Administrator on 2016/9/10.
 */

(function($){

    //生成底部链接数据
    (function createLinkForFoot(data){
        var len=data.length;
        var str="";
        for(var index=0;index<len;index++)
        {
            str+="<a href='#'>"+data[index]+"</a>";
        }
        $("#end-link").html(str);
    }([
        "友情链接",
        "178",
        "腾讯游戏",
        "口袋巴士",
        "老大哥",
        "幸存者",
        "IT168",
        "厨艺大师",
        "口袋妖怪",
        "任天堂",
        "IT俱乐部",
        "索尼游戏中心",
        "我要找工作",
        "转行啦",
        "我要成为前端开发工程师"]
    ));

    //导航条特效相关
    (function(){
        var $nav=$("#nav-nr");
        var $navTab=$("#nav-tab-content");
        var $lis=$nav.find("li");
        var $span=$nav.find("span");
        var tabs=$navTab.find(".item1");
        tabs.each(function(key,value){
            if(key==0)
            {
                $(this).show();
            }
            else
            {
                $(this).hide();
            }
        });
        $lis.each(function(key,value){
            $(value).mouseover(function(){
                    $span.css("left", this.offsetLeft);
                    for (var index = 0; index < tabs.length; index++) {
                        $(tabs[index]).stop(true,true)
                        $(tabs[index]).slideUp();
                    }
                    $(tabs[key]).slideDown();
            });

        });

        //加载nav数据
        //(function loadNav(){
        //    $.ajax(
        //       {
        //            url:"./template/nav.html",
        //            type:"POST",
        //            dataType:"html",
        //            success: function (data) {
        //
        //                $navTab.html(data);
        //                ($navTab.find(".item1").each(function(key,value){
        //                    //console.log(value);
        //                    tabs.push(value);
        //                }));
        //                for (var index = 0; index < tabs.length; index++) {
        //                    $(tabs[index]).hide();
        //                }
        //            }
        //        }
        //    );
        //}())

    }());

    //轮播图通用函数
    function playAnimate(index,offset,$picul,$btnlis,bgColor,curColor)
    {
        $btnlis.each(function (key, value) {
            key==index?$(value).css("background-color",curColor):$(value).css("background-color",bgColor);

        });
        $picul.animate({"left":offset},1000);
    }

    //大轮播图逻辑
    (function(){
        var offset=0;
        var $pics_ul=$("#pics-ul");
        var $btns_ul=$("#btns-ul");
        var $btn_lis=$btns_ul.find("li");
        var index=0;

        setInterval(function(){
            index++;
            offset=-420*index;
            if(offset<=-2520)
            {
                offset=0;
                index=0;
            }
            playAnimate(index,offset,$pics_ul,$btn_lis,"#666666","#E64849");
            }
            ,2500);

        $btn_lis.each(function (key,value) {
            value.curIndex=key;
            $(value).mouseover(function () {
                $btn_lis.css("background-color","#666666");
                $(this).css("background-color","#E64849");
                index=this.curIndex;
                offset=-420*index;
                $pics_ul.stop(true,false);
                $pics_ul.animate({"left":offset},500);
            });
        });
    }());

    //小轮播图逻辑
    (function(){
        var offset=0;
        var $pics_ul=$("#li-pics");
        var $btns_ul=$("#li-btnul");
        var $btn_lis=$btns_ul.find("li");
        var index=0;
        setInterval(function () {
            index++;
            offset=-193*index;
            if(offset<=-579)
            {
                offset=0;
                index=0;
            }
            playAnimate(index,offset,$pics_ul,$btn_lis,"white","#FF0000");

        },2500)
    }());

    //加载资讯资源
    (function(){
        //$.ajax(
        //    {
        //        url:"./template/zx.html",
        //        type:"POST",
        //        dataType:"html",
        //        success: function (data) {
        //            $("#zx-content").html(data);
        //            $("#zx-content .zx1").each(function(key,val){
        //                key==0?$(val).show():$(val).hide();
        //            });
        //        }
        //    }
        //)
    }());

     //资讯按钮逻辑
    (function(){
        var  $zxul=$("#zx-uls");
        $zxul.find("li").each(function(key,val){
            val.curIndex=key;
            $(val).click(function(){
                $zxul.find("span").css("left",this.offsetLeft);
                var that=this;
                $("#zx-content .zx1").each(function(key,val){
                    that.curIndex==key?$(val).show():$(val).hide();
                });
            });
        });
        $("#zx-content .zx1").each(function(key,val){
            key==0?$(val).show():$(val).hide();
        });

    }());

    //n1 右边内容点击逻辑
    (function(){
        $("#n1-m-btns li a").each(function(key,val){
            this.curIndex=key;
        });
        $("#n1-m-btns li a").click(function(){
            $("#n1-m-btns li a").removeClass("cur");
            $(this).addClass("cur");
            $("#rc-ul").stop(true,false);
            $("#rc-ul").animate({"top":this.curIndex*(-136)});

        });
    }());







}(jQuery));
