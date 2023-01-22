# dak-keyword

키워드를 입력받고 이를 수집하여 감성분석을 하는 시스템입니다!

# 프로세스

본 프로젝트의 주요 아이디어인 키워드 분석의 프로세스는 아래와 같습니다.

> 키워드를 입력 -> 연관 검색어 추출 -> 데이터 수집 -> 감성분석 -> 통합 및 시각화

순으로 진행됩니다!

# 시스템 설계

전체적인 시스템 구성은 아래 그림과 같습니다.

<br>

<img src="https://user-images.githubusercontent.com/35767154/198195330-97c0baa0-1eef-4e00-bafd-49e520f3522a.png">

<br>
Docker기반의 Swarm Cluster에서 서비스가 배포되며, 굵직한 서비스를 기준으로 Dockerize된 코드를 생성하고 종료되면 terminated되는 것이 주로 이루어집니다.

<br>

다만 MSA와 같이 너무 작게 서비스를 나누기에 적합하지 않다고 생각되어 특성별로 묶어 apid, scraper, provisioned, db, ui, analyzer로 나누었습니다.
<br>
<br>

작업 중심의 흐름도는 아래 그림을 참고 하시면 됩니다.

<br>

<img src="https://user-images.githubusercontent.com/35767154/213896710-1a823153-0205-4b45-896e-1af1dd2b38bc.png">

<br>

# Docker image

이미지는 기능별로 작게 나누는 것보다는 특성별로 나누어 작성하였기에 github action을 통해 ghcr 레포에 배포하였습니다.

<br>

---

감성분석은 KoBERT기반인 이미지를 기준으로 grpc stub 코드를 추가하여 작성하였습니다. 자세한 내용은 아래 레포를 참고해주시면 감사하겠습니다.

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

# Reference

wip...
