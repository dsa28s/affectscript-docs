# FootageItem 클래스

## 구조

↳ [AVItem](/javascript-api/api/item/avitem-class.md)

**↳ FootageItem**

## 목차

### 속성값

- [comment](/javascript-api/api/item/footageitem-class.md#comment)
- [duration](/javascript-api/api/item/footageitem-class.md#duration)
- [file](/javascript-api/api/item/footageitem-class.md#file)
- [footageMissing](/javascript-api/api/item/footageitem-class.md#footagemissing)
- [frameDuration](/javascript-api/api/item/footageitem-class.md#frameduration)
- [frameRate](/javascript-api/api/item/footageitem-class.md#framerate)
- [hasAudio](/javascript-api/api/item/footageitem-class.md#hasaudio)
- [hasVideo](/javascript-api/api/item/footageitem-class.md#hasvideo)
- [height](/javascript-api/api/item/footageitem-class.md#height)
- [id](/javascript-api/api/item/footageitem-class.md#id)
- [label](/javascript-api/api/item/footageitem-class.md#label)
- [mainSource](/javascript-api/api/item/footageitem-class.md#mainsource)
- [name](/javascript-api/api/item/footageitem-class.md#name)
- [parentFolder](/javascript-api/api/item/footageitem-class.md#parentfolder)
- [pixelAspect](/javascript-api/api/item/footageitem-class.md#pixelaspect)
- [proxySource](/javascript-api/api/item/footageitem-class.md#proxysource)
- [selected](/javascript-api/api/item/footageitem-class.md#selected)
- [time](/javascript-api/api/item/footageitem-class.md#time)
- [typeName](/javascript-api/api/item/footageitem-class.md#typename)
- [useProxy](/javascript-api/api/item/footageitem-class.md#useproxy)
- [usedIn](/javascript-api/api/item/footageitem-class.md#usedin)
- [width](/javascript-api/api/item/footageitem-class.md#width)

### 사용 가능한 함수

- [openInViewer](/javascript-api/api/item/footageitem-class.md#openinviewer)
- [remove](/javascript-api/api/item/footageitem-class.md#remove)
- [replace](/javascript-api/api/item/footageitem-class.md#replace)
- [replaceWithPlaceholder](/javascript-api/api/item/footageitem-class.md#replacewithplaceholder)
- [replaceWithSequence](/javascript-api/api/item/footageitem-class.md#replacewithsequence)
- [replaceWithSolid](/javascript-api/api/item/footageitem-class.md#replacewithsolid)
- [setProxy](/javascript-api/api/item/footageitem-class.md#setproxy)
- [setProxyToNone](/javascript-api/api/item/footageitem-class.md#setproxytonone)
- [setProxyWithPlaceholder](/javascript-api/api/item/footageitem-class.md#setproxywithplaceholder)
- [setProxyWithSequence](/javascript-api/api/item/footageitem-class.md#setproxywithsequence)
- [setProxyWithSolid](/javascript-api/api/item/footageitem-class.md#setproxywithsolid)

---

## 속성값

<a id="comment"></a>

### comment

**● comment**: _`string`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[comment](/javascript-api/api/item/item-class.md#comment)\_

아이템에 대한 메모를 추가하거나 가져옵니다.

---

<a id="duration"></a>

### duration

**● duration**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[duration](/javascript-api/api/item/avitem-class.md#duration)\_

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

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[footageMissing](/javascript-api/api/item/avitem-class.md#footagemissing)\_

아이템의 원본 파일이 없을 경우 true 가 반환됩니다.

---

<a id="frameduration"></a>

### frameDuration

**● frameDuration**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[frameDuration](/javascript-api/api/item/avitem-class.md#frameduration)\_

아이템의 프레임 수를 가져옵니다.

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

<a id="mainsource"></a>

### mainSource

**● mainSource**: \_[FootageSource](/javascript-api/api/footage/footagesource-class.md)\_

푸티지가 어떤 종류인지 가져옵니다.

---

<a id="name"></a>

### name

**● name**: _`string`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[name](/javascript-api/api/item/avitem-class.md#name)\_

\_Overrides [Item](/javascript-api/api/item/item-class.md).[name](/javascript-api/api/item/item-class.md#name)\_

아이템의 이름을 설정하거나 가져옵니다.

---

<a id="parentfolder"></a>

### parentFolder

**● parentFolder**: _[FolderItem](\_affectscript_.affectscriptapi.folderitem.md)\_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[parentFolder](/javascript-api/api/item/item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

---

<a id="pixelaspect"></a>

### pixelAspect

**● pixelAspect**: _`number`_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[pixelAspect](/javascript-api/api/item/avitem-class.md#pixelaspect)\_

---

<a id="proxysource"></a>

### proxySource

**● proxySource**: \_[FootageSource](/javascript-api/api/footage/footagesource-class.md)\_

\_부모로부터 상속됨 : [AVItem](/javascript-api/api/item/avitem-class.md).[proxySource](/javascript-api/api/item/avitem-class.md#proxysource)\_

---

<a id="selected"></a>

### selected

**● selected**: _`boolean`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[selected](/javascript-api/api/item/item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

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

## 사용 가능한 함수

<a id="openinviewer"></a>

### openInViewer

▸ **openInViewer**(): [Viewer](/javascript-api/api/controls/viewer-class.md)

해당 푸티지를 엽니다.

**반환:** [Viewer](/javascript-api/api/controls/viewer-class.md)

---

<a id="remove"></a>

### remove

▸ **remove**(): `void`

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[remove](/javascript-api/api/item/item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. (원본 파일은 유지됩니다.)

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

해당 푸티지를 다른 푸티지 (파일)로 변경합니다.

**매개변수:**

| Name              | Type      | Description                                                 |
| ----------------- | --------- | ----------------------------------------------------------- |
| file              | `File`    | 바꿀 파일입니다.                                            |
| forceAlphabetical | `boolean` | 해당값을 \`true\` 할 경우, 파일명의 대/소문자를 무시합니다. |

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
