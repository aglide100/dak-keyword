FROM python:3.8-slim-buster

COPY . /

WORKDIR /

RUN pip3 install -r requirements.txt

RUN apt update && apt install -y default-jre

ENTRYPOINT ["python3", "Main.py"]