# Settings 클래스

## 목차

### 사용 가능한 함수

* [getSetting](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/controls/settings-class.md#getsetting)
* [haveSetting](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/controls/settings-class.md#havesetting)
* [saveSetting](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/controls/settings-class.md#savesetting)

## 사용 가능한 함수

### getSetting <a id="getsetting"></a>

▸ **getSetting**\(sectionName: `string`, keyName: `string`\): `string`

**매개변수:**

After Effects의 설정값을 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| sectionName | `string` | 설정 값의 섹션입니다. |
| keyName | `string` | 가져올 설정 키 값입니다. |

**반환:** `string`

### haveSetting <a id="havesetting"></a>

▸ **haveSetting**\(sectionName: `string`, keyName: `string`\): `boolean`

**매개변수:**

After Effects에서 설정값이 있는지 가져옵니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| sectionName | `string` | 설정 값의 섹션입니다. |
| keyName | `string` | 여부를 확인할 설정 키 값입니다. |

**반환:** `boolean`

### saveSetting <a id="savesetting"></a>

▸ **saveSetting**\(sectionName: `string`, keyName: `string`, value: `string`\): `void`

**매개변수:**

설정을 저장합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| sectionName | `string` | 설정 값의 섹션입니다. |
| keyName | `string` | 변경할 설정 키 값입니다. |
| value | `string` | 설정 값입니다. |

