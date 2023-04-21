import grpc
import pb.svc.manager.manager_pb2 as manager_pb2
import pb.svc.manager.manager_pb2_grpc as manager_pb2_grpc
import time
import os
addr = "keyword_apid:50010"

MAX_NUM_RETRIES = 5

def sendStartMSG(workerId):
    with grpc.insecure_channel(addr) as channel:
        client = manager_pb2_grpc.ManagerStub(channel)

        retry_count = 0
        while True:
            if retry_count >= MAX_NUM_RETRIES:
                print("Max retries reached, exiting...")
                os.exit(1)
            
            retry_count += 1
            try:
                response = client.WhenStartAnalyzer(manager_pb2.WhenStartAnalyzerReq(id=workerId))
                print(response)
                break
            except grpc.RpcError as e:
                if e.code() == grpc.StatusCode.UNAVAILABLE:
                    print("Unavailable, Retrying in 5 seconds...")
                    time.sleep(5)
                else:
                    raise e

def sendDoneMSG(workerId):
    with grpc.insecure_channel(addr) as channel:
        client = manager_pb2_grpc.ManagerStub(channel)

        retry_count = 0
        while True:
            if retry_count >= MAX_NUM_RETRIES:
                print("Max retries reached, exiting...")
                os.exit(1)
            
            retry_count += 1
            try:
                response = client.WhenDoneAnalyzer(manager_pb2.WhenDoneAnalyzerReq(id=workerId))
                print(response)
                break
            except grpc.RpcError as e:
                if e.code() == grpc.StatusCode.UNAVAILABLE:
                    print("Unavailable, Retrying in 5 seconds...")
                    time.sleep(5)
                else:
                    raise e

def sendErrMSG(workerId, errMSG):
    with grpc.insecure_channel(addr) as channel:
        client = manager_pb2_grpc.ManagerStub(channel)

        retry_count = 0
        while True:
            if retry_count >= MAX_NUM_RETRIES:
                print("Max retries reached, exiting...")
                os.exit(1)
            
            retry_count += 1
            try:
                response = client.WhenAnalyzerHavingErr(manager_pb2.WhenAnalyzerHavingErrReq(id=workerId, msg=errMSG))
                print(response)
                break
            except grpc.RpcError as e:
                if e.code() == grpc.StatusCode.UNAVAILABLE:
                    print("Unavailable, Retrying in 5 seconds...")
                    time.sleep(5)
                else:
                    raise e

def sendUpdating(workerId, msg):
    with grpc.insecure_channel(addr) as channel:
        client = manager_pb2_grpc.ManagerStub(channel)

        retry_count = 0
        while True:
            if retry_count >= MAX_NUM_RETRIES:
                print("Max retries reached, exiting...")
                os.exit(1)
            
            retry_count += 1
            try:
                response = client.UpdateWorkerStatus(manager_pb2.UpdateWorkerStatusReq(id=workerId, msg=msg))
                print(response)
                break
            except grpc.RpcError as e:
                if e.code() == grpc.StatusCode.UNAVAILABLE:
                    print("Unavailable, Retrying in 5 seconds...")
                    time.sleep(5)
                else:
                    raise e