/**
 * Created by zhaohongli on 2017/4/7.
 */
$(function () {
    //微信自定义分享设置
    $.getJSON("http://client.elloworld.cn/Thirdpart/Index/getWeixinAuthor", function (n) {
        if ("" != n.appid) {
            var e = n;
            wx.config({
                debug: !1,
                appId: e.appid,
                timestamp: e.timestamp,
                nonceStr: e.noncestr,
                signature: e.signature,
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
            }), wx.ready(function () {
                console.log("微信分享")
                setsharemsg()
            })
        }
    });

    var shareobj = {
        'title': "小蝌蚪找妈妈…",
        'desc': "帮更多孩子找到家",
        'link': "http://client.elloworld.cn/baidu/baiduxunren",
        'imgUrl': "http://client.elloworld.cn/baidu/baiduxunren/images/kedoushare.jpg",
    };

    function setsharemsg() {
        console.log(shareobj),
            wx.onMenuShareTimeline({
                title: "帮更多孩子找到家",
                desc: shareobj.desc,
                link: shareobj.link,
                imgUrl: shareobj.imgUrl,
                success: function () {
                    //分享朋友圈成功
                },
                cancel: function () {
                }
            }), wx.onMenuShareAppMessage({
            title: shareobj.title,
            desc: shareobj.desc,
            link: shareobj.link,
            imgUrl: shareobj.imgUrl,
            success: function () {
                console.log("微信分享成功")
            },
            cancel: function () {
            }
        })
    }


    //阻止touchmove事件
    document.body.addEventListener("touchmove", function (e) {
        e.preventDefault();
    }, false);

    window.addEventListener("resize", function () {
        if (window.innerWidth < window.innerHeight) {
            $('#orientLayer').hide();
        } else {
            //横屏状态
            $('#orientLayer').show();
        }
    }, false);
});
