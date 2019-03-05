# ShapeLayer 클래스

## 구조

↳ [AVLayer](/javascript-api/api/layer/avlayer-class.md)

**↳ ShapeLayer**

## 목차

### 속성값

- [Effects](/javascript-api/api/layer/shapelayer-class.md#effects)
- [active](/javascript-api/api/layer/shapelayer-class.md#active)
- [adjustmentLayer](/javascript-api/api/layer/shapelayer-class.md#adjustmentlayer)
- [audioActive](/javascript-api/api/layer/shapelayer-class.md#audioactive)
- [audioEnabled](/javascript-api/api/layer/shapelayer-class.md#audioenabled)
- [autoOrient](/javascript-api/api/layer/shapelayer-class.md#autoorient)
- [blendingMode](/javascript-api/api/layer/shapelayer-class.md#blendingmode)
- [canSetCollapseTransformation](/javascript-api/api/layer/shapelayer-class.md#cansetcollapsetransformation)
- [canSetTimeRemapEnabled](/javascript-api/api/layer/shapelayer-class.md#cansettimeremapenabled)
- [collapseTransformation](/javascript-api/api/layer/shapelayer-class.md#collapsetransformation)
- [comment](/javascript-api/api/layer/shapelayer-class.md#comment)
- [containingComp](/javascript-api/api/layer/shapelayer-class.md#containingcomp)
- [effectsActive](/javascript-api/api/layer/shapelayer-class.md#effectsactive)
- [enabled](/javascript-api/api/layer/shapelayer-class.md#enabled)
- [environmentLayer](/javascript-api/api/layer/shapelayer-class.md#environmentlayer)
- [frameBlending](/javascript-api/api/layer/shapelayer-class.md#frameblending)
- [frameBlendingType](/javascript-api/api/layer/shapelayer-class.md#frameblendingtype)
- [guideLayer](/javascript-api/api/layer/shapelayer-class.md#guidelayer)
- [hasAudio](/javascript-api/api/layer/shapelayer-class.md#hasaudio)
- [hasTrackMatte](/javascript-api/api/layer/shapelayer-class.md#hastrackmatte)
- [hasVideo](/javascript-api/api/layer/shapelayer-class.md#hasvideo)
- [height](/javascript-api/api/layer/shapelayer-class.md#height)
- [inPoint](/javascript-api/api/layer/shapelayer-class.md#inpoint)
- [index](/javascript-api/api/layer/shapelayer-class.md#index)
- [isNameFromSource](/javascript-api/api/layer/shapelayer-class.md#isnamefromsource)
- [isNameSet](/javascript-api/api/layer/shapelayer-class.md#isnameset)
- [isTrackMatte](/javascript-api/api/layer/shapelayer-class.md#istrackmatte)
- [locked](/javascript-api/api/layer/shapelayer-class.md#locked)
- [motionBlur](/javascript-api/api/layer/shapelayer-class.md#motionblur)
- [name](/javascript-api/api/layer/shapelayer-class.md#name)
- [nullLayer](/javascript-api/api/layer/shapelayer-class.md#nulllayer)
- [outPoint](/javascript-api/api/layer/shapelayer-class.md#outpoint)
- [parent](/javascript-api/api/layer/shapelayer-class.md#parent)
- [preserveTransparency](/javascript-api/api/layer/shapelayer-class.md#preservetransparency)
- [quality](/javascript-api/api/layer/shapelayer-class.md#quality)
- [selectedProperties](/javascript-api/api/layer/shapelayer-class.md#selectedproperties)
- [shy](/javascript-api/api/layer/shapelayer-class.md#shy)
- [solo](/javascript-api/api/layer/shapelayer-class.md#solo)
- [source](/javascript-api/api/layer/shapelayer-class.md#source)
- [startTime](/javascript-api/api/layer/shapelayer-class.md#starttime)
- [stretch](/javascript-api/api/layer/shapelayer-class.md#stretch)
- [threeDLayer](/javascript-api/api/layer/shapelayer-class.md#threedlayer)
- [threeDPerChar](/javascript-api/api/layer/shapelayer-class.md#threedperchar)
- [time](/javascript-api/api/layer/shapelayer-class.md#time)
- [timeRemapEnabled](/javascript-api/api/layer/shapelayer-class.md#timeremapenabled)
- [trackMatteType](/javascript-api/api/layer/shapelayer-class.md#trackmattetype)
- [width](/javascript-api/api/layer/shapelayer-class.md#width)

### 사용 가능한 함수

- [activeAtTime](/javascript-api/api/layer/shapelayer-class.md#activeattime)
- [applyPreset](/javascript-api/api/layer/shapelayer-class.md#applypreset)
- [audioActiveAtTime](/javascript-api/api/layer/shapelayer-class.md#audioactiveattime)
- [calculateTransformFromPoints](/javascript-api/api/layer/shapelayer-class.md#calculatetransformfrompoints)
- [copyToComp](/javascript-api/api/layer/shapelayer-class.md#copytocomp)
- [duplicate](/javascript-api/api/layer/shapelayer-class.md#duplicate)
- [effect](/javascript-api/api/layer/shapelayer-class.md#effect)
- [mask](/javascript-api/api/layer/shapelayer-class.md#mask)
- [moveAfter](/javascript-api/api/layer/shapelayer-class.md#moveafter)
- [moveBefore](/javascript-api/api/layer/shapelayer-class.md#movebefore)
- [moveToBeginning](/javascript-api/api/layer/shapelayer-class.md#movetobeginning)
- [moveToEnd](/javascript-api/api/layer/shapelayer-class.md#movetoend)
- [openInViewer](/javascript-api/api/layer/shapelayer-class.md#openinviewer)
- [property](/javascript-api/api/layer/shapelayer-class.md#property)
- [remove](/javascript-api/api/layer/shapelayer-class.md#remove)
- [replaceSource](/javascript-api/api/layer/shapelayer-class.md#replacesource)
- [setParentWithJump](/javascript-api/api/layer/shapelayer-class.md#setparentwithjump)
- [sourceRectAtTime](/javascript-api/api/layer/shapelayer-class.md#sourcerectattime)

---

## 속성값

<a id="effects"></a>

### Effects

**● Effects**: \_[Property](/javascript-api/api/property/property-class.md)\_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[Effects](/javascript-api/api/layer/layer-class.md#effects)\_

---

<a id="active"></a>

### active

**● active**: _`boolean`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[active](/javascript-api/api/layer/layer-class.md#active)\_

해당 레이어의 활성 여부를 가져옵니다.

---

<a id="adjustmentlayer"></a>

### adjustmentLayer

**● adjustmentLayer**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[adjustmentLayer](/javascript-api/api/layer/avlayer-class.md#adjustmentlayer)\_

레이어를 Adjustment 레이어인지 가져오거나 Adjustment 레이어로 만듭니다.

---

<a id="audioactive"></a>

### audioActive

**● audioActive**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[audioActive](/javascript-api/api/layer/avlayer-class.md#audioactive)\_

레이어의 오디오가 활성화 되어있는지 여부를 가져옵니다.

---

<a id="audioenabled"></a>

### audioEnabled

**● audioEnabled**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[audioEnabled](/javascript-api/api/layer/avlayer-class.md#audioenabled)\_

레이어의 오디오가 켜져있는지 여부를 가져오거나 설정합니다.

---

<a id="autoorient"></a>

### autoOrient

**● autoOrient**: _[AutoOrientType](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.autoorienttype.md)\_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[autoOrient](/javascript-api/api/layer/avlayer-class.md#autoorient)\_

레이어의 방향값을 가져오거나 설정합니다.

---

<a id="blendingmode"></a>

### blendingMode

**● blendingMode**: _[BlendingMode](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.blendingmode.md)\_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[blendingMode](/javascript-api/api/layer/avlayer-class.md#blendingmode)\_

레이어에 적용된 블랜딩 모드를 가져오거나 새로 적용합니다.

---

<a id="cansetcollapsetransformation"></a>

### canSetCollapseTransformation

**● canSetCollapseTransformation**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[canSetCollapseTransformation](/javascript-api/api/layer/avlayer-class.md#cansetcollapsetransformation)\_

---

<a id="cansettimeremapenabled"></a>

### canSetTimeRemapEnabled

**● canSetTimeRemapEnabled**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[canSetTimeRemapEnabled](/javascript-api/api/layer/avlayer-class.md#cansettimeremapenabled)\_

---

<a id="collapsetransformation"></a>

### collapseTransformation

**● collapseTransformation**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[collapseTransformation](/javascript-api/api/layer/avlayer-class.md#collapsetransformation)\_

---

<a id="comment"></a>

### comment

**● comment**: _`string`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[comment](/javascript-api/api/layer/layer-class.md#comment)\_

레이어에 대한 설명을 설정하거나 가져옵니다.

---

<a id="containingcomp"></a>

### containingComp

**● containingComp**: \_[CompItem](/javascript-api/api/item/compitem-class.md)\_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[containingComp](/javascript-api/api/layer/layer-class.md#containingcomp)\_

해당 레이어를 포함하고 있는 컴포지션 객체를 가져옵니다.

---

<a id="effectsactive"></a>

### effectsActive

**● effectsActive**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[effectsActive](/javascript-api/api/layer/avlayer-class.md#effectsactive)\_

---

<a id="enabled"></a>

### enabled

**● enabled**: _`boolean`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[enabled](/javascript-api/api/layer/layer-class.md#enabled)\_

레이어의 사용가능 여부를 가져오거나 설정합니다.

---

<a id="environmentlayer"></a>

### environmentLayer

**● environmentLayer**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[environmentLayer](/javascript-api/api/layer/avlayer-class.md#environmentlayer)\_

---

<a id="frameblending"></a>

### frameBlending

**● frameBlending**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[frameBlending](/javascript-api/api/layer/avlayer-class.md#frameblending)\_

프레임 블랜딩 활성화 여부를 가져옵니다.

---

<a id="frameblendingtype"></a>

### frameBlendingType

**● frameBlendingType**: _[FrameBlendingType](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.frameblendingtype.md)\_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[frameBlendingType](/javascript-api/api/layer/avlayer-class.md#frameblendingtype)\_

프레임 블랜딩 모드를 가져오거나 설정합니다.

---

<a id="guidelayer"></a>

### guideLayer

**● guideLayer**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[guideLayer](/javascript-api/api/layer/avlayer-class.md#guidelayer)\_

---

<a id="hasaudio"></a>

### hasAudio

**● hasAudio**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[hasAudio](/javascript-api/api/layer/avlayer-class.md#hasaudio)\_

레이어가 오디오를 가지고 있는지 반환합니다.

---

<a id="hastrackmatte"></a>

### hasTrackMatte

**● hasTrackMatte**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[hasTrackMatte](/javascript-api/api/layer/avlayer-class.md#hastrackmatte)\_

레이어가 트랙매트를 가지고 있는지 반환합니다.

---

<a id="hasvideo"></a>

### hasVideo

**● hasVideo**: _`boolean`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[hasVideo](/javascript-api/api/layer/layer-class.md#hasvideo)\_

레이어가 비디오 레이어를 가지고 있는지 여부를 가져옵니다.

---

<a id="height"></a>

### height

**● height**: _`number`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[height](/javascript-api/api/layer/avlayer-class.md#height)\_

레이어의 세로 크기를 반환합니다.

---

<a id="inpoint"></a>

### inPoint

**● inPoint**: _`number`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[inPoint](/javascript-api/api/layer/layer-class.md#inpoint)\_

---

<a id="index"></a>

### index

**● index**: _`number`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[index](/javascript-api/api/layer/layer-class.md#index)\_

레이어의 위치를 가져옵니다.

---

<a id="isnamefromsource"></a>

### isNameFromSource

**● isNameFromSource**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[isNameFromSource](/javascript-api/api/layer/avlayer-class.md#isnamefromsource)\_

---

<a id="isnameset"></a>

### isNameSet

**● isNameSet**: _`boolean`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[isNameSet](/javascript-api/api/layer/layer-class.md#isnameset)\_

---

<a id="istrackmatte"></a>

### isTrackMatte

**● isTrackMatte**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[isTrackMatte](/javascript-api/api/layer/avlayer-class.md#istrackmatte)\_

---

<a id="locked"></a>

### locked

**● locked**: _`boolean`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[locked](/javascript-api/api/layer/layer-class.md#locked)\_

레이어 잠금 여부를 가져오거나 설정합니다.

---

<a id="motionblur"></a>

### motionBlur

**● motionBlur**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[motionBlur](/javascript-api/api/layer/avlayer-class.md#motionblur)\_

레이어에 모션블러 활성화 여부를 가져오거나 설정합니다.

---

<a id="name"></a>

### name

**● name**: _`string`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[name](/javascript-api/api/layer/layer-class.md#name)\_

레이어의 이름을 가져오거나 설정합니다.

---

<a id="nulllayer"></a>

### nullLayer

**● nullLayer**: _`boolean`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[nullLayer](/javascript-api/api/layer/layer-class.md#nulllayer)\_

레이어가 Null 레이어인지 여부를 가져옵니다.

---

<a id="outpoint"></a>

### outPoint

**● outPoint**: _`number`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[outPoint](/javascript-api/api/layer/layer-class.md#outpoint)\_

레이어의 끝날 시간을 설정하거나 가져옵니다.

---

<a id="parent"></a>

### parent

**● parent**: \_[Layer](/javascript-api/api/layer/layer-class.md)\_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[parent](/javascript-api/api/layer/layer-class.md#parent)\_

해당 레이어의 부모 레이어를 가져옵니다. 없다면 Null을 반환합니다.

---

<a id="preservetransparency"></a>

### preserveTransparency

**● preserveTransparency**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[preserveTransparency](/javascript-api/api/layer/avlayer-class.md#preservetransparency)\_

---

<a id="quality"></a>

### quality

**● quality**: _[LayerQuality](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.layerquality.md)\_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[quality](/javascript-api/api/layer/avlayer-class.md#quality)\_

레이어의 미리보기 품질을 가져오거나 설정합니다.

---

<a id="selectedproperties"></a>

### selectedProperties

**● selectedProperties**: \_[PropertyGroup](/javascript-api/api/property/propertygroup-class.md)\_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[selectedProperties](/javascript-api/api/layer/layer-class.md#selectedproperties)\_

현재 레이어에 적용된 설정값을 모두 가져옵니다.

---

<a id="shy"></a>

### shy

**● shy**: _`boolean`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[shy](/javascript-api/api/layer/layer-class.md#shy)\_

레이어 숨김 여부를 가져오거나 설정합니다.

---

<a id="solo"></a>

### solo

**● solo**: _`boolean`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[solo](/javascript-api/api/layer/layer-class.md#solo)\_

---

<a id="source"></a>

### source

**● source**: \_[AVItem](/javascript-api/api/item/avitem-class.md)\_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[source](/javascript-api/api/layer/avlayer-class.md#source)\_

레이어의 원본 소스 객체를 가져옵니다.

---

<a id="starttime"></a>

### startTime

**● startTime**: _`number`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[startTime](/javascript-api/api/layer/layer-class.md#starttime)\_

레이어의 시작 시간을 가져오거나 설정합니다.

---

<a id="stretch"></a>

### stretch

**● stretch**: _`number`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[stretch](/javascript-api/api/layer/layer-class.md#stretch)\_

레이어가 시간 늘리기가 적용되어 있는지 여부를 가져오거나 설정합니다. (100 : 보통)

---

<a id="threedlayer"></a>

### threeDLayer

**● threeDLayer**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[threeDLayer](/javascript-api/api/layer/avlayer-class.md#threedlayer)\_

레이어 3D 활성화 여부를 가져오거나 설정합니다.

---

<a id="threedperchar"></a>

### threeDPerChar

**● threeDPerChar**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[threeDPerChar](/javascript-api/api/layer/avlayer-class.md#threedperchar)\_

---

<a id="time"></a>

### time

**● time**: _`number`_

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[time](/javascript-api/api/layer/layer-class.md#time)\_

레이어의 시간 값을 가져옵니다.

---

<a id="timeremapenabled"></a>

### timeRemapEnabled

**● timeRemapEnabled**: _`boolean`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[timeRemapEnabled](/javascript-api/api/layer/avlayer-class.md#timeremapenabled)\_

---

<a id="trackmattetype"></a>

### trackMatteType

**● trackMatteType**: _[TrackMatteType](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.trackmattetype.md)\_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[trackMatteType](/javascript-api/api/layer/avlayer-class.md#trackmattetype)\_

레이어에 적용된 트랙메트의 타입을 가져오거나 설정합니다.

---

<a id="width"></a>

### width

**● width**: _`number`_

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[width](/javascript-api/api/layer/avlayer-class.md#width)\_

레이어의 가로 크기를 가져옵니다.

---

## 사용 가능한 함수

<a id="activeattime"></a>

### activeAtTime

▸ **activeAtTime**(time: _`number`_): `boolean`

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[activeAtTime](/javascript-api/api/layer/layer-class.md#activeattime)\_

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

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[applyPreset](/javascript-api/api/layer/layer-class.md#applypreset)\_

레이어에 프리셋을 적용합니다.

**매개변수:**

| Name       | Type     | Description               |
| ---------- | -------- | ------------------------- |
| presetName | `string` | 적용할 프리셋 이름입니다. |

---

<a id="audioactiveattime"></a>

### audioActiveAtTime

▸ **audioActiveAtTime**(time: _`number`_): `boolean`

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[audioActiveAtTime](/javascript-api/api/layer/avlayer-class.md#audioactiveattime)\_

특정 시간에 오디오가 활성화 되어있는지 가져옵니다.

**매개변수:**

| Name | Type     |
| ---- | -------- |
| time | `number` |

**반환:** `boolean`

---

<a id="calculatetransformfrompoints"></a>

### calculateTransformFromPoints

▸ **calculateTransformFromPoints**(pointTopLeft: _[XYZ](../modules/\_affectscript_.affectscriptapi.md#xyz)_, pointTopRight: _[XYZ](../modules/_affectscript_.affectscriptapi.md#xyz)_, pointBottomRight: _[XYZ](../modules/_affectscript_.affectscriptapi.md#xyz)\_): `Object`

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[calculateTransformFromPoints](/javascript-api/api/layer/avlayer-class.md#calculatetransformfrompoints)\_

**매개변수:**

| Name             | Type                                                    |
| ---------------- | ------------------------------------------------------- |
| pointTopLeft     | [XYZ](../modules/_affectscript_.affectscriptapi.md#xyz) |
| pointTopRight    | [XYZ](../modules/_affectscript_.affectscriptapi.md#xyz) |
| pointBottomRight | [XYZ](../modules/_affectscript_.affectscriptapi.md#xyz) |

**반환:** `Object`

---

<a id="copytocomp"></a>

### copyToComp

▸ **copyToComp**(intoComp: \_[CompItem](/javascript-api/api/item/compitem-class.md)\_): `void`

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[copyToComp](/javascript-api/api/layer/layer-class.md#copytocomp)\_

컴포지션에 레이어를 복사합니다.

**매개변수:**

| Name     | Type                                               | Description                 |
| -------- | -------------------------------------------------- | --------------------------- |
| intoComp | [CompItem](/javascript-api/api/item/compitem-class.md) | 복사할 컴포지션 대상입니다. |

---

<a id="duplicate"></a>

### duplicate

▸ **duplicate**(): [AVLayer](/javascript-api/api/layer/avlayer-class.md)

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[duplicate](/javascript-api/api/layer/layer-class.md#duplicate)\_

레이어를 복제합니다.

**반환:** [AVLayer](/javascript-api/api/layer/avlayer-class.md)

---

<a id="effect"></a>

### effect

▸ **effect**(effectName: _`string`_): `function`

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[effect](/javascript-api/api/layer/layer-class.md#effect)\_

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

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[mask](/javascript-api/api/layer/layer-class.md#mask)\_

**매개변수:**

| Name  | Type     |
| ----- | -------- |
| index | `number` |

**반환:** [MaskPropertyGroup](/javascript-api/api/property/maskpropertygroup-class.md)

---

<a id="moveafter"></a>

### moveAfter

▸ **moveAfter**(layer: \_[Layer](/javascript-api/api/layer/layer-class.md)\_): `void`

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[moveAfter](/javascript-api/api/layer/layer-class.md#moveafter)\_

다음 레이어로 이동합니다.

**매개변수:**

| Name  | Type                                          | Description                                  |
| ----- | --------------------------------------------- | -------------------------------------------- |
| layer | [Layer](/javascript-api/api/layer/layer-class.md) | 다음 레이어로 이동하기 전 레이어 객체입니다. |

---

<a id="movebefore"></a>

### moveBefore

▸ **moveBefore**(layer: \_[Layer](/javascript-api/api/layer/layer-class.md)\_): `void`

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[moveBefore](/javascript-api/api/layer/layer-class.md#movebefore)\_

이전 레이어로 이동합니다.

**매개변수:**

| Name  | Type                                          | Description                                  |
| ----- | --------------------------------------------- | -------------------------------------------- |
| layer | [Layer](/javascript-api/api/layer/layer-class.md) | 이전 레이어로 이동하기 전 레이어 객체입니다. |

---

<a id="movetobeginning"></a>

### moveToBeginning

▸ **moveToBeginning**(): `void`

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[moveToBeginning](/javascript-api/api/layer/layer-class.md#movetobeginning)\_

처음 레이어로 이동합니다.

---

<a id="movetoend"></a>

### moveToEnd

▸ **moveToEnd**(): `void`

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[moveToEnd](/javascript-api/api/layer/layer-class.md#movetoend)\_

마지막 레이어로 이동합니다.

---

<a id="openinviewer"></a>

### openInViewer

▸ **openInViewer**(): [Viewer](/javascript-api/api/controls/viewer-class.md)

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[openInViewer](/javascript-api/api/layer/avlayer-class.md#openinviewer)\_

레이어를 엽니다.

**반환:** [Viewer](/javascript-api/api/controls/viewer-class.md)

---

<a id="property"></a>

### property

▸ **property**(propertyName: _`String`_): [Property](/javascript-api/api/property/property-class.md)

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[property](/javascript-api/api/layer/layer-class.md#property)\_

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

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[remove](/javascript-api/api/layer/layer-class.md#remove)\_

레이어를 제거합니다.

---

<a id="replacesource"></a>

### replaceSource

▸ **replaceSource**(newSource: _[AVItem](/javascript-api/api/item/avitem-class.md)_, fixExpressions: \_`boolean`\_): `void`

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[replaceSource](/javascript-api/api/layer/avlayer-class.md#replacesource)\_

레이어의 원본 파일을 변경합니다.

**매개변수:**

| Name           | Type                                           | Description          |
| -------------- | ---------------------------------------------- | -------------------- |
| newSource      | [AVItem](/javascript-api/api/item/avitem-class.md) | 변경할 아이템입니다. |
| fixExpressions | `boolean`                                      |                      |

---

<a id="setparentwithjump"></a>

### setParentWithJump

▸ **setParentWithJump**(newParent?: \_[Layer](/javascript-api/api/layer/layer-class.md)\_): `any`

\_부모로부터 상속됨 : [Layer](/javascript-api/api/layer/layer-class.md).[setParentWithJump](/javascript-api/api/layer/layer-class.md#setparentwithjump)\_

해당 레이어의 새로운 부모 레이어를 설정합니다.

**매개변수:**

| Name                 | Type                                          | Description                         |
| -------------------- | --------------------------------------------- | ----------------------------------- |
| `Optional` newParent | [Layer](/javascript-api/api/layer/layer-class.md) | 새로 할당할 부모 레이어 객체입니다. |

**반환:** `any`

---

<a id="sourcerectattime"></a>

### sourceRectAtTime

▸ **sourceRectAtTime**(timeT: _`number`_, extents: _`boolean`_): [TopLeftWidthHeight](../modules/_affectscript_.affectscriptapi.md#topleftwidthheight)

\_부모로부터 상속됨 : [AVLayer](/javascript-api/api/layer/avlayer-class.md).[sourceRectAtTime](/javascript-api/api/layer/avlayer-class.md#sourcerectattime)\_

**매개변수:**

| Name    | Type      |
| ------- | --------- |
| timeT   | `number`  |
| extents | `boolean` |

**반환:** [TopLeftWidthHeight](../modules/_affectscript_.affectscriptapi.md#topleftwidthheight)

---
