# Application 클래스

## 목차

### 생성자

- [constructor](/javascript-api/api/controls/application-class.md#constructor)

### 속성값

- [activeViewer](/javascript-api/api/controls/application-class.md#activeviewer)
- [buildName](/javascript-api/api/controls/application-class.md#buildname)
- [buildNumber](/javascript-api/api/controls/application-class.md#buildnumber)
- [effects](/javascript-api/api/controls/application-class.md#effects)
- [exitAfterLaunchAndEval](/javascript-api/api/controls/application-class.md#exitafterlaunchandeval)
- [exitCode](/javascript-api/api/controls/application-class.md#exitcode)
- [isRenderEngine](/javascript-api/api/controls/application-class.md#isrenderengine)
- [isWatchFolder](/javascript-api/api/controls/application-class.md#iswatchfolder)
- [isoLanguage](/javascript-api/api/controls/application-class.md#isolanguage)
- [memoryInUse](/javascript-api/api/controls/application-class.md#memoryinuse)
- [onError](/javascript-api/api/controls/application-class.md#onerror)
- [project](/javascript-api/api/controls/application-class.md#project)
- [saveProjectOnCrash](/javascript-api/api/controls/application-class.md#saveprojectoncrash)
- [settings](/javascript-api/api/controls/application-class.md#settings)
- [version](/javascript-api/api/controls/application-class.md#version-1)

### 사용 가능한 함수

- [activate](/javascript-api/api/controls/application-class.md#activate)
- [beginSuppressDialogs](/javascript-api/api/controls/application-class.md#beginsuppressdialogs)
- [beginUndoGroup](/javascript-api/api/controls/application-class.md#beginundogroup)
- [cancelTask](/javascript-api/api/controls/application-class.md#canceltask)
- [endSuppressDialogs](/javascript-api/api/controls/application-class.md#endsuppressdialogs)
- [endUndoGroup](/javascript-api/api/controls/application-class.md#endundogroup)
- [endWatchFolder](/javascript-api/api/controls/application-class.md#endwatchfolder)
- [newProject](/javascript-api/api/controls/application-class.md#newproject)
- [open](/javascript-api/api/controls/application-class.md#open)
- [parseSwatchFile](/javascript-api/api/controls/application-class.md#parseswatchfile)
- [pauseWatchFolder](/javascript-api/api/controls/application-class.md#pausewatchfolder)
- [purge](/javascript-api/api/controls/application-class.md#purge)
- [quit](/javascript-api/api/controls/application-class.md#quit)
- [scheduleTask](/javascript-api/api/controls/application-class.md#scheduletask)
- [setMemoryUsageLimits](/javascript-api/api/controls/application-class.md#setmemoryusagelimits)
- [setSavePreferencesOnQuit](/javascript-api/api/controls/application-class.md#setsavepreferencesonquit)
- [watchFolder](/javascript-api/api/controls/application-class.md#watchfolder)

---

## 생성자

<a id="constructor"></a>

### constructor

⊕ **new Application**(): [_`Application`_](/javascript-api/api/controls/application-class.md)

**반환:** [`Application`](/javascript-api/api/controls/application-class.md)

---

## 속성값

<a id="activeviewer"></a>

### activeViewer

**● activeViewer**: [_`Viewer`_](/javascript-api/api/controls/viewer-class.md)

현재 활성화 된 뷰어 객체를 가져옵니다.

---

<a id="buildname"></a>

### buildName

**● buildName**: _`string`_

After Effects의 빌드 이름을 가져옵니다.

---

<a id="buildnumber"></a>

### buildNumber

**● buildNumber**: _`number`_

After Effects의 빌드번호를 가져옵니다.

---

<a id="effects"></a>

### effects

**● effects**: [_`EffectsType`_](/javascript-api/api/etc/classes/effectstype-class.md)[]

After Effects에서 사용가능한 효과들을 가져옵니다.

---

<a id="exitafterlaunchandeval"></a>

### exitAfterLaunchAndEval

**● exitAfterLaunchAndEval**: _`boolean`_

After Effects 명령줄 도구로 스크립트를 실행한 후, 끝난 후 After Effects를 종료할지 여부를 설정합니다. (Windows에서만 사용가능)

---

<a id="exitcode"></a>

### exitCode

**● exitCode**: _`number`_

외부로부터 실행된 스크립트가 종료되었을 경우, 종료코드를 설정하거나 반환합니다.

---

<a id="isrenderengine"></a>

### isRenderEngine

**● isRenderEngine**: _`boolean`_

After Effects가 렌더링 엔진용으로 켜졌는지 여부를 가져옵니다.

---

<a id="iswatchfolder"></a>

### isWatchFolder

**● isWatchFolder**: _`boolean`_

감시 폴더 대화상자 표시 여부를 확인하고 현재 렌더링 중인 항목의 폴더를 감시하는지 여부를 확인합니다.

---

<a id="isolanguage"></a>

### isoLanguage

**● isoLanguage**: _`String`_

현재 설치된 After Effects 언어를 가져옵니다.

---

<a id="memoryinuse"></a>

### memoryInUse

**● memoryInUse**: _`number`_

After Effects가 차지하는 메모리 용량을 가져옵니다. (바이트\_byte)

---

<a id="onerror"></a>

### onError

**● onError**: _`any`_

오류가 났을 경우 이벤트 처리기입니다.

---

<a id="project"></a>

### project

**● project**: [_`Project`_](/javascript-api/api/project/project-class.md)

현재 열려있는 프로젝트 객체를 반환합니다.

---

<a id="saveprojectoncrash"></a>

### saveProjectOnCrash

**● saveProjectOnCrash**: _`boolean`_

After Effects가 비정상적으로 종료되었을 때 현재 열려있는 프로젝트를 저장할지 설정합니다.

---

<a id="settings"></a>

### settings

**● settings**: [_`Settings`_](/javascript-api/api/controls/settings-class.md)

현재 로드된 환경설정 값을 객체로 가져옵니다.

---

<a id="version-1"></a>

### version

**● version**: _`string`_

현재 설치된 After Effects 버전을 가져옵니다.

---

## 사용 가능한 함수

<a id="activate"></a>

### activate

▸ **activate**(): _`void`_

After Effects 창에 포커스를 맞춥니다.

---

<a id="beginsuppressdialogs"></a>

### beginSuppressDialogs

▸ **beginSuppressDialogs**(): _`void`_

작성한 스크립트에 오류가 나도 경고창이 나오지 않도록 설정합니다. 다시 활성화하려면 endSuppressDialogs() 를 실행하세요.

---

<a id="beginundogroup"></a>

### beginUndoGroup

▸ **beginUndoGroup**(undoString: _`string`_): _`void`_

해당 함수를 실행한 시점부터 endUndoGroup() 함수가 실행될때까지의 모든 작업을 하나의 히스토리로 남깁니다.

**매개변수:**

| Name       | Type     | Description                 |
| ---------- | -------- | --------------------------- |
| undoString | `string` | 설정할 히스토리 이름입니다. |

---

<a id="canceltask"></a>

### cancelTask

▸ **cancelTask**(taskID: _`number`_): _`void`_

대기중인 적업이나 예약된 작업을 취소합니다.

**매개변수:**

| Name   | Type     | Description                 |
| ------ | -------- | --------------------------- |
| taskID | `number` | 취소할 작업 고유번호입니다. |

---

<a id="endsuppressdialogs"></a>

### endSuppressDialogs

▸ **endSuppressDialogs**(alert: _`boolean`_): _`void`_

beginSuppressDialogs() 함수로 실행된 '작성한 스크립트에 오류가 나도 경고창이 나오지 않도록 설정'을 해제합니다.

**매개변수:**

| Name  | Type      | Description                                                                         |
| ----- | --------- | ----------------------------------------------------------------------------------- |
| alert | `boolean` | 기본값은 true이며, true로 지정할 경우 스크립트에 오류가 나면 경고창을 활성화합니다. |

---

<a id="endundogroup"></a>

### endUndoGroup

▸ **endUndoGroup**(): _`void`_

beginUndoGroup() 함수로부터 실행된 '실행한 시점부터 endUndoGroup() 함수가 실행될때까지의 모든 작업을 하나의 히스토리로 남김'을 해제합니다.

---

<a id="endwatchfolder"></a>

### endWatchFolder

▸ **endWatchFolder**(): _`void`_

폴더 감시 모드를 끝냅니다.

---

<a id="newproject"></a>

### newProjectß

▸ **newProject**(): [_`Project`_](/javascript-api/api/project/project-class.md)

새로운 프로젝트를 생성합니다. (현재 프로젝트를 닫는 메소드 close()를 먼저 사용하세요)

**반환:** [`Project`](/javascript-api/api/project/project-class.md)

---

<a id="open"></a>

### open

▸ **open**(file?: _`File`_): [_`Project`_](/javascript-api/api/project/project-class.md)

프로젝트 파일을 엽니다.

**매개변수:**

| Name            | Type   | Description                                                                                                                   |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `Optional` file | `File` | 해당 변수에 아무것도 넣지 않을경우 프로젝트 파일 선택 화면이 나오고, 변수에 프로젝트 위치를 넣을 경우 해당 프로젝트를 엽니다. |

**반환:** [`Project`](/javascript-api/api/project/project-class.md)

---

<a id="parseswatchfile"></a>

### parseSwatchFile

▸ **parseSwatchFile**(file: _`File`_): [_`SwatchData`_](/javascript-api/api/etc/classes/swatchdata-class.md)

Adobe Swatch Exchange (\*.ase) 파일을 엽니다.

**매개변수:**

| Name | Type   | Description            |
| ---- | ------ | ---------------------- |
| file | `File` | ase 파일의 경로입니다. |

**반환:** [`SwatchData`](/javascript-api/api/etc/classes/swatchdata-class.md)

---

<a id="pausewatchfolder"></a>

### pauseWatchFolder

▸ **pauseWatchFolder**(pause: _`boolean`_): _`void`_

폴더 감시를 일시중지합니다.

**매개변수:**

| Name  | Type      | Description                 |
| ----- | --------- | --------------------------- |
| pause | `boolean` | true일 경우 일시중지합니다. |

---

<a id="purge"></a>

### purge

▸ **purge**(target: [_`PurgeTarget`_](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.purgetarget.md)): _`void`_

캐시 파일을 지웁니다.

**매개변수:**

| Name   | Type                                                                                     | Description               |
| ------ | ---------------------------------------------------------------------------------------- | ------------------------- |
| target | [`PurgeTarget`](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.purgetarget.md) | 지울 캐시파일 종류입니다. |

---

<a id="quit"></a>

### quit

▸ **quit**(): _`void`_

After Effects를 종료합니다.

---

<a id="scheduletask"></a>

### scheduleTask

▸ **scheduleTask**(stringToExecute: _`string`_, delay: _`number`_, repeat: _`boolean`_): _`number`_

실행할 코드를 특정 지연 후에 실행합니다.

**매개변수:**

| Name            | Type      | Description                 |
| --------------- | --------- | --------------------------- |
| stringToExecute | `string`  | 실행할 코드입니다.          |
| delay           | `number`  | 지연될 시간입니다. (밀리초) |
| repeat          | `boolean` | 반복 횟수를 지정합니다.     |

**반환:** `number`
해당 작업의 고유번호를 반환합니다.

---

<a id="setmemoryusagelimits"></a>

### setMemoryUsageLimits

▸ **setMemoryUsageLimits**(imageCachePercentage: _`number`_, maximumMemoryPercentage: _`number`_): _`void`_

After Effects가 사용할 메모리 용량을 제한합니다.

**매개변수:**

| Name                    | Type     | Description                                         |
| ----------------------- | -------- | --------------------------------------------------- |
| imageCachePercentage    | `number` | 이미지 캐시 사용률을 백분율로 입력합니다. (% 제외)) |
| maximumMemoryPercentage | `number` | 메모리 사용률을 백분율로 입력합니다. (% 제외))      |

---

<a id="setsavepreferencesonquit"></a>

### setSavePreferencesOnQuit

▸ **setSavePreferencesOnQuit**(doSave: _`boolean`_): _`void`_

After Effects가 종료될 때에 환경설정값을 저장할지 여부를 설정합니다.

**매개변수:**

| Name   | Type      | Description                            |
| ------ | --------- | -------------------------------------- |
| doSave | `boolean` | true 일 경우 환경설정 값을 저장합니다. |

---

<a id="watchfolder"></a>

### watchFolder

▸ **watchFolder**(folderObjectToWatch: `Folder`): _`void`_

폴더 감시를 시작합니다.

**매개변수:**

| Name                | Type     | Description               |
| ------------------- | -------- | ------------------------- |
| folderObjectToWatch | `Folder` | 감시할 대상의 폴더입니다. |

---
