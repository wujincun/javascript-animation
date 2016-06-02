/**
 * Created by wujincun on 2016/6/2.
 */
'use strict';
/*
* 预加载图片函数
* @param iamges 加载图片的数组或对象
* @param callback 图片加载完毕后调用的回调函数
* @param timeout 加载超时的时长
* */
function loadImage(images , callback , timeout){
    //加载完成图片的计数器
    var count = 0;
    //全部图片加载成功的标志位
   var success = true;
    //超时timer的id
    var timeoutId = 0;
    //是否加载超时的标志位
    var isTimeout = false;
    //对图片数组或对象进行遍历
    for( var key in images){ ///?????什么格式？？
        if(!images.hasOwnProperty(key)){
            continue;
        }
        //获得每个图片元素
        //期望格式是object：{src：XXX}
        var item = images[key];
        if(typeof item === 'string'){
            item = images[key] = {src: item}
        }
        if(!item || !item.src){

        }

    }

}

module.exports = loadImage;