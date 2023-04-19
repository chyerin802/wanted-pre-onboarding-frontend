# 원티드 프리온보딩 프론트엔드 - 선발 과제


## 프로젝트 실행 방법
### 현재 폴더에 설치
```
git clone https://github.com/chyerin802/wanted-pre-onboarding-frontend.git .
npm install
npm start
```

## 데모 영상 (배포 링크로 대체)
https://wanted-pre-onboarding-yerin.netlify.app/

## 구현 기능
### 1. 로그인 / 회원가입

<details>
<summary></summary>
<div markdown="1">

#### 1) Assignment 1 : 유효성 검사
회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
    - 이메일 조건: @ 포함
    - 비밀번호 조건: 8자 이상

#### 2) Assignment 2 : 회원가입 기능
회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동

#### 3) Assignment 3 : 로그인 기능
로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동
- JWT 방식으로 구현 (토큰은 로컬 스토리지에 저장)

#### 4) Assignment 4 : 리다이렉트 처리
로그인 여부에 따른 리다이렉트 처리를 구현
- 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트
- 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트


</div>
</details>


### 2. TODO LIST

<details>
<summary></summary>
<div markdown="1">

#### 5) Assignment 5 : TODO 리스트 불러오기
`/todo`경로에 접속하면 투두 리스트 목록이 나타나고 목록에서는 TODO의 내용과 완료 여부가 표시

#### 6) Assignment 6 : 새로운 TODO 추가
리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button 구현
추가 button을 클릭 시, 입력 input의 내용이 새로운 TODO로 추가

#### 7) Assignment 7 : TODO 완료 여부 수정
TODO의 체크박스를 통해 완료 여부를 수정

#### 8) Assignment 8
TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요

#### 9) Assignment 9 : TODO 삭제
삭제 버튼 클릭 시, 해당 TODO 삭제

#### 10) Assignment 10 : TODO 내용 수정
TODO 우측의 수정 버튼을 누르면 수정모드가 활성화 (제출 버튼, 취소 버튼 표시)
- 수정모드에서는 TODO의 내용이 input창 안에 입력된 형태로 변경되고 TODO의 내용 변경 가능

제출버튼을 클릭 시, 수정한 내용을 제출해서 내용 업데이트
취소버튼을 클릭 시, 수정한 내용을 초기화 하고, 수정모드를 비활성화


</div>
</details>


## API
https://github.com/walking-sunset/selection-task#api
