# ImportOptions 클래스

## 구조

[FootageSource](/javascript-api/api/footage/footagesource-class.md)

**↳ ImportOptions**

## 목차

### 생성자

- [constructor](/javascript-api/api/footage/importoptions-class.md#constructor)

### 속성값

- [alphaMode](/javascript-api/api/footage/importoptions-class.md#alphamode)
- [conformFrameRate](/javascript-api/api/footage/importoptions-class.md#conformframerate)
- [displayFrameRate](/javascript-api/api/footage/importoptions-class.md#displayframerate)
- [fieldSeparationType](/javascript-api/api/footage/importoptions-class.md#fieldseparationtype)
- [file](/javascript-api/api/footage/importoptions-class.md#file)
- [forceAlphabetical](/javascript-api/api/footage/importoptions-class.md#forcealphabetical)
- [hasAlpha](/javascript-api/api/footage/importoptions-class.md#hasalpha)
- [highQualityFieldSeparation](/javascript-api/api/footage/importoptions-class.md#highqualityfieldseparation)
- [importAs](/javascript-api/api/footage/importoptions-class.md#importas)
- [invertAlpha](/javascript-api/api/footage/importoptions-class.md#invertalpha)
- [isStill](/javascript-api/api/footage/importoptions-class.md#isstill)
- [loop](/javascript-api/api/footage/importoptions-class.md#loop)
- [nativeFrameRate](/javascript-api/api/footage/importoptions-class.md#nativeframerate)
- [premulColor](/javascript-api/api/footage/importoptions-class.md#premulcolor)
- [removePulldown](/javascript-api/api/footage/importoptions-class.md#removepulldown)
- [sequence](/javascript-api/api/footage/importoptions-class.md#sequence)

### 사용 가능한 함수

- [canImportAs](/javascript-api/api/footage/importoptions-class.md#canimportas)
- [guessAlphaMode](/javascript-api/api/footage/importoptions-class.md#guessalphamode)
- [guessPulldown](/javascript-api/api/footage/importoptions-class.md#guesspulldown)

---

## 생성자

<a id="constructor"></a>

### constructor

⊕ **new ImportOptions**(file: _`File`_): _[`ImportOptions`](/javascript-api/api/footage/importoptions-class.md)_

**매개변수:**

| Name | Type   |
| ---- | ------ |
| file | `File` |

**반환:** [`ImportOptions`](/javascript-api/api/footage/importoptions-class.md)

---

## Properties

<a id="alphamode"></a>

### alphaMode

**● alphaMode**: _[`AlphaMode`](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.alphamode.md)\_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`alphaMode`](/javascript-api/api/footage/footagesource-class.md#alphamode)_

푸티지의 알파 모드를 설정하거나 가져옵니다.

---

<a id="conformframerate"></a>

### conformFrameRate

**● conformFrameRate**: _`number`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`conformFrameRate`](/javascript-api/api/footage/footagesource-class.md#conformframerate)_

---

<a id="displayframerate"></a>

### displayFrameRate

**● displayFrameRate**: _`number`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`displayFrameRate`](/javascript-api/api/footage/footagesource-class.md#displayframerate)_

---

<a id="fieldseparationtype"></a>

### fieldSeparationType

**● fieldSeparationType**: _[`FieldSeparationType`](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.fieldseparationtype.md)\_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`fieldSeparationType`](/javascript-api/api/footage/footagesource-class.md#fieldseparationtype)_

---

<a id="file"></a>

### file

**● file**: _`File`_

가져올 파일을 지정하거나 가져옵니다.

---

<a id="forcealphabetical"></a>

### forceAlphabetical

**● forceAlphabetical**: _`boolean`_

알파벳 순 파일 이름을 무시할지 여루를 설정하거나 가져옵니다.

---

<a id="hasalpha"></a>

### hasAlpha

**● hasAlpha**: _`boolean`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`hasAlpha`](/javascript-api/api/footage/footagesource-class.md#hasalpha)_

해당 푸티지의 알파 채널 여부를 가져옵니다.

---

<a id="highqualityfieldseparation"></a>

### highQualityFieldSeparation

**● highQualityFieldSeparation**: _`boolean`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`highQualityFieldSeparation`](/javascript-api/api/footage/footagesource-class.md#highqualityfieldseparation)_

---

<a id="importas"></a>

### importAs

**● importAs**: _[`ImportAsType`](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.importastype.md)\_

해당 푸티지 종류입니다.

---

<a id="invertalpha"></a>

### invertAlpha

**● invertAlpha**: _`boolean`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`invertAlpha`](/javascript-api/api/footage/footagesource-class.md#invertalpha)_

알파값 반전 여부를 설정하거나 가져옵니다.

---

<a id="isstill"></a>

### isStill

**● isStill**: _`boolean`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`isStill`](/javascript-api/api/footage/footagesource-class.md#isstill)_

해당 푸티지를 프레임단위로 할지 설정하거나 가져옵니다. (프레임단위 / 시간단위)

---

<a id="loop"></a>

### loop

**● loop**: _`number`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`loop`](/javascript-api/api/footage/footagesource-class.md#loop)_

푸티지의 반복 횟수를 설정합니다. 기본값은 1 입니다. isStill 값이 true 라면 오류가 반환됩니다.

---

<a id="nativeframerate"></a>

### nativeFrameRate

**● nativeFrameRate**: _`number`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`nativeFrameRate`](/javascript-api/api/footage/footagesource-class.md#nativeframerate)_

해당 푸티지의 프레임 레이트를 설정하거나 가져옵니다.

---

<a id="premulcolor"></a>

### premulColor

**● premulColor**: _`number`[]_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`premulColor`](/javascript-api/api/footage/footagesource-class.md#premulcolor)_

---

<a id="removepulldown"></a>

### removePulldown

**● removePulldown**: _[`PulldownPhase`](/javascript-api/api/etc/classes/pulldownphase-class.md)_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`removePulldown`](/javascript-api/api/footage/footagesource-class.md#removepulldown)_

---

<a id="sequence"></a>

### sequence

**● sequence**: _`boolean`_

---

## Methods

<a id="canimportas"></a>

### canImportAs

▸ **canImportAs**(type: _[`ImportAsType`](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.importastype.md)\_): _`boolean`_

해당 푸티지를 가져올 수 있는지 여부를 확인합니다.

**매개변수:**

| Name | Type                                                                                       | Description                 |
| ---- | ------------------------------------------------------------------------------------------ | --------------------------- |
| type | [`ImportAsType`](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.importastype.md) | 가져올 푸티지의 형식입니다. |

**반환:** `boolean`

---

<a id="guessalphamode"></a>

### guessAlphaMode

▸ **guessAlphaMode**(): _`void`_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`guessAlphaMode`](/javascript-api/api/footage/footagesource-class.md#guessalphamode)_

해당 푸티지에서 사용 가능한 최상의 설정값을 사용합니다.

---

<a id="guesspulldown"></a>

### guessPulldown

▸ **guessPulldown**(method: _[`PulldownMethod`](/javascript-api/api/etc/enums/\_affectscript_.affectscriptapi.pulldownmethod.md)_): _`void`\_

_부모로부터 상속됨 : [`FootageSource`](/javascript-api/api/footage/footagesource-class.md).[`guessPulldown`](/javascript-api/api/footage/footagesource-class.md#guesspulldown)_

푸티지에 맞는 최상의 추정치를 설정합니다.

**매개변수:**

| Name   | Type                                                                                           | Description          |
| ------ | ---------------------------------------------------------------------------------------------- | -------------------- |
| method | [`PulldownMethod`](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.pulldownmethod.md) | 설정할 설정값입니다. |

---
