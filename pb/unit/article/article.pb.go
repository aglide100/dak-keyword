// Code generated by protoc-gen-go. DO NOT EDIT.
// source: pb/unit/article/article.proto

package article

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

type Article struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Author               string   `protobuf:"bytes,2,opt,name=author,proto3" json:"author,omitempty"`
	Keyword              string   `protobuf:"bytes,3,opt,name=keyword,proto3" json:"keyword,omitempty"`
	Content              string   `protobuf:"bytes,4,opt,name=content,proto3" json:"content,omitempty"`
	Platform             string   `protobuf:"bytes,5,opt,name=platform,proto3" json:"platform,omitempty"`
	ScorePos             string   `protobuf:"bytes,6,opt,name=score_pos,json=scorePos,proto3" json:"score_pos,omitempty"`
	ScoreNeg             string   `protobuf:"bytes,7,opt,name=score_neg,json=scoreNeg,proto3" json:"score_neg,omitempty"`
	ScoreNeut            string   `protobuf:"bytes,8,opt,name=score_neut,json=scoreNeut,proto3" json:"score_neut,omitempty"`
	ScoreComp            string   `protobuf:"bytes,9,opt,name=score_comp,json=scoreComp,proto3" json:"score_comp,omitempty"`
	ScoreNone            string   `protobuf:"bytes,10,opt,name=score_none,json=scoreNone,proto3" json:"score_none,omitempty"`
	ScoreMaxValue        string   `protobuf:"bytes,11,opt,name=score_max_value,json=scoreMaxValue,proto3" json:"score_max_value,omitempty"`
	ScoreMaxName         string   `protobuf:"bytes,12,opt,name=score_max_name,json=scoreMaxName,proto3" json:"score_max_name,omitempty"`
	JobId                string   `protobuf:"bytes,13,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	WorkerId             string   `protobuf:"bytes,14,opt,name=worker_id,json=workerId,proto3" json:"worker_id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Article) Reset()         { *m = Article{} }
func (m *Article) String() string { return proto.CompactTextString(m) }
func (*Article) ProtoMessage()    {}
func (*Article) Descriptor() ([]byte, []int) {
	return fileDescriptor_4f62e041ae977bf8, []int{0}
}

func (m *Article) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Article.Unmarshal(m, b)
}
func (m *Article) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Article.Marshal(b, m, deterministic)
}
func (m *Article) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Article.Merge(m, src)
}
func (m *Article) XXX_Size() int {
	return xxx_messageInfo_Article.Size(m)
}
func (m *Article) XXX_DiscardUnknown() {
	xxx_messageInfo_Article.DiscardUnknown(m)
}

var xxx_messageInfo_Article proto.InternalMessageInfo

func (m *Article) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Article) GetAuthor() string {
	if m != nil {
		return m.Author
	}
	return ""
}

func (m *Article) GetKeyword() string {
	if m != nil {
		return m.Keyword
	}
	return ""
}

func (m *Article) GetContent() string {
	if m != nil {
		return m.Content
	}
	return ""
}

func (m *Article) GetPlatform() string {
	if m != nil {
		return m.Platform
	}
	return ""
}

func (m *Article) GetScorePos() string {
	if m != nil {
		return m.ScorePos
	}
	return ""
}

func (m *Article) GetScoreNeg() string {
	if m != nil {
		return m.ScoreNeg
	}
	return ""
}

func (m *Article) GetScoreNeut() string {
	if m != nil {
		return m.ScoreNeut
	}
	return ""
}

func (m *Article) GetScoreComp() string {
	if m != nil {
		return m.ScoreComp
	}
	return ""
}

func (m *Article) GetScoreNone() string {
	if m != nil {
		return m.ScoreNone
	}
	return ""
}

func (m *Article) GetScoreMaxValue() string {
	if m != nil {
		return m.ScoreMaxValue
	}
	return ""
}

func (m *Article) GetScoreMaxName() string {
	if m != nil {
		return m.ScoreMaxName
	}
	return ""
}

func (m *Article) GetJobId() string {
	if m != nil {
		return m.JobId
	}
	return ""
}

func (m *Article) GetWorkerId() string {
	if m != nil {
		return m.WorkerId
	}
	return ""
}

func init() {
	proto.RegisterType((*Article)(nil), "pb.unit.article.Article")
}

func init() { proto.RegisterFile("pb/unit/article/article.proto", fileDescriptor_4f62e041ae977bf8) }

var fileDescriptor_4f62e041ae977bf8 = []byte{
	// 324 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0xd1, 0xbf, 0x4e, 0xeb, 0x30,
	0x14, 0x06, 0x70, 0xb5, 0xbd, 0x4d, 0x1b, 0xdf, 0xfe, 0x91, 0x2c, 0xdd, 0xab, 0x23, 0x50, 0x25,
	0x84, 0x10, 0x62, 0x21, 0x29, 0xf0, 0x04, 0xc0, 0xd4, 0x81, 0x0a, 0x31, 0x30, 0xb0, 0x54, 0x4e,
	0x6c, 0x52, 0xb7, 0xb1, 0x8f, 0xe5, 0x3a, 0xb4, 0xbc, 0x0a, 0x4f, 0x8b, 0xe2, 0x24, 0x34, 0x62,
	0x4a, 0xce, 0xf7, 0xfb, 0x3c, 0xd8, 0x87, 0xcc, 0x4c, 0x12, 0x17, 0x5a, 0xba, 0x98, 0x59, 0x27,
	0xd3, 0x5c, 0x34, 0xdf, 0xc8, 0x58, 0x74, 0x48, 0xa7, 0x26, 0x89, 0x4a, 0x8e, 0xea, 0xf8, 0xfc,
	0xab, 0x47, 0x06, 0xf7, 0xd5, 0x3f, 0x9d, 0x90, 0xae, 0xe4, 0xd0, 0x39, 0xeb, 0x5c, 0x85, 0x2f,
	0x5d, 0xc9, 0xe9, 0x7f, 0x12, 0xb0, 0xc2, 0xad, 0xd1, 0x42, 0xd7, 0x67, 0xf5, 0x44, 0x81, 0x0c,
	0xb6, 0xe2, 0x73, 0x8f, 0x96, 0x43, 0xcf, 0x43, 0x33, 0x96, 0x92, 0xa2, 0x76, 0x42, 0x3b, 0xf8,
	0x53, 0x49, 0x3d, 0xd2, 0x13, 0x32, 0x34, 0x39, 0x73, 0xef, 0x68, 0x15, 0xf4, 0x3d, 0xfd, 0xcc,
	0xf4, 0x94, 0x84, 0xbb, 0x14, 0xad, 0x58, 0x19, 0xdc, 0x41, 0x50, 0xa1, 0x0f, 0x9e, 0x71, 0x77,
	0x44, 0x2d, 0x32, 0x18, 0xb4, 0x70, 0x29, 0x32, 0x3a, 0x23, 0xa4, 0xc1, 0xc2, 0xc1, 0xd0, 0x6b,
	0x58, 0x6b, 0xe1, 0x8e, 0x9c, 0xa2, 0x32, 0x10, 0xb6, 0xf8, 0x11, 0x95, 0x69, 0x9d, 0x46, 0x2d,
	0x80, 0xb4, 0x4f, 0xa3, 0x16, 0xf4, 0x92, 0x4c, 0x2b, 0x56, 0xec, 0xb0, 0xfa, 0x60, 0x79, 0x21,
	0xe0, 0xaf, 0xef, 0x8c, 0x7d, 0xfc, 0xc4, 0x0e, 0xaf, 0x65, 0x48, 0x2f, 0xc8, 0xe4, 0xd8, 0xd3,
	0x4c, 0x09, 0x18, 0xf9, 0xda, 0xa8, 0xa9, 0x2d, 0x99, 0x12, 0xf4, 0x1f, 0x09, 0x36, 0x98, 0xac,
	0x24, 0x87, 0xb1, 0xd7, 0xfe, 0x06, 0x93, 0x05, 0x2f, 0xaf, 0xb7, 0x47, 0xbb, 0x15, 0xb6, 0x94,
	0x49, 0x75, 0xbd, 0x2a, 0x58, 0xf0, 0x87, 0xdb, 0xb7, 0x79, 0x26, 0xdd, 0xba, 0x48, 0xa2, 0x14,
	0x55, 0xcc, 0xb2, 0x5c, 0x72, 0x71, 0x33, 0x9f, 0xc7, 0x9c, 0x6d, 0xaf, 0xeb, 0x27, 0x8f, 0x7f,
	0xed, 0x3b, 0x09, 0xfc, 0xa2, 0xef, 0xbe, 0x03, 0x00, 0x00, 0xff, 0xff, 0xa4, 0xca, 0x24, 0x18,
	0x09, 0x02, 0x00, 0x00,
}
