
import grpc

import pb.svc.manager.manager_pb2 as manager_pb2
import pb.svc.manager.manager_pb2_grpc as manager_pb2_grpc


def sendStartMSG(workerId):
    with grpc.insecure_channel("keyword_apid:50010") as channel:
    # with grpc.insecure_channel("localhost:50010") as channel:

        client = manager_pb2_grpc.ManagerStub(channel)
        response = client.WhenStartAnalyzer(manager_pb2.WhenStartAnalyzerReq(id=workerId))
        print(response)


def sendDoneMSG(workerId):
    with grpc.insecure_channel("keyword_apid:50010") as channel:
    # with grpc.insecure_channel("localhost:50010") as channel:

        client = manager_pb2_grpc.ManagerStub(channel)
        response = client.DoneAnalyzer(manager_pb2.DoneAnalyzerReq(id=workerId))
        print(response)
