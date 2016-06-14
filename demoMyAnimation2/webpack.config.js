/**
 * Created by wujincun on 2016/6/13.
 */
module.exports = {
    entry:{
        animation:'./src/animation.js'
    },
    output:{
        path:__dirname +'/build',//当前目录会创建一个build文件夹作为输出目录
        filename:'[name].js',//build文件夹中的输出文件，[name]会被entry中的键替换
        library:'animation',//全局window下会注册animation对象
        libraryTarget:'umd'//支持amd，cmd
    }
}