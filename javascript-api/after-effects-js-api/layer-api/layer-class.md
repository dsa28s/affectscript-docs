# Layer 클래스

## 구조

**↳ Layer**

↳ [AVLayer](avlayer-class.md)

↳ [CameraLayer](cameralayer-class.md)

## 목차

### 속성값

* [Effects](layer-class.md#effects)
* [active](layer-class.md#active)
* [comment](layer-class.md#comment)
* [containingComp](layer-class.md#containingcomp)
* [enabled](layer-class.md#enabled)
* [hasVideo](layer-class.md#hasvideo)
* [inPoint](layer-class.md#inpoint)
* [index](layer-class.md#index)
* [isNameSet](layer-class.md#isnameset)
* [locked](layer-class.md#locked)
* [name](layer-class.md#name)
* [nullLayer](layer-class.md#nulllayer)
* [outPoint](layer-class.md#outpoint)
* [parent](layer-class.md#parent)
* [selectedProperties](layer-class.md#selectedproperties)
* [shy](layer-class.md#shy)
* [solo](layer-class.md#solo)
* [startTime](layer-class.md#starttime)
* [stretch](layer-class.md#stretch)
* [time](layer-class.md#time)

### 사용 가능한 함수

* [activeAtTime](layer-class.md#activeattime)
* [applyPreset](layer-class.md#applypreset)
* [copyToComp](layer-class.md#copytocomp)
* [duplicate](layer-class.md#duplicate)
* [effect](layer-class.md#effect)
* [mask](layer-class.md#mask)
* [moveAfter](layer-class.md#moveafter)
* [moveBefore](layer-class.md#movebefore)
* [moveToBeginning](layer-class.md#movetobeginning)
* [moveToEnd](layer-class.md#movetoend)
* [property](layer-class.md#property)
* [remove](layer-class.md#remove)
* [setParentWithJump](layer-class.md#setparentwithjump)

## 속성값

### Effects  <a id="effects"></a>

**● Effects**: \_[Property](../property-api/property-class.md)\_

### active  <a id="active"></a>

**● active**: `boolean`

해당 레이어의 활성 여부를 가져옵니다.

### comment  <a id="comment"></a>

**● comment**: `string`

레이어에 대한 설명을 설정하거나 가져옵니다.

### containingComp  <a id="containingcomp"></a>

**● containingComp**: \_[CompItem](../item-api/compitem-class.md)\_

해당 레이어를 포함하고 있는 컴포지션 객체를 가져옵니다.

### enabled  <a id="enabled"></a>

**● enabled**: `boolean`

레이어의 사용가능 여부를 가져오거나 설정합니다.

### hasVideo  <a id="hasvideo"></a>

**● hasVideo**: `boolean`

레이어가 비디오 레이어를 가지고 있는지 여부를 가져옵니다.

### inPoint  <a id="inpoint"></a>

**● inPoint**: `number`

### index  <a id="index"></a>

**● index**: `number`

레이어의 위치를 가져옵니다.

### isNameSet  <a id="isnameset"></a>

**● isNameSet**: `boolean`

### locked  <a id="locked"></a>

**● locked**: `boolean`

레이어 잠금 여부를 가져오거나 설정합니다.

### name  <a id="name"></a>

**● name**: `string`

레이어의 이름을 가져오거나 설정합니다.

### nullLayer  <a id="nulllayer"></a>

**● nullLayer**: `boolean`

레이어가 Null 레이어인지 여부를 가져옵니다.

### outPoint  <a id="outpoint"></a>

**● outPoint**: `number`

레이어의 끝날 시간을 설정하거나 가져옵니다.

### parent  <a id="parent"></a>

**● parent**: \_[Layer](layer-class.md)\_

해당 레이어의 부모 레이어를 가져옵니다. 없다면 Null을 반환합니다.

### selectedProperties  <a id="selectedproperties"></a>

**● selectedProperties**: \_[PropertyGroup](../property-api/propertygroup-class.md)\_

현재 레이어에 적용된 설정값을 모두 가져옵니다.

### shy  <a id="shy"></a>

**● shy**: `boolean`

레이어 숨김 여부를 가져오거나 설정합니다.

### solo  <a id="solo"></a>

**● solo**: `boolean`

### startTime  <a id="starttime"></a>

**● startTime**: `number`

레이어의 시작 시간을 가져오거나 설정합니다.

### stretch  <a id="stretch"></a>

**● stretch**: `number`

레이어가 시간 늘리기가 적용되어 있는지 여부를 가져오거나 설정합니다. \(100 : 보통\)

### time  <a id="time"></a>

**● time**: `number`

레이어의 시간 값을 가져옵니다.

## 사용 가능한 함수

### activeAtTime  <a id="activeattime"></a>

▸ **activeAtTime**\(time: `number`\): `boolean`

특정 시간에 레이어가 활성화 되어있는지 여부를 확인합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| time | `number` | 특정 시간입니다. |

**반환:** `boolean`

### applyPreset  <a id="applypreset"></a>

▸ **applyPreset**\(presetName: `string`\): `void`

레이어에 프리셋을 적용합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| presetName | `string` | 적용할 프리셋 이름입니다. |

### copyToComp  <a id="copytocomp"></a>

▸ **copyToComp**\(intoComp: \_[CompItem](../item-api/compitem-class.md)\_\): `void`

컴포지션에 레이어를 복사합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| intoComp | [CompItem](../item-api/compitem-class.md) | 복사할 컴포지션 대상입니다. |

### duplicate  <a id="duplicate"></a>

▸ **duplicate**\(\): [AVLayer](avlayer-class.md)

레이어를 복제합니다.

**반환:** [AVLayer](avlayer-class.md)

### effect  <a id="effect"></a>

▸ **effect**\(effectName: `string`\): `function`

레이어에 적용된 효과를 가져온 후, 설정값을 가져오거나 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| effectName | `string` |  |

**반환:** `function`

### mask  <a id="mask"></a>

▸ **mask**\(index: `number`\): [MaskPropertyGroup](../property-api/maskpropertygroup-class.md)

**매개변수:**

| Name | Type |
| :--- | :--- |
| index | `number` |

**반환:** [MaskPropertyGroup](../property-api/maskpropertygroup-class.md)

### moveAfter  <a id="moveafter"></a>

▸ **moveAfter**\(layer: \_[Layer](layer-class.md)\_\): `void`

다음 레이어로 이동합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| layer | [Layer](layer-class.md) | 다음 레이어로 이동하기 전 레이어 객체입니다. |

### moveBefore  <a id="movebefore"></a>

▸ **moveBefore**\(layer: \_[Layer](layer-class.md)\_\): `void`

이전 레이어로 이동합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| layer | [Layer](layer-class.md) | 이전 레이어로 이동하기 전 레이어 객체입니다. |

### moveToBeginning  <a id="movetobeginning"></a>

▸ **moveToBeginning**\(\): `void`

처음 레이어로 이동합니다.

### moveToEnd  <a id="movetoend"></a>

▸ **moveToEnd**\(\): `void`

마지막 레이어로 이동합니다.

### property  <a id="property"></a>

▸ **property**\(propertyName: `String`\): [Property](../property-api/property-class.md)

레이어의 속성 그룹 혹은 값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| propertyName | `String` | 속성 이름입니다. |

**반환:** [Property](../property-api/property-class.md)

### remove  <a id="remove"></a>

▸ **remove**\(\): `void`

레이어를 제거합니다.

### setParentWithJump  <a id="setparentwithjump"></a>

▸ **setParentWithJump**\(newParent?: \_[Layer](layer-class.md)\_\): `any`

해당 레이어의 새로운 부모 레이어를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` newParent | [Layer](layer-class.md) | 새로 할당할 부모 레이어 객체입니다. |

**반환:** `any`

