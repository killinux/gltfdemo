
### 前言
想做一个 ar加载gltf的例子
从https://sketchfab.com/  下一些gltf或者glb文件  
用index.html 验证模型是否可用，app.js修改模型地址  
用argltf.html 把模型放到ar中 ，argltf.js 修改模型地址

需要https ,配置vite  
有的demo需要：AR-Examples  
https://github.com/killinux/AR-Examples  当中加载gltf的部分

需要建个图像追踪的marker   
参考：http://www.febeacon.com/arjs-docs-zh-cn/routes/marker_based.html

用工具https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html  
生成patt文件和图片用来识别呈现3d的地方 


### 启动
npm i   
npm run dev  
## 加载模型：  
### 用three.js加载模型  
	index.html 加载gltf 悟空   
	gltf.html 最简单的加载gltf版本，清晰度不够  
	simple.html 最简tifa，有一定清晰度 ,稍有变形  
	fbx.html 加载fbx，但是没颜色，没成功。。。
	如果想要高清版，使用glTF-Sample-Viewer ,这个依赖 glTF-Sample-Models和glTF-Sample-Environments
	
### 用aframe 加载模型  
	aframe_model.html  使用aframe.js加载悟空

## ar相关的  
### ar.js加载模型:  
	argltf.html  ar + 加载gltf tree   
	ar.html ar的高清叶奈法
	arone.html 高清叶奈法，用three-gltf-viewer 改写的
	ar_simple.html想改promise 改乱了，应该是scale的问题，待解决

### aframe-ar.js加载模型：
	ar_model.html 使用aframe.js 和 aframe-ar.js 加载75M的tifa_nude.glb ，注意a-entity 不能使用scale，否则ios 的safari崩溃  
	models.html 最简单版本，a-entity 修改scale控制模型大小，只能加载tree.gltf 和new_witch_naked.glb ，tifa不能scale  

## 其他：  
	bezier.html 贝塞尔曲线


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

### 2023.06.17  
add ar.html arone.html 这俩基本一样
ios 上 这个必须有，否则一直crash
<meta name="viewport" content="width=device-width, user-scalable=no"/>
ar.html 可以加载叶奈法，但是似乎tifa_nude.glb不行，是因为太大了么
45M可以，75.5M就不可以了，需要找到哪里设置加载的大小
另外有个错误
THREE.WebGLRenderer: OES_texture_float_linear extension not supported.
没解决
A-Frame-Examples/screen-controls-buttons-look.html 是可以移动位置的demo
renderer.useLegacyLights = false; 如果为true ，继承光线，就不用配置光源了


### todo  
https://github.com/8thwall/web/tree/master/examples/aframe/manipulate
https://github.com/killinux/8thwall-web
A-Frame-Examples
AR.js-examples
three-gltf-viewer


useful tools:  
https://github.khronos.org/glTF-Project-Explorer/

https://threejs.org/docs/#manual/zh/introduction/Loading-3D-models

the gltf loader:  
use glTF-Sample-Viewer
glTF-Sample-Models
glTF-Sample-Environments 


load fbx 有点麻烦
下次试试 https://github.com/facebookincubator/FBX2glTF  
cg99 上的fbx转换成 glb?

buy:
https://www.cg99.com/models/detail/102998.html

