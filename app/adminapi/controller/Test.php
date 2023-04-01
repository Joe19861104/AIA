<?php
/**
 * @author: liaofei<136327134@qq.com>
 * @day: 2020/9/12
 */

namespace app\adminapi\controller;

use app\services\user\UserServices;
use think\facade\Log;

class Test
{
    public function index()
    {
        Log::write('123','crontab');
    }
}

