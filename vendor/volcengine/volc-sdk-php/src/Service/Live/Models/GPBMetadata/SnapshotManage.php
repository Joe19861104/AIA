<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: live/business/snapshot_manage.proto

namespace Volc\Service\Live\Models\GPBMetadata;

class SnapshotManage
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        $pool->internalAddGeneratedFile(
            '
�
#live/business/snapshot_manage.protoVolcengine.Live.Models.Business"�
CDNSnapshotHistory
Vhost (	
App (	
Stream (	
Path (	
FileName (	
	TimeStamp (	
Width (
Height (
	ServiceID	 (	
URI
 (	"V

Pagination
PageCur (
PageSize (
	PageTotal (

TotalCount ("�
CDNSnapshotHistoryInfoA
Data (23.Volcengine.Live.Models.Business.CDNSnapshotHistory?

Pagination (2+.Volcengine.Live.Models.Business.PaginationB�
*com.volcengine.service.live.model.businessBSnapshotManagePZBgithub.com/volcengine/volc-sdk-golang/service/live/models/business��� �!Volc\\Service\\Live\\Models\\Business�$Volc\\Service\\Live\\Models\\GPBMetadatabproto3'
        , true);

        static::$is_initialized = true;
    }
}

