# After Effects Javascript API

## 목차

### 코드를 작성하기 위한 글로벌 변수

After Effects에서 사용하는 최상위 변수입니다. 해당 변수를 통해 After Effects 스크립트를 만들 수 있습니다.

- [app](README.md#app)

  - app

    **● app**: _[Application](/javascript-api/api/controls/application-class.md)_

    Affect Script를 가리키는 변수입니다.

- [system](/javascript-api/api/controls/system-class.md)

<a id="app"></a>

### After Effects 컨트롤 API

After Effects를 코드로 제어하기 위한 API 입니다. 아래 항목에 포함된 코드를 작성하면, 스크립트로 After Effects를 제어 (예를 들어 5초에 한번씩 저장, 새 프로젝트 생성 등)를 할 수 있습니다.

- [AfterEffectsItem](/javascript-api/api/item/aftereffectsitem-class.md)
- [Application](/javascript-api/api/controls/application-class.md)
- [Settings](/javascript-api/api/controls/settings-class.md)
- [System](/javascript-api/api/controls/system-class.md)
- [Viewer](/javascript-api/api/controls/viewer-class.md)

### 프로젝트 API

After Effects 프로젝트에 대한 정보를 불러오고, 관리할 수 있는 API 입니다.

- [Project](/javascript-api/api/project/project-class.md)

### 레이어 API

After Effects에서 사용하는 레이어에 대한 정보를 불러오고, 관리할 수 있는 API 입니다. 아래의 모든 클래스는 `Layer` 클래스를 상속해 있습니다.

- [Layer](/javascript-api/api/layer/layer-class.md)
- [AVLayer](/javascript-api/api/layer/avlayer-class.md)
- [CameraLayer](/javascript-api/api/layer/cameralayer-class.md)
- [LightLayer](/javascript-api/api/layer/lightlayer-class.md)
- [ShapeLayer](/javascript-api/api/layer/shapelayer-class.md)
- [TextLayer](/javascript-api/api/layer/textlayer-class.md)

### 아이템 API

After Effects에서 프로젝트 패널에서 볼 수 있는 각각의 아이템 정보를 불러오고, 관리할 수 있는 API 입니다. 아래의 모든 클래스는 `Item` 클래스를 상속해 있습니다.

- [Item](/javascript-api/api/item/item-class.md)
- [AVItem](/javascript-api/api/item/avitem-class.md)
- [CompItem](/javascript-api/api/item/compitem-class.md)
- [FolderItem](/javascript-api/api/item/folderitem-class.md)
- [FootageItem](/javascript-api/api/item/footageitem-class.md)

### 콜렉션 API

After Effects에서 사용하는 일부 객체의 집합체입니다. 아래의 모든 클래스는 `Collection` 클래스를 상속해 있습니다.

- [Collection](/javascript-api/api/collection/collection-class.md)
- [ItemCollection](/javascript-api/api/collection/itemcollection-class.md)
  > After Effects에서 사용 가능한 모든 Footage (폴더, 파일, 영상, 이미지 등)의 집합 클래스
- [LayerCollection](/javascript-api/api/collection/layercollection-class.md)
  > After Effects에서 사용 가능한 모든 레이어 (도형, 단색, 컴포지션, 카메라 등)의 집합 클래스
- [OMCollection](/javascript-api/api/collection/omcollection-class.md)
  > After Effects의 Render Queue에 있는 출력 모듈들의 집합 클래스
- [RQItemCollection](/javascript-api/api/collection/rqitemcollection-class.md)
  > After Effects의 Render Queue 집합 클래스
- [RenderQueueItem](/javascript-api/api/collection/renderqueueitem-class.md)
  > After Effects의 Render Queue에 있는 하나하나의 아이템 클래스

### 푸티지 API

After Effects에서 사용하는 푸티지의 원본파일의 정보를 담고 있는 클래스입니다. 아래의 모든 클래스는 `FootageSource` 클래스를 상속해 있습니다.

- [FootageSource](/javascript-api/api/footage/footagesource-class.md)
- [FileSource](/javascript-api/api/footage/filesource-class.md)
- [PlaceholderSource](javascript-api/api/footage/placeholdersource-class.md)
- [ImportOptions](/javascript-api/api/footage/importoptions-class.md)
- [SolidSource](/javascript-api/api/footage/solidsource-class.md)

### 키프레임 API

키프레임의 정보를 담고, 키프레임을 생성, 추가, 변경 등을 할 수 있는 클래스입니다.

- [KeyframeEase](/javascript-api/api/keyframe/keyframeease-class.md)

### 마커 API

타임라인에 각각의 레이어에 메모 등을 담을 수 있는 마커 클래스입니다.

- [MarkerValue](/javascript-api/api/marker/markervalue-class.md)

### 속성값 API

After Effects에서 사용 가능한 모든 아이템의 속성값을 불러오고, 관리할 수 있는 API 입니다.

- [PropertyBase](/javascript-api/api/property/propertybase-class.md)
- [PropertyGroup](/javascript-api/api/property/propertygroup-class.md)
- [Property](/javascript-api/api/property/property-class.md)
- [MaskPropertyGroup](/javascript-api/api/property/maskpropertygroup-class.md)

### 렌더링 API

렌더링 정보를 가져오고, 렌더링 진행 등을 할 수 있는 API 입니다.

- [RenderQueue](/javascript-api/api/render/renderqueue-class.md)

### 기타 그 외 참조 API

- [OutputModule](/javascript-api/api/etc/classes/outputmodule-class.md)
- [Shape](/javascript-api/api/etc/classes/shape-class.md)
- [SwatchData](/javascript-api/api/etc/classes/swatchdata-class.md)
- [TextDocument](/javascript-api/api/etc/classes/textdocument-class.md)
- [AlphaMode](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.alphamode.md)
- [AutoOrientType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.autoorienttype.md)
- [BlendingMode](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.blendingmode.md)
- [CloseOptions](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.closeoptions.md)
- [FeetFramesFilmType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.feetframesfilmtype.md)
- [FieldSeparationType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.fieldseparationtype.md)
- [FootageTimecodeDisplayStartType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.footagetimecodedisplaystarttype.md)
- [FrameBlendingType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.frameblendingtype.md)
- [FramesCountType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.framescounttype.md)
- [ImportAsType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.importastype.md)
- [KeyframeInterpolationType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.keyframeinterpolationtype.md)
- [LayerQuality](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.layerquality.md)
- [LightType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.lighttype.md)
- [LogType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.logtype.md)
- [MaskFeatherFalloff](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.maskfeatherfalloff.md)
- [MaskMode](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.maskmode.md)
- [MaskMotionBlur](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.maskmotionblur.md)
- [ParagraphJustification](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.paragraphjustification.md)
- [PostRenderAction](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.postrenderaction.md)
- [PropertyType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.propertytype.md)
- [PropertyValueType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.propertyvaluetype.md)
- [PulldownMethod](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.pulldownmethod.md)
- [PurgeTarget](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.purgetarget.md)
- [RQItemStatus](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.rqitemstatus.md)
- [SwatchValue](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.swatchvalue.md)
- [TimeDisplayType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.timedisplaytype.md)
- [TrackMatteType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.trackmattetype.md)
- [ViewerType](/javascript-api/api/etc/enums/_affectscript_.affectscriptapi.viewertype.md)
