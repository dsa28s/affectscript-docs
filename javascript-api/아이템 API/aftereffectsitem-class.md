# AfterEffectsItem 클래스

## 구조

↳ [Item](/javascript-api/api/item/item-class.md)

## 목차

### 설정값

- [activeCamera](/javascript-api/api/item/aftereffectsitem-class.md#activecamera)
- [bgColor](/javascript-api/api/item/aftereffectsitem-class.md#bgcolor)
- [comment](/javascript-api/api/item/aftereffectsitem-class.md#comment)
- [displayStartTime](/javascript-api/api/item/aftereffectsitem-class.md#displaystarttime)
- [draft3d](/javascript-api/api/item/aftereffectsitem-class.md#draft3d)
- [dropFrame](/javascript-api/api/item/aftereffectsitem-class.md#dropframe)
- [duration](/javascript-api/api/item/aftereffectsitem-class.md#duration)
- [file](/javascript-api/api/item/aftereffectsitem-class.md#file)
- [footageMissing](/javascript-api/api/item/aftereffectsitem-class.md#footagemissing)
- [frameBlending](/javascript-api/api/item/aftereffectsitem-class.md#frameblending)
- [frameDuration](/javascript-api/api/item/aftereffectsitem-class.md#frameduration)
- [frameRate](/javascript-api/api/item/aftereffectsitem-class.md#framerate)
- [hasAudio](/javascript-api/api/item/aftereffectsitem-class.md#hasaudio)
- [hasVideo](/javascript-api/api/item/aftereffectsitem-class.md#hasvideo)
- [height](/javascript-api/api/item/aftereffectsitem-class.md#height)
- [hideShyLayer](/javascript-api/api/item/aftereffectsitem-class.md#hideshylayer)
- [id](/javascript-api/api/item/aftereffectsitem-class.md#id)
- [label](/javascript-api/api/item/aftereffectsitem-class.md#label)
- [layers](/javascript-api/api/item/aftereffectsitem-class.md#layers)
- [mainSource](/javascript-api/api/item/aftereffectsitem-class.md#mainsource)
- [motionBlur](/javascript-api/api/item/aftereffectsitem-class.md#motionblur)
- [motionBlurAdaptiveSampleLimit](/javascript-api/api/item/aftereffectsitem-class.md#motionbluradaptivesamplelimit)
- [motionBlurSamplesPerFrame](/javascript-api/api/item/aftereffectsitem-class.md#motionblursamplesperframe)
- [name](/javascript-api/api/item/aftereffectsitem-class.md#name)
- [numLayers](/javascript-api/api/item/aftereffectsitem-class.md#numlayers)
- [parentFolder](/javascript-api/api/item/aftereffectsitem-class.md#parentfolder)
- [pixelAspect](/javascript-api/api/item/aftereffectsitem-class.md#pixelaspect)
- [preserveNestedFrameRate](/javascript-api/api/item/aftereffectsitem-class.md#preservenestedframerate)
- [preserveNestedResolution](/javascript-api/api/item/aftereffectsitem-class.md#preservenestedresolution)
- [proxySource](/javascript-api/api/item/aftereffectsitem-class.md#proxysource)
- [renderer](/javascript-api/api/item/aftereffectsitem-class.md#renderer)
- [renderers](/javascript-api/api/item/aftereffectsitem-class.md#renderers)
- [resolutionFactor](/javascript-api/api/item/aftereffectsitem-class.md#resolutionfactor)
- [selected](/javascript-api/api/item/aftereffectsitem-class.md#selected)
- [selectedLayers](/javascript-api/api/item/aftereffectsitem-class.md#selectedlayers)
- [selectedProperties](/javascript-api/api/item/aftereffectsitem-class.md#selectedproperties)
- [shutterAngle](/javascript-api/api/item/aftereffectsitem-class.md#shutterangle)
- [shutterPhase](/javascript-api/api/item/aftereffectsitem-class.md#shutterphase)
- [time](/javascript-api/api/item/aftereffectsitem-class.md#time)
- [typeName](/javascript-api/api/item/aftereffectsitem-class.md#typename)
- [useProxy](/javascript-api/api/item/aftereffectsitem-class.md#useproxy)
- [usedIn](/javascript-api/api/item/aftereffectsitem-class.md#usedin)
- [width](/javascript-api/api/item/aftereffectsitem-class.md#width)
- [workAreaDuration](/javascript-api/api/item/aftereffectsitem-class.md#workareaduration)
- [workAreaStart](/javascript-api/api/item/aftereffectsitem-class.md#workareastart)

### 사용 가능한 함수

- [duplicate](/javascript-api/api/item/aftereffectsitem-class.md#duplicate)
- [layer](/javascript-api/api/item/aftereffectsitem-class.md#layer)
- [openInViewer](/javascript-api/api/item/aftereffectsitem-class.md#openinviewer)
- [remove](/javascript-api/api/item/aftereffectsitem-class.md#remove)
- [replace](/javascript-api/api/item/aftereffectsitem-class.md#replace)
- [replaceWithPlaceholder](/javascript-api/api/item/aftereffectsitem-class.md#replacewithplaceholder)
- [replaceWithSequence](/javascript-api/api/item/aftereffectsitem-class.md#replacewithsequence)
- [replaceWithSolid](/javascript-api/api/item/aftereffectsitem-class.md#replacewithsolid)
- [setProxy](/javascript-api/api/item/aftereffectsitem-class.md#setproxy)
- [setProxyToNone](/javascript-api/api/item/aftereffectsitem-class.md#setproxytonone)
- [setProxyWithPlaceholder](/javascript-api/api/item/aftereffectsitem-class.md#setproxywithplaceholder)
- [setProxyWithSequence](/javascript-api/api/item/aftereffectsitem-class.md#setproxywithsequence)
- [setProxyWithSolid](/javascript-api/api/item/aftereffectsitem-class.md#setproxywithsolid)

---

## 속성값

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

아이템의 길이를 가져옵니다. (재생 시간)

---

<a id="file"></a>

### file

**● file**: _`File`_

푸티지의 원본 파일 객체를 가져옵니다.

---

<a id="footagemissing"></a>

### footageMissing

**● footageMissing**: _`boolean`_

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

아이템의 프레임 수를 가져옵니다.

---

<a id="framerate"></a>

### frameRate

**● frameRate**: _`number`_

아이템의 초당 프레임 수를 가져옵니다.

---

<a id="hasaudio"></a>

### hasAudio

**● hasAudio**: _`boolean`_

아이템의 오디오 레이어 여부를 가져옵니다.

---

<a id="hasvideo"></a>

### hasVideo

**● hasVideo**: _`boolean`_

아이템의 비디오 레이어 여부를 가져옵니다.

---

<a id="height"></a>

### height

**● height**: _`number`_

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

\_부모로부터 상속됨 [Item](/javascript-api/api/item/item-class.md).[label](/javascript-api/api/item/item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. (1 ~ 16까지 사용가능)

---

<a id="layers"></a>

### layers

**● layers**: \_[LayerCollection](/javascript-api/api/collection/layercollection-class.md)\_

컴포지션에 있는 모든 레이어를 객체로 가져옵니다.

---

<a id="mainsource"></a>

### mainSource

**● mainSource**: \_[FootageSource](/javascript-api/api/footage/footagesource-class.md)\_

푸티지가 어떤 종류인지 가져옵니다.

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

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[name](/javascript-api/api/item/item-class.md#name)\_

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

\_부모로부터 상속됨 [Item](/javascript-api/api/item/item-class.md).[selected](/javascript-api/api/item/item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

---

<a id="selectedlayers"></a>

### selectedLayers

**● selectedLayers**: \_[Layer](/javascript-api/api/layer/layer-class.md)[]\_

컴포지션에서 선택된 모든 레이어를 가져옵니다.

---

<a id="selectedproperties"></a>

### selectedProperties

**● selectedProperties**: _[Property](\_affectscript_.affectscriptapi.property.md)\_

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

아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다. 해당 값을 설정할 경우, 미리보기 화면에 입력한 설정값으로 적용됩니다.

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

아이템의 프록시 사용 여부를 설정하거나 가져옵니다.

---

<a id="usedin"></a>

### usedIn

**● usedIn**: _[CompItem](\_affectscript_.affectscriptapi.compitem.md)[]\_

아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.

---

<a id="width"></a>

### width

**● width**: _`number`_

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

▸ **duplicate**(): [CompItem](_affectscript_.affectscriptapi.compitem.md)

컴포지션을 복제합니다.

**반환:** [CompItem](_affectscript_.affectscriptapi.compitem.md)

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

\_부모로부터 상속됨 [Item](/javascript-api/api/item/item-class.md).[remove](/javascript-api/api/item/item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. (원본 파일은 유지됩니다.)

**Returns:** `void`

---

<a id="replace"></a>

### replace

▸ **replace**(file: _`File`_): `void`

푸티지를 바꿉니다.

**매개변수:**

| Name | Type   | Description      |
| ---- | ------ | ---------------- |
| file | `File` | 바꿀 파일입니다. |

---

<a id="replacewithplaceholder"></a>

### replaceWithPlaceholder

▸ **replaceWithPlaceholder**(name: _`string`_, width: _`number`_, height: _`number`_, frameRate: _`number`_, duration: _`number`_): `void`

**매개변수:**

| Name      | Type     |
| --------- | -------- |
| name      | `string` |
| width     | `number` |
| height    | `number` |
| frameRate | `number` |
| duration  | `number` |

---

<a id="replacewithsequence"></a>

### replaceWithSequence

▸ **replaceWithSequence**(file: _`File`_, forceAlphabetical: _`boolean`_): `void`

**매개변수:**

| Name              | Type      |
| ----------------- | --------- |
| file              | `File`    |
| forceAlphabetical | `boolean` |

**반환:** `void`

---

<a id="replacewithsolid"></a>

### replaceWithSolid

▸ **replaceWithSolid**(color: _`number`[]_, name: _`string`_, width: _`number`_, height: _`number`_, pixelAspect: _`number`_): `void`

**매개변수:**

| Name        | Type       |
| ----------- | ---------- |
| color       | `number`[] |
| name        | `string`   |
| width       | `number`   |
| height      | `number`   |
| pixelAspect | `number`   |

---

<a id="setproxy"></a>

### setProxy

▸ **setProxy**(file: _`File`_): `void`

아이템에 프록시를 설정합니다.

**Parameters:**

| Name | Type   | Description                 |
| ---- | ------ | --------------------------- |
| file | `File` | 프록시를 설정할 파일입니다. |

---

<a id="setproxytonone"></a>

### setProxyToNone

▸ **setProxyToNone**(): `void`

아이템에 프록시가 설정되어있다면 프록시 설정값을 없앱니다.

---

<a id="setproxywithplaceholder"></a>

### setProxyWithPlaceholder

▸ **setProxyWithPlaceholder**(name: _`string`_, width: _`number`_, height: _`number`_, frameRate: _`number`_, duration: _`number`_): `void`

**반환:**

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

**매개변수:**

| Name              | Type      |
| ----------------- | --------- |
| file              | `File`    |
| forceAlphabetical | `boolean` |

---

<a id="setproxywithsolid"></a>

### setProxyWithSolid

▸ **setProxyWithSolid**(color: _`number`[]_, name: _`string`_, width: _`number`_, height: _`number`_, pixelAspect: _`number`_): `void`

**매개변수:**

| Name        | Type       |
| ----------- | ---------- |
| color       | `number`[] |
| name        | `string`   |
| width       | `number`   |
| height      | `number`   |
| pixelAspect | `number`   |

---
