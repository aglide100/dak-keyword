# dak-keyword

키워드를 입력받고 이와 관련된 데이터를 소셜 미디어를 통해 수집하여 감성분석을 하는 시스템입니다!

# 사용자 시나리오

본 프로젝트의 목적인 시나리오를 간단히 적자면 아래와 같습니다.

> 키워드를 입력 -> 연관 검색어 추출 -> 데이터 수집 -> 감성분석 -> 통합 및 시각화

순으로 진행됩니다!

# 시스템 설계

전체적인 시스템 구성은 아래 그림과 같습니다.

<br>

<img src="https://user-images.githubusercontent.com/35767154/198195330-97c0baa0-1eef-4e00-bafd-49e520f3522a.png">

<br>
우선 감정분석의 특성상 추론만 하여도 생각보다 많은 자원이 소모되며, 이를 물리적으로 해결을 위해 여러대의 노드를 클러스터에 묶은 환경에서 배포하는 것을 산정하고 설계하였습니다.

<br>

Docker기반의 Swarm Cluster에서 서비스가 배포되며, 서비스단위를 기준으로 Dockerize된 컨테이너를 생성 및 실행하는 것이 주된 목적입니다.

<br>

각 서비스간의 통신은 grpc을 통해서 이루어지며, docker container의 상태관리를 위해서 docker api를 사용하여 개발하였습니다.

<br>
이를 위해 서비스 단위를 크게 apid, scraper, provisioned, db, ui, analyzer로 나누었습니다.

<br>
<br>

아래 그림은 작업이 생성되고 종료되기까지의 흐름을 그림으로 표현한것입니다.

<br>

<img src="https://user-images.githubusercontent.com/35767154/213896710-1a823153-0205-4b45-896e-1af1dd2b38bc.png">

<br>

# Docker image

서비스 단위로 나누었으며, 이는 dockerize한 이미지는 ghcr레포에서 배포하고 있습니다.

<br>

---

감성분석은 KoBERT기반인 이미지를 베이스로 grpc stub 코드를 추가하여 작성하였습니다. 자세한 내용은 아래 레포를 참고해주시면 감사하겠습니다.

-   https://github.com/aglide100/KoBERT-based-simple-korean-semantic-analyzer

<br>

나머지 apid, scraper, provisioned, db, ui 이미지는 본 래포의 패키지를 참고하시면 됩니다.

-   https://github.com/aglide100?tab=packages&repo_name=dak-keyword

# 개발환경

아래의 docker version으로 구성된 pi4 x 4개의 docker swarm 크ㄹ러스터

docker version

```
Client:
 Version:           20.10.5+dfsg1
 API version:       1.41
 Go version:        go1.15.15
 Git commit:        55c4c88
 Built:             Mon May 30 18:34:49 2022
 OS/Arch:           linux/arm64
 Context:           default
 Experimental:      true

Server:
 Engine:
  Version:          20.10.5+dfsg1
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.15.15
  Git commit:       363e9a8
  Built:            Mon May 30 18:34:49 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.4.13~ds1
  GitCommit:        1.4.13~ds1-1~deb11u2
 runc:
  Version:          1.0.0~rc93+ds1
  GitCommit:        1.0.0~rc93+ds1-5+deb11u2
 docker-init:
  Version:          0.19.0
  GitCommit:
```

감정분석을 수행하는 컨테이너를 제외한 나머지 부분은 go 1.18환경아래에서 개발하였습니다.

# 프로젝트 배포

기존의 traefik이 배포되고 있다는 가정하에

```
  ./deploy.sh
```

# 프로젝트 시연

### Job 생성 및 키워드 분석

<br>

<img src="https://user-images.githubusercontent.com/35767154/213896472-251b055f-c14c-40f8-9cb8-663d2677f173.gif">

<br>

### 분석 결과

<br>
<img src="https://user-images.githubusercontent.com/35767154/213896483-18411f7f-0972-496e-a14c-27a76e9c3053.gif">

<br>

<!--
* Article
<img width="1680" alt="Screen Shot 2022-10-27 at 1 42 55 PM" src="https://user-images.githubusercontent.com/35767154/198193540-80f25f35-46e4-438e-934d-75883b69f7b9.png">

* Sentiment Analyasis
<img width="1676" alt="Screen Shot 2022-10-27 at 1 43 13 PM" src="https://user-images.githubusercontent.com/35767154/198193544-0f8d4858-0da6-4878-b5ed-9cc443d5d275.png">
<img width="1680" alt="Screen Shot 2022-10-27 at 1 43 08 PM" src="https://user-images.githubusercontent.com/35767154/198193548-c62fa24f-228e-464d-adbd-f4f2ce6a9700.png"> -->

# TODO

-   E-tag등을 활용하여, 불필요한 요청/중복된 요청을 캐싱처리하고 싶음

-   컨테이너 서비스 장애시에 대처

-   클러스터에서 하나뿐인 데이터베이스

# Reference

wip...
