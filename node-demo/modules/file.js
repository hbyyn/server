var fs=require('fs');
module.exports={
    /**
     * 读取文件
     * @param {*} filepath 文件路径
     */
    readfile:function(filepath){
        try{
            var data=fs.readFileSync(filepath);
            return data
        }catch(error){
            throw error;
        }
    },
    /**
     * 读取图片
     * @param {string} imgPath 图片路径
     */
    readImg:function(imgPath){
        try{
            var data=fs.readFileSync(imgPath,'binary');
            return data;
        }catch(error){
            throw error;
        }
    }
        
}