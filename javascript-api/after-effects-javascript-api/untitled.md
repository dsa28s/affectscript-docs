# After Effects Javascript API

## 목차

### 코드를 작성하기 위한 글로벌 변수

After Effects에서 사용하는 최상위 변수입니다. 해당 변수를 통해 After Effects 스크립트를 만들 수 있습니다.

* [app](./#app)
  * app

    **● app**: [_Application_](after-effects-api/application-class.md)\_\_

    Affect Script를 가리키는 변수입니다.
* [system](after-effects-api/system-class.md)

### After Effects 컨트롤 API <a id="app"></a>

After Effects를 코드로 제어하기 위한 API 입니다. 아래 항목에 포함된 코드를 작성하면, 스크립트로 After Effects를 제어 \(예를 들어 5초에 한번씩 저장, 새 프로젝트 생성 등\)를 할 수 있습니다.

* [AfterEffectsItem](after-effects-api/aftereffectsitem-class.md)
* [Application](after-effects-api/application-class.md)
* [Settings](after-effects-api/settings-class.md)
* [System](after-effects-api/system-class.md)
* [Viewer](after-effects-api/viewer-class.md)

### 프로젝트 API

After Effects 프로젝트에 대한 정보를 불러오고, 관리할 수 있는 API 입니다.

* [Project](project-api/project-class.md)

### 레이어 API

After Effects에서 사용하는 레이어에 대한 정보를 불러오고, 관리할 수 있는 API 입니다. 아래의 모든 클래스는 `Layer` 클래스를 상속해 있습니다.

* [Layer](layer-api/layer-class.md)
* [AVLayer](layer-api/avlayer-class.md)
* [CameraLayer](layer-api/cameralayer-class.md)
* [LightLayer](layer-api/lightlayer-class.md)
* [ShapeLayer](layer-api/shapelayer-class.md)
* [TextLayer](layer-api/textlayer-class.md)

### 아이템 API

After Effects에서 프로젝트 패널에서 볼 수 있는 각각의 아이템 정보를 불러오고, 관리할 수 있는 API 입니다. 아래의 모든 클래스는 `Item` 클래스를 상속해 있습니다.

* [Item](item-api/item-class.md)
* [AVItem](item-api/avitem-class.md)
* [CompItem](item-api/compitem-class.md)
* [FolderItem](item-api/folderitem-class.md)
* [FootageItem](item-api/footageitem-class.md)

### 콜렉션 API

After Effects에서 사용하는 일부 객체의 집합체입니다. 아래의 모든 클래스는 `Collection` 클래스를 상속해 있습니다.

* [Collection](collection-api/collection-class.md)
* [ItemCollection](collection-api/itemcollection-class.md)

  > After Effects에서 사용 가능한 모든 Footage \(폴더, 파일, 영상, 이미지 등\)의 집합 클래스

* [LayerCollection](collection-api/layercollection-class.md)

  > After Effects에서 사용 가능한 모든 레이어 \(도형, 단색, 컴포지션, 카메라 등\)의 집합 클래스

* [OMCollection](collection-api/omcollection-class.md)

  > After Effects의 Render Queue에 있는 출력 모듈들의 집합 클래스

* [RQItemCollection](collection-api/rqitemcollection-class.md)

  > After Effects의 Render Queue 집합 클래스

* [RenderQueueItem](collection-api/renderqueueitem-class.md)

  > After Effects의 Render Queue에 있는 하나하나의 아이템 클래스

### 푸티지 API

After Effects에서 사용하는 푸티지의 원본파일의 정보를 담고 있는 클래스입니다. 아래의 모든 클래스는 `FootageSource` 클래스를 상속해 있습니다.

* [FootageSource](footage-api/footagesource-class.md)
* [FileSource](footage-api/filesource-class.md)
* [PlaceholderSource](footage-api/placeholdersource-class.md)
* [ImportOptions](footage-api/importoptions-class.md)
* [SolidSource](footage-api/solidsource-class.md)

### 키프레임 API

키프레임의 정보를 담고, 키프레임을 생성, 추가, 변경 등을 할 수 있는 클래스입니다.

* [KeyframeEase](keyframe-api/keyframeease-class.md)

### 마커 API

타임라인에 각각의 레이어에 메모 등을 담을 수 있는 마커 클래스입니다.

* [MarkerValue](marker-api/markervalue-class.md)

### 속성값 API

After Effects에서 사용 가능한 모든 아이템의 속성값을 불러오고, 관리할 수 있는 API 입니다.

* [PropertyBase](property-api/propertybase-class.md)
* [PropertyGroup](property-api/propertygroup-class.md)
* [Property](property-api/property-class.md)
* [MaskPropertyGroup](property-api/maskpropertygroup-class.md)

### 렌더링 API

렌더링 정보를 가져오고, 렌더링 진행 등을 할 수 있는 API 입니다.

* [RenderQueue](rendering-api/renderqueue-class.md)

### 기타 그 외 참조 API

* [OutputModule](etc/class/outputmodule-class.md)
* [Shape](etc/class/shape-class.md)
* [SwatchData](etc/class/swatchdata-class.md)
* [TextDocument](etc/class/textdocument-class.md)
* [AlphaMode](etc/enum/_affectscript_.affectscriptapi.alphamode.md)
* [AutoOrientType](etc/enum/_affectscript_.affectscriptapi.autoorienttype.md)
* [BlendingMode](etc/enum/_affectscript_.affectscriptapi.blendingmode.md)
* [CloseOptions](etc/enum/_affectscript_.affectscriptapi.closeoptions.md)
* [FeetFramesFilmType](etc/enum/_affectscript_.affectscriptapi.feetframesfilmtype.md)
* [FieldSeparationType](etc/enum/_affectscript_.affectscriptapi.fieldseparationtype.md)
* [FootageTimecodeDisplayStartType](etc/enum/_affectscript_.affectscriptapi.footagetimecodedisplaystarttype.md)
* [FrameBlendingType](etc/enum/_affectscript_.affectscriptapi.frameblendingtype.md)
* [FramesCountType](etc/enum/_affectscript_.affectscriptapi.framescounttype.md)
* [ImportAsType](etc/enum/_affectscript_.affectscriptapi.importastype.md)
* [KeyframeInterpolationType](etc/enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md)
* [LayerQuality](etc/enum/_affectscript_.affectscriptapi.layerquality.md)
* [LightType](etc/enum/_affectscript_.affectscriptapi.lighttype.md)
* [LogType](etc/enum/_affectscript_.affectscriptapi.logtype.md)
* [MaskFeatherFalloff](etc/enum/_affectscript_.affectscriptapi.maskfeatherfalloff.md)
* [MaskMode](etc/enum/_affectscript_.affectscriptapi.maskmode.md)
* [MaskMotionBlur](etc/enum/_affectscript_.affectscriptapi.maskmotionblur.md)
* [ParagraphJustification](etc/enum/_affectscript_.affectscriptapi.paragraphjustification.md)
* [PostRenderAction](etc/enum/_affectscript_.affectscriptapi.postrenderaction.md)
* [PropertyType](etc/enum/_affectscript_.affectscriptapi.propertytype.md)
* [PropertyValueType](etc/enum/_affectscript_.affectscriptapi.propertyvaluetype.md)
* [PulldownMethod](etc/enum/_affectscript_.affectscriptapi.pulldownmethod.md)
* [PurgeTarget](etc/enum/_affectscript_.affectscriptapi.purgetarget.md)
* [RQItemStatus](etc/enum/_affectscript_.affectscriptapi.rqitemstatus.md)
* [SwatchValue](etc/enum/_affectscript_.affectscriptapi.swatchvalue.md)
* [TimeDisplayType](etc/enum/_affectscript_.affectscriptapi.timedisplaytype.md)
* [TrackMatteType](etc/enum/_affectscript_.affectscriptapi.trackmattetype.md)
* [ViewerType](etc/enum/_affectscript_.affectscriptapi.viewertype.md)
