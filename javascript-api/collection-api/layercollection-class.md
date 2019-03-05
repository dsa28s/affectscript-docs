# LayerCollection 클래스

## 구조

[Collection](collection-class.md)

**↳ LayerCollection**

## 목차

### 사용 가능한 함수

* [add](layercollection-class.md#add)
* [addBoxText](layercollection-class.md#addboxtext)
* [addCamera](layercollection-class.md#addcamera)
* [addLight](layercollection-class.md#addlight)
* [addNull](layercollection-class.md#addnull)
* [addShape](layercollection-class.md#addshape)
* [addSolid](layercollection-class.md#addsolid)
* [addText](layercollection-class.md#addtext)
* [byName](layercollection-class.md#byname)
* [precompose](layercollection-class.md#precompose)

## 사용 가능한 함수

### add <a id="add"></a>

▸ **add**\(item: [_AVItem_](../item-api/avitem-class.md), duration?: `number`\): [`AVLayer`](../layer-api/avlayer-class.md)

레이어에 아이템을 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| item | [`AVItem`](../item-api/avitem-class.md) | 추가할 아이템입니다. \(예를들어 컴포지션, 솔리드, 카메라 등이 될 수 있습니다.\) |
| `Optional` duration | `number` | 추가한 아이템의 길이입니다. \(단위 : 초\)\) |

**반환:** [`AVLayer`](../layer-api/avlayer-class.md)

### addBoxText <a id="addboxtext"></a>

▸ **addBoxText**\(sourceText?: `string`\): [`TextLayer`](../layer-api/textlayer-class.md)

문단이 있는 새로운 텍스트 레이어를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` sourceText | `string` | 추가할 텍스트를 입력합니다. \(옵션값\) |

**반환:** [`TextLayer`](../layer-api/textlayer-class.md)

### addCamera <a id="addcamera"></a>

▸ **addCamera**\(name: `string`, centerPoint: `number`_\[\]_\): [`CameraLayer`](../layer-api/cameralayer-class.md)

카메라 레이어를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 카메라 레이어의 이름입니다. |
| centerPoint | `number`\[\] | 형태로 카메라 위치를 지정합니다. |

**반환:** [`CameraLayer`](../layer-api/cameralayer-class.md)

### addLight <a id="addlight"></a>

▸ **addLight**\(name: `string`, centerPoint: `number`_\[\]_\): [`LightLayer`](../layer-api/lightlayer-class.md)

라이트 레이어를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 라이트 레이어의 이름입니다. |
| centerPoint | `number`\[\] | 형태로 라이트 위치로 지정합니다. |

**반환:** [`LightLayer`](../layer-api/lightlayer-class.md)

### addNull <a id="addnull"></a>

▸ **addNull**\(duration?: `number`\): [`AVLayer`](../layer-api/avlayer-class.md)

Null 레이어를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` duration | `number` | 레이어의 길이를 입력합니다. \(단위 : 초, 옵션값\) |

**반환:** [`AVLayer`](../layer-api/avlayer-class.md)

### addShape <a id="addshape"></a>

▸ **addShape**\(\): [`ShapeLayer`](../layer-api/shapelayer-class.md)

도형 레이어를 추가합니다.

**반환:** [`ShapeLayer`](../layer-api/shapelayer-class.md)

### addSolid <a id="addsolid"></a>

▸ **addSolid**\(color: `number`_\[\]_, name: `string`, width: `number`, height: `number`, pixelAspect: `number`, duration?: `number`\): [`AVLayer`](../layer-api/avlayer-class.md)

단색 레이어를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| color | `number`\[\] | 형태로 지정할 색깔입니다. |
| name | `string` | 단색 레이어의 이름입니다. |
| width | `number` | 레이어의 가로 크기입니다. |
| height | `number` | 레이어의 세로 크기입니다. |
| pixelAspect | `number` | 레이어의 픽셀 비율이며, 기본값은 100 입니다. |
| `Optional` duration | `number` | 레이어의 길이입니다. \(옵션값\) |

**반환:** [`AVLayer`](../layer-api/avlayer-class.md)

### addText <a id="addtext"></a>

▸ **addText**\(sourceText: `string`\): [`TextLayer`](../layer-api/textlayer-class.md)

텍스트 레이어를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| sourceText | `string` | 추가할 텍스트입니다. |

**반환:** [`TextLayer`](../layer-api/textlayer-class.md)

### byName <a id="byname"></a>

▸ **byName**\(name: `string`\): [`Layer`](../layer-api/layer-class.md)

특정 이름을 가진 최상위 레이어를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 레이어의 이름입니다. |

**반환:** [`Layer`](../layer-api/layer-class.md)

### precompose <a id="precompose"></a>

▸ **precompose**\(layerIndicies: `number`_\[\]_, name: `string`, moveAllAttributes: `boolean`\): [`CompItem`](../item-api/compitem-class.md)

설정한 레이어들을 하나의 컴포지션으로 합칩니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| layerIndicies | `number`\[\] | 합칠 레이어의 인텍스 값들입니다. \(배열 형태\) |
| name | `string` | 새로 만들어질 컴포지션 이름입니다. |
| moveAllAttributes | `boolean` | 컴포지션을 만들 때에 모든 레이어가 시간에 맞출지 여부입니다. |

**반환:** [`CompItem`](../item-api/compitem-class.md)

