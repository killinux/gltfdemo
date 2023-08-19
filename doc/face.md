
blender表情
https://www.bilibili.com/video/BV1dy4y1T7gy?p=1&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692

需要安装 
addRoutes 用于连手机的face cap
face eit 


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

编辑模式，选中，l， p，进行分离
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

