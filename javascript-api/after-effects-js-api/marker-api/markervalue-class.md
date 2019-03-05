# MarkerValue 클래스

## 목차

### 생성자

* [constructor](markervalue-class.md#constructor)

### 속성값

* [chapter](markervalue-class.md#chapter)
* [comment](markervalue-class.md#comment)
* [cuePointName](markervalue-class.md#cuepointname)
* [duration](markervalue-class.md#duration)
* [eventCuePoint](markervalue-class.md#eventcuepoint)
* [frameTarget](markervalue-class.md#frametarget)
* [url](markervalue-class.md#url)

### 사용 가능한 함수

* [getParameters](markervalue-class.md#getparameters)
* [setParameters](markervalue-class.md#setparameters)

## 생성자

### constructor  <a id="constructor"></a>

⊕ **new MarkerValue**\(comment: `String`, chapter: `String`, url: `String`, frameTarget: `String`, curPointName: `String`, params: `Object`_\[\]_\): [MarkerValue](markervalue-class.md)

**매개변수:**

| Name | Type |
| :--- | :--- |
| comment | `String` |
| chapter | `String` |
| url | `String` |
| frameTarget | `String` |
| curPointName | `String` |
| params | `Object`\[\] |

**반환:** [MarkerValue](markervalue-class.md)

## 속성값

### chapter  <a id="chapter"></a>

**● chapter**: `String`

### comment  <a id="comment"></a>

**● comment**: `String`

마커의 내용을 가져오거나 설정합니다.

### cuePointName  <a id="cuepointname"></a>

**● cuePointName**: `String`

### duration  <a id="duration"></a>

**● duration**: `number`

마커가 나오는 위치를 가져오거나 설정합니다.

### eventCuePoint  <a id="eventcuepoint"></a>

**● eventCuePoint**: `boolean`

### frameTarget  <a id="frametarget"></a>

**● frameTarget**: `String`

### url  <a id="url"></a>

**● url**: `String`

## 사용 가능한 함수

### getParameters  <a id="getparameters"></a>

▸ **getParameters**\(\): `Object`

**반환:** `Object`

### setParameters  <a id="setparameters"></a>

▸ **setParameters**\(\): `void`

마커에 설정값을 적용합니다.

**반환:** `void`

