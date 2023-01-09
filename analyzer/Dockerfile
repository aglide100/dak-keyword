# FROM ghcr.io/aglide100/lexicon-based-simple-korean-semantic-analyzer:latest
FROM ghcr.io/aglide100/kobert-based-simple-korean-semantic-analyzer:latest

COPY . .

RUN pip3 install psycopg2-binary

RUN pip3 install iteration-utilities

RUN cat Keyword.py >> Analyzer.py

ENTRYPOINT ["python3"]