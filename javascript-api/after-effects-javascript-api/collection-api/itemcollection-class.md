# ItemCollection 클래스

## 구조

[Collection](collection-class.md)

**↳ ItemCollection**

## 목차

### 사용 가능한 함수

* [addComp](itemcollection-class.md#addcomp)
* [addFolder](itemcollection-class.md#addfolder)

## 사용 가능한 함수

### addComp  <a id="addcomp"></a>

▸ **addComp**\(name: `string`, width: `number`, height: `number`, pixelAspect: `number`, duration: `number`, frameRate: `number`\): [`CompItem`]()

컴포지션을 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 컴포지션 이름입니다. |
| width | `number` | 컴포지션의 가로 크기입니다. |
| height | `number` | 컴포지션의 세로 크기입니다. |
| pixelAspect | `number` | 컴포지션의 픽셀값입니다. \(기본값은 100 입니다.\) |
| duration | `number` | 컴포지션의 길이입니다. \(단위 : 초\) |
| frameRate | `number` | 컴포지션의 프레임레이트입니다. \(기본값 : 25\) |

**반환:** [`CompItem`]()

ssssssss

### addFolder  <a id="addfolder"></a>

▸ **addFolder**\(name: `string`\): [`FolderItem`]()

폴더를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 폴더 이름입니다. |

**반환:** [`FolderItem`]()

