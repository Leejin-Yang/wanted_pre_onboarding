# 원티드 프리온보딩 프론트엔드 선발 과제

## 1. Toggle

> 구현

- 토글 클릭의 상태를 `Boolean`으로 관리
  - 기본 `false`, 상세 `true`
  - `setIsClicked(!isClicked)`
- 토글 볼의 위치도 클릭 상태에 따라 설정

> 문제

- 클릭 상태에 따른 각 `span` 스타일링
  - 각각의 `span`이 상태에 따라 다른 스타일을 가지는 문제
  - 토글 컨테이너에 `prop`을 넘겨주어 첫번재 요소와 마지막 요소 스타일링으로 구현

## 2. Tab

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
