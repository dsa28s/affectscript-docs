# FolderItem 클래스

## 구조

[Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md)

**↳ FolderItem**

## 목차

### 속성값

* [comment](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#comment)
* [id](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#id)
* [items](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#items)
* [label](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#label)
* [name](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#name)
* [numItems](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#numitems)
* [parentFolder](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#parentfolder)
* [selected](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#selected)
* [typeName](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#typename)

### 사용 가능한 함수

* [item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#item)
* [remove](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md#remove)

## 속성값

### comment <a id="comment"></a>

**● comment**: `string`

\_부모로부터 상속됨 : [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md).[comment](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md#comment)\_

아이템에 대한 메모를 추가하거나 가져옵니다.

### id <a id="id"></a>

**● id**: `number`

\_부모로부터 상속됨 : [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md).[id](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md#id)\_

아이템에 대한 ID를 가져옵니다.

### items <a id="items"></a>

**● items**: \_[ItemCollection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/collection/itemcollection-class.md)\_

폴더 안에 있는 모든 아이템들을 가져옵니다.

### label <a id="label"></a>

**● label**: `number`

\_부모로부터 상속됨 : [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md).[label](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md#label)\_

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. \(1 ~ 16까지 사용가능\)

### name <a id="name"></a>

**● name**: `string`

\_부모로부터 상속됨 : [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md).[name](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md#name)\_

프로젝트 패널에 나오는 아이템 이름을 설정하거나 가져옵니다.

### numItems <a id="numitems"></a>

**● numItems**: `number`

폴더 안에 있는 모든 아이템의 개수를 가져옵니다.

### parentFolder <a id="parentfolder"></a>

**● parentFolder**: \_[FolderItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/folderitem-class.md)\_

\_부모로부터 상속됨 : [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md).[parentFolder](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md#parentfolder)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

### selected <a id="selected"></a>

**● selected**: `boolean`

\_부모로부터 상속됨 : [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md).[selected](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md#selected)\_

아이템의 포커스 상태를 설정하거나 가져옵니다.

### typeName <a id="typename"></a>

**● typeName**: `string`

\_부모로부터 상속됨 : [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md).[typeName](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md#typename)\_

아이템의 종류를 문자열로 가져옵니다.

## 사용 가능한 함수

### item <a id="item"></a>

▸ **item**\(index: `number`\): [AfterEffectsItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/aftereffectsitem-class.md)

해당 폴더에 있는 최상위 아이템을 가져옵니다.

**매개변수:**

| Name | Type |
| :--- | :--- |
| index | `number` |

**반환:** [AfterEffectsItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/aftereffectsitem-class.md)

### remove <a id="remove"></a>

▸ **remove**\(\): `void`

\_부모로부터 상속됨 : [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md).[remove](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/item/item-class.md#remove)\_

프로젝트에서 해당 아이템을 제거합니다. \(원본 파일은 유지됩니다.\)

