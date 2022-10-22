# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import manager_pb2 as manager__pb2


class ManagerStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.CreateNewJob = channel.unary_unary(
                '/pb.svc.manager.Manager/CreateNewJob',
                request_serializer=manager__pb2.CreateNewJobReq.SerializeToString,
                response_deserializer=manager__pb2.CreateNewJobRes.FromString,
                )
        self.GetJobStatus = channel.unary_unary(
                '/pb.svc.manager.Manager/GetJobStatus',
                request_serializer=manager__pb2.GetJobStatusReq.SerializeToString,
                response_deserializer=manager__pb2.GetJobStatusRes.FromString,
                )
        self.UpdateJobStatus = channel.unary_unary(
                '/pb.svc.manager.Manager/UpdateJobStatus',
                request_serializer=manager__pb2.UpdateJobStatusReq.SerializeToString,
                response_deserializer=manager__pb2.UpdateJobStatusRes.FromString,
                )
        self.DoneScraper = channel.unary_unary(
                '/pb.svc.manager.Manager/DoneScraper',
                request_serializer=manager__pb2.DoneScraperReq.SerializeToString,
                response_deserializer=manager__pb2.DoneScraperRes.FromString,
                )
        self.DoneAnalyzer = channel.unary_unary(
                '/pb.svc.manager.Manager/DoneAnalyzer',
                request_serializer=manager__pb2.DoneAnalyzerReq.SerializeToString,
                response_deserializer=manager__pb2.DoneAnalyzerRes.FromString,
                )
        self.StopJob = channel.unary_unary(
                '/pb.svc.manager.Manager/StopJob',
                request_serializer=manager__pb2.StopJobReq.SerializeToString,
                response_deserializer=manager__pb2.StopJobRes.FromString,
                )


class ManagerServicer(object):
    """Missing associated documentation comment in .proto file."""

    def CreateNewJob(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetJobStatus(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateJobStatus(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DoneScraper(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DoneAnalyzer(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def StopJob(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ManagerServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'CreateNewJob': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateNewJob,
                    request_deserializer=manager__pb2.CreateNewJobReq.FromString,
                    response_serializer=manager__pb2.CreateNewJobRes.SerializeToString,
            ),
            'GetJobStatus': grpc.unary_unary_rpc_method_handler(
                    servicer.GetJobStatus,
                    request_deserializer=manager__pb2.GetJobStatusReq.FromString,
                    response_serializer=manager__pb2.GetJobStatusRes.SerializeToString,
            ),
            'UpdateJobStatus': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateJobStatus,
                    request_deserializer=manager__pb2.UpdateJobStatusReq.FromString,
                    response_serializer=manager__pb2.UpdateJobStatusRes.SerializeToString,
            ),
            'DoneScraper': grpc.unary_unary_rpc_method_handler(
                    servicer.DoneScraper,
                    request_deserializer=manager__pb2.DoneScraperReq.FromString,
                    response_serializer=manager__pb2.DoneScraperRes.SerializeToString,
            ),
            'DoneAnalyzer': grpc.unary_unary_rpc_method_handler(
                    servicer.DoneAnalyzer,
                    request_deserializer=manager__pb2.DoneAnalyzerReq.FromString,
                    response_serializer=manager__pb2.DoneAnalyzerRes.SerializeToString,
            ),
            'StopJob': grpc.unary_unary_rpc_method_handler(
                    servicer.StopJob,
                    request_deserializer=manager__pb2.StopJobReq.FromString,
                    response_serializer=manager__pb2.StopJobRes.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'pb.svc.manager.Manager', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class Manager(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def CreateNewJob(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.svc.manager.Manager/CreateNewJob',
            manager__pb2.CreateNewJobReq.SerializeToString,
            manager__pb2.CreateNewJobRes.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetJobStatus(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.svc.manager.Manager/GetJobStatus',
            manager__pb2.GetJobStatusReq.SerializeToString,
            manager__pb2.GetJobStatusRes.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateJobStatus(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.svc.manager.Manager/UpdateJobStatus',
            manager__pb2.UpdateJobStatusReq.SerializeToString,
            manager__pb2.UpdateJobStatusRes.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DoneScraper(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.svc.manager.Manager/DoneScraper',
            manager__pb2.DoneScraperReq.SerializeToString,
            manager__pb2.DoneScraperRes.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DoneAnalyzer(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.svc.manager.Manager/DoneAnalyzer',
            manager__pb2.DoneAnalyzerReq.SerializeToString,
            manager__pb2.DoneAnalyzerRes.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def StopJob(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/pb.svc.manager.Manager/StopJob',
            manager__pb2.StopJobReq.SerializeToString,
            manager__pb2.StopJobRes.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
