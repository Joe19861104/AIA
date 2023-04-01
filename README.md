## 环境要求

- 运行环境要求PHP7.1-7.4
- Swoole版本 4.8.16
- ThinkPHP6.0.3

## 运行
```
1.php think swoole start|restart|stop
```


后台访问地址：
1.域名/admin

~~~
APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[DATABASE]
TYPE = mysql
HOSTNAME = 127.0.0.1 #数据库连接地址
DATABASE = test #数据库名称
USERNAME = username #数据库登录账号
PASSWORD = password #数据库登录密码
HOSTPORT = 3306 #数据库端口
CHARSET = utf8
DEBUG = true

[LANG]
default_lang = zh-cn

[REDIS]
REDIS_HOSTNAME = 127.0.0.1 # redis链接地址
PORT = 6379 #端口号
REDIS_PASSWORD = 123456 #密码
SELECT = 0 #数据库
~~~



## 消息队列

```sh
php think queue:listen --queue
```

## 定时任务

在自动收货,库存预警等功能使用到

```sh
php think timer [ status ] [ --d ]
```

参数

- status: 状态
    - start: 启动
    - stop: 关闭
    - restart: 重启
- --d : 后台执行

## 长连接服务

在h5聊天,后台管理员消息通知等功能使用到

```sh
php think workerman [ status ]  [ --d ]
```

windows环境下需要分三步执行

```sh
# 内部通讯服务
php think workerman start --d
```

参数

- status: 状态
    - start: 启动
    - stop: 关闭
    - restart: 重启
- --d : 后台执行
