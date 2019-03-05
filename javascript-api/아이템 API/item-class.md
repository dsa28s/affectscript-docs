# Item 클래스

## 구조

**↳ Item**

↳ [AVItem](/javascript-api/api/item/avitem-class.md)

↳ [FolderItem](/javascript-api/api/item/folderitem-class.md)

↳ [AfterEffectsItem](/javascript-api/api/item/aftereffectsitem-class.md)

## 목차

### 속성값

- [comment](/javascript-api/api/item/item-class.md#comment)
- [id](/javascript-api/api/item/item-class.md#id)
- [label](/javascript-api/api/item/item-class.md#label)
- [name](/javascript-api/api/item/item-class.md#name)
- [parentFolder](/javascript-api/api/item/item-class.md#parentfolder)
- [selected](/javascript-api/api/item/item-class.md#selected)
- [typeName](/javascript-api/api/item/item-class.md#typename)

### 사용 가능한 함수

- [remove](/javascript-api/api/item/item-class.md#remove)

---

## 속성값

<a id="comment"></a>

### comment

**● comment**: _`string`_

아이템에 대한 메모를 추가하거나 가져옵니다.

---

<a id="id"></a>

### id

**● id**: _`number`_

아이템에 대한 ID를 가져옵니다.

---

<a id="label"></a>

### label

**● label**: _`number`_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. (1 ~ 16까지 사용가능)

---

<a id="name"></a>

### name

**● name**: _`string`_

프로젝트 패널에 나오는 아이템 이름을 설정하거나 가져옵니다.

---

<a id="parentfolder"></a>

### parentFolder

**● parentFolder**: \_[FolderItem](/javascript-api/api/item/folderitem-class.md)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

---

<a id="selected"></a>

### selected

**● selected**: _`boolean`_

아이템의 포커스 상태를 설정하거나 가져옵니다.

---

<a id="typename"></a>

### typeName

**● typeName**: _`string`_

아이템의 종류를 문자열로 가져옵니다.

---

## 사용 가능한 함수

<a id="remove"></a>

### remove

▸ **remove**(): `void`

프로젝트에서 해당 아이템을 제거합니다. (원본 파일은 유지됩니다.)

---
