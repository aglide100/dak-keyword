# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pb/unit/article/article.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1dpb/unit/article/article.proto\x12\x0fpb.unit.article\"\xbf\x02\n\x07\x41rticle\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0e\n\x06\x61uthor\x18\x02 \x01(\t\x12\x0f\n\x07keyword\x18\x03 \x01(\t\x12\x0f\n\x07\x63ontent\x18\x04 \x01(\t\x12\x10\n\x08platform\x18\x05 \x01(\t\x12\x13\n\x0bScore_happy\x18\x06 \x01(\t\x12\x12\n\nScore_fear\x18\x07 \x01(\t\x12\x19\n\x11Score_embarrassed\x18\x08 \x01(\t\x12\x11\n\tScore_sad\x18\t \x01(\t\x12\x12\n\nScore_rage\x18\n \x01(\t\x12\x12\n\nScore_hurt\x18\x0b \x01(\t\x12\x17\n\x0fscore_max_value\x18\x0c \x01(\t\x12\x16\n\x0escore_max_name\x18\r \x01(\t\x12\x11\n\tcreate_at\x18\x0e \x01(\t\x12\x0e\n\x06job_id\x18\x0f \x01(\t\x12\x11\n\tworker_id\x18\x10 \x01(\t\"I\n\x0c\x41rticleCount\x12\x14\n\x0c\x63reateAtTime\x18\x01 \x01(\t\x12\r\n\x05\x63ount\x18\x02 \x01(\t\x12\x14\n\x0cscoreMaxName\x18\x03 \x01(\tB2Z0github.com/aglide100/dak-keyword/pb/unit/articleb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pb.unit.article.article_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z0github.com/aglide100/dak-keyword/pb/unit/article'
  _ARTICLE._serialized_start=51
  _ARTICLE._serialized_end=370
  _ARTICLECOUNT._serialized_start=372
  _ARTICLECOUNT._serialized_end=445
# @@protoc_insertion_point(module_scope)
