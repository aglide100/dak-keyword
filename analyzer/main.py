import os
import grpc
import psycopg2
import Database
import pandas as pd
import numpy as np

import manager_pb2
import manager_pb2_grpc

host = "localhost"
dbname = "keyword"
user = "table_admin"
password = "HelloWorld"
port = "8432"
workerId = "test"

# host = os.environ['DB_ADDR']
# dbname = os.environ['DB_NAME']
# user = os.environ['DB_USER']
# password = os.environ['DB_PASSWORD']
# port = os.environ['DB_PORT']
# workerId = os.environ['WORKER_ID']

# def sendDoneMSG():
#     with grpc.insecure_channel("keyword_apid:50010") as channel:
#     # with grpc.insecure_channel("localhost:50010") as channel:

#         client = manager_pb2_grpc.ManagerStub(channel)
#         response = client.DoneAnalyzer(manager_pb2.DoneAnalyzerReq(id=workerId))
#         print(response)

try:
    db = Database.Databases(host, dbname, user, password, port)
except psycopg2.DatabaseError as db_err:
    print(db_err)

if __name__ == '__main__':
    # (2, 'author', 'keyword', 'contant', 'platform', 'happy', 'fear', 'emb', 'sad', 'rage', 'hurt', 'max_value', 'create_at', 'test', 'test')
    result = Database.CRUD.readTextFromArticleInJob(db, 'Worker_id', workerId)

    score = Analyzer.analyze_word(result[3])
    if score is not None:
        Database.CRUD.updateScore(db, score[0][5], score[0][6], score[0][7], score[0][8], score[0][9], score[0][10], score[2], score[1], result[13], result[0])
    else:
        print("result is None!")
    # print(np.argmax[result[6:11]])
    # for value in result:

    #     
    # sendDoneMSG()