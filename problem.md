选取gltf格式时，出现模型为黑色，模型出不来
 

原因：
我们设计部可能是用maya或者3dmax去做；在模型导出时，没有gltf格式；如果maya或者3dmax导出obj然后导进blender，再导出gltf格式，就容易再格式转换的过程中出现数据丢失。（这时候你会发现你展示出来的模型为黑色，在你代码没有问题的情况下，你会发现后台也不报错，别的模型也可以展示出来）

解决办法：
我们把设计部做出来的模型导出来，放进这个网站进行格式转换 www.sketchfab.com  模型网站(gltf,fbx)； https://sketchfab.com/3d-models?date=week&features=downloadable&sort_by=-likeCount；同时设计部还需要根据设计搞，在网站上进行进一步的微调；这个网站上展示的效果，就是导出后，我们webgl这边可以正常展示的效果。

如果代码没有问题，那么试着给它放大缩小；我在做项目的时候就有遇到过，给模型放大了10000倍，模型才出来那么一丢丢。

格式转换与代码测试相关链接：
 

3D技术路线系统介绍：disigner -> viewer 3D引擎
　　　https://www.khronos.org/gltf/

 

3D查模型器:　文件直接拖进去  https://gltf-viewer.donmccurdy.com/

　　　　　　http://39.106.15.17:3000/#model=/models/hole-table/scene.gltf 3D模型查看器

 

3D展示网站：
　　www.sketchfab.com 模型网站(gltf,fbx)
　　https://sketchfab.com/3d-models?date=week&features=downloadable&sort_by=-likeCount

 

sketchfab developer


    web使用方式：https://help.sketchfab.com/hc/en-us/articles/203509907-Embedding-your-models?utm_source=website&utm_campaign=embedpopup#embed-options
                  总结：三种方式
                  1.直接获取    https://sketchfab.com/models/442c548d94744641ba279ae94b5f45ec?autospin=0.5
                  2.iframe方式  <iframe src="https://sketchfab.com/models/442c548d94744641ba279ae94b5f45ec/embed?autostart=1&autospin=0.5"></iframe>
                  3.js API方式:https://static.sketchfab.com/api/sketchfab-viewer-1.5.1.js 
     API调用      https://sketchfab.com/developers/viewer  
   
   iframe嵌入式：<iframe src="https://sketchfab.com/models/442c548d94744641ba279ae94b5f45ec/embed?autostart=1&autospin=0.5"></iframe>
   view API模式：https://sketchfab.com/developers/viewer
  demo网站：
  https://demos.littleworkshop.fr/infinitown

  编码测试网站：www.codepen.io
 Cannon.js技术路线

  glTF viewer：播放glTF动画,  .glTF(描述文件JSON) .bin 动画文件（animation data） texture文件夹:材质，图片.jpg,png
  js源码代码：https://github.com/donmccurdy/three-gltf-viewer
  在线播放器（将三个文件（夹）拖入网页中，记住拖进去 open方式不行）：https://gltf.insimo.com/
 desktop:桌面版本：https://github.com/donmccurdy/three-gltf-viewer/releases
 D:\ProgramFile\gltf-viewer-win32-ia32

 three.js example：three.js样例
 three.js loader:
 示例：    https://github.com/mrdoob/three.js/tree/master/examples/js/loaders
 glTF示例：https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js

 three.js vs Cannon.js 文章
 https://www.codercto.com/a/33760.html

 sketchfab模型破解下载：
 https://imjad.cn/archives/lab/ripping-sketchfab-models

 http://m.3dhoo.com/news/guowai/39935.html
 https://blog.csdn.net/weixin_43081805/article/details/88891200
 https://www.ddd.online/mall/search?keyWords=%E5%A4%AA%E7%A9%BA
