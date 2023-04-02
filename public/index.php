<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
namespace think;

if ('7.1.0' > phpversion()) {
    exit('您的php版本过低，不能安装本软件，兼容php版本7.1~7.4，谢谢！');
}
if (phpversion() >= '8.0.0') {
    exit('您的php版本太高，不能安装本软件，兼容php版本7.1~7.4，谢谢！');
}

define('DS', DIRECTORY_SEPARATOR);


require __DIR__ . '/../vendor/autoload.php';

// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();

$response->send();

$http->end($response);
