# CompItem 클래스

## 구조

[Item](item.md)

↳ [AVItem](avitem-class.md)

&nbsp;&nbsp;&nbsp;&nbsp;**↳ CompItem**

&nbsp;&nbsp;&nbsp;&nbsp;↳ [FootageItem](footage-item.md)

## 목차

### 속성값

* [activeCamera](compitem-class.md#activecamera)
* [bgColor](compitem-class.md#bgcolor)
* [comment](compitem-class.md#comment)
* [displayStartTime](compitem-class.md#displaystarttime)
* [draft3d](compitem-class.md#draft3d)
* [dropFrame](compitem-class.md#dropframe)
* [duration](compitem-class.md#duration)
* [footageMissing](compitem-class.md#footagemissing)
* [frameBlending](compitem-class.md#frameblending)
* [frameDuration](compitem-class.md#frameduration)
* [frameRate](compitem-class.md#framerate)
* [hasAudio](compitem-class.md#hasaudio)
* [hasVideo](compitem-class.md#hasvideo)
* [height](compitem-class.md#height)
* [hideShyLayer](compitem-class.md#hideshylayer)
* [id](compitem-class.md#id)
* [label](compitem-class.md#label)
* [layers](compitem-class.md#layers)
* [motionBlur](compitem-class.md#motionblur)
* [motionBlurAdaptiveSampleLimit](compitem-class.md#motionbluradaptivesamplelimit)
* [motionBlurSamplesPerFrame](compitem-class.md#motionblursamplesperframe)
* [name](compitem-class.md#name)
* [numLayers](compitem-class.md#numlayers)
* [parentFolder](compitem-class.md#parentfolder)
* [pixelAspect](compitem-class.md#pixelaspect)
* [preserveNestedFrameRate](compitem-class.md#preservenestedframerate)
* [preserveNestedResolution](compitem-class.md#preservenestedresolution)
* [proxySource](compitem-class.md#proxysource)
* [renderer](compitem-class.md#renderer)
* [renderers](compitem-class.md#renderers)
* [resolutionFactor](compitem-class.md#resolutionfactor)
* [selected](compitem-class.md#selected)
* [selectedLayers](compitem-class.md#selectedlayers)
* [selectedProperties](compitem-class.md#selectedproperties)
* [shutterAngle](compitem-class.md#shutterangle)
* [shutterPhase](compitem-class.md#shutterphase)
* [time](compitem-class.md#time)
* [typeName](compitem-class.md#typename)
* [useProxy](compitem-class.md#useproxy)
* [usedIn](compitem-class.md#usedin)
* [width](compitem-class.md#width)
* [workAreaDuration](compitem-class.md#workareaduration)
* [workAreaStart](compitem-class.md#workareastart)

### 사용 가능한 함수

* [duplicate](compitem-class.md#duplicate)
* [layer](compitem-class.md#layer)
* [openInViewer](compitem-class.md#openinviewer)
* [remove](compitem-class.md#remove)
* [setProxy](compitem-class.md#setproxy)
* [setProxyToNone](compitem-class.md#setproxytonone)
* [setProxyWithPlaceholder](compitem-class.md#setproxywithplaceholder)
* [setProxyWithSequence](compitem-class.md#setproxywithsequence)
* [setProxyWithSolid](compitem-class.md#setproxywithsolid)

## Properties

### activeCamera  <a id="activecamera"></a>

**● activeCamera**: \_[CameraLayer](../layer-api/cameralayer-class.md)\_

컴포지션에 활성화 된 카메라 객체를 가져옵니다.

### bgColor  <a id="bgcolor"></a>

**● bgColor**: `number`_\[\]_

컴포지션의 배경색깔을 설정하거나 가져옵니다. \[R, G, B\] 형태입니다.

### comment  <a id="comment"></a>

**● comment**: `string`

\_부모로부터 상속됨 : [Item](item-class.md).[comment](item-class.md#comment)\_

아이템에 대한 메모를 추가하거나 가져옵니다.

### displayStartTime  <a id="displaystarttime"></a>

**● displayStartTime**: `number`

컴포지션이 시작될 시간을 설정하거나 가져옵니다.

### draft3d  <a id="draft3d"></a>

**● draft3d**: `boolean`

Draft 3D 모드 활성화 여부를 설정하거나 가져옵니다.

### dropFrame  <a id="dropframe"></a>

**● dropFrame**: `boolean`

컴포지션이 Drop Frame을 사용할지 여부를 설정하거나 가져옵니다.

### duration  <a id="duration"></a>

**● duration**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[duration](avitem-class.md#duration)\_

아이템의 길이를 가져옵니다. \(재생 시간\)

### footageMissing  <a id="footagemissing"></a>

**● footageMissing**: `boolean`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[footageMissing](avitem-class.md#footagemissing)\_

아이템의 원본 파일이 없을 경우 true 가 반환됩니다.

### frameBlending  <a id="frameblending"></a>

**● frameBlending**: `boolean`

컴포지션의 블랜딩 모드 활성 여부를 설정하거나 가져옵니다.

### frameDuration  <a id="frameduration"></a>

**● frameDuration**: `number`

\_Overrides [AVItem](avitem-class.md).[frameDuration](avitem-class.md#frameduration)\_

컴포지션의 전체 프레임 수를 설정하거나 가져옵니다.

### frameRate  <a id="framerate"></a>

**● frameRate**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[frameRate](avitem-class.md#framerate)\_

아이템의 초당 프레임 수를 가져옵니다.

### hasAudio  <a id="hasaudio"></a>

**● hasAudio**: `boolean`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[hasAudio](avitem-class.md#hasaudio)\_

아이템의 오디오 레이어 여부를 가져옵니다.

### hasVideo  <a id="hasvideo"></a>

**● hasVideo**: `boolean`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[hasVideo](avitem-class.md#hasvideo)\_

아이템의 비디오 레이어 여부를 가져옵니다.

### height  <a id="height"></a>

**● height**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[height](avitem-class.md#height)\_

아이템의 세로 크기를 가져옵니다.

### hideShyLayer  <a id="hideshylayer"></a>

**● hideShyLayer**: `boolean`

컴포지션 안에 숨김 레이어가 있을 경우 숨길지 여부를 설정하거나 가져옵니다.

### id  <a id="id"></a>

**● id**: `number`

\_부모로부터 상속됨 : [Item](item-class.md).[id](item-class.md#id)\_

아이템에 대한 ID를 가져옵니다.

### label  <a id="label"></a>

**● label**: `number`

\_부모로부터 상속됨 : [Item](item-class.md).[label](item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. \(1 ~ 16까지 사용가능\)

### layers  <a id="layers"></a>

**● layers**: \_[LayerCollection](../collection-api/layercollection-class.md)\_

컴포지션에 있는 모든 레이어를 객체로 가져옵니다.

### motionBlur  <a id="motionblur"></a>

**● motionBlur**: `boolean`

컴포지션의 모션 블러 사용 여부를 설정하거나 가져옵니다.

### motionBlurAdaptiveSampleLimit  <a id="motionbluradaptivesamplelimit"></a>

**● motionBlurAdaptiveSampleLimit**: `number`

컴포지션이 사용할 모션블러 샘플 사이즈를 가져오거나 설정합니다. \(2D\) / \(2 ~ 256\)

### motionBlurSamplesPerFrame  <a id="motionblursamplesperframe"></a>

**● motionBlurSamplesPerFrame**: `number`

컴포지션이 사용할 모션블러 샘플 사이즈를 가져오거나 설정합니다. \(2D\) / \(2 ~ 64\)

### name  <a id="name"></a>

**● name**: `string`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[name](avitem-class.md#name)\_

\_Overrides [Item](item-class.md).[name](item-class.md#name)\_

아이템의 이름을 설정하거나 가져옵니다.

### numLayers  <a id="numlayers"></a>

**● numLayers**: `number`

컴포지션이 가지고 있는 모든 레이어의 수를 가져옵니다.

### parentFolder  <a id="parentfolder"></a>

**● parentFolder**: \_[FolderItem](folderitem-class.md)\_

\_부모로부터 상속됨 : [Item](item-class.md).[parentFolder](item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

### pixelAspect  <a id="pixelaspect"></a>

**● pixelAspect**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[pixelAspect](avitem-class.md#pixelaspect)\_

### preserveNestedFrameRate  <a id="preservenestedframerate"></a>

**● preserveNestedFrameRate**: `boolean`

### preserveNestedResolution  <a id="preservenestedresolution"></a>

**● preserveNestedResolution**: `boolean`

### proxySource  <a id="proxysource"></a>

**● proxySource**: \_[FootageSource](../footage-api/footagesource-class.md)\_

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[proxySource](avitem-class.md#proxysource)\_

### renderer  <a id="renderer"></a>

**● renderer**: `string`

컴포지션이 사용하고 있는 렌더러를 가져오거나 설정합니다.

### renderers  <a id="renderers"></a>

**● renderers**: `string`_\[\]_

컴포지션이 사용할 수 있는 모든 렌더러를 배열로 가져옵니다.

### resolutionFactor  <a id="resolutionfactor"></a>

**● resolutionFactor**: `number`_\[\]_

컴포지션이 미리보기가 될 때에 낮출 비율을 가져오거나 설정합니다.

### selected  <a id="selected"></a>

**● selected**: `boolean`

\_부모로부터 상속됨 : [Item](item-class.md).[selected](item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

### selectedLayers  <a id="selectedlayers"></a>

**● selectedLayers**: \_[Layer](../layer-api/layer-class.md)\[\]\_

컴포지션에서 선택된 모든 레이어를 가져옵니다.

### selectedProperties  <a id="selectedproperties"></a>

**● selectedProperties**: \_[Property](../property-api/property-class.md)\_

아이템에서 선택된 효과 \(혹은 설정값\) 를 가져옵니다.

### shutterAngle  <a id="shutterangle"></a>

**● shutterAngle**: `number`

### shutterPhase  <a id="shutterphase"></a>

**● shutterPhase**: `number`

### time  <a id="time"></a>

**● time**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[time](avitem-class.md#time)\_

아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다. 미리보기에 나오고 있을 경우 현재 시간을 설정합니다.

### typeName  <a id="typename"></a>

**● typeName**: `string`

\_부모로부터 상속됨 : [Item](item-class.md).[typeName](item-class.md#typename)\_

아이템의 종류를 문자열로 가져옵니다.

### useProxy  <a id="useproxy"></a>

**● useProxy**: `boolean`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[useProxy](avitem-class.md#useproxy)\_

아이템의 프록시 사용 여부를 설정하거나 가져옵니다.

### usedIn  <a id="usedin"></a>

**● usedIn**: \_[CompItem](compitem-class.md)\[\]\_

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[usedIn](avitem-class.md#usedin)\_

아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.

### width  <a id="width"></a>

**● width**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[width](avitem-class.md#width)\_

아이템의 가로 크기를 가져옵니다.

### workAreaDuration  <a id="workareaduration"></a>

**● workAreaDuration**: `number`

컴포지션에서 미리보기할 영역의 길이를 가져오거나 설정합니다.

### workAreaStart  <a id="workareastart"></a>

**● workAreaStart**: `number`

컴포지션에서 미리보기할 영역의 시작점을 가져오거나 설정합니다.

## 사용 가능한 함수

### duplicate  <a id="duplicate"></a>

▸ **duplicate**\(\): [CompItem](compitem-class.md)

컴포지션을 복제합니다.

**반환:** [CompItem](compitem-class.md)

### layer  <a id="layer"></a>

▸ **layer**\(index: `number` _\|_ `string` _\|_ [_Layer_](../layer-api/layer-class.md), relIndex?: `number`\): [Layer](../layer-api/layer-class.md)

컴포지션에서 특정 레이어를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| index | `number` \| `string` \| [Layer](../layer-api/layer-class.md) | 가져올 레이어의 위치 / 레이어 이름 / 레이어 객체가 될 수 있습니다. |
| `Optional` relIndex | `number` |  |

**반환:** [Layer](../layer-api/layer-class.md)

### openInViewer  <a id="openinviewer"></a>

▸ **openInViewer**\(\): [Viewer](../after-effects-api/viewer-class.md)

컴포지션을 엽니다.

**반환:** [Viewer](../after-effects-api/viewer-class.md)

### remove  <a id="remove"></a>

▸ **remove**\(\): `void`

\_부모로부터 상속됨 : [Item](item-class.md).[remove](item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. \(원본 파일은 유지됩니다.\)

### setProxy  <a id="setproxy"></a>

▸ **setProxy**\(file: `File`\): `void`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[setProxy](avitem-class.md#setproxy)\_

아이템에 프록시를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| file | `File` | 프록시를 설정할 파일입니다. |

### setProxyToNone  <a id="setproxytonone"></a>

▸ **setProxyToNone**\(\): `void`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[setProxyToNone](avitem-class.md#setproxytonone)\_

아이템에 프록시가 설정되어있다면 프록시 설정값을 없앱니다.

### setProxyWithPlaceholder  <a id="setproxywithplaceholder"></a>

▸ **setProxyWithPlaceholder**\(name: `string`, width: `number`, height: `number`, frameRate: `number`, duration: `number`\): `void`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[setProxyWithPlaceholder](avitem-class.md#setproxywithplaceholder)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| name | `string` |
| width | `number` |
| height | `number` |
| frameRate | `number` |
| duration | `number` |

### setProxyWithSequence  <a id="setproxywithsequence"></a>

▸ **setProxyWithSequence**\(file: `File`, forceAlphabetical: `boolean`\): `void`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[setProxyWithSequence](avitem-class.md#setproxywithsequence)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| file | `File` |
| forceAlphabetical | `boolean` |

### setProxyWithSolid  <a id="setproxywithsolid"></a>

▸ **setProxyWithSolid**\(color: `number`_\[\]_, name: `string`, width: `number`, height: `number`, pixelAspect: `number`\): `void`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[setProxyWithSolid](avitem-class.md#setproxywithsolid)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| color | `number`\[\] |
| name | `string` |
| width | `number` |
| height | `number` |
| pixelAspect | `number` |

