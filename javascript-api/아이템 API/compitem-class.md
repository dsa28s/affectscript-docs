# CompItem 클래스

## 구조

↳ [AVItem](/javascript-api/api/item/avitem-class.md)

**↳ CompItem**

## 목차

### 속성값

- [activeCamera](/javascript-api/api/item/compitem-class.md#activecamera)
- [bgColor](/javascript-api/api/item/compitem-class.md#bgcolor)
- [comment](/javascript-api/api/item/compitem-class.md#comment)
- [displayStartTime](/javascript-api/api/item/compitem-class.md#displaystarttime)
- [draft3d](/javascript-api/api/item/compitem-class.md#draft3d)
- [dropFrame](/javascript-api/api/item/compitem-class.md#dropframe)
- [duration](/javascript-api/api/item/compitem-class.md#duration)
- [footageMissing](/javascript-api/api/item/compitem-class.md#footagemissing)
- [frameBlending](/javascript-api/api/item/compitem-class.md#frameblending)
- [frameDuration](/javascript-api/api/item/compitem-class.md#frameduration)
- [frameRate](/javascript-api/api/item/compitem-class.md#framerate)
- [hasAudio](/javascript-api/api/item/compitem-class.md#hasaudio)
- [hasVideo](/javascript-api/api/item/compitem-class.md#hasvideo)
- [height](/javascript-api/api/item/compitem-class.md#height)
- [hideShyLayer](/javascript-api/api/item/compitem-class.md#hideshylayer)
- [id](/javascript-api/api/item/compitem-class.md#id)
- [label](/javascript-api/api/item/compitem-class.md#label)
- [layers](/javascript-api/api/item/compitem-class.md#layers)
- [motionBlur](/javascript-api/api/item/compitem-class.md#motionblur)
- [motionBlurAdaptiveSampleLimit](/javascript-api/api/item/compitem-class.md#motionbluradaptivesamplelimit)
- [motionBlurSamplesPerFrame](/javascript-api/api/item/compitem-class.md#motionblursamplesperframe)
- [name](/javascript-api/api/item/compitem-class.md#name)
- [numLayers](/javascript-api/api/item/compitem-class.md#numlayers)
- [parentFolder](/javascript-api/api/item/compitem-class.md#parentfolder)
- [pixelAspect](/javascript-api/api/item/compitem-class.md#pixelaspect)
- [preserveNestedFrameRate](/javascript-api/api/item/compitem-class.md#preservenestedframerate)
- [preserveNestedResolution](/javascript-api/api/item/compitem-class.md#preservenestedresolution)
- [proxySource](/javascript-api/api/item/compitem-class.md#proxysource)
- [renderer](/javascript-api/api/item/compitem-class.md#renderer)
- [renderers](/javascript-api/api/item/compitem-class.md#renderers)
- [resolutionFactor](/javascript-api/api/item/compitem-class.md#resolutionfactor)
- [selected](/javascript-api/api/item/compitem-class.md#selected)
- [selectedLayers](/javascript-api/api/item/compitem-class.md#selectedlayers)
- [selectedProperties](/javascript-api/api/item/compitem-class.md#selectedproperties)
- [shutterAngle](/javascript-api/api/item/compitem-class.md#shutterangle)
- [shutterPhase](/javascript-api/api/item/compitem-class.md#shutterphase)
- [time](/javascript-api/api/item/compitem-class.md#time)
- [typeName](/javascript-api/api/item/compitem-class.md#typename)
- [useProxy](/javascript-api/api/item/compitem-class.md#useproxy)
- [usedIn](/javascript-api/api/item/compitem-class.md#usedin)
- [width](/javascript-api/api/item/compitem-class.md#width)
- [workAreaDuration](/javascript-api/api/item/compitem-class.md#workareaduration)
- [workAreaStart](/javascript-api/api/item/compitem-class.md#workareastart)

### 사용 가능한 함수

- [duplicate](/javascript-api/api/item/compitem-class.md#duplicate)
- [layer](/javascript-api/api/item/compitem-class.md#layer)
- [openInViewer](/javascript-api/api/item/compitem-class.md#openinviewer)
- [remove](/javascript-api/api/item/compitem-class.md#remove)
- [setProxy](/javascript-api/api/item/compitem-class.md#setproxy)
- [setProxyToNone](/javascript-api/api/item/compitem-class.md#setproxytonone)
- [setProxyWithPlaceholder](/javascript-api/api/item/compitem-class.md#setproxywithplaceholder)
- [setProxyWithSequence](/javascript-api/api/item/compitem-class.md#setproxywithsequence)
- [setProxyWithSolid](/javascript-api/api/item/compitem-class.md#setproxywithsolid)

---

## Properties

<a id="activecamera"></a>

### activeCamera

**● activeCamera**: \_[CameraLayer](/javascript-api/api/layer/cameralayer-class.md)\_

컴포지션에 활성화 된 카메라 객체를 가져옵니다.

---

<a id="bgcolor"></a>

### bgColor

**● bgColor**: _`number`[]_

컴포지션의 배경색깔을 설정하거나 가져옵니다. \[R, G, B\] 형태입니다.

---

<a id="comment"></a>

### comment

**● comment**: _`string`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[comment](/javascript-api/api/item/item-class.md#comment)\_

아이템에 대한 메모를 추가하거나 가져옵니다.

---

<a id="displaystarttime"></a>

### displayStartTime

**● displayStartTime**: _`number`_

컴포지션이 시작될 시간을 설정하거나 가져옵니다.

---

<a id="draft3d"></a>

### draft3d

**● draft3d**: _`boolean`_

Draft 3D 모드 활성화 여부를 설정하거나 가져옵니다.

---

<a id="dropframe"></a>

### dropFrame

**● dropFrame**: _`boolean`_

컴포지션이 Drop Frame을 사용할지 여부를 설정하거나 가져옵니다.

---

<a id="duration"></a>

### duration

**● duration**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[duration](/javascript-api/api/item/avitem-class.md#duration)\_

아이템의 길이를 가져옵니다. (재생 시간)

---

<a id="footagemissing"></a>

### footageMissing

**● footageMissing**: _`boolean`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[footageMissing](/javascript-api/api/item/avitem-class.md#footagemissing)\_

아이템의 원본 파일이 없을 경우 true 가 반환됩니다.

---

<a id="frameblending"></a>

### frameBlending

**● frameBlending**: _`boolean`_

컴포지션의 블랜딩 모드 활성 여부를 설정하거나 가져옵니다.

---

<a id="frameduration"></a>

### frameDuration

**● frameDuration**: _`number`_

\_Overrides [AVItem](/javascript-api/api/item/avitem-class.md).[frameDuration](/javascript-api/api/item/avitem-class.md#frameduration)\_

컴포지션의 전체 프레임 수를 설정하거나 가져옵니다.

---

<a id="framerate"></a>

### frameRate

**● frameRate**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[frameRate](/javascript-api/api/item/avitem-class.md#framerate)\_

아이템의 초당 프레임 수를 가져옵니다.

---

<a id="hasaudio"></a>

### hasAudio

**● hasAudio**: _`boolean`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[hasAudio](/javascript-api/api/item/avitem-class.md#hasaudio)\_

아이템의 오디오 레이어 여부를 가져옵니다.

---

<a id="hasvideo"></a>

### hasVideo

**● hasVideo**: _`boolean`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[hasVideo](/javascript-api/api/item/avitem-class.md#hasvideo)\_

아이템의 비디오 레이어 여부를 가져옵니다.

---

<a id="height"></a>

### height

**● height**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[height](/javascript-api/api/item/avitem-class.md#height)\_

아이템의 세로 크기를 가져옵니다.

---

<a id="hideshylayer"></a>

### hideShyLayer

**● hideShyLayer**: _`boolean`_

컴포지션 안에 숨김 레이어가 있을 경우 숨길지 여부를 설정하거나 가져옵니다.

---

<a id="id"></a>

### id

**● id**: _`number`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[id](/javascript-api/api/item/item-class.md#id)\_

아이템에 대한 ID를 가져옵니다.

---

<a id="label"></a>

### label

**● label**: _`number`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[label](/javascript-api/api/item/item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. (1 ~ 16까지 사용가능)

---

<a id="layers"></a>

### layers

**● layers**: \_[LayerCollection](/javascript-api/api/collection/layercollection-class.md)\_

컴포지션에 있는 모든 레이어를 객체로 가져옵니다.

---

<a id="motionblur"></a>

### motionBlur

**● motionBlur**: _`boolean`_

컴포지션의 모션 블러 사용 여부를 설정하거나 가져옵니다.

---

<a id="motionbluradaptivesamplelimit"></a>

### motionBlurAdaptiveSampleLimit

**● motionBlurAdaptiveSampleLimit**: _`number`_

컴포지션이 사용할 모션블러 샘플 사이즈를 가져오거나 설정합니다. (2D) / (2 ~ 256)

---

<a id="motionblursamplesperframe"></a>

### motionBlurSamplesPerFrame

**● motionBlurSamplesPerFrame**: _`number`_

컴포지션이 사용할 모션블러 샘플 사이즈를 가져오거나 설정합니다. (2D) / (2 ~ 64)

---

<a id="name"></a>

### name

**● name**: _`string`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[name](/javascript-api/api/item/avitem-class.md#name)\_

\_Overrides [Item](/javascript-api/api/item/item-class.md).[name](/javascript-api/api/item/item-class.md#name)\_

아이템의 이름을 설정하거나 가져옵니다.

---

<a id="numlayers"></a>

### numLayers

**● numLayers**: _`number`_

컴포지션이 가지고 있는 모든 레이어의 수를 가져옵니다.

---

<a id="parentfolder"></a>

### parentFolder

**● parentFolder**: \_[FolderItem](/javascript-api/api/item/folderitem-class.md)\_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[parentFolder](/javascript-api/api/item/item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

---

<a id="pixelaspect"></a>

### pixelAspect

**● pixelAspect**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[pixelAspect](/javascript-api/api/item/avitem-class.md#pixelaspect)\_

---

<a id="preservenestedframerate"></a>

### preserveNestedFrameRate

**● preserveNestedFrameRate**: _`boolean`_

---

<a id="preservenestedresolution"></a>

### preserveNestedResolution

**● preserveNestedResolution**: _`boolean`_

---

<a id="proxysource"></a>

### proxySource

**● proxySource**: \_[FootageSource](/javascript-api/api/footage/footagesource-class.md)\_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[proxySource](/javascript-api/api/item/avitem-class.md#proxysource)\_

---

<a id="renderer"></a>

### renderer

**● renderer**: _`string`_

컴포지션이 사용하고 있는 렌더러를 가져오거나 설정합니다.

---

<a id="renderers"></a>

### renderers

**● renderers**: _`string`[]_

컴포지션이 사용할 수 있는 모든 렌더러를 배열로 가져옵니다.

---

<a id="resolutionfactor"></a>

### resolutionFactor

**● resolutionFactor**: _`number`[]_

컴포지션이 미리보기가 될 때에 낮출 비율을 가져오거나 설정합니다.

---

<a id="selected"></a>

### selected

**● selected**: _`boolean`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[selected](/javascript-api/api/item/item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

---

<a id="selectedlayers"></a>

### selectedLayers

**● selectedLayers**: \_[Layer](/javascript-api/api/layer/layer-class.md)[]\_

컴포지션에서 선택된 모든 레이어를 가져옵니다.

---

<a id="selectedproperties"></a>

### selectedProperties

**● selectedProperties**: \_[Property](/javascript-api/api/property/property-class.md)\_

아이템에서 선택된 효과 (혹은 설정값) 를 가져옵니다.

---

<a id="shutterangle"></a>

### shutterAngle

**● shutterAngle**: _`number`_

---

<a id="shutterphase"></a>

### shutterPhase

**● shutterPhase**: _`number`_

---

<a id="time"></a>

### time

**● time**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[time](/javascript-api/api/item/avitem-class.md#time)\_

아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다. 미리보기에 나오고 있을 경우 현재 시간을 설정합니다.

---

<a id="typename"></a>

### typeName

**● typeName**: _`string`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[typeName](/javascript-api/api/item/item-class.md#typename)\_

아이템의 종류를 문자열로 가져옵니다.

---

<a id="useproxy"></a>

### useProxy

**● useProxy**: _`boolean`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[useProxy](/javascript-api/api/item/avitem-class.md#useproxy)\_

아이템의 프록시 사용 여부를 설정하거나 가져옵니다.

---

<a id="usedin"></a>

### usedIn

**● usedIn**: \_[CompItem](/javascript-api/api/item/compitem-class.md)[]\_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[usedIn](/javascript-api/api/item/avitem-class.md#usedin)\_

아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.

---

<a id="width"></a>

### width

**● width**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[width](/javascript-api/api/item/avitem-class.md#width)\_

아이템의 가로 크기를 가져옵니다.

---

<a id="workareaduration"></a>

### workAreaDuration

**● workAreaDuration**: _`number`_

컴포지션에서 미리보기할 영역의 길이를 가져오거나 설정합니다.

---

<a id="workareastart"></a>

### workAreaStart

**● workAreaStart**: _`number`_

컴포지션에서 미리보기할 영역의 시작점을 가져오거나 설정합니다.

---

## 사용 가능한 함수

<a id="duplicate"></a>

### duplicate

▸ **duplicate**(): [CompItem](/javascript-api/api/item/compitem-class.md)

컴포지션을 복제합니다.

**반환:** [CompItem](/javascript-api/api/item/compitem-class.md)

---

<a id="layer"></a>

### layer

▸ **layer**(index: _`number` \| `string` \| [Layer](/javascript-api/api/layer/layer-class.md)_, relIndex?: _`number`_): [Layer](/javascript-api/api/layer/layer-class.md)

컴포지션에서 특정 레이어를 가져옵니다.

**매개변수:**

| Name                | Type                                                                  | Description                                                        |
| ------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------ |
| index               | `number` \| `string` \| [Layer](/javascript/api/layer/layer-class.md) | 가져올 레이어의 위치 / 레이어 이름 / 레이어 객체가 될 수 있습니다. |
| `Optional` relIndex | `number`                                                              |

**반환:** [Layer](/javascript-api/api/layer/layer-class.md)

---

<a id="openinviewer"></a>

### openInViewer

▸ **openInViewer**(): [Viewer](/javascript-api/api/controls/viewer-class.md)

컴포지션을 엽니다.

**반환:** [Viewer](/javascript-api/api/controls/viewer-class.md)

---

<a id="remove"></a>

### remove

▸ **remove**(): `void`

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[remove](/javascript-api/api/item/item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. (원본 파일은 유지됩니다.)

---

<a id="setproxy"></a>

### setProxy

▸ **setProxy**(file: _`File`_): `void`

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[setProxy](/javascript-api/api/item/avitem-class.md#setproxy)\_

아이템에 프록시를 설정합니다.

**매개변수:**

| Name | Type   | Description                 |
| ---- | ------ | --------------------------- |
| file | `File` | 프록시를 설정할 파일입니다. |

---

<a id="setproxytonone"></a>

### setProxyToNone

▸ **setProxyToNone**(): `void`

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[setProxyToNone](/javascript-api/api/item/avitem-class.md#setproxytonone)\_

아이템에 프록시가 설정되어있다면 프록시 설정값을 없앱니다.

---

<a id="setproxywithplaceholder"></a>

### setProxyWithPlaceholder

▸ **setProxyWithPlaceholder**(name: _`string`_, width: _`number`_, height: _`number`_, frameRate: _`number`_, duration: _`number`_): `void`

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[setProxyWithPlaceholder](/javascript-api/api/item/avitem-class.md#setproxywithplaceholder)\_

**매개변수:**

| Name      | Type     |
| --------- | -------- |
| name      | `string` |
| width     | `number` |
| height    | `number` |
| frameRate | `number` |
| duration  | `number` |

---

<a id="setproxywithsequence"></a>

### setProxyWithSequence

▸ **setProxyWithSequence**(file: _`File`_, forceAlphabetical: _`boolean`_): `void`

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[setProxyWithSequence](/javascript-api/api/item/avitem-class.md#setproxywithsequence)\_

**매개변수:**

| Name              | Type      |
| ----------------- | --------- |
| file              | `File`    |
| forceAlphabetical | `boolean` |

---

<a id="setproxywithsolid"></a>

### setProxyWithSolid

▸ **setProxyWithSolid**(color: _`number`[]_, name: _`string`_, width: _`number`_, height: _`number`_, pixelAspect: _`number`_): `void`

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[setProxyWithSolid](/javascript-api/api/item/avitem-class.md#setproxywithsolid)\_

**매개변수:**

| Name        | Type       |
| ----------- | ---------- |
| color       | `number`[] |
| name        | `string`   |
| width       | `number`   |
| height      | `number`   |
| pixelAspect | `number`   |

---
