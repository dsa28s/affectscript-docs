# RenderQueueItem 클래스

## 구조

[Collection](/javascript-api/콜렉션%20API/collection-class.md)

**↳ RenderQueueItem**

## 목차

### 속성값

- [comp](/javascript-api/콜렉션%20API/renderqueueitem-class.md#comp)
- [elapsedSeconds](/javascript-api/콜렉션%20API/renderqueueitem-class.md#elapsedseconds)
- [logType](/javascript-api/콜렉션%20API/renderqueueitem-class.md#logtype)
- [numOutputModules](/javascript-api/콜렉션%20API/renderqueueitem-class.md#numoutputmodules)
- [onStatusChanged](/javascript-api/콜렉션%20API/renderqueueitem-class.md#onstatuschanged)
- [outputModules](/javascript-api/콜렉션%20API/renderqueueitem-class.md#outputmodules)
- [render](/javascript-api/콜렉션%20API/renderqueueitem-class.md#render)
- [skipFrames](/javascript-api/콜렉션%20API/renderqueueitem-class.md#skipframes)
- [startTime](/javascript-api/콜렉션%20API/renderqueueitem-class.md#starttime)
- [status](/javascript-api/콜렉션%20API/renderqueueitem-class.md#status)
- [templates](/javascript-api/콜렉션%20API/renderqueueitem-class.md#templates)
- [timeSpanDuration](/javascript-api/콜렉션%20API/renderqueueitem-class.md#timespanduration)
- [timeSpanStart](/javascript-api/콜렉션%20API/renderqueueitem-class.md#timespanstart)

### 사용 가능한 함수

- [duplicate](/javascript-api/콜렉션%20API/renderqueueitem-class.md#duplicate)
- [outputModule](/javascript-api/콜렉션%20API/renderqueueitem-class.md#outputmodule)
- [remove](/javascript-api/콜렉션%20API/renderqueueitem-class.md#remove)
- [saveAsTemplate](/javascript-api/콜렉션%20API/renderqueueitem-class.md#saveastemplate)

---

## 속성값

<a id="comp"></a>

### comp

**● comp**: [_`CompItem`_](/javascript-api/아이템%20API/compitem-class.md)

렌더링 대기열에 있는 컴포지션 객체를 가져옵니다.

---

<a id="elapsedseconds"></a>

### elapsedSeconds

**● elapsedSeconds**: _`number`_

렌더링 된 컴포지션의 렌더링 시간을 가져옵니다. 렌더링이 되지 않았다면 null이 반환됩니다.

---

<a id="logtype"></a>

### logType

**● logType**: [_`LogType`_](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.logtype.md)

렌더링 할 때 로그 출력 방식을 설정하거나 가져옵니다.

---

<a id="numoutputmodules"></a>

### numOutputModules

**● numOutputModules**: _`number`_

출력할 대상의 모듈 개수를 가져옵니다.

---

<a id="onstatuschanged"></a>

### onStatusChanged

**● onStatusChanged**: _`any`_

렌더링 상태가 변경되었을 때 이벤트 처리기입니다.

---

<a id="outputmodules"></a>

### outputModules

**● outputModules**: [_`OMCollection`_](/javascript-api/api/collection/omcollection-class.md)

모든 출력 모듈을 객체로 가져옵니다.

---

<a id="render"></a>

### render

**● render**: [_`RQItemStatus`_](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.rqitemstatus.md)

해당 레이어의 렌더링 대기상태를 설정하거나 가져옵니다.

---

<a id="skipframes"></a>

### skipFrames

**● skipFrames**: _`number`_

테스트 렌더링 일때 혹은 빠른 렌더링을 위해 건너뛸 렌더링 프레임을 지정합니다. 비율입니다.

---

<a id="starttime"></a>

### startTime

**● startTime**: _`Date`_

렌더링이 시작한 시간을 가져옵니다.

---

<a id="status"></a>

### status

**● status**: [_`RQItemStatus`_](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.rqitemstatus.md)

현재 렌더링 상태를 가져옵니다.

---

<a id="templates"></a>

### templates

**● templates**: _`string`[]_

해당 컴포지션에서 사용 가능한 모든 렌더링 설정값을 배열로 가져옵니다.

---

<a id="timespanduration"></a>

### timeSpanDuration

**● timeSpanDuration**: _`number`_

컴포지션의 지속 시간을 설정하거나 가져옵니다.

---

<a id="timespanstart"></a>

### timeSpanStart

**● timeSpanStart**: _`number`_

렌더링이 시작될 컴포지션의 지속 시간을 설정합니다.

---

## 사용 가능한 함수

<a id="duplicate"></a>

### duplicate

▸ **duplicate**(): [_`RenderQueueItem`_](/javascript-api/api/collection/renderqueueitem-class.md)

렌더링 대기열에 있는 컴포지션을 복제합니다.

**반환:** [`RenderQueueItem`](/javascript-api/api/collection/renderqueueitem-class.md)

---

<a id="outputmodule"></a>

### outputModule

▸ **outputModule**(index: _`number`_): [_`OutputModule`_](/javascript-api/api/etc/classes/outputmodule-class.md)

출력 모듈 객체를 가져옵니다.

**매개변수:**

| Name  | Type     | Description             |
| ----- | -------- | ----------------------- |
| index | `number` | 가져올 모듈 위치입니다. |

**반환:** [`OutputModule`](/javascript-api/api/etc/classes/outputmodule-class.md)

---

<a id="remove"></a>

### remove

▸ **remove**(): `void`

렌더링 대기열에서 해당 아이템을 제거합니다.

---

<a id="saveastemplate"></a>

### saveAsTemplate

▸ **saveAsTemplate**(name: _`string`_): `void`

사용자가 만든 렌더링 사전 설정 값을 저장합니다.

**매개변수:**

| Name | Type     | Description                       |
| ---- | -------- | --------------------------------- |
| name | `string` | 렌더링 사전 설정 값의 이름입니다. |

---
