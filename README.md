# ✨ Youtube 오픈 API를 이용하여 Youtube 웹페이지 만들기!

  <br/>

![image](https://user-images.githubusercontent.com/102464638/219038344-f8c4f9aa-7e20-4a12-93a8-e7ad43d131e1.png)

<br><br>

## 1. 프로젝트 소개

- Youtube 오픈 API를 통해 실제 Youtube 데이터를 이용하여 만든 프로젝트입니다.
- 제한된 API 요청 횟수로 인해, 개발단계에서는 Mock data를 만들어 사용하였으며 이후 API 호출하여 데이터를 받아올 수 있도록 리팩토링 하였습니다.
- 반응형으로 구현하였습니다.

<br><br>

## 2. 기능

- 접속시 Hot trend 비디오 목록을 보여줌
- 각 비디오카드에는 비디오 타이틀 / 채널정보 / 업로드 일자를 표시함
- 비디오카드 클릭 -> 비디오 상세페이지 보여줌 (url 변경됨)
- 비디오 상세페이지에서는 동영상 재생이 가능하며 채널정보 / 채널이미지 / 영상 상세정보를 표시함
- 비디오 상세페이지에서 연관된 비디오 목록을 함께 보여줌
- 라우팅을 이용하여 뒤로가기 / 앞으로가기 기능
- 반응형 구현

  <br><br>

## 3. 개발 환경

- Youtube APIs
- Axios, React-Router, React-Query, TailwindCSS, yarn

<br><br>

## 4. UI

- 비디오카드 클릭시 비디오 상세페이지로 이동
  <br>

  ![비디오상세페이지](https://user-images.githubusercontent.com/102464638/219288532-eb7548dd-366c-45a4-841b-047e4c3bbf25.gif)

- 검색기능
  <br>

  ![키워드로검색](https://user-images.githubusercontent.com/102464638/219288734-637fcccf-eea7-42ce-ab9a-b18782979a9e.gif)

- 뒤로가기
  <br>

  ![뒤로가기](https://user-images.githubusercontent.com/102464638/219288818-263359d2-8491-4377-8eb7-53a0a8a4a87d.gif)

- 반응형 구현
  <br>

  ![반응형](https://user-images.githubusercontent.com/102464638/219288903-921b70e1-134d-4fb8-9f2d-ea0873703585.gif)

# 5. 핵심 코드

- mock data <-> youtube API

```

```

- useQuery 사용

```

```
