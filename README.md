# 원티드 프리온보딩 프론트엔드 선발 과제

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
