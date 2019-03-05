# Property 클래스

## 구조

[PropertyBase](propertybase-class.md)

↳ [PropertyGroup](propertygroup-class.md)

    **↳ Property**

    ↳ [MaskPropertyGroup](maskpropertygroup-class.md)

## 목차

### 속성값

* [active](property-class.md#active)
* [canSetEnabled](property-class.md#cansetenabled)
* [canSetExpression](property-class.md#cansetexpression)
* [canVaryOverTime](property-class.md#canvaryovertime)
* [dimensionsSeparated](property-class.md#dimensionsseparated)
* [elided](property-class.md#elided)
* [enabled](property-class.md#enabled)
* [expression](property-class.md#expression)
* [expressionEnabled](property-class.md#expressionenabled)
* [expressionError](property-class.md#expressionerror)
* [hasMax](property-class.md#hasmax)
* [hasMin](property-class.md#hasmin)
* [isEffect](property-class.md#iseffect)
* [isMask](property-class.md#ismask)
* [isModified](property-class.md#ismodified)
* [isSeparationFollower](property-class.md#isseparationfollower)
* [isSeparationLeader](property-class.md#isseparationleader)
* [isSpatial](property-class.md#isspatial)
* [isTimeVarying](property-class.md#istimevarying)
* [matchName](property-class.md#matchname)
* [maxValue](property-class.md#maxvalue)
* [minValue](property-class.md#minvalue)
* [name](property-class.md#name)
* [numKeys](property-class.md#numkeys)
* [numProperties](property-class.md#numproperties)
* [parentProperty](property-class.md#parentproperty)
* [propertyDepth](property-class.md#propertydepth)
* [propertyIndex](property-class.md#propertyindex)
* [propertyType](property-class.md#propertytype)
* [propertyValueType](property-class.md#propertyvaluetype)
* [selected](property-class.md#selected)
* [selectedKeys](property-class.md#selectedkeys)
* [separationDimension](property-class.md#separationdimension)
* [separationLeader](property-class.md#separationleader)
* [unitsText](property-class.md#unitstext)
* [value](property-class.md#value)

### 사용 가능한 함수

* [addKey](property-class.md#addkey)
* [addProperty](property-class.md#addproperty)
* [canAddProperty](property-class.md#canaddproperty)
* [duplicated](property-class.md#duplicated)
* [getSeoarationFollower](property-class.md#getseoarationfollower)
* [isInterpolationTypeValid](property-class.md#isinterpolationtypevalid)
* [keyInInterpolationType](property-class.md#keyininterpolationtype)
* [keyInTemporalEase](property-class.md#keyintemporalease)
* [keyInspatialTangent](property-class.md#keyinspatialtangent)
* [keyOutInterpolationType](property-class.md#keyoutinterpolationtype)
* [keyOutSpatialTangent](property-class.md#keyoutspatialtangent)
* [keyOutTemporalEase](property-class.md#keyouttemporalease)
* [keyRoving](property-class.md#keyroving)
* [keySelected](property-class.md#keyselected)
* [keySpatialAutoBezier](property-class.md#keyspatialautobezier)
* [keySpatialContinuous](property-class.md#keyspatialcontinuous)
* [keyTemporalAutoBezier](property-class.md#keytemporalautobezier)
* [keyTemporalContinuous](property-class.md#keytemporalcontinuous)
* [keyTime](property-class.md#keytime)
* [keyValue](property-class.md#keyvalue)
* [moveTo](property-class.md#moveto)
* [nearestKeyIndex](property-class.md#nearestkeyindex)
* [property](property-class.md#property)
* [propertyGroup](property-class.md#propertygroup)
* [remove](property-class.md#remove)
* [removeKey](property-class.md#removekey)
* [setInterpolationTypeAtKey](property-class.md#setinterpolationtypeatkey)
* [setRovingAtKey](property-class.md#setrovingatkey)
* [setSelectedAtKey](property-class.md#setselectedatkey)
* [setSpatialAutoBezierAtKey](property-class.md#setspatialautobezieratkey)
* [setSpatialContinuousAtKey](property-class.md#setspatialcontinuousatkey)
* [setSpatialTangentsAtKey](property-class.md#setspatialtangentsatkey)
* [setTemporalAutoBezierAtKey](property-class.md#settemporalautobezieratkey)
* [setTemporalContinuousAtKey](property-class.md#settemporalcontinuousatkey)
* [setTemporalEaseAtKey](property-class.md#settemporaleaseatkey)
* [setValue](property-class.md#setvalue)
* [setValueAtKey](property-class.md#setvalueatkey)
* [setValueAtTime](property-class.md#setvalueattime)
* [setValuesAtTimes](property-class.md#setvaluesattimes)
* [valueAtTime](property-class.md#valueattime)

## 속성값

### active   <a id="active"></a>

**● active**: `boolean`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[active](propertybase-class.md#active)\_

해당 레이어의 가시성 여부를 가져옵니다.

### canSetEnabled   <a id="cansetenabled"></a>

**● canSetEnabled**: `boolean`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[canSetEnabled](propertybase-class.md#cansetenabled)\_

### canSetExpression   <a id="cansetexpression"></a>

**● canSetExpression**: `boolean`

표현식을 사용할 수 있는지 여부를 가져옵니다.

### canVaryOverTime   <a id="canvaryovertime"></a>

**● canVaryOverTime**: `boolean`

### dimensionsSeparated   <a id="dimensionsseparated"></a>

**● dimensionsSeparated**: `boolean`

### elided   <a id="elided"></a>

**● elided**: `boolean`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[elided](propertybase-class.md#elided)\_

레이어가 숨김 레이어인지 가져옵니다.

### enabled   <a id="enabled"></a>

**● enabled**: `boolean`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[enabled](propertybase-class.md#enabled)\_

### expression   <a id="expression"></a>

**● expression**: `string`

표현식을 가져오거나 설정합니다.

### expressionEnabled   <a id="expressionenabled"></a>

**● expressionEnabled**: `boolean`

표현식이 활성화 되어있는지 여부를 가져오거나 설정합니다.

### expressionError   <a id="expressionerror"></a>

**● expressionError**: `boolean`

표현식의 오류 여부를 가져옵니다.

### hasMax   <a id="hasmax"></a>

**● hasMax**: `boolean`

### hasMin   <a id="hasmin"></a>

**● hasMin**: `boolean`

### isEffect   <a id="iseffect"></a>

**● isEffect**: `boolean`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[isEffect](propertybase-class.md#iseffect)\_

속성값이 효과인지 여부를 가져옵니다.

### isMask   <a id="ismask"></a>

**● isMask**: `boolean`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[isMask](propertybase-class.md#ismask)\_

속성값이 마스크인지 여부를 가져옵니다.

### isModified   <a id="ismodified"></a>

**● isModified**: `boolean`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[isModified](propertybase-class.md#ismodified)\_

속성값이 수정되었는지 확인합니다.

### isSeparationFollower   <a id="isseparationfollower"></a>

**● isSeparationFollower**: `boolean`

### isSeparationLeader   <a id="isseparationleader"></a>

**● isSeparationLeader**: `boolean`

### isSpatial   <a id="isspatial"></a>

**● isSpatial**: `boolean`

### isTimeVarying   <a id="istimevarying"></a>

**● isTimeVarying**: `boolean`

### matchName   <a id="matchname"></a>

**● matchName**: `String`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[matchName](propertybase-class.md#matchname)\_

### maxValue   <a id="maxvalue"></a>

**● maxValue**: `number`

속성값의 최대 값을 가져옵니다.

### minValue   <a id="minvalue"></a>

**● minValue**: `number`

속성값의 최소 값을 가져옵니다.

### name   <a id="name"></a>

**● name**: `String`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[name](propertybase-class.md#name)\_

속성값의 이름을 가져오거나 설정합니다.

### numKeys   <a id="numkeys"></a>

**● numKeys**: `number`

키 값의 전체 개수를 가져옵니다.

### numProperties   <a id="numproperties"></a>

**● numProperties**: `number`

\_부모로부터 상속됨 : [PropertyGroup](propertygroup-class.md).[numProperties](propertygroup-class.md#numproperties)\_

속성 그룹에 사용할 수 있는 속성의 개수를 가져옵니다.

### parentProperty   <a id="parentproperty"></a>

**● parentProperty**: \_[PropertyGroup](propertygroup-class.md)\_

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[parentProperty](propertybase-class.md#parentproperty)\_

해당 속성값이 어떤 속성 그룹에 포함되어있는지 가져옵니다.

### propertyDepth   <a id="propertydepth"></a>

**● propertyDepth**: `number`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[propertyDepth](propertybase-class.md#propertydepth)\_

### propertyIndex   <a id="propertyindex"></a>

**● propertyIndex**: `number`

\_Overrides [PropertyBase](propertybase-class.md).[propertyIndex](propertybase-class.md#propertyindex)\_

속성 값의 위치를 가져옵니다.

### propertyType   <a id="propertytype"></a>

**● propertyType**: \[PropertyType\]\(/javascript-api/api/etc/enums/\_affectscript\_.affectscriptapi.propertytype.md\)

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[propertyType](propertybase-class.md#propertytype)\_

속성 값의 타입을 가져옵니다.

### propertyValueType   <a id="propertyvaluetype"></a>

**● propertyValueType**: \[PropertyValueType\]\(/javascript-api/api/etc/enums/\_affectscript\_.affectscriptapi.propertyvaluetype.md\)

속성의 종류를 가져오거나 설정합니다.

### selected   <a id="selected"></a>

**● selected**: `boolean`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[selected](propertybase-class.md#selected)\_

해당 속성값을 선택하고 있는지 여부를 가져오거나 설정합니다.

### selectedKeys   <a id="selectedkeys"></a>

**● selectedKeys**: `number`\[\]\_

선택된 모든 키의 위치를 가져옵니다.

### separationDimension   <a id="separationdimension"></a>

**● separationDimension**: `number`

### separationLeader   <a id="separationleader"></a>

**● separationLeader**: \_[Property](property-class.md)\_

### unitsText   <a id="unitstext"></a>

**● unitsText**: `string`

### value   <a id="value"></a>

**● value**: `any`

속성 값을 가져옵니다.

## 사용 가능한 함수

### addKey   <a id="addkey"></a>

▸ **addKey**\(time: `number`\): `number`

키프레임이나 마커를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| time | `number` | 추가할 시간입니다. |

**반환:** `number`

### addProperty   <a id="addproperty"></a>

▸ **addProperty**\(name: `string`\): [Property](property-class.md)

\_부모로부터 상속됨 : [PropertyGroup](propertygroup-class.md).[addProperty](propertygroup-class.md#addproperty)\_

속성 그룹을 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 추가할 속성 그룹입니다. |

**반환:** [Property](property-class.md)

### canAddProperty   <a id="canaddproperty"></a>

▸ **canAddProperty**\(name: `string`\): `boolean`

\_부모로부터 상속됨 : [PropertyGroup](propertygroup-class.md).[canAddProperty](propertygroup-class.md#canaddproperty)\_

속성 값을 적용할 수 있는지 여부를 확인합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` |  |

**반환:** `boolean`

### duplicated   <a id="duplicated"></a>

▸ **duplicated**\(\): [PropertyBase](propertybase-class.md)

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[duplicated](propertybase-class.md#duplicated)\_

설정값을 복제합니다.

**반환:** [PropertyBase](propertybase-class.md)

### getSeoarationFollower   <a id="getseoarationfollower"></a>

▸ **getSeoarationFollower**\(dim: `number`\): [Property](property-class.md)

**매개변수:**

| Name | Type |
| :--- | :--- |
| dim | `number` |

**반환:** [Property](property-class.md)

### isInterpolationTypeValid   <a id="isinterpolationtypevalid"></a>

▸ **isInterpolationTypeValid**\(type: \[KeyframeInterpolationType\]\(/javascript-api/api/etc/enums/\_affectscript\_.affectscriptapi.keyframeinterpolationtype.md\)\): `boolean`

**매개변수:**

| Name | Type |
| :--- | :--- |
| type | [KeyframeInterpolationType](../etc/enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md) |

**반환:** `boolean`

### keyInInterpolationType   <a id="keyininterpolationtype"></a>

▸ **keyInInterpolationType**\(keyIndex: `number`\): [KeyframeInterpolationType](../etc/enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md)

키프레임의 애니메이션 그래프 종류를 선택합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| keyIndex | `number` | 종류입니다. |

**반환:** [KeyframeInterpolationType](../etc/enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md)

### keyInTemporalEase   <a id="keyintemporalease"></a>

▸ **keyInTemporalEase**\(keytIndex: `number`\): [KeyframeEase](../keyframe-api/keyframeease-class.md)\[\]

**매개변수:**

| Name | Type |
| :--- | :--- |
| keytIndex | `number` |

**반환:** [KeyframeEase](../keyframe-api/keyframeease-class.md)\[\]

### keyInspatialTangent   <a id="keyinspatialtangent"></a>

▸ **keyInspatialTangent**\(keyIndex: `number`\): `number`\[\]

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** `number`\[\]

### keyOutInterpolationType   <a id="keyoutinterpolationtype"></a>

▸ **keyOutInterpolationType**\(keyIndex: `number`\): [KeyframeInterpolationType](../etc/enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md)

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** [KeyframeInterpolationType](../etc/enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md)

### keyOutSpatialTangent   <a id="keyoutspatialtangent"></a>

▸ **keyOutSpatialTangent**\(keyIndex: `number`\): `number`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** `number`

### keyOutTemporalEase   <a id="keyouttemporalease"></a>

▸ **keyOutTemporalEase**\(keyIndex: `number`\): [KeyframeEase](../keyframe-api/keyframeease-class.md)

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** [KeyframeEase](../keyframe-api/keyframeease-class.md)

### keyRoving   <a id="keyroving"></a>

▸ **keyRoving**\(keyIndex: `number`\): `boolean`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** `boolean`

### keySelected   <a id="keyselected"></a>

▸ **keySelected**\(keyIndex: `number`\): `boolean`

키프레임이 선택되어 있는지 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| keyIndex | `number` | 키프레임 위치입니다. |

**반환:** `boolean`

### keySpatialAutoBezier   <a id="keyspatialautobezier"></a>

▸ **keySpatialAutoBezier**\(keyIndex: `number`\): `boolean`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** `boolean`

### keySpatialContinuous   <a id="keyspatialcontinuous"></a>

▸ **keySpatialContinuous**\(keyIndex: `number`\): `boolean`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** `boolean`

### keyTemporalAutoBezier   <a id="keytemporalautobezier"></a>

▸ **keyTemporalAutoBezier**\(keyIndex: `number`\): `boolean`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** `boolean`

### keyTemporalContinuous   <a id="keytemporalcontinuous"></a>

▸ **keyTemporalContinuous**\(keyIndex: `number`\): `boolean`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |

**반환:** `boolean`

### keyTime   <a id="keytime"></a>

▸ **keyTime**\(keyIndex: `any`\): `number`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `any` |

**반환:** `number`

### keyValue   <a id="keyvalue"></a>

▸ **keyValue**\(keyIndex: `number`\): [MarkerValue](../marker-api/markervalue-class.md)

키 값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| keyIndex | `number` | 키 위치입니다. |

**반환:** [MarkerValue](../marker-api/markervalue-class.md)

### moveTo   <a id="moveto"></a>

▸ **moveTo**\(newIndex: `number`\): `void`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[moveTo](propertybase-class.md#moveto)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| newIndex | `number` |

### nearestKeyIndex   <a id="nearestkeyindex"></a>

▸ **nearestKeyIndex**\(time: `number`\): `number`

시간에 있는 키 위치를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| time | `number` | 시간입니다. |

**반환:** `number`

### property   <a id="property"></a>

▸ **property**\(param: `number` _\|_ `string`\): [Property](property-class.md)

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[property](propertybase-class.md#property)\_

속성 값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| param | `number` \| `string` | 가져올 속성값입니다. |

**반환:** [Property](property-class.md)

### propertyGroup   <a id="propertygroup"></a>

▸ **propertyGroup**\(countUp?: `number`\): [PropertyGroup](propertygroup-class.md)

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[propertyGroup](propertybase-class.md#propertygroup)\_

속성 값의 그룹 데이터를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` countUp | `number` | 옵션값입니다. 상위 계층을 얼만큼 거슬러 올라갈지 입니다. |

**반환:** [PropertyGroup](propertygroup-class.md)

### remove   <a id="remove"></a>

▸ **remove**\(\): `any`

\_부모로부터 상속됨 : [PropertyBase](propertybase-class.md).[remove](propertybase-class.md#remove)\_

속성 값을 제거합니다.

**반환:** `any`

### removeKey   <a id="removekey"></a>

▸ **removeKey**\(keyIndex: `number`\): `void`

키 값을 제거합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| keyIndex | `number` | 지울 키값의 위치입니다. |

### setInterpolationTypeAtKey   <a id="setinterpolationtypeatkey"></a>

▸ **setInterpolationTypeAtKey**\(keyIndex: `number`, inType: \[KeyframeInterpolationType\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.keyframeinterpolationtype.md\)_, outType?: _\[KeyframeInterpolationType\]\(../etc/enum/\_affectscript_.affectscriptapi.keyframeinterpolationtype.md\)\_\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |
| inType | [KeyframeInterpolationType](../etc/enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md) |
| `Optional` outType | [KeyframeInterpolationType](../etc/enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md) |

### setRovingAtKey   <a id="setrovingatkey"></a>

▸ **setRovingAtKey**\(keyIndex: `number`, newVal: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |
| newVal | `number` |

### setSelectedAtKey   <a id="setselectedatkey"></a>

▸ **setSelectedAtKey**\(keyIndex: `number`, onOff: `boolean`\): `void`

선택할 키를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| keyIndex | `number` | 선택한 키 위치입니다. |
| onOff | `boolean` |  |

### setSpatialAutoBezierAtKey   <a id="setspatialautobezieratkey"></a>

▸ **setSpatialAutoBezierAtKey**\(keyIndex: `number`, newVal: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |
| newVal | `number` |

### setSpatialContinuousAtKey   <a id="setspatialcontinuousatkey"></a>

▸ **setSpatialContinuousAtKey**\(keyIndex: `number`, newVal: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |
| newVal | `number` |

### setSpatialTangentsAtKey   <a id="setspatialtangentsatkey"></a>

▸ **setSpatialTangentsAtKey**\(keyIndex: `number`, inTangent: `number`\[\]\_, outTangent?: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |
| inTangent | `number`\[\] |
| `Optional` outTangent | `number` |

### setTemporalAutoBezierAtKey   <a id="settemporalautobezieratkey"></a>

▸ **setTemporalAutoBezierAtKey**\(keyIndex: `number`, newVal: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |
| newVal | `number` |

### setTemporalContinuousAtKey   <a id="settemporalcontinuousatkey"></a>

▸ **setTemporalContinuousAtKey**\(keyIndex: `number`, newVal: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| keyIndex | `number` |
| newVal | `number` |

### setTemporalEaseAtKey   <a id="settemporaleaseatkey"></a>

▸ **setTemporalEaseAtKey**\(keyIndex: `number`, inTemporalEase: `number`\[\]_, outTemporalEase?:_ `number`_\[\]_\): `void`

애니메이션 Ease-In, Ease-Out을 사용하여 키프레임을 생성합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| keyIndex | `number` | 키프레임을 생성할 키 위치입니다. |
| inTemporalEase | `number`\[\] | EaseIn 애니메이션 객체입니다. |
| `Optional` outTemporalEase | `number`\[\] | EaseOut 애니메이션 객체입니다. |

### setValue   <a id="setvalue"></a>

▸ **setValue**\(newValue: `number` _\|_ `string` _\|_ `number`\[\] \| _\__`string`\[\] \| __`any` __\| __`any`_\[\]\_\): `void`

값을 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| newValue | `number` \| `string` \| `number`\[\] \| `string`\[\] \| `any` \| `any`\[\] | 설정할 값입니다. |

### setValueAtKey   <a id="setvalueatkey"></a>

▸ **setValueAtKey**\(keyIndex: `number`, newValue: `number` _\|_ `string`\): `void`

해당 키에 맞는 값을 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| keyIndex | `number` | 키의 위치입니다. |
| newValue | `number` \| `string` | 키애 겂울 설정합니다. |

### setValueAtTime   <a id="setvalueattime"></a>

▸ **setValueAtTime**\(time: `number`, newValue: `any`\): `void`

해당 시간에 있는 속성값을 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| time | `number` | 시간입니다. |
| newValue | `any` | 설정 값입니다. |

### setValuesAtTimes   <a id="setvaluesattimes"></a>

▸ **setValuesAtTimes**\(times: `number`\[\]_, newValues:_ `number` _\_\|\_ `string`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| times | `number`\[\] |
| newValues | `number` \| `string` |

### valueAtTime   <a id="valueattime"></a>

▸ **valueAtTime**\(time: `number`, preExpression: `string`\): [Property](property-class.md)

**매개변수:**

| Name | Type |
| :--- | :--- |
| time | `number` |
| preExpression | `string` |

**반환:** [Property](property-class.md)

