# **Android 渠道SDK**
# **接入文档**














文档版本：1.0.0

编写时间：2023.06.08

版本作者：李运












# 目录
[[toc]]

## **1.概述**
本文档用于指导各项目快速接入渠道SDK，基于 AndroidStudio 的接入方式。 
## **2.接入流程**
### **2.1 配置AndroidManifest.xml和build.gradle，引入aar包**
在项目根目录的AndroidManifest.xml中，加入如下配置!
```java
<uses-permission android:name="android.permission.INTERNET" />
```
配置scheme协议：

```java
<meta-data
    android:name="com.ykinstall.APP_KEY"
    android:value="${YKINSTALL_APPID}" />
<intent-filter>
    <action android:name="android.intent.action.VIEW" />

    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data
        android:host="openapp"
        android:scheme="${YKINSTALL_APPID}" />
</intent-filter>
```

将YKINSTALL\_APPID 替换为后台创建应用后给到的appid
## **2.2 gradle配置**
### aar的下载路径：
```java
buildscript {
    repositories {
        maven {
    url 'https://yk-install.oss-cn-hangzhou.aliyuncs.com/android/sdk/'
}
    }
allprojects {
    repositories {
        maven{
            url  'https://yk-install.oss-cn-hangzhou.aliyuncs.com/android/sdk/'
        }
```

注意点：因为有公共库的下载，这个maven配置建议放在第一个，不然会下载的比较慢。

在主工程的build.gradle中配置

```java
implementation 'com.yoka.ykinstall:ykinstall:1.0.0'
```

### **2.3 混淆配置**
-dontwarn com.yoka.ykinstall.\*\*

-keep class com.yoka. ykinstall.\*\*{\*;}
## **3.接口说明**
### **3.1获取数据接口**
### 传递一个Context对象和获取数据的回调函数，注意这里的回调在子线程

```java
InstallUtils.getInstall(MainActivity.this, new YkAppInstallListener() {
    @Override
    public void onInstallFinish(String data) {
       
    }
    @Override
    public void onInstallError(int i, String s) {

    }
});
```



### **3.2获取Scheme协议数据接口**
当app已经安装成功，从浏览器的链接点击进入app后，使用Scheme协议获取数据。

示例如下：

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main); 
    InstallUtils.getSchemeAppData(getIntent(), listener);
}
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    InstallUtils.getSchemeAppData(intent, listener);
}
YkWakeUpListener listener = new YkWakeUpListener() {
    @Override
    public void onWakeUpFinish(String data) {
    }
};
```





需要在onCreate和onNewIntent两个方法中获取参数。

