import psycopg2

import pandas
class Databases():
    def __init__(self, host, dbname, user, password, port):
        self.db = psycopg2.connect(host=host, dbname=dbname,user=user,password=password,port=port)
        self.cursor = self.db.cursor()

    def __del__(self):
        self.db.close()
        self.cursor.close()

    def execute(self, query, args={}):
        self.cursor.execute(query,args)
        row = self.cursor.fetchall()
        return row


    def commit(self):
        self.cursor.commit()

class CRUD(Databases):
    def insertDB(self, schema, table, colum, data):
        sql = "INSERT INTO {schema}.{table}({colum}) VALUES ('{data}') ;".format(schema=schema,table=table,colum=colum,data=data)
        try:
            self.cursor.execute(sql)
            self.db.commit()
        except Exception as e :
            print(" insert DB err ",e) 
    
    def readDB(self, schema, table, colum):
        sql = "SELECT {colum} FROM {schema}.{table}".format(colum=colum, schema=schema, table=table)
        try:
            self.cursor.execute(sql)
            result = self.cursor.fetchall()
        except Exception as e :
            result = ("read DB err : ", e)
        
        return result

    def readTextFromArticleInJob(self, colum, id):
        sql = f"SELECT * FROM article WHERE \"{colum}\" = '{id}' AND (Score_max_value IS NULL OR Score_max_name IS NULL)"

        try:
            df = pandas.read_sql_query(sql, self.db)

        except Exception as e :
            df = ("Read DB err : ", e)
        
        return df

    def updateScore(self, Score_happy, Score_fear, Score_embarrassed, Score_sad, Score_rage, Score_hurt, Score_max_value, Score_max_name, workerId, articleId):
        sql = ("UPDATE \"article\"" 
        " SET "
        " \"Score_happy\" "
        " = '{Score_happy}',"
        " \"Score_fear\" "
        " = '{Score_fear}',"
        " \"Score_embarrassed\" "
        " = '{Score_embarrassed}',"
        " \"Score_sad\" "
        " = '{Score_sad}',"
        " \"Score_rage\" "
        " = '{Score_rage}',"
        " \"Score_hurt\" "
        " = '{Score_hurt}',"
        " \"Score_max_value\" "
        " = '{Score_max_value}',"
        " \"Score_max_name\" "
        " = '{Score_max_name}'"
        " WHERE "
        " \"Worker_id\""
        " = '{workerId}' AND " 
        " \"Id\""
        " = '{articleId}'"
        ).format(Score_happy = Score_happy, Score_fear = Score_fear,  Score_embarrassed = Score_embarrassed, Score_sad = Score_sad, Score_rage = Score_rage, Score_hurt = Score_hurt, Score_max_value = Score_max_value, Score_max_name = Score_max_name, workerId = workerId, articleId = articleId)
        
        try :
            self.cursor.execute(sql)
            self.db.commit()
        except Exception as e:
            print("delete DB err : ", e)

    def updateDB(self, schema, table, colum, value, condition):
        sql = "UPDATE {schema}.{table} SET {colum}='{value}' WHERE {colum}='{condition}' ".format(schema=schema
        , table=table , colum=colum, value=value, condition=condition)
        try :
            self.cursor.execute(sql)
            self.db.commit()
        except Exception as e :
            print("update DB err : ", e)

    def deleteDB(self, schema, table, condition):
        sql = "DELETE FROM {schema}.{table} WHERE {condition}".format(schema=schema,table=table,
        condition=condition)
        try :
            self.cursor.execute(sql)
            self.db.commit()
        except Exception as e:
            print("delete DB err : ", e)