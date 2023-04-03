<?php
declare (strict_types=1);

namespace app\services\bet;

use app\dao\user\UserRechargeDao;
use app\services\BaseServices;

class BetOrderServices extends BaseServices
{

    /**
     * UserRechargeServices constructor.
     * @param UserRechargeDao $dao
     */
    public function __construct(UserRechargeDao $dao)
    {
        $this->dao = $dao;
    }


    /**
     * 获取用户订单数据
     * @return array
     */
    public function user_order_list(array $where)
    {
        $data = [];
        $data['sumPrice'] = 1;
        $where['recharge_type'] = 'third';
        $data['thirdPayPrice'] = 2;
        $where['recharge_type'] = 'bank';
        $data['bankPrice'] = 3;
        $where['recharge_type'] = 'crypto';
        $data['cryptoCurrencyPrice'] = 4;
        return [
            [
                'name' => 'Total Bet Count',
                'field' => '单',
                'count' => $data['sumPrice'],
                'className' => 'logo-yen',
                'col' => 6,
            ],
            [
                'name' => 'Total Vet Amount',
                'field' => '元',
                'count' => $data['bankPrice'],
                'className' => 'logo-bitcoin',
                'col' => 6,
            ],
            [
                'name' => 'Valid Betting Amount',
                'field' => '元',
                'count' => $data['thirdPayPrice'],
                'className' => 'ios-bicycle',
                'col' => 6,
            ],
            [
                'name' => 'Bonus',
                'field' => '元',
                'count' => $data['cryptoCurrencyPrice'],
                'className' => 'logo-bitcoin',
                'col' => 6,
            ], [
                'name' => 'Profit and Loss',
                'field' => '元',
                'count' => $data['cryptoCurrencyPrice'],
                'className' => 'logo-bitcoin',
                'col' => 6,
            ]

        ];
    }

}