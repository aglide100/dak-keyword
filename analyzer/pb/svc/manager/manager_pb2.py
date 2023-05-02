# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pb/svc/manager/manager.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pb.unit.job import job_pb2 as pb_dot_unit_dot_job_dot_job__pb2
from pb.unit.worker import worker_pb2 as pb_dot_unit_dot_worker_dot_worker__pb2
from pb.unit.article import article_pb2 as pb_dot_unit_dot_article_dot_article__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1cpb/svc/manager/manager.proto\x12\x0epb.svc.manager\x1a\x15pb/unit/job/job.proto\x1a\x1bpb/unit/worker/worker.proto\x1a\x1dpb/unit/article/article.proto\"\x12\n\x10GetSimilarityReq\"\x12\n\x10GetSimilarityRes\"\x11\n\x0fGetVocabListReq\"\x11\n\x0fGetVocabListRes\"\x1e\n\x10GetJobIsReRunReq\x12\n\n\x02id\x18\x01 \x01(\t\"\"\n\x10GetJobIsReRunRes\x12\x0e\n\x06result\x18\x02 \x01(\x08\"%\n\x17GetArticleCountByDayReq\x12\n\n\x02id\x18\x01 \x01(\t\"N\n\x17GetArticleCountByDayRes\x12\x33\n\x0c\x41rticleCount\x18\x01 \x03(\x0b\x32\x1d.pb.unit.article.ArticleCount\"&\n\x18GetArticleCountByHourReq\x12\n\n\x02id\x18\x01 \x01(\t\"O\n\x18GetArticleCountByHourRes\x12\x33\n\x0c\x41rticleCount\x18\x01 \x03(\x0b\x32\x1d.pb.unit.article.ArticleCount\"E\n\x0f\x43reateNewJobReq\x12\x0f\n\x07keyword\x18\x01 \x01(\t\x12\r\n\x05owner\x18\x02 \x01(\t\x12\x12\n\naccessCode\x18\x03 \x01(\t\"\x1e\n\x0f\x43reateNewJobRes\x12\x0b\n\x03msg\x18\x01 \x01(\t\"?\n\x0bReRunJobReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\x10\n\x08schedule\x18\x02 \x01(\x08\x12\x12\n\naccessCode\x18\x03 \x01(\t\"\x1a\n\x0bReRunJobRes\x12\x0b\n\x03msg\x18\x01 \x01(\t\",\n\x0fGetJobStatusReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05owner\x18\x02 \x01(\t\"!\n\x0fGetJobStatusRes\x12\x0e\n\x06status\x18\x01 \x01(\t\"\x18\n\nStopJobReq\x12\n\n\x02id\x18\x01 \x01(\t\"\x1c\n\nStopJobRes\x12\x0e\n\x06result\x18\x01 \x01(\t\" \n\x12WhenDoneScraperReq\x12\n\n\x02id\x18\x01 \x01(\t\"$\n\x12WhenDoneScraperRes\x12\x0e\n\x06result\x18\x01 \x01(\t\"!\n\x13WhenDoneAnalyzerReq\x12\n\n\x02id\x18\x01 \x01(\t\"%\n\x13WhenDoneAnalyzerRes\x12\x0e\n\x06result\x18\x01 \x01(\t\"0\n\x12UpdateJobStatusReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0e\n\x06status\x18\x02 \x01(\t\"$\n\x12UpdateJobStatusRes\x12\x0e\n\x06result\x18\x01 \x01(\t\"\x0f\n\rGetJobListReq\".\n\rGetJobListRes\x12\x1d\n\x03Job\x18\x01 \x03(\x0b\x32\x10.pb.unit.job.Job\"\x1e\n\x10GetWorkerListReq\x12\n\n\x02id\x18\x01 \x01(\t\":\n\x10GetWorkerListRes\x12&\n\x06Worker\x18\x01 \x03(\x0b\x32\x16.pb.unit.worker.Worker\"-\n\x11GetArticleListReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04page\x18\x02 \x01(\x05\">\n\x11GetArticleListRes\x12)\n\x07\x41rticle\x18\x01 \x03(\x0b\x32\x18.pb.unit.article.Article\"\x1f\n\x11GetArticleInfoReq\x12\n\n\x02id\x18\x01 \x01(\t\":\n\x11GetArticleInfoRes\x12\x12\n\ntotalCount\x18\x01 \x01(\x05\x12\x11\n\tpageCount\x18\x02 \x01(\x05\"!\n\x13WhenStartScraperReq\x12\n\n\x02id\x18\x01 \x01(\t\"%\n\x13WhenStartScraperRes\x12\x0e\n\x06result\x18\x01 \x01(\t\"\"\n\x14WhenStartAnalyzerReq\x12\n\n\x02id\x18\x01 \x01(\t\"&\n\x14WhenStartAnalyzerRes\x12\x0e\n\x06result\x18\x01 \x01(\t\"2\n\x17WhenScraperHavingErrReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0b\n\x03msg\x18\x02 \x01(\t\"\x19\n\x17WhenScraperHavingErrRes\"3\n\x18WhenAnalyzerHavingErrReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0b\n\x03msg\x18\x02 \x01(\t\"\x1a\n\x18WhenAnalyzerHavingErrRes\"0\n\x15UpdateWorkerStatusReq\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0b\n\x03msg\x18\x02 \x01(\t\"\x17\n\x15UpdateWorkerStatusRes2\xe8\x0e\n\x07Manager\x12P\n\x0c\x43reateNewJob\x12\x1f.pb.svc.manager.CreateNewJobReq\x1a\x1f.pb.svc.manager.CreateNewJobRes\x12\x44\n\x08ReRunJob\x12\x1b.pb.svc.manager.ReRunJobReq\x1a\x1b.pb.svc.manager.ReRunJobRes\x12P\n\x0cGetJobStatus\x12\x1f.pb.svc.manager.GetJobStatusReq\x1a\x1f.pb.svc.manager.GetJobStatusRes\x12J\n\nGetJobList\x12\x1d.pb.svc.manager.GetJobListReq\x1a\x1d.pb.svc.manager.GetJobListRes\x12S\n\rGetJobIsReRun\x12 .pb.svc.manager.GetJobIsReRunReq\x1a .pb.svc.manager.GetJobIsReRunRes\x12S\n\rGetWorkerList\x12 .pb.svc.manager.GetWorkerListReq\x1a .pb.svc.manager.GetWorkerListRes\x12V\n\x0eGetArticleInfo\x12!.pb.svc.manager.GetArticleInfoReq\x1a!.pb.svc.manager.GetArticleInfoRes\x12V\n\x0eGetArticleList\x12!.pb.svc.manager.GetArticleListReq\x1a!.pb.svc.manager.GetArticleListRes\x12k\n\x15GetArticleCountByHour\x12(.pb.svc.manager.GetArticleCountByHourReq\x1a(.pb.svc.manager.GetArticleCountByHourRes\x12h\n\x14GetArticleCountByDay\x12\'.pb.svc.manager.GetArticleCountByDayReq\x1a\'.pb.svc.manager.GetArticleCountByDayRes\x12P\n\x0cGetVocabList\x12\x1f.pb.svc.manager.GetVocabListReq\x1a\x1f.pb.svc.manager.GetVocabListRes\x12S\n\rGetSimilarity\x12 .pb.svc.manager.GetSimilarityReq\x1a .pb.svc.manager.GetSimilarityRes\x12\x62\n\x12UpdateWorkerStatus\x12%.pb.svc.manager.UpdateWorkerStatusReq\x1a%.pb.svc.manager.UpdateWorkerStatusRes\x12Y\n\x0fUpdateJobStatus\x12\".pb.svc.manager.UpdateJobStatusReq\x1a\".pb.svc.manager.UpdateJobStatusRes\x12\\\n\x10WhenStartScraper\x12#.pb.svc.manager.WhenStartScraperReq\x1a#.pb.svc.manager.WhenStartScraperRes\x12Y\n\x0fWhenDoneScraper\x12\".pb.svc.manager.WhenDoneScraperReq\x1a\".pb.svc.manager.WhenDoneScraperRes\x12_\n\x11WhenStartAnalyzer\x12$.pb.svc.manager.WhenStartAnalyzerReq\x1a$.pb.svc.manager.WhenStartAnalyzerRes\x12\\\n\x10WhenDoneAnalyzer\x12#.pb.svc.manager.WhenDoneAnalyzerReq\x1a#.pb.svc.manager.WhenDoneAnalyzerRes\x12h\n\x14WhenScraperHavingErr\x12\'.pb.svc.manager.WhenScraperHavingErrReq\x1a\'.pb.svc.manager.WhenScraperHavingErrRes\x12k\n\x15WhenAnalyzerHavingErr\x12(.pb.svc.manager.WhenAnalyzerHavingErrReq\x1a(.pb.svc.manager.WhenAnalyzerHavingErrRes\x12\x41\n\x07StopJob\x12\x1a.pb.svc.manager.StopJobReq\x1a\x1a.pb.svc.manager.StopJobResB1Z/github.com/aglide100/dak-keyword/pb/svc/managerb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'pb.svc.manager.manager_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'Z/github.com/aglide100/dak-keyword/pb/svc/manager'
  _GETSIMILARITYREQ._serialized_start=131
  _GETSIMILARITYREQ._serialized_end=149
  _GETSIMILARITYRES._serialized_start=151
  _GETSIMILARITYRES._serialized_end=169
  _GETVOCABLISTREQ._serialized_start=171
  _GETVOCABLISTREQ._serialized_end=188
  _GETVOCABLISTRES._serialized_start=190
  _GETVOCABLISTRES._serialized_end=207
  _GETJOBISRERUNREQ._serialized_start=209
  _GETJOBISRERUNREQ._serialized_end=239
  _GETJOBISRERUNRES._serialized_start=241
  _GETJOBISRERUNRES._serialized_end=275
  _GETARTICLECOUNTBYDAYREQ._serialized_start=277
  _GETARTICLECOUNTBYDAYREQ._serialized_end=314
  _GETARTICLECOUNTBYDAYRES._serialized_start=316
  _GETARTICLECOUNTBYDAYRES._serialized_end=394
  _GETARTICLECOUNTBYHOURREQ._serialized_start=396
  _GETARTICLECOUNTBYHOURREQ._serialized_end=434
  _GETARTICLECOUNTBYHOURRES._serialized_start=436
  _GETARTICLECOUNTBYHOURRES._serialized_end=515
  _CREATENEWJOBREQ._serialized_start=517
  _CREATENEWJOBREQ._serialized_end=586
  _CREATENEWJOBRES._serialized_start=588
  _CREATENEWJOBRES._serialized_end=618
  _RERUNJOBREQ._serialized_start=620
  _RERUNJOBREQ._serialized_end=683
  _RERUNJOBRES._serialized_start=685
  _RERUNJOBRES._serialized_end=711
  _GETJOBSTATUSREQ._serialized_start=713
  _GETJOBSTATUSREQ._serialized_end=757
  _GETJOBSTATUSRES._serialized_start=759
  _GETJOBSTATUSRES._serialized_end=792
  _STOPJOBREQ._serialized_start=794
  _STOPJOBREQ._serialized_end=818
  _STOPJOBRES._serialized_start=820
  _STOPJOBRES._serialized_end=848
  _WHENDONESCRAPERREQ._serialized_start=850
  _WHENDONESCRAPERREQ._serialized_end=882
  _WHENDONESCRAPERRES._serialized_start=884
  _WHENDONESCRAPERRES._serialized_end=920
  _WHENDONEANALYZERREQ._serialized_start=922
  _WHENDONEANALYZERREQ._serialized_end=955
  _WHENDONEANALYZERRES._serialized_start=957
  _WHENDONEANALYZERRES._serialized_end=994
  _UPDATEJOBSTATUSREQ._serialized_start=996
  _UPDATEJOBSTATUSREQ._serialized_end=1044
  _UPDATEJOBSTATUSRES._serialized_start=1046
  _UPDATEJOBSTATUSRES._serialized_end=1082
  _GETJOBLISTREQ._serialized_start=1084
  _GETJOBLISTREQ._serialized_end=1099
  _GETJOBLISTRES._serialized_start=1101
  _GETJOBLISTRES._serialized_end=1147
  _GETWORKERLISTREQ._serialized_start=1149
  _GETWORKERLISTREQ._serialized_end=1179
  _GETWORKERLISTRES._serialized_start=1181
  _GETWORKERLISTRES._serialized_end=1239
  _GETARTICLELISTREQ._serialized_start=1241
  _GETARTICLELISTREQ._serialized_end=1286
  _GETARTICLELISTRES._serialized_start=1288
  _GETARTICLELISTRES._serialized_end=1350
  _GETARTICLEINFOREQ._serialized_start=1352
  _GETARTICLEINFOREQ._serialized_end=1383
  _GETARTICLEINFORES._serialized_start=1385
  _GETARTICLEINFORES._serialized_end=1443
  _WHENSTARTSCRAPERREQ._serialized_start=1445
  _WHENSTARTSCRAPERREQ._serialized_end=1478
  _WHENSTARTSCRAPERRES._serialized_start=1480
  _WHENSTARTSCRAPERRES._serialized_end=1517
  _WHENSTARTANALYZERREQ._serialized_start=1519
  _WHENSTARTANALYZERREQ._serialized_end=1553
  _WHENSTARTANALYZERRES._serialized_start=1555
  _WHENSTARTANALYZERRES._serialized_end=1593
  _WHENSCRAPERHAVINGERRREQ._serialized_start=1595
  _WHENSCRAPERHAVINGERRREQ._serialized_end=1645
  _WHENSCRAPERHAVINGERRRES._serialized_start=1647
  _WHENSCRAPERHAVINGERRRES._serialized_end=1672
  _WHENANALYZERHAVINGERRREQ._serialized_start=1674
  _WHENANALYZERHAVINGERRREQ._serialized_end=1725
  _WHENANALYZERHAVINGERRRES._serialized_start=1727
  _WHENANALYZERHAVINGERRRES._serialized_end=1753
  _UPDATEWORKERSTATUSREQ._serialized_start=1755
  _UPDATEWORKERSTATUSREQ._serialized_end=1803
  _UPDATEWORKERSTATUSRES._serialized_start=1805
  _UPDATEWORKERSTATUSRES._serialized_end=1828
  _MANAGER._serialized_start=1831
  _MANAGER._serialized_end=3727
# @@protoc_insertion_point(module_scope)
