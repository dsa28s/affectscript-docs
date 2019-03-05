# Layer 클래스

## 구조

**↳ Layer**

↳ [AVLayer](/javascript-api/api/layer/avlayer-class.md)

↳ [CameraLayer](/javascript-api/api/layer/cameralayer-class.md)

## 목차

### 속성값

- [Effects](/javascript-api/api/layer/layer-class.md#effects)
- [active](/javascript-api/api/layer/layer-class.md#active)
- [comment](/javascript-api/api/layer/layer-class.md#comment)
- [containingComp](/javascript-api/api/layer/layer-class.md#containingcomp)
- [enabled](/javascript-api/api/layer/layer-class.md#enabled)
- [hasVideo](/javascript-api/api/layer/layer-class.md#hasvideo)
- [inPoint](/javascript-api/api/layer/layer-class.md#inpoint)
- [index](/javascript-api/api/layer/layer-class.md#index)
- [isNameSet](/javascript-api/api/layer/layer-class.md#isnameset)
- [locked](/javascript-api/api/layer/layer-class.md#locked)
- [name](/javascript-api/api/layer/layer-class.md#name)
- [nullLayer](/javascript-api/api/layer/layer-class.md#nulllayer)
- [outPoint](/javascript-api/api/layer/layer-class.md#outpoint)
- [parent](/javascript-api/api/layer/layer-class.md#parent)
- [selectedProperties](/javascript-api/api/layer/layer-class.md#selectedproperties)
- [shy](/javascript-api/api/layer/layer-class.md#shy)
- [solo](/javascript-api/api/layer/layer-class.md#solo)
- [startTime](/javascript-api/api/layer/layer-class.md#starttime)
- [stretch](/javascript-api/api/layer/layer-class.md#stretch)
- [time](/javascript-api/api/layer/layer-class.md#time)

### 사용 가능한 함수

- [activeAtTime](/javascript-api/api/layer/layer-class.md#activeattime)
- [applyPreset](/javascript-api/api/layer/layer-class.md#applypreset)
- [copyToComp](/javascript-api/api/layer/layer-class.md#copytocomp)
- [duplicate](/javascript-api/api/layer/layer-class.md#duplicate)
- [effect](/javascript-api/api/layer/layer-class.md#effect)
- [mask](/javascript-api/api/layer/layer-class.md#mask)
- [moveAfter](/javascript-api/api/layer/layer-class.md#moveafter)
- [moveBefore](/javascript-api/api/layer/layer-class.md#movebefore)
- [moveToBeginning](/javascript-api/api/layer/layer-class.md#movetobeginning)
- [moveToEnd](/javascript-api/api/layer/layer-class.md#movetoend)
- [property](/javascript-api/api/layer/layer-class.md#property)
- [remove](/javascript-api/api/layer/layer-class.md#remove)
- [setParentWithJump](/javascript-api/api/layer/layer-class.md#setparentwithjump)

---

## 속성값

<a id="effects"></a>

### Effects

**● Effects**: \_[Property](/javascript-api/api/property/property-class.md)\_

---

<a id="active"></a>

### active

**● active**: _`boolean`_

해당 레이어의 활성 여부를 가져옵니다.

---

<a id="comment"></a>

### comment

**● comment**: _`string`_

레이어에 대한 설명을 설정하거나 가져옵니다.

---

<a id="containingcomp"></a>

### containingComp

**● containingComp**: \_[CompItem](/javascript-api/api/item/compitem-class.md)\_

해당 레이어를 포함하고 있는 컴포지션 객체를 가져옵니다.

---

<a id="enabled"></a>

### enabled

**● enabled**: _`boolean`_

레이어의 사용가능 여부를 가져오거나 설정합니다.

---

<a id="hasvideo"></a>

### hasVideo

**● hasVideo**: _`boolean`_

레이어가 비디오 레이어를 가지고 있는지 여부를 가져옵니다.

---

<a id="inpoint"></a>

### inPoint

**● inPoint**: _`number`_

---

<a id="index"></a>

### index

**● index**: _`number`_

레이어의 위치를 가져옵니다.

---

<a id="isnameset"></a>

### isNameSet

**● isNameSet**: _`boolean`_

---

<a id="locked"></a>

### locked

**● locked**: _`boolean`_

레이어 잠금 여부를 가져오거나 설정합니다.

---

<a id="name"></a>

### name

**● name**: _`string`_

레이어의 이름을 가져오거나 설정합니다.

---

<a id="nulllayer"></a>

### nullLayer

**● nullLayer**: _`boolean`_

레이어가 Null 레이어인지 여부를 가져옵니다.

---

<a id="outpoint"></a>

### outPoint

**● outPoint**: _`number`_

레이어의 끝날 시간을 설정하거나 가져옵니다.

---

<a id="parent"></a>

### parent

**● parent**: \_[Layer](/javascript-api/api/layer/layer-class.md)\_

해당 레이어의 부모 레이어를 가져옵니다. 없다면 Null을 반환합니다.

---

<a id="selectedproperties"></a>

### selectedProperties

**● selectedProperties**: \_[PropertyGroup](/javascript-api/api/property/propertygroup-class.md)\_

현재 레이어에 적용된 설정값을 모두 가져옵니다.

---

<a id="shy"></a>

### shy

**● shy**: _`boolean`_

레이어 숨김 여부를 가져오거나 설정합니다.

---

<a id="solo"></a>

### solo

**● solo**: _`boolean`_

---

<a id="starttime"></a>

### startTime

**● startTime**: _`number`_

레이어의 시작 시간을 가져오거나 설정합니다.

---

<a id="stretch"></a>

### stretch

**● stretch**: _`number`_

레이어가 시간 늘리기가 적용되어 있는지 여부를 가져오거나 설정합니다. (100 : 보통)

---

<a id="time"></a>

### time

**● time**: _`number`_

레이어의 시간 값을 가져옵니다.

---

## 사용 가능한 함수

<a id="activeattime"></a>

### activeAtTime

▸ **activeAtTime**(time: _`number`_): `boolean`

특정 시간에 레이어가 활성화 되어있는지 여부를 확인합니다.

**매개변수:**

| Name | Type     | Description      |
| ---- | -------- | ---------------- |
| time | `number` | 특정 시간입니다. |

**반환:** `boolean`

---

<a id="applypreset"></a>

### applyPreset

▸ **applyPreset**(presetName: _`string`_): `void`

레이어에 프리셋을 적용합니다.

**매개변수:**

| Name       | Type     | Description               |
| ---------- | -------- | ------------------------- |
| presetName | `string` | 적용할 프리셋 이름입니다. |

---

<a id="copytocomp"></a>

### copyToComp

▸ **copyToComp**(intoComp: \_[CompItem](/javascript-api/api/item/compitem-class.md)\_): `void`

컴포지션에 레이어를 복사합니다.

**매개변수:**

| Name     | Type                                               | Description                 |
| -------- | -------------------------------------------------- | --------------------------- |
| intoComp | [CompItem](/javascript-api/api/item/compitem-class.md) | 복사할 컴포지션 대상입니다. |

---

<a id="duplicate"></a>

### duplicate

▸ **duplicate**(): [AVLayer](/javascript-api/api/layer/avlayer-class.md)

레이어를 복제합니다.

**반환:** [AVLayer](/javascript-api/api/layer/avlayer-class.md)

---

<a id="effect"></a>

### effect

▸ **effect**(effectName: _`string`_): `function`

레이어에 적용된 효과를 가져온 후, 설정값을 가져오거나 설정합니다.

**매개변수:**

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| effectName | `string` |             |

**반환:** `function`

---

<a id="mask"></a>

### mask

▸ **mask**(index: _`number`_): [MaskPropertyGroup](/javascript-api/api/property/maskpropertygroup-class.md)

**매개변수:**

| Name  | Type     |
| ----- | -------- |
| index | `number` |

**반환:** [MaskPropertyGroup](/javascript-api/api/property/maskpropertygroup-class.md)

---

<a id="moveafter"></a>

### moveAfter

▸ **moveAfter**(layer: \_[Layer](/javascript-api/api/layer/layer-class.md)\_): `void`

다음 레이어로 이동합니다.

**매개변수:**

| Name  | Type                                          | Description                                  |
| ----- | --------------------------------------------- | -------------------------------------------- |
| layer | [Layer](/javascript-api/api/layer/layer-class.md) | 다음 레이어로 이동하기 전 레이어 객체입니다. |

---

<a id="movebefore"></a>

### moveBefore

▸ **moveBefore**(layer: \_[Layer](/javascript-api/api/layer/layer-class.md)\_): `void`

이전 레이어로 이동합니다.

**매개변수:**

| Name  | Type                                          | Description                                  |
| ----- | --------------------------------------------- | -------------------------------------------- |
| layer | [Layer](/javascript-api/api/layer/layer-class.md) | 이전 레이어로 이동하기 전 레이어 객체입니다. |

---

<a id="movetobeginning"></a>

### moveToBeginning

▸ **moveToBeginning**(): `void`

처음 레이어로 이동합니다.

---

<a id="movetoend"></a>

### moveToEnd

▸ **moveToEnd**(): `void`

마지막 레이어로 이동합니다.

---

<a id="property"></a>

### property

▸ **property**(propertyName: _`String`_): [Property](/javascript-api/api/property/property-class.md)

레이어의 속성 그룹 혹은 값을 가져옵니다.

**매개변수:**

| Name         | Type     | Description      |
| ------------ | -------- | ---------------- |
| propertyName | `String` | 속성 이름입니다. |

**반환:** [Property](/javascript-api/api/property/property-class.md)

---

<a id="remove"></a>

### remove

▸ **remove**(): `void`

레이어를 제거합니다.

---

<a id="setparentwithjump"></a>

### setParentWithJump

▸ **setParentWithJump**(newParent?: \_[Layer](/javascript-api/api/layer/layer-class.md)\_): `any`

해당 레이어의 새로운 부모 레이어를 설정합니다.

**매개변수:**

| Name                 | Type                                          | Description                         |
| -------------------- | --------------------------------------------- | ----------------------------------- |
| `Optional` newParent | [Layer](/javascript-api/api/layer/layer-class.md) | 새로 할당할 부모 레이어 객체입니다. |

**반환:** `any`

---
