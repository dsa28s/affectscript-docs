# PropertyBase 클래스

## 구조

**↳ PropertyBase**

↳ [PropertyGroup](/javascript-api/api/property/propertygroup-class.md)

## 목차

### 속성값

- [active](/javascript-api/api/property/propertybase-class.md#active)
- [canSetEnabled](/javascript-api/api/property/propertybase-class.md#cansetenabled)
- [elided](/javascript-api/api/property/propertybase-class.md#elided)
- [enabled](/javascript-api/api/property/propertybase-class.md#enabled)
- [isEffect](/javascript-api/api/property/propertybase-class.md#iseffect)
- [isMask](/javascript-api/api/property/propertybase-class.md#ismask)
- [isModified](/javascript-api/api/property/propertybase-class.md#ismodified)
- [matchName](/javascript-api/api/property/propertybase-class.md#matchname)
- [name](/javascript-api/api/property/propertybase-class.md#name)
- [parentProperty](/javascript-api/api/property/propertybase-class.md#parentproperty)
- [propertyDepth](/javascript-api/api/property/propertybase-class.md#propertydepth)
- [propertyIndex](/javascript-api/api/property/propertybase-class.md#propertyindex)
- [propertyType](/javascript-api/api/property/propertybase-class.md#propertytype)
- [selected](/javascript-api/api/property/propertybase-class.md#selected)

### 사용 가능한 함수

- [duplicated](/javascript-api/api/property/propertybase-class.md#duplicated)
- [moveTo](/javascript-api/api/property/propertybase-class.md#moveto)
- [property](/javascript-api/api/property/propertybase-class.md#property)
- [propertyGroup](/javascript-api/api/property/propertybase-class.md#propertygroup)
- [remove](/javascript-api/api/property/propertybase-class.md#remove)

---

## 속성값

<a id="active"></a>

### active

**● active**: _`boolean`_

해당 레이어의 가시성 여부를 가져옵니다.

---

<a id="cansetenabled"></a>

### canSetEnabled

**● canSetEnabled**: _`boolean`_

---

<a id="elided"></a>

### elided

**● elided**: _`boolean`_

레이어가 숨김 레이어인지 가져옵니다.

---

<a id="enabled"></a>

### enabled

**● enabled**: _`boolean`_

---

<a id="iseffect"></a>

### isEffect

**● isEffect**: _`boolean`_

속성값이 효과인지 여부를 가져옵니다.

---

<a id="ismask"></a>

### isMask

**● isMask**: _`boolean`_

속성값이 마스크인지 여부를 가져옵니다.

---

<a id="ismodified"></a>

### isModified

**● isModified**: _`boolean`_

속성값이 수정되었는지 확인합니다.

---

<a id="matchname"></a>

### matchName

**● matchName**: _`String`_

---

<a id="name"></a>

### name

**● name**: _`String`_

속성값의 이름을 가져오거나 설정합니다.

---

<a id="parentproperty"></a>

### parentProperty

**● parentProperty**: \_[PropertyGroup](/javascript-api/api/property/propertygroup-class.md)\_

해당 속성값이 어떤 속성 그룹에 포함되어있는지 가져옵니다.

---

<a id="propertydepth"></a>

### propertyDepth

**● propertyDepth**: _`number`_

---

<a id="propertyindex"></a>

### propertyIndex

**● propertyIndex**: _`number`_

속성 값의 위치를 가져옵니다.

---

<a id="propertytype"></a>

### propertyType

**● propertyType**: _[PropertyType](../enums/\_affectscript_.affectscriptapi.propertytype.md)\_

속성 값의 타입을 가져옵니다.

---

<a id="selected"></a>

### selected

**● selected**: _`boolean`_

해당 속성값을 선택하고 있는지 여부를 가져오거나 설정합니다.

---

## Methods

<a id="duplicated"></a>

### duplicated

▸ **duplicated**(): [PropertyBase](/javascript-api/api/property/propertybase-class.md)

설정값을 복제합니다.

**반환:** [PropertyBase](/javascript-api/api/property/propertybase-class.md)

---

<a id="moveto"></a>

### moveTo

▸ **moveTo**(newIndex: _`number`_): `void`

**매개변수:**

| Name     | Type     |
| -------- | -------- |
| newIndex | `number` |

---

<a id="property"></a>

### property

▸ **property**(param: _`number` \| `string`_): [Property](/javascript-api/api/property/property-class.md)

속성 값을 가져옵니다.

**매개변수:**

| Name  | Type                 | Description          |
| ----- | -------------------- | -------------------- |
| param | `number` \| `string` | 가져올 속성값입니다. |

**반환:** [Property](/javascript-api/api/property/property-class.md)

---

<a id="propertygroup"></a>

### propertyGroup

▸ **propertyGroup**(countUp?: _`number`_): [PropertyGroup](/javascript-api/api/property/propertygroup-class.md)

속성 값의 그룹 데이터를 가져옵니다.

**매개변수:**

| Name               | Type     | Description                                              |
| ------------------ | -------- | -------------------------------------------------------- |
| `Optional` countUp | `number` | 옵션값입니다. 상위 계층을 얼만큼 거슬러 올라갈지 입니다. |

**반환:** [PropertyGroup](/javascript-api/api/property/propertygroup-class.md)

---

<a id="remove"></a>

### remove

▸ **remove**(): `any`

속성 값을 제거합니다.

**반환:** `any`

---
