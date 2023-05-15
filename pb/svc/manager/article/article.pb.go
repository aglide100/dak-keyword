// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: pb/svc/manager/article.proto

package article

import (
	article "github.com/aglide100/dak-keyword/pb/unit/article"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetArticleCountByDayReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetArticleCountByDayReq) Reset() {
	*x = GetArticleCountByDayReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_svc_manager_article_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetArticleCountByDayReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetArticleCountByDayReq) ProtoMessage() {}

func (x *GetArticleCountByDayReq) ProtoReflect() protoreflect.Message {
	mi := &file_pb_svc_manager_article_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetArticleCountByDayReq.ProtoReflect.Descriptor instead.
func (*GetArticleCountByDayReq) Descriptor() ([]byte, []int) {
	return file_pb_svc_manager_article_proto_rawDescGZIP(), []int{0}
}

func (x *GetArticleCountByDayReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetArticleCountByDayRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ArticleCount []*article.ArticleCount `protobuf:"bytes,1,rep,name=ArticleCount,proto3" json:"ArticleCount,omitempty"`
}

func (x *GetArticleCountByDayRes) Reset() {
	*x = GetArticleCountByDayRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_svc_manager_article_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetArticleCountByDayRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetArticleCountByDayRes) ProtoMessage() {}

func (x *GetArticleCountByDayRes) ProtoReflect() protoreflect.Message {
	mi := &file_pb_svc_manager_article_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetArticleCountByDayRes.ProtoReflect.Descriptor instead.
func (*GetArticleCountByDayRes) Descriptor() ([]byte, []int) {
	return file_pb_svc_manager_article_proto_rawDescGZIP(), []int{1}
}

func (x *GetArticleCountByDayRes) GetArticleCount() []*article.ArticleCount {
	if x != nil {
		return x.ArticleCount
	}
	return nil
}

type GetArticleCountByHourReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetArticleCountByHourReq) Reset() {
	*x = GetArticleCountByHourReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_svc_manager_article_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetArticleCountByHourReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetArticleCountByHourReq) ProtoMessage() {}

func (x *GetArticleCountByHourReq) ProtoReflect() protoreflect.Message {
	mi := &file_pb_svc_manager_article_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetArticleCountByHourReq.ProtoReflect.Descriptor instead.
func (*GetArticleCountByHourReq) Descriptor() ([]byte, []int) {
	return file_pb_svc_manager_article_proto_rawDescGZIP(), []int{2}
}

func (x *GetArticleCountByHourReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetArticleCountByHourRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ArticleCount []*article.ArticleCount `protobuf:"bytes,1,rep,name=ArticleCount,proto3" json:"ArticleCount,omitempty"`
}

func (x *GetArticleCountByHourRes) Reset() {
	*x = GetArticleCountByHourRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_svc_manager_article_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetArticleCountByHourRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetArticleCountByHourRes) ProtoMessage() {}

func (x *GetArticleCountByHourRes) ProtoReflect() protoreflect.Message {
	mi := &file_pb_svc_manager_article_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetArticleCountByHourRes.ProtoReflect.Descriptor instead.
func (*GetArticleCountByHourRes) Descriptor() ([]byte, []int) {
	return file_pb_svc_manager_article_proto_rawDescGZIP(), []int{3}
}

func (x *GetArticleCountByHourRes) GetArticleCount() []*article.ArticleCount {
	if x != nil {
		return x.ArticleCount
	}
	return nil
}

type GetArticleListReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Page int32  `protobuf:"varint,2,opt,name=page,proto3" json:"page,omitempty"`
}

func (x *GetArticleListReq) Reset() {
	*x = GetArticleListReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_svc_manager_article_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetArticleListReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetArticleListReq) ProtoMessage() {}

func (x *GetArticleListReq) ProtoReflect() protoreflect.Message {
	mi := &file_pb_svc_manager_article_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetArticleListReq.ProtoReflect.Descriptor instead.
func (*GetArticleListReq) Descriptor() ([]byte, []int) {
	return file_pb_svc_manager_article_proto_rawDescGZIP(), []int{4}
}

func (x *GetArticleListReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GetArticleListReq) GetPage() int32 {
	if x != nil {
		return x.Page
	}
	return 0
}

type GetArticleListRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Article []*article.Article `protobuf:"bytes,1,rep,name=Article,proto3" json:"Article,omitempty"`
}

func (x *GetArticleListRes) Reset() {
	*x = GetArticleListRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_svc_manager_article_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetArticleListRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetArticleListRes) ProtoMessage() {}

func (x *GetArticleListRes) ProtoReflect() protoreflect.Message {
	mi := &file_pb_svc_manager_article_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetArticleListRes.ProtoReflect.Descriptor instead.
func (*GetArticleListRes) Descriptor() ([]byte, []int) {
	return file_pb_svc_manager_article_proto_rawDescGZIP(), []int{5}
}

func (x *GetArticleListRes) GetArticle() []*article.Article {
	if x != nil {
		return x.Article
	}
	return nil
}

type GetArticleInfoReq struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetArticleInfoReq) Reset() {
	*x = GetArticleInfoReq{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_svc_manager_article_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetArticleInfoReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetArticleInfoReq) ProtoMessage() {}

func (x *GetArticleInfoReq) ProtoReflect() protoreflect.Message {
	mi := &file_pb_svc_manager_article_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetArticleInfoReq.ProtoReflect.Descriptor instead.
func (*GetArticleInfoReq) Descriptor() ([]byte, []int) {
	return file_pb_svc_manager_article_proto_rawDescGZIP(), []int{6}
}

func (x *GetArticleInfoReq) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetArticleInfoRes struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TotalCount int32 `protobuf:"varint,1,opt,name=totalCount,proto3" json:"totalCount,omitempty"`
	PageCount  int32 `protobuf:"varint,2,opt,name=pageCount,proto3" json:"pageCount,omitempty"`
}

func (x *GetArticleInfoRes) Reset() {
	*x = GetArticleInfoRes{}
	if protoimpl.UnsafeEnabled {
		mi := &file_pb_svc_manager_article_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetArticleInfoRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetArticleInfoRes) ProtoMessage() {}

func (x *GetArticleInfoRes) ProtoReflect() protoreflect.Message {
	mi := &file_pb_svc_manager_article_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetArticleInfoRes.ProtoReflect.Descriptor instead.
func (*GetArticleInfoRes) Descriptor() ([]byte, []int) {
	return file_pb_svc_manager_article_proto_rawDescGZIP(), []int{7}
}

func (x *GetArticleInfoRes) GetTotalCount() int32 {
	if x != nil {
		return x.TotalCount
	}
	return 0
}

func (x *GetArticleInfoRes) GetPageCount() int32 {
	if x != nil {
		return x.PageCount
	}
	return 0
}

var File_pb_svc_manager_article_proto protoreflect.FileDescriptor

var file_pb_svc_manager_article_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x70, 0x62, 0x2f, 0x73, 0x76, 0x63, 0x2f, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72,
	0x2f, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x16,
	0x70, 0x62, 0x2e, 0x73, 0x76, 0x63, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x2e, 0x61,
	0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x1a, 0x1d, 0x70, 0x62, 0x2f, 0x75, 0x6e, 0x69, 0x74, 0x2f,
	0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2f, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x29, 0x0a, 0x17, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69,
	0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x79, 0x44, 0x61, 0x79, 0x52, 0x65, 0x71,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x22, 0x5c, 0x0a, 0x17, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f,
	0x75, 0x6e, 0x74, 0x42, 0x79, 0x44, 0x61, 0x79, 0x52, 0x65, 0x73, 0x12, 0x41, 0x0a, 0x0c, 0x41,
	0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x1d, 0x2e, 0x70, 0x62, 0x2e, 0x75, 0x6e, 0x69, 0x74, 0x2e, 0x61, 0x72, 0x74, 0x69,
	0x63, 0x6c, 0x65, 0x2e, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74,
	0x52, 0x0c, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x2a,
	0x0a, 0x18, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x42, 0x79, 0x48, 0x6f, 0x75, 0x72, 0x52, 0x65, 0x71, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x5d, 0x0a, 0x18, 0x47, 0x65,
	0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x79, 0x48,
	0x6f, 0x75, 0x72, 0x52, 0x65, 0x73, 0x12, 0x41, 0x0a, 0x0c, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c,
	0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x70,
	0x62, 0x2e, 0x75, 0x6e, 0x69, 0x74, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e, 0x41,
	0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x0c, 0x41, 0x72, 0x74,
	0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x37, 0x0a, 0x11, 0x47, 0x65, 0x74,
	0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x12, 0x0e,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12,
	0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x70, 0x61,
	0x67, 0x65, 0x22, 0x47, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x12, 0x32, 0x0a, 0x07, 0x41, 0x72, 0x74, 0x69, 0x63,
	0x6c, 0x65, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x70, 0x62, 0x2e, 0x75, 0x6e,
	0x69, 0x74, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e, 0x41, 0x72, 0x74, 0x69, 0x63,
	0x6c, 0x65, 0x52, 0x07, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x22, 0x23, 0x0a, 0x11, 0x47,
	0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x22, 0x51, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x49, 0x6e,
	0x66, 0x6f, 0x52, 0x65, 0x73, 0x12, 0x1e, 0x0a, 0x0a, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x43, 0x6f,
	0x75, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x74, 0x6f, 0x74, 0x61, 0x6c,
	0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x61, 0x67, 0x65, 0x43, 0x6f, 0x75,
	0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x70, 0x61, 0x67, 0x65, 0x43, 0x6f,
	0x75, 0x6e, 0x74, 0x32, 0xd7, 0x03, 0x0a, 0x0e, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x66, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74,
	0x69, 0x63, 0x6c, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x29, 0x2e, 0x70, 0x62, 0x2e, 0x73, 0x76,
	0x63, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c,
	0x65, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x49, 0x6e, 0x66, 0x6f,
	0x52, 0x65, 0x71, 0x1a, 0x29, 0x2e, 0x70, 0x62, 0x2e, 0x73, 0x76, 0x63, 0x2e, 0x6d, 0x61, 0x6e,
	0x61, 0x67, 0x65, 0x72, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74,
	0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x12, 0x66,
	0x0a, 0x0e, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x4c, 0x69, 0x73, 0x74,
	0x12, 0x29, 0x2e, 0x70, 0x62, 0x2e, 0x73, 0x76, 0x63, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65,
	0x72, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74,
	0x69, 0x63, 0x6c, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x1a, 0x29, 0x2e, 0x70, 0x62,
	0x2e, 0x73, 0x76, 0x63, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x2e, 0x61, 0x72, 0x74,
	0x69, 0x63, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x12, 0x7b, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74,
	0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x79, 0x48, 0x6f, 0x75, 0x72, 0x12,
	0x30, 0x2e, 0x70, 0x62, 0x2e, 0x73, 0x76, 0x63, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72,
	0x2e, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69,
	0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x79, 0x48, 0x6f, 0x75, 0x72, 0x52, 0x65,
	0x71, 0x1a, 0x30, 0x2e, 0x70, 0x62, 0x2e, 0x73, 0x76, 0x63, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67,
	0x65, 0x72, 0x2e, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x72,
	0x74, 0x69, 0x63, 0x6c, 0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x79, 0x48, 0x6f, 0x75, 0x72,
	0x52, 0x65, 0x73, 0x12, 0x78, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c,
	0x65, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x79, 0x44, 0x61, 0x79, 0x12, 0x2f, 0x2e, 0x70, 0x62,
	0x2e, 0x73, 0x76, 0x63, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x2e, 0x61, 0x72, 0x74,
	0x69, 0x63, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x43,
	0x6f, 0x75, 0x6e, 0x74, 0x42, 0x79, 0x44, 0x61, 0x79, 0x52, 0x65, 0x71, 0x1a, 0x2f, 0x2e, 0x70,
	0x62, 0x2e, 0x73, 0x76, 0x63, 0x2e, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72, 0x2e, 0x61, 0x72,
	0x74, 0x69, 0x63, 0x6c, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65,
	0x43, 0x6f, 0x75, 0x6e, 0x74, 0x42, 0x79, 0x44, 0x61, 0x79, 0x52, 0x65, 0x73, 0x42, 0x39, 0x5a,
	0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x67, 0x6c, 0x69,
	0x64, 0x65, 0x31, 0x30, 0x30, 0x2f, 0x64, 0x61, 0x6b, 0x2d, 0x6b, 0x65, 0x79, 0x77, 0x6f, 0x72,
	0x64, 0x2f, 0x70, 0x62, 0x2f, 0x73, 0x76, 0x63, 0x2f, 0x6d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x72,
	0x2f, 0x61, 0x72, 0x74, 0x69, 0x63, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_pb_svc_manager_article_proto_rawDescOnce sync.Once
	file_pb_svc_manager_article_proto_rawDescData = file_pb_svc_manager_article_proto_rawDesc
)

func file_pb_svc_manager_article_proto_rawDescGZIP() []byte {
	file_pb_svc_manager_article_proto_rawDescOnce.Do(func() {
		file_pb_svc_manager_article_proto_rawDescData = protoimpl.X.CompressGZIP(file_pb_svc_manager_article_proto_rawDescData)
	})
	return file_pb_svc_manager_article_proto_rawDescData
}

var file_pb_svc_manager_article_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_pb_svc_manager_article_proto_goTypes = []interface{}{
	(*GetArticleCountByDayReq)(nil),  // 0: pb.svc.manager.article.GetArticleCountByDayReq
	(*GetArticleCountByDayRes)(nil),  // 1: pb.svc.manager.article.GetArticleCountByDayRes
	(*GetArticleCountByHourReq)(nil), // 2: pb.svc.manager.article.GetArticleCountByHourReq
	(*GetArticleCountByHourRes)(nil), // 3: pb.svc.manager.article.GetArticleCountByHourRes
	(*GetArticleListReq)(nil),        // 4: pb.svc.manager.article.GetArticleListReq
	(*GetArticleListRes)(nil),        // 5: pb.svc.manager.article.GetArticleListRes
	(*GetArticleInfoReq)(nil),        // 6: pb.svc.manager.article.GetArticleInfoReq
	(*GetArticleInfoRes)(nil),        // 7: pb.svc.manager.article.GetArticleInfoRes
	(*article.ArticleCount)(nil),     // 8: pb.unit.article.ArticleCount
	(*article.Article)(nil),          // 9: pb.unit.article.Article
}
var file_pb_svc_manager_article_proto_depIdxs = []int32{
	8, // 0: pb.svc.manager.article.GetArticleCountByDayRes.ArticleCount:type_name -> pb.unit.article.ArticleCount
	8, // 1: pb.svc.manager.article.GetArticleCountByHourRes.ArticleCount:type_name -> pb.unit.article.ArticleCount
	9, // 2: pb.svc.manager.article.GetArticleListRes.Article:type_name -> pb.unit.article.Article
	6, // 3: pb.svc.manager.article.ArticleService.GetArticleInfo:input_type -> pb.svc.manager.article.GetArticleInfoReq
	4, // 4: pb.svc.manager.article.ArticleService.GetArticleList:input_type -> pb.svc.manager.article.GetArticleListReq
	2, // 5: pb.svc.manager.article.ArticleService.GetArticleCountByHour:input_type -> pb.svc.manager.article.GetArticleCountByHourReq
	0, // 6: pb.svc.manager.article.ArticleService.GetArticleCountByDay:input_type -> pb.svc.manager.article.GetArticleCountByDayReq
	7, // 7: pb.svc.manager.article.ArticleService.GetArticleInfo:output_type -> pb.svc.manager.article.GetArticleInfoRes
	5, // 8: pb.svc.manager.article.ArticleService.GetArticleList:output_type -> pb.svc.manager.article.GetArticleListRes
	3, // 9: pb.svc.manager.article.ArticleService.GetArticleCountByHour:output_type -> pb.svc.manager.article.GetArticleCountByHourRes
	1, // 10: pb.svc.manager.article.ArticleService.GetArticleCountByDay:output_type -> pb.svc.manager.article.GetArticleCountByDayRes
	7, // [7:11] is the sub-list for method output_type
	3, // [3:7] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_pb_svc_manager_article_proto_init() }
func file_pb_svc_manager_article_proto_init() {
	if File_pb_svc_manager_article_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_pb_svc_manager_article_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetArticleCountByDayReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_svc_manager_article_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetArticleCountByDayRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_svc_manager_article_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetArticleCountByHourReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_svc_manager_article_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetArticleCountByHourRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_svc_manager_article_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetArticleListReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_svc_manager_article_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetArticleListRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_svc_manager_article_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetArticleInfoReq); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_pb_svc_manager_article_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetArticleInfoRes); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_pb_svc_manager_article_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_pb_svc_manager_article_proto_goTypes,
		DependencyIndexes: file_pb_svc_manager_article_proto_depIdxs,
		MessageInfos:      file_pb_svc_manager_article_proto_msgTypes,
	}.Build()
	File_pb_svc_manager_article_proto = out.File
	file_pb_svc_manager_article_proto_rawDesc = nil
	file_pb_svc_manager_article_proto_goTypes = nil
	file_pb_svc_manager_article_proto_depIdxs = nil
}
