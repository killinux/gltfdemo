1. 目前职能用blender3 + faceit 1.33
	如果用4.0 
	下载：https://gfxfather.com/faceit-facial-expressions-and-performance-capture-blender-addonv2-0-20/
	但是不可用
	目前测试blender 2.92 所有插件都是能用的


	faceit插件的官方应用文档（可以用浏览器 自动翻译）
	https://faceit-doc.readthedocs.io/en/latest/

	AddRoutes 插件及示例文件下载：http://www.jpfep.net/pages/addroutes/

	FaceCap 文档：https://www.bannaflak.com/face-cap/livemode.html

	还是得看阿天的教程 

2. 砍头 
把头 和眉毛等 分离出来：
顶点变小：
https://blog.csdn.net/ttm2d/article/details/100833406


顶点扩展，需要用 l，  和control + 

划分得不够，就再拆成小块合并物体，选中两个物体，control + j

选出头来


3. 绑定，脸上上各个部位 

4. 生成地标，基本都是 float和int转换问题，需要在代码里强制转换 int

		绑定报错，4.0
		blender4.0 bpy.ops.view3d.view_axis(override, type='FRONT')

		https://blender.stackexchange.com/questions/298458/why-does-bpy-ops-view3d-view-axis-not-work-in-view-3d-context

		/Applications/Blender 2.app/Contents/Resources/4.0/scripts/modules/bpy/ops.py 中ops.view3d.view_axis 传递参数问题
		所需要修正
		/Users/bytedance/Library/Application Support/Blender/4.0/scripts/addons/faceit-iBlender/
		中的landmarks_operators.py

		改正：

		62行：
		#bpy.ops.view3d.view_axis(override, type='FRONT')
		bpy.ops.view3d.view_axis( type='FRONT', align_active=True)

		203行：
		#bpy.ops.view3d.view_axis(override, type='FRONT')
		bpy.ops.view3d.view_axis(type='FRONT', align_active=True)

		354行：
		#bpy.ops.view3d.view_axis(override, type='RIGHT')
		bpy.ops.view3d.view_axis(type='RIGHT', align_active=True)


4.0不行还得用3.0

276行
#context.preferences.themes[0].view_3d.vertex_size = context.scene.faceit_vertex_size
context.preferences.themes[0].view_3d.vertex_size = int(context.scene.faceit_vertex_size)

problem 1:

Python: Traceback (most recent call last):
File "/Users/bytedance/Library/Application Support/Blender/3.6/scripts/addons/faceit-iBlender/rig_operators.py", line 30, in invoke return self.execute(context)
File "/Users/bytedance/Library/Application Support/Blender/3.6/scripts/addons/faceit-iBlender/rig_operators.py", line 63, in execute
scene.frame_start, scene.frame_end = ow
_action.frame_range:]
TypeError: bpy_struct: item.attr = val: Scene.frame_start expected an int type, not float

faceit_utils.py

283行 这么改不对

#ow_strip = new_track.strips.new('overwrite_shape_clip', frame_start, ow_action)
ow_strip = new_track.strips.new('overwrite_shape_clip', int(frame_start), ow_action)

problem2：

Python: Traceback (most recent call last):
File "/Users/bytedance/Library/Application Support/Blender/3.6/scripts/addons/faceit-iBlender/rig_operators.py", line 30, in invoke return self.execute(context)
File "/Users/bytedance/Library/Application Support/Blender/3.6/scripts/addons/faceit-iBlender/rig_operators.py", line 60, in execute
ow_action = futils.create_overwrite_animation(rig)
File "/Users/bytedance/Library/Application Support/Blender/3.6/scripts/addons/faceit-iBlender/faceit_utils.py", line 285, in create_overwrite_animation
ow_strip = new_track.strips.new(overwrite_shape_clip', frame start, ow _action)
TypeError: NaStrips.new(): error with argument 2, "start" - Function.start expected an int type, not float


rig_operators.py 63行
#scene.frame_start, scene.frame_end = ow_action.frame_range[:]
scene.frame_start  = int(ow_action.frame_range[0])
scene.frame_end = int(ow_action.frame_range[1])


5. 面具画好后，绑定，和次要绑定， action test

6. 烘培
7.  配置routes config ，
8. 选face cap ，











