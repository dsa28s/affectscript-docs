# MarkerValue 클래스

## 구조

**↳ MarkerValue**

## 목차

### 생성자

- [constructor](/javascript-api/api/marker/markervalue-class.md#constructor)

### 속성값

- [chapter](/javascript-api/api/marker/markervalue-class.md#chapter)
- [comment](/javascript-api/api/marker/markervalue-class.md#comment)
- [cuePointName](/javascript-api/api/marker/markervalue-class.md#cuepointname)
- [duration](/javascript-api/api/marker/markervalue-class.md#duration)
- [eventCuePoint](/javascript-api/api/marker/markervalue-class.md#eventcuepoint)
- [frameTarget](/javascript-api/api/marker/markervalue-class.md#frametarget)
- [url](/javascript-api/api/marker/markervalue-class.md#url)

### 사용 가능한 함수

- [getParameters](/javascript-api/api/marker/markervalue-class.md#getparameters)
- [setParameters](/javascript-api/api/marker/markervalue-class.md#setparameters)

---

## 생성자

<a id="constructor"></a>

### constructor

⊕ **new MarkerValue**(comment: _`String`_, chapter: _`String`_, url: _`String`_, frameTarget: _`String`_, curPointName: _`String`_, params: _`Object`[]_): [MarkerValue](/javascript-api/api/marker/markervalue-class.md)

**매개변수:**

| Name         | Type       |
| ------------ | ---------- |
| comment      | `String`   |
| chapter      | `String`   |
| url          | `String`   |
| frameTarget  | `String`   |
| curPointName | `String`   |
| params       | `Object`[] |

**반환:** [MarkerValue](/javascript-api/api/marker/markervalue-class.md)

---

## 속성값

<a id="chapter"></a>

### chapter

**● chapter**: _`String`_

---

<a id="comment"></a>

### comment

**● comment**: _`String`_

마커의 내용을 가져오거나 설정합니다.

---

<a id="cuepointname"></a>

### cuePointName

**● cuePointName**: _`String`_

---

<a id="duration"></a>

### duration

**● duration**: _`number`_

마커가 나오는 위치를 가져오거나 설정합니다.

---

<a id="eventcuepoint"></a>

### eventCuePoint

**● eventCuePoint**: _`boolean`_

---

<a id="frametarget"></a>

### frameTarget

**● frameTarget**: _`String`_

---

<a id="url"></a>

### url

**● url**: _`String`_

---

## 사용 가능한 함수

<a id="getparameters"></a>

### getParameters

▸ **getParameters**(): `Object`

**반환:** `Object`

---

<a id="setparameters"></a>

### setParameters

▸ **setParameters**(): `void`

마커에 설정값을 적용합니다.

**반환:** `void`

---
