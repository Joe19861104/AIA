<?php

use think\facade\Route;

Route::group('bet', function () {
    //订单列表
    Route::get('order/list', 'v1.bet.order.Order/index')->option(['real_name' => '订单列表']);
});
