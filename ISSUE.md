## Movie Searching App - ISSUE

### Update

#### 04/02

-   라이브러리, 패키지를 설치, index.js 에 연결
-   MainPage 생성, Route 로 연결
-   API.js 에 테스트용 변수를 생성
-   ListLayout 에 평행 스크롤 디자인 구현
-   커스텀 css 파일을 생성해 css/styles.css 에 작성
-   Header.js 로 헤더 작성

#### 04/03

-   향후 받아올 JSON 데이터의 구성에 맞춰 JSX 수정
-   인물 정보를 보여주는 PersonDetail 페이지 구현
-   파일의 기능에 맞춰 디렉토리 변경
-   API 관련 함수의 기능 수정, 공통적인 코드를 별개의 함수로 분리
-   종류별(사람, 리스트)로 다른 JSON 데이터의 객체 구성에 맞춰 ListLayout의 JSX 에 조건문을 작성
-   App 에 Person, Content 영역을 Route 로 연결
-   ContentDetail 페이지 생성

#### 04/04

-   ContentDetail 페이지 디자인, props 데이터를 DOM 요소에 연결
-   Movie.js에서 상세 페이지에 데한 thunk 함수, 리듀서 제작
-   API.js 의 요청 함수의 방식을 변경: 한 함수에 통합해서 객체 형태로 반환하도록 변경
-   ListLayout 에 새로운 props 인 type 를 추가, 데이터의 형식에 맞춰 구분하도록 변경
-   ContentDetailContainer 에 리덕스 설정
-   ListLayout 의 하위 요소를 ListItem 컴포넌트로 분리

#### 04/05

-   ListItem 의 요소에 Link 컴포넌트로 포장, poster_path 에 조건문 추가
-   ContentDetail 에 loading, error 조건문 추가, recommandations props 삭제
-   GenreList 에 redux 상태를 보내줄 컨테이너 생성
-   장르별 영화 목록을 출력하기 위한 searchMoviesFromGenre 함수 추가
-   장르 목록과 영화 정보 관련 thunk, reducer 구문 추가
