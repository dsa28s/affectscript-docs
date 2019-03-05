# Item 클래스

## 구조

**Item**

↳ [AVItem](avitem-class.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [CompItem](compitem-class.md)

&nbsp;&nbsp;&nbsp;&nbsp;↳ [FootageItem](footageitem-class.md)

↳ [FolderItem](folderitem-class.md)

↳ [AfterEffectsItem](../after-effects-api/aftereffectsitem-class.md)

## 목차

### 속성값

* [comment](item-class.md#comment)
* [id](item-class.md#id)
* [label](item-class.md#label)
* [name](item-class.md#name)
* [parentFolder](item-class.md#parentfolder)
* [selected](item-class.md#selected)
* [typeName](item-class.md#typename)

### 사용 가능한 함수

* [remove](item-class.md#remove)

## 속성값

### comment <a id="comment"></a>

**● comment**: `string`

아이템에 대한 메모를 추가하거나 가져옵니다.

### id <a id="id"></a>

**● id**: `number`

아이템에 대한 ID를 가져옵니다.

### label <a id="label"></a>

**● label**: `number`

아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. \(1 ~ 16까지 사용가능\)

### name <a id="name"></a>

**● name**: `string`

프로젝트 패널에 나오는 아이템 이름을 설정하거나 가져옵니다.

### parentFolder <a id="parentfolder"></a>

**● parentFolder**: \_[FolderItem](folderitem-class.md)\_

아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.

### selected <a id="selected"></a>

**● selected**: `boolean`

아이템의 포커스 상태를 설정하거나 가져옵니다.

### typeName <a id="typename"></a>

**● typeName**: `string`

아이템의 종류를 문자열로 가져옵니다.

## 사용 가능한 함수

### remove <a id="remove"></a>

▸ **remove**\(\): `void`

프로젝트에서 해당 아이템을 제거합니다. \(원본 파일은 유지됩니다.\)

