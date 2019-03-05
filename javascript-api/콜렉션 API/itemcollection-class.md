# ItemCollection 클래스

## 구조

[Collection](/javascript-api/콜렉션%20API/collection-class.md)

**↳ ItemCollection**

## 목차

### 사용 가능한 함수

- [addComp](/javascript-api/콜렉션%20API/itemcollection-class.md#addcomp)
- [addFolder](/javascript-api/콜렉션%20API/itemcollection-class.md#addfolder)

---

## 사용 가능한 함수

<a id="addcomp"></a>

### addComp

▸ **addComp**(name: _`string`_, width: _`number`_, height: _`number`_, pixelAspect: _`number`_, duration: _`number`_, frameRate: _`number`_): [_`CompItem`_](/javascript-api/아이템%20API/compitem-class.md)

컴포지션을 추가합니다.

**매개변수:**

| Name        | Type     | Description                                     |
| ----------- | -------- | ----------------------------------------------- |
| name        | `string` | 컴포지션 이름입니다.                            |
| width       | `number` | 컴포지션의 가로 크기입니다.                     |
| height      | `number` | 컴포지션의 세로 크기입니다.                     |
| pixelAspect | `number` | 컴포지션의 픽셀값입니다. (기본값은 100 입니다.) |
| duration    | `number` | 컴포지션의 길이입니다. (단위 : 초)              |
| frameRate   | `number` | 컴포지션의 프레임레이트입니다. (기본값 : 25)    |

**반환:** [`CompItem`](/javascript-api/아이템%20API/compitem-class.md)

---

<a id="addfolder"></a>
ssssssss

### addFolder

▸ **addFolder**(name: _`string`_): [_`FolderItem`_](/javascript-api/아이템%20API/folderitem-class.md)

폴더를 추가합니다.

**매개변수:**

| Name | Type     | Description      |
| ---- | -------- | ---------------- |
| name | `string` | 폴더 이름입니다. |

**반환:** [`FolderItem`](/javascript-api/아이템%20API/folderitem-class.md)

---
