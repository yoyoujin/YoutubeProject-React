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

## Mock Data

    👉 mock: 거짓된, 가짜의
    👉 mock data: 가짜 데이터, 샘플 데이터

이번 프로젝트를 진행하면서 실제 API 에서 받아온 데이터가 아닌 샘플로 만든 Mock data를 사용해서 개발을 진행해보았다! 왜 샘플 데이터를 사용했을까? 😚

## Mock data, 왜 사용할까?

상황에 따라 여러 이유가 있겠지만, 나는 아래와 같은 이유로 Mock data를 만들어 사용했다.

- Youtube 오픈 API는 무제한이 아니다 -> 하루 API 요청 수가 제한되어있었다.

만약 개발 도중, 하루 API 요청 수가 초과되었다면 개발 중 정말 난감했을 것이다.
따라서 Mock data를 만들어 사용하게 되었다. 그러면 매번 API를 호출하지 않고 자유롭게 개발할 수 있는 장점이 있다 👍

실제로 현업에서는 프론트엔드 개발을 진행하려는데 필요한 백엔드 API가 완성이 되지 않았을 경우가 있어 이 작업이 완성될 때까지 무작정 기다리는 것이 아닌,
mock data를 만들어 데이터가 들어오는 형태와 상황을 미리 대비하고 의도에 맞게 먼저 UI 구현을 진행한다고 한다.

<br>

## Mock data 사용하기

데이터가 사용되는 Videos 컴포넌트에서 Mock data를 받아오는 코드를 작성하였다.

### fetch로 받아오기

```jsx
const {
  isLoading,
  error,
  data: videos,
} = useQuery(['videos', keyword], async () => {
  return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res) => res.json())
    .then((data) => data.items);
});
```

### axios로 받아오기

```jsx
const {
  isLoading,
  error,
  data: videos,
} = useQuery(['videos', keyword], async () => {
  return axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`).then((res) => res.data.items);
});
```

- useQuery를 이용해서 Mock data를 받아왔다.
- fetch : 브라우저에서 제공해주는 유용한 native API 이지만 문제점이 있다.
  - 백엔드에서 무언가 잘못되어서 400번대 status가 들어오더라도, 성공케이스로 간주하여 모두 then으로 받아진다.
  - 받아온 response를 json으로 변환해줘야 함
- axios
  - status 200번대일 경우에만 then으로 들어오고,
    400번대와 기타 에러들은 모두 catch로 들어와 에러핸들링을 하게된다.
  - json으로 변환할 필요가 없다.
