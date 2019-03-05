# RenderQueueItem 클래스

## 구조

[Collection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/collection-class.md)

**↳ RenderQueueItem**

## 목차

### 속성값

* [comp](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#comp)
* [elapsedSeconds](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#elapsedseconds)
* [logType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#logtype)
* [numOutputModules](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#numoutputmodules)
* [onStatusChanged](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#onstatuschanged)
* [outputModules](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#outputmodules)
* [render](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#render)
* [skipFrames](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#skipframes)
* [startTime](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#starttime)
* [status](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#status)
* [templates](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#templates)
* [timeSpanDuration](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#timespanduration)
* [timeSpanStart](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#timespanstart)

### 사용 가능한 함수

* [duplicate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#duplicate)
* [outputModule](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#outputmodule)
* [remove](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#remove)
* [saveAsTemplate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md#saveastemplate)

## 속성값

### comp <a id="comp"></a>

**● comp**: [`CompItem`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/compitem-class.md)

렌더링 대기열에 있는 컴포지션 객체를 가져옵니다.

### elapsedSeconds <a id="elapsedseconds"></a>

**● elapsedSeconds**: `number`

렌더링 된 컴포지션의 렌더링 시간을 가져옵니다. 렌더링이 되지 않았다면 null이 반환됩니다.

### logType <a id="logtype"></a>

**● logType**: [`LogType`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.logtype.md)

렌더링 할 때 로그 출력 방식을 설정하거나 가져옵니다.

### numOutputModules <a id="numoutputmodules"></a>

**● numOutputModules**: `number`

출력할 대상의 모듈 개수를 가져옵니다.

### onStatusChanged <a id="onstatuschanged"></a>

**● onStatusChanged**: `any`

렌더링 상태가 변경되었을 때 이벤트 처리기입니다.

### outputModules <a id="outputmodules"></a>

**● outputModules**: [`OMCollection`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/collection/omcollection-class.md)

모든 출력 모듈을 객체로 가져옵니다.

### render <a id="render"></a>

**● render**: [`RQItemStatus`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.rqitemstatus.md)

해당 레이어의 렌더링 대기상태를 설정하거나 가져옵니다.

### skipFrames <a id="skipframes"></a>

**● skipFrames**: `number`

테스트 렌더링 일때 혹은 빠른 렌더링을 위해 건너뛸 렌더링 프레임을 지정합니다. 비율입니다.

### startTime <a id="starttime"></a>

**● startTime**: `Date`

렌더링이 시작한 시간을 가져옵니다.

### status <a id="status"></a>

**● status**: [`RQItemStatus`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.rqitemstatus.md)

현재 렌더링 상태를 가져옵니다.

### templates <a id="templates"></a>

**● templates**: `string`_\[\]_

해당 컴포지션에서 사용 가능한 모든 렌더링 설정값을 배열로 가져옵니다.

### timeSpanDuration <a id="timespanduration"></a>

**● timeSpanDuration**: `number`

컴포지션의 지속 시간을 설정하거나 가져옵니다.

### timeSpanStart <a id="timespanstart"></a>

**● timeSpanStart**: `number`

렌더링이 시작될 컴포지션의 지속 시간을 설정합니다.

## 사용 가능한 함수

### duplicate <a id="duplicate"></a>

▸ **duplicate**\(\): [`RenderQueueItem`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/collection/renderqueueitem-class.md)

렌더링 대기열에 있는 컴포지션을 복제합니다.

**반환:** [`RenderQueueItem`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/collection/renderqueueitem-class.md)

### outputModule <a id="outputmodule"></a>

▸ **outputModule**\(index: `number`\): [`OutputModule`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/classes/outputmodule-class.md)

출력 모듈 객체를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| index | `number` | 가져올 모듈 위치입니다. |

**반환:** [`OutputModule`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/classes/outputmodule-class.md)

### remove <a id="remove"></a>

▸ **remove**\(\): `void`

렌더링 대기열에서 해당 아이템을 제거합니다.

### saveAsTemplate <a id="saveastemplate"></a>

▸ **saveAsTemplate**\(name: `string`\): `void`

사용자가 만든 렌더링 사전 설정 값을 저장합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 렌더링 사전 설정 값의 이름입니다. |

