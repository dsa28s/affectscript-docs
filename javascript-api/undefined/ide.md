# IDE 설치하기

## 호환성

Affect Script를 사용하기 위해서는 **Affect Script IDE** 를 다운로드 받아 설치해야 합니다.

Affect Script IDE의 호환성은 다음과 같습니다.

* Windows \(7, 8, 10\)
  * 64비트만 됨, _32비트 호환 안됨_
* macOS \(10.10+\)
* 하드디스크에 최소 5GB 이상 필요
* **Adobe After Effects CC 이상 필요**

## 다운로드

[https://affectscript.io](https://affectscript.io) 에서 본인의 PC에 맞게 다운로드를 받습니다.

 Affect Script IDE 설치 위치는 호환성 문제 등으로 인해 변경할 수 없습니다.  


### Affect Script IDE 설치 위치

* Windows

  ```bash
    C:\Program Files\Affect Script IDE
  ```

* macOS

  ```bash
    /Applications/Affect Script IDE
  ```

## 실행하기

**클로즈 베타** 에서는 **플레이그라운드** 만 지원합니다. _이후 베타를 진행하며 다른 기능들도 업데이트 될 예정입니다._

실행하면, 아래의 로드 화면이 표시됩니다.

![Affect Script IDE Splash Screen](https://storage.googleapis.com/documentation-bucket/page-0-1.png)

해당 로드 화면은, Affect Script IDE가 필수로 로드해야할 구성요소를 로드하는 화면입니다. 오류가 날 경우, 실행이 되지 않으며, 상세한 오류 메시지가 표시됩니다.

### 메인 화면

Affect Script 의 메인 초기화면입니다. _현재는 플레이그라운드 기능만 지원되며, 위 프로젝트 생성, 파일 변환 기능은 곧 업데이트 될 예정입니다._

![Affect Script IDE Main Screen](https://storage.googleapis.com/documentation-bucket/page-0-2.png)

### 플레이그라운드

Affect Script 플레이그라운드는 Affect Script를 사용하고, 간단한 편집 작업에 사용하기에 적합한 도구입니다. 자동 완성 기능과, 컴파일 도구 등이 포함되어 있습니다.

_미리보기 기능은 곧 추가될 예정입니다._

![Affect Script IDE Playground](https://storage.googleapis.com/documentation-bucket/page-0-3.png)

플레이그라운드는 위와 같은 화면으로 구성되어 있습니다.

* **제목표시줄** 부분에는 _**현재 편집하고 있는 파일 이름**_ 과 _**컴파일 상태**_, _**실행 버튼**_ 이 표시됩니다.
* **실행 버튼** 은 사용자가 작성한 코드를 After Effects 에서 읽어들일 수 있도록 하는 코드로 변환되며, 변환 후에는 After Effects가 자동으로 실행되고 \(이미 실행중인 경우에는 생략\) 렌더링됩니다.
  * 현재는 미리보기 기능이 없기 때문에 After Effects 에서 렌더링 기능만 존재합니다.
* **에디터** 는 코드를 작성할 수 있는 코드 에디터입니다. 에디터에는 _**자동완성**_ 기능과, 문법에 오류가 있을 경우 _**코드 체크 기능**_ 이 포함되어 있습니다.
  * **자동완성** 은 사용자가 코드를 입력하고 있을 때, 해당 단어로 사용할 수 있는 단어의 추천을 해줍니다.
  * **코드 체크 기능** 은 사용자가 문법을 틀렸을 경우, 에디터 상 색깔 있는 밑줄로 표시를 해줍니다.
* **작업표시줄** 은 현재 Affect Script IDE 에서 상태값을 나타냅니다.
  * 현재 렌더링 상태, 로드 된 상태 등이 표시됩니다.

### 열기

`*.affect` 형식의 파일을 열 수 있습니다.

### 문서 가이드

Affect Script 사용에 필요한 문서를 엽니다. 문서 페이지는 [https://doc.affectscript.org](https://doc.affectscript.org) 입니다.

_현재 Affect Script IDE는 클로즈 베타로 진행중입니다. 따라서 유효한 라이센스 코드가 필요로 하며, 오픈 베타로 진행될 경우 라이센스의 코드는 따로 필요 없고, 계정 생성 방식을 차용할 예정입니다._

