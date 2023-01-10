
import Database
import psycopg2

host = "localhost"
dbname = "keyword"
user = "table_admin"
password = "HelloWorld"
port = "8432"
workerId = "test"


db = Database.Databases(host, dbname, user, password, port)

result = Database.CRUD.readTextFromArticleInJob(db, 'Worker_id', workerId)
# print(result)

for value in result:
    val = value[0].replace("(","").replace(")","")
    val = tuple(map(str, val.split(',')))

    print(val[0])
    print(val[1])
    
