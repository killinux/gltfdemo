
### 前言
想做一个 ar加载gltf的例子
从https://sketchfab.com/  下一些gltf或者glb文件  
用index.html 验证模型是否可用，app.js修改模型地址  
用argltf.html 把模型放到ar中 ，argltf.js 修改模型地址

需要https ,配置vite  
有的demo需要：AR-Examples  
https://github.com/killinux/AR-Examples  当中加载gltf的部分


### 启动
npm i   
npm run dev  

index.html 加载gltf 房子  

argltf.html  ar + 加载gltf tree   

### 参考
https://rucobloog.www2.jp/2020/12/21/ar-jsthree-js%E3%81%A7webar1/  
https://observablehq.com/@severo/export-and-load-gltf


model_obj.html ar+ 加载obj+mtl  fish  

model.html 没成功 tree   

需要自己的再看下这个

模型去这里下载  
https://github.com/killinux/gltftool  

使用 gltf.scene.getObjectByName("Sketchfab_model") 的时候可以使用
https://github.com/killinux/three-gltf-viewer  
加载模型，看看console.graph里面有什么名字


### 模型修改
有的模型，比如 witch_naked.glb ，坐标并不是中心  
blender编辑glb文件  
Yennefer_Naked_medfbx.png  
调整sidebar，脚的位置 为原点0，0，0   
重新export glb文件加载即可  
