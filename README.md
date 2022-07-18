<!--
 * @Author: dong 2710732812@qq.com
 * @Date: 2022-05-16 10:23:47
 * @LastEditors: dong 2710732812@qq.com
 * @LastEditTime: 2022-05-16 10:24:48
 * @FilePath: \hot_reload\reademe.md
-->
### 简易版的热重载

## 使用
- 启动 server.js
- 打开 localhost:3000

## 原理
- 前台：根据反馈自动更新 js,css引用
- 后台：监听文件更改触发反馈
- 连接：socket 保持前后台信息交互
