# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pb/svc/manager/analyzer.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1dpb/svc/manager/analyzer.proto\x12\x17pb.svc.manager.analyzer\"6\n\x13WhenDoneAnalyzerReq\x12\x10\n\x08workerId\x18\x01 \x01(\t\x12\r\n\x05jobId\x18\x02 \x01(\t\"%\n\x13WhenDoneAnalyzerRes\x12\x0e\n\x06result\x18\x01 \x01(\t\"\"\n\x14WhenStartAnalyzerReq\x12\n\n\x02id\x18\x01 \x01(\t\"&\n\x14WhenStartAnalyzerRes\x12\x0e\n\x06result\x18\x01 \x01(\t\"3\n\x18WhenAnalyzerHavingErrReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0b\n\x03msg\x18\x02 \x01(\t\"\x1a\n\x18WhenAnalyzerHavingErrRes\"3\n\x18WhenAnalyzerHavingMsgReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0b\n\x03msg\x18\x02 \x01(\t\"\x1a\n\x18WhenAnalyzerHavingMsgRes2\xf2\x03\n\x0f\x41nalyzerService\x12q\n\x11WhenStartAnalyzer\x12-.pb.svc.manager.analyzer.WhenStartAnalyzerReq\x1a-.pb.svc.manager.analyzer.WhenStartAnalyzerRes\x12n\n\x10WhenDoneAnalyzer\x12,.pb.svc.manager.analyzer.WhenDoneAnalyzerReq\x1a,.pb.svc.manager.analyzer.WhenDoneAnalyzerRes\x12}\n\x15WhenAnalyzerHavingErr\x12\x31.pb.svc.manager.analyzer.WhenAnalyzerHavingErrReq\x1a\x31.pb.svc.manager.analyzer.WhenAnalyzerHavingErrRes\x12}\n\x15WhenAnalyzerHavingMsg\x12\x31.pb.svc.manager.analyzer.WhenAnalyzerHavingMsgReq\x1a\x31.pb.svc.manager.analyzer.WhenAnalyzerHavingMsgResB:Z8github.com/aglide100/dak-keyword/pb/svc/manager/analyzerb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pb.svc.manager.analyzer_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z8github.com/aglide100/dak-keyword/pb/svc/manager/analyzer'
  _WHENDONEANALYZERREQ._serialized_start=58
  _WHENDONEANALYZERREQ._serialized_end=112
  _WHENDONEANALYZERRES._serialized_start=114
  _WHENDONEANALYZERRES._serialized_end=151
  _WHENSTARTANALYZERREQ._serialized_start=153
  _WHENSTARTANALYZERREQ._serialized_end=187
  _WHENSTARTANALYZERRES._serialized_start=189
  _WHENSTARTANALYZERRES._serialized_end=227
  _WHENANALYZERHAVINGERRREQ._serialized_start=229
  _WHENANALYZERHAVINGERRREQ._serialized_end=280
  _WHENANALYZERHAVINGERRRES._serialized_start=282
  _WHENANALYZERHAVINGERRRES._serialized_end=308
  _WHENANALYZERHAVINGMSGREQ._serialized_start=310
  _WHENANALYZERHAVINGMSGREQ._serialized_end=361
  _WHENANALYZERHAVINGMSGRES._serialized_start=363
  _WHENANALYZERHAVINGMSGRES._serialized_end=389
  _ANALYZERSERVICE._serialized_start=392
  _ANALYZERSERVICE._serialized_end=890
# @@protoc_insertion_point(module_scope)
