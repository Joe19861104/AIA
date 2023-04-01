<?php

use think\facade\Route;

Route::group('bet', function () {
    //投注订单列表
    Route::get('order/list', 'v1.bet.order.Order/index')->option(['real_name' => '投注订单列表']);
});
