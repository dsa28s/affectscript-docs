# FolderItem 클래스

## 구조

↳ [Item](/javascript-api/api/item/item-class.md)

**↳ FolderItem**

## 목차

### 속성값

- [comment](/javascript-api/api/item/folderitem-class.md#comment)
- [id](/javascript-api/api/item/folderitem-class.md#id)
- [items](/javascript-api/api/item/folderitem-class.md#items)
- [label](/javascript-api/api/item/folderitem-class.md#label)
- [name](/javascript-api/api/item/folderitem-class.md#name)
- [numItems](/javascript-api/api/item/folderitem-class.md#numitems)
- [parentFolder](/javascript-api/api/item/folderitem-class.md#parentfolder)
- [selected](/javascript-api/api/item/folderitem-class.md#selected)
- [typeName](/javascript-api/api/item/folderitem-class.md#typename)

### 사용 가능한 함수

- [item](/javascript-api/api/item/folderitem-class.md#item)
- [remove](/javascript-api/api/item/folderitem-class.md#remove)

---

## 속성값

<a id="comment"></a>

### comment

**● comment**: _`string`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[comment](/javascript-api/api/item/item-class.md#comment)\_

아이템에 대한 메모를 추가하거나 가져옵니다.

---

<a id="id"></a>

### id

**● id**: _`number`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[id](/javascript-api/api/item/item-class.md#id)\_

아이템에 대한 ID를 가져옵니다.

---

<a id="items"></a>

### items

**● items**: \_[ItemCollection](/javascript-api/api/collection/itemcollection-class.md)\_

폴더 안에 있는 모든 아이템들을 가져옵니다.

---

<a id="label"></a>

### label

**● label**: _`number`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[label](/javascript-api/api/item/item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. (1 ~ 16까지 사용가능)

---

<a id="name"></a>

### name

**● name**: _`string`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[name](/javascript-api/api/item/item-class.md#name)\_

프로젝트 패널에 나오는 아이템 이름을 설정하거나 가져옵니다.

---

<a id="numitems"></a>

### numItems

**● numItems**: _`number`_

폴더 안에 있는 모든 아이템의 개수를 가져옵니다.

---

<a id="parentfolder"></a>

### parentFolder

**● parentFolder**: \_[FolderItem](/javascript-api/api/item/folderitem-class.md)\_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[parentFolder](/javascript-api/api/item/item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

---

<a id="selected"></a>

### selected

**● selected**: _`boolean`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[selected](/javascript-api/api/item/item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

---

<a id="typename"></a>

### typeName

**● typeName**: _`string`_

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[typeName](/javascript-api/api/item/item-class.md#typename)\_

아이템의 종류를 문자열로 가져옵니다.

---

## 사용 가능한 함수

<a id="item"></a>

### item

▸ **item**(index: _`number`_): [AfterEffectsItem](/javascript-api/api/item/aftereffectsitem-class.md)

해당 폴더에 있는 최상위 아이템을 가져옵니다.

**매개변수:**

| Name  | Type     |
| ----- | -------- |
| index | `number` |

**반환:** [AfterEffectsItem](/javascript-api/api/item/aftereffectsitem-class.md)

---

<a id="remove"></a>

### remove

▸ **remove**(): `void`

\_부모로부터 상속됨 : [Item](/javascript-api/api/item/item-class.md).[remove](/javascript-api/api/item/item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. (원본 파일은 유지됩니다.)

---
