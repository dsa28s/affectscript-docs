# RenderQueue 클래스

## 구조

**↳ RenderQueue**

## 목차

### 속성값

- [items](/javascript-api/api/render/renderqueue-class.md#items)
- [numItems](/javascript-api/api/render/renderqueue-class.md#numitems)
- [rendering](/javascript-api/api/render/renderqueue-class.md#rendering)

### 사용 가능한 함수

- [item](/javascript-api/api/render/renderqueue-class.md#item)
- [pauseRendering](/javascript-api/api/render/renderqueue-class.md#pauserendering)
- [render](/javascript-api/api/render/renderqueue-class.md#render)
- [showWindow](/javascript-api/api/render/renderqueue-class.md#showwindow)
- [stopRendering](/javascript-api/api/render/renderqueue-class.md#stoprendering)

---

## 속성값

<a id="items"></a>

### items

**● items**: \_[RQItemCollection](/javascript-api/api/collection/rqitemcollection-class.md)\_

렌더링 대기열의 모든 항목을 가져옵니다.

---

<a id="numitems"></a>

### numItems

**● numItems**: _`number`_

렌더링 대기열애 있는 항목의 개수를 가져옵니다.

---

<a id="rendering"></a>

### rendering

**● rendering**: _`boolean`_

현재 렌더링 대기열이 렌더링 중인지 여부를 가져옵니다.

---

## 사용 가능한 함수

<a id="item"></a>

### item

▸ **item**(index: _`number`_): [RenderQueueItem](/javascript-api/api/collection/renderqueueitem-class.md)

렌더링 대기열의 항목을 가져옵니다.

**매개변수:**

| Name  | Type     | Description        |
| ----- | -------- | ------------------ |
| index | `number` | 가져올 항목입니다. |

**반환:** [RenderQueueItem](/javascript-api/api/collection/renderqueueitem-class.md)

---

<a id="pauserendering"></a>

### pauseRendering

▸ **pauseRendering**(pause: _`boolean`_): `void`

렌더링을 일시정지하거나 재개합니다.

**매개변수:**

| Name  | Type      | Description                 |
| ----- | --------- | --------------------------- |
| pause | `boolean` | true일 경우 일시중지됩니다. |

---

<a id="render"></a>

### render

▸ **render**(): `void`

렌더링합니다.

---

<a id="showwindow"></a>

### showWindow

▸ **showWindow**(): `void`

---

<a id="stoprendering"></a>

### stopRendering

▸ **stopRendering**(): `void`

렌더링을 중지합니다.

---
