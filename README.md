# movie_searching_app

## 개요

[OMDb API](http://www.omdbapi.com/)에서 영화에 대한 정보를 불러와 검색, 출력하는 애플리케이션을 만들었습니다.

## 사용 기술

1. Language: HTML, CSS, JavaScript(ES6)
1. Tool: create-react-app, styled-components, react-icons, redux, redux-thunk, react-router, Axios

## 설치

프로젝트가 들어있는 폴더 안에서 명령 프롬프트를 열고, `npm install`으로 필요한 도구를 설치합니다. 그리고 `npm start`를 입력해 개발자 모드를 열어 동작을 확인할 수 있습니다.

## 구성

### 폴더 구조

1. api
    1. [index.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/api/index.js): API 를 불러오는 코드를 작성했습니다. `getMovieList`, `getMovieData`로 구분했고, 리스트를 불러오는 함수는 첫 화면과 영화 검색 시에 사용합니다.
1. assets: 웹 페이지의 head 부분에 쓸 이미지, 그리고 평점에 사용할 로고들이 있습니다. 로고는 svg 파일을 컴포넌트로 바꿔서 저장했습니다.
1. components
    1. [Header.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/components/Header.js): 왼쪽에는 메인 화면으로 돌아가는 텍스트를, 오른쪽에는 검색 폼이 있습니다. 창에 키워드를 입력하고 엔터를 누르면, ".../search/키워드" 라는 url 을 통해 MoviePage 로 이동합니다.
    1. [Home.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/components/Home.js): 메인 화면입니다. 초기의 영화 목록을 불러오는 HomeLayout, 헤더로 구성되어 있습니다.
    1. [MovieList.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/components/MovieList.js): 헤더의 검색 바를 입력하면 나오는 결과입니다. 포스터를 나열하는 형식으로, 각 포스터를 클릭해 MoviePage 로 이동합니다.
    1. [MoviePage.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/components/MoviePage.js): 클릭했던 영화의 상세한 정보를 알려줍니다. 연도, 플롯, 감독, 배역, 평점 등을 순서대로 정렬해서 보여줍니다. 특히 평점을 클릭하면, 평점을 준 사이트(로튼토마토, 메타크리틱, imdb)으로 이동합니다.
1. containers
    1. [MovieListContainer.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/containers/MovieListContainer.js): 헤더에서 검색했던 결과를 띄우는 MovieList 를 위한 컨테이너입니다. url 에 있는 키워드 정보를 활용해 리덕스로 api 정보를 불러옵니다.
    1. [MoviePageContainer.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/containers/MoviePageContainer.js): MoviePage 를 위한 컨테이너입니다. 목록에서 영화 포스터를 클릭하면 ".../movie/영화imdbID"라는 url을 콩해 MoviePage 로 이동하는 방식인데, url 에서 ID 를 받아 리덕스로 정보를 불러오는 역할입니다.
1. layout
    1. [ErrorPage.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/layout/ErroPage.js): 검색 결과가 없을 때 띄우는 화면입니다.
    1. [HomeLayout.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/layout/HomeLayout.js): Home 에서 하단의 화면을 꾸미는 역할입니다. `useEffect`로 특정 키워드의 영화 목록을 불러와 페이지를 장식했습니다. 각 포스터를 클릭하면 해당 영화의 페이지 MoviePage 로 이동합니다.
    1. [Loading](https://github.com/chinsanchung/movie_searching_app/blob/master/src/layout/Loading.js): 영화를 클릭해 정보를 불러오는 과정에서 띄울 CSS 애니메이션입니다. 현재 해당 페이지가 나오질 않는 문제가 있습니다.
1. lib
    1. [movie_util.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/lib/movie_util.js): 리듀서의 액션을 수행할 때, 상태를 변경하기 위해 사용한 유틸입니다. 중복을 줄이기 위해서 따로 만들었습니다.
1. modules
    1. [movie.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/modules/movie.js): 영화를 검색하거나 정보를 가져오는 등 영화와 관련된 리덕스를 관리합니다.
    1. [index.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/modules/index.js): `combineReducers`로 movie 리듀서를 합쳤습니다.
1. style
    1. [styledComponents.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/style/styledComponents.js): `stlyed-components`로 만든 컴포넌트 중에서, 편의성을 높이기 위해 공통적으로 쓰이는 `ContainerHome`, `SectionHeader`, `ListUl`, `PosterDiv` 스타일 컴포넌트를 한 파일에 정의했습니다.
1. [App.js](https://github.com/chinsanchung/movie_searching_app/blob/master/src/App.js): 앱에서는 `Route`로 각 페이지의 경로를 지정했습니다.

## 업데이트

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

## 문제

1. 입력한 키워드로 결과가 나오지 않을 때, ErrorPage 는 정상적으로 출력되지만, 아래의 메시지가 나옵니다.

> Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. in MovieList (at MovieListContainer.js:20)

[Axios github](https://github.com/axios/axios#cancellation)에 Cancellation 에 대한 설명이 있지만, OMDb API 는 요청을 제대로 받은 다음 `{"Response":"False","Error":"Movie not found!"}` 이란 데이터를 보내 catch 로 에러를 처리하기가 어렵습니다.

-   02/04

Axios 에서 지원하는 CancelToken 으로 api/index.js 를 수정했지만 동일한 에러 메시지가 나왔습니다.
