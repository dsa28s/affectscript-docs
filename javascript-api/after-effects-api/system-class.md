# System 클래스

## 목차

### 속성값퍄

* [machineName](after-effects-api/system-class.md#machinename)
* [osName](after-effects-api/system-class.md#osname)
* [osVersion](after-effects-api/system-class.md#osversion)
* [userName](after-effects-api/system-class.md#username)

### 사용 가능한 함수

* [callSystem](after-effects-api/system-class.md#callsystem)

## 속성값

### machineName <a id="machinename"></a>

**● machineName**: `string`

컴퓨터 이름을 가져옵니다.

### osName <a id="osname"></a>

**● osName**: `string`

현재 운영체제 이름을 가져옵니다.

### osVersion <a id="osversion"></a>

**● osVersion**: `string`

현재 운영체제 버전을 가져옵니다.

### userName <a id="username"></a>

**● userName**: `string`

현재 사용자 계정 이름을 가져옵니다.

## 사용 가능한 함수

### callSystem <a id="callsystem"></a>

▸ **callSystem**\(cmdLineToExecute: `string`\): `string`

시스템 명령을 실행합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| cmdLineToExecute | `string` | 명령 문자열입니다. |

**반환:** `string`

