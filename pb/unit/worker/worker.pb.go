// Code generated by protoc-gen-go. DO NOT EDIT.
// source: pb/unit/worker/worker.proto

package worker

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Worker struct {
	WorrkerId            string   `protobuf:"bytes,1,opt,name=worrker_id,json=worrkerId,proto3" json:"worrker_id,omitempty"`
	Status               string   `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	JobId                string   `protobuf:"bytes,3,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Worker) Reset()         { *m = Worker{} }
func (m *Worker) String() string { return proto.CompactTextString(m) }
func (*Worker) ProtoMessage()    {}
func (*Worker) Descriptor() ([]byte, []int) {
	return fileDescriptor_0fb48b142679b3ad, []int{0}
}

func (m *Worker) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Worker.Unmarshal(m, b)
}
func (m *Worker) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Worker.Marshal(b, m, deterministic)
}
func (m *Worker) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Worker.Merge(m, src)
}
func (m *Worker) XXX_Size() int {
	return xxx_messageInfo_Worker.Size(m)
}
func (m *Worker) XXX_DiscardUnknown() {
	xxx_messageInfo_Worker.DiscardUnknown(m)
}

var xxx_messageInfo_Worker proto.InternalMessageInfo

func (m *Worker) GetWorrkerId() string {
	if m != nil {
		return m.WorrkerId
	}
	return ""
}

func (m *Worker) GetStatus() string {
	if m != nil {
		return m.Status
	}
	return ""
}

func (m *Worker) GetJobId() string {
	if m != nil {
		return m.JobId
	}
	return ""
}

func init() {
	proto.RegisterType((*Worker)(nil), "pb.unit.worker.Worker")
}

func init() { proto.RegisterFile("pb/unit/worker/worker.proto", fileDescriptor_0fb48b142679b3ad) }

var fileDescriptor_0fb48b142679b3ad = []byte{
	// 166 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2e, 0x48, 0xd2, 0x2f,
	0xcd, 0xcb, 0x2c, 0xd1, 0x2f, 0xcf, 0x2f, 0xca, 0x4e, 0x2d, 0x82, 0x52, 0x7a, 0x05, 0x45, 0xf9,
	0x25, 0xf9, 0x42, 0x7c, 0x05, 0x49, 0x7a, 0x20, 0x49, 0x3d, 0x88, 0xa8, 0x52, 0x18, 0x17, 0x5b,
	0x38, 0x98, 0x25, 0x24, 0xcb, 0xc5, 0x55, 0x9e, 0x5f, 0x04, 0x62, 0xc6, 0x67, 0xa6, 0x48, 0x30,
	0x2a, 0x30, 0x6a, 0x70, 0x06, 0x71, 0x42, 0x45, 0x3c, 0x53, 0x84, 0xc4, 0xb8, 0xd8, 0x8a, 0x4b,
	0x12, 0x4b, 0x4a, 0x8b, 0x25, 0x98, 0xc0, 0x52, 0x50, 0x9e, 0x90, 0x28, 0x17, 0x5b, 0x56, 0x7e,
	0x12, 0x48, 0x0b, 0x33, 0x58, 0x9c, 0x35, 0x2b, 0x3f, 0xc9, 0x33, 0xc5, 0xc9, 0x30, 0x4a, 0x3f,
	0x3d, 0xb3, 0x24, 0xa3, 0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x3f, 0x31, 0x3d, 0x27, 0x33, 0x25,
	0xd5, 0xd0, 0xc0, 0x40, 0x3f, 0x25, 0x31, 0x5b, 0x37, 0x3b, 0xb5, 0xb2, 0x3c, 0xbf, 0x28, 0x45,
	0x1f, 0xd5, 0x9d, 0x49, 0x6c, 0x60, 0x17, 0x1a, 0x03, 0x02, 0x00, 0x00, 0xff, 0xff, 0x5f, 0x7f,
	0x48, 0x40, 0xc0, 0x00, 0x00, 0x00,
}
