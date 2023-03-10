# dak-keyword

키워드를 입력받고 이와 관련된 데이터를 소셜 미디어를 통해 수집하여 감성분석을 하는 시스템입니다!

# 사용자 시나리오

본 프로젝트의 목적인 시나리오를 간단히 적자면 아래와 같습니다.

> 키워드를 입력 -> 연관 검색어 추출 -> 데이터 수집 -> 감성분석 -> 통합 및 시각화

순으로 진행됩니다!

# 개발환경

docker version

```
Client:
 Cloud integration: v1.0.29
 Version:           20.10.22
 API version:       1.41
 Go version:        go1.18.9
 Git commit:        3a2c30b
 Built:             Thu Dec 15 22:28:41 2022
 OS/Arch:           darwin/arm64
 Context:           default
 Experimental:      true

Server: Docker Desktop 4.16.2 (95914)
 Engine:
  Version:          20.10.22
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.18.9
  Git commit:       42c8b31
  Built:            Thu Dec 15 22:25:43 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.14
  GitCommit:        9ba4b250366a5ddde94bb7c9d1def331423aa323
 runc:
  Version:          1.1.4
  GitCommit:        v1.1.4-0-g5fd4c4d
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

go 1.18

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

# TODO (라 적고 개선하고 싶은 부분)

-   E-tag를 활용하여, 용량이 큰 articles(23년 3월 기준 가장 큰 용량이 4mb를 넘어감) 호출할떄, 불필요한 요청은 client단에서 캐싱하고 싶음

-   좀 더 세분화된 상태 체크

-   장애시 대처 로직 부족

-   클러스터에서 하나뿐인 데이터베이스

-   job생성 후 리턴값

-   Job화면에서 worker의 상태를 확인시 가독성이 떨어짐(worker수가 많아지는것 또한 있지만 상태가 업데이트 될때마다 react에서 전체 스크롤리 렌더링이 되는듯함. )

-   traefik에 의존적인 tls인증서 관리(로컬에서도 적용이 가능하지만, improbable grpc-web의 특성상, 브라우저의 인증서와 grpc-web의 인증서가 공통된 부분을 써야하는듯함. 아마 improbable grpc-web에서 내부에서 구현한 Proxy?의 특징으로 추측함.)

# Reference

wip...
