@[TOC](blender使用faceit绑定自己的表情控制模型)

# faceit是个神器，来记录一下如何让表情动起来

blender-3.6.2  +   faceit-1.3.3  + AddRoutes-0.34 + ios的Face Cap
blender4.0似乎有问题，先用这个吧
计划用elise演示一下![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/4f46a0c4aecc4dcba5d592474941cab2.png#pic_center)


## 保持相对位置

mustardui似乎有一些骨骼冲突，想删掉原有的骨骼，要保证相对位置，
用父子节点是个好办法
把所有元素的父节点都变成body，并且保持变换
<kbd>Ctrl</kbd> + <kbd>p</kbd>
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/44a13decf9854cc0bf2e600ac5f6f0aa.png#pic_center =300x300)

包括头发和衣服，
然后删掉 骨骼也没有变形才行，
现在删掉原来的骨骼：
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/5ad027907b1c41e980bf71557939199c.png#pic_center =300x300)


## 头部分离，方便后续绑定faceit

如果以上都没有变形，如果有变形，眉毛等，就还用父子绑定的办法，让他们同时放缩

<kbd>G</kbd>把头发移动走
<kbd>H</kbd>把衣服隐藏掉
切换“编辑模式”，打开透视模式，选择头部
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/431c0642b27540728f8c31ba150b92be.png#pic_center =400x200)
<kbd>p</kbd>分离头部和身体
并双击给头部重新命名为headhead
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/8e8c4a4604f943129669d3ca2cf849dd.png#pic_center =300x300)


切换到物体模式
把脸上的位置从身体中分离，shift选中分离的几个内容后，**鼠标切换到主屏幕**
<kbd>Alt</kbd> + <kbd>p</kbd>
选择 <kbd>清空并保存变换结果</kbd>，否则就飞走咯
其实这一步也可以不用，只要能找到这些内容就好了，注意左虹膜iris在Eye left里面，
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/aebf52663fd345dc8e7dba2206a12d28.png#pic_center =400x150)



这样就可以开始使用faceit注册了
如果alt +p不起作用，注意看下自己的设置，是否用alt去模拟三键鼠标了
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/9a5c131122bb4009a4a97a4c98fa8112.png#pic_center   =300x300)

## faceit的注册
<kbd>1</kbd> ，让视图变正面，
<kbd>n</kbd>，打开右边侧栏，
**选中头部后**，一定要选中头部呀，
点<kbd>注册面部对象</kbd>
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/ffa6ebcfa23648628c74f81b5468913e.png#pic_center =500x300)
看这里已经把刚才建立的 “headhead” 注册成 “MAIN”了，
把右边的 眼睛，睫毛，嘴 和舌头都注册进来
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/d729c69d1e714a8daf61e345c191b86e.png#pic_center =300x500)

记得，虹膜 iris在眼睛里面也要注册进来
点“注册”中的内容 和下面独对应的部分，选择一个“注册”里面的内容，下面“注册(顶点组)”依次点击，绑定
以此把
<kbd>left eyeball</kbd> 对应 左眼球，<kbd>right eyeball</kbd> 对应 右眼球
<kbd>other left </kbd>对应左侧 虹膜 iris，<kbd>other right </kbd> 对应 右 虹膜 iris
<kbd>eyelashes </kbd>对应 上睫毛
<kbd>upper teeth</kbd> 对应上牙，<kbd>lower teeth</kbd> 对应 下牙
<kbd>tonegue </kbd>对应 舌头 
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/0b36a49b0fcd42efb8e2c942b1889e3e.png#pic_center =200x500)



## rig生成地标
在<kbd>Rig</kbd>的tab下点击<kbd>生成地标</kbd>
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/2608133cbfb84755b3090d5c434a1ac8.png#pic_center =400x150)

先对齐下巴，再对齐眼睛和脸颊
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/e00ade073cb146ccba6c6c666890927e.png#pic_center =400x350)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/5e2f20b7bdaf458495412d312e3dd47c.png#pic_center =400x400)

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/d8cf0019a7c047279f955d34e463b8dc.png#pic_center =400x400)
点击<kbd>Project Landmarks</kbd> ，把点附着在脸上并调整侧脸
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/093b4a9e87604cceb6efc6a81970df05.png#pic_center =400x400)
<kbd>生成绑定和动画</kbd>
打开“骨骼”选项
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/45c3d274dbc7462aa05603f7b41c16f8.png#pic_center =400x400)
选择头部，<kbd>绑定</kbd>
和次要绑定<kbd>Bind Secondary</kbd>

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/5d3d69b9ae1e4f189fd284bbf7d2800d.png#pic_center =400x400)
空格测试表情，开始跑500多帧，来测试表情
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/17224082e4be420c8e27da98fa1ce60c.png#pic_center =400x350)

 
## Animate可以修正表情

切换到<kbd>Animate</kbd>tab 调整每一个表情，如果有问题可以会退
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/246ca8e5885347d297342b0a2389ffe1.png#pic_center =400x300)

感谢b站的阿天，讲得很详细，看了好几遍: [link](https://www.bilibili.com/video/BV1dy4y1T7gy/?spm_id_from=333.999.0.0&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692).


## 烘培之前记得保存
<kbd>Bake ARKit Shape Keys</kbd> 进行烘培
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/a7b6df6938d4420291a9dc28377437d3.png#pic_center =400x300)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/73805446d7404f86a7ac7b1643d40350.png#pic_center =400x300)
如果有问题可以
<kbd>Back to Rigging</kbd> 重新调试表情，一般是嘴角容易有问题，注意眉毛和眉框，
<kbd>Generate Test Action</kbd> 可以继续看表情效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/db486b066cba4e8091aaf3f63febb94b.png#pic_center =400x350)
选<kbd>Auto Reorder Indices </kbd>
选择
<kbd>FaceCap</kbd>

就可以配置 routes了

<kbd>FaceCap</kbd>

![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/57b0f3162f334088bb03cd67c261b2d6.png#pic_center =300x300)


去[博客设置](https://mp.csdn.net/console/configBlog)页面，查看ip的 `代码片`.
```shell
// An highlighted block
ifconfig;
```

最后把头发加回来看看效果
<kbd>Alt</kbd> + <kbd>G</kbd>
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/bbc0711922b348818ffc595bc93b23dc.png#pic_center )
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/f9210756c0964e57af4c483c3f67fa38.png#pic_center)


打开 ios 的 Face Cap，链接到这个ip就可以，用自己的表情控制模型表情了




## 使用Faceit的整个流程

```mermaid
gantt
        dateFormat  YYYY-MM-DD
        title 使用Faceit的整个流程
        section 现有任务
        头部分离               :done,    des1, 2023-12-24,2023-12-25
        注册               		  :active,  des2, after des1, 1d
        生成地标               : des3, after des2, 1d
        烘培              		 : des4, after des3, 1d
        配置路由               : des5, after des4, 1d
        Face Cap               : des6, after des5, 1d
```
- 关于 **甘特图** 语法，参考 [这儿][2],

