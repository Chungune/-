# 과제

## 1. Toggle
토글을 이동시키기 위해 기준이 되는 값이 필요했고, 클릭할 때마다 값을 변경시켜야 했습니다. 그래서 react hook인 useState를 사용했습니다.
state에 false를 할당하여 토글 클릭 전 상태를 유지했습니다. 토글을 클릭시 setState로 state값을 true로 변경하고, true일 경우 토글과 배경색을 오른쪽으로 이동시켰습니다.  
구현 중 토글을 클릭하여 배경색을 변경할 때 한번에 변경되는 문제가 있었습니다. 그래서 새로운 요소를 만들어 position: absolute에 left: -80px에 위치시켰고, 토글 영역 밖으로 나온 요소는 부모요소에 overflow: hidden을 주어 보이지 않게 하였습니다. 그 후 state가 true일 경우, left: 0으로 토글과 같이 이동 시켰습니다.

## 2. Modal
버튼을 클릭했을 때 모달이 나타나게 하려면 기준 값이 필요했습니다. 기준 값이 필요하여 토글과 마찬가지로 useState를 사용했습니다.
state에 false를 할당하고, 버튼에 onClick이벤트로 state를 true로 변경하여 모달 창을 띄웠습니다. 또한 모달 창의 x버튼에도 onClick이벤트로 state를 false를 변경하여 모달창을 닫았습니다.

## 3. Tab
탭 메뉴가 간단하게 추가하기 위해 { name: "Tab1", num: "ONE" }의 형태의 객체를 배열로 나열하여 map을 사용하였습니다.
각 탭을 클릭하면 해당 탭의 내용이 나와야 했기 때문에 useState를 사용하여 tapName에 클릭한 탭의 name을 할당하여 변경된 tapName과 name이 같을 경우만 탭의 내용이 보이게 하였습니다.
또한 처음에 탭1이 클릭된 상태여야 했기 때문에 tapName의 default값으로 Tap1을 할당하였습니다.

## 4. AutoComplete
자동완성은 datalist 태그를 사용해 미리 저장해둔 단어를 보여주는 식으로 구현하였습니다.
input에 글자를 입력하면 datalist에 저장해둔 단어들 중 해당 글자로 시작하는 단어를 보여줍니다.
