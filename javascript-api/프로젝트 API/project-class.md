# Project 클래스

## 구조

**↳ Project**

## 목차

### 속성값

- [activeItem](/javascript-api/api/project/project-class.md#activeitem)
- [bitsPerChannel](/javascript-api/api/project/project-class.md#bitsperchannel)
- [displayStartFrame](/javascript-api/api/project/project-class.md#displaystartframe)
- [feetFramesFilmType](/javascript-api/api/project/project-class.md#feetframesfilmtype)
- [file](/javascript-api/api/project/project-class.md#file)
- [footageTimecodeDisplayStartType](/javascript-api/api/project/project-class.md#footagetimecodedisplaystarttype)
- [framesCountType](/javascript-api/api/project/project-class.md#framescounttype)
- [framesUseFeetFrames](/javascript-api/api/project/project-class.md#framesusefeetframes)
- [items](/javascript-api/api/project/project-class.md#items)
- [linearBlending](/javascript-api/api/project/project-class.md#linearblending)
- [numItems](/javascript-api/api/project/project-class.md#numitems)
- [renderQueue](/javascript-api/api/project/project-class.md#renderqueue)
- [rootFolder](/javascript-api/api/project/project-class.md#rootfolder)
- [selection](/javascript-api/api/project/project-class.md#selection)
- [timeDisplayType](/javascript-api/api/project/project-class.md#timedisplaytype)
- [transparencyGridThumbnails](/javascript-api/api/project/project-class.md#transparencygridthumbnails)
- [xmpPacket](/javascript-api/api/project/project-class.md#xmppacket)

### 사용 가능한 함수

- [autoFixExpressions](/javascript-api/api/project/project-class.md#autofixexpressions)
- [close](/javascript-api/api/project/project-class.md#close)
- [consolidateFootage](/javascript-api/api/project/project-class.md#consolidatefootage)
- [importFile](/javascript-api/api/project/project-class.md#importfile)
- [importFileWithDialog](/javascript-api/api/project/project-class.md#importfilewithdialog)
- [importPlaceholder](/javascript-api/api/project/project-class.md#importplaceholder)
- [item](/javascript-api/api/project/project-class.md#item)
- [reduceProject](/javascript-api/api/project/project-class.md#reduceproject)
- [removeUnusedFootage](/javascript-api/api/project/project-class.md#removeunusedfootage)
- [save](/javascript-api/api/project/project-class.md#save)
- [saveWithDialog](/javascript-api/api/project/project-class.md#savewithdialog)
- [showWindow](/javascript-api/api/project/project-class.md#showwindow)

---

## 속성값

<a id="activeitem"></a>

### activeItem

**● activeItem**: \_[Item](/javascript-api/api/item/item-class.md)\_

현재 프로젝트에서 활성화 된 아이템을 가져옵니다.

---

<a id="bitsperchannel"></a>

### bitsPerChannel

**● bitsPerChannel**: \_[BitsPerChannelNumber]()\_

현재 프로젝트에 색상 채널값을 가져오거나 설정합니다. (8, 16, 32)

---

<a id="displaystartframe"></a>

### displayStartFrame

**● displayStartFrame**: \_[BooleanNumber]()\_

프로젝트에 시작 프레임 표시 여부를 가져오거나 설정합니다. (0, 1)

---

<a id="feetframesfilmtype"></a>

### feetFramesFilmType

**● feetFramesFilmType**: \_[FeetFramesFilmType]()\_

---

<a id="file"></a>

### file

**● file**: _`File`_

해당 프로젝트 파일 객체를 가져옵니다.

---

<a id="footagetimecodedisplaystarttype"></a>

### footageTimecodeDisplayStartType

**● footageTimecodeDisplayStartType**: \_[FootageTimecodeDisplayStartType]()\_

---

<a id="framescounttype"></a>

### framesCountType

**● framesCountType**: _[FramesCountType](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.framescounttype.md)\_

---

<a id="framesusefeetframes"></a>

### framesUseFeetFrames

**● framesUseFeetFrames**: _`boolean`_

---

<a id="items"></a>

### items

**● items**: \_[ItemCollection](/javascript-api/api/collection/itemcollection-class.md)\_

프로젝트의 모든 아이템을 가져옵니다.

---

<a id="linearblending"></a>

### linearBlending

**● linearBlending**: _`boolean`_

---

<a id="numitems"></a>

### numItems

**● numItems**: _`number`_

프로젝트에 있는 모든 아이템의 개수를 가져옵니다.

---

<a id="renderqueue"></a>

### renderQueue

**● renderQueue**: \_[RenderQueue](/javascript-api/api/render/renderqueue-class.md)\_

렌더링 대기열을 가져옵니다.

---

<a id="rootfolder"></a>

### rootFolder

**● rootFolder**: \_[FolderItem](/javascript-api/api/item/folderitem-class.md)\_

프로젝트에서 최상위 그룹 폴더를 가져옵니다.

---

<a id="selection"></a>

### selection

**● selection**: \_[Item](/javascript-api/api/item/item-class.md)[]\_

프로젝트 내에서 선택된 모든 아이템을 배열의 형태로 가져옵니다.

---

<a id="timedisplaytype"></a>

### timeDisplayType

**● timeDisplayType**: _[TimeDisplayType](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.timedisplaytype.md)\_

프로젝트에서 사용하는 시간 형식을 가져오거나 설정합니다.

---

<a id="transparencygridthumbnails"></a>

### transparencyGridThumbnails

**● transparencyGridThumbnails**: _`boolean`_

---

<a id="xmppacket"></a>

### xmpPacket

**● xmpPacket**: _`string`_

---

## Methods

<a id="autofixexpressions"></a>

### autoFixExpressions

▸ **autoFixExpressions**(oldText: _`string`_, newText: _`string`_): `void`

잘못된 표현식을 자동으로 수정합니다.

**매개변수:**

| Name    | Type     | Description                                           |
| ------- | -------- | ----------------------------------------------------- |
| oldText | `string` | 변경될 텍스트입니다.                                  |
| newText | `string` | 변경될 텍스트가 잘못되었다면, 해당 문구로 변경합니다. |

---

<a id="close"></a>

### close

▸ **close**(closeOptions: _[CloseOptions](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.closeoptions.md)\_): `void`

프로젝트를 닫습니다.

**매개변수:**

| Name         | Type                                                                                     | Description                                                                                 |
| ------------ | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| closeOptions | [CloseOptions](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.closeoptions.md) | 프로젝트를 닫을 때에 프롬프트 창을 띄어 저장할건지, 저장하지 않고 닫을지 여부를 설정합니다. |

---

<a id="consolidatefootage"></a>

### consolidateFootage

▸ **consolidateFootage**(): `void`

프로젝트에 포함된 모든 푸티지를 하나로 통합합니다.

---

<a id="importfile"></a>

### importFile

▸ **importFile**(importOptions: _[ImportOptions](/javascript-api/api/footage/importoptions-class.md)_): [FootageItem](/javascript-api/api/item/footageitem-class.md)

프로젝트에 파일을 추가합니다. (가져옵니다.)

**매개변수:**

| Name          | Type                                                            | Description                           |
| ------------- | --------------------------------------------------------------- | ------------------------------------- |
| importOptions | [ImportOptions](/javascript-api/api/footage/importoptions-class.md) | 파일을 가져올 때 옵션값을 지정합니다. |

**반환:** [FootageItem](/javascript-api/api/item/footageitem-class.md)

---

<a id="importfilewithdialog"></a>

### importFileWithDialog

▸ **importFileWithDialog**(): [Item](/javascript-api/api/item/item-class.md)[]

파일 대화상자를 통해 파일을 프로젝트로 가져옵니다.

**반환:** [Item](/javascript-api/api/item/item-class.md)[]

---

<a id="importplaceholder"></a>

### importPlaceholder

▸ **importPlaceholder**(name: _`String`_, width: _`number`_, height: _`number`_, frameRate: _`number`_, duration: _`number`_): `any`

프로젝트에 Placeholder를 가져옵니다.

**매개변수:**

| Name      | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| name      | `String` | 이름입니다.                   |
| width     | `number` | 오브젝트의 가로 크기입니다.   |
| height    | `number` | 오브젝트의 세로 크기입니다.   |
| frameRate | `number` | 오브젝트의 프레임 비율입니다. |
| duration  | `number` | 오브젝트의 길이입니다.        |

**반환:** `any`

---

<a id="item"></a>

### item

▸ **item**(index: _`number`_): [AfterEffectsItem](/javascript-api/api/item/aftereffectsitem-class.md)

프로젝트에서 아이템을 가져옵니다.

**매개변수:**

| Name  | Type     | Description                 |
| ----- | -------- | --------------------------- |
| index | `number` | 가져올 아이템의 위치입니다. |

**반환:** [AfterEffectsItem](/javascript-api/api/item/aftereffectsitem-class.md)

---

<a id="reduceproject"></a>

### reduceProject

▸ **reduceProject**(arrayOfItems: \_[Item](/javascript-api/api/item/item-class.md)[]\_): `number`

프로젝트를 줄입니다.

**매개변수:**

| Name         | Type                                         | Description                  |
| ------------ | -------------------------------------------- | ---------------------------- |
| arrayOfItems | [Item](/javascript-api/api/item/item-class.md)[] | 줄일 아이템 배열 객체입니다. |

**반환:** `number`
프로젝트에서 제거된 아이템의 개수입니다.

---

<a id="removeunusedfootage"></a>

### removeUnusedFootage

▸ **removeUnusedFootage**(): `void`

프로젝트에서 사용하지 않는 푸티지 파일을 자동으로 지웁니다. (원본 파일을 지워지지 않습니다.)

---

<a id="save"></a>

### save

▸ **save**(file?: _`File`_): `any`

프로젝트를 저장합니다.

**매개변수:**

| Name            | Type   | Description                           |
| --------------- | ------ | ------------------------------------- |
| `Optional` file | `File` | 다른 이름으로 저장할 경우 입력합니다. |

**반환:** `any`

---

<a id="savewithdialog"></a>

### saveWithDialog

▸ **saveWithDialog**(): `boolean`

프로젝트를 대화상자를 통해 저장합니다.

**반환:** `boolean`
저장 여부를 반환합니다.

---

<a id="showwindow"></a>

### showWindow

▸ **showWindow**(doShow: _`boolean`_): `void`

프로젝트 패널 노출 여부를 설정합니다.

**매개변수:**

| Name   | Type      | Description                             |
| ------ | --------- | --------------------------------------- |
| doShow | `boolean` | true일 경우 프로젝트 패널을 노출합니다. |

---
