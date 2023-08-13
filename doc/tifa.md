##基本操作

alt g 回到原位 https://jingyan.baidu.com/article/bea41d4384c8f0f5c41be60c.html   
shift a 添加
a全选
g移动
r旋转
s防缩



##tifa
参考 https://www.bilibili.com/video/BV1ze411p7nE/?spm_id_from=333.999.0.0&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692
###月食标记，去掉 bones  

###相机 

右上角，小尖头 视图
勾选 锁定相机到视图方位
焦距 85


右边相机图标
渲染引擎 Cycles
设备 gpu计算

取消 毛发 不一样，忽略

取消锁定相机到视图

F12进行渲染

月食标记
取消 其他项


选中右键，平滑着色 ？


###light
日光 强度 6
角度 89


###分屏 ，右下角出现柿子
https://www.jianshu.com/p/f249980bcbf3

右边屏幕
左上角 井字打开，着色器编辑器


###选头发  
右边 倒数第二个小足球里，材质 改名字成 material.hair


PC0002_01_Hair_C.tga 图片拖进到 着色器编辑器 
颜色 连到 alpha

F12渲染

###选眉毛   
材质 改名为 Material.eyeblow
PC0002_01_Hair_O.tga  拖到着色器编辑器 
颜色 连到 alpha

色彩空间选 Non-Color


###选睫毛 
材质 改名为 Material.eye001

基础色 选黑色

F12渲染  看黑眼圈


###选脸 
材质 改名为 Material.face

选黑脸PC0002_01_Head_O.tga

色彩空间  Non-Color
颜色 链接 糙度

PC0002_01_Head_N.tga 蓝色 皱纹，拖进来
色彩空间  Non-Color
alpha 连 法向

shift a 添加 矢量--->法线贴图   扔到线中间


###选头发
基础色，选黑色，用 哟上交到最优一个小球看效果

###选脸

选肉色脸 PC0002_01_Head_C.tga 

颜色 连到 基础色

右边螺丝刀图标。添加修改器   第一列里的 表面细分


红脸拖进来 
颜色 连到 此表面颜色
次表面 0.03

F12 看效果

次表面 0.025 0.01 都实验下看看效果



###选头发
棕色拖进来 PC0002_01_Hair_C.tga

颜色 连 基础色

###选眼球

右边倒数小足球，改名字为   Material.eyes

颜色 连 基础色

高光 调高到 0.805
糙度 0.091


###场景

选中间的小地球 
颜色  图像纹理
选不到图 。。。？？？studio_05.exr    找个p3dm的Common_Materia_O.png替代 
强度 0.05


###渲染高清
上面白色小球
相机图标 ，渲染改成1080

F12

###身体
body  材质改名 Material.body
拖进来 
颜色 连 基础色

dress  材质改名 Material.dress
拖进来 
颜色 连 基础色




##基本操作
###
建立父子关系 https://www.bilibili.com/video/BV1Q44y1P7t4/?spm_id_from=333.337.search-card.all.click&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692  
shift 选择物体
control + p   建立父子关系
alt + p 解除父子关系

编辑模式或者，tab， 选择面，拉伸， 或者 右上角条目，变换，防缩锁定xy，防缩只变化z，我也太聪明了，haohao
g移动，r旋转，s伸缩
shift a添加 

123 点线面的选择

选择 2个 control j 合并
编辑模式 p，拆开
shift d 复制

shift s 游标快捷键

几何中心，物体 设置原点  为游标

F2 重命名
tab切换 模式
control tab切换 模式
骨头只哦羽三个模式 ，pose模式

### 细分
新建平面 https://www.bilibili.com/video/BV1Q44y1P7t4/?spm_id_from=333.999.0.0&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692  
9分33秒
上面编辑模式，边 ，细分
下面，可以细分 切割次数

圆柱体 
设置顶点少一些
编辑模式，环切：ctrol + R
https://zhuanlan.zhihu.com/p/614487274
 
文字模式，alt+z 开启透视模式
https://www.bilibili.com/read/cv15939435

切换4视图：ctrol + alt + q
### 人骨骼 
骨骼，放到前面
轴向打开
小键盘设置， 在设置里 ，编辑，偏好设置，输入，模拟小键盘， 137就是小键盘的137 了，123切换点线面就不好使了

选中骨头，编辑模式，右键，细分，可以把一根骨头，等分成3份
### 弹跳的小球
https://www.bilibili.com/video/BV1io4y157RU?p=5&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692

i 设置
m 建分组





























