# 원티드 프리온보딩 프론트엔드 선발 과제

[데모 페이지](https://leejin-yang-wanted-pre-onboarding.netlify.app/)

## 기술 스택

- JavaScript(ES6)
- React
- Styled-Components

<br>

## 과제 구현 목록

### 1. Toggle

![Toggle](https://user-images.githubusercontent.com/78616893/165091496-ada363d0-853d-422b-89b6-e063555b2fb1.gif)

> 구현

- 토글 클릭의 상태를 `Boolean`으로 관리
  - 기본 `false`, 상세 `true`
  - `setIsClicked(!isClicked)`
- 토글 볼의 위치도 클릭 상태에 따라 설정

> 문제

- 클릭 상태에 따른 각 `span` 스타일링
  - 각각의 `span`이 상태에 따라 다른 스타일을 가지는 문제
  - 토글 컨테이너에 `prop`을 넘겨주어 첫번재 요소와 마지막 요소 스타일링으로 구현

<br>

### 2. Tab

![Tab](https://user-images.githubusercontent.com/78616893/165091339-860b7bf9-4807-4a5e-8351-a3d9f84706be.gif)

> 구현

- tabMenus 배열의 인덱스를 활용해 활성 상태를 관리
  - 탭 `id` 값을 배열의 인덱스로 설정
  - 탭 클릭 시 탭 `id` 값으로 활성탭 상태 변경
- Boolean 값을 넘겨주어 활성/비활성 스타일링
  - 활성 탭과 탭 인덱스와 비교
  - `isActive={activeTab === index}`
- 활성 탭에 따라 ActiveBar 위치 설정
  - position은 `activeTab * 180`;
  - `transition`을 이용해 슬라이드 애니메이션 구현

> 문제

- 인덱스와 id의 타입 문제
  - 인덱스의 타입 `Number`, id의 타입 `String`
  - id의 타입을 `Number`로 변환해 해결

<br>

### 3. Slider

![Slider](https://user-images.githubusercontent.com/78616893/165091396-dde04f2f-084a-4662-82b3-fc360d2276e7.gif)

> 구현

- `value` 상태 관리
  - RangeBar의 `onChange`로 `value` 상태 관리
- 퍼센트 데이터에서 `map` 메소드를 이용해 range 마커와 버튼 생성
  - `value`가 퍼센트를 넘어가면 배경색 변경
  - 버튼 `data` 속성에 퍼센트 값으로 클릭 시 `value` 상태 업데이트
  - `CSS grid`를 통해 버튼과 마커의 위치 설정

> 문제, 배운 점

- `input type=’range’` 스타일링
  - `-webkit-appearance: none`
  - 운영체제 및 브라우저의 기본 테마를 기반으로 요소 표현
  - 요소 스타일을 재지정하기 위해, 동등한 스타일을 위해 이용한다.
- 버튼 및 마커의 위치 설정
  - `justify-content: space-between`으로 위치를 설정한 경우 bar의 `value`와 매치가 되지 않았다.
  - `grid` 레이아웃으로 각 컨테이너의 크기를 지정해 시각적으로 `value`와 매치가 될 수 있게 해줬다.

<br>

### 4. Input

![Input](https://user-images.githubusercontent.com/78616893/165090771-284738cb-61a2-4008-bf00-7b1143df2874.gif)

> 구현

### E-mail

- 정규식을 이용해 이메일 유효성 검사
- 이메일, 유효성, `input` focus 상태 관리
  - `onChange`를 이용해 `input`의 value로 이메일과 유효성 상태 관리
  - 유효성 상태에 따라 체크 이모지 변경
  - invalid 메시지 노출에 포커스 해제 상태 조건 포함

### Password

- 비밀번호 노출 상태 관리
  - 노출 상태에 따라 `input`의 `type` 변경
    - ‘text’ / ‘password’
  - 노출 상태에 따라 노출 버튼 이모지 변경

> 배운 점

- 이메일 form 구현에서 유효성 검사, 메시지 노출 등에 필요한 여러 조건을 고민할 수 있었다.
- `label` 태그 사용과 이해
  - 사용자 인터페이스 항목의 설명을 나타낸다.
  - `input`과 연관에서 `input`에 `id` 속성, `label`에 같은 값의 `for` 속성
  - 클릭으로 연관된 `input`에 `focus`

<br>

### 5. Dropdown

![Dropdown](https://user-images.githubusercontent.com/78616893/165091128-c4f9088b-d756-42d8-ba8c-6e790884b55c.gif)

> 구현

- `filter` 메소드를 이용해 데이터 상태 관리
  - 데이터와 입력 문자열을 소문자로 변환한 뒤, `startsWith`로 문자열 시작 확인
- `data` 속성을 이용해 국가 데이터 전달
  - `data-country={country}`
- `map` 메소드를 이용해 현재 데이터를 리스트를 생성해 렌더
- menu 박스의 크기를 고정하고 스크롤을 이용해 데이터 양의 변화에도 크기 고정
- 입력값과 일치하지 않은 경우 No Result 메시지 렌더

> 문제

- 메뉴 박스 크기 고정
  - 크기를 고정했을 때 리스트가 `MenuWrapper`를 넘어가는 문제
  - `Wrapper`의 자식 요소로 있어 input 제외 높이를 차지한다 생각해 리스트의 스타일을 `height: 100%`로 생각했다.
  - `input`을 삭제하고 보니 `Wrapper` 전체의 높이를 따르고 있어 검색 `input`과 `MenuList`의 크기를 정해주어 해결했다.
