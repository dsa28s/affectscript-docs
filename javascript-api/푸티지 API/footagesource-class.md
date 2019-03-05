# FootageSource 클래스

## 구조

**FootageSource**

↳ [FileSource](/javascript-api/api/footage/filesource-class.md)

↳ [PlaceholderSource](/javascript-api/api/footage/placeholdersource-class.md)

↳ [SolidSource](/javascript-api/api/footage/solidsource-class.md)

↳ [ImportOptions](/javascript-api/api/footage/importoptions-class.md)

## 목차

### 속성값

- [alphaMode](/javascript-api/api/footage/footagesource-class.md#alphamode)
- [conformFrameRate](/javascript-api/api/footage/footagesource-class.md#conformframerate)
- [displayFrameRate](/javascript-api/api/footage/footagesource-class.md#displayframerate)
- [fieldSeparationType](/javascript-api/api/footage/footagesource-class.md#fieldseparationtype)
- [hasAlpha](/javascript-api/api/footage/footagesource-class.md#hasalpha)
- [highQualityFieldSeparation](/javascript-api/api/footage/footagesource-class.md#highqualityfieldseparation)
- [invertAlpha](/javascript-api/api/footage/footagesource-class.md#invertalpha)
- [isStill](/javascript-api/api/footage/footagesource-class.md#isstill)
- [loop](/javascript-api/api/footage/footagesource-class.md#loop)
- [nativeFrameRate](/javascript-api/api/footage/footagesource-class.md#nativeframerate)
- [premulColor](/javascript-api/api/footage/footagesource-class.md#premulcolor)
- [removePulldown](/javascript-api/api/footage/footagesource-class.md#removepulldown)

### 사용 가능한 함수

- [guessAlphaMode](/javascript-api/api/footage/footagesource-class.md#guessalphamode)
- [guessPulldown](/javascript-api/api/footage/footagesource-class.md#guesspulldown)

---

## 속성값

<a id="alphamode"></a>

### alphaMode

**● alphaMode**: _[`AlphaMode`](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.alphamode.md)\_

푸티지의 알파 모드를 설정하거나 가져옵니다.

---

<a id="conformframerate"></a>

### conformFrameRate

**● conformFrameRate**: _`number`_

---

<a id="displayframerate"></a>

### displayFrameRate

**● displayFrameRate**: _`number`_

---

<a id="fieldseparationtype"></a>

### fieldSeparationType

**● fieldSeparationType**: _[`FieldSeparationType`](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.fieldseparationtype.md)\_

---

<a id="hasalpha"></a>

### hasAlpha

**● hasAlpha**: _`boolean`_

해당 푸티지의 알파 채널 여부를 가져옵니다.

---

<a id="highqualityfieldseparation"></a>

### highQualityFieldSeparation

**● highQualityFieldSeparation**: _`boolean`_

---

<a id="invertalpha"></a>

### invertAlpha

**● invertAlpha**: _`boolean`_

알파값 반전 여부를 설정하거나 가져옵니다.

---

<a id="isstill"></a>

### isStill

**● isStill**: _`boolean`_

해당 푸티지를 프레임단위로 할지 설정하거나 가져옵니다. (프레임단위 / 시간단위)

---

<a id="loop"></a>

### loop

**● loop**: _`number`_

푸티지의 반복 횟수를 설정합니다. 기본값은 1 입니다. isStill 값이 true 라면 오류가 반환됩니다.

---

<a id="nativeframerate"></a>

### nativeFrameRate

**● nativeFrameRate**: _`number`_

해당 푸티지의 프레임 레이트를 설정하거나 가져옵니다.

---

<a id="premulcolor"></a>

### premulColor

**● premulColor**: _`number`[]_

---

<a id="removepulldown"></a>

### removePulldown

**● removePulldown**: _[`PulldownPhase`](/javascript-api/api/etc/classes/pulldownphase-class.md)_

---

## 사용 가능한 함수

<a id="guessalphamode"></a>

### guessAlphaMode

▸ **guessAlphaMode**(): _`void`_

해당 푸티지에서 사용 가능한 최상의 설정값을 사용합니다.

---

<a id="guesspulldown"></a>

### guessPulldown

▸ **guessPulldown**(method: _[`PulldownMethod`](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.pulldownmethod.md)_): _`void`_

푸티지에 맞는 최상의 추정치를 설정합니다.

**매개변수:**

| Name   | Type                                                                                           | Description          |
| ------ | ---------------------------------------------------------------------------------------------- | -------------------- |
| method | [`PulldownMethod`](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.pulldownmethod.md) | 설정할 설정값입니다. |

---
