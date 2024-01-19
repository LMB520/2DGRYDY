# 二次元个人主页引导页(林墨白美化版)
## 演示
### 截图
![Screenshot_2024_0113_171030.png](https://blog.lmb520.cn/usr/uploads/2024/01/698853906.png)

### 演示网站
**2号测试站点：** [2.test.lmb520.cn](https://2.test.lmb520.cn)
## 部署网站
### 原版
**下载链接：https://aishuo.lanzout.com/ioRol1gf79kj**
### 美化版
**下载链接：https://github.com/LMB520/2DGRYDY**
## 美化版更新信息
### 林墨白美化版v1.0
1. 去掉原版顶图
2. 增加圆形头像并加上底部阴影
3. 增加导航与导航之前的的距离

### 林墨白美化版v1.1
1. 优化头像位置
2. 增加樱花飘落特效
4. 樱花数量在`./asset/xinghua.js`中的第124行修改，
3. 在`./index.html`中删除最后一行行代码`<script src="./asset/yinghua.js"></script>`就可以取消樱花飘落特效

### 林墨白美化版v1.2
1. 修复已知Bug
2. 增加注意事项

## 林墨白美化版v1.3
1. 修复教程上的错误
2. 修复测速BUG
3. 修复文件错误(不知道为啥代码咋变成中文了，hhh~)


# 值得注意的问题
**添加导航的时候，请不要完全复制，测速代码需要按顺序更改，比如：第一个导航为`class="ms0" id="lineMs0"`，第二个导航为`class="ms1" id="lineMs1"`后面依次类推，否则无法返回测速时长**
![IMG_20240119_074706.png](https://blog.lmb520.cn/usr/uploads/2024/01/809227503.png)

**如果导航超过7个以上了，需要在`./asset/main.js`中按规律增加测速代码，否则无法返回测速时长**
**这里展示一下`lineMs7`代码**
```JS
if(url==autourl[7]){
		$('#lineMs7').html(str+'ms')
	}
```
![Screenshot_2024_0113_234201.png](https://blog.lmb520.cn/usr/uploads/2024/01/4193982738.png)