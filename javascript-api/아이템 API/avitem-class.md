# AVItem 클래스

## 관계

↳ [Item](/javascript-api/api/item/item-class.md)

**↳ AVItem**

↳ [CompItem](/javascript-api/api/item/compitem-class.md)

↳ [FootageItem](/javascript-api/api/item/footageitem-class.md)

## 목차

### 속성값

- [comment](/javascript-api/api/item/avitem-class.md#comment)
- [duration](/javascript-api/api/item/avitem-class.md#duration)
- [footageMissing](/javascript-api/api/item/avitem-class.md#footagemissing)
- [frameDuration](/javascript-api/api/item/avitem-class.md#frameduration)
- [frameRate](/javascript-api/api/item/avitem-class.md#framerate)
- [hasAudio](/javascript-api/api/item/avitem-class.md#hasaudio)
- [hasVideo](/javascript-api/api/item/avitem-class.md#hasvideo)
- [height](/javascript-api/api/item/avitem-class.md#height)
- [id](/javascript-api/api/item/avitem-class.md#id)
- [label](/javascript-api/api/item/avitem-class.md#label)
- [name](/javascript-api/api/item/avitem-class.md#name)
- [parentFolder](/javascript-api/api/item/avitem-class.md#parentfolder)
- [pixelAspect](/javascript-api/api/item/avitem-class.md#pixelaspect)
- [proxySource](/javascript-api/api/item/avitem-class.md#proxysource)
- [selected](/javascript-api/api/item/avitem-class.md#selected)
- [time](/javascript-api/api/item/avitem-class.md#time)
- [typeName](/javascript-api/api/item/avitem-class.md#typename)
- [useProxy](/javascript-api/api/item/avitem-class.md#useproxy)
- [usedIn](/javascript-api/api/item/avitem-class.md#usedin)
- [width](/javascript-api/api/item/avitem-class.md#width)

### 사용 가능한 함수

- [remove](/javascript-api/api/item/avitem-class.md#remove)
- [setProxy](/javascript-api/api/item/avitem-class.md#setproxy)
- [setProxyToNone](/javascript-api/api/item/avitem-class.md#setproxytonone)
- [setProxyWithPlaceholder](/javascript-api/api/item/avitem-class.md#setproxywithplaceholder)
- [setProxyWithSequence](/javascript-api/api/item/avitem-class.md#setproxywithsequence)
- [setProxyWithSolid](/javascript-api/api/item/avitem-class.md#setproxywithsolid)

---

## 속성값

<a id="comment"></a>

### comment

**● comment**: _`string`_

\_부모로부터 상속됨 :[Item](/javascript-api/api/item/item-class.md).[comment](/javascript-api/api/item/item-class.md#comment)\_

아이템에 대한 메모를 추가하거나 가져옵니다.

---

<a id="duration"></a>

### duration

**● duration**: _`number`_

아이템의 길이를 가져옵니다. (재생 시간)

---

<a id="footagemissing"></a>

### footageMissing

**● footageMissing**: _`boolean`_

아이템의 원본 파일이 없을 경우 true 가 반환됩니다.

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

<a id="id"></a>

### id

**● id**: _`number`_

\_부모로부터 상속됨 :[Item](/javascript-api/api/item/item-class.md).[id](/javascript-api/api/item/item-class.md#id)\_

아이템에 대한 ID를 가져옵니다.

---

<a id="label"></a>

### label

**● label**: _`number`_

\_부모로부터 상속됨 :[Item](/javascript-api/api/item/item-class.md).[label](/javascript-api/api/item/item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. (1 ~ 16까지 사용가능)

---

<a id="name"></a>

### name

**● name**: _`string`_

\_Overrides [Item](/javascript-api/api/item/item-class.md).[name](/javascript-api/api/item/item-class.md#name)\_

아이템의 이름을 설정하거나 가져옵니다.

---

<a id="parentfolder"></a>

### parentFolder

**● parentFolder**: \_[FolderItem](/javascript-api/api/item/folderitem-class.md)\_

\_부모로부터 상속됨 :[Item](/javascript-api/api/item/item-class.md).[parentFolder](/javascript-api/api/item/item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

---

<a id="pixelaspect"></a>

### pixelAspect

**● pixelAspect**: _`number`_

---

<a id="proxysource"></a>

### proxySource

**● proxySource**: \_[FootageSource](/javascript-api/api/footage/footagesource-class.md)\_

---

<a id="selected"></a>

### selected

**● selected**: _`boolean`_

\_부모로부터 상속됨 :[Item](/javascript-api/api/item/item-class.md).[selected](/javascript-api/api/item/item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

---

<a id="time"></a>

### time

**● time**: _`number`_

아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다. 미리보기에 나오고 있을 경우 현재 시간을 설정합니다.

---

<a id="typename"></a>

### typeName

**● typeName**: _`string`_

\_부모로부터 상속됨 :[Item](/javascript-api/api/item/item-class.md).[typeName](/javascript-api/api/item/item-class.md#typename)\_

아이템의 종류를 문자열로 가져옵니다.

---

<a id="useproxy"></a>

### useProxy

**● useProxy**: _`boolean`_

아이템의 프록시 사용 여부를 설정하거나 가져옵니다.

---

<a id="usedin"></a>

### usedIn

**● usedIn**: \_[CompItem](/javascript-api/api/item/compitem-class.md)[]\_

아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.

---

<a id="width"></a>

### width

**● width**: _`number`_

아이템의 가로 크기를 가져옵니다.

---

## Methods

<a id="remove"></a>

### remove

▸ **remove**(): `void`

\_부모로부터 상속됨 :[Item](/javascript-api/api/item/item-class.md).[remove](/javascript-api/api/item/item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. (원본 파일은 유지됩니다.)

---

<a id="setproxy"></a>

### setProxy

▸ **setProxy**(file: _`File`_): `void`

아이템에 프록시를 설정합니다.

**매개변수:**

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
