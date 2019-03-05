# JavaScript 표준 API

해당 페이지에서는 `Affect Script`, `After Effects` 에서 사용할 수 있는 JavaScript 표준 API에 대해 설명합니다.

<p class="tip">
이 페이지는 한번만 훑고 지나가셔도 되며, `Affect Script` 로 영상을 만들 때에 기억이 나지 않거나 필요한 코드조각을 찾으려고 할 때 참조하시면 됩니다.
<br><br>
그래도 처음 접하시는 분들이라면 **꼭 해당 페이지를 정독해주세요**
</p> 

### 그냥 JavaScript의 표준 함수만 알면 되는거 아닌가요?
`After Effects` 에는 제한적으로 사용할 수 있는 최소한의 JavaScript API 만 사용할 수 있습니다. 일반적으로 JavaScript로 할 수 있는 코드와는 차이가 많으며, 일부만 존재합니다.

없는 API를 작성할 경우, Affect Script 실행 중에 오류가 발생하게 됩니다.

### 함수

<p class="tip">
아래부터는 함수에 대한 설명을 진행합니다.<br>
함수의 매개변수에 `?` 가 붙어있다면, `optional` 이란 뜻(즉, 옵션값. 생략 가능) 입니다.
</p>

#### Array :: 배열
기본적으로 `Array` 라고 하면 아래와 같이 이루어진 객체라고 볼 수 있습니다.

```javascript
var arrayObject = [1, 2, 3, 4, 5]
```

배열 변수 `arrayObject` 로 사용할 수 있는 기본 API는 아래와 같습니다.

##### `Array.length`

```javascript
arrayObject.length				// 출력결과 : 5
```

`length` 프로퍼티는 **현재 배열의 요소의 개수**를 반환합니다.

<br>

##### `Array.concat(n, n+1, n+2......)`
```javascript
arrayObject.concat(6, 7)		// 실행결과 : [1, 2, 3, 4, 5, 6, 7]
arrayObject.concat([6, 7])		// 실행결과 : [1, 2, 3, 4, 5, 6, 7]

var appendArrayObject = arrayObject.concat([6, 7])
// appendArrayObject : [1, 2, 3, 4, 5, 6, 7]

// arrayObject 변수의 값은 변하지 않음
```

매개변수로 들어온 배열의 객체 혹은 값을 기존 배열에 합쳐서 찹친 결과를 반환합니다.

<br>

##### `Array.join()`
```javascript
var joinedArrayString = arrayObject.join()
// 출력 결과 : 12345
```

배열에 있는 모든 요소를 합친 후, 문자열로 반환합니다.

<br>

##### `Array.pop()`
```javascript
var removedLastValue = arrayObject.pop()		// 출력 결과 : 5
```

배열에 있는 **마지막 요소** 를 지운 후, 지워진 마지막 요소를 반환합니다.

<br>

##### `Array.push(value)`
```javascript
arrayObject.push(9)			// 출력 결과 : 6
```

매개변수로 들어온 값을 **배열의 마지막** 에 추가하고, 배열의 전체 개수를 반환합니다.

<br>

##### `Array.reverse()`
```javascript
var reversedArrayObject = arrayObject.reverse()
```

배열의 요소를 역순으로 재배열 후, 역순으로 된 배열 객체를 반환합니다.

<br>

##### `Array.shift()`
```javascript
arrayObject.shift()			// 출력 결과 : [2, 3, 4, 5]
```

**배열의 맨 앞** 요소를 지운 후,  지워진 원소를 반환합니다.

<br>

##### `Array.slice(start?, end?)`
```javascript
arrayObject.slice(1)			// 실행 결과 : [2, 3, 4, 5]
arrayObject.slice(3)			// 실행 결과 : [4, 5]

arrayObject.slice(1, 3)			// 실행 결과 : [2, 3]
arrayObject.slice(2, 5)			// 실행 결과 : [3, 4, 5]
```

매개변수로 들어올 수 있는 형식의 경우의 수는 **3가지** 입니다.
1. `slice()`
	- 배열을 복사합니다. (기존 배열에 영항이 미치지 않습니다)
	
2. `slice(start)`
	- 요소 `index` 로부터 `start + 1` 부분부터만 요소를 포함하여 배열을 복사합니다.

3. `slice(start, end)`
	- 요소 `index` 로부터 `end` 부분까지만 요소를 포함하여 배열을 복사합니다.

<br>

##### `Array.sort(sortFunction?)`
```javascript
var a = [3, 1, 5, 4, 2]
a.sort()					// 실행 결과 : [1, 2, 3, 4, 5]

a.sort(function() {
	return a - b
})							// 실행 결과 : [1, 2, 3, 4, 5] > 오름차순

a.sort(function() {
	return b - a
})							// 실행 결과 : [5, 4, 3, 2, 1] > 내림차순
```

배열을 기본적으로 **오름차순** 으로 정렬합니다.
매개변수로 들어올 수 있는 형식의 경우의 수는 **2가지** 입니다.

1. `sort()`
	- 배열의 요소를 오름차순으로 정렬합니다.
	
2. `sort(sortFunction)`
	- 배열의 요소를 `sortFunction` 에 구현된 결과로 반환합니다.


<br>

##### `Array.splice(start?, num?, values...?)`
```javascript
arrayObject.splice(2)  			// 실행 결과 : [3, 4, 5]
arrayObject 					// 출력 결과 : [1, 2]

arrayObject = [1, 2, 3, 4, 5]
arrayObject.splice(1, 2) 		// 실행 결과 : [2, 3]  
arrayObject 					// 실행 결과 : [1, 4, 5]  
  
arrayObject = [1, 2, 3, 4, 5] 
arrayObject.splice(1, 3, 7, 8) 	// 실행 결과 : [2, 3, 4]  
arrayObject						// 출력 결과 : [1, 7, 8, 5]
```

배열의 요소를 지우거나 추가합니다. 
지워진 요소들이 반환됩니다.

<p class="warning">
`splice()` 함수는 기존 배열 자체를 건드립니다.
해당 함수를 실행한 후, 기존 배열의 요소들이 변경됩니다.
</p>

매개변수로 들어올 수 있는 형식의 경우의 수는 **3가지** 입니다.

1. `splice(start)`
	- 요소  `index` `0` 부터 `start` 부분까지를 제외한 나머지를 지웁니다.
	
2. `splice(start, num)`
	- 요소  `start` 번째 부터 `num` 개의 요소를 지웁니다.

3. `splice(start, num, values...)`
	- 요소  `start` 번째 부터 `num` 개의 요소를 지운 후, 지운 위치에 `values` 로 요소를 추가합니다.

<br>
<br>

#### String :: 문자열

기본적으로 `String` 라고 하면 아래와 같이 이루어진 객체라고 볼 수 있습니다.

```javascript
var str = "Affect Script로 영상을 만드는데에 보탬이 되었으면."
```
 
문자열 변수 `str` 로 사용할 수 있는 기본 API는 아래와 같습니다.

<br>

##### `String.length`

```javascript
str.length				// 출력결과 : 34
```

`length` 프로퍼티는 **현재 문자열의 문자 개수**를 반환합니다.

<br>

##### `String.charAt(index)`

```javascript
str.charAt(4)				// 실행 결과 : "c"
```

`index` 번째의 글자 **하나** 를 반환합니다.
*`index` 는 0부터 시작합니다.*

<br>

##### `String.charCodeAt(index)`

```javascript
str.charCodeAt(4)				// 실행 결과 : 99
```

`index` 번째의 글자의 **유니코드 값** 을 반환합니다.
*`index` 는 0부터 시작합니다.*

<br>

##### `String.concat(value)`

```javascript
str.concat(" 꺜!!")				// 실행 결과 : "Affect Script로 영상을 만드는데에 보탬이 되었으면. 꺜!!"
```

매개변수의 값을 추가해 완성된 문자열을 반환합니다.

<br>

##### `String.fromCharCode(value)`

```javascript
var charCode = String.fromCharCode(65)	// 실행 결과 : "A"		
```

유니코드 값에 해당하는 문자를 반환합니다.

<br>

##### `String.indexOf(searchValue, offset?)`

```javascript
str.indexOf("Affect")					// 실행 결과 : 7
str.indexOf("가나다")						// 실행 결과 : -1		
```

찾으려고 하는 문자열 `searchValue` 를 찾고, 찾으면 그 문자열이 시작하는 **첫번째** 위치를, 없으면 `-1` 을 반환합니다.

매개변수로 들어올 수 있는 형식의 경우의 수는 **2가지** 입니다.

1. `indexOf(searchValue)`
	- 문자열 `searchValue` 를 해당 문자열에서 찾습니다.

2. `indexOf(searchValue, offset)`
	- 문자열 `searchValue` 를 위치 `offset` 부터 해당 문자열에서 찾습니다.

<br>

##### `String.fromCharCode(value)`

```javascript
var charCode = String.fromCharCode(65)	// 실행 결과 : "A"		
```

유니코드 값에 해당하는 문자를 반환합니다.

<br>

##### `String.localeCompare(what)`

```javascript
var s1 = "가나다"
var s2 = "가나"

s1.localeCompare('가나다')			// 실행 결과 : 0
s1.localeCompare(s2)				// 실행 결과 : 1
s1.localeCompare('라')				// 실행 결과 : -1
```

비교 대상인 `what` 문자열이 서로 같으면 `0` 을 반환하고, 서로 다르면 `1` 혹은 `-1` 을 반환합니다.

- -1을 반환할 때
	- 비교 대상의 문자열이 원래 문자열보다 사전적으로 뒤에 있다면 -1 을 반환합니다.

- 1을 반환할 때
	- 비교 대상의 문자열이 원래 문자열보다 사전적으로 앞에 있다면 1을 반환합니다.

<br>

##### `String.match(regexp)`

```javascript
var s1 = "오늘 날씨는 정말 화창하네요!"

s1.match("화 창 하 네 요 !")				// 실행 결과 : null
s1.match("화창하네요")						// 실행 결과 : ["화창하네요"]
s1.match(/화창/gi)						// 실행 결과 : ["화창"]
```

찾으려고 하는 문자열이 포함되어 있다면, 포함된 문자열을 있는데로 배열로 만들고 반환합니다.
만약, 찾으려고 하는 문자열에 해당 문자열이 없다면 `null` 을 반환합니다.

정규식에 대한 자세한 설명은 [생활코딩 (OpenTutorials) - 정규표현식 편](https://opentutorials.org/course/62/5141) 을 참조하세요.

<br>

##### `String.replace(what, with)`

```javascript
str.replace("Affect Script", "affect script")		// 실행 결과 : affect script로 영상을 만드는데에 보탬이 되었으면.

str.replace(/보탬/gi, "도움")				// 실행 결과 : Affect Script로 영상을 만드는데에 도움이 되었으면
```

바꿀 대상의 문자열(혹은 정규식) `what` 을 바꿀 문자열 `with` 로 치환합니다.

<br>

##### `String.search(search)`

```javascript
str.search("보탬")					// 실행 결과 : 25
str.search(/보탬/gi)					// 실행 결과 : 25
```

문자열에서 찾으려고 하는 문자열 `search` 를 찾고, 있으면 해당 문자열이 있는 첫번째 위치를, 없으면 `-1` 을 반환합니다.

<br>

##### `String.slice(startSlice?, endSlice?)`

```javascript
str.slice(20)					// 실행 결과 : "드는데에 보탬이 되었으면."
str.slice(10)					// 실행 결과 : "ipt로 영상을 만드는데에 보탬이 되었으면."

str.slice(10, 20)				// 실행 결과 : "ipt로 영상을 만"
str.slice(-5)					// 실행 결과 : "되었으면."
```

문자열을 자릅니다.

매개변수로 들어올 수 있는 형식의 경우의 수는 **3가지** 입니다.

1. `slice(startSlice)` 
	- `startSlice` 위치부터 문자열을 자릅니다.

2. `slice(startSlice, endSlice)`
	- `startSlice` 위치부터 `endSlice` 위치까지 문자열을 자릅니다.

3. `slice(startSlice < 0)` 
	- `startSlice` 가 음수일 경우, 문자를 앞에서부터 자를것이 아닌, 뒤에서부터 자릅니다.

<br>

##### `String.split(delimiter, limit?)`

```javascript
str.split(" ")			// 실행 결과 : ["Affect", "Script로", "영상을", "만드는데에", "보탬이", "되었으면."]
str.split(" ", 3)		// 실행 결과 : ["Affect", "Script로", "영상을"]
```

자르려고 하는 기준  `delimiter` 로 해당 문자열을 잘라 배열로 반환합니다.

매개변수로 들어올 수 있는 형식의 경우의 수는 **2가지** 입니다.

1. `split(delimiter)`
	- 해당 문자를 자릅니다. (`delimiter` 가 공백 한칸 " " 이라면 공백을 기준으로 문자열을 잘라 배열로 반환합니다.

2. `split(delimiter, limit)`
	- 해당 문자를 자르되, 제한된 개수 `limit` 개 만큼만 반환합니다.

<br>

##### `String.substr(start, length?)`

```javascript
str.substr(5)			// 실행 결과 : "t Script로 영상을 만드는데에 보탬이 되었으면."
str.substr(5, 10)		// 실행 결과 : "t Script로 "
str.substr(-5, 10)		// 실행 결과 : "되었으면."
```

문자열의 일부 부분만 반환합니다.

매개변수로 들어올 수 있는 형식의 경우의 수는 **3가지** 입니다.

1. `substr(start)`
	- 문자열의 일부 부분을 시작할 위치 `start` 에서부터 잘라 반환합니다.

2. `substr(start, length)`
	- 문자열의 일부 부분을 시작할 위치 `start` 에서부터 자를 길이 `length` 개까지만 잘라 반환합니다.

3. `substr(start < 0, length)`
	- 문자열의 일부 부분을 시작할 위치 `start` 에서부터 자를 길이 `length` 개까지만 잘라 반환합니다. (처음에서 자르는게 아닌, 마지막에서부터 자릅니다.)

<br>

##### `String.toLocaleLowerCase()`

```javascript
str.toLocaleLowerCase()	// 실행 결과 : "affect script로 영상을 만드는데에 보탬이 되었으면."
```

모든 문자열에 있는 대문자를 소문자로 변경하여 반환합니다.

<br>

##### `String.toLocaleUpperCase()`

```javascript
str.toLocaleUpperCase()	// 실행 결과 : "AFFECT SCRIPT로 영상을 만드는데에 보탬이 되었으면."
```

모든 문자열에 있는 소문자를 대문자로 변경하여 반환합니다.

<br>
<br>

#### Number :: 숫자
기본적으로 `Number` 라고 하면 아래와 같이 이루어진 객체라고 볼 수 있습니다.

<p class="tip">
`Number` 객체는 JavaScript 에서 사용하는 숫자값을 한번 감싼 형태라고 볼 수 있습니다.
</p>

```javascript
var number = new Number(10000)				// 10000 이라는 값을 가진 객체
```

넘버 변수 `number` 로 사용할 수 있는 기본 API는 아래와 같습니다.

##### `Number.MAX_VALUE`

```javascript
var maxNumberValue = Number.MAX_VALUE			// 실행 결과 : 1.7976931348623157e+308
```

`Number` 가 가질 수 있는 최대의 값을 반환합니다.

<br>

##### `Number.MIN_VALUE`

```javascript
var minNumberValue = Number.MIN_VALUE			// 실행 결과 : 5e-324
```

`Number` 가 가질 수 있는 최소의 값을 반환합니다.

<br>

##### `Number.NEGATIVE_INFINITY`

```javascript
Number.NEGATIVE_INFINITY			// 실행 결과 : -Infinity
```

무한대를 나타내는 `INFINITE` 의 음수 값입니다.

<br>

##### `Number.NaN`

```javascript
Number.NaN			// 실행 결과 : NaN
```

정상적인 숫자값이 아닌것을 나타내는 `NaN`  값입니다.

<br>

##### `Number.POSITIVE_INFINITY`

```javascript
Number.POSITIVE_INFINITY			// 실행 결과 : Infinite
```

무한대를 나타내는 `INFINITE` 의 양수 값입니다.

<br>

##### `Number.toExponential()`

```javascript
number.toExponential()			// 실행 결과 : "1e+4"
```

숫자 값을 **지수표현식** 으로 표시합니다.

<br>

##### `Number.toFixed(decimals)`

```javascript
number.toFixed(2)			// 실행 결과 : "10000.00"
number.toFixed(5)			// 실행 결과 : "10000.00000"
```

숫자 값에 대해 **소수점의 자리수를 제한한 값** 을 반환합니다.

<br>

##### `Number.toPrecision(decimals)`

```javascript
number.toPrecision(2)			// 실행 결과 : "1.0e+4"
number.toPrecision(3)			// 실행 결과 : "1.00e+4"
```

숫자 값에 대해 자리수를 제한합니다.
소수가 없을 경우, 숫자에 대한 자리를 제한하여 표현합니다.

<br>
<br>

#### Date :: 날짜

<p class="tip">
`Date` 객체는 JavaScript 에서 사용하는 기본적인 날짜 객체입니다.
</p>

기본적인 날짜 객체를 생성하는 방법은 아래와 같습니다.

```javascript
var currentDate = new Date()	// 현재 날짜 객체
var currentDate = new Date('2018-10-13') // '2018년 10월 13일' 이란 값을 가진 날짜 객체
var currentDate = new Date('2018-10-13 23:11:34') // '2018년 10월 13일 오후 11시 11분 34초' 라는 값을 가진 날짜 객체
var currentDate = new Date(2018, 10, 13)	// '2018년 10월 13일' 이란 값을 가진 날짜 객체
var currentDate = new Date(2018, 10, 13, 23, 11, 34) // '2018년 10월 13일 오후 11시 11분 34초' 라는 값을 가진 날짜 객체
```
해당 변수에 대해서 사용할 수 있는 함수는 아래와 같습니다.

<br>

##### `Date.getTimezoneOffset()`

```javascript
currentDate.getTimezoneOffset()	// UTC와 현재 지역의 시간 차이 반환 (단위 : 분)
```

협정세계시와 시스템이 속해 있는 지역의 시간의 차이를 반환합니다.

<br>

##### `Date.getDate()`

```javascript
currentDate.getDate()	// 12 반환
```

해당 날짜의 '일' 을 구합니다.

<p class="warning">
'일' 은 0부터 시작하며, 예를 들어 12일 경우, 11을 반환합니다. 
</p>

<br>

##### `Date.getDay()`

```javascript
currentDate.getDay()	// 6 (토요일)
```

'일요일' ~ '토요일' 이란 순서로 0부터 6까지를 반환합니다.
해당 날짜의 요일을 숫자값으로 반환합니다.

<br>

##### `Date.getFullYear()`

```javascript
currentDate.getFullYear()	// 2018
```

해당 날짜 객체의 연도를 반환합니다.

<br>

##### `Date.getHours()`

```javascript
currentDate.getHours() // 24시간제 (0 ~ 23)
```

해당 날짜 객체의 시간을 반환합니다. (0 ~ 23)

<br>

##### `Date.getMilliseconds()`

```javascript
currentDate.getMilliseconds() // 밀리초 (0 ~ 999)
```

해당 날짜 객체의 밀리초를 반환합니다. (0 ~ 999)

<br>

##### `Date.getMinutes()`

```javascript
currentDate.getMinutes() // 분 (0 ~ 59)
```

해당 날짜 객체의 분을 반환합니다. (0 ~ 59)

<br>

##### `Date.getMonth()`

```javascript
currentDate.getMonth() // 달 (0 ~ 11)
```

해당 날짜 객체에서 몇월인지 반환합니다. (0 ~ 11)

<p class="warning">
'달' 은 0부터 시작하며, 예를 들어 12일 경우, 11을 반환합니다. 
</p>

<br>

##### `Date.getSeconds()`

```javascript
currentDate.getSeconds() // 초 (0 ~ 59)
```

해당 날짜 객체에서 몇초인지 반환합니다. (0 ~ 59)

<br>

##### `Date.getTime()`

```javascript
currentDate.getTime()
```

해당 날짜 객체에서 시간을 UNIX 표준 시간으로 반환합니다.

<p class="tip">
UNIX 표준 시간은 1970년부터 정수로 표현한 시간 체계입니다. 
</p>

<br>

##### `Date.setDate(day)`

```javascript
currentDate.setDate(9)
```

해당 날짜 객체에서 '일' 을 설정합니다. (1 ~ 31)

<br>

##### `Date.setFullYear(year, month?, day?)`

```javascript
currentDate.setFullYear(2018)
currentDate.setFullYear(2018, 10)
currentDate.setFullYear(2018, 10, 13)
```

해당 날짜 객체에서 '연도' 를 설정합니다.
추가 매개변수가 있을 경우 '월', '일' 도 설정할 수 있습니다.

매개변수로 들어올 수 있는 형식의 경우의 수는 **3가지** 입니다.

1. `setFullYear(year)` 
	- 해당 날짜 객체의 '연도' 를 설정합니다.

2. `setFullYear(year, month)` 
	- 해당 날짜 객체의 '연도', '월' 을 설정합니다.

2. `setFullYear(year, month, day)` 
	- 해당 날짜 객체의 '연도', '월', '일' 을 설정합니다.

<br>

##### `Date.setHours(hour, minute?, second?, milliseconds?)`

```javascript
currentDate.setHours(18)
currentDate.setHours(18, 53)
currentDate.setHours(18, 53, 10)
currentDate.setHours(18, 53, 10, 247)
```

해당 날짜 객체의 '시간' 을 설정합니다.
추가 매개변수가 있을 경우 '분', '초', '밀리초' 도 설정할 수 있습니다.

매개변수로 들어올 수 있는 형식의 경우의 수는 **4가지** 입니다.

1. `setHours(hour)` 
	- 해당 날짜 객체의 '시간' 을 설정합니다.

2. `setHours(hour, minute)` 
	- 해당 날짜 객체의 '시간', '분' 을 설정합니다.

3. `setHours(hour, minute, seconds)` 
	- 해당 날짜 객체의 '시간', '분', '일' 을 설정합니다.
	
4. `setHours(hour, minute, seconds, milliseconds)` 
	- 해당 날짜 객체의 '시간', '분', '일' , '밀리초' 를 설정합니다.


<br>

##### `Date.setMilliseconds(milliseconds)`

```javascript
currentDate.setMilliseconds(421)
```

해당 날짜 객체의 '밀리초' 를 설정합니다.

<br>

##### `Date.setMinutes(minute, seconds?, milliseconds?)`

```javascript
currentDate.setMinutes(1)
currentDate.setMinutes(1, 10)
currentDate.setMinutes(1, 10, 100)
```

해당 날짜 객체의 '분' 을 설정합니다. (0 ~ 59)
추가 매개변수가 있을 경우 '초', '밀리초' 도 설정할 수 있습니다.

매개변수로 들어올 수 있는 형식의 경우의 수는 **3가지** 입니다.

1. `setMinutes(minutes)` 
	- 해당 날짜 객체의 '분' 을 설정합니다.

2. `setMinutes(minutes, seconds)` 
	- 해당 날짜 객체의 '분', '초' 를 설정합니다.

3. `setMinutes(minutes, seconds, milliseconds)` 
	- 해당 날짜 객체의 '분', '초', '일' 을 설정합니다.
	
<br>

##### `Date.setMonth(month, date?)`

```javascript
currentDate.setMonth(10)
currentDate.setMonth(10, 14)
```

해당 날짜 객체에서 '월' 을 설정합니다.
추가 매개변수가 있을 경우 '일' 도 설정할 수 있습니다.

1. `setMonth(month)` 
	- 해당 날짜 객체의 '월' 을 설정합니다.

2. `setMonth(month, date)` 
	- 해당 날짜 객체의 '월', '일' 을 설정합니다.

<br>

##### `Date.setSeconds(seconds, milliseconds?)`

```javascript
currentDate.setSeconds(52)
currentDate.setSeconds(52, 614)
```

해당 날짜 객체에서 '초' 를 설정합니다.
추가 매개변수가 있을 경우 '밀리초' 도 설정할 수 있습니다.

1. `setSeconds(seconds)` 
	- 해당 날짜 객체의 '초' 를 설정합니다.

2. `setSeconds(seconds, milliseconds)` 
	- 해당 날짜 객체의 '초', '밀리초' 를 설정합니다.

<br>

##### `Date.setTime(time)`

```javascript
currentDate.setTime(1539522171)
```

해당 날짜 객체를 UNIX 시간의 값으로 변경합니다.

<p class="warning">
`setTime` 메소드를 사용하게 되면 모든 시간 값이 해당 시간 값으로 덮어쓰기 됩니다.
</p>

<br>

##### `Date.toDateString()`

```javascript
currentDate.toDateString() // Sun Oct 14 2018
```

해당 날짜 객체를 문자열로 표현한 값을 반환합니다. (기본값 : 영어)

<br>

##### `Date.toLocaleDateString()`

```javascript
currentDate.toLocaleDateString() // 2018년 10월 14일 목요일
```

해당 날짜 객체의 '날짜' 를 해당 언어 설정에 맞는 표기법에 맞춘 문자열로 표현한 값을 반환합니다.

<br>

##### `Date.parse(value)`

```javascript
var date = Date.parse('2018-10-14 23:03:29')
```

문자열로 되어있는 타임스탬프를 기반으로 `Date` 객체로 만듭니다.
