$(document).ready(function () {
    var facebox = document.getElementById("facebox");
    var myvideo = document.getElementById("myvideo");
    var audio = document.getElementById("audio");

    //正则判断终端
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if (isAndroid) {
        myvideo.src = "images/androidvideo.mp4";
    }else{
        var endCSS = "@keyframes fadeInOut{" +
            "0%{opacity:1;}"+
            "50%{opacity:0.3;}"+
            "100%{opacity:1}"+
            "}"+
            "@keyframes three{" +
            "0%{transform: scale(1,1);}"+
            "100%{transform: scale(0.75,0.75);}"+
            "}";
        var endstyle=document.createElement("style");
        endstyle.innerHTML=endCSS;
        document.head.appendChild(endstyle);

        var endHTML=
                '<div id="baidusearch" style="position: absolute;left: 0;top: 0;width: 100%;height: 100%;display: none">'+
                    '<img src="images/last.jpg" alt="" id="last" style="position: absolute;left: 0;top: 0;width: 100%;height: 100%">'+
                    '<img src="images/p-search.png" alt="" id="psearch" style="position: absolute;left: 38%;bottom: -9%;width: 30%">'+
                    '<img src="images/xunren.png" alt="" id="help" style="position: absolute;left: 44.5%;bottom: 12.5%;width: 8%;transition: 1s all;animation: 1.25s three ease-in-out infinite alternate;">'+
                    '<img src="images/baidusearch.png" alt="" id="search" style="position: absolute;left: 19%;top: 56%;width: 65%;height: 6%">'+
                    '<img src="images/line.png" alt="" id="line" style="position: absolute;left: 18%;top: 55%;width: 68.8%;height: 7%;animation: 2s fadeInOut ease-in-out infinite alternate;">'+
                    '<img src="images/baidulogo.png" alt="" id="baidulogo" style="position: absolute;left: 42%;top: 5%;width: 20%">'+
                '</div>';

        var endDiv=document.createElement("div");
        endDiv.innerHTML=endHTML;
        document.body.appendChild(endDiv);

        var line=document.getElementById("line");
        var psearch=document.getElementById("psearch");
        var baidusearch=document.getElementById("baidusearch");

        if(line){
            line.addEventListener("click", function () {
                _hmt.push(['_trackEvent', "baidu", "click", "002"]);
                window.open("http://xunren.baidu.com/index.html#001")
            });
        }
    }

    //开始播放视频
    facebox.addEventListener("click", function () {
        myvideo.play();
        facebox.style.display = "none";

        /*var timer = setInterval(function () {
            var VIDEo = $('#myvideo').get(0);
            var a = VIDEo.currentTime;
            if (a >= 91) {
                if(isAndroid){
                    location.href = "http://client.elloworld.cn/baidu/baiduxunren/endyun.html";
                }else{
                    baidusearch.style.display="block";
                    myvideo.style.display="none";
                }
                clearInterval(timer);
            }
        }, 1000);*/
    });

    myvideo.addEventListener("ended",function () {
        if(isAndroid){
            location.href = "http://client.elloworld.cn/baidu/baiduxunren/end.html";
        }else{
            baidusearch.style.display="block";
            myvideo.style.display="none";
            console.log("播放结束");
        }
    },false);

    //开始播放视频
    facebox.addEventListener("touchstart", function () {
        myvideo.play();
        facebox.style.display = "none";

        /*var timer = setInterval(function () {
            var VIDEo = $('#myvideo').get(0);
            var a = VIDEo.currentTime;
            if (a >= 93) {
                if(isAndroid){
                    location.href = "http://client.elloworld.cn/baidu/baiduxunren/endyun.html";
                }else{
                    baidusearch.style.display="block";
                    myvideo.style.display="none";
                }
                clearInterval(timer);
            }
        }, 1000);*/
    });
})



