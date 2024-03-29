// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.3
// source: pb/svc/manager/job.proto

package job

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

// JobServiceClient is the client API for JobService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type JobServiceClient interface {
	CreateNewJob(ctx context.Context, in *CreateNewJobReq, opts ...grpc.CallOption) (*CreateNewJobRes, error)
	ReRunJob(ctx context.Context, in *ReRunJobReq, opts ...grpc.CallOption) (*ReRunJobRes, error)
	GetJobStatus(ctx context.Context, in *GetJobStatusReq, opts ...grpc.CallOption) (*GetJobStatusRes, error)
	GetJobList(ctx context.Context, in *GetJobListReq, opts ...grpc.CallOption) (*GetJobListRes, error)
	GetJobIsReRun(ctx context.Context, in *GetJobIsReRunReq, opts ...grpc.CallOption) (*GetJobIsReRunRes, error)
	StopJob(ctx context.Context, in *StopJobReq, opts ...grpc.CallOption) (*StopJobRes, error)
	UpdateJobStatus(ctx context.Context, in *UpdateJobStatusReq, opts ...grpc.CallOption) (*UpdateJobStatusRes, error)
}

type jobServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewJobServiceClient(cc grpc.ClientConnInterface) JobServiceClient {
	return &jobServiceClient{cc}
}

func (c *jobServiceClient) CreateNewJob(ctx context.Context, in *CreateNewJobReq, opts ...grpc.CallOption) (*CreateNewJobRes, error) {
	out := new(CreateNewJobRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.job.JobService/CreateNewJob", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jobServiceClient) ReRunJob(ctx context.Context, in *ReRunJobReq, opts ...grpc.CallOption) (*ReRunJobRes, error) {
	out := new(ReRunJobRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.job.JobService/ReRunJob", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jobServiceClient) GetJobStatus(ctx context.Context, in *GetJobStatusReq, opts ...grpc.CallOption) (*GetJobStatusRes, error) {
	out := new(GetJobStatusRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.job.JobService/GetJobStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jobServiceClient) GetJobList(ctx context.Context, in *GetJobListReq, opts ...grpc.CallOption) (*GetJobListRes, error) {
	out := new(GetJobListRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.job.JobService/GetJobList", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jobServiceClient) GetJobIsReRun(ctx context.Context, in *GetJobIsReRunReq, opts ...grpc.CallOption) (*GetJobIsReRunRes, error) {
	out := new(GetJobIsReRunRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.job.JobService/GetJobIsReRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jobServiceClient) StopJob(ctx context.Context, in *StopJobReq, opts ...grpc.CallOption) (*StopJobRes, error) {
	out := new(StopJobRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.job.JobService/StopJob", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *jobServiceClient) UpdateJobStatus(ctx context.Context, in *UpdateJobStatusReq, opts ...grpc.CallOption) (*UpdateJobStatusRes, error) {
	out := new(UpdateJobStatusRes)
	err := c.cc.Invoke(ctx, "/pb.svc.manager.job.JobService/UpdateJobStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// JobServiceServer is the server API for JobService service.
// All implementations must embed UnimplementedJobServiceServer
// for forward compatibility
type JobServiceServer interface {
	CreateNewJob(context.Context, *CreateNewJobReq) (*CreateNewJobRes, error)
	ReRunJob(context.Context, *ReRunJobReq) (*ReRunJobRes, error)
	GetJobStatus(context.Context, *GetJobStatusReq) (*GetJobStatusRes, error)
	GetJobList(context.Context, *GetJobListReq) (*GetJobListRes, error)
	GetJobIsReRun(context.Context, *GetJobIsReRunReq) (*GetJobIsReRunRes, error)
	StopJob(context.Context, *StopJobReq) (*StopJobRes, error)
	UpdateJobStatus(context.Context, *UpdateJobStatusReq) (*UpdateJobStatusRes, error)
	mustEmbedUnimplementedJobServiceServer()
}

// UnimplementedJobServiceServer must be embedded to have forward compatible implementations.
type UnimplementedJobServiceServer struct {
}

func (UnimplementedJobServiceServer) CreateNewJob(context.Context, *CreateNewJobReq) (*CreateNewJobRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateNewJob not implemented")
}
func (UnimplementedJobServiceServer) ReRunJob(context.Context, *ReRunJobReq) (*ReRunJobRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReRunJob not implemented")
}
func (UnimplementedJobServiceServer) GetJobStatus(context.Context, *GetJobStatusReq) (*GetJobStatusRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetJobStatus not implemented")
}
func (UnimplementedJobServiceServer) GetJobList(context.Context, *GetJobListReq) (*GetJobListRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetJobList not implemented")
}
func (UnimplementedJobServiceServer) GetJobIsReRun(context.Context, *GetJobIsReRunReq) (*GetJobIsReRunRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetJobIsReRun not implemented")
}
func (UnimplementedJobServiceServer) StopJob(context.Context, *StopJobReq) (*StopJobRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method StopJob not implemented")
}
func (UnimplementedJobServiceServer) UpdateJobStatus(context.Context, *UpdateJobStatusReq) (*UpdateJobStatusRes, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateJobStatus not implemented")
}
func (UnimplementedJobServiceServer) mustEmbedUnimplementedJobServiceServer() {}

// UnsafeJobServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to JobServiceServer will
// result in compilation errors.
type UnsafeJobServiceServer interface {
	mustEmbedUnimplementedJobServiceServer()
}

func RegisterJobServiceServer(s grpc.ServiceRegistrar, srv JobServiceServer) {
	s.RegisterService(&JobService_ServiceDesc, srv)
}

func _JobService_CreateNewJob_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateNewJobReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JobServiceServer).CreateNewJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.job.JobService/CreateNewJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JobServiceServer).CreateNewJob(ctx, req.(*CreateNewJobReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _JobService_ReRunJob_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReRunJobReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JobServiceServer).ReRunJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.job.JobService/ReRunJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JobServiceServer).ReRunJob(ctx, req.(*ReRunJobReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _JobService_GetJobStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetJobStatusReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JobServiceServer).GetJobStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.job.JobService/GetJobStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JobServiceServer).GetJobStatus(ctx, req.(*GetJobStatusReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _JobService_GetJobList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetJobListReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JobServiceServer).GetJobList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.job.JobService/GetJobList",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JobServiceServer).GetJobList(ctx, req.(*GetJobListReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _JobService_GetJobIsReRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetJobIsReRunReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JobServiceServer).GetJobIsReRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.job.JobService/GetJobIsReRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JobServiceServer).GetJobIsReRun(ctx, req.(*GetJobIsReRunReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _JobService_StopJob_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StopJobReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JobServiceServer).StopJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.job.JobService/StopJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JobServiceServer).StopJob(ctx, req.(*StopJobReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _JobService_UpdateJobStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateJobStatusReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(JobServiceServer).UpdateJobStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pb.svc.manager.job.JobService/UpdateJobStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(JobServiceServer).UpdateJobStatus(ctx, req.(*UpdateJobStatusReq))
	}
	return interceptor(ctx, in, info, handler)
}

// JobService_ServiceDesc is the grpc.ServiceDesc for JobService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var JobService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.svc.manager.job.JobService",
	HandlerType: (*JobServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateNewJob",
			Handler:    _JobService_CreateNewJob_Handler,
		},
		{
			MethodName: "ReRunJob",
			Handler:    _JobService_ReRunJob_Handler,
		},
		{
			MethodName: "GetJobStatus",
			Handler:    _JobService_GetJobStatus_Handler,
		},
		{
			MethodName: "GetJobList",
			Handler:    _JobService_GetJobList_Handler,
		},
		{
			MethodName: "GetJobIsReRun",
			Handler:    _JobService_GetJobIsReRun_Handler,
		},
		{
			MethodName: "StopJob",
			Handler:    _JobService_StopJob_Handler,
		},
		{
			MethodName: "UpdateJobStatus",
			Handler:    _JobService_UpdateJobStatus_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "pb/svc/manager/job.proto",
}
