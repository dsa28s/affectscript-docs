# FootageItem 클래스

## 구조

↳ [AVItem](avitem-class.md)

**↳ FootageItem**

## 목차

### 속성값

* [comment](footageitem-class.md#comment)
* [duration](footageitem-class.md#duration)
* [file](footageitem-class.md#file)
* [footageMissing](footageitem-class.md#footagemissing)
* [frameDuration](footageitem-class.md#frameduration)
* [frameRate](footageitem-class.md#framerate)
* [hasAudio](footageitem-class.md#hasaudio)
* [hasVideo](footageitem-class.md#hasvideo)
* [height](footageitem-class.md#height)
* [id](footageitem-class.md#id)
* [label](footageitem-class.md#label)
* [mainSource](footageitem-class.md#mainsource)
* [name](footageitem-class.md#name)
* [parentFolder](footageitem-class.md#parentfolder)
* [pixelAspect](footageitem-class.md#pixelaspect)
* [proxySource](footageitem-class.md#proxysource)
* [selected](footageitem-class.md#selected)
* [time](footageitem-class.md#time)
* [typeName](footageitem-class.md#typename)
* [useProxy](footageitem-class.md#useproxy)
* [usedIn](footageitem-class.md#usedin)
* [width](footageitem-class.md#width)

### 사용 가능한 함수

* [openInViewer](footageitem-class.md#openinviewer)
* [remove](footageitem-class.md#remove)
* [replace](footageitem-class.md#replace)
* [replaceWithPlaceholder](footageitem-class.md#replacewithplaceholder)
* [replaceWithSequence](footageitem-class.md#replacewithsequence)
* [replaceWithSolid](footageitem-class.md#replacewithsolid)
* [setProxy](footageitem-class.md#setproxy)
* [setProxyToNone](footageitem-class.md#setproxytonone)
* [setProxyWithPlaceholder](footageitem-class.md#setproxywithplaceholder)
* [setProxyWithSequence](footageitem-class.md#setproxywithsequence)
* [setProxyWithSolid](footageitem-class.md#setproxywithsolid)

## 속성값

### comment   <a id="comment"></a>

**● comment**: `string`

\_부모로부터 상속됨 : [Item](item-class.md).[comment](item-class.md#comment)\_

아이템에 대한 메모를 추가하거나 가져옵니다.

### duration   <a id="duration"></a>

**● duration**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[duration](avitem-class.md#duration)\_

아이템의 길이를 가져옵니다. \(재생 시간\)

### file   <a id="file"></a>

**● file**: `File`

푸티지의 원본 파일 객체를 가져옵니다.

### footageMissing   <a id="footagemissing"></a>

**● footageMissing**: `boolean`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[footageMissing](avitem-class.md#footagemissing)\_

아이템의 원본 파일이 없을 경우 true 가 반환됩니다.

### frameDuration   <a id="frameduration"></a>

**● frameDuration**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[frameDuration](avitem-class.md#frameduration)\_

아이템의 프레임 수를 가져옵니다.

### frameRate   <a id="framerate"></a>

**● frameRate**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[frameRate](avitem-class.md#framerate)\_

아이템의 초당 프레임 수를 가져옵니다.

### hasAudio   <a id="hasaudio"></a>

**● hasAudio**: `boolean`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[hasAudio](avitem-class.md#hasaudio)\_

아이템의 오디오 레이어 여부를 가져옵니다.

### hasVideo   <a id="hasvideo"></a>

**● hasVideo**: `boolean`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[hasVideo](avitem-class.md#hasvideo)\_

아이템의 비디오 레이어 여부를 가져옵니다.

### height   <a id="height"></a>

**● height**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[height](avitem-class.md#height)\_

아이템의 세로 크기를 가져옵니다.

### id   <a id="id"></a>

**● id**: `number`

\_부모로부터 상속됨 : [Item](item-class.md).[id](item-class.md#id)\_

아이템에 대한 ID를 가져옵니다.

### label   <a id="label"></a>

**● label**: `number`

\_부모로부터 상속됨 : [Item](item-class.md).[label](item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. \(1 ~ 16까지 사용가능\)

### mainSource   <a id="mainsource"></a>

**● mainSource**: \_[FootageSource](../footage-api/footagesource-class.md)\_

푸티지가 어떤 종류인지 가져옵니다.

### name   <a id="name"></a>

**● name**: `string`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[name](avitem-class.md#name)\_

\_Overrides [Item](item-class.md).[name](item-class.md#name)\_

아이템의 이름을 설정하거나 가져옵니다.

### parentFolder   <a id="parentfolder"></a>

**● parentFolder**: _\[FolderItem\]\(\_affectscript_.affectscriptapi.folderitem.md\)\_

\_부모로부터 상속됨 : [Item](item-class.md).[parentFolder](item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

### pixelAspect   <a id="pixelaspect"></a>

**● pixelAspect**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[pixelAspect](avitem-class.md#pixelaspect)\_

### proxySource   <a id="proxysource"></a>

**● proxySource**: \_[FootageSource](../footage-api/footagesource-class.md)\_

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[proxySource](avitem-class.md#proxysource)\_

### selected   <a id="selected"></a>

**● selected**: `boolean`

\_부모로부터 상속됨 : [Item](item-class.md).[selected](item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

### time   <a id="time"></a>

**● time**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[time](avitem-class.md#time)\_

아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다. 미리보기에 나오고 있을 경우 현재 시간을 설정합니다.

### typeName   <a id="typename"></a>

**● typeName**: `string`

\_부모로부터 상속됨 : [Item](item-class.md).[typeName](item-class.md#typename)\_

아이템의 종류를 문자열로 가져옵니다.

### useProxy   <a id="useproxy"></a>

**● useProxy**: `boolean`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[useProxy](avitem-class.md#useproxy)\_

아이템의 프록시 사용 여부를 설정하거나 가져옵니다.

### usedIn   <a id="usedin"></a>

**● usedIn**: \_[CompItem](compitem-class.md)\[\]\_

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[usedIn](avitem-class.md#usedin)\_

아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.

### width   <a id="width"></a>

**● width**: `number`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[width](avitem-class.md#width)\_

아이템의 가로 크기를 가져옵니다.

## 사용 가능한 함수

### openInViewer   <a id="openinviewer"></a>

▸ **openInViewer**\(\): [Viewer](../after-effects-api/viewer-class.md)

해당 푸티지를 엽니다.

**반환:** [Viewer](../after-effects-api/viewer-class.md)

### remove   <a id="remove"></a>

▸ **remove**\(\): `void`

\_부모로부터 상속됨 : [Item](item-class.md).[remove](item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. \(원본 파일은 유지됩니다.\)

### replace   <a id="replace"></a>

▸ **replace**\(file: `File`\): `void`

푸티지를 바꿉니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| file | `File` | 바꿀 파일입니다. |

### replaceWithPlaceholder   <a id="replacewithplaceholder"></a>

▸ **replaceWithPlaceholder**\(name: `string`, width: `number`, height: `number`, frameRate: `number`, duration: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| name | `string` |
| width | `number` |
| height | `number` |
| frameRate | `number` |
| duration | `number` |

### replaceWithSequence   <a id="replacewithsequence"></a>

▸ **replaceWithSequence**\(file: `File`, forceAlphabetical: `boolean`\): `void`

해당 푸티지를 다른 푸티지 \(파일\)로 변경합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| file | `File` | 바꿀 파일입니다. |
| forceAlphabetical | `boolean` | 해당값을 \`true\` 할 경우, 파일명의 대/소문자를 무시합니다. |

### replaceWithSolid   <a id="replacewithsolid"></a>

▸ **replaceWithSolid**\(color: `number`_\[\]_, name: `string`, width: `number`, height: `number`, pixelAspect: `number`\): `void`

**매개변수:**

| Name | Type |
| :--- | :--- |
| color | `number`\[\] |
| name | `string` |
| width | `number` |
| height | `number` |
| pixelAspect | `number` |

### setProxy   <a id="setproxy"></a>

▸ **setProxy**\(file: `File`\): `void`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[setProxy](avitem-class.md#setproxy)\_

아이템에 프록시를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| file | `File` | 프록시를 설정할 파일입니다. |

### setProxyToNone   <a id="setproxytonone"></a>

▸ **setProxyToNone**\(\): `void`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[setProxyToNone](avitem-class.md#setproxytonone)\_

아이템에 프록시가 설정되어있다면 프록시 설정값을 없앱니다.

### setProxyWithPlaceholder   <a id="setproxywithplaceholder"></a>

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

### setProxyWithSequence   <a id="setproxywithsequence"></a>

▸ **setProxyWithSequence**\(file: `File`, forceAlphabetical: `boolean`\): `void`

\_부모로부터 상속됨 : [AVItem](avitem-class.md).[setProxyWithSequence](avitem-class.md#setproxywithsequence)\_

**매개변수:**

| Name | Type |
| :--- | :--- |
| file | `File` |
| forceAlphabetical | `boolean` |

### setProxyWithSolid   <a id="setproxywithsolid"></a>

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

