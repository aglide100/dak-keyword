# FROM ghcr.io/aglide100/lexicon-based-simple-korean-semantic-analyzer:latest
FROM ghcr.io/aglide100/kobert-based-simple-korean-semantic-analyzer:latest

RUN apt update && apt install -y python3-protobuf protobuf-compiler

RUN pip3 install google

RUN pip3 install google-cloud

RUN pip3 install psycopg2-binary

RUN pip3 install protobuf && pip3 install grpcio

RUN pip3 install grpcio-tools
RUN pip3 install  protobuf==3.20.1


RUN pip3 install iteration-utilities 


COPY . .


RUN cat Keyword.py >> Analyzer.py

# ENTRYPOINT ["python3"]