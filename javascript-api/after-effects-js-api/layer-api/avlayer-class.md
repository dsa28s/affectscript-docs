# AVLayer 클래스

## 구조

↳ [Layer](layer-class.md)

**↳ AVLayer**

↳ [ShapeLayer](shapelayer-class.md)

↳ [TextLayer](textlayer-class.md)

## 목차

### 속성값

* [Effects](avlayer-class.md#effects)
* [active](avlayer-class.md#active)
* [adjustmentLayer](avlayer-class.md#adjustmentlayer)
* [audioActive](avlayer-class.md#audioactive)
* [audioEnabled](avlayer-class.md#audioenabled)
* [autoOrient](avlayer-class.md#autoorient)
* [blendingMode](avlayer-class.md#blendingmode)
* [canSetCollapseTransformation](avlayer-class.md#cansetcollapsetransformation)
* [canSetTimeRemapEnabled](avlayer-class.md#cansettimeremapenabled)
* [collapseTransformation](avlayer-class.md#collapsetransformation)
* [comment](avlayer-class.md#comment)
* [containingComp](avlayer-class.md#containingcomp)
* [effectsActive](avlayer-class.md#effectsactive)
* [enabled](avlayer-class.md#enabled)
* [environmentLayer](avlayer-class.md#environmentlayer)
* [frameBlending](avlayer-class.md#frameblending)
* [frameBlendingType](avlayer-class.md#frameblendingtype)
* [guideLayer](avlayer-class.md#guidelayer)
* [hasAudio](avlayer-class.md#hasaudio)
* [hasTrackMatte](avlayer-class.md#hastrackmatte)
* [hasVideo](avlayer-class.md#hasvideo)
* [height](avlayer-class.md#height)
* [inPoint](avlayer-class.md#inpoint)
* [index](avlayer-class.md#index)
* [isNameFromSource](avlayer-class.md#isnamefromsource)
* [isNameSet](avlayer-class.md#isnameset)
* [isTrackMatte](avlayer-class.md#istrackmatte)
* [locked](avlayer-class.md#locked)
* [motionBlur](avlayer-class.md#motionblur)
* [name](avlayer-class.md#name)
* [nullLayer](avlayer-class.md#nulllayer)
* [outPoint](avlayer-class.md#outpoint)
* [parent](avlayer-class.md#parent)
* [preserveTransparency](avlayer-class.md#preservetransparency)
* [quality](avlayer-class.md#quality)
* [selectedProperties](avlayer-class.md#selectedproperties)
* [shy](avlayer-class.md#shy)
* [solo](avlayer-class.md#solo)
* [source](avlayer-class.md#source)
* [startTime](avlayer-class.md#starttime)
* [stretch](avlayer-class.md#stretch)
* [threeDLayer](avlayer-class.md#threedlayer)
* [threeDPerChar](avlayer-class.md#threedperchar)
* [time](avlayer-class.md#time)
* [timeRemapEnabled](avlayer-class.md#timeremapenabled)
* [trackMatteType](avlayer-class.md#trackmattetype)
* [width](avlayer-class.md#width)

### 사용 가능한 함수

* [activeAtTime](avlayer-class.md#activeattime)
* [applyPreset](avlayer-class.md#applypreset)
* [audioActiveAtTime](avlayer-class.md#audioactiveattime)
* [calculateTransformFromPoints](avlayer-class.md#calculatetransformfrompoints)
* [copyToComp](avlayer-class.md#copytocomp)
* [duplicate](avlayer-class.md#duplicate)
* [effect](avlayer-class.md#effect)
* [mask](avlayer-class.md#mask)
* [moveAfter](avlayer-class.md#moveafter)
* [moveBefore](avlayer-class.md#movebefore)
* [moveToBeginning](avlayer-class.md#movetobeginning)
* [moveToEnd](avlayer-class.md#movetoend)
* [openInViewer](avlayer-class.md#openinviewer)
* [property](avlayer-class.md#property)
* [remove](avlayer-class.md#remove)
* [replaceSource](avlayer-class.md#replacesource)
* [setParentWithJump](avlayer-class.md#setparentwithjump)
* [sourceRectAtTime](avlayer-class.md#sourcerectattime)

## 속성값

### Effects   <a id="effects"></a>

**● Effects**: \_[Property](../property-api/property-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[Effects](layer-class.md#effects)\_

### active   <a id="active"></a>

**● active**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[active](layer-class.md#active)\_

해당 레이어의 활성 여부를 가져옵니다.

### adjustmentLayer   <a id="adjustmentlayer"></a>

**● adjustmentLayer**: `boolean`

레이어를 Adjustment 레이어인지 가져오거나 Adjustment 레이어로 만듭니다.

### audioActive   <a id="audioactive"></a>

**● audioActive**: `boolean`

레이어의 오디오가 활성화 되어있는지 여부를 가져옵니다.

### audioEnabled   <a id="audioenabled"></a>

**● audioEnabled**: `boolean`

레이어의 오디오가 켜져있는지 여부를 가져오거나 설정합니다.

### autoOrient   <a id="autoorient"></a>

**● autoOrient**: [AutoOrientType](../etc/enum/_affectscript_.affectscriptapi.autoorienttype.md)

레이어의 방향값을 가져오거나 설정합니다.

### blendingMode   <a id="blendingmode"></a>

**● blendingMode**: [BlendingMode](../etc/enum/_affectscript_.affectscriptapi.blendingmode.md) 레이어에 적용된 블랜딩 모드를 가져오거나 새로 적용합니다.

### canSetCollapseTransformation   <a id="cansetcollapsetransformation"></a>

**● canSetCollapseTransformation**: `boolean`

### canSetTimeRemapEnabled   <a id="cansettimeremapenabled"></a>

**● canSetTimeRemapEnabled**: `boolean`

### collapseTransformation   <a id="collapsetransformation"></a>

**● collapseTransformation**: `boolean`

### comment   <a id="comment"></a>

**● comment**: `string`

\_부모로부터 상속됨 : [Layer](layer-class.md).[comment](layer-class.md#comment)\_

레이어에 대한 설명을 설정하거나 가져옵니다.

### containingComp   <a id="containingcomp"></a>

**● containingComp**: \_[CompItem](../item-api/compitem-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[containingComp](layer-class.md#containingcomp)\_

해당 레이어를 포함하고 있는 컴포지션 객체를 가져옵니다.

### effectsActive   <a id="effectsactive"></a>

**● effectsActive**: `boolean`

### enabled   <a id="enabled"></a>

**● enabled**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[enabled](layer-class.md#enabled)\_

레이어의 사용가능 여부를 가져오거나 설정합니다.

### environmentLayer   <a id="environmentlayer"></a>

**● environmentLayer**: `boolean`

### frameBlending   <a id="frameblending"></a>

**● frameBlending**: `boolean`

프레임 블랜딩 활성화 여부를 가져옵니다.

### frameBlendingType   <a id="frameblendingtype"></a>

**● frameBlendingType**: [FrameBlendingType](../etc/enum/_affectscript_.affectscriptapi.frameblendingtype.md)

프레임 블랜딩 모드를 가져오거나 설정합니다.

### guideLayer   <a id="guidelayer"></a>

**● guideLayer**: `boolean`

### hasAudio   <a id="hasaudio"></a>

**● hasAudio**: `boolean`

레이어가 오디오를 가지고 있는지 반환합니다.

### hasTrackMatte   <a id="hastrackmatte"></a>

**● hasTrackMatte**: `boolean`

레이어가 트랙매트를 가지고 있는지 반환합니다.

### hasVideo   <a id="hasvideo"></a>

**● hasVideo**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[hasVideo](layer-class.md#hasvideo)\_

레이어가 비디오 레이어를 가지고 있는지 여부를 가져옵니다.

### height   <a id="height"></a>

**● height**: `number`

레이어의 세로 크기를 반환합니다.

### inPoint   <a id="inpoint"></a>

**● inPoint**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[inPoint](layer-class.md#inpoint)\_

### index   <a id="index"></a>

**● index**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[index](layer-class.md#index)\_

레이어의 위치를 가져옵니다.

### isNameFromSource   <a id="isnamefromsource"></a>

**● isNameFromSource**: `boolean`

### isNameSet   <a id="isnameset"></a>

**● isNameSet**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[isNameSet](layer-class.md#isnameset)\_

### isTrackMatte   <a id="istrackmatte"></a>

**● isTrackMatte**: `boolean`

### locked   <a id="locked"></a>

**● locked**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[locked](layer-class.md#locked)\_

레이어 잠금 여부를 가져오거나 설정합니다.

### motionBlur   <a id="motionblur"></a>

**● motionBlur**: `boolean`

레이어에 모션블러 활성화 여부를 가져오거나 설정합니다.

### name   <a id="name"></a>

**● name**: `string`

\_부모로부터 상속됨 : [Layer](layer-class.md).[name](layer-class.md#name)\_

레이어의 이름을 가져오거나 설정합니다.

### nullLayer   <a id="nulllayer"></a>

**● nullLayer**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[nullLayer](layer-class.md#nulllayer)\_

레이어가 Null 레이어인지 여부를 가져옵니다.

### outPoint   <a id="outpoint"></a>

**● outPoint**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[outPoint](layer-class.md#outpoint)\_

레이어의 끝날 시간을 설정하거나 가져옵니다.

### parent   <a id="parent"></a>

**● parent**: \_[Layer](layer-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[parent](layer-class.md#parent)\_

해당 레이어의 부모 레이어를 가져옵니다. 없다면 Null을 반환합니다.

### preserveTransparency   <a id="preservetransparency"></a>

**● preserveTransparency**: `boolean`

### quality   <a id="quality"></a>

**● quality**: _\[LayerQuality\]\(../etc/enum/\_affectscript_.affectscriptapi.layerquality.md\)\_

레이어의 미리보기 품질을 가져오거나 설정합니다.

### selectedProperties   <a id="selectedproperties"></a>

**● selectedProperties**: \_[PropertyGroup](../property-api/propertygroup-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[selectedProperties](layer-class.md#selectedproperties)\_

현재 레이어에 적용된 설정값을 모두 가져옵니다.

### shy   <a id="shy"></a>

**● shy**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[shy](layer-class.md#shy)\_

레이어 숨김 여부를 가져오거나 설정합니다.

### solo   <a id="solo"></a>

**● solo**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[solo](layer-class.md#solo)\_

### source   <a id="source"></a>

**● source**: \_[AVItem](../item-api/avitem-class.md)\_

레이어의 원본 소스 객체를 가져옵니다.

### startTime   <a id="starttime"></a>

**● startTime**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[startTime](layer-class.md#starttime)\_

레이어의 시작 시간을 가져오거나 설정합니다.

### stretch   <a id="stretch"></a>

**● stretch**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[stretch](layer-class.md#stretch)\_

레이어가 시간 늘리기가 적용되어 있는지 여부를 가져오거나 설정합니다. \(100 : 보통\)

### threeDLayer   <a id="threedlayer"></a>

**● threeDLayer**: `boolean`

레이어 3D 활성화 여부를 가져오거나 설정합니다.

### threeDPerChar   <a id="threedperchar"></a>

**● threeDPerChar**: `boolean`

### time   <a id="time"></a>

**● time**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[time](layer-class.md#time)\_

레이어의 시간 값을 가져옵니다.

### timeRemapEnabled   <a id="timeremapenabled"></a>

**● timeRemapEnabled**: `boolean`

### trackMatteType   <a id="trackmattetype"></a>

**● trackMatteType**: [TrackMatteType](../etc/enum/_affectscript_.affectscriptapi.trackmattetype.md)

레이어에 적용된 트랙메트의 타입을 가져오거나 설정합니다.

### width   <a id="width"></a>

**● width**: `number`

레이어의 가로 크기를 가져옵니다.

## 사용 가능한 함수

### activeAtTime   <a id="activeattime"></a>

▸ **activeAtTime**\(time: `number`\): `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[activeAtTime](layer-class.md#activeattime)\_

특정 시간에 레이어가 활성화 되어있는지 여부를 확인합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| time | `number` | 특정 시간입니다. |

**반환:** `boolean`

### applyPreset   <a id="applypreset"></a>

▸ **applyPreset**\(presetName: `string`\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[applyPreset](layer-class.md#applypreset)\_

레이어에 프리셋을 적용합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| presetName | `string` | 적용할 프리셋 이름입니다. |

### audioActiveAtTime   <a id="audioactiveattime"></a>

▸ **audioActiveAtTime**\(time: `number`\): `boolean`

특정 시간에 오디오가 활성화 되어있는지 가져옵니다.

**매개변수:**

| Name | Type |
| :--- | :--- |
| time | `number` |

**반환:** `boolean`

### calculateTransformFromPoints   <a id="calculatetransformfrompoints"></a>

▸ **calculateTransformFromPoints**\(pointTopLeft: _\[XYZ\]\(../etc/modules/\_affectscript_.affectscriptapi.md\#xyz\)_, pointTopRight:_ [XYZ](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/etc/modules/_affectscript_.affectscriptapi.md#xyz)_, pointBottomRight:_ [XYZ](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/etc/modules/_affectscript_.affectscriptapi.md#xyz)\_\): `Object`

**매개변수:**

| Name | Type |
| :--- | :--- |
| pointTopLeft | [XYZ](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/etc/modules/_affectscript_.affectscriptapi.md#xyz) |
| pointTopRight | [XYZ](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/etc/modules/_affectscript_.affectscriptapi.md#xyz) |
| pointBottomRight | [XYZ](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/etc/modules/_affectscript_.affectscriptapi.md#xyz) |

**반환:** `Object`

### copyToComp   <a id="copytocomp"></a>

▸ **copyToComp**\(intoComp: \_[CompItem](../item-api/compitem-class.md)\_\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[copyToComp](layer-class.md#copytocomp)\_

컴포지션에 레이어를 복사합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| intoComp | [CompItem](../item-api/compitem-class.md) | 복사할 컴포지션 대상입니다. |

### duplicate   <a id="duplicate"></a>

▸ **duplicate**\(\): [AVLayer](avlayer-class.md)

\_부모로부터 상속됨 : [Layer](layer-class.md).[duplicate](layer-class.md#duplicate)\_

레이어를 복제합니다.

**반환:** [AVLayer](avlayer-class.md)

### effect   <a id="effect"></a>

▸ **effect**\(effectName: `string`\): `function`

\_부모로부터 상속됨 : [Layer](layer-class.md).[effect](layer-class.md#effect)\_

레이어에 적용된 효과를 가져온 후, 설정값을 가져오거나 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| effectName | `string` |  |

**반환:** `function`

### mask   <a id="mask"></a>

▸ **mask**\(index: `number`\): [MaskPropertyGroup](../property-api/maskpropertygroup-class.md)

\_부모로부터 상속됨 : [Layer](layer-class.md).[mask](layer-class.md#mask)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| index | `number` |

**반환:** [MaskPropertyGroup](../property-api/maskpropertygroup-class.md)

### moveAfter   <a id="moveafter"></a>

▸ **moveAfter**\(layer: \_[Layer](layer-class.md)\_\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[moveAfter](layer-class.md#moveafter)\_

다음 레이어로 이동합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| layer | [Layer](layer-class.md) | 다음 레이어로 이동하기 전 레이어 객체입니다. |

### moveBefore   <a id="movebefore"></a>

▸ **moveBefore**\(layer: \_[Layer](layer-class.md)\_\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[moveBefore](layer-class.md#movebefore)\_

이전 레이어로 이동합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| layer | [Layer](layer-class.md) | 이전 레이어로 이동하기 전 레이어 객체입니다. |

### moveToBeginning   <a id="movetobeginning"></a>

▸ **moveToBeginning**\(\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[moveToBeginning](layer-class.md#movetobeginning)\_

처음 레이어로 이동합니다.

### moveToEnd   <a id="movetoend"></a>

▸ **moveToEnd**\(\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[moveToEnd](layer-class.md#movetoend)\_

마지막 레이어로 이동합니다.

### openInViewer   <a id="openinviewer"></a>

▸ **openInViewer**\(\): [Viewer](../after-effects-api/viewer-class.md)

레이어를 엽니다.

**반환:** [Viewer](../after-effects-api/viewer-class.md)

### property   <a id="property"></a>

▸ **property**\(propertyName: `String`\): [Property](../property-api/property-class.md)

\_부모로부터 상속됨 : [Layer](layer-class.md).[property](layer-class.md#property)\_

레이어의 속성 그룹 혹은 값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| propertyName | `String` | 속성 이름입니다. |

**반환:** [Property](../property-api/property-class.md)

### remove   <a id="remove"></a>

▸ **remove**\(\): `void`

\_부모로부터 상속됨 : [Layer](layer-class.md).[remove](layer-class.md#remove)\_

레이어를 제거합니다.

### replaceSource   <a id="replacesource"></a>

▸ **replaceSource**\(newSource: [_AVItem_](../item-api/avitem-class.md), fixExpressions: \_`boolean`\_\): `void`

레이어의 원본 파일을 변경합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| newSource | [AVItem](../item-api/avitem-class.md) | 변경할 아이템입니다. |
| fixExpressions | `boolean` |  |

### setParentWithJump   <a id="setparentwithjump"></a>

▸ **setParentWithJump**\(newParent?: \_[Layer](layer-class.md)\_\): `any`

\_부모로부터 상속됨 : [Layer](layer-class.md).[setParentWithJump](layer-class.md#setparentwithjump)\_

해당 레이어의 새로운 부모 레이어를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` newParent | [Layer](layer-class.md) | 새로 할당할 부모 레이어 객체입니다. |

**반환:** `any`

### sourceRectAtTime   <a id="sourcerectattime"></a>

▸ **sourceRectAtTime**\(timeT: `number`, extents: `boolean`\): [TopLeftWidthHeight](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/etc/modules/_affectscript_.affectscriptapi.md#topleftwidthheight)

**매개변수:**

| Name | Type |
| :--- | :--- |
| timeT | `number` |
| extents | `boolean` |

**반환:** [TopLeftWidthHeight](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/etc/modules/_affectscript_.affectscriptapi.md#topleftwidthheight)

