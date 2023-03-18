
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
# from hanspell import spell_checker
from soynlp.normalizer import *
import Calling
if __name__ == '__main__':
    try:
        db = Database.Databases(host, dbname, user, password, port)
        # (2, 'author', 'keyword', 'contant', 'platform', 'happy', 'fear', 'emb', 'sad', 'rage', 'hurt', 'max_value', 'create_at', 'test', 'test')
        rows = Database.CRUD.readTextFromArticleInJob(db, 'Worker_id', workerId)
        
        print("rows",rows)

        Calling.sendStartMSG(workerId)


        for index, row in rows.iterrows():
            # sent = spell_checker.check(row['Content']).checked
            score = analyze_word(repeat_normalize(row['Content'], num_repeats=2))
            # score = analyze_word(repeat_normalize(sent, num_repeats=2))

            if score is not None:
                try:
                    print("Update")
                    Database.CRUD.updateScore(db, score[0][0], score[0][1], score[0][2], score[0][3], score[0][4], score[0][5], score[2], score[1], row['Worker_id'], row['Id'])
                    
                    if index % 3 == 0:
                        msg = "Analyzing... : " + str(index) + " / " + str(len(rows))
                        Calling.sendUpdating(workerId, msg)
                    
                except Exception as err:
                    print(err)
                    Calling.sendErrMSG(workerId, err)

            else:
                print("result is None!")

        Calling.sendDoneMSG(workerId)

    except psycopg2.DatabaseError as db_err:
        print(db_err)
        Calling.sendErrMSG(workerId, db_err)
    