# OutputModule 클래스

## Hierarchy

**↳ OutputModule**

## 목차

### 속성값

* [file](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/_affectscript_.affectscriptapi.outputmodule.md#file)
* [includeSourceXMP](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/_affectscript_.affectscriptapi.outputmodule.md#includesourcexmp)
* [name](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/_affectscript_.affectscriptapi.outputmodule.md#name)
* [postRenderAction](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/_affectscript_.affectscriptapi.outputmodule.md#postrenderaction)
* [templates](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/_affectscript_.affectscriptapi.outputmodule.md#templates)

### 사용 가능한 함수

* [applyTemplate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/_affectscript_.affectscriptapi.outputmodule.md#applytemplate)
* [remove](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/_affectscript_.affectscriptapi.outputmodule.md#remove)
* [saveAsTemplate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/_affectscript_.affectscriptapi.outputmodule.md#saveastemplate)

## 속성값

### file <a id="file"></a>

**● file**: `File`

### includeSourceXMP <a id="includesourcexmp"></a>

**● includeSourceXMP**: `boolean`

### name <a id="name"></a>

**● name**: `String`

렌더링 모듈의 이름을 가져오거나 설정합니다.

### postRenderAction <a id="postrenderaction"></a>

**● postRenderAction**: _\[PostRenderAction\]\(../Enum/\_affectscript_.affectscriptapi.postrenderaction.md\)\_

렌더링이 완료된 후 작업할 태스크를 가져오거나 설정합니다.

### templates <a id="templates"></a>

**● templates**: `String`_\[\]_

모든 출력 가능한 렌더링 모듈을 가져옵니다.

## Methods

### applyTemplate <a id="applytemplate"></a>

▸ **applyTemplate**\(templateName: `String`\): `any`

렌더링을 진행할 때에 사전 정의를 사용하여 진행합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| templateName | `String` |  |

**반환:** `any`

### remove <a id="remove"></a>

▸ **remove**\(\): `void`

렌더링 대기열에서 지웁니다.

### saveAsTemplate <a id="saveastemplate"></a>

▸ **saveAsTemplate**\(name: `String`\): `void`

렌더링 모듈을 다른 이름으로 저장합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `String` | 저장할 이름입니다. |

