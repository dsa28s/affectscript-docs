# After Effects Javascript API

## 목차

### 코드를 작성하기 위한 글로벌 변수

After Effects에서 사용하는 최상위 변수입니다. 해당 변수를 통해 After Effects 스크립트를 만들 수 있습니다.

- [app](README.md#app)

  - app

    **● app**: _[Application](/javascript-api/After%20Effects%20%EC%BB%A8%ED%8A%B8%EB%A1%A4%20API/application-class.md)_

    Affect Script를 가리키는 변수입니다.

- [system](/javascript-api/After%20Effects%20%EC%BB%A8%ED%8A%B8%EB%A1%A4%20API/system-class.md)

<a id="app"></a>

### After Effects 컨트롤 API

After Effects를 코드로 제어하기 위한 API 입니다. 아래 항목에 포함된 코드를 작성하면, 스크립트로 After Effects를 제어 (예를 들어 5초에 한번씩 저장, 새 프로젝트 생성 등)를 할 수 있습니다.

- [AfterEffectsItem](/javascript-api/%EC%95%84%EC%9D%B4%ED%85%9C%20API/aftereffectsitem-class.md)
- [Application](/javascript-api/After%20Effects%20%EC%BB%A8%ED%8A%B8%EB%A1%A4%20API/application-class.md)
- [Settings](/javascript-api/After%20Effects%20%EC%BB%A8%ED%8A%B8%EB%A1%A4%20API/settings-class.md)
- [System](/javascript-api/After%20Effects%20%EC%BB%A8%ED%8A%B8%EB%A1%A4%20API/system-class.md)
- [Viewer](/javascript-api/After%20Effects%20%EC%BB%A8%ED%8A%B8%EB%A1%A4%20API/viewer-class.md)

### 프로젝트 API

After Effects 프로젝트에 대한 정보를 불러오고, 관리할 수 있는 API 입니다.

- [Project](/javascript-api/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20API/project-class.md)

### 레이어 API

After Effects에서 사용하는 레이어에 대한 정보를 불러오고, 관리할 수 있는 API 입니다. 아래의 모든 클래스는 `Layer` 클래스를 상속해 있습니다.

- [Layer](/javascript-api/%EB%A0%88%EC%9D%B4%EC%96%B4%20API/layer-class.md)
- [AVLayer](/javascript-api/%EB%A0%88%EC%9D%B4%EC%96%B4%20API/avlayer-class.md)
- [CameraLayer](/javascript-api/%EB%A0%88%EC%9D%B4%EC%96%B4%20API/cameralayer-class.md)
- [LightLayer](/javascript-api/%EB%A0%88%EC%9D%B4%EC%96%B4%20API/lightlayer-class.md)
- [ShapeLayer](/javascript-api/%EB%A0%88%EC%9D%B4%EC%96%B4%20API/shapelayer-class.md)
- [TextLayer](/javascript-api/%EB%A0%88%EC%9D%B4%EC%96%B4%20API/textlayer-class.md)

### 아이템 API

After Effects에서 프로젝트 패널에서 볼 수 있는 각각의 아이템 정보를 불러오고, 관리할 수 있는 API 입니다. 아래의 모든 클래스는 `Item` 클래스를 상속해 있습니다.

- [Item](/javascript-api/%EC%95%84%EC%9D%B4%ED%85%9C%20API/item-class.md)
- [AVItem](/javascript-api/%EC%95%84%EC%9D%B4%ED%85%9C%20API/avitem-class.md)
- [CompItem](/javascript-api/%EC%95%84%EC%9D%B4%ED%85%9C%20API/compitem-class.md)
- [FolderItem](/javascript-api/%EC%95%84%EC%9D%B4%ED%85%9C%20API/folderitem-class.md)
- [FootageItem](/javascript-api/%EC%95%84%EC%9D%B4%ED%85%9C%20API/footageitem-class.md)

### 콜렉션 API

After Effects에서 사용하는 일부 객체의 집합체입니다. 아래의 모든 클래스는 `Collection` 클래스를 상속해 있습니다.

- [Collection](/javascript-api/%EC%BD%9C%EB%A0%89%EC%85%98%20API/collection-class.md)
- [ItemCollection](/javascript-api/%EC%BD%9C%EB%A0%89%EC%85%98%20API/itemcollection-class.md)
  > After Effects에서 사용 가능한 모든 Footage (폴더, 파일, 영상, 이미지 등)의 집합 클래스
- [LayerCollection](/javascript-api/%EC%BD%9C%EB%A0%89%EC%85%98%20API/layercollection-class.md)
  > After Effects에서 사용 가능한 모든 레이어 (도형, 단색, 컴포지션, 카메라 등)의 집합 클래스
- [OMCollection](/javascript-api/%EC%BD%9C%EB%A0%89%EC%85%98%20API/omcollection-class.md)
  > After Effects의 Render Queue에 있는 출력 모듈들의 집합 클래스
- [RQItemCollection](/javascript-api/%EC%BD%9C%EB%A0%89%EC%85%98%20API/rqitemcollection-class.md)
  > After Effects의 Render Queue 집합 클래스
- [RenderQueueItem](/javascript-api/%EC%BD%9C%EB%A0%89%EC%85%98%20API/renderqueueitem-class.md)
  > After Effects의 Render Queue에 있는 하나하나의 아이템 클래스

### 푸티지 API

After Effects에서 사용하는 푸티지의 원본파일의 정보를 담고 있는 클래스입니다. 아래의 모든 클래스는 `FootageSource` 클래스를 상속해 있습니다.

- [FootageSource](/javascript-api/%ED%91%B8%ED%8B%B0%EC%A7%80%20API/footagesource-class.md)
- [FileSource](/javascript-api/%ED%91%B8%ED%8B%B0%EC%A7%80%20API/filesource-class.md)
- [PlaceholderSource](/javascript-api/%ED%91%B8%ED%8B%B0%EC%A7%80%20API/placeholdersource-class.md)
- [ImportOptions](/javascript-api/%ED%91%B8%ED%8B%B0%EC%A7%80%20API/importoptions-class.md)
- [SolidSource](/javascript-api/%ED%91%B8%ED%8B%B0%EC%A7%80%20API/solidsource-class.md)

### 키프레임 API

키프레임의 정보를 담고, 키프레임을 생성, 추가, 변경 등을 할 수 있는 클래스입니다.

- [KeyframeEase](/javascript-api/%ED%82%A4%ED%94%84%EB%A0%88%EC%9E%84%20API/keyframeease-class.md)

### 마커 API

타임라인에 각각의 레이어에 메모 등을 담을 수 있는 마커 클래스입니다.

- [MarkerValue](/javascript-api/%EB%A7%88%EC%BB%A4%20API/markervalue-class.md)

### 속성값 API

After Effects에서 사용 가능한 모든 아이템의 속성값을 불러오고, 관리할 수 있는 API 입니다.

- [PropertyBase](/javascript-api/%EC%86%8D%EC%84%B1%EA%B0%92%20API/propertybase-class.md)
- [PropertyGroup](/javascript-api/%EC%86%8D%EC%84%B1%EA%B0%92%20API/propertygroup-class.md)
- [Property](/javascript-api/%EC%86%8D%EC%84%B1%EA%B0%92%20API/property-class.md)
- [MaskPropertyGroup](/javascript-api/%EC%86%8D%EC%84%B1%EA%B0%92%20API/maskpropertygroup-class.md)

### 렌더링 API

렌더링 정보를 가져오고, 렌더링 진행 등을 할 수 있는 API 입니다.

- [RenderQueue](/javascript-api/%EB%A0%8C%EB%8D%94%EB%A7%81%20API/renderqueue-class.md)

### 기타 그 외 참조 API

- [OutputModule](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Class/outputmodule-class.md)
- [Shape](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Class/shape-class.md)
- [SwatchData](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Class/swatchdata-class.md)
- [TextDocument](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Class/textdocument-class.md)
- [AlphaMode](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.alphamode.md)
- [AutoOrientType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.autoorienttype.md)
- [BlendingMode](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.blendingmode.md)
- [CloseOptions](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.closeoptions.md)
- [FeetFramesFilmType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.feetframesfilmtype.md)
- [FieldSeparationType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.fieldseparationtype.md)
- [FootageTimecodeDisplayStartType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.footagetimecodedisplaystarttype.md)
- [FrameBlendingType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.frameblendingtype.md)
- [FramesCountType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.framescounttype.md)
- [ImportAsType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.importastype.md)
- [KeyframeInterpolationType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md)
- [LayerQuality](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.layerquality.md)
- [LightType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.lighttype.md)
- [LogType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.logtype.md)
- [MaskFeatherFalloff](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.maskfeatherfalloff.md)
- [MaskMode](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.maskmode.md)
- [MaskMotionBlur](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.maskmotionblur.md)
- [ParagraphJustification](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.paragraphjustification.md)
- [PostRenderAction](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.postrenderaction.md)
- [PropertyType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.propertytype.md)
- [PropertyValueType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.propertyvaluetype.md)
- [PulldownMethod](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.pulldownmethod.md)
- [PurgeTarget](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.purgetarget.md)
- [RQItemStatus](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.rqitemstatus.md)
- [SwatchValue](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.swatchvalue.md)
- [TimeDisplayType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.timedisplaytype.md)
- [TrackMatteType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.trackmattetype.md)
- [ViewerType](/javascript-api/%EA%B8%B0%ED%83%80%20%EA%B7%B8%20%EC%99%B8%20%EC%B0%B8%EC%A1%B0%20API/Enum/_affectscript_.affectscriptapi.viewertype.md)
