# ImportOptions 클래스

## 구조

[FootageSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)

**↳ ImportOptions**

## 목차

### 생성자

* [constructor](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#constructor)

### 속성값

* [alphaMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#alphamode)
* [conformFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#conformframerate)
* [displayFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#displayframerate)
* [fieldSeparationType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#fieldseparationtype)
* [file](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#file)
* [forceAlphabetical](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#forcealphabetical)
* [hasAlpha](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#hasalpha)
* [highQualityFieldSeparation](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#highqualityfieldseparation)
* [importAs](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#importas)
* [invertAlpha](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#invertalpha)
* [isStill](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#isstill)
* [loop](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#loop)
* [nativeFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#nativeframerate)
* [premulColor](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#premulcolor)
* [removePulldown](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#removepulldown)
* [sequence](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#sequence)

### 사용 가능한 함수

* [canImportAs](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#canimportas)
* [guessAlphaMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#guessalphamode)
* [guessPulldown](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md#guesspulldown)

## 생성자

### constructor <a id="constructor"></a>

⊕ **new ImportOptions**\(file: `File`\): [`ImportOptions`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md)

**매개변수:**

| Name | Type |
| :--- | :--- |
| file | `File` |

**반환:** [`ImportOptions`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md)

## Properties

### alphaMode <a id="alphamode"></a>

**● alphaMode**: _\[_`AlphaMode`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.alphamode.md\)\_

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`alphaMode`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#alphamode)

푸티지의 알파 모드를 설정하거나 가져옵니다.

### conformFrameRate <a id="conformframerate"></a>

**● conformFrameRate**: `number`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`conformFrameRate`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#conformframerate)

### displayFrameRate <a id="displayframerate"></a>

**● displayFrameRate**: `number`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`displayFrameRate`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#displayframerate)

### fieldSeparationType <a id="fieldseparationtype"></a>

**● fieldSeparationType**: _\[_`FieldSeparationType`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.fieldseparationtype.md\)\_

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`fieldSeparationType`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#fieldseparationtype)

### file <a id="file"></a>

**● file**: `File`

가져올 파일을 지정하거나 가져옵니다.

### forceAlphabetical <a id="forcealphabetical"></a>

**● forceAlphabetical**: `boolean`

알파벳 순 파일 이름을 무시할지 여루를 설정하거나 가져옵니다.

### hasAlpha <a id="hasalpha"></a>

**● hasAlpha**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`hasAlpha`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#hasalpha)

해당 푸티지의 알파 채널 여부를 가져옵니다.

### highQualityFieldSeparation <a id="highqualityfieldseparation"></a>

**● highQualityFieldSeparation**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`highQualityFieldSeparation`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#highqualityfieldseparation)

### importAs <a id="importas"></a>

**● importAs**: _\[_`ImportAsType`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.importastype.md\)\_

해당 푸티지 종류입니다.

### invertAlpha <a id="invertalpha"></a>

**● invertAlpha**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`invertAlpha`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#invertalpha)

알파값 반전 여부를 설정하거나 가져옵니다.

### isStill <a id="isstill"></a>

**● isStill**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`isStill`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#isstill)

해당 푸티지를 프레임단위로 할지 설정하거나 가져옵니다. \(프레임단위 / 시간단위\)

### loop <a id="loop"></a>

**● loop**: `number`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`loop`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#loop)

푸티지의 반복 횟수를 설정합니다. 기본값은 1 입니다. isStill 값이 true 라면 오류가 반환됩니다.

### nativeFrameRate <a id="nativeframerate"></a>

**● nativeFrameRate**: `number`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`nativeFrameRate`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#nativeframerate)

해당 푸티지의 프레임 레이트를 설정하거나 가져옵니다.

### premulColor <a id="premulcolor"></a>

**● premulColor**: `number`_\[\]_

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`premulColor`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#premulcolor)

### removePulldown <a id="removepulldown"></a>

**● removePulldown**: [`PulldownPhase`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/classes/pulldownphase-class.md)

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`removePulldown`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#removepulldown)

### sequence <a id="sequence"></a>

**● sequence**: `boolean`

## Methods

### canImportAs <a id="canimportas"></a>

▸ **canImportAs**\(type: _\[_`ImportAsType`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.importastype.md\)\_\): `boolean`

해당 푸티지를 가져올 수 있는지 여부를 확인합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| type | [`ImportAsType`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.importastype.md) | 가져올 푸티지의 형식입니다. |

**반환:** `boolean`

### guessAlphaMode <a id="guessalphamode"></a>

▸ **guessAlphaMode**\(\): `void`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`guessAlphaMode`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#guessalphamode)

해당 푸티지에서 사용 가능한 최상의 설정값을 사용합니다.

### guessPulldown <a id="guesspulldown"></a>

▸ **guessPulldown**\(method: _\[_`PulldownMethod`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.pulldownmethod.md\)_\):_ `void`\_

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`guessPulldown`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#guesspulldown)

푸티지에 맞는 최상의 추정치를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| method | [`PulldownMethod`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.pulldownmethod.md) | 설정할 설정값입니다. |

