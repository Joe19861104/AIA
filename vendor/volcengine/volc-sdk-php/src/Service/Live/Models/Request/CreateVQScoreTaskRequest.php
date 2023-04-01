<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/request/request_live.proto

namespace Volc\Service\Live\Models\Request;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>Volcengine.Live.Models.Request.CreateVQScoreTaskRequest</code>
 */
class CreateVQScoreTaskRequest  extends \Google\Protobuf\Internal\Message
{
    /**
     * 主拉流地址。 支持输入FCDN拉流地址和第三方CDN拉流地址。
     *
     * Generated from protobuf field <code>string MainAddr = 1;</code>
     */
    public $MainAddr = '';
    /**
     * 对比拉流地址。
     *
     * Generated from protobuf field <code>string ContrastAddr = 2;</code>
     */
    public $ContrastAddr = '';
    /**
     * 抽帧间隔，目前只能密集抽帧模板控制，以模板为主。
     *
     * Generated from protobuf field <code>int32 FrameInterval = 3;</code>
     */
    public $FrameInterval = 0;
    /**
     * 测评运行时间
     *- 支持输入s整数
     *- 最大支持7*24小时的测评任务
     *- 最小支持1min的测评任务
     *
     * Generated from protobuf field <code>int32 Duration = 4;</code>
     */
    public $Duration = 0;
    /**
     * 测评算法，支持vqscore分数计算
     *
     * Generated from protobuf field <code>string Algorithm = 5;</code>
     */
    public $Algorithm = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $MainAddr
     *           主拉流地址。 支持输入FCDN拉流地址和第三方CDN拉流地址。
     *     @type string $ContrastAddr
     *           对比拉流地址。
     *     @type int $FrameInterval
     *           抽帧间隔，目前只能密集抽帧模板控制，以模板为主。
     *     @type int $Duration
     *           测评运行时间
     *          - 支持输入s整数
     *          - 最大支持7*24小时的测评任务
     *          - 最小支持1min的测评任务
     *     @type string $Algorithm
     *           测评算法，支持vqscore分数计算
     * }
     */
    public function __construct($data = NULL) {
        \Volc\Service\Live\Models\GPBMetadata\RequestLive::initOnce();
        parent::__construct($data);
    }

    /**
     * 主拉流地址。 支持输入FCDN拉流地址和第三方CDN拉流地址。
     *
     * Generated from protobuf field <code>string MainAddr = 1;</code>
     * @return string
     */
    public function getMainAddr()
    {
        return $this->MainAddr;
    }

    /**
     * 主拉流地址。 支持输入FCDN拉流地址和第三方CDN拉流地址。
     *
     * Generated from protobuf field <code>string MainAddr = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setMainAddr($var)
    {
        GPBUtil::checkString($var, True);
        $this->MainAddr = $var;

        return $this;
    }

    /**
     * 对比拉流地址。
     *
     * Generated from protobuf field <code>string ContrastAddr = 2;</code>
     * @return string
     */
    public function getContrastAddr()
    {
        return $this->ContrastAddr;
    }

    /**
     * 对比拉流地址。
     *
     * Generated from protobuf field <code>string ContrastAddr = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setContrastAddr($var)
    {
        GPBUtil::checkString($var, True);
        $this->ContrastAddr = $var;

        return $this;
    }

    /**
     * 抽帧间隔，目前只能密集抽帧模板控制，以模板为主。
     *
     * Generated from protobuf field <code>int32 FrameInterval = 3;</code>
     * @return int
     */
    public function getFrameInterval()
    {
        return $this->FrameInterval;
    }

    /**
     * 抽帧间隔，目前只能密集抽帧模板控制，以模板为主。
     *
     * Generated from protobuf field <code>int32 FrameInterval = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setFrameInterval(int $var)
    {
        GPBUtil::checkInt64($var);
        $this->FrameInterval = $var;

        return $this;
    }

    /**
     * 测评运行时间7
     *- 支持输入s整数
     *- 最大支持7*24小时的测评任务
     *- 最小支持1min的测评任务
     *
     * Generated from protobuf field <code>int32 Duration = 4;</code>
     * @return int
     */
    public function getDuration()
    {
        return $this->Duration;
    }

    /**
     * 测评运行时间
     *- 支持输入s整数
     *- 最大支持7*24小时的测评任务
     *- 最小支持1min的测评任务
     *
     * Generated from protobuf field <code>int32 Duration = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setDuration(int $var)
    {
        GPBUtil::checkInt32($var);
        $this->Duration = $var;

        return $this;
    }

    /**
     * 测评算法，支持vqscore分数计算
     *
     * Generated from protobuf field <code>string Algorithm = 5;</code>
     * @return string
     */
    public function getAlgorithm()
    {
        return $this->Algorithm;
    }

    /**
     * 测评算法，支持vqscore分数计算
     *
     * Generated from protobuf field <code>string Algorithm = 5;</code>
     * @param string $var
     * @return $this
     */
    public function setAlgorithm($var)
    {
        GPBUtil::checkString($var, True);
        $this->Algorithm = $var;

        return $this;
    }

}
