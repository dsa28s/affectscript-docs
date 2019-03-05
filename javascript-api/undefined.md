# 문법

해당 페이지에서는 Affect Script의 문법을 다룹니다.
*현재 버전은 `alpha` 버전이기 때문에 일부 문법은 추가될 수도, 변경될 수도 있습니다.*

### 기반 언어
Affect Script의 기본 문법의 기초는 `JavaScript` 를 기반으로 설계되었습니다.
*일부 문법은 `JavaScript` 와는 다른 패러다임 일 수도 있습니다.*


### Affect Script
Affect Script는 

> 영상 크리에이터들이 Adobe After Effects 로 통해 반복작업을 하여 영상을 만드는 사람들을 어떻게 하면 더 쉽고 간편하게, 영상 만드는 데에 보탬이 될 수 있을까?

라는 생각에서 시작된 프로젝트입니다.

After Effects 를 코드로 조작할 수 있으며, 다양한 효과 프리셋 들이 정형화 된 `API (Application Programming Interface)` 로 구현되어 있습니다.
`Adobe After Effects API` 도 같이 사용할 수 있으며, `Affect Script API` 와 같이 사용하면 효과는 더 극대화됩니다.

`Adobe Extended Toolkit` 과도 호환이 가능하며, 최종소스는 `*.jsx (After Effects Scripting File)` 형태로 컴파일되어 저장됩니다.

코드를 보호하기 위해 `*.jsx` 파일은 난독화 *(코드를 읽기 어렵게 만드는 작업)* 이 기본적으로 적용됩니다.

<br>

### 문법
##### 변수 선언
**변수선언** 이란 **변하는 값** 을 의미합니다.
**코드 작성에 필요한 요소**를 하나하나 선언함으로써 값을 변경하고, 상태를 저장할 수 있습니다.

```javascript
var a = 0
```

*코드의 줄이 끝날때마다, ';' 은 붙여도 되고 생략할 수 있습니다*

<br>
<br>

##### 정수, 문자열, 배열, 참/거짓 선언하기
- 정수
	```javascript
	var a = 0
	```

- 문자열
	```javascript
	var a = "가나다"
	var b = '가나다'
	```

- 배열
	- 1차 배열
		```javascript
		var arrays = [1, 2, 3]
		var stringArrays = ['가나다', '가나다라', '가나다라마바사']
		```

	- n차 배열
		```javascript
		var arrays = [[1, 2], [3, 4], [5, 6]]
		var stringArrays = [['가나다', '가나다라'], ['가나다라마바사', '가']]
		```

	- 배열의 요소에 접근
		```javascript
		var arrays = [1, 2, 3, 4, 5]
		arrays[2]			// 3
		```
		<p class="tip">
		배열의 첨자는 '0' 부터 시작하며, 0이 첫번째 배열요소, 1이 두번째 배열요소, n이 n + 1번째 배열요소가 됩니다.
		</p>


- 참/거짓
	```javascript
	var a = true					// a는 참

	var b = 0
	var c = 100

	var d = (b == 0)				// true
	var e = (c != 100)				// c는 100이 아니다 > false
	var f = (b == 0 || c != 100)	// b가 0 이거나, c가 100이 아니다 > true
	var g = (b == 0 && c == 100)	// b가 0이고, c가 100이다 > false
	var h = (b > 0 || c <= 100)		// b가 0보다 크거나, c가 100 이하이다 > true
	```

<br>
<br>

##### 주석
주석은 코드에 메모를 남기는 것을 의미합니다.
주석에는 2가지의 종류가 있습니다.

- 한줄 주석
	```javascript
	var a = 10000 				// 이것은 주석입니다
	```

- 블록 주석
	```javascript
	/* var a = 1000
	var b = 100
	var c = 100 */
	
	// 위 1줄 ~ 3줄까지가 블록 지정입니다
	```

<br>
<br>

##### 변하지 않는 값
변하지 않는 값은 `const` 를 사용하여 선언할 수 있습니다.

```javascript
const a = 100				// 변수 a는 100으로 고정됩니다
a = 1000					// 오류 발생 (변하지 않는 값을 변경하려고 함)
```

<br>
<br>

##### 선언하지 않은 값
아래의 코드가 있다고 봅니다.

```javascript
var a     			// 'undefined' 라는 값을 가집니다.
```

```javascript
var a = null     	// 'null' 라는 값을 가집니다.
```

`undefined` 는 변수를 선언만 하고, 값을 할당하지 않은 것을 의미하고,
`null` 은 빈 값을 의미하는 `null` 을 할당한 것입니다.

<br>
<br>

##### if ~ else if ~ else
해당 문법은 말로 표현하면 `만약에 ~ 만약에 이거라면 ~ 아니면 만약에 이거라면 ~ 아니면 만약에 이거라면 ~ 전부 다 아니라면` 이 됩니다.

```javascript
var a = 1000

if (a == 1) {
	// 변수 a가 1 이라면
} else if (a == 10) {
	// 위 조건을 만족하지 못하고 변수 a가 10 이라면
} else if (a === 100) {
	// 위 조건을 만족하지 못하고 변수 a가 100 이라면
} else {
	// 위 조건중 아무것도 아니라면
	// 이 코드에서는 해당 else 블록을 타게 됩니다.
}
```

<br>
<br>

##### switch ~ case
위 `if ~ else if ~ else` 예제 코드를 `switch ~ case` 문법으로 바꿔보겠습니다.

```javascript
var a = 1000

switch (a) {
	case 1:
		// 변수 a가 1이라면
		break // 위의 코드로 끝
	case 10:
		// 위 조건을 만족하지 못하고 변수 a가 10 이라면
		break
	case 100:
		// 위 조건을 만족하지 못하고 변수 a가 100 이라면
		break
	default:
		// 위 조건중 아무것도 아니라면
}
```

`break` 를 쓰지 않을경우, 아래의 `case` 의 코드 블록도 같이 실행됩니다.
(위에서 아래로 실행됩니다.)

```javascript
var a = 1000

switch (a) {
	case 1:
		doSomething() // 이 코드가 실행된 후, 아래 코드 doThing() 도 실행됨
	case 10:
		doThing() // 이친구도 실행됨
		break
	case 100:
		
		break
	default:
		// blah...
}
```

<br>
<br>

##### for (반복)
```javascript
for (var i = 0; i < 5; i++) {
	// 차례대로 i의 값이 0부터 1씩 5번 증가
}
```

변수의 값에 따라 변경될 수도 있습니다.

```javascript
var a = 100
for (var i = 0; i < a; i++) {
	// 차례대로 i의 값이 0부터 1씩 (a의 값)번 증가
}
```

무조건 1씩 증가하지 않아도 됩니다.
```javascript
var a = 100
for (var i = 0; i < a; i += 2) {
	// 차례대로 i의 값이 0부터 2씩 (a의 값)번 증가
}
```

역으로 갈 수도 있습니다.
```javascript
var a = 100
for (var i = a; i > 0; i--) {
	// 차례대로 i의 값이 100을 시작으로 1씩 0까지 감소
}
```

<br>
<br>

##### for (in)
배열 객체를 쓸 경우, `for` 을 아래와 같이 사용할 수 있습니다.

```javascript
var array = [1, 2, 3, 4, 5]

for (element in array) {
	print(element)			// 차례대로 1, 2, 3, 4, 5 출력
}

// 출력 결과

// 1
// 2
// 3
// 4
// 5
```

<br>
<br>

##### do ~ while
```javascript
var i = 0
do {
  i++ // i를 1씩 증가
} while (i < 5)

// do 블록에 있는 실행문을 한번은 실행을 한 후에 while에 있는 조건식을 검사하므로 do 블록 한번은 실행함, 이후 조건에 따라 do 블록 종료
// 실행결과 : i == 4
```

<br>
<br>

##### while
```javascript
var i = 0

while (i < 5) { // i < 5는 조건식
	i++
}

// 조건식이 참일경우에는 while 블록을 접근함
// 실행결과 i == 4
```

<br>
<br>

##### break
`break` 는 `switch ~ case` 에서도 쓰이지만, `while`, `for` 등 반복문에서도 쓰입니다.

```javascript
for (var i = 0; i < 100; i++) {
  if (i == 10) {
    break			// a가 10일 경우 for 블록 종료
  }
}
```

<br>
<br>

##### continue
`continue` 는 반복문의 처음으로 이동할 때 쓰입니다.

```javascript
for (var i = 0; i < 3; i++) {
  // 여기!
  if (i == 1) {
    continue			// i가 1일 경우, i를 i++ 에 따라 1 증가하고, 아래의 코드를 실행하지 않고 여기! 부분으로 이동
  }
	
  print(a)
}
```

<br>
<br>

##### 함수
코드의 줄이 만약 2줄이라고 가정하고, 5줄 모두 "컴포지션 생성" 이라는 작업이라고 가정해봅시다.

그럴 경우, 아래의 코드처럼 `function` 키워드를 통해 해당 코드를 블록으로 묶을 수 있습니다.

```javascript
makeComposition()			// 해당 함수 실행

function makeComposition() {
	var comp = composition(1920, 1080, 29.97, '컴포지션 이름')
	comp.openInViewer()
}
```

함수에는 `매개변수` 를 전달할 수 있습니다.
`매개변수` 는 만든 함수 블록에서 값을 사용할 변수를 의미합니다.

```javascript
makeComposition('컴포지션 이름', 29.97)			// 해당 함수 실행

function makeComposition(compName, fps) {
	var comp = composition(1920, 1080, fps, compName)
	comp.openInViewer()
}
```

함수에는 **반환값** 을 가질 수 있습니다.

```javascript
var a = makeComposition('컴포지션 이름', 29.97)			// 해당 함수 실행 후 true

function makeComposition(compName, fps) {
	var comp = composition(1920, 1080, fps, compName)
	comp.openInViewer()
	
	return true // true 라는 값으로 반환
}
```

<br>
<br>

##### 키와 값
키와 값으로 이루어진 객체를 사용할 수 있습니다.
자세한 사항은 [JSON 문법](https://ko.wikipedia.org/wiki/JSON)을 참조하세요.

```javascript
const keyObject = {
	"이름": "이상훈",
	"나이": 20,
	"취미": ["개발", "노래듣기"],
	"언어": [
		{
			"언어이름": "JavaScript",
			"적용한프로젝트": "Affect Script"
		},
		{
			"언어이름": "Python",
			"적용한프로젝트": "Affect Script"
		}	
	]
}

// 값 접근
keyObject["이름"]					// 이상훈
keyObject["취미"][1] 				// 노래듣기
keyObject["언어"][1]["언어이름"]		// Python
```

<br>
<br>

##### 연산자
- 정수 +- 정수
	```javascript
	var a = 100 + 100		// 200
	var b = 100 - 50		// 50
	```

- 정수 +- 실수
	```javascript
	var a = 100 + 100.00		// 200.00
	var b = 100 - 50.00			// 50.00
	```

- 정수 + 문자열
	```javascript
	var a = 5 + '가나다' 			// '5가나다'
	var b = 5 + '1000'			// '51000'
	```

- 정수 - 문자열
	```javascript
	var a = 5 - '가나다' 			// '5가나다'
	var b = 5 - '10'			// -5
	```

- 문자열 + 문자열
	```javascript
	var a = '가나다라마바사' + '아자차카' 	// '가나다라마바사아자차카'
	```

<br>
<br>

##### 데코레이터
여러가지 작업을 편하게 메소드에 할당할 수 있는 형태를 의미합니다.

```javascript
@Comp(name="메인 컴포지션", fps=29.97, size="1920x1080")
var mainComposition // = create composition

// mainComposition은 Composition 객체가 된 것입니다.
```

데코레이터의 종류는 아래와 같습니다.

```javascript
@Comp(name, fps, size)
@Solid(name, color)
@Shape(name, shapeType)
@Null(name, linkedAt)
@Adjustment(name)
```

<br>
<br>

##### 축약형
축약형은 `자주 사용하는 메소드` 를 문장 형태로 표현한 것을 의미합니다.

```javascript
@Comp(name="메인 컴포지션", fps=29.97, size="1920x1080")
var composition = create composition

add composition into mainProject // composition 객체를 mainProject 객체에 추가 > 생성한 컴포지션을 메인 프로젝트에 추가
```
