// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: pb/svc/provision/provision.proto

package provision

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

// ProvisionClient is the client API for Provision service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ProvisionClient interface {
	CreateScraper(ctx context.Context, in *CreateScraperReq, opts ...grpc.CallOption) (*CreateScraperRes, error)
	CreateAnalyzer(ctx context.Context, in *CreateAnalyzerReq, opts ...grpc.CallOption) (*CreateAnalyzerRes, error)
	CreateSimilarity(ctx context.Context, in *CreateSimilarityReq, opts ...grpc.CallOption) (*CreateSimilarityRes, error)
	GetScraperStatus(ctx context.Context, in *GetScraperStatusReq, opts ...grpc.CallOption) (*GetScraperStatusRes, error)
	GetAnalyzerStatus(ctx context.Context, in *GetAnalyzerStatusReq, opts ...grpc.CallOption) (*GetAnalyzerStatusRes, error)
	RemoveScraper(ctx context.Context, in *RemoveScraperReq, opts ...grpc.CallOption) (*RemoveScraperRes, error)
	RemoveAnalyzer(ctx context.Context, in *RemoveAnalyzerReq, opts ...grpc.CallOption) (*RemoveAnalyzerRes, error)
	RemoveSimilarity(ctx context.Context, in *RemoveSimilarityReq, opts ...grpc.CallOption) (*RemoveSimilarityRes, error)
}

type provisionClient struct {
	cc grpc.ClientConnInterface
}

func NewProvisionClient(cc grpc.ClientConnInterface) ProvisionClient {
	return &provisionClient{cc}
}

func (c *provisionClient) CreateScraper(ctx context.Context, in *CreateScraperReq, opts ...grpc.CallOption) (*CreateScraperRes, error) {
	out := new(CreateScraperRes)
	err := c.cc.Invoke(ctx, "/pb.svc.provision.Provision/CreateScraper", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisionClient) CreateAnalyzer(ctx context.Context, in *CreateAnalyzerReq, opts ...grpc.CallOption) (*CreateAnalyzerRes, error) {
	out := new(CreateAnalyzerRes)
	err := c.cc.Invoke(ctx, "/pb.svc.provision.Provision/CreateAnalyzer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisionClient) CreateSimilarity(ctx context.Context, in *CreateSimilarityReq, opts ...grpc.CallOption) (*CreateSimilarityRes, error) {
	out := new(CreateSimilarityRes)
	err := c.cc.Invoke(ctx, "/pb.svc.provision.Provision/CreateSimilarity", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisionClient) GetScraperStatus(ctx context.Context, in *GetScraperStatusReq, opts ...grpc.CallOption) (*GetScraperStatusRes, error) {
	out := new(GetScraperStatusRes)
	err := c.cc.Invoke(ctx, "/pb.svc.provision.Provision/GetScraperStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisionClient) GetAnalyzerStatus(ctx context.Context, in *GetAnalyzerStatusReq, opts ...grpc.CallOption) (*GetAnalyzerStatusRes, error) {
	out := new(GetAnalyzerStatusRes)
	err := c.cc.Invoke(ctx, "/pb.svc.provision.Provision/GetAnalyzerStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisionClient) RemoveScraper(ctx context.Context, in *RemoveScraperReq, opts ...grpc.CallOption) (*RemoveScraperRes, error) {
	out := new(RemoveScraperRes)
	err := c.cc.Invoke(ctx, "/pb.svc.provision.Provision/RemoveScraper", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisionClient) RemoveAnalyzer(ctx context.Context, in *RemoveAnalyzerReq, opts ...grpc.CallOption) (*RemoveAnalyzerRes, error) {
	out := new(RemoveAnalyzerRes)
	err := c.cc.Invoke(ctx, "/pb.svc.provision.Provision/RemoveAnalyzer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *provisionClient) RemoveSimilarity(ctx context.Context, in *RemoveSimilarityReq, opts ...grpc.CallOption) (*RemoveSimilarityRes, error) {
	out := new(RemoveSimilarityRes)
	err := c.cc.Invoke(ctx, "/pb.svc.provision.Provision/RemoveSimilarity", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProvisionServer is the server API for Provision service.
// All implementations must embed UnimplementedProvisionServer
// for forward compatibility
type ProvisionServer interface {
	CreateScraper(context.Context, *CreateScraperReq) (*CreateScraperRes, error)
	CreateAnalyzer(context.Context, *CreateAnalyzerReq) (*CreateAnalyzerRes, error)
	CreateSimilarity(context.Context, *CreateSimilarityReq) (*CreateSimilarityRes, error)
	GetScraperStatus(context.Context, *GetScraperStatusReq) (*GetScraperStatusRes, error)
	GetAnalyzerStatus(context.Context, *GetAnalyzerStatusReq) (*GetAnalyzerStatusRes, error)
	RemoveScraper(context.Context, *RemoveScraperReq) (*RemoveScraperRes, error)
	RemoveAnalyzer(context.Context, *RemoveAnalyzerReq) (*RemoveAnalyzerRes, error)
	RemoveSimilarity(context.Context, *RemoveSimilarityReq) (*RemoveSimilarityRes, error)
	mustEmbedUnimplementedProvisionServer()
}

// UnimplementedProvisionServer must be embedded to have forward compatible implementations.
type UnimplementedProvisionServer struct {
}

func (UnimplementedProvisionServer) CreateScraper(context.Context, *CreateScraperReq) (*CreateScraperRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateScraper not implemented")
}
func (UnimplementedProvisionServer) CreateAnalyzer(context.Context, *CreateAnalyzerReq) (*CreateAnalyzerRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAnalyzer not implemented")
}
func (UnimplementedProvisionServer) CreateSimilarity(context.Context, *CreateSimilarityReq) (*CreateSimilarityRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSimilarity not implemented")
}
func (UnimplementedProvisionServer) GetScraperStatus(context.Context, *GetScraperStatusReq) (*GetScraperStatusRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetScraperStatus not implemented")
}
func (UnimplementedProvisionServer) GetAnalyzerStatus(context.Context, *GetAnalyzerStatusReq) (*GetAnalyzerStatusRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAnalyzerStatus not implemented")
}
func (UnimplementedProvisionServer) RemoveScraper(context.Context, *RemoveScraperReq) (*RemoveScraperRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveScraper not implemented")
}
func (UnimplementedProvisionServer) RemoveAnalyzer(context.Context, *RemoveAnalyzerReq) (*RemoveAnalyzerRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveAnalyzer not implemented")
}
func (UnimplementedProvisionServer) RemoveSimilarity(context.Context, *RemoveSimilarityReq) (*RemoveSimilarityRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveSimilarity not implemented")
}
func (UnimplementedProvisionServer) mustEmbedUnimplementedProvisionServer() {}

// UnsafeProvisionServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ProvisionServer will
// result in compilation errors.
type UnsafeProvisionServer interface {
	mustEmbedUnimplementedProvisionServer()
}

func RegisterProvisionServer(s grpc.ServiceRegistrar, srv ProvisionServer) {
	s.RegisterService(&Provision_ServiceDesc, srv)
}

func _Provision_CreateScraper_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateScraperReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisionServer).CreateScraper(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.provision.Provision/CreateScraper",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisionServer).CreateScraper(ctx, req.(*CreateScraperReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Provision_CreateAnalyzer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateAnalyzerReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisionServer).CreateAnalyzer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.provision.Provision/CreateAnalyzer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisionServer).CreateAnalyzer(ctx, req.(*CreateAnalyzerReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Provision_CreateSimilarity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateSimilarityReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisionServer).CreateSimilarity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.provision.Provision/CreateSimilarity",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisionServer).CreateSimilarity(ctx, req.(*CreateSimilarityReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Provision_GetScraperStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetScraperStatusReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisionServer).GetScraperStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.provision.Provision/GetScraperStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisionServer).GetScraperStatus(ctx, req.(*GetScraperStatusReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Provision_GetAnalyzerStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAnalyzerStatusReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisionServer).GetAnalyzerStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.provision.Provision/GetAnalyzerStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisionServer).GetAnalyzerStatus(ctx, req.(*GetAnalyzerStatusReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Provision_RemoveScraper_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveScraperReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisionServer).RemoveScraper(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.provision.Provision/RemoveScraper",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisionServer).RemoveScraper(ctx, req.(*RemoveScraperReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Provision_RemoveAnalyzer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveAnalyzerReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisionServer).RemoveAnalyzer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.provision.Provision/RemoveAnalyzer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisionServer).RemoveAnalyzer(ctx, req.(*RemoveAnalyzerReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Provision_RemoveSimilarity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveSimilarityReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProvisionServer).RemoveSimilarity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.provision.Provision/RemoveSimilarity",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProvisionServer).RemoveSimilarity(ctx, req.(*RemoveSimilarityReq))
	}
	return interceptor(ctx, in, info, handler)
}

// Provision_ServiceDesc is the grpc.ServiceDesc for Provision service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Provision_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.svc.provision.Provision",
	HandlerType: (*ProvisionServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateScraper",
			Handler:    _Provision_CreateScraper_Handler,
		},
		{
			MethodName: "CreateAnalyzer",
			Handler:    _Provision_CreateAnalyzer_Handler,
		},
		{
			MethodName: "CreateSimilarity",
			Handler:    _Provision_CreateSimilarity_Handler,
		},
		{
			MethodName: "GetScraperStatus",
			Handler:    _Provision_GetScraperStatus_Handler,
		},
		{
			MethodName: "GetAnalyzerStatus",
			Handler:    _Provision_GetAnalyzerStatus_Handler,
		},
		{
			MethodName: "RemoveScraper",
			Handler:    _Provision_RemoveScraper_Handler,
		},
		{
			MethodName: "RemoveAnalyzer",
			Handler:    _Provision_RemoveAnalyzer_Handler,
		},
		{
			MethodName: "RemoveSimilarity",
			Handler:    _Provision_RemoveSimilarity_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pb/svc/provision/provision.proto",
}
