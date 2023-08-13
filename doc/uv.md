tifa: https://www.bilibili.com/video/BV1ze411p7nE/?spm_id_from=333.999.0.0&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692  

ctrol + alt + q 4视图
1. 摄像头
2. 平滑着色
3. 日光强度 6 ,角度89
4. 头发，着色器编辑器 ,材质 Material.hair,
	Hair_Aout.dds 黑色的，颜色连Alpha 非彩色
5. 眉毛Material.eyeblow， Hair_Oout.dds 灰色的,颜色连Alpha 非彩色,
		Hair_Cout.dds 颜色 连 基础色 sRGB
6. 睫毛，基础色用黑色就行
7. 脸Material.face，Head_Oout.dds 灰色的，颜色连糙度，非彩色
	蓝色Head_Nout.dds 蓝色的，Alpha 连法向，矢量，法线贴图在中间
	肉色Head_Cout.dds 肉色，颜色 连 基础色
	螺丝刀：表面细分 
	红色Head_Bout.dds 红色，颜色 连 次表面颜色，次表面0.015
	光泽 0.15
8. 头发：棕色 Hear_Cout.dds 棕色 颜色 连 基础色
9. 眼睛Material.eyes:
		Eye_C.dds 眼睛 颜色 连 基础色
		高光：0.805
		糙度：0.091
10. 场景：相机视角，地球仪设置场景背景，颜色选 图像纹理，看到变红色了，打开 Common_Materia_O.png，在FF7R_Tifa 的 Textures的other里，b站的没找到,白色的就行
		强度：0.03
11. 渲染:1280 32
12. 问题：导出的时候如果是躺着的，因为骨骼和姿势影响了，把 armature删掉后，发现导出之前就躺着了
		1 3 7  r90 修正
