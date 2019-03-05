# MaskPropertyGroup 클래스

## 구조

↳ [PropertyGroup](propertygroup-class.md)

**↳ MaskPropertyGroup**

## 목차

### 속성값

* [active](maskpropertygroup-class.md#active)
* [canSetEnabled](maskpropertygroup-class.md#cansetenabled)
* [color](maskpropertygroup-class.md#color)
* [elided](maskpropertygroup-class.md#elided)
* [enabled](maskpropertygroup-class.md#enabled)
* [inverted](maskpropertygroup-class.md#inverted)
* [isEffect](maskpropertygroup-class.md#iseffect)
* [isMask](maskpropertygroup-class.md#ismask)
* [isModified](maskpropertygroup-class.md#ismodified)
* [locked](maskpropertygroup-class.md#locked)
* [maskFeatherFalloff](maskpropertygroup-class.md#maskfeatherfalloff)
* [maskMode](maskpropertygroup-class.md#maskmode)
* [maskMotionBlur](maskpropertygroup-class.md#maskmotionblur)
* [matchName](maskpropertygroup-class.md#matchname)
* [name](maskpropertygroup-class.md#name)
* [numProperties](maskpropertygroup-class.md#numproperties)
* [parentProperty](maskpropertygroup-class.md#parentproperty)
* [propertyDepth](maskpropertygroup-class.md#propertydepth)
* [propertyIndex](maskpropertygroup-class.md#propertyindex)
* [propertyType](maskpropertygroup-class.md#propertytype)
* [rotoBezier](maskpropertygroup-class.md#rotobezier)
* [selected](maskpropertygroup-class.md#selected)

### 사용 가능한 함수

* [addProperty](maskpropertygroup-class.md#addproperty)
* [canAddProperty](maskpropertygroup-class.md#canaddproperty)
* [duplicated](maskpropertygroup-class.md#duplicated)
* [moveTo](maskpropertygroup-class.md#moveto)
* [property](maskpropertygroup-class.md#property)
* [propertyGroup](maskpropertygroup-class.md#propertygroup)
* [remove](maskpropertygroup-class.md#remove)

## 속성값

### active  <a id="active"></a>

**● active**: `boolean`

[PropertyBase](propertybase-class.md).[active](propertybase-class.md#active)\_

해당 레이어의 가시성 여부를 가져옵니다.

### canSetEnabled  <a id="cansetenabled"></a>

**● canSetEnabled**: `boolean`

[PropertyBase](propertybase-class.md).[canSetEnabled](propertybase-class.md#cansetenabled)\_

### color  <a id="color"></a>

**● color**: `number`\[\]\_

마스크의 색깔을 가져오거나 설정합니다.

### elided  <a id="elided"></a>

**● elided**: `boolean`

[PropertyBase](propertybase-class.md).[elided](propertybase-class.md#elided)\_

레이어가 숨김 레이어인지 가져옵니다.

### enabled  <a id="enabled"></a>

**● enabled**: `boolean`

[PropertyBase](propertybase-class.md).[enabled](propertybase-class.md#enabled)\_

### inverted  <a id="inverted"></a>

**● inverted**: `boolean`

마스크가 반전상태인지 여부를 가져오거나 설정합니다.

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

### locked  <a id="locked"></a>

**● locked**: `boolean`

마스크의 잠금 여부를 가져오거나 설정합니다.

### maskFeatherFalloff  <a id="maskfeatherfalloff"></a>

**● maskFeatherFalloff**: [MaskFeatherFalloff](../etc/enum/_affectscript_.affectscriptapi.maskfeatherfalloff.md)

### maskMode  <a id="maskmode"></a>

**● maskMode**: [MaskMode](../etc/enum/_affectscript_.affectscriptapi.maskmode.md)

마스크의 모드를 가져오거나 설정합니다.

### maskMotionBlur  <a id="maskmotionblur"></a>

**● maskMotionBlur**: [MaskMotionBlur](../etc/enum/_affectscript_.affectscriptapi.maskmotionblur.md)

마스크 레이어에 모션 블러 모드 여부를 가져오거나 설정합니다.

### matchName  <a id="matchname"></a>

**● matchName**: `String`

[PropertyBase](propertybase-class.md).[matchName](propertybase-class.md#matchname)

### name  <a id="name"></a>

**● name**: `String`

[PropertyBase](propertybase-class.md).[name](propertybase-class.md#name)

속성값의 이름을 가져오거나 설정합니다.

### numProperties  <a id="numproperties"></a>

**● numProperties**: `number`

[PropertyGroup](propertygroup-class.md).[numProperties](propertygroup-class.md#numproperties)

속성 그룹에 사용할 수 있는 속성의 개수를 가져옵니다.

### parentProperty  <a id="parentproperty"></a>

**● parentProperty**: \_[PropertyGroup](propertygroup-class.md)\_

[PropertyBase](propertybase-class.md).[parentProperty](propertybase-class.md#parentproperty)

해당 속성값이 어떤 속성 그룹에 포함되어있는지 가져옵니다.

### propertyDepth  <a id="propertydepth"></a>

**● propertyDepth**: `number`

[PropertyBase](propertybase-class.md).[propertyDepth](propertybase-class.md#propertydepth)

### propertyIndex  <a id="propertyindex"></a>

**● propertyIndex**: `number`

[PropertyBase](propertybase-class.md).[propertyIndex](propertybase-class.md#propertyindex)

속성 값의 위치를 가져옵니다.

### propertyType  <a id="propertytype"></a>

**● propertyType**: [PropertyType](../etc/enum/_affectscript_.affectscriptapi.propertytype.md)

[PropertyBase](propertybase-class.md).[propertyType](propertybase-class.md#propertytype)

속성 값의 타입을 가져옵니다.

### rotoBezier  <a id="rotobezier"></a>

**● rotoBezier**: `boolean`

### selected  <a id="selected"></a>

**● selected**: `boolean`

[PropertyBase](propertybase-class.md).[selected](propertybase-class.md#selected)

해당 속성값을 선택하고 있는지 여부를 가져오거나 설정합니다.

## 사용 가능한 함수

### addProperty  <a id="addproperty"></a>

▸ **addProperty**\(name: `string`\): [Property](property-class.md)

[PropertyGroup](propertygroup-class.md).[addProperty](propertygroup-class.md#addproperty)

속성 그룹을 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 추가할 속성 그룹입니다. |

**반환:** [Property](property-class.md)

### canAddProperty  <a id="canaddproperty"></a>

▸ **canAddProperty**\(name: `string`\): `boolean`

[PropertyGroup](propertygroup-class.md).[canAddProperty](propertygroup-class.md#canaddproperty)

속성 값을 적용할 수 있는지 여부를 확인합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` |  |

**반환:** `boolean`

### duplicated  <a id="duplicated"></a>

▸ **duplicated**\(\): [PropertyBase](propertybase-class.md)

[PropertyBase](propertybase-class.md).[duplicated](propertybase-class.md#duplicated)

설정값을 복제합니다.

**반환:** [PropertyBase](propertybase-class.md)

### moveTo  <a id="moveto"></a>

▸ **moveTo**\(newIndex: `number`\): `void`

[PropertyBase](propertybase-class.md).[moveTo](propertybase-class.md#moveto)

**매개변수:**

| Name | Type |
| :--- | :--- |
| newIndex | `number` |

**반환:**

### property  <a id="property"></a>

▸ **property**\(param: `number` _\|_ `string`\): [Property](property-class.md)

[PropertyBase](propertybase-class.md).[property](propertybase-class.md#property)

속성 값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| param | `number` \| `string` | 가져올 속성값입니다. |

**반환:** [Property](property-class.md)

### propertyGroup  <a id="propertygroup"></a>

▸ **propertyGroup**\(countUp?: `number`\): [PropertyGroup](propertygroup-class.md)

[PropertyBase](propertybase-class.md).[propertyGroup](propertybase-class.md#propertygroup)

속성 값의 그룹 데이터를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` countUp | `number` | 옵션값입니다. 상위 계층을 얼만큼 거슬러 올라갈지 입니다. |

**반환:** [PropertyGroup](propertygroup-class.md)

### remove  <a id="remove"></a>

▸ **remove**\(\): `any`

[PropertyBase](propertybase-class.md).[remove](propertybase-class.md#remove)

속성 값을 제거합니다.

**반환:** `any`

