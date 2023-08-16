# **web 渠道SDK**

# **接入文档**

文档版本：1.0.0

编写时间：2023.06.21

版本作者：李运




  

# **1.概述**

本文档用于指导各项目快速接入web端渠道SDK

  

# **2.接入流程**

### **2.1  在线引入web端的js**

```
<script type="text/javascript" src="https://yf-install.sanguosha.com/app/ykinstall.min.js"></script>        
```
  

# **3.接口说明**

### **3.1 实例化YKinstall对象，传入appid，appid是后台创建完项目后给到业务方的**

```
 var InstallInstance = new Ykinstall({

     appid: appid

    })
```

  

### **3.2 落地页对应下载按钮**

Sdk已经帮你实现了，未安装的情况下，下载安装，已安装的情况下打开app的功能，调用YKinstall的openOrInstall方法即可 （需在后台管理中配置好各端对应的下载链接）

```
InstallInstance.openOrInstall();
```