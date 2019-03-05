# PropertyBase 클래스

## 구조

**PropertyBase**

↳ [PropertyGroup](propertygroup-class.md)

    ↳ [Property](property-class.md)

    ↳ [MaskPropertyGroup](maskpropertygroup-class.md)

## 목차

### 속성값

* [active](propertybase-class.md#active)
* [canSetEnabled](propertybase-class.md#cansetenabled)
* [elided](propertybase-class.md#elided)
* [enabled](propertybase-class.md#enabled)
* [isEffect](propertybase-class.md#iseffect)
* [isMask](propertybase-class.md#ismask)
* [isModified](propertybase-class.md#ismodified)
* [matchName](propertybase-class.md#matchname)
* [name](propertybase-class.md#name)
* [parentProperty](propertybase-class.md#parentproperty)
* [propertyDepth](propertybase-class.md#propertydepth)
* [propertyIndex](propertybase-class.md#propertyindex)
* [propertyType](propertybase-class.md#propertytype)
* [selected](propertybase-class.md#selected)

### 사용 가능한 함수

* [duplicated](propertybase-class.md#duplicated)
* [moveTo](propertybase-class.md#moveto)
* [property](propertybase-class.md#property)
* [propertyGroup](propertybase-class.md#propertygroup)
* [remove](propertybase-class.md#remove)

## 속성값

### active   <a id="active"></a>

**● active**: `boolean`

해당 레이어의 가시성 여부를 가져옵니다.

### canSetEnabled   <a id="cansetenabled"></a>

**● canSetEnabled**: `boolean`

### elided   <a id="elided"></a>

**● elided**: `boolean`

레이어가 숨김 레이어인지 가져옵니다.

### enabled   <a id="enabled"></a>

**● enabled**: `boolean`

### isEffect   <a id="iseffect"></a>

**● isEffect**: `boolean`

속성값이 효과인지 여부를 가져옵니다.

### isMask   <a id="ismask"></a>

**● isMask**: `boolean`

속성값이 마스크인지 여부를 가져옵니다.

### isModified   <a id="ismodified"></a>

**● isModified**: `boolean`

속성값이 수정되었는지 확인합니다.

### matchName   <a id="matchname"></a>

**● matchName**: `String`

### name   <a id="name"></a>

**● name**: `String`

속성값의 이름을 가져오거나 설정합니다.

### parentProperty   <a id="parentproperty"></a>

**● parentProperty**: \_[PropertyGroup](propertygroup-class.md)\_

해당 속성값이 어떤 속성 그룹에 포함되어있는지 가져옵니다.

### propertyDepth   <a id="propertydepth"></a>

**● propertyDepth**: `number`

### propertyIndex   <a id="propertyindex"></a>

**● propertyIndex**: `number`

속성 값의 위치를 가져옵니다.

### propertyType   <a id="propertytype"></a>

**● propertyType**: [PropertyType](../etc/enum/_affectscript_.affectscriptapi.propertytype.md)

속성 값의 타입을 가져옵니다.

### selected   <a id="selected"></a>

**● selected**: `boolean`

해당 속성값을 선택하고 있는지 여부를 가져오거나 설정합니다.

## Methods

### duplicated   <a id="duplicated"></a>

▸ **duplicated**\(\): [PropertyBase](propertybase-class.md)

설정값을 복제합니다.

**반환:** [PropertyBase](propertybase-class.md)

### moveTo   <a id="moveto"></a>

▸ **moveTo**\(newIndex: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| newIndex | `number` |

### property   <a id="property"></a>

▸ **property**\(param: `number` _\|_ `string`\): [Property](property-class.md)

속성 값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| param | `number` \| `string` | 가져올 속성값입니다. |

**반환:** [Property](property-class.md)

### propertyGroup   <a id="propertygroup"></a>

▸ **propertyGroup**\(countUp?: `number`\): [PropertyGroup](propertygroup-class.md)

속성 값의 그룹 데이터를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` countUp | `number` | 옵션값입니다. 상위 계층을 얼만큼 거슬러 올라갈지 입니다. |

**반환:** [PropertyGroup](propertygroup-class.md)

### remove   <a id="remove"></a>

▸ **remove**\(\): `any`

속성 값을 제거합니다.

**반환:** `any`

