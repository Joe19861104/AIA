<?php

namespace app\adminapi\controller\v1\bet\order;

use app\adminapi\controller\AuthController;
use app\services\bet\BetOrderServices;
use think\facade\App;

class Order extends AuthController
{

    /**
     * UserRecharge constructor.
     * @param App $app
     * @param BetOrderServices $services
     */
    public function __construct(App $app, BetOrderServices $services)
    {
        parent::__construct($app);
        $this->services = $services;
    }

    /**
     * 获取用户充值数据
     * @return array
     */
    public function index()
    {
        $where = $this->request->getMore([
            ['data', ''],
            ['paid', ''],
            ['nickname', ''],
        ]);
        return app('json')->success($this->services->user_order_list($where));
    }

}