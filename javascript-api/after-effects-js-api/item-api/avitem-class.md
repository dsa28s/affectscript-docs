# AVItem 클래스

## 관계

[Item](item-class.md)

**↳ AVItem**

&nbsp;&nbsp;&nbsp;&nbsp;↳ [CompItem](compitem-class.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [FootageItem](footageitem-class.md)


## 목차

### 속성값

* [comment](avitem-class.md#comment)
* [duration](avitem-class.md#duration)
* [footageMissing](avitem-class.md#footagemissing)
* [frameDuration](avitem-class.md#frameduration)
* [frameRate](avitem-class.md#framerate)
* [hasAudio](avitem-class.md#hasaudio)
* [hasVideo](avitem-class.md#hasvideo)
* [height](avitem-class.md#height)
* [id](avitem-class.md#id)
* [label](avitem-class.md#label)
* [name](avitem-class.md#name)
* [parentFolder](avitem-class.md#parentfolder)
* [pixelAspect](avitem-class.md#pixelaspect)
* [proxySource](avitem-class.md#proxysource)
* [selected](avitem-class.md#selected)
* [time](avitem-class.md#time)
* [typeName](avitem-class.md#typename)
* [useProxy](avitem-class.md#useproxy)
* [usedIn](avitem-class.md#usedin)
* [width](avitem-class.md#width)

### 사용 가능한 함수

* [remove](avitem-class.md#remove)
* [setProxy](avitem-class.md#setproxy)
* [setProxyToNone](avitem-class.md#setproxytonone)
* [setProxyWithPlaceholder](avitem-class.md#setproxywithplaceholder)
* [setProxyWithSequence](avitem-class.md#setproxywithsequence)
* [setProxyWithSolid](avitem-class.md#setproxywithsolid)

## 속성값

### comment  <a id="comment"></a>

**● comment**: `string`

\_부모로부터 상속됨 :[Item](item-class.md).[comment](item-class.md#comment)\_

아이템에 대한 메모를 추가하거나 가져옵니다.

### duration  <a id="duration"></a>

**● duration**: `number`

아이템의 길이를 가져옵니다. \(재생 시간\)

### footageMissing  <a id="footagemissing"></a>

**● footageMissing**: `boolean`

아이템의 원본 파일이 없을 경우 true 가 반환됩니다.

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

### id  <a id="id"></a>

**● id**: `number`

\_부모로부터 상속됨 :[Item](item-class.md).[id](item-class.md#id)\_

아이템에 대한 ID를 가져옵니다.

### label  <a id="label"></a>

**● label**: `number`

\_부모로부터 상속됨 :[Item](item-class.md).[label](item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. \(1 ~ 16까지 사용가능\)

### name  <a id="name"></a>

**● name**: `string`

\_Overrides [Item](item-class.md).[name](item-class.md#name)\_

아이템의 이름을 설정하거나 가져옵니다.

### parentFolder  <a id="parentfolder"></a>

**● parentFolder**: \_[FolderItem](folderitem-class.md)\_

\_부모로부터 상속됨 :[Item](item-class.md).[parentFolder](item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

### pixelAspect  <a id="pixelaspect"></a>

**● pixelAspect**: `number`

### proxySource  <a id="proxysource"></a>

**● proxySource**: \_[FootageSource](../footage-api/footagesource-class.md)\_

### selected  <a id="selected"></a>

**● selected**: `boolean`

\_부모로부터 상속됨 :[Item](item-class.md).[selected](item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

### time  <a id="time"></a>

**● time**: `number`

아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다. 미리보기에 나오고 있을 경우 현재 시간을 설정합니다.

### typeName  <a id="typename"></a>

**● typeName**: `string`

\_부모로부터 상속됨 :[Item](item-class.md).[typeName](item-class.md#typename)\_

아이템의 종류를 문자열로 가져옵니다.

### useProxy  <a id="useproxy"></a>

**● useProxy**: `boolean`

아이템의 프록시 사용 여부를 설정하거나 가져옵니다.

### usedIn  <a id="usedin"></a>

**● usedIn**: \_[CompItem](compitem-class.md)\[\]\_

아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.

### width  <a id="width"></a>

**● width**: `number`

아이템의 가로 크기를 가져옵니다.

## Methods

### remove  <a id="remove"></a>

▸ **remove**\(\): `void`

\_부모로부터 상속됨 :[Item](item-class.md).[remove](item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. \(원본 파일은 유지됩니다.\)

### setProxy  <a id="setproxy"></a>

▸ **setProxy**\(file: `File`\): `void`

아이템에 프록시를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| file | `File` | 프록시를 설정할 파일입니다. |

### setProxyToNone  <a id="setproxytonone"></a>

▸ **setProxyToNone**\(\): `void`

아이템에 프록시가 설정되어있다면 프록시 설정값을 없앱니다.

### setProxyWithPlaceholder  <a id="setproxywithplaceholder"></a>

▸ **setProxyWithPlaceholder**\(name: `string`, width: `number`, height: `number`, frameRate: `number`, duration: `number`\): `void`

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

