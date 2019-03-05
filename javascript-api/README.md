# After Effects Javascript API

## 목차

### 코드를 작성하기 위한 글로벌 변수

After Effects에서 사용하는 최상위 변수입니다. 해당 변수를 통해 After Effects 스크립트를 만들 수 있습니다.

* [app](./#app)
  * app

    **● app**: [_Application_](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/After%20Effects%20컨트롤%20API/application-class.md)

    Affect Script를 가리키는 변수입니다.
* [system](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/After%20Effects%20컨트롤%20API/system-class.md)

### After Effects 컨트롤 API <a id="app"></a>

After Effects를 코드로 제어하기 위한 API 입니다. 아래 항목에 포함된 코드를 작성하면, 스크립트로 After Effects를 제어 \(예를 들어 5초에 한번씩 저장, 새 프로젝트 생성 등\)를 할 수 있습니다.

* [AfterEffectsItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/aftereffectsitem-class.md)
* [Application](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/After%20Effects%20컨트롤%20API/application-class.md)
* [Settings](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/After%20Effects%20컨트롤%20API/settings-class.md)
* [System](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/After%20Effects%20컨트롤%20API/system-class.md)
* [Viewer](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/After%20Effects%20컨트롤%20API/viewer-class.md)

### 프로젝트 API

After Effects 프로젝트에 대한 정보를 불러오고, 관리할 수 있는 API 입니다.

* [Project](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/프로젝트%20API/project-class.md)

### 레이어 API

After Effects에서 사용하는 레이어에 대한 정보를 불러오고, 관리할 수 있는 API 입니다. 아래의 모든 클래스는 `Layer` 클래스를 상속해 있습니다.

* [Layer](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/레이어%20API/layer-class.md)
* [AVLayer](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/레이어%20API/avlayer-class.md)
* [CameraLayer](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/레이어%20API/cameralayer-class.md)
* [LightLayer](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/레이어%20API/lightlayer-class.md)
* [ShapeLayer](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/레이어%20API/shapelayer-class.md)
* [TextLayer](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/레이어%20API/textlayer-class.md)

### 아이템 API

After Effects에서 프로젝트 패널에서 볼 수 있는 각각의 아이템 정보를 불러오고, 관리할 수 있는 API 입니다. 아래의 모든 클래스는 `Item` 클래스를 상속해 있습니다.

* [Item](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/item-class.md)
* [AVItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/avitem-class.md)
* [CompItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/compitem-class.md)
* [FolderItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/folderitem-class.md)
* [FootageItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/아이템%20API/footageitem-class.md)

### 콜렉션 API

After Effects에서 사용하는 일부 객체의 집합체입니다. 아래의 모든 클래스는 `Collection` 클래스를 상속해 있습니다.

* [Collection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/collection-class.md)
* [ItemCollection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/itemcollection-class.md)

  > After Effects에서 사용 가능한 모든 Footage \(폴더, 파일, 영상, 이미지 등\)의 집합 클래스

* [LayerCollection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/layercollection-class.md)

  > After Effects에서 사용 가능한 모든 레이어 \(도형, 단색, 컴포지션, 카메라 등\)의 집합 클래스

* [OMCollection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/omcollection-class.md)

  > After Effects의 Render Queue에 있는 출력 모듈들의 집합 클래스

* [RQItemCollection](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/rqitemcollection-class.md)

  > After Effects의 Render Queue 집합 클래스

* [RenderQueueItem](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/콜렉션%20API/renderqueueitem-class.md)

  > After Effects의 Render Queue에 있는 하나하나의 아이템 클래스

### 푸티지 API

After Effects에서 사용하는 푸티지의 원본파일의 정보를 담고 있는 클래스입니다. 아래의 모든 클래스는 `FootageSource` 클래스를 상속해 있습니다.

* [FootageSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/푸티지%20API/footagesource-class.md)
* [FileSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/푸티지%20API/filesource-class.md)
* [PlaceholderSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/푸티지%20API/placeholdersource-class.md)
* [ImportOptions](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/푸티지%20API/importoptions-class.md)
* [SolidSource](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/푸티지%20API/solidsource-class.md)

### 키프레임 API

키프레임의 정보를 담고, 키프레임을 생성, 추가, 변경 등을 할 수 있는 클래스입니다.

* [KeyframeEase](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/키프레임%20API/keyframeease-class.md)

### 마커 API

타임라인에 각각의 레이어에 메모 등을 담을 수 있는 마커 클래스입니다.

* [MarkerValue](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/마커%20API/markervalue-class.md)

### 속성값 API

After Effects에서 사용 가능한 모든 아이템의 속성값을 불러오고, 관리할 수 있는 API 입니다.

* [PropertyBase](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/속성값%20API/propertybase-class.md)
* [PropertyGroup](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/속성값%20API/propertygroup-class.md)
* [Property](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/속성값%20API/property-class.md)
* [MaskPropertyGroup](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/속성값%20API/maskpropertygroup-class.md)

### 렌더링 API

렌더링 정보를 가져오고, 렌더링 진행 등을 할 수 있는 API 입니다.

* [RenderQueue](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/렌더링%20API/renderqueue-class.md)

### 기타 그 외 참조 API

* [OutputModule](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/outputmodule-class.md)
* [Shape](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/shape-class.md)
* [SwatchData](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/swatchdata-class.md)
* [TextDocument](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Class/textdocument-class.md)
* [AlphaMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.alphamode.md)
* [AutoOrientType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.autoorienttype.md)
* [BlendingMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.blendingmode.md)
* [CloseOptions](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.closeoptions.md)
* [FeetFramesFilmType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.feetframesfilmtype.md)
* [FieldSeparationType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.fieldseparationtype.md)
* [FootageTimecodeDisplayStartType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.footagetimecodedisplaystarttype.md)
* [FrameBlendingType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.frameblendingtype.md)
* [FramesCountType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.framescounttype.md)
* [ImportAsType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.importastype.md)
* [KeyframeInterpolationType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.keyframeinterpolationtype.md)
* [LayerQuality](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.layerquality.md)
* [LightType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.lighttype.md)
* [LogType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.logtype.md)
* [MaskFeatherFalloff](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.maskfeatherfalloff.md)
* [MaskMode](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.maskmode.md)
* [MaskMotionBlur](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.maskmotionblur.md)
* [ParagraphJustification](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.paragraphjustification.md)
* [PostRenderAction](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.postrenderaction.md)
* [PropertyType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.propertytype.md)
* [PropertyValueType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.propertyvaluetype.md)
* [PulldownMethod](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.pulldownmethod.md)
* [PurgeTarget](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.purgetarget.md)
* [RQItemStatus](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.rqitemstatus.md)
* [SwatchValue](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.swatchvalue.md)
* [TimeDisplayType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.timedisplaytype.md)
* [TrackMatteType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.trackmattetype.md)
* [ViewerType](https://github.com/AffectScript/affectscript-docs/tree/306de14a6253b187416c39813dcd85cd8989dc14/javascript-api/기타%20그%20외%20참조%20API/Enum/_affectscript_.affectscriptapi.viewertype.md)

