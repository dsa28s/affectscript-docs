# ItemCollection 클래스

## 구조

[Collection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/collection-class.md)

**↳ ItemCollection**

## 목차

### 사용 가능한 함수

* [addComp](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/itemcollection-class.md#addcomp)
* [addFolder](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/itemcollection-class.md#addfolder)

## 사용 가능한 함수

### addComp <a id="addcomp"></a>

▸ **addComp**\(name: `string`, width: `number`, height: `number`, pixelAspect: `number`, duration: `number`, frameRate: `number`\): [`CompItem`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/compitem-class.md)

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

**반환:** [`CompItem`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/compitem-class.md)

 ssssssss

### addFolder <a id="addfolder"></a>

▸ **addFolder**\(name: `string`\): [`FolderItem`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/folderitem-class.md)

폴더를 추가합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 폴더 이름입니다. |

**반환:** [`FolderItem`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/folderitem-class.md)

