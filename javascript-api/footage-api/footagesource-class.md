# FootageSource 클래스

## 구조

**FootageSource**

↳ [FileSource](filesource-class.md)

↳ [PlaceholderSource](placeholdersource-class.md)

↳ [SolidSource](solidsource-class.md)

↳ [ImportOptions](importoptions-class.md)

## 목차

### 속성값

* [alphaMode](footagesource-class.md#alphamode)
* [conformFrameRate](footagesource-class.md#conformframerate)
* [displayFrameRate](footagesource-class.md#displayframerate)
* [fieldSeparationType](footagesource-class.md#fieldseparationtype)
* [hasAlpha](footagesource-class.md#hasalpha)
* [highQualityFieldSeparation](footagesource-class.md#highqualityfieldseparation)
* [invertAlpha](footagesource-class.md#invertalpha)
* [isStill](footagesource-class.md#isstill)
* [loop](footagesource-class.md#loop)
* [nativeFrameRate](footagesource-class.md#nativeframerate)
* [premulColor](footagesource-class.md#premulcolor)
* [removePulldown](footagesource-class.md#removepulldown)

### 사용 가능한 함수

* [guessAlphaMode](footagesource-class.md#guessalphamode)
* [guessPulldown](footagesource-class.md#guesspulldown)

## 속성값

### alphaMode <a id="alphamode"></a>

**● alphaMode**: [`AlphaMode`](../etc/enum/_affectscript_.affectscriptapi.alphamode.md)

푸티지의 알파 모드를 설정하거나 가져옵니다.

### conformFrameRate <a id="conformframerate"></a>

**● conformFrameRate**: `number`

### displayFrameRate <a id="displayframerate"></a>

**● displayFrameRate**: `number`

### fieldSeparationType <a id="fieldseparationtype"></a>

**● fieldSeparationType**: [`FieldSeparationType`](../etc/enum/_affectscript_.affectscriptapi.fieldseparationtype.md)

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

**● removePulldown**: [`PulldownPhase`](../etc/class/pulldownphase-class.md)

## 사용 가능한 함수

### guessAlphaMode <a id="guessalphamode"></a>

▸ **guessAlphaMode**\(\): `void`

해당 푸티지에서 사용 가능한 최상의 설정값을 사용합니다.

### guessPulldown <a id="guesspulldown"></a>

▸ **guessPulldown**\(method: [`PulldownMethod`](../etc/enum/_affectscript_.affectscriptapi.pulldownmethod.md)_\):_ `void`\_

푸티지에 맞는 최상의 추정치를 설정합니다.

**매개변수:**

| Name | Type | Description |
| :--- | :--- | :--- |
| method | [`PulldownMethod`](../etc/enum/_affectscript_.affectscriptapi.pulldownmethod.md) | 설정할 설정값입니다. |

