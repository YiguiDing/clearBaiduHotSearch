// ==UserScript==
// @name         去除百度热搜广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  清除百度主页和搜索页面的热搜广告
// @author       YiguiDing

// @match        *://www.baidu.com/*
// @match        *://baidu.com/*

// @icon         https://www.google.com/s2/favicons?domain=baidu.com
// @grant        none

// ==/UserScript==

//删除热搜广告
function clearAD(){
    $("#s_wrap").css('display', 'none');//主页广告
    $("#content_right").css('display', 'none');//搜索页广告
}

//定时删除热搜广告
var myInterval=null;
function autoClearAD()
{
    if(myInterval)
        clearInterval(myInterval);
    myInterval=setInterval(
        function()
        {
            clearAD();
        },
        100
    );
}
//在html加载完成后执行
$(document).ready(function() {
    autoClearAD();
});