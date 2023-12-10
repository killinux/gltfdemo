基本操作：
编辑模式，选中一部分，p是分离
物体模式，选中一堆，ctl p 是合并 ，后选的是父节点
ctrl + j 是合并所有


编辑模式选定点，分离眉毛牙齿的时候，
有时候 L不能解决问题，可以使用control +,来逐渐的扩展范围，左上角的加选，反选等就很重要了 
control i 反选
shift 框选能多选，contral框选能去掉
alt 左键能循环选，选立体的一圈
alt shift 左键 选择循环边
control shift 两个点，两个点之间的就倍选中了
g,gg 滑动移动

control R 重构网格

两个定点，F连接

blender表情
https://www.bilibili.com/video/BV1dy4y1T7gy?p=1&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692
https://faceit-doc.readthedocs.io/en/latest/

需要安装 
addRoutes 用于连手机的face cap
face eit  面部捕捉

还有个Rokoko可以动作捕捉哟


problem1:

1.如果安装 addroutes的时候报错，rtmidi之类的，是缺少midi库
xcode-select --install

cd /Applications/Blender.app/Contents/Resources/3.6/python/bin
./python3.10 -m pip install python-rtmidi


problem2:
themeview3d.vertex_size expect an int 
https://blender.stackexchange.com/questions/272360/python-error-using-faceit-plugin-in-blender-3-1-2

cd /Users/bytedance/Library/Application Support/Blender/3.6/scripts/addons/faceit-iBlender
vim rig_operators.py
把
bpy.context.preferences.themes[0].view_3d.vertex_size = scene.faceit_vertex_size
改成
bpy.context.preferences.themes[0].view_3d.vertex_size = int(scene.faceit_vertex_size)
就好了
参考：https://www.bilibili.com/read/cv23318591/


开始操作：
模型分离

编辑模式，选中，l， p，进行分离,l如果不好用就用ctrol +
选中脸 ，l， p，进行分离
选中两个眼眉  ，l ，p ，进行分离

合并是 command + j (注意，mac下是command j，)
 
眉毛需要合并
眉毛，眼睛，瞳孔 上牙，下牙，舌头，分别分离后，
用faceeid，注册，把这些都注册上，然后
注册(顶点组) ，把各个器官注册到顶点组

点击rig： 加面部坐标到脸上，从下巴开始，对齐上下，再对齐左右

点击 “rig下面那个”： 

点击 “生成绑定和动画”： 
点击 “bind Secondary”

点击，动画
调整 表情

点击，烘焙
先保存，以免出bug
点击 “auto recorder indices”

选 facecap
点击 重新排序 recorder Shapekeys

生成测试动作
点击generate Test action
点击 空格 就开始测试了播放了


先配置addroutes的 ip ，本机，端口9001，

然后 face cap 实况，链接 ip 和端口

mocap 
点击 setup Facecap OSC Routes
就可以用了


# 新模型测试 
模型来源 https://www.cg99.com/models/detail/230587.html
这个面部可以哦
setup
    注册面部对象
    选中眼睛，瞳孔，牙，舌头，点击 register Selected Object
    注册上相关顶点组 
rig
    生成地标 对齐下巴，对齐眼睛，对齐颧骨
    Project Landmarks
    调整 点
    生成绑定和动画
    绑定
    次要绑定(Bind Secondry)
animate
    Show All Options 和 Auto Mirror X 和自动插针 都打开
    调整动作细节
烘培
    物体模式 选中 头，点击 Bake ARKit shape keys
    Auto Recorder Indices ---> Face cap，确定
    Genrate Test Action ---空格启动，如果没启动，动画调成时间线模式，启动，测试动作
Mocap
    切换到AddRoutes config 配置 ip和端口
    Face cap---> Live Mocap ,Setup Facecap OSC Routes




右上角漏斗图标，可以把向西北方向的箭头勾选出来，可以控制是否可以被选中

