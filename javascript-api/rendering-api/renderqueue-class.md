# RenderQueue 클래스

## 구조

**↳ RenderQueue**

## 목차

### 속성값

* [items](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/render/renderqueue-class.md#items)
* [numItems](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/render/renderqueue-class.md#numitems)
* [rendering](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/render/renderqueue-class.md#rendering)

### 사용 가능한 함수

* [item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/render/renderqueue-class.md#item)
* [pauseRendering](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/render/renderqueue-class.md#pauserendering)
* [render](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/render/renderqueue-class.md#render)
* [showWindow](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/render/renderqueue-class.md#showwindow)
* [stopRendering](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/render/renderqueue-class.md#stoprendering)

## 속성값

### items <a id="items"></a>

**● items**: \_[RQItemCollection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/collection/rqitemcollection-class.md)\_

렌더링 대기열의 모든 항목을 가져옵니다.

### numItems <a id="numitems"></a>

**● numItems**: `number`

렌더링 대기열애 있는 항목의 개수를 가져옵니다.

### rendering <a id="rendering"></a>

**● rendering**: `boolean`

현재 렌더링 대기열이 렌더링 중인지 여부를 가져옵니다.

## 사용 가능한 함수

### item <a id="item"></a>

▸ **item**\(index: `number`\): [RenderQueueItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/collection/renderqueueitem-class.md)

렌더링 대기열의 항목을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| index | `number` | 가져올 항목입니다. |

**반환:** [RenderQueueItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/collection/renderqueueitem-class.md)

### pauseRendering <a id="pauserendering"></a>

▸ **pauseRendering**\(pause: `boolean`\): `void`

렌더링을 일시정지하거나 재개합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| pause | `boolean` | true일 경우 일시중지됩니다. |

### render <a id="render"></a>

▸ **render**\(\): `void`

렌더링합니다.

### showWindow <a id="showwindow"></a>

▸ **showWindow**\(\): `void`

### stopRendering <a id="stoprendering"></a>

▸ **stopRendering**\(\): `void`

렌더링을 중지합니다.

