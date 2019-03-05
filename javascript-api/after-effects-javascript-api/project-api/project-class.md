# Project 클래스

## 목차

### 속성값

* [activeItem](project-class.md#activeitem)
* [bitsPerChannel](project-class.md#bitsperchannel)
* [displayStartFrame](project-class.md#displaystartframe)
* [feetFramesFilmType](project-class.md#feetframesfilmtype)
* [file](project-class.md#file)
* [footageTimecodeDisplayStartType](project-class.md#footagetimecodedisplaystarttype)
* [framesCountType](project-class.md#framescounttype)
* [framesUseFeetFrames](project-class.md#framesusefeetframes)
* [items](project-class.md#items)
* [linearBlending](project-class.md#linearblending)
* [numItems](project-class.md#numitems)
* [renderQueue](project-class.md#renderqueue)
* [rootFolder](project-class.md#rootfolder)
* [selection](project-class.md#selection)
* [timeDisplayType](project-class.md#timedisplaytype)
* [transparencyGridThumbnails](project-class.md#transparencygridthumbnails)
* [xmpPacket](project-class.md#xmppacket)

### 사용 가능한 함수

* [autoFixExpressions](project-class.md#autofixexpressions)
* [close](project-class.md#close)
* [consolidateFootage](project-class.md#consolidatefootage)
* [importFile](project-class.md#importfile)
* [importFileWithDialog](project-class.md#importfilewithdialog)
* [importPlaceholder](project-class.md#importplaceholder)
* [item](project-class.md#item)
* [reduceProject](project-class.md#reduceproject)
* [removeUnusedFootage](project-class.md#removeunusedfootage)
* [save](project-class.md#save)
* [saveWithDialog](project-class.md#savewithdialog)
* [showWindow](project-class.md#showwindow)

## 속성값

### activeItem   <a id="activeitem"></a>

**● activeItem**: \_[Item](../item-api/item-class.md)\_

현재 프로젝트에서 활성화 된 아이템을 가져옵니다.

### bitsPerChannel   <a id="bitsperchannel"></a>

**● bitsPerChannel**: \_[BitsPerChannelNumber](project-class.md)\_

현재 프로젝트에 색상 채널값을 가져오거나 설정합니다. \(8, 16, 32\)

### displayStartFrame   <a id="displaystartframe"></a>

**● displayStartFrame**: \_[BooleanNumber](project-class.md)\_

프로젝트에 시작 프레임 표시 여부를 가져오거나 설정합니다. \(0, 1\)

### feetFramesFilmType   <a id="feetframesfilmtype"></a>

**● feetFramesFilmType**: \_[FeetFramesFilmType](project-class.md)\_

### file   <a id="file"></a>

**● file**: `File`

해당 프로젝트 파일 객체를 가져옵니다.

### footageTimecodeDisplayStartType   <a id="footagetimecodedisplaystarttype"></a>

**● footageTimecodeDisplayStartType**: \_[FootageTimecodeDisplayStartType](project-class.md)\_

### framesCountType   <a id="framescounttype"></a>

**● framesCountType**: _\[FramesCountType\]\(../etc/enum/\_affectscript_.affectscriptapi.framescounttype.md\)\_

### framesUseFeetFrames   <a id="framesusefeetframes"></a>

**● framesUseFeetFrames**: `boolean`

### items   <a id="items"></a>

**● items**: \_[ItemCollection](../collection-api/itemcollection-class.md)\_

프로젝트의 모든 아이템을 가져옵니다.

### linearBlending   <a id="linearblending"></a>

**● linearBlending**: `boolean`

### numItems   <a id="numitems"></a>

**● numItems**: `number`

프로젝트에 있는 모든 아이템의 개수를 가져옵니다.

### renderQueue   <a id="renderqueue"></a>

**● renderQueue**: \_[RenderQueue](../rendering-api/renderqueue-class.md)\_

렌더링 대기열을 가져옵니다.

### rootFolder   <a id="rootfolder"></a>

**● rootFolder**: \_[FolderItem](../item-api/folderitem-class.md)\_

프로젝트에서 최상위 그룹 폴더를 가져옵니다.

### selection   <a id="selection"></a>

**● selection**: \_[Item](../item-api/item-class.md)\[\]\_

프로젝트 내에서 선택된 모든 아이템을 배열의 형태로 가져옵니다.

### timeDisplayType   <a id="timedisplaytype"></a>

**● timeDisplayType**: [TimeDisplayType](../etc/enum/_affectscript_.affectscriptapi.timedisplaytype.md)

프로젝트에서 사용하는 시간 형식을 가져오거나 설정합니다.

### transparencyGridThumbnails   <a id="transparencygridthumbnails"></a>

**● transparencyGridThumbnails**: `boolean`

### xmpPacket   <a id="xmppacket"></a>

**● xmpPacket**: `string`

## Methods

### autoFixExpressions   <a id="autofixexpressions"></a>

▸ **autoFixExpressions**\(oldText: `string`, newText: `string`\): `void`

잘못된 표현식을 자동으로 수정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| oldText | `string` | 변경될 텍스트입니다. |
| newText | `string` | 변경될 텍스트가 잘못되었다면, 해당 문구로 변경합니다. |

### close   <a id="close"></a>

▸ **close**\(closeOptions: _\[CloseOptions\]\(../etc/enum/\_affectscript_.affectscriptapi.closeoptions.md\)\): `void`

프로젝트를 닫습니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| closeOptions | [CloseOptions](../etc/enum/_affectscript_.affectscriptapi.closeoptions.md) | 프로젝트를 닫을 때에 프롬프트 창을 띄어 저장할건지, 저장하지 않고 닫을지 여부를 설정합니다. |

### consolidateFootage   <a id="consolidatefootage"></a>

▸ **consolidateFootage**\(\): `void`

프로젝트에 포함된 모든 푸티지를 하나로 통합합니다.

### importFile   <a id="importfile"></a>

▸ **importFile**\(importOptions: [_ImportOptions_](../footage-api/importoptions-class.md)\): [FootageItem](../item-api/footageitem-class.md)

프로젝트에 파일을 추가합니다. \(가져옵니다.\)

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| importOptions | [ImportOptions](../footage-api/importoptions-class.md) | 파일을 가져올 때 옵션값을 지정합니다. |

**반환:** [FootageItem](../item-api/footageitem-class.md)

### importFileWithDialog   <a id="importfilewithdialog"></a>

▸ **importFileWithDialog**\(\): [Item](../item-api/item-class.md)\[\]

파일 대화상자를 통해 파일을 프로젝트로 가져옵니다.

**반환:** [Item](../item-api/item-class.md)\[\]

### importPlaceholder   <a id="importplaceholder"></a>

▸ **importPlaceholder**\(name: `String`, width: `number`, height: `number`, frameRate: `number`, duration: `number`\): `any`

프로젝트에 Placeholder를 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `String` | 이름입니다. |
| width | `number` | 오브젝트의 가로 크기입니다. |
| height | `number` | 오브젝트의 세로 크기입니다. |
| frameRate | `number` | 오브젝트의 프레임 비율입니다. |
| duration | `number` | 오브젝트의 길이입니다. |

**반환:** `any`

### item   <a id="item"></a>

▸ **item**\(index: `number`\): [AfterEffectsItem](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/item-api/aftereffectsitem-class.md)

프로젝트에서 아이템을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| index | `number` | 가져올 아이템의 위치입니다. |

**반환:** [AfterEffectsItem](https://github.com/AffectScript/affectscript-docs/tree/1afa953892e708c5bf54a4f8ad99369083e8f58d/javascript-api/item-api/aftereffectsitem-class.md)

### reduceProject   <a id="reduceproject"></a>

▸ **reduceProject**\(arrayOfItems: \_[Item](../item-api/item-class.md)\[\]\_\): `number`

프로젝트를 줄입니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| arrayOfItems | [Item](../item-api/item-class.md)\[\] | 줄일 아이템 배열 객체입니다. |

**반환:** `number` 프로젝트에서 제거된 아이템의 개수입니다.

### removeUnusedFootage   <a id="removeunusedfootage"></a>

▸ **removeUnusedFootage**\(\): `void`

프로젝트에서 사용하지 않는 푸티지 파일을 자동으로 지웁니다. \(원본 파일을 지워지지 않습니다.\)

### save   <a id="save"></a>

▸ **save**\(file?: `File`\): `any`

프로젝트를 저장합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `Optional` file | `File` | 다른 이름으로 저장할 경우 입력합니다. |

**반환:** `any`

### saveWithDialog   <a id="savewithdialog"></a>

▸ **saveWithDialog**\(\): `boolean`

프로젝트를 대화상자를 통해 저장합니다.

**반환:** `boolean` 저장 여부를 반환합니다.

### showWindow   <a id="showwindow"></a>

▸ **showWindow**\(doShow: `boolean`\): `void`

프로젝트 패널 노출 여부를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| doShow | `boolean` | true일 경우 프로젝트 패널을 노출합니다. |

