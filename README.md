# MVC 디자인패턴 vs FLUX 디자인 패턴

	MVC 패턴의 단점: 모델과 뷰의 개수가 늘어날 수록 구조가 복잡해지며, 모델과 뷰의 관계를 파악하기가 힘들다.
	FLUX 패턴:
		- 액션 -> 디스패쳐 -> 스토어 -> 뷰
		X. 시스템(= 화면단)에서 어떤 액션(ex. 클릭이벤트 등)이 발생
		1. 디스패쳐가 해당 액션을 감지하고, 스토어의 데이터를 업데이트함
		2. 스토어가 뷰에게 스토어에 변경이 일어났음을 알려준다.
		3. 뷰가 스토어에게 변경된 데이터에 대한 요청을 한다.
		4. 스토어가 뷰에 변경된 데이터를 넘겨준다. ( = 재렌더링 )
		* 디스패쳐는 비동기적으로 작동하지 않는다.
		
# FLUX 패턴에서의 각각의 역할
1. 액션 생성자 (Action Creator)
	- 앱에서 어떤 것을 업데이트할지 '정의'되어있음 (실제로 업데이트를 하는 것이 아님)
2. 디스패쳐 (Dispatcher)
	- 액션을 받으면 해당 액션에 대한 동작을 수행함
	- 동기적으로 작동하며, 여러 액션이 들어오면 순서대로 처리함 (= 꼬이지않음)
3. 스토어 (Store)
	- 모든 상태를 가지고 있음	
4. 뷰 (View)
	- 화면
	
# FLUX는 REDUX의 근간이 된다.

# REDUX의 3원칙
1. Single Source of Truth
	- 어플리케이션의 State 관리를 위해 단 하나의 Store를 사용한다 (FLUX와의 차이)
2. State is READ ONLY
	- State의 값을 직접 바꿀 수 없으며, 값 변경을 위하여 무조건 action의 disptch를 사용하여야한다.
3. Changes are made with pure function
	- reducer는 Action을 받아 처리하는 함수를 말한다 (= DISPATCHER)
	- reducer는 Action을 받아 어떻게 업데이트할지 정의되어있으며
	  이 reducer는 순수함수로 작성되어야한다.
	  즉, HTTP 메소드 (네트워크 및 DB접근), 받은 인수를 변경해서는 안되며
	  같은 인수로 실행된 함수는 언제나 같은 결과를 반환하여야한다.
	  Date.now(), Math.random()과 같은 순수하지 않은 함수는 사용해선 안된다.
	  
# REDUX의 각각의 역할
1. Action Creator
	- FLUX와 같다
2. Store
	- FLUX와 달리 단 하나의 Store만 존재한다.
3. Reducer
	- 액션에 따라 어떤 행동을 해야할지 정의되어있음.
	- 리듀서는 새로운 복사본을 만든 후 거기에 변경사항을 적용하여 Return한다.
4. View
	- Smart Component: Dumb Component들을 사용하며, CSS Style과 DOM을 거의 가지지 않는다.
	- Dumb Component: DOM과 CSS Style을 가지고 있다. 
5. View Layer Binding
	- 필수는 아니나, Store를 View에 쉽게 연결해준다.
	
