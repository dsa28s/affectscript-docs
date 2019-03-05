# FootageSource 클래스

## 구조

**FootageSource**

↳ [FileSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md)

↳ [PlaceholderSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/placeholdersource-class.md)

↳ [SolidSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/solidsource-class.md)

↳ [ImportOptions](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/importoptions-class.md)

## 목차

### 속성값

* [alphaMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#alphamode)
* [conformFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#conformframerate)
* [displayFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#displayframerate)
* [fieldSeparationType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#fieldseparationtype)
* [hasAlpha](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#hasalpha)
* [highQualityFieldSeparation](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#highqualityfieldseparation)
* [invertAlpha](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#invertalpha)
* [isStill](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#isstill)
* [loop](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#loop)
* [nativeFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#nativeframerate)
* [premulColor](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#premulcolor)
* [removePulldown](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#removepulldown)

### 사용 가능한 함수

* [guessAlphaMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#guessalphamode)
* [guessPulldown](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#guesspulldown)

## 속성값

### alphaMode <a id="alphamode"></a>

**● alphaMode**: _\[_`AlphaMode`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.alphamode.md\)\_

푸티지의 알파 모드를 설정하거나 가져옵니다.

### conformFrameRate <a id="conformframerate"></a>

**● conformFrameRate**: `number`

### displayFrameRate <a id="displayframerate"></a>

**● displayFrameRate**: `number`

### fieldSeparationType <a id="fieldseparationtype"></a>

**● fieldSeparationType**: _\[_`FieldSeparationType`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.fieldseparationtype.md\)\_

### hasAlpha <a id="hasalpha"></a>

**● hasAlpha**: `boolean`

해당 푸티지의 알파 채널 여부를 가져옵니다.

### highQualityFieldSeparation <a id="highqualityfieldseparation"></a>

**● highQualityFieldSeparation**: `boolean`

### invertAlpha <a id="invertalpha"></a>

**● invertAlpha**: `boolean`

알파값 반전 여부를 설정하거나 가져옵니다.

### isStill <a id="isstill"></a>

**● isStill**: `boolean`

해당 푸티지를 프레임단위로 할지 설정하거나 가져옵니다. \(프레임단위 / 시간단위\)

### loop <a id="loop"></a>

**● loop**: `number`

푸티지의 반복 횟수를 설정합니다. 기본값은 1 입니다. isStill 값이 true 라면 오류가 반환됩니다.

### nativeFrameRate <a id="nativeframerate"></a>

**● nativeFrameRate**: `number`

해당 푸티지의 프레임 레이트를 설정하거나 가져옵니다.

### premulColor <a id="premulcolor"></a>

**● premulColor**: `number`_\[\]_

### removePulldown <a id="removepulldown"></a>

**● removePulldown**: [`PulldownPhase`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/classes/pulldownphase-class.md)

## 사용 가능한 함수

### guessAlphaMode <a id="guessalphamode"></a>

▸ **guessAlphaMode**\(\): `void`

해당 푸티지에서 사용 가능한 최상의 설정값을 사용합니다.

### guessPulldown <a id="guesspulldown"></a>

▸ **guessPulldown**\(method: _\[_`PulldownMethod`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.pulldownmethod.md\)_\):_ `void`\_

푸티지에 맞는 최상의 추정치를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| method | [`PulldownMethod`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.pulldownmethod.md) | 설정할 설정값입니다. |

