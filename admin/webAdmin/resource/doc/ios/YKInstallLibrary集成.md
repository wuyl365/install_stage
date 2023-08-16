# **iOS端** 
# **YKInstall SDK接入文档**









编写时间：2023.06.18

版本作者：张聪












## **1、将YKInstallLibrary文件夹加入工程**
## **2、在需要调用的地方导入头文件 ：**
## **import “YKInstallLibrary\_iOS.h”**
在Info.plist文件中配置App Scheme协议，如下：

```objective-c
<key>CFBundleURLTypes</key>

<array>

  <dict>

    <key>CFBundleURLSchemes</key>

    <array>

    	<string>testappid</string>

    </array>

  </dict>

</array>
```



![image1](https://yk-install.oss-cn-hangzhou.aliyuncs.com/doc_image/YKInstallLibrary%E9%9B%86%E6%88%90.001.png)

## **3、初始化：**

可以放在App启动时初始化，首次安装时如果没有网络权限，sdk会在获取到网络权限后自动重新初始化（将testappid替换成自己项目的appid）

![image1](https://yk-install.oss-cn-hangzhou.aliyuncs.com/doc_image/YKInstallLibrary%E9%9B%86%E6%88%90.002.png)

在AppDelegate里设置scheme协议和universallink回调（如果要使用universal link打开App的方式请在管理后台配置，默认使用scheme协议跳转，配置规则参考下面）

![image1](https://yk-install.oss-cn-hangzhou.aliyuncs.com/doc_image/YKInstallLibrary%E9%9B%86%E6%88%90.003.png)



# **Universal Link集成**
Universal Link的配置流程可以参考网上资源：<https://blog.csdn.net/jifaliwo123/article/details/120866059>

这里拿demo里的配置来说明下具体H5的配置

![image1](https://yk-install.oss-cn-hangzhou.aliyuncs.com/doc_image/YKInstallLibrary%E9%9B%86%E6%88%90.004.png)



如图：Demo里的paths配的是根目录下的app目录+通配符,所以需要有universal link功能的h5页面需要配置在域名根目录下的app目录内，如下：

![image1](https://yk-install.oss-cn-hangzhou.aliyuncs.com/doc_image/YKInstallLibrary%E9%9B%86%E6%88%90.005.png)



这样配置成功后，如果App已安装的情况下，下载页面是这样的：

![image1](https://yk-install.oss-cn-hangzhou.aliyuncs.com/doc_image/YKInstallLibrary%E9%9B%86%E6%88%90.006.png)
