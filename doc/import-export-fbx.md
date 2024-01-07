导入导出的问题


fbx和gltf都需要principled bsdf
并且图片是直接连 principled bsdf才行，层级太长不行

如果xps等导入的不是pricipled bsdf
那导出的模型就是白的,需要去转换一下
转换完的 模型太碎片了可以 用
Material Combiner 材质压缩，压缩到一个材质
https://www.bilibili.com/video/BV1Ps4y1a77B/?spm_id_from=333.337.search-card.all.click&vd_source=1ed400aa8fdc6fe03ecfa7ce0fc2c692
