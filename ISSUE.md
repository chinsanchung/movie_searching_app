# ISSUE (Update & Error)

## Update

1. 01/31

-   그동안 진행했던 사항들 전부 업데이트
    -   API 가져오기, 리덕스 연결, 컴포넌트와 컨테이너 분리, CSS 디자인

2. 02/02

-   README.md 업데이트
-   Loading -> LoadingSpinner 로 이름 변경
-   MovieList, MoviePage 에서 LoadingSpinner 가 뜨도록 `useEffect`, `setTimeout`으로 출력을 설정

3. 02/03

-   modules/movie.js: redux thunk 함수에서 불필요한 async/await 제거. Promise 를 리턴하는 `getMovieList`, `getMovieData`에 Promise.then 으로 비동기 처리를 하기에 async/await 를 제거했습니다.

4. 02/04

-   api/index.js-`getMovieList()`, modules/movie.js-`getMovieListThunk()`, layout/HomeLayout.js: 아래의 키워드 오류를 해결하기 위해 Axios 의 CancelToken 을 api 에서 사용했고, 달라지는 리턴 값으로 인해 thunk 함수와 HomeLayout 컴포넌트를 바꿨습니다.

5. 02/06

-   style/styledComponents.js: PosterDiv 컴포넌트에 width, height 값을 prop 으로 받아오도록 변경했습니다.
-   components/MovieList.js:
    1. PosterDiv 의 변경으로, 포스터 스타일 객체를 삭제하고 width, height 값을 넣었습니다.
    2. Poster 의 삼항연산자(URL 이 N/A 인지 여부를 확인함)를 삭제했습니다. (PosterDiv 가 이미 수행하고 있어서입니다.)
-   components/MoviePage.js:
    1. PosterDiv 의 변경으로, 포스터 스타일 객체를 삭제하고 width, height 값을 넣었습니다.
    2. page-subtitle 클래스 div 의 스타일을 변경하고, 문자를 수정했습니다.
    3. PosterDiv 의 width 수정으로, margin-left 값을 조절했습니다.
-   api/index.js:
    1. Axios.get 에 필요한 URL 을 상수로 따로 선언해 가독성을 높였습니다.
-   layout/HomeLayout.js:
    1. 포스터 스타일 객체를 삭제, width 와 height 값을 넣었습니다.
    2. shuffle 함수를 넣어 초기 리스트 배열을 섞고, 상태 `list`에 넣는 작업을 수행하도록 작성했습니다.
    3. Poster 의 삼항연산자(URL 이 N/A 인지 여부를 확인함)를 삭제했습니다.

6.  02/07

-   json-server 도입: `json-server` 을 설치하고 data.json 파일을 추가했습니다. `npm install json-server --save-dev`로 설치한 후, `npx json-server ./data.json --port 4000`로 실행합니다. 대신 터미널을 두 개 열어 앱을 실행하고 서버를 여는 작업을 각각 해야합니다.
-   Watchlist 생성: Watchlist 는 체크를 한 영화를 `json-server`로 저장한 후 출력하는 역할을 맡았습니다. layout/WatchList.js 를 추가하고, api/index.js, App.js 에 관련 라우트, url 상수를 넣었습니다.
-   style/style.css 생성: 헤더의 메뉴 그룹에 디자인을 적용하기 위해 새로 작성했습니다. 이것을 App.js 에서 불러오도록 했습니다.
-   layout/ListLayout.js 생성: HomeLayout, MovieList 에서 동일하게 사용하는 영역을 분리했습니다.
-   components/Poster.js: ListLayout, MoviePage 에서 사용하는포스터에 watchlist 기능을 구현하기 위해 분리했습니다. 포스터를 클릭 시 watchlist 에 추가하고 삭제하는 기능을 넣었습니다.

7. 02/08

-   MovieList 에러 해결: 'components/MovieListContainer.js'에서 Erropage 관련 경고 메시지를 해결했습니다.
-   components/Poster.js 삭제: 기존의 Poster 컴포넌트를 삭제하고 `styled-components`로 교체했습니다. 그에 따라 MovieList, ListLayout, MoviePage 의 import 문을 수정했습니다.
-   북마크 기능 추가: 북마크를 추가했습니다. 관련 리듀서 'modules/bookmark.js', 컴포넌트 'components/Bookmark.js'를 만들었습니다. 북마크를 ListLayout, MoviePage 에 추가했고, 리듀서를 이용해 Watchlist 를 비동기로 처리할 수 있도록, 'layout/WatchList.js'를 수정했습니다.
-   layout/HomeLayout.js 삭제: 'layout/ListLayout'에서 영화 리스트에 관한 모든 것을 처리하도록 수정했습니다. 그리고 HomeLayout 컴포넌트에 있던 비동기 GET 관련 명령을 'components/Home.js'으로 옮겼습니다.
-   WatchList 수정: 영화가 없을 때를 꾸며줄 [일러스트 이미지](https://www.freepik.com/free-vector/bundle-cinema-entertainment-set-icons_5720507.htm#position=2)를 추가했습니다.

8. 02/09

-   Header 의 메뉴 아이콘: Home, WatchList 의 글자 색을 페이지마다 구분할 수 있도록 만들었습니다.

9. 02/10

-   MovieList 수정: 검색 키워드, 타이틀의 수를 출력하도록 'components/MovieList', 'containers/MovieListContainer.js' 를 수정했습니다.
-   Poster 애니메이션 추가: fadeIn 애니메이션을 추가했습니다.

10. 02/14

-   TypeScript 도입: 프로젝트 전체를 타입스크립트로 변경했습니다.
-   JSON Server, 프로젝트 실행 방법 변경: concurrently 를 이용해서 JSON Server 와 프로젝트를 동시에 실행할 수 있도록 만들었습니다. [참고](https://medium.com/@krpeppermint100/react%EC%99%80-express-%EA%B0%9C%EB%B0%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-concurrently-c22ef870226a) package.json 의 scripts 를 수정했습니다.

## Error

1. 입력한 키워드로 결과가 나오지 않을 때, ErrorPage 는 정상적으로 출력되지만, 아래의 메시지가 나옵니다. -> 해결

> Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. in MovieList (at MovieListContainer.js:20)

[Axios github](https://github.com/axios/axios#cancellation)에 Cancellation 에 대한 설명이 있지만, OMDb API 는 요청을 제대로 받은 다음 `{"Response":"False","Error":"Movie not found!"}` 이란 데이터를 보내 catch 로 에러를 처리하기가 어렵습니다.

-   02/04

Axios 에서 지원하는 CancelToken 으로 api/index.js 를 수정했지만 동일한 에러 메시지가 나왔습니다.

-   02/08

```javascript
//MovieListContainer.js
// 원본
if (!data && error) return <ErrorPage />;
if (loading && !data) return null;
return <MovieList data={data} />;

// 수정본
if (!data && error) return <ErrorPage />;
if (loading && !data) return null;
if (data && !loading) return <MovieList data={data} />;

return <></>;
```

ErrorPage 가 뜰 때 오류가 났던 이유는 처음 if 문에서 모든 것이 끝났지만, 마지막의 리턴으로 인해 데이터를 계산해서 전달하고 있어서 생긴 문제라고 생각했습니다. 따라서 MovieList 에도 if 문으로 조건을 걸었더니 오류 메시지가 사라졌습니다.
