// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: pb/svc/manager/article.proto

package article

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ArticleServiceClient is the client API for ArticleService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ArticleServiceClient interface {
	GetArticleInfo(ctx context.Context, in *GetArticleInfoReq, opts ...grpc.CallOption) (*GetArticleInfoRes, error)
	GetArticleList(ctx context.Context, in *GetArticleListReq, opts ...grpc.CallOption) (*GetArticleListRes, error)
	GetArticleCountByHour(ctx context.Context, in *GetArticleCountByHourReq, opts ...grpc.CallOption) (*GetArticleCountByHourRes, error)
	GetArticleCountByDay(ctx context.Context, in *GetArticleCountByDayReq, opts ...grpc.CallOption) (*GetArticleCountByDayRes, error)
}

type articleServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewArticleServiceClient(cc grpc.ClientConnInterface) ArticleServiceClient {
	return &articleServiceClient{cc}
}

func (c *articleServiceClient) GetArticleInfo(ctx context.Context, in *GetArticleInfoReq, opts ...grpc.CallOption) (*GetArticleInfoRes, error) {
	out := new(GetArticleInfoRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.article.ArticleService/GetArticleInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *articleServiceClient) GetArticleList(ctx context.Context, in *GetArticleListReq, opts ...grpc.CallOption) (*GetArticleListRes, error) {
	out := new(GetArticleListRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.article.ArticleService/GetArticleList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *articleServiceClient) GetArticleCountByHour(ctx context.Context, in *GetArticleCountByHourReq, opts ...grpc.CallOption) (*GetArticleCountByHourRes, error) {
	out := new(GetArticleCountByHourRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.article.ArticleService/GetArticleCountByHour", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *articleServiceClient) GetArticleCountByDay(ctx context.Context, in *GetArticleCountByDayReq, opts ...grpc.CallOption) (*GetArticleCountByDayRes, error) {
	out := new(GetArticleCountByDayRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.article.ArticleService/GetArticleCountByDay", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ArticleServiceServer is the server API for ArticleService service.
// All implementations must embed UnimplementedArticleServiceServer
// for forward compatibility
type ArticleServiceServer interface {
	GetArticleInfo(context.Context, *GetArticleInfoReq) (*GetArticleInfoRes, error)
	GetArticleList(context.Context, *GetArticleListReq) (*GetArticleListRes, error)
	GetArticleCountByHour(context.Context, *GetArticleCountByHourReq) (*GetArticleCountByHourRes, error)
	GetArticleCountByDay(context.Context, *GetArticleCountByDayReq) (*GetArticleCountByDayRes, error)
	mustEmbedUnimplementedArticleServiceServer()
}

// UnimplementedArticleServiceServer must be embedded to have forward compatible implementations.
type UnimplementedArticleServiceServer struct {
}

func (UnimplementedArticleServiceServer) GetArticleInfo(context.Context, *GetArticleInfoReq) (*GetArticleInfoRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetArticleInfo not implemented")
}
func (UnimplementedArticleServiceServer) GetArticleList(context.Context, *GetArticleListReq) (*GetArticleListRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetArticleList not implemented")
}
func (UnimplementedArticleServiceServer) GetArticleCountByHour(context.Context, *GetArticleCountByHourReq) (*GetArticleCountByHourRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetArticleCountByHour not implemented")
}
func (UnimplementedArticleServiceServer) GetArticleCountByDay(context.Context, *GetArticleCountByDayReq) (*GetArticleCountByDayRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetArticleCountByDay not implemented")
}
func (UnimplementedArticleServiceServer) mustEmbedUnimplementedArticleServiceServer() {}

// UnsafeArticleServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ArticleServiceServer will
// result in compilation errors.
type UnsafeArticleServiceServer interface {
	mustEmbedUnimplementedArticleServiceServer()
}

func RegisterArticleServiceServer(s grpc.ServiceRegistrar, srv ArticleServiceServer) {
	s.RegisterService(&ArticleService_ServiceDesc, srv)
}

func _ArticleService_GetArticleInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetArticleInfoReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServiceServer).GetArticleInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.article.ArticleService/GetArticleInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServiceServer).GetArticleInfo(ctx, req.(*GetArticleInfoReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArticleService_GetArticleList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetArticleListReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServiceServer).GetArticleList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.article.ArticleService/GetArticleList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServiceServer).GetArticleList(ctx, req.(*GetArticleListReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArticleService_GetArticleCountByHour_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetArticleCountByHourReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServiceServer).GetArticleCountByHour(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.article.ArticleService/GetArticleCountByHour",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServiceServer).GetArticleCountByHour(ctx, req.(*GetArticleCountByHourReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _ArticleService_GetArticleCountByDay_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetArticleCountByDayReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ArticleServiceServer).GetArticleCountByDay(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.article.ArticleService/GetArticleCountByDay",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ArticleServiceServer).GetArticleCountByDay(ctx, req.(*GetArticleCountByDayReq))
	}
	return interceptor(ctx, in, info, handler)
}

// ArticleService_ServiceDesc is the grpc.ServiceDesc for ArticleService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ArticleService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.svc.manager.article.ArticleService",
	HandlerType: (*ArticleServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetArticleInfo",
			Handler:    _ArticleService_GetArticleInfo_Handler,
		},
		{
			MethodName: "GetArticleList",
			Handler:    _ArticleService_GetArticleList_Handler,
		},
		{
			MethodName: "GetArticleCountByHour",
			Handler:    _ArticleService_GetArticleCountByHour_Handler,
		},
		{
			MethodName: "GetArticleCountByDay",
			Handler:    _ArticleService_GetArticleCountByDay_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pb/svc/manager/article.proto",
}
