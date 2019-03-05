# FileSource 클래스

## 구조

[FootageSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)

**↳ FileSource**

## 목차

### 속성값

* [alphaMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#alphamode)
* [conformFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#conformframerate)
* [displayFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#displayframerate)
* [fieldSeparationType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#fieldseparationtype)
* [file](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#file)
* [hasAlpha](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#hasalpha)
* [highQualityFieldSeparation](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#highqualityfieldseparation)
* [invertAlpha](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#invertalpha)
* [isStill](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#isstill)
* [loop](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#loop)
* [missingFootagePath](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#missingfootagepath)
* [nativeFrameRate](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#nativeframerate)
* [premulColor](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#premulcolor)
* [removePulldown](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#removepulldown)

### 사용 가능한 함수

* [guessAlphaMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#guessalphamode)
* [guessPulldown](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#guesspulldown)
* [reload](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/filesource-class.md#reload)

## 속성값

### alphaMode <a id="alphamode"></a>

**● alphaMode**: [`AlphaMode`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.alphamode.md)

_부모로부터 상속됨 : \[_`FootageSource`_\]\(/javascript-api/api/footage/footagesource-class.md\).\[_`alphaMode`_\]\(/javascript-api/api/footage/footagesource-class.md\#alphamode\)_

푸티지의 알파 모드를 설정하거나 가져옵니다.

### conformFrameRate <a id="conformframerate"></a>

**● conformFrameRate**: `number`

_부모로부터 상속됨 : \[_`FootageSource`_\]\(/javascript-api/api/footage/footagesource-class.md\).\[_`conformFrameRate`_\]\(/javascript-api/api/footage/footagesource-class.md\#conformframerate\)_

### displayFrameRate <a id="displayframerate"></a>

**● displayFrameRate**: `number`

_부모로부터 상속됨 : \[_`FootageSource`_\]\(/javascript-api/api/footage/footagesource-class.md\).\[_`displayFrameRate`_\]\(/javascript-api/api/footage/footagesource-class.md\#displayframerate\)_

### fieldSeparationType <a id="fieldseparationtype"></a>

**● fieldSeparationType**: _\[_`FieldSeparationType`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.fieldseparationtype.md\)\_

_부모로부터 상속됨 : \[_`FootageSource`_\]\(/javascript-api/api/footage/footagesource-class.md\).\[_`fieldSeparationType`_\]\(/javascript-api/api/footage/footagesource-class.md\#fieldseparationtype\)_

### file <a id="file"></a>

**● file**: `File`

해당 푸티지를 파일 객체로 가져옵니다.

### hasAlpha <a id="hasalpha"></a>

**● hasAlpha**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`hasAlpha`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#hasalpha)

해당 푸티지의 알파 채널 여부를 가져옵니다.

### highQualityFieldSeparation <a id="highqualityfieldseparation"></a>

**● highQualityFieldSeparation**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`highQualityFieldSeparation`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#highqualityfieldseparation)

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

### missingFootagePath <a id="missingfootagepath"></a>

**● missingFootagePath**: `string`

푸티지 파일을 찾을 수 없을 때 경로와 이름을 반환합니다.

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

## 사용 가능한 함수

### guessAlphaMode <a id="guessalphamode"></a>

▸ **guessAlphaMode**\(\): `void`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`guessAlphaMode`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#guessalphamode)

해당 푸티지에서 사용 가능한 최상의 설정값을 사용합니다.

**반환:** `void`

### guessPulldown <a id="guesspulldown"></a>

▸ **guessPulldown**\(method: _\[_`PulldownMethod`_\]\(/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.pulldownmethod.md\)\_\): `void`

_부모로부터 상속됨 :_ [`FootageSource`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md)_._[`guessPulldown`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/footage/footagesource-class.md#guesspulldown)

푸티지에 맞는 최상의 추정치를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| method | [`PulldownMethod`](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.pulldownmethod.md) | 설정할 설정값입니다. |

**반환:** `void`

### reload <a id="reload"></a>

▸ **reload**\(\): `void`

해당 푸티지를 다시 로드합니다.

**반환:** `void`

