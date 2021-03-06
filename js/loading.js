/*******************************************
 *
 * 创建人：Quber（qubernet@163.com）
 * 创建时间：2014年6月10日
 * 创建说明：Base=>页面加载（loading）效果
 *
 * 修改人：
 * 修改时间：
 * 修改说明：
 *
 *********************************************/

//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml =
    '<div id="loadingDiv" style="' +
    'position:absolute;' +
    'left:0;width:100%;' +
    'height:100%;' + _PageHeight + 'px;top:0;z-index:1000;">' +
    '<img src="./images/loading-bac.jpg" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0" alt="">' +
    //'<img src="./images/moom.png" style="width: 65%;position: absolute;top:35%;left:50%; transform: translate(-50%,-50%)" alt="">' +
    '<img style="width: 9%;position: absolute;top: 50%;left: 50%; transform: translate(-50%,-50.5%);" src="./images/000.Gif" alt="">' +
    '<img src="./images/loading.png" style="width:30%;position: absolute;bottom: 10%;left: 50%; transform: translate(-50%,-50%);"  alt="">' +
    '</div>';
//呈现loading效果
document.write(_LoadingHtml);

//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        setTimeout(function(){
            var loadingMask = document.getElementById('loadingDiv');
            loadingMask.parentNode.removeChild(loadingMask);
        },2000);

    }
}

