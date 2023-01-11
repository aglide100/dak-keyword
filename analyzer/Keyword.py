
import Calling
# host = "localhost"
# dbname = "keyword"
# user = "table_admin"
# password = "HelloWorld"
# port = "8432"
# workerId = "test"

import os
host = os.environ['DB_ADDR']
dbname = os.environ['DB_NAME']
user = os.environ['DB_USER']
password = os.environ['DB_PASSWORD']
port = os.environ['DB_PORT']
workerId = os.environ['WORKER_ID']

import Database
import psycopg2

if __name__ == '__main__':
    try:
        db = Database.Databases(host, dbname, user, password, port)
        # (2, 'author', 'keyword', 'contant', 'platform', 'happy', 'fear', 'emb', 'sad', 'rage', 'hurt', 'max_value', 'create_at', 'test', 'test')
        result = Database.CRUD.readTextFromArticleInJob(db, 'Worker_id', workerId)
        Calling.sendStartMSG(workerId)

        for value in result:
            val = value[0].replace("(","").replace(")","")
            val = tuple(map(str, val.split(',')))

            # Content
            print(val[0])

            # Article ID
            print(val[1])
            score = analyze_word(val[0])

            
            if score is not None:
                try:
                    Database.CRUD.updateScore(db, score[0][0], score[0][1], score[0][2], score[0][3], score[0][4], score[0][5], score[2], score[1], workerId, val[1])
                except Exception as err:
                    Calling.sendErrMSG(workerId, err)

            else:
                print("result is None!")

        Calling.sendDoneMSG(workerId)


    except psycopg2.DatabaseError as db_err:
        print(db_err)
        Calling.sendErrMSG(workerId, db_err)


    