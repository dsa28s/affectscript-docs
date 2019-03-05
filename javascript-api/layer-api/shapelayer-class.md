# ShapeLayer 클래스

## 구조

↳ [AVLayer](avlayer-class.md)

**↳ ShapeLayer**

## 목차

### 속성값

* [Effects](shapelayer-class.md#effects)
* [active](shapelayer-class.md#active)
* [adjustmentLayer](shapelayer-class.md#adjustmentlayer)
* [audioActive](shapelayer-class.md#audioactive)
* [audioEnabled](shapelayer-class.md#audioenabled)
* [autoOrient](shapelayer-class.md#autoorient)
* [blendingMode](shapelayer-class.md#blendingmode)
* [canSetCollapseTransformation](shapelayer-class.md#cansetcollapsetransformation)
* [canSetTimeRemapEnabled](shapelayer-class.md#cansettimeremapenabled)
* [collapseTransformation](shapelayer-class.md#collapsetransformation)
* [comment](shapelayer-class.md#comment)
* [containingComp](shapelayer-class.md#containingcomp)
* [effectsActive](shapelayer-class.md#effectsactive)
* [enabled](shapelayer-class.md#enabled)
* [environmentLayer](shapelayer-class.md#environmentlayer)
* [frameBlending](shapelayer-class.md#frameblending)
* [frameBlendingType](shapelayer-class.md#frameblendingtype)
* [guideLayer](shapelayer-class.md#guidelayer)
* [hasAudio](shapelayer-class.md#hasaudio)
* [hasTrackMatte](shapelayer-class.md#hastrackmatte)
* [hasVideo](shapelayer-class.md#hasvideo)
* [height](shapelayer-class.md#height)
* [inPoint](shapelayer-class.md#inpoint)
* [index](shapelayer-class.md#index)
* [isNameFromSource](shapelayer-class.md#isnamefromsource)
* [isNameSet](shapelayer-class.md#isnameset)
* [isTrackMatte](shapelayer-class.md#istrackmatte)
* [locked](shapelayer-class.md#locked)
* [motionBlur](shapelayer-class.md#motionblur)
* [name](shapelayer-class.md#name)
* [nullLayer](shapelayer-class.md#nulllayer)
* [outPoint](shapelayer-class.md#outpoint)
* [parent](shapelayer-class.md#parent)
* [preserveTransparency](shapelayer-class.md#preservetransparency)
* [quality](shapelayer-class.md#quality)
* [selectedProperties](shapelayer-class.md#selectedproperties)
* [shy](shapelayer-class.md#shy)
* [solo](shapelayer-class.md#solo)
* [source](shapelayer-class.md#source)
* [startTime](shapelayer-class.md#starttime)
* [stretch](shapelayer-class.md#stretch)
* [threeDLayer](shapelayer-class.md#threedlayer)
* [threeDPerChar](shapelayer-class.md#threedperchar)
* [time](shapelayer-class.md#time)
* [timeRemapEnabled](shapelayer-class.md#timeremapenabled)
* [trackMatteType](shapelayer-class.md#trackmattetype)
* [width](shapelayer-class.md#width)

### 사용 가능한 함수

* [activeAtTime](shapelayer-class.md#activeattime)
* [applyPreset](shapelayer-class.md#applypreset)
* [audioActiveAtTime](shapelayer-class.md#audioactiveattime)
* [calculateTransformFromPoints](shapelayer-class.md#calculatetransformfrompoints)
* [copyToComp](shapelayer-class.md#copytocomp)
* [duplicate](shapelayer-class.md#duplicate)
* [effect](shapelayer-class.md#effect)
* [mask](shapelayer-class.md#mask)
* [moveAfter](shapelayer-class.md#moveafter)
* [moveBefore](shapelayer-class.md#movebefore)
* [moveToBeginning](shapelayer-class.md#movetobeginning)
* [moveToEnd](shapelayer-class.md#movetoend)
* [openInViewer](shapelayer-class.md#openinviewer)
* [property](shapelayer-class.md#property)
* [remove](shapelayer-class.md#remove)
* [replaceSource](shapelayer-class.md#replacesource)
* [setParentWithJump](shapelayer-class.md#setparentwithjump)
* [sourceRectAtTime](shapelayer-class.md#sourcerectattime)

## 속성값

### Effects  <a id="effects"></a>

**● Effects**: \_[Property](../property-api/property-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[Effects](layer-class.md#effects)\_

### active  <a id="active"></a>

**● active**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[active](layer-class.md#active)\_

해당 레이어의 활성 여부를 가져옵니다.

### adjustmentLayer  <a id="adjustmentlayer"></a>

**● adjustmentLayer**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[adjustmentLayer](avlayer-class.md#adjustmentlayer)\_

레이어를 Adjustment 레이어인지 가져오거나 Adjustment 레이어로 만듭니다.

### audioActive  <a id="audioactive"></a>

**● audioActive**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[audioActive](avlayer-class.md#audioactive)\_

레이어의 오디오가 활성화 되어있는지 여부를 가져옵니다.

### audioEnabled  <a id="audioenabled"></a>

**● audioEnabled**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[audioEnabled](avlayer-class.md#audioenabled)\_

레이어의 오디오가 켜져있는지 여부를 가져오거나 설정합니다.

### autoOrient  <a id="autoorient"></a>

**● autoOrient**: _[AutoOrientType](../etc/enum/_affectscript_.affectscriptapi.autoorienttype.md)

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[autoOrient](avlayer-class.md#autoorient)\_

레이어의 방향값을 가져오거나 설정합니다.

### blendingMode  <a id="blendingmode"></a>

**● blendingMode**: [BlendingMode](../etc/enum/_affectscript_.affectscriptapi.blendingmode.md)

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[blendingMode](avlayer-class.md#blendingmode)\_

레이어에 적용된 블랜딩 모드를 가져오거나 새로 적용합니다.

### canSetCollapseTransformation  <a id="cansetcollapsetransformation"></a>

**● canSetCollapseTransformation**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[canSetCollapseTransformation](avlayer-class.md#cansetcollapsetransformation)\_

### canSetTimeRemapEnabled  <a id="cansettimeremapenabled"></a>

**● canSetTimeRemapEnabled**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[canSetTimeRemapEnabled](avlayer-class.md#cansettimeremapenabled)\_

### collapseTransformation  <a id="collapsetransformation"></a>

**● collapseTransformation**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[collapseTransformation](avlayer-class.md#collapsetransformation)\_

### comment  <a id="comment"></a>

**● comment**: `string`

\_부모로부터 상속됨 : [Layer](layer-class.md).[comment](layer-class.md#comment)\_

레이어에 대한 설명을 설정하거나 가져옵니다.

### containingComp  <a id="containingcomp"></a>

**● containingComp**: \_[CompItem](../item-api/compitem-class.md)\_

\_부모로부터 상속됨 : [Layer](layer-class.md).[containingComp](layer-class.md#containingcomp)\_

해당 레이어를 포함하고 있는 컴포지션 객체를 가져옵니다.

### effectsActive  <a id="effectsactive"></a>

**● effectsActive**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[effectsActive](avlayer-class.md#effectsactive)\_

### enabled  <a id="enabled"></a>

**● enabled**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[enabled](layer-class.md#enabled)\_

레이어의 사용가능 여부를 가져오거나 설정합니다.

### environmentLayer  <a id="environmentlayer"></a>

**● environmentLayer**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[environmentLayer](avlayer-class.md#environmentlayer)\_

### frameBlending  <a id="frameblending"></a>

**● frameBlending**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[frameBlending](avlayer-class.md#frameblending)\_

프레임 블랜딩 활성화 여부를 가져옵니다.

### frameBlendingType  <a id="frameblendingtype"></a>

**● frameBlendingType**: _[FrameBlendingType](../etc/enum/_affectscript_.affectscriptapi.frameblendingtype.md)

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[frameBlendingType](avlayer-class.md#frameblendingtype)\_

프레임 블랜딩 모드를 가져오거나 설정합니다.

### guideLayer  <a id="guidelayer"></a>

**● guideLayer**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[guideLayer](avlayer-class.md#guidelayer)\_

### hasAudio  <a id="hasaudio"></a>

**● hasAudio**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[hasAudio](avlayer-class.md#hasaudio)\_

레이어가 오디오를 가지고 있는지 반환합니다.

### hasTrackMatte  <a id="hastrackmatte"></a>

**● hasTrackMatte**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[hasTrackMatte](avlayer-class.md#hastrackmatte)\_

레이어가 트랙매트를 가지고 있는지 반환합니다.

### hasVideo  <a id="hasvideo"></a>

**● hasVideo**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[hasVideo](layer-class.md#hasvideo)\_

레이어가 비디오 레이어를 가지고 있는지 여부를 가져옵니다.

### height  <a id="height"></a>

**● height**: `number`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[height](avlayer-class.md#height)\_

레이어의 세로 크기를 반환합니다.

### inPoint  <a id="inpoint"></a>

**● inPoint**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[inPoint](layer-class.md#inpoint)\_

### index  <a id="index"></a>

**● index**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[index](layer-class.md#index)\_

레이어의 위치를 가져옵니다.

### isNameFromSource  <a id="isnamefromsource"></a>

**● isNameFromSource**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[isNameFromSource](avlayer-class.md#isnamefromsource)\_

### isNameSet  <a id="isnameset"></a>

**● isNameSet**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[isNameSet](layer-class.md#isnameset)\_

### isTrackMatte  <a id="istrackmatte"></a>

**● isTrackMatte**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[isTrackMatte](avlayer-class.md#istrackmatte)\_

### locked  <a id="locked"></a>

**● locked**: `boolean`

\_부모로부터 상속됨 : [Layer](layer-class.md).[locked](layer-class.md#locked)\_

레이어 잠금 여부를 가져오거나 설정합니다.

### motionBlur  <a id="motionblur"></a>

**● motionBlur**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[motionBlur](avlayer-class.md#motionblur)\_

레이어에 모션블러 활성화 여부를 가져오거나 설정합니다.

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

### preserveTransparency  <a id="preservetransparency"></a>

**● preserveTransparency**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[preserveTransparency](avlayer-class.md#preservetransparency)\_

### quality  <a id="quality"></a>

**● quality**: [LayerQuality](../etc/enum/_affectscript_.affectscriptapi.layerquality.md)

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[quality](avlayer-class.md#quality)\_

레이어의 미리보기 품질을 가져오거나 설정합니다.

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

### source  <a id="source"></a>

**● source**: \_[AVItem](../item-api/avitem-class.md)\_

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[source](avlayer-class.md#source)\_

레이어의 원본 소스 객체를 가져옵니다.

### startTime  <a id="starttime"></a>

**● startTime**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[startTime](layer-class.md#starttime)\_

레이어의 시작 시간을 가져오거나 설정합니다.

### stretch  <a id="stretch"></a>

**● stretch**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[stretch](layer-class.md#stretch)\_

레이어가 시간 늘리기가 적용되어 있는지 여부를 가져오거나 설정합니다. \(100 : 보통\)

### threeDLayer  <a id="threedlayer"></a>

**● threeDLayer**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[threeDLayer](avlayer-class.md#threedlayer)\_

레이어 3D 활성화 여부를 가져오거나 설정합니다.

### threeDPerChar  <a id="threedperchar"></a>

**● threeDPerChar**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[threeDPerChar](avlayer-class.md#threedperchar)\_

### time  <a id="time"></a>

**● time**: `number`

\_부모로부터 상속됨 : [Layer](layer-class.md).[time](layer-class.md#time)\_

레이어의 시간 값을 가져옵니다.

### timeRemapEnabled  <a id="timeremapenabled"></a>

**● timeRemapEnabled**: `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[timeRemapEnabled](avlayer-class.md#timeremapenabled)\_

### trackMatteType  <a id="trackmattetype"></a>

**● trackMatteType**: [TrackMatteType](../etc/enum/_affectscript_.affectscriptapi.trackmattetype.md)

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[trackMatteType](avlayer-class.md#trackmattetype)\_

레이어에 적용된 트랙메트의 타입을 가져오거나 설정합니다.

### width  <a id="width"></a>

**● width**: `number`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[width](avlayer-class.md#width)\_

레이어의 가로 크기를 가져옵니다.

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

### audioActiveAtTime  <a id="audioactiveattime"></a>

▸ **audioActiveAtTime**\(time: `number`\): `boolean`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[audioActiveAtTime](avlayer-class.md#audioactiveattime)\_

특정 시간에 오디오가 활성화 되어있는지 가져옵니다.

**매개변수:**

| Name | Type |
| :--- | :--- |
| time | `number` |

**반환:** `boolean`

### calculateTransformFromPoints  <a id="calculatetransformfrompoints"></a>

▸ **calculateTransformFromPoints**\(pointTopLeft: _[XYZ]\(../etc/modules/_affectscript_.affectscriptapi.md\#xyz\)_, pointTopRight:_ [XYZ](../etc/modules//_affectscript_.affectscriptapi.md#xyz)_, pointBottomRight:_ [XYZ](../etc/modules//_affectscript_.affectscriptapi.md#xyz)\_\): `Object`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[calculateTransformFromPoints](avlayer-class.md#calculatetransformfrompoints)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| pointTopLeft | [XYZ](../etc/modules//_affectscript_.affectscriptapi.md#xyz) |
| pointTopRight | [XYZ](../etc/modules//_affectscript_.affectscriptapi.md#xyz) |
| pointBottomRight | [XYZ](../etc/modules//_affectscript_.affectscriptapi.md#xyz) |

**반환:** `Object`

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

### openInViewer  <a id="openinviewer"></a>

▸ **openInViewer**\(\): [Viewer](../after-effects-api/viewer-class.md)

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[openInViewer](avlayer-class.md#openinviewer)\_

레이어를 엽니다.

**반환:** [Viewer](../after-effects-api/viewer-class.md)

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

### replaceSource  <a id="replacesource"></a>

▸ **replaceSource**\(newSource: [_AVItem_](../item-api/avitem-class.md), fixExpressions: \_`boolean`\_\): `void`

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[replaceSource](avlayer-class.md#replacesource)\_

레이어의 원본 파일을 변경합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| newSource | [AVItem](../item-api/avitem-class.md) | 변경할 아이템입니다. |
| fixExpressions | `boolean` |  |

### setParentWithJump  <a id="setparentwithjump"></a>

▸ **setParentWithJump**\(newParent?: \_[Layer](layer-class.md)\_\): `any`

\_부모로부터 상속됨 : [Layer](layer-class.md).[setParentWithJump](layer-class.md#setparentwithjump)\_

해당 레이어의 새로운 부모 레이어를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` newParent | [Layer](layer-class.md) | 새로 할당할 부모 레이어 객체입니다. |

**반환:** `any`

### sourceRectAtTime  <a id="sourcerectattime"></a>

▸ **sourceRectAtTime**\(timeT: `number`, extents: `boolean`\): [TopLeftWidthHeight](../etc/modules//_affectscript_.affectscriptapi.md#topleftwidthheight)

\_부모로부터 상속됨 : [AVLayer](avlayer-class.md).[sourceRectAtTime](avlayer-class.md#sourcerectattime)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| timeT | `number` |
| extents | `boolean` |

**반환:** [TopLeftWidthHeight](../etc/modules//_affectscript_.affectscriptapi.md#topleftwidthheight)

