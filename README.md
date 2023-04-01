## Environment Required

- PHP7.1-7.4
- Swoole Version 4.8.16
- ThinkPHP6.0.3

## Run
```
1.php think swoole start|restart|stop
```


backend address：
1.domain/admin

~~~
APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[DATABASE]
TYPE = mysql
HOSTNAME = 127.0.0.1 #database connection addr
DATABASE = test # databases name
USERNAME = username #database account
PASSWORD = password # database password
HOSTPORT = 3306 #port
CHARSET = utf8
DEBUG = true

[LANG]
default_lang = zh-cn

[REDIS]
REDIS_HOSTNAME = 127.0.0.1 # redis connection addr
PORT = 6379 # port
REDIS_PASSWORD = 123456 #password
SELECT = 0 # database
~~~



## message queue

```sh
php think queue:listen --queue
```

## timer

```sh
php think timer [ status ] [ --d ]
```

parameters

- status: status
    - start: run
    - stop: stop
    - restart: reload
- --d : backend

## long connection address

in h5 chat, admin can use this fun

```sh
php think workerman [ status ]  [ --d ]
```

windows environment need three step:

```sh
#  inner IM service
php think workerman start --d
```

parameters

- status: status
    - start: run
    - stop: stop
    - restart: reload
- --d : backend
