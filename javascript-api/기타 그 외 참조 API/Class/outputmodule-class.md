# OutputModule 클래스

## Hierarchy

**↳ OutputModule**

## 목차

### 속성값

- [file](_affectscript_.affectscriptapi.outputmodule.md#file)
- [includeSourceXMP](_affectscript_.affectscriptapi.outputmodule.md#includesourcexmp)
- [name](_affectscript_.affectscriptapi.outputmodule.md#name)
- [postRenderAction](_affectscript_.affectscriptapi.outputmodule.md#postrenderaction)
- [templates](_affectscript_.affectscriptapi.outputmodule.md#templates)

### 사용 가능한 함수

- [applyTemplate](_affectscript_.affectscriptapi.outputmodule.md#applytemplate)
- [remove](_affectscript_.affectscriptapi.outputmodule.md#remove)
- [saveAsTemplate](_affectscript_.affectscriptapi.outputmodule.md#saveastemplate)

---

## 속성값

<a id="file"></a>

### file

**● file**: _`File`_

---

<a id="includesourcexmp"></a>

### includeSourceXMP

**● includeSourceXMP**: _`boolean`_

---

<a id="name"></a>

### name

**● name**: _`String`_

렌더링 모듈의 이름을 가져오거나 설정합니다.

---

<a id="postrenderaction"></a>

### postRenderAction

**● postRenderAction**: _[PostRenderAction](../Enum/\_affectscript_.affectscriptapi.postrenderaction.md)\_

렌더링이 완료된 후 작업할 태스크를 가져오거나 설정합니다.

---

<a id="templates"></a>

### templates

**● templates**: _`String`[]_

모든 출력 가능한 렌더링 모듈을 가져옵니다.

---

## Methods

<a id="applytemplate"></a>

### applyTemplate

▸ **applyTemplate**(templateName: _`String`_): `any`

렌더링을 진행할 때에 사전 정의를 사용하여 진행합니다.

**매개변수:**

| Name         | Type     | Description |
| ------------ | -------- | ----------- |
| templateName | `String` |             |

**반환:** `any`

---

<a id="remove"></a>

### remove

▸ **remove**(): `void`

렌더링 대기열에서 지웁니다.

---

<a id="saveastemplate"></a>

### saveAsTemplate

▸ **saveAsTemplate**(name: _`String`_): `void`

렌더링 모듈을 다른 이름으로 저장합니다.

**매개변수:**

| Name | Type     | Description        |
| ---- | -------- | ------------------ |
| name | `String` | 저장할 이름입니다. |

---
