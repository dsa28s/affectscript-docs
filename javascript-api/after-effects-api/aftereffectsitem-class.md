# AfterEffectsItem 클래스

## 구조

↳ [Item](../item-api/item-class.md)

## 목차

### 설정값

* [activeCamera](aftereffectsitem-class.md#activecamera)
* [bgColor](aftereffectsitem-class.md#bgcolor)
* [comment](aftereffectsitem-class.md#comment)
* [displayStartTime](aftereffectsitem-class.md#displaystarttime)
* [draft3d](aftereffectsitem-class.md#draft3d)
* [dropFrame](aftereffectsitem-class.md#dropframe)
* [duration](aftereffectsitem-class.md#duration)
* [file](aftereffectsitem-class.md#file)
* [footageMissing](aftereffectsitem-class.md#footagemissing)
* [frameBlending](aftereffectsitem-class.md#frameblending)
* [frameDuration](aftereffectsitem-class.md#frameduration)
* [frameRate](aftereffectsitem-class.md#framerate)
* [hasAudio](aftereffectsitem-class.md#hasaudio)
* [hasVideo](aftereffectsitem-class.md#hasvideo)
* [height](aftereffectsitem-class.md#height)
* [hideShyLayer](aftereffectsitem-class.md#hideshylayer)
* [id](aftereffectsitem-class.md#id)
* [label](aftereffectsitem-class.md#label)
* [layers](aftereffectsitem-class.md#layers)
* [mainSource](aftereffectsitem-class.md#mainsource)
* [motionBlur](aftereffectsitem-class.md#motionblur)
* [motionBlurAdaptiveSampleLimit](aftereffectsitem-class.md#motionbluradaptivesamplelimit)
* [motionBlurSamplesPerFrame](aftereffectsitem-class.md#motionblursamplesperframe)
* [name](aftereffectsitem-class.md#name)
* [numLayers](aftereffectsitem-class.md#numlayers)
* [parentFolder](aftereffectsitem-class.md#parentfolder)
* [pixelAspect](aftereffectsitem-class.md#pixelaspect)
* [preserveNestedFrameRate](aftereffectsitem-class.md#preservenestedframerate)
* [preserveNestedResolution](aftereffectsitem-class.md#preservenestedresolution)
* [proxySource](aftereffectsitem-class.md#proxysource)
* [renderer](aftereffectsitem-class.md#renderer)
* [renderers](aftereffectsitem-class.md#renderers)
* [resolutionFactor](aftereffectsitem-class.md#resolutionfactor)
* [selected](aftereffectsitem-class.md#selected)
* [selectedLayers](aftereffectsitem-class.md#selectedlayers)
* [selectedProperties](aftereffectsitem-class.md#selectedproperties)
* [shutterAngle](aftereffectsitem-class.md#shutterangle)
* [shutterPhase](aftereffectsitem-class.md#shutterphase)
* [time](aftereffectsitem-class.md#time)
* [typeName](aftereffectsitem-class.md#typename)
* [useProxy](aftereffectsitem-class.md#useproxy)
* [usedIn](aftereffectsitem-class.md#usedin)
* [width](aftereffectsitem-class.md#width)
* [workAreaDuration](aftereffectsitem-class.md#workareaduration)
* [workAreaStart](aftereffectsitem-class.md#workareastart)

### 사용 가능한 함수

* [duplicate](aftereffectsitem-class.md#duplicate)
* [layer](aftereffectsitem-class.md#layer)
* [openInViewer](aftereffectsitem-class.md#openinviewer)
* [remove](aftereffectsitem-class.md#remove)
* [replace](aftereffectsitem-class.md#replace)
* [replaceWithPlaceholder](aftereffectsitem-class.md#replacewithplaceholder)
* [replaceWithSequence](aftereffectsitem-class.md#replacewithsequence)
* [replaceWithSolid](aftereffectsitem-class.md#replacewithsolid)
* [setProxy](aftereffectsitem-class.md#setproxy)
* [setProxyToNone](aftereffectsitem-class.md#setproxytonone)
* [setProxyWithPlaceholder](aftereffectsitem-class.md#setproxywithplaceholder)
* [setProxyWithSequence](aftereffectsitem-class.md#setproxywithsequence)
* [setProxyWithSolid](aftereffectsitem-class.md#setproxywithsolid)

## 속성값

### activeCamera  <a id="activecamera"></a>

**● activeCamera**: [_CameraLayer_](../layer-api/cameralayer-class.md)

컴포지션에 활성화 된 카메라 객체를 가져옵니다.

### bgColor  <a id="bgcolor"></a>

**● bgColor**: `number`_\[\]_

컴포지션의 배경색깔을 설정하거나 가져옵니다. \[R, G, B\] 형태입니다.

### comment  <a id="comment"></a>

**● comment**: `string`

\_부모로부터 상속됨 : [Item](../item-api/item-class.md).[comment](../item-api/item-class.md#comment)\_

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

아이템의 길이를 가져옵니다. \(재생 시간\)

### file  <a id="file"></a>

**● file**: `File`

푸티지의 원본 파일 객체를 가져옵니다.

### footageMissing  <a id="footagemissing"></a>

**● footageMissing**: `boolean`

아이템의 원본 파일이 없을 경우 true 가 반환됩니다.

### frameBlending  <a id="frameblending"></a>

**● frameBlending**: `boolean`

컴포지션의 블랜딩 모드 활성 여부를 설정하거나 가져옵니다.

### frameDuration  <a id="frameduration"></a>

**● frameDuration**: `number`

아이템의 프레임 수를 가져옵니다.

### frameRate  <a id="framerate"></a>

**● frameRate**: `number`

아이템의 초당 프레임 수를 가져옵니다.

### hasAudio  <a id="hasaudio"></a>

**● hasAudio**: `boolean`

아이템의 오디오 레이어 여부를 가져옵니다.

### hasVideo  <a id="hasvideo"></a>

**● hasVideo**: `boolean`

아이템의 비디오 레이어 여부를 가져옵니다.

### height  <a id="height"></a>

**● height**: `number`

아이템의 세로 크기를 가져옵니다.

### hideShyLayer  <a id="hideshylayer"></a>

**● hideShyLayer**: `boolean`

컴포지션 안에 숨김 레이어가 있을 경우 숨길지 여부를 설정하거나 가져옵니다.

### id  <a id="id"></a>

**● id**: `number`

\_부모로부터 상속됨 : [Item](../item-api/item-class.md).[id](../item-api/item-class.md#id)\_

아이템에 대한 ID를 가져옵니다.

### label  <a id="label"></a>

**● label**: `number`

\_부모로부터 상속됨 [Item](../item-api/item-class.md).[label](../item-api/item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. \(1 ~ 16까지 사용가능\)

### layers  <a id="layers"></a>

**● layers**: \_[LayerCollection](../collection-api/layercollection-class.md)\_

컴포지션에 있는 모든 레이어를 객체로 가져옵니다.

### mainSource  <a id="mainsource"></a>

**● mainSource**: \_[FootageSource](../footage-api/footagesource-class.md)\_

푸티지가 어떤 종류인지 가져옵니다.

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

\_부모로부터 상속됨 : [Item](../item-api/item-class.md).[name](../item-api/item-class.md#name)\_

아이템의 이름을 설정하거나 가져옵니다.

### numLayers  <a id="numlayers"></a>

**● numLayers**: `number`

컴포지션이 가지고 있는 모든 레이어의 수를 가져옵니다.

### parentFolder  <a id="parentfolder"></a>

**● parentFolder**: \_[FolderItem](../item-api/folderitem-class.md)\_

\_부모로부터 상속됨 : [Item](../item-api/item-class.md).[parentFolder](../item-api/item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

### pixelAspect  <a id="pixelaspect"></a>

**● pixelAspect**: `number`

### preserveNestedFrameRate  <a id="preservenestedframerate"></a>

**● preserveNestedFrameRate**: `boolean`

### preserveNestedResolution  <a id="preservenestedresolution"></a>

**● preserveNestedResolution**: `boolean`

### proxySource  <a id="proxysource"></a>

**● proxySource**: \_[FootageSource](../footage-api/footagesource-class.md)\_

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

\_부모로부터 상속됨 [Item](../item-api/item-class.md).[selected](../item-api/item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

### selectedLayers  <a id="selectedlayers"></a>

**● selectedLayers**: \_[Layer](../layer-api/layer-class.md)\[\]\_

컴포지션에서 선택된 모든 레이어를 가져옵니다.

### selectedProperties  <a id="selectedproperties"></a>

**● selectedProperties**: _\[Property\]\(\_affectscript_.affectscriptapi.property.md\)\_

아이템에서 선택된 효과 \(혹은 설정값\) 를 가져옵니다.

### shutterAngle  <a id="shutterangle"></a>

**● shutterAngle**: `number`

### shutterPhase  <a id="shutterphase"></a>

**● shutterPhase**: `number`

### time  <a id="time"></a>

**● time**: `number`

아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다. 해당 값을 설정할 경우, 미리보기 화면에 입력한 설정값으로 적용됩니다.

### typeName  <a id="typename"></a>

**● typeName**: `string`

\_부모로부터 상속됨 : [Item](../item-api/item-class.md).[typeName](../item-api/item-class.md#typename)\_

아이템의 종류를 문자열로 가져옵니다.

### useProxy  <a id="useproxy"></a>

**● useProxy**: `boolean`

아이템의 프록시 사용 여부를 설정하거나 가져옵니다.

### usedIn  <a id="usedin"></a>

**● usedIn**: _\[CompItem\]\(\_affectscript_.affectscriptapi.compitem.md\)\[\]\_

아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.

### width  <a id="width"></a>

**● width**: `number`

아이템의 가로 크기를 가져옵니다.

### workAreaDuration  <a id="workareaduration"></a>

**● workAreaDuration**: `number`

컴포지션에서 미리보기할 영역의 길이를 가져오거나 설정합니다.

### workAreaStart  <a id="workareastart"></a>

**● workAreaStart**: `number`

컴포지션에서 미리보기할 영역의 시작점을 가져오거나 설정합니다.

## 사용 가능한 함수

### duplicate  <a id="duplicate"></a>

▸ **duplicate**\(\): [CompItem](../item-api/compitem-class.md)

컴포지션을 복제합니다.

**반환:** [CompItem](../item-api/compitem-class.md)

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

▸ **openInViewer**\(\): [Viewer](viewer-class.md)

컴포지션을 엽니다.

**반환:** [Viewer](viewer-class.md)

### remove  <a id="remove"></a>

▸ **remove**\(\): `void`

\_부모로부터 상속됨 [Item](../item-api/item-class.md).[remove](../item-api/item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. \(원본 파일은 유지됩니다.\)

**Returns:** `void`

### replace  <a id="replace"></a>

▸ **replace**\(file: `File`\): `void`

푸티지를 바꿉니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| file | `File` | 바꿀 파일입니다. |

### replaceWithPlaceholder  <a id="replacewithplaceholder"></a>

▸ **replaceWithPlaceholder**\(name: `string`, width: `number`, height: `number`, frameRate: `number`, duration: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| name | `string` |
| width | `number` |
| height | `number` |
| frameRate | `number` |
| duration | `number` |

### replaceWithSequence  <a id="replacewithsequence"></a>

▸ **replaceWithSequence**\(file: `File`, forceAlphabetical: `boolean`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| file | `File` |
| forceAlphabetical | `boolean` |

**반환:** `void`

### replaceWithSolid  <a id="replacewithsolid"></a>

▸ **replaceWithSolid**\(color: `number`_\[\]_, name: `string`, width: `number`, height: `number`, pixelAspect: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| color | `number`\[\] |
| name | `string` |
| width | `number` |
| height | `number` |
| pixelAspect | `number` |

### setProxy  <a id="setproxy"></a>

▸ **setProxy**\(file: `File`\): `void`

아이템에 프록시를 설정합니다.

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| file | `File` | 프록시를 설정할 파일입니다. |

### setProxyToNone  <a id="setproxytonone"></a>

▸ **setProxyToNone**\(\): `void`

아이템에 프록시가 설정되어있다면 프록시 설정값을 없앱니다.

### setProxyWithPlaceholder  <a id="setproxywithplaceholder"></a>

▸ **setProxyWithPlaceholder**\(name: `string`, width: `number`, height: `number`, frameRate: `number`, duration: `number`\): `void`

**반환:**

| Name | Type |
| :--- | :--- |
| name | `string` |
| width | `number` |
| height | `number` |
| frameRate | `number` |
| duration | `number` |

### setProxyWithSequence  <a id="setproxywithsequence"></a>

▸ **setProxyWithSequence**\(file: `File`, forceAlphabetical: `boolean`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| file | `File` |
| forceAlphabetical | `boolean` |

### setProxyWithSolid  <a id="setproxywithsolid"></a>

▸ **setProxyWithSolid**\(color: `number`_\[\]_, name: `string`, width: `number`, height: `number`, pixelAspect: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| color | `number`\[\] |
| name | `string` |
| width | `number` |
| height | `number` |
| pixelAspect | `number` |

