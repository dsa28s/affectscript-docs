# SolidSource 클래스

## 구조

[FootageSource](footagesource-class.md)

**↳ SolidSource**

## 목차

### 속성값

* [alphaMode](solidsource-class.md#alphamode)
* [color](solidsource-class.md#color)
* [conformFrameRate](solidsource-class.md#conformframerate)
* [displayFrameRate](solidsource-class.md#displayframerate)
* [fieldSeparationType](solidsource-class.md#fieldseparationtype)
* [hasAlpha](solidsource-class.md#hasalpha)
* [highQualityFieldSeparation](solidsource-class.md#highqualityfieldseparation)
* [invertAlpha](solidsource-class.md#invertalpha)
* [isStill](solidsource-class.md#isstill)
* [loop](solidsource-class.md#loop)
* [nativeFrameRate](solidsource-class.md#nativeframerate)
* [premulColor](solidsource-class.md#premulcolor)
* [removePulldown](solidsource-class.md#removepulldown)

### 사용 가능한 함수

* [guessAlphaMode](solidsource-class.md#guessalphamode)
* [guessPulldown](solidsource-class.md#guesspulldown)

## 속성값

### alphaMode  <a id="alphamode"></a>

**● alphaMode**: [`AlphaMode`](../etc/enum/_affectscript_.affectscriptapi.alphamode.md)

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`alphaMode`](footagesource-class.md#alphamode)

푸티지의 알파 모드를 설정하거나 가져옵니다.

### color  <a id="color"></a>

**● color**: `number`_\[\]_

단색 푸티지의 색상값을 설정하거나 가져옵니다.

### conformFrameRate  <a id="conformframerate"></a>

**● conformFrameRate**: `number`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`conformFrameRate`](footagesource-class.md#conformframerate)

### displayFrameRate  <a id="displayframerate"></a>

**● displayFrameRate**: `number`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`displayFrameRate`](footagesource-class.md#displayframerate)

### fieldSeparationType  <a id="fieldseparationtype"></a>

**● fieldSeparationType**: [`FieldSeparationType`](../etc/enum/_affectscript_.affectscriptapi.fieldseparationtype.md)

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`fieldSeparationType`](footagesource-class.md#fieldseparationtype)

### hasAlpha  <a id="hasalpha"></a>

**● hasAlpha**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`hasAlpha`](footagesource-class.md#hasalpha)

해당 푸티지의 알파 채널 여부를 가져옵니다.

### highQualityFieldSeparation  <a id="highqualityfieldseparation"></a>

**● highQualityFieldSeparation**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`highQualityFieldSeparation`](footagesource-class.md#highqualityfieldseparation)

### invertAlpha  <a id="invertalpha"></a>

**● invertAlpha**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`invertAlpha`](footagesource-class.md#invertalpha)

알파값 반전 여부를 설정하거나 가져옵니다.

### isStill  <a id="isstill"></a>

**● isStill**: `boolean`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`isStill`](footagesource-class.md#isstill)

해당 푸티지를 프레임단위로 할지 설정하거나 가져옵니다. \(프레임단위 / 시간단위\)

### loop  <a id="loop"></a>

**● loop**: `number`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`loop`](footagesource-class.md#loop)

푸티지의 반복 횟수를 설정합니다. 기본값은 1 입니다. isStill 값이 true 라면 오류가 반환됩니다.

### nativeFrameRate  <a id="nativeframerate"></a>

**● nativeFrameRate**: `number`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`nativeFrameRate`](footagesource-class.md#nativeframerate)

해당 푸티지의 프레임 레이트를 설정하거나 가져옵니다.

### premulColor  <a id="premulcolor"></a>

**● premulColor**: `number`_\[\]_

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`premulColor`](footagesource-class.md#premulcolor)

### removePulldown  <a id="removepulldown"></a>

**● removePulldown**: [`PulldownPhase`](../etc/class/pulldownphase-class.md)

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`removePulldown`](footagesource-class.md#removepulldown)

## 사용 가능한 함수

### guessAlphaMode  <a id="guessalphamode"></a>

▸ **guessAlphaMode**\(\): `void`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`guessAlphaMode`](footagesource-class.md#guessalphamode)

해당 푸티지에서 사용 가능한 최상의 설정값을 사용합니다.

### guessPulldown  <a id="guesspulldown"></a>

▸ **guessPulldown**\(method: [`PulldownMethod`](../etc/enum/_affectscript_.affectscriptapi.pulldownmethod.md)\): `void`

_부모로부터 상속됨 :_ [`FootageSource`](footagesource-class.md)_._[`guessPulldown`](footagesource-class.md#guesspulldown)

푸티지에 맞는 최상의 추정치를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| method | [`PulldownMethod`](../etc/enum/_affectscript_.affectscriptapi.pulldownmethod.md) | 설정할 설정값입니다. |

