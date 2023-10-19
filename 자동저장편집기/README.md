별도의 저장 버튼 없이 자동으로 서버와 싱크되는 편집기
url에 따른 라우팅 처리가 들어가야 한다
PostsPage
- 기본 경로로 들어왔을 때 보여줄 컴포넌트, posts를 불러와서 렌더링하고, 클릭 시 해당 post를 수정하는 곳으로 이동한다
- 맨 아래에는 post를 생성할 수 있는 페이지로 이동하는 링크가 있다
PostEditPage
- post를 생성하고 수정하는 페이지

API 네 가지 사용
편집 가능한 글 목록 불러오기
https://kdt-frontend.programmers.co.kr/posts - GET

특정 게시글 불러오기
https://kdt-frontend.programmers.co.kr/posts/{id} - GET

게시글 저장하기
https://kdt-frontend.programmers.co.kr/posts - POST

게시글 수정하기
https://kdt-frontend.programmers.co.kr/posts/{id} - PUT

1. posts를 불러와 화면에 그리는 컴포넌트 작업을 한 후 해당 작업을 PostsPage로 옮긴다