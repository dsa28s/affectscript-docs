# CameraLayer 클래스

## 구조

↳ [Layer](layer-class.md)

**↳ CameraLayer**

## 목차

### 속성값

* [Effects](cameralayer-class.md#effects)
* [active](cameralayer-class.md#active)
* [comment](cameralayer-class.md#comment)
* [containingComp](cameralayer-class.md#containingcomp)
* [enabled](cameralayer-class.md#enabled)
* [hasVideo](cameralayer-class.md#hasvideo)
* [inPoint](cameralayer-class.md#inpoint)
* [index](cameralayer-class.md#index)
* [isNameSet](cameralayer-class.md#isnameset)
* [locked](cameralayer-class.md#locked)
* [name](cameralayer-class.md#name)
* [nullLayer](cameralayer-class.md#nulllayer)
* [outPoint](cameralayer-class.md#outpoint)
* [parent](cameralayer-class.md#parent)
* [selectedProperties](cameralayer-class.md#selectedproperties)
* [shy](cameralayer-class.md#shy)
* [solo](cameralayer-class.md#solo)
* [startTime](cameralayer-class.md#starttime)
* [stretch](cameralayer-class.md#stretch)
* [time](cameralayer-class.md#time)

### 사용 가능한 함수

* [activeAtTime](cameralayer-class.md#activeattime)
* [applyPreset](cameralayer-class.md#applypreset)
* [copyToComp](cameralayer-class.md#copytocomp)
* [duplicate](cameralayer-class.md#duplicate)
* [effect](cameralayer-class.md#effect)
* [mask](cameralayer-class.md#mask)
* [moveAfter](cameralayer-class.md#moveafter)
* [moveBefore](cameralayer-class.md#movebefore)
* [moveToBeginning](cameralayer-class.md#movetobeginning)
* [moveToEnd](cameralayer-class.md#movetoend)
* [property](cameralayer-class.md#property)
* [remove](cameralayer-class.md#remove)
* [setParentWithJump](cameralayer-class.md#setparentwithjump)

## 속성값

### Effects  <a id="effects"></a>

**● Effects**: \_[Property](../property-api/property-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[Effects](layer-class.md#effects)\_

### active  <a id="active"></a>

**● active**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[active](layer-class.md#active)\_

해당 레이어의 활성 여부를 가져옵니다.

### comment  <a id="comment"></a>

**● comment**: `string`

\_부모로부터 상속됨 : [Layer](layer-class.md).[comment](layer-class.md#comment)\_

레이어에 대한 설명을 설정하거나 가져옵니다.

### containingComp  <a id="containingcomp"></a>

**● containingComp**: \_[CompItem](../item-api/compitem-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[containingComp](layer-class.md#containingcomp)\_

해당 레이어를 포함하고 있는 컴포지션 객체를 가져옵니다.

### enabled  <a id="enabled"></a>

**● enabled**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[enabled](layer-class.md#enabled)\_

레이어의 사용가능 여부를 가져오거나 설정합니다.

### hasVideo  <a id="hasvideo"></a>

**● hasVideo**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[hasVideo](layer-class.md#hasvideo)\_

레이어가 비디오 레이어를 가지고 있는지 여부를 가져옵니다.

### inPoint  <a id="inpoint"></a>

**● inPoint**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[inPoint](layer-class.md#inpoint)\_

### index  <a id="index"></a>

**● index**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[index](layer-class.md#index)\_

레이어의 위치를 가져옵니다.

### isNameSet  <a id="isnameset"></a>

**● isNameSet**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[isNameSet](layer-class.md#isnameset)\_

### locked  <a id="locked"></a>

**● locked**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[locked](layer-class.md#locked)\_

레이어 잠금 여부를 가져오거나 설정합니다.

### name  <a id="name"></a>

**● name**: `string`

\_부모로부터 상속됨 : [Layer](layer-class.md).[name](layer-class.md#name)\_

레이어의 이름을 가져오거나 설정합니다.

### nullLayer  <a id="nulllayer"></a>

**● nullLayer**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[nullLayer](layer-class.md#nulllayer)\_

레이어가 Null 레이어인지 여부를 가져옵니다.

### outPoint  <a id="outpoint"></a>

**● outPoint**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[outPoint](layer-class.md#outpoint)\_

레이어의 끝날 시간을 설정하거나 가져옵니다.

### parent  <a id="parent"></a>

**● parent**: \_[Layer](layer-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[parent](layer-class.md#parent)\_

해당 레이어의 부모 레이어를 가져옵니다. 없다면 Null을 반환합니다.

### selectedProperties  <a id="selectedproperties"></a>

**● selectedProperties**: \_[PropertyGroup](../property-api/propertygroup-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[selectedProperties](layer-class.md#selectedproperties)\_

현재 레이어에 적용된 설정값을 모두 가져옵니다.

### shy  <a id="shy"></a>

**● shy**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[shy](layer-class.md#shy)\_

레이어 숨김 여부를 가져오거나 설정합니다.

### solo  <a id="solo"></a>

**● solo**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[solo](layer-class.md#solo)\_

### startTime  <a id="starttime"></a>

**● startTime**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[startTime](layer-class.md#starttime)\_

레이어의 시작 시간을 가져오거나 설정합니다.

### stretch  <a id="stretch"></a>

**● stretch**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[stretch](layer-class.md#stretch)\_

레이어가 시간 늘리기가 적용되어 있는지 여부를 가져오거나 설정합니다. \(100 : 보통\)

### time  <a id="time"></a>

**● time**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[time](layer-class.md#time)\_

레이어의 시간 값을 가져옵니다.

## 사용 가능한 함수

### activeAtTime  <a id="activeattime"></a>

▸ **activeAtTime**\(time: `number`\): `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[activeAtTime](layer-class.md#activeattime)\_

특정 시간에 레이어가 활성화 되어있는지 여부를 확인합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| time | `number` | 특정 시간입니다. |

**반환:** `boolean`

### applyPreset  <a id="applypreset"></a>

▸ **applyPreset**\(presetName: `string`\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[applyPreset](layer-class.md#applypreset)\_

레이어에 프리셋을 적용합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| presetName | `string` | 적용할 프리셋 이름입니다. |

### copyToComp  <a id="copytocomp"></a>

▸ **copyToComp**\(intoComp: \_[CompItem](../item-api/compitem-class.md)\_\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[copyToComp](layer-class.md#copytocomp)\_

컴포지션에 레이어를 복사합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| intoComp | [CompItem](../item-api/compitem-class.md) | 복사할 컴포지션 대상입니다. |

### duplicate  <a id="duplicate"></a>

▸ **duplicate**\(\): [AVLayer](avlayer-class.md)

\_부모로부터 상속됨 : [Layer](layer-class.md).[duplicate](layer-class.md#duplicate)\_

레이어를 복제합니다.

**반환:** [AVLayer](avlayer-class.md)

### effect  <a id="effect"></a>

▸ **effect**\(effectName: `string`\): `function`

\_부모로부터 상속됨 : [Layer](layer-class.md).[effect](layer-class.md#effect)\_

레이어에 적용된 효과를 가져온 후, 설정값을 가져오거나 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| effectName | `string` |  |

**반환:** `function`

### mask  <a id="mask"></a>

▸ **mask**\(index: `number`\): [MaskPropertyGroup](../property-api/maskpropertygroup-class.md)

\_부모로부터 상속됨 : [Layer](layer-class.md).[mask](layer-class.md#mask)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| index | `number` |

**반환:** [MaskPropertyGroup](../property-api/maskpropertygroup-class.md)

### moveAfter  <a id="moveafter"></a>

▸ **moveAfter**\(layer: \_[Layer](layer-class.md)\_\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[moveAfter](layer-class.md#moveafter)\_

다음 레이어로 이동합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| layer | [Layer](layer-class.md) | 다음 레이어로 이동하기 전 레이어 객체입니다. |

### moveBefore  <a id="movebefore"></a>

▸ **moveBefore**\(layer: \_[Layer](layer-class.md)\_\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[moveBefore](layer-class.md#movebefore)\_

이전 레이어로 이동합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| layer | [Layer](layer-class.md) | 이전 레이어로 이동하기 전 레이어 객체입니다. |

### moveToBeginning  <a id="movetobeginning"></a>

▸ **moveToBeginning**\(\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[moveToBeginning](layer-class.md#movetobeginning)\_

처음 레이어로 이동합니다.

### moveToEnd  <a id="movetoend"></a>

▸ **moveToEnd**\(\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[moveToEnd](layer-class.md#movetoend)\_

마지막 레이어로 이동합니다.

### property  <a id="property"></a>

▸ **property**\(propertyName: `String`\): [Property](../property-api/property-class.md)

\_부모로부터 상속됨 : [Layer](layer-class.md).[property](layer-class.md#property)\_

레이어의 속성 그룹 혹은 값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| propertyName | `String` | 속성 이름입니다. |

**반환:** [Property](../property-api/property-class.md)

### remove  <a id="remove"></a>

▸ **remove**\(\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[remove](layer-class.md#remove)\_

레이어를 제거합니다.

### setParentWithJump  <a id="setparentwithjump"></a>

▸ **setParentWithJump**\(newParent?: \_[Layer](layer-class.md)\_\): `any`

\_부모로부터 상속됨 : [Layer](layer-class.md).[setParentWithJump](layer-class.md#setparentwithjump)\_

해당 레이어의 새로운 부모 레이어를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` newParent | [Layer](layer-class.md) | 새로 할당할 부모 레이어 객체입니다. |

**반환:** `any`

