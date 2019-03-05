# PropertyGroup 클래스

## 구조

[PropertyBase](propertybase-class.md)

**↳ PropertyGroup**

&nbsp;&nbsp;&nbsp;&nbsp;↳ [Property](property-class.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [MaskPropertyGroup](maskpropertygroup-class.md)

## 목차

### 속성값

* [active](propertygroup-class.md#active)
* [canSetEnabled](propertygroup-class.md#cansetenabled)
* [elided](propertygroup-class.md#elided)
* [enabled](propertygroup-class.md#enabled)
* [isEffect](propertygroup-class.md#iseffect)
* [isMask](propertygroup-class.md#ismask)
* [isModified](propertygroup-class.md#ismodified)
* [matchName](propertygroup-class.md#matchname)
* [name](propertygroup-class.md#name)
* [numProperties](propertygroup-class.md#numproperties)
* [parentProperty](propertygroup-class.md#parentproperty)
* [propertyDepth](propertygroup-class.md#propertydepth)
* [propertyIndex](propertygroup-class.md#propertyindex)
* [propertyType](propertygroup-class.md#propertytype)
* [selected](propertygroup-class.md#selected)

### 사용 가능한 함수

* [addProperty](propertygroup-class.md#addproperty)
* [canAddProperty](propertygroup-class.md#canaddproperty)
* [duplicated](propertygroup-class.md#duplicated)
* [moveTo](propertygroup-class.md#moveto)
* [property](propertygroup-class.md#property)
* [propertyGroup](propertygroup-class.md#propertygroup)
* [remove](propertygroup-class.md#remove)

## 속성값

### active  <a id="active"></a>

**● active**: `boolean`

[PropertyBase](propertybase-class.md).[active](propertybase-class.md#active)\_

해당 레이어의 가시성 여부를 가져옵니다.

### canSetEnabled  <a id="cansetenabled"></a>

**● canSetEnabled**: `boolean`

[PropertyBase](propertybase-class.md).[canSetEnabled](propertybase-class.md#cansetenabled)\_

### elided  <a id="elided"></a>

**● elided**: `boolean`

[PropertyBase](propertybase-class.md).[elided](propertybase-class.md#elided)\_

레이어가 숨김 레이어인지 가져옵니다.

### enabled  <a id="enabled"></a>

**● enabled**: `boolean`

[PropertyBase](propertybase-class.md).[enabled](propertybase-class.md#enabled)\_

### isEffect  <a id="iseffect"></a>

**● isEffect**: `boolean`

[PropertyBase](propertybase-class.md).[isEffect](propertybase-class.md#iseffect)\_

속성값이 효과인지 여부를 가져옵니다.

### isMask  <a id="ismask"></a>

**● isMask**: `boolean`

[PropertyBase](propertybase-class.md).[isMask](propertybase-class.md#ismask)\_

속성값이 마스크인지 여부를 가져옵니다.

### isModified  <a id="ismodified"></a>

**● isModified**: `boolean`

[PropertyBase](propertybase-class.md).[isModified](propertybase-class.md#ismodified)\_

속성값이 수정되었는지 확인합니다.

### matchName  <a id="matchname"></a>

**● matchName**: `String`

[PropertyBase](propertybase-class.md).[matchName](propertybase-class.md#matchname)\_

### name  <a id="name"></a>

**● name**: `String`

[PropertyBase](propertybase-class.md).[name](propertybase-class.md#name)\_

속성값의 이름을 가져오거나 설정합니다.

### numProperties  <a id="numproperties"></a>

**● numProperties**: `number`

속성 그룹에 사용할 수 있는 속성의 개수를 가져옵니다.

### parentProperty  <a id="parentproperty"></a>

**● parentProperty**: \_[PropertyGroup](propertygroup-class.md)\_

[PropertyBase](propertybase-class.md).[parentProperty](propertybase-class.md#parentproperty)\_

해당 속성값이 어떤 속성 그룹에 포함되어있는지 가져옵니다.

### propertyDepth  <a id="propertydepth"></a>

**● propertyDepth**: `number`

[PropertyBase](propertybase-class.md).[propertyDepth](propertybase-class.md#propertydepth)\_

### propertyIndex  <a id="propertyindex"></a>

**● propertyIndex**: `number`

[PropertyBase](propertybase-class.md).[propertyIndex](propertybase-class.md#propertyindex)\_

속성 값의 위치를 가져옵니다.

### propertyType  <a id="propertytype"></a>

**● propertyType**: \[PropertyType\]\(/javascript-api/api/etc/enums/\_affectscript\_.affectscriptapi.propertytype.md\)

[PropertyBase](propertybase-class.md).[propertyType](propertybase-class.md#propertytype)\_

속성 값의 타입을 가져옵니다.

### selected  <a id="selected"></a>

**● selected**: `boolean`

[PropertyBase](propertybase-class.md).[selected](propertybase-class.md#selected)\_

해당 속성값을 선택하고 있는지 여부를 가져오거나 설정합니다.

## 사용 가능한 함수들

### addProperty  <a id="addproperty"></a>

▸ **addProperty**\(name: `string`\): [Property](property-class.md)

속성 그룹을 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 추가할 속성 그룹입니다. |

**반환:** [Property](property-class.md)

### canAddProperty  <a id="canaddproperty"></a>

▸ **canAddProperty**\(name: `string`\): `boolean`

속성 값을 적용할 수 있는지 여부를 확인합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` |  |

**반환:** `boolean`

### duplicated  <a id="duplicated"></a>

▸ **duplicated**\(\): [PropertyBase](propertybase-class.md)

[PropertyBase](propertybase-class.md).[duplicated](propertybase-class.md#duplicated)\_

설정값을 복제합니다.

**반환:** [PropertyBase](propertybase-class.md)

### moveTo  <a id="moveto"></a>

▸ **moveTo**\(newIndex: `number`\): `void`

[PropertyBase](propertybase-class.md).[moveTo](propertybase-class.md#moveto)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| newIndex | `number` |

### property  <a id="property"></a>

▸ **property**\(param: `number` _\|_ `string`\): [Property](property-class.md)

[PropertyBase](propertybase-class.md).[property](propertybase-class.md#property)\_

속성 값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| param | `number` \| `string` | 가져올 속성값입니다. |

**반환:** [Property](property-class.md)

### propertyGroup  <a id="propertygroup"></a>

▸ **propertyGroup**\(countUp?: `number`\): [PropertyGroup](propertygroup-class.md)

[PropertyBase](propertybase-class.md).[propertyGroup](propertybase-class.md#propertygroup)\_

속성 값의 그룹 데이터를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` countUp | `number` | 옵션값입니다. 상위 계층을 얼만큼 거슬러 올라갈지 입니다. |

**반환:** [PropertyGroup](propertygroup-class.md)

### remove  <a id="remove"></a>

▸ **remove**\(\): `any`

[PropertyBase](propertybase-class.md).[remove](propertybase-class.md#remove)\_

속성 값을 제거합니다.

**반환:** `any`

