export declare namespace AffectScriptAPI {
  /* AFFECT SCRIPT EXTENSION INTERFACE */

  /**
   * 위치를 바꾸기 위한 애니메이션 속성값입니다.
   */
  interface ISmoothPositionProperty {
    /**
     * 애니메이션이 시작할 시간입니다.
     */
    startTime: number;

    /**
     * 애니메이션의 마칠 시간입니다.
     */
    endTime: number;

    /**
     * 애니메이션의 시작점 (X축) 값입니다.
     */
    startX: number;

    /**
     * 애니메이션의 시작점 (Y축) 값입니다.
     */
    startY: number;

    /**
     * 애니메이션의 시작점 (Z축) 값입니다.
     */
    startZ?: number;

    /**
     * 애니메이션의 마침점 (X축) 값입니다.
     */
    endX: number;

    /**
     * 애니메이션의 시작점 (Y축) 값입니다.
     */
    endY: number;

    /**
     * 애니메이션의 시작점 (Z축) 값입니다.
     */
    endZ?: number;
  }

  type BooleanNumber = 0 | 1;
  type BitsPerChannelNumber = 8 | 16 | 32;
  type EffectsPropertyString = 'Effects';
  type Color = [number, number, number];
  type XYZ = [number, number, number];
  type TopLeftWidthHeight = [number, number, number, number];

  class EffectsType {
    displayName: String;
    category: String;
    matchName: String;
  }

  class SwatchData {
    majorVersion: String;
    minorVersion: String;
    values: SwatchValue;
  }

  enum SwatchValue {
    type,
    r,
    g,
    b,
    c,
    m,
    y,
    k,
    L,
    a,
  }

  class Folder {
    constructor(folderName: string);
  }

  enum PurgeTarget {
    ALL_CACHES,
    UNDO_CACHES,
    SNAPSHOT_CACHES,
    IMAGE_CACHES,
  }

  enum LogType {
    ERRORS_ONLY,
    ERRORS_AND_SETTINGS,
    ERRORS_AND_PER_FRAME_AUTO,
  }

  enum RQItemStatus {
    QUEUED,
    UNQUEUED,
    WILLCONTINUE,
    NEEDS_OUTPUT,
    RENDERING,
    USER_STOPPED,
    ERR_STOPPED,
    DONE,
  }

  enum AlphaMode {
    IGNORE,
    STRAIGHT,
    PREMULTIPLIED,
  }

  enum FieldSeparationType {
    OFF,
    UPPER_FIELD_FIRST,
    LOWER_FIELD_FIRST,
  }

  enum PulldownMethod {
    PULLDOWN_3_2,
    ADVANCE_24P,
  }

  class PulldownPhase {}

  namespace PulldownPhase {
    export enum RemovePulldown {
      OFF,
      WSSWW,
      SSWWW,
      SWWWS,
      WWWSS,
      WWSSW,
      WSSWW_24P_ADVANCE,
      SSWWW_24P_ADVANCE,
      SWWWS_24P_ADVANCE,
      WWWSS_24P_ADVANCE,
      WWSSW_24P_ADVANCE,
    }
  }

  enum ImportAsType {
    COMP,
    FOOTAGE,
    COMP_CROPPED_LAYERS,
    PROJECT,
  }

  enum AutoOrientType {
    ALONG_PATH,
    CAMERA_OR_POINT_OF_INTEREST,
    CHARACTERS_TOWARD_CAMERA,
    NO_AUTO_ORIENT,
  }

  enum BlendingMode {
    ADD,
    ALPHA_ADD,
    CLASSIC_COLOR_BURN,
    CLASSIC_COLOR_DODGE,
    CLASSIC_DIFFERENCE,
    COLOR,
    COLOR_BURN,
    COLOR_DODGE,
    DANCING_DISSOLVE,
    DARKEN,
    DARKER_COLOR,
    DIFFERENCE,
    DISSOLVE,
    EXCLUSION,
    HARD_LIGHT,
    HUE,
    LIGHTEN,
    LIGHTEN_COLOR,
    LINEAR_BURN,
    LINEAR_DODGE,
    LINEAR_LIGHT,
    LUMINENTSCENT_PREMUL,
    LUMINOSITY,
    MULTIPLY,
    NORMAL,
    OVERLAY,
    PIN_LIGHT,
    SATURATION,
    SCREEN,
    SILHOUETE_ALPHA,
    SILHOUETE_LUMA,
    SOFT_LIGHT,
    STENCIL_ALPHA,
    STENCIL_LUMA,
    VIVID_LIGHT,
  }

  enum FrameBlendingType {
    FRAME_MIX,
    NO_FRAME_BLEND,
    PIXEL_MOTION,
  }

  enum LayerQuality {
    BEST,
    DRAFT,
    WIREFRAME,
  }

  enum TrackMatteType {
    ALPHA,
    ALPHA_INVERTED,
    LUMA,
    LUMA_INVERTED,
  }

  enum LightType {
    PARALLEL,
    SPOT,
    POINT,
    AMBIENT,
  }

  enum PostRenderAction {
    NONE,
    IMPORT,
    IMPORT_AND_REPLACE_USAGE,
    SET_PROXY,
  }

  enum CloseOptions {
    DO_NOT_SAVE_CHANGES,
    PROMPT_TO_SAVE_CHANGES,
    SAVE_CHANGES,
  }

  enum FeetFramesFilmType {
    MM16,
    MM35,
  }

  enum FootageTimecodeDisplayStartType {
    FTCS_START_0,
    FTCS_USE_SOURCE_MEDIA,
  }

  enum FramesCountType {
    FC_START_1,
    FC_START_0,
    FC_TIMECODE_CONVERSION,
  }

  enum TimeDisplayType {
    FRAMES,
    TIMECODE,
  }

  enum PropertyType {
    PROPERTY,
    INDEXED_GROUP,
    NAMED_GROUPA,
  }

  enum KeyframeInterpolationType {
    LINEAR,
    BEZIER,
    HOLD,
  }

  enum PropertyValueType {
    NO_VALUE,
    ThreeD_SPATIAL,
    ThreeD,
    TwoD,
    OneD,
    COLOR,
    CUSTOM_VALUE,
    MARKER,
    LAYER_INDEX,
    MASK_INDEX,
    SHAPE,
    TEXT_DOCUMENT,
  }

  enum MaskFeatherFalloff {
    FFO_LINEAR,
    FFO_SMOOTH,
  }

  enum MaskMode {
    NONE,
    ADD,
    SUBTRACT,
    INTERSECT,
    LIGHTEN,
    DARKEN,
    DIFFERENCE,
  }

  enum MaskMotionBlur {
    ON,
    OFF,
    SAME_AS_LAYER,
  }

  enum ParagraphJustification {
    LEFT_JUSTIFY,
    RIGHT_JUSTIFY,
    CENTER_JUSTIFY,
    FULL_JUSTIFY_LASTLINE_LEFT,
    FULL_JUSTIFY_LASTLINE_RIGHT,
    FULL_JUSTIFY_LASTLINE_CENTER,
    FULL_JUSTIFY_LASTLINE_FULL,
  }

  enum ViewerType {
    VIEWER_COMPOSITION,
    VIEWER_LAYER,
    VIEWER_FOOTAGE,
  }

  class AffectScriptInternalAPI {
    /**
     * Affect Script 버전을 가져옵니다.
     */
    readonly VERSION = '0.7_beta3';
  }

  class Application extends AffectScriptInternalAPI {
    /**
     * 현재 활성화 된 뷰어 객체를 가져옵니다.
     */
    readonly activeViewer: Viewer;

    /**
     * After Effects의 빌드 이름을 가져옵니다.
     */
    readonly buildName: string;

    /**
     * After Effects의 빌드번호를 가져옵니다.
     */
    readonly buildNumber: number;

    /**
     * After Effects에서 사용가능한 효과들을 가져옵니다.
     */
    readonly effects: EffectsType[];

    /**
     * After Effects 명령줄 도구로 스크립트를 실행한 후, 끝난 후 After Effects를 종료할지 여부를 설정합니다. (Windows에서만 사용가능)
     */
    exitAfterLaunchAndEval: boolean;

    /**
     * 외부로부터 실행된 스크립트가 종료되었을 경우, 종료코드를 설정하거나 반환합니다.
     */
    exitCode: number;

    /**
     * 현재 설치된 After Effects 언어를 가져옵니다.
     */
    readonly isoLanguage: String;

    /**
     * After Effects가 렌더링 엔진용으로 켜졌는지 여부를 가져옵니다.
     */
    readonly isRenderEngine: boolean;

    /**
     * 감시 폴더 대화상자 표시 여부를 확인하고 현재 렌더링 중인 항목의 폴더를 감시하는지 여부를 확인합니다.
     */
    readonly isWatchFolder: boolean;

    /**
     * After Effects가 차지하는 메모리 용량을 가져옵니다. (바이트_byte)
     */
    readonly memoryInUse: number;

    /**
     * 현재 열려있는 프로젝트 객체를 반환합니다.
     */
    readonly project: Project;

    /**
     * 현재 로드된 환경설정 값을 객체로 가져옵니다.
     */
    readonly settings: Settings;

    /**
     * 현재 설치된 After Effects 버전을 가져옵니다.
     */
    readonly version: string;

    /**
     * After Effects가 비정상적으로 종료되었을 때 현재 열려있는 프로젝트를 저장할지 설정합니다.
     */
    saveProjectOnCrash: boolean;

    /**
     * 오류가 났을 경우 이벤트 처리기입니다.
     */
    onError;

    constructor();

    /**
     * After Effects 창에 포커스를 맞춥니다.
     */
    activate(): void;

    /**
     * 작성한 스크립트에 오류가 나도 경고창이 나오지 않도록 설정합니다.
     * 다시 활성화하려면 endSuppressDialogs() 를 실행하세요.
     */
    beginSuppressDialogs(): void;

    /**
     * 해당 함수를 실행한 시점부터 endUndoGroup() 함수가 실행될때까지의 모든 작업을 하나의 히스토리로 남깁니다.
     * @param undoString 설정할 히스토리 이름입니다.
     */
    beginUndoGroup(undoString: string): void;

    /**
     * 대기중인 적업이나 예약된 작업을 취소합니다.
     * @param taskID 취소할 작업 고유번호입니다.
     */
    cancelTask(taskID: number): void;

    /**
     * beginSuppressDialogs() 함수로 실행된 '작성한 스크립트에 오류가 나도 경고창이 나오지 않도록 설정'을 해제합니다.
     * @param alert 기본값은 true이며, true로 지정할 경우 스크립트에 오류가 나면 경고창을 활성화합니다.
     */
    endSuppressDialogs(alert: boolean): void;

    /**
     * beginUndoGroup() 함수로부터 실행된 '실행한 시점부터 endUndoGroup() 함수가 실행될때까지의 모든 작업을 하나의 히스토리로 남김'을 해제합니다.
     */
    endUndoGroup(): void;

    /**
     * 폴더 감시 모드를 끝냅니다.
     */
    endWatchFolder(): void;

    /**
     * 새로운 프로젝트를 생성합니다. (현재 프로젝트를 닫는 메소드 close()를 먼저 사용하세요)
     */
    newProject(): Project;

    /**
     * 프로젝트 파일을 엽니다.
     * @param file 해당 변수에 아무것도 넣지 않을경우 프로젝트 파일 선택 화면이 나오고, 변수에 프로젝트 위치를 넣을 경우 해당 프로젝트를 엽니다.
     */
    open(file?: File): Project;

    /**
     * Adobe Swatch Exchange (*.ase) 파일을 엽니다.
     * @param file ase 파일의 경로입니다.
     */
    parseSwatchFile(file: File): SwatchData;

    /**
     * 폴더 감시를 일시중지합니다.
     * @param pause true일 경우 일시중지합니다.
     */
    pauseWatchFolder(pause: boolean): void;

    /**
     * 캐시 파일을 지웁니다.
     * @param target 지울 캐시파일 종류입니다.
     */
    purge(target: PurgeTarget): void;

    /**
     * After Effects를 종료합니다.
     */
    quit(): void;

    /**
     * 실행할 코드를 특정 지연 후에 실행합니다.
     * @param stringToExecute 실행할 코드입니다.
     * @param delay 지연될 시간입니다. (밀리초)
     * @param repeat 반복 횟수를 지정합니다.
     * @return 해당 작업의 고유번호를 반환합니다.
     */
    scheduleTask(
      stringToExecute: string,
      delay: number,
      repeat: boolean
    ): number;

    /**
     * After Effects가 사용할 메모리 용량을 제한합니다.
     * @param imageCachePercentage 이미지 캐시 사용률을 백분율로 입력합니다. (% 제외))
     * @param maximumMemoryPercentage 메모리 사용률을 백분율로 입력합니다. (% 제외))
     */
    setMemoryUsageLimits(
      imageCachePercentage: number,
      maximumMemoryPercentage: number
    ): void;

    /**
     * After Effects가 종료될 때에 환경설정값을 저장할지 여부를 설정합니다.
     * @param doSave true 일 경우 환경설정 값을 저장합니다.
     */
    setSavePreferencesOnQuit(doSave: boolean): void;

    /**
     * 폴더 감시를 시작합니다.
     * @param folder_object_to_watch 감시할 대상의 폴더입니다.
     */
    watchFolder(folder_object_to_watch: Folder): void;
  }

  class Collection extends AffectScriptInternalAPI {
    /* COMPILED CODE */
  }

  class ItemCollection extends Collection {
    /**
     * 컴포지션을 추가합니다.
     * @param name 컴포지션 이름입니다.
     * @param width 컴포지션의 가로 크기입니다.
     * @param height 컴포지션의 세로 크기입니다.
     * @param pixelAspect 컴포지션의 픽셀값입니다. (기본값은 100 입니다.)
     * @param duration 컴포지션의 길이입니다. (단위 : 초)
     * @param frameRate 컴포지션의 프레임레이트입니다. (기본값 : 25)
     */
    addComp(
      name: string,
      width: number,
      height: number,
      pixelAspect: number,
      duration: number,
      frameRate: number
    ): CompItem;

    /**
     * 폴더를 추가합니다.
     * @param name 폴더 이름입니다.
     */
    addFolder(name: string): FolderItem;
  }

  class LayerCollection extends Collection {
    /**
     * 레이어에 아이템을 추가합니다.
     * @param item 추가할 아이템입니다. (예를들어 컴포지션, 솔리드, 카메라 등이 될 수 있습니다.)
     * @param duration 추가한 아이템의 길이입니다. (단위 : 초))
     */
    add(item: AVItem, duration?: number): AVLayer;

    /**
     * 문단이 있는 새로운 텍스트 레이어를 추가합니다.
     * @param sourceText 추가할 텍스트를 입력합니다. (옵션값)
     */
    addBoxText(sourceText?: string): TextLayer;

    /**
     * 카메라 레이어를 추가합니다.
     * @param name 카메라 레이어의 이름입니다.
     * @param centerPoint [x, y] 형태로 카메라 위치를 지정합니다.
     */
    addCamera(name: string, centerPoint: number[]): CameraLayer;

    /**
     * 라이트 레이어를 추가합니다.
     * @param name 라이트 레이어의 이름입니다.
     * @param centerPoint [x, y] 형태로 라이트 위치로 지정합니다.
     */
    addLight(name: string, centerPoint: number[]): LightLayer;

    /**
     * Null 레이어를 추가합니다.
     * @param duration 레이어의 길이를 입력합니다. (단위 : 초, 옵션값)
     */
    addNull(duration?: number): AVLayer;

    /**
     * 도형 레이어를 추가합니다.
     */
    addShape(): ShapeLayer;

    /**
     * 단색 레이어를 추가합니다.
     * @param color [R, G, B] 형태로 지정할 색깔입니다.
     * @param name 단색 레이어의 이름입니다.
     * @param width 레이어의 가로 크기입니다.
     * @param height 레이어의 세로 크기입니다.
     * @param pixelAspect 레이어의 픽셀 비율이며, 기본값은 100 입니다.
     * @param duration 레이어의 길이입니다. (옵션값)
     */
    addSolid(
      color: number[],
      name: string,
      width: number,
      height: number,
      pixelAspect: number,
      duration?: number
    ): AVLayer;

    /**
     * 텍스트 레이어를 추가합니다.
     * @param sourceText 추가할 텍스트입니다.
     */
    addText(sourceText: string): TextLayer;

    /**
     * 특정 이름을 가진 최상위 레이어를 가져옵니다.
     * @param name 레이어의 이름입니다.
     */
    byName(name: string): Layer;

    /**
     * 설정한 레이어들을 하나의 컴포지션으로 합칩니다.
     * @param layerIndicies 합칠 레이어의 인텍스 값들입니다. (배열 형태)
     * @param name 새로 만들어질 컴포지션 이름입니다.
     * @param moveAllAttributes 컴포지션을 만들 때에 모든 레이어가 시간에 맞출지 여부입니다.
     */
    precompose(
      layerIndicies: number[],
      name: string,
      moveAllAttributes: boolean
    ): CompItem;
  }

  class OMCollection extends Collection {
    /* COMPILED CODE */
  }

  class RenderQueueItem extends Collection {
    /**
     * 렌더링 대기열에 있는 컴포지션 객체를 가져옵니다.
     */
    readonly comp: CompItem;

    /**
     * 렌더링 된 컴포지션의 렌더링 시간을 가져옵니다. 렌더링이 되지 않았다면 null이 반환됩니다.
     */
    readonly elapsedSeconds: number;

    /**
     * 렌더링 할 때 로그 출력 방식을 설정하거나 가져옵니다.
     */
    logType: LogType;

    /**
     * 출력할 대상의 모듈 개수를 가져옵니다.
     */
    readonly numOutputModules: number;

    /**
     * 모든 출력 모듈을 객체로 가져옵니다.
     */
    readonly outputModules: OMCollection;

    /**
     * 해당 레이어의 렌더링 대기상태를 설정하거나 가져옵니다.
     */
    render: RQItemStatus;

    /**
     * 테스트 렌더링 일때 혹은 빠른 렌더링을 위해 건너뛸 렌더링 프레임을 지정합니다.
     * 비율입니다.
     */
    skipFrames: number;

    /**
     * 렌더링이 시작한 시간을 가져옵니다.
     */
    startTime: Date;

    /**
     * 현재 렌더링 상태를 가져옵니다.
     */
    readonly status: RQItemStatus;

    /**
     * 해당 컴포지션에서 사용 가능한 모든 렌더링 설정값을 배열로 가져옵니다.
     */
    templates: string[];

    /**
     * 컴포지션의 지속 시간을 설정하거나 가져옵니다.
     */
    timeSpanDuration: number;

    /**
     * 렌더링이 시작될 컴포지션의 지속 시간을 설정합니다.
     */
    timeSpanStart: number;

    /**
     * 렌더링 상태가 변경되었을 때 이벤트 처리기입니다.
     */
    onStatusChanged;

    /**
     * 렌더링 대기열에 있는 컴포지션을 복제합니다.
     */
    duplicate(): RenderQueueItem;

    /**
     * 출력 모듈 객체를 가져옵니다.
     * @param index 가져올 모듈 위치입니다.
     */
    outputModule(index: number): OutputModule;

    /**
     * 렌더링 대기열에서 해당 아이템을 제거합니다.
     */
    remove(): void;

    /**
     * 사용자가 만든 렌더링 사전 설정 값을 저장합니다.
     * @param name 렌더링 사전 설정 값의 이름입니다.
     */
    saveAsTemplate(name: string): void;
  }

  class RQItemCollection extends Collection {
    /**
     * 컴포지션을 렌더링 대기열에 추가합니다.
     * @param comp 추가할 컴포지션입니다.
     */
    add(comp: CompItem): RenderQueueItem;
  }

  class FootageSource extends AffectScriptInternalAPI {
    /**
     * 푸티지의 알파 모드를 설정하거나 가져옵니다.
     */
    alphaMode: AlphaMode;

    conformFrameRate: number;
    displayFrameRate: number;
    fieldSeparationType: FieldSeparationType;
    highQualityFieldSeparation: boolean;

    /**
     * 알파값 반전 여부를 설정하거나 가져옵니다.
     */
    invertAlpha: boolean;

    /**
     * 해당 푸티지를 프레임단위로 할지 설정하거나 가져옵니다. (프레임단위 / 시간단위)
     */
    readonly isStill: boolean;

    /**
     * 해당 푸티지의 알파 채널 여부를 가져옵니다.
     */
    readonly hasAlpha: boolean;

    /**
     * 푸티지의 반복 횟수를 설정합니다. 기본값은 1 입니다. isStill 값이 true 라면 오류가 반환됩니다.
     */
    loop: number;

    /**
     * 해당 푸티지의 프레임 레이트를 설정하거나 가져옵니다.
     */
    nativeFrameRate: number;

    premulColor: number[];

    removePulldown: PulldownPhase;

    /**
     * 해당 푸티지에서 사용 가능한 최상의 설정값을 사용합니다.
     */
    guessAlphaMode(): void;

    /**
     * 푸티지에 맞는 최상의 추정치를 설정합니다.
     * @param method 설정할 설정값입니다.
     */
    guessPulldown(method: PulldownMethod): void;
  }

  class FileSource extends FootageSource {
    /**
     * 해당 푸티지를 파일 객체로 가져옵니다.
     */
    readonly file: File;

    /**
     * 푸티지 파일을 찾을 수 없을 때 경로와 이름을 반환합니다.
     */
    readonly missingFootagePath: string;

    /**
     * 해당 푸티지를 다시 로드합니다.
     */
    reload(): void;
  }

  class PlaceholderSource extends FootageSource {
    /* COMPILED CODE */
  }

  class SolidSource extends FootageSource {
    /**
     * 단색 푸티지의 색상값을 설정하거나 가져옵니다.
     */
    color: number[];
  }

  class ImportOptions extends FootageSource {
    constructor(file: File);

    /**
     * 가져올 파일을 지정하거나 가져옵니다.
     */
    file: File;

    /**
     * 알파벳 순 파일 이름을 무시할지 여루를 설정하거나 가져옵니다.
     */
    forceAlphabetical: boolean;

    /**
     * 해당 푸티지 종류입니다.
     */
    importAs: ImportAsType;

    sequence: boolean;

    /**
     * 해당 푸티지를 가져올 수 있는지 여부를 확인합니다.
     * @param type 가져올 푸티지의 형식입니다.
     */
    canImportAs(type: ImportAsType): boolean;
  }

  class Item extends AffectScriptInternalAPI {
    /**
     * 아이템에 대한 메모를 추가하거나 가져옵니다.
     */
    comment: string;

    /**
     * 아이템에 대한 ID를 가져옵니다.
     */
    readonly id: number;

    /**
     * 아이템에 대한 플래그 색깔을 설정하거나 가져옵니다. (1 ~ 16까지 사용가능)
     */
    label: number;

    /**
     * 프로젝트 패널에 나오는 아이템 이름을 설정하거나 가져옵니다.
     */
    name: string;

    /**
     * 아이템이 들어가있는 부모 폴더를 설정하거나 가져옵니다.
     */
    parentFolder: FolderItem;

    /**
     * 아이템의 포커스 상태를 설정하거나 가져옵니다.
     */
    selected: boolean;

    /**
     * 아이템의 종류를 문자열로 가져옵니다.
     */
    readonly typeName: string;

    /**
     * 프로젝트에서 해당 아이템을 제거합니다. (원본 파일은 유지됩니다.)
     */
    remove(): void;
  }

  class AVItem extends Item {
    /**
     * 아이템의 길이를 가져옵니다. (재생 시간)
     */
    readonly duration: number;

    /**
     * 아이템의 원본 파일이 없을 경우 true 가 반환됩니다.
     */
    readonly footageMissing: boolean;

    /**
     * 아이템의 프레임 수를 가져옵니다.
     */
    readonly frameDuration: number;

    /**
     * 아이템의 초당 프레임 수를 가져옵니다.
     */
    readonly frameRate: number;

    /**
     * 아이템의 오디오 레이어 여부를 가져옵니다.
     */
    readonly hasAudio: boolean;

    /**
     * 아이템의 비디오 레이어 여부를 가져옵니다.
     */
    readonly hasVideo: boolean;

    /**
     * 아이템의 세로 크기를 가져옵니다.
     */
    height: number;

    /**
     * 아이템의 이름을 설정하거나 가져옵니다.
     */
    name: string;

    pixelAspect: number;

    readonly proxySource: FootageSource;

    /**
     * 아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다.
     * 미리보기에 나오고 있을 경우 현재 시간을 설정합니다.
     */
    time: number;

    /**
     * 아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.
     */
    readonly usedIn: CompItem[];

    /**
     * 아이템의 프록시 사용 여부를 설정하거나 가져옵니다.
     */
    useProxy: boolean;

    /**
     * 아이템의 가로 크기를 가져옵니다.
     */
    width: number;

    /**
     * 아이템에 프록시를 설정합니다.
     * @param file 프록시를 설정할 파일입니다.
     */
    setProxy(file: File): void;

    /**
     * 아이템에 프록시가 설정되어있다면 프록시 설정값을 없앱니다.
     */
    setProxyToNone(): void;

    setProxyWithPlaceholder(
      name: string,
      width: number,
      height: number,
      frameRate: number,
      duration: number
    ): void;

    setProxyWithSequence(file: File, forceAlphabetical: boolean): void;

    setProxyWithSolid(
      color: number[],
      name: string,
      width: number,
      height: number,
      pixelAspect: number
    ): void;
  }

  class CompItem extends AVItem {
    /**
     * 컴포지션에 활성화 된 카메라 객체를 가져옵니다.
     */
    readonly activeCamera: CameraLayer;

    /**
     * 컴포지션의 배경색깔을 설정하거나 가져옵니다. [R, G, B] 형태입니다.
     */
    bgColor: number[];

    /**
     * 컴포지션이 시작될 시간을 설정하거나 가져옵니다.
     */
    displayStartTime: number;

    /**
     * Draft 3D 모드 활성화 여부를 설정하거나 가져옵니다.
     */
    draft3d: boolean;

    /**
     * 컴포지션이 Drop Frame을 사용할지 여부를 설정하거나 가져옵니다.
     */
    dropFrame: boolean;

    /**
     * 컴포지션의 블랜딩 모드 활성 여부를 설정하거나 가져옵니다.
     */
    frameBlending: boolean;

    /**
     * 컴포지션의 전체 프레임 수를 설정하거나 가져옵니다.
     */
    frameDuration: number;

    /**
     * 컴포지션 안에 숨김 레이어가 있을 경우 숨길지 여부를 설정하거나 가져옵니다.
     */
    hideShyLayer: boolean;

    /**
     * 컴포지션에 있는 모든 레이어를 객체로 가져옵니다.
     */
    layers: LayerCollection;

    /**
     * 컴포지션의 모션 블러 사용 여부를 설정하거나 가져옵니다.
     */
    motionBlur: boolean;

    /**
     * 컴포지션이 사용할 모션블러 샘플 사이즈를 가져오거나 설정합니다. (2D) / (2 ~ 256)
     */
    motionBlurAdaptiveSampleLimit: number;

    /**
     * 컴포지션이 사용할 모션블러 샘플 사이즈를 가져오거나 설정합니다. (2D) / (2 ~ 64)
     */
    motionBlurSamplesPerFrame: number;

    /**
     * 컴포지션이 가지고 있는 모든 레이어의 수를 가져옵니다.
     */
    readonly numLayers: number;

    preserveNestedFrameRate: boolean;

    preserveNestedResolution: boolean;

    /**
     * 컴포지션이 사용하고 있는 렌더러를 가져오거나 설정합니다.
     */
    renderer: string;

    /**
     * 컴포지션이 사용할 수 있는 모든 렌더러를 배열로 가져옵니다.
     */
    readonly renderers: string[];

    /**
     * 컴포지션이 미리보기가 될 때에 낮출 비율을 가져오거나 설정합니다.
     */
    resolutionFactor: number[];

    /**
     * 컴포지션에서 선택된 모든 레이어를 가져옵니다.
     */
    readonly selectedLayers: Layer[];

    /**
     * 아이템에서 선택된 효과 (혹은 설정값) 를 가져옵니다.
     */
    readonly selectedProperties: Property;

    shutterAngle: number;

    shutterPhase: number;

    /**
     * 컴포지션에서 미리보기할 영역의 길이를 가져오거나 설정합니다.
     */
    workAreaDuration: number;

    /**
     * 컴포지션에서 미리보기할 영역의 시작점을 가져오거나 설정합니다.
     */
    workAreaStart: number;

    /**
     * 컴포지션을 복제합니다.
     */
    duplicate(): CompItem;

    /**
     * 컴포지션에서 특정 레이어를 가져옵니다.
     * @param index 가져올 레이어의 위치 / 레이어 이름 / 레이어 객체가 될 수 있습니다.
     */
    layer(index: number | string | Layer, relIndex?: number): Layer;

    /**
     * 컴포지션을 엽니다.
     */
    openInViewer(): Viewer;
  }

  class FootageItem extends AVItem {
    /**
     * 푸티지의 원본 파일 객체를 가져옵니다.
     */
    readonly file: File;

    /**
     * 푸티지가 어떤 종류인지 가져옵니다.
     */
    readonly mainSource: FootageSource;

    /**
     * 해당 푸티지를 엽니다.
     */
    openInViewer(): Viewer;

    /**
     * 푸티지를 바꿉니다.
     * @param file 바꿀 파일입니다.
     */
    replace(file: File): void;

    replaceWithPlaceholder(
      name: string,
      width: number,
      height: number,
      frameRate: number,
      duration: number
    ): void;

    /**
     * 해당 푸티지를 다른 푸티지 (파일)로 변경합니다.
     * @param file 바꿀 파일입니다.
     * @param forceAlphabetical 해당값을 `true` 할 경우, 파일명의 대/소문자를 무시합니다.
     */
    replaceWithSequence(file: File, forceAlphabetical: boolean): void;

    replaceWithSolid(
      color: number[],
      name: string,
      width: number,
      height: number,
      pixelAspect: number
    ): void;
  }

  class FolderItem extends Item {
    /**
     * 폴더 안에 있는 모든 아이템들을 가져옵니다.
     */
    readonly items: ItemCollection;

    /**
     * 폴더 안에 있는 모든 아이템의 개수를 가져옵니다.
     */
    readonly numItems: number;

    /**
     * 해당 폴더에 있는 최상위 아이템을 가져옵니다.
     */
    item(index: number): AfterEffectsItem;
  }

  class AfterEffectsItem extends Item {
    /**
     * 아이템의 길이를 가져옵니다. (재생 시간)
     */
    readonly duration: number;

    /**
     * 아이템의 원본 파일이 없을 경우 true 가 반환됩니다.
     */
    readonly footageMissing: boolean;

    /**
     * 아이템의 프레임 수를 가져옵니다.
     */
    readonly frameDuration: number;

    /**
     * 아이템의 초당 프레임 수를 가져옵니다.
     */
    readonly frameRate: number;

    /**
     * 아이템의 오디오 레이어 여부를 가져옵니다.
     */
    readonly hasAudio: boolean;

    /**
     * 아이템의 비디오 레이어 여부를 가져옵니다.
     */
    readonly hasVideo: boolean;

    /**
     * 아이템의 세로 크기를 가져옵니다.
     */
    height: number;

    /**
     * 아이템의 이름을 설정하거나 가져옵니다.
     */
    name: string;

    pixelAspect: number;

    readonly proxySource: FootageSource;

    /**
     * 아이템이 미리보기에 나오고 있을 경우, 현재 시간값을 가져옵니다.
     * 해당 값을 설정할 경우, 미리보기 화면에 입력한 설정값으로 적용됩니다.
     */
    time: number;

    /**
     * 아이템을 사용하고 있는 컴포지션 객체를 배열 형태로 가져옵니다.
     */
    readonly usedIn: CompItem[];

    /**
     * 아이템의 프록시 사용 여부를 설정하거나 가져옵니다.
     */
    useProxy: boolean;

    /**
     * 아이템의 가로 크기를 가져옵니다.
     */
    width: number;

    /**
     * 아이템에 프록시를 설정합니다.
     * @param file 프록시를 설정할 파일입니다.
     */
    setProxy(file: File): void;

    /**
     * 아이템에 프록시가 설정되어있다면 프록시 설정값을 없앱니다.
     */
    setProxyToNone(): void;

    setProxyWithPlaceholder(
      name: string,
      width: number,
      height: number,
      frameRate: number,
      duration: number
    ): void;

    setProxyWithSequence(file: File, forceAlphabetical: boolean): void;

    setProxyWithSolid(
      color: number[],
      name: string,
      width: number,
      height: number,
      pixelAspect: number
    ): void;

    /**
     * 컴포지션에 활성화 된 카메라 객체를 가져옵니다.
     */
    readonly activeCamera: CameraLayer;

    /**
     * 컴포지션의 배경색깔을 설정하거나 가져옵니다. [R, G, B] 형태입니다.
     */
    bgColor: number[];

    /**
     * 컴포지션이 시작될 시간을 설정하거나 가져옵니다.
     */
    displayStartTime: number;

    /**
     * Draft 3D 모드 활성화 여부를 설정하거나 가져옵니다.
     */
    draft3d: boolean;

    /**
     * 컴포지션이 Drop Frame을 사용할지 여부를 설정하거나 가져옵니다.
     */
    dropFrame: boolean;

    /**
     * 컴포지션의 블랜딩 모드 활성 여부를 설정하거나 가져옵니다.
     */
    frameBlending: boolean;

    /**
     * 컴포지션 안에 숨김 레이어가 있을 경우 숨길지 여부를 설정하거나 가져옵니다.
     */
    hideShyLayer: boolean;

    /**
     * 컴포지션에 있는 모든 레이어를 객체로 가져옵니다.
     */
    layers: LayerCollection;

    /**
     * 컴포지션의 모션 블러 사용 여부를 설정하거나 가져옵니다.
     */
    motionBlur: boolean;

    /**
     * 컴포지션이 사용할 모션블러 샘플 사이즈를 가져오거나 설정합니다. (2D) / (2 ~ 256)
     */
    motionBlurAdaptiveSampleLimit: number;

    /**
     * 컴포지션이 사용할 모션블러 샘플 사이즈를 가져오거나 설정합니다. (2D) / (2 ~ 64)
     */
    motionBlurSamplesPerFrame: number;

    /**
     * 컴포지션이 가지고 있는 모든 레이어의 수를 가져옵니다.
     */
    readonly numLayers: number;

    preserveNestedFrameRate: boolean;

    preserveNestedResolution: boolean;

    /**
     * 컴포지션이 사용하고 있는 렌더러를 가져오거나 설정합니다.
     */
    renderer: string;

    /**
     * 컴포지션이 사용할 수 있는 모든 렌더러를 배열로 가져옵니다.
     */
    readonly renderers: string[];

    /**
     * 컴포지션이 미리보기가 될 때에 낮출 비율을 가져오거나 설정합니다.
     */
    resolutionFactor: number[];

    /**
     * 컴포지션에서 선택된 모든 레이어를 가져옵니다.
     */
    readonly selectedLayers: Layer[];

    /**
     * 아이템에서 선택된 효과 (혹은 설정값) 를 가져옵니다.
     */
    readonly selectedProperties: Property;

    shutterAngle: number;

    shutterPhase: number;

    /**
     * 컴포지션에서 미리보기할 영역의 길이를 가져오거나 설정합니다.
     */
    workAreaDuration: number;

    /**
     * 컴포지션에서 미리보기할 영역의 시작점을 가져오거나 설정합니다.
     */
    workAreaStart: number;

    /**
     * 컴포지션을 복제합니다.
     */
    duplicate(): CompItem;

    /**
     * 컴포지션에서 특정 레이어를 가져옵니다.
     * @param index 가져올 레이어의 위치 / 레이어 이름 / 레이어 객체가 될 수 있습니다.
     */
    layer(index: number | string | Layer, relIndex?: number): Layer;

    /**
     * 컴포지션을 엽니다.
     */
    openInViewer(): Viewer;

    /**
     * 푸티지의 원본 파일 객체를 가져옵니다.
     */
    readonly file: File;

    /**
     * 푸티지가 어떤 종류인지 가져옵니다.
     */
    readonly mainSource: FootageSource;

    /**
     * 푸티지를 바꿉니다.
     * @param file 바꿀 파일입니다.
     */
    replace(file: File): void;

    replaceWithPlaceholder(
      name: string,
      width: number,
      height: number,
      frameRate: number,
      duration: number
    ): void;

    replaceWithSequence(file: File, forceAlphabetical: boolean): void;

    replaceWithSolid(
      color: number[],
      name: string,
      width: number,
      height: number,
      pixelAspect: number
    ): void;
  }

  class KeyframeEase extends AffectScriptInternalAPI {
    /**
     * 키프레임의 기울기를 가져오거나 설정합니다. (0.1 ~ 100)
     */
    influence: number;

    /**
     * 키프레임의 속도를 가져오거나 설정합니다.
     */
    speed: number;

    constructor(speed: number, influence: number);
  }

  class Layer extends AffectScriptInternalAPI {
    /**
     * 해당 레이어의 활성 여부를 가져옵니다.
     */
    readonly active: boolean;

    /**
     * 레이어에 대한 설명을 설정하거나 가져옵니다.
     */
    comment: string;

    /**
     * 해당 레이어를 포함하고 있는 컴포지션 객체를 가져옵니다.
     */
    readonly containingComp: CompItem;

    readonly Effects: Property;

    /**
     * 레이어의 사용가능 여부를 가져오거나 설정합니다.
     */
    enabled: boolean;

    /**
     * 레이어가 비디오 레이어를 가지고 있는지 여부를 가져옵니다.
     */
    readonly hasVideo: boolean;

    /**
     * 레이어의 위치를 가져옵니다.
     */
    readonly index: number;

    inPoint: number;

    readonly isNameSet: boolean;

    /**
     * 레이어 잠금 여부를 가져오거나 설정합니다.
     */
    locked: boolean;

    /**
     * 레이어의 이름을 가져오거나 설정합니다.
     */
    name: string;

    /**
     * 레이어가 Null 레이어인지 여부를 가져옵니다.
     */
    readonly nullLayer: boolean;

    /**
     * 레이어의 끝날 시간을 설정하거나 가져옵니다.
     */
    outPoint: number;

    /**
     * 해당 레이어의 부모 레이어를 가져옵니다. 없다면 Null을 반환합니다.
     */
    parent: Layer;

    /**
     * 현재 레이어에 적용된 설정값을 모두 가져옵니다.
     */
    readonly selectedProperties: PropertyGroup;

    /**
     * 레이어 숨김 여부를 가져오거나 설정합니다.
     */
    shy: boolean;

    solo: boolean;

    /**
     * 레이어의 시작 시간을 가져오거나 설정합니다.
     */
    startTime: number;

    /**
     * 레이어가 시간 늘리기가 적용되어 있는지 여부를 가져오거나 설정합니다. (100 : 보통)
     */
    stretch: number;

    /**
     * 레이어의 시간 값을 가져옵니다.
     */
    readonly time: number;

    /**
     * 특정 시간에 레이어가 활성화 되어있는지 여부를 확인합니다.
     * @param time 특정 시간입니다.
     */
    activeAtTime(time: number): boolean;

    /**
     * 레이어에 프리셋을 적용합니다.
     * @param presetName 적용할 프리셋 이름입니다.
     */
    applyPreset(presetName: string): void;

    /**
     * 컴포지션에 레이어를 복사합니다.
     * @param intoComp 복사할 컴포지션 대상입니다.
     */
    copyToComp(intoComp: CompItem): void;

    /**
     * 레이어를 복제합니다.
     */
    duplicate(): AVLayer;

    /**
     * 레이어에 적용된 효과를 가져온 후, 설정값을 가져오거나 설정합니다.
     * @param effectName
     */
    effect(effectName: string): (propertyName: string) => Property;

    mask(index: number): MaskPropertyGroup;

    /**
     * 다음 레이어로 이동합니다.
     * @param layer 다음 레이어로 이동하기 전 레이어 객체입니다.
     */
    moveAfter(layer: Layer): void;

    /**
     * 이전 레이어로 이동합니다.
     * @param layer 이전 레이어로 이동하기 전 레이어 객체입니다.
     */
    moveBefore(layer: Layer): void;

    /**
     * 처음 레이어로 이동합니다.
     */
    moveToBeginning(): void;

    /**
     * 마지막 레이어로 이동합니다.
     */
    moveToEnd(): void;

    /**
     * 레이어의 속성 그룹 혹은 값을 가져옵니다.
     * @param propertyName 속성 이름입니다.
     */
    property(propertyName: String): Property;

    /**
     * 레이어를 제거합니다.
     */
    remove(): void;

    /**
     * 해당 레이어의 새로운 부모 레이어를 설정합니다.
     * @param newParent 새로 할당할 부모 레이어 객체입니다.
     */
    setParentWithJump(newParent?: Layer);
  }

  class AVLayer extends Layer {
    /**
     * 레이어를 Adjustment 레이어인지 가져오거나 Adjustment 레이어로 만듭니다.
     */
    adjustmentLayer: boolean;

    /**
     * 레이어의 오디오가 활성화 되어있는지 여부를 가져옵니다.
     */
    readonly audioActive: boolean;

    /**
     * 레이어의 오디오가 켜져있는지 여부를 가져오거나 설정합니다.
     */
    audioEnabled: boolean;

    /**
     * 레이어의 방향값을 가져오거나 설정합니다.
     */
    autoOrient: AutoOrientType;

    /**
     * 레이어에 적용된 블랜딩 모드를 가져오거나 새로 적용합니다.
     */
    blendingMode: BlendingMode;

    readonly canSetCollapseTransformation: boolean;

    readonly canSetTimeRemapEnabled: boolean;

    collapseTransformation: boolean;

    effectsActive: boolean;

    environmentLayer: boolean;

    /**
     * 프레임 블랜딩 활성화 여부를 가져옵니다.
     */
    readonly frameBlending: boolean;

    /**
     * 프레임 블랜딩 모드를 가져오거나 설정합니다.
     */
    frameBlendingType: FrameBlendingType;

    guideLayer: boolean;

    /**
     * 레이어가 오디오를 가지고 있는지 반환합니다.
     */
    readonly hasAudio: boolean;

    /**
     * 레이어가 트랙매트를 가지고 있는지 반환합니다.
     */
    readonly hasTrackMatte: boolean;

    /**
     * 레이어의 세로 크기를 반환합니다.
     */
    readonly height: number;

    readonly isNameFromSource: boolean;

    readonly isTrackMatte: boolean;

    /**
     * 레이어에 모션블러 활성화 여부를 가져오거나 설정합니다.
     */
    motionBlur: boolean;

    preserveTransparency: boolean;

    /**
     * 레이어의 미리보기 품질을 가져오거나 설정합니다.
     */
    quality: LayerQuality;

    /**
     * 레이어의 원본 소스 객체를 가져옵니다.
     */
    readonly source: AVItem;

    /**
     * 레이어 3D 활성화 여부를 가져오거나 설정합니다.
     */
    threeDLayer: boolean;

    threeDPerChar: boolean;

    timeRemapEnabled: boolean;

    /**
     * 레이어에 적용된 트랙메트의 타입을 가져오거나 설정합니다.
     */
    trackMatteType: TrackMatteType;

    /**
     * 레이어의 가로 크기를 가져옵니다.
     */
    readonly width: number;

    /**
     * 특정 시간에 오디오가 활성화 되어있는지 가져옵니다.
     * @param number 특정 시간입니다.
     */
    audioActiveAtTime(time: number): boolean;

    calculateTransformFromPoints(
      pointTopLeft: XYZ,
      pointTopRight: XYZ,
      pointBottomRight: XYZ
    ): Object;

    /**
     * 레이어를 엽니다.
     */
    openInViewer(): Viewer;

    /**
     * 레이어의 원본 파일을 변경합니다.
     * @param newSource 변경할 아이템입니다.
     * @param fixExpressions
     */
    replaceSource(newSource: AVItem, fixExpressions: boolean): void;

    sourceRectAtTime(timeT: number, extents: boolean): TopLeftWidthHeight;
  }

  class ShapeLayer extends AVLayer {
    /* COMPILED CODE */
  }

  class TextLayer extends AVLayer {
    /* COMPILED CODE */

    /**
     * 텍스트 레이어의 속성을 가져옵니다. (해당 속성에는 글꼴, 글꼴크기, 정렬 등이 포함됩니다.)
     */
    getTextDocument(): TextDocument;

    /**
     * 텍스트 레이어의 폰트를 변경합니다.
     * @param fontName 적용할 폰트 이름을 입력합니다. (예를들어 '나눔고딕' 은 'NanumGothic' 으로 입력합니다.)
     * @param time 폰트를 적용할 시간입니다. (소수점이 가능합니다.)
     */
    changeFontFamily(fontName: String, time?: number): void;

    /**
     * 텍스트 레이어의 텍스트를 시간에 따라 변경합니다.
     * @param sourceText 변경할 텍스트입니다.
     * @param time 시간을 입력합니다. (2라고 입력할 경우 2초에 변경됩니다.)
     */
    changeText(sourceText: string, time: number): void;
  }

  class CameraLayer extends Layer {
    // 사용 가능한 속성값
    // Marker
    // Transform
    // Point of Interest
    // Position
    // Scale
    // Orientation
    // X Rotation
    // Y Rotation
    // Rotation
    // Opacity
    // Camera Options
    // Zoom
    // Depth of Field
    // Focus Distance
    // Blur Level
    /* COMPILED CODE */
  }

  class LightLayer extends AffectScriptInternalAPI {
    /**
     * 라이트 레이어의 종류를 가져오거나 설정합니다.
     */
    lightType: LightType;
  }

  class MarkerValue extends AffectScriptInternalAPI {
    chapter: String;
    /**
     * 마커의 내용을 가져오거나 설정합니다.
     */
    comment: String;

    cuePointName: String;

    /**
     * 마커가 나오는 위치를 가져오거나 설정합니다.
     */
    duration: number;

    eventCuePoint: boolean;

    frameTarget: String;

    url: String;

    constructor(
      comment: String,
      chapter: String,
      url: String,
      frameTarget: String,
      curPointName: String,
      params: Object[]
    );

    getParameters(): Object;

    /**
     * 마커에 설정값을 적용합니다.
     */
    setParameters(): void;
  }

  class OutputModule extends AffectScriptInternalAPI {
    file: File;

    includeSourceXMP: boolean;

    /**
     * 렌더링이 완료된 후 작업할 태스크를 가져오거나 설정합니다.
     */
    postRenderAction: PostRenderAction;

    /**
     * 렌더링 모듈의 이름을 가져오거나 설정합니다.
     */
    name: String;

    /**
     * 모든 출력 가능한 렌더링 모듈을 가져옵니다.
     */
    readonly templates: String[];

    /**
     * 렌더링을 진행할 때에 사전 정의를 사용하여 진행합니다.
     * @param templateName
     */
    applyTemplate(templateName: String);

    /**
     * 렌더링 대기열에서 지웁니다.
     */
    remove(): void;

    /**
     * 렌더링 모듈을 다른 이름으로 저장합니다.
     * @param name 저장할 이름입니다.
     */
    saveAsTemplate(name: String): void;
  }

  class Project extends AffectScriptInternalAPI {
    /**
     * 현재 프로젝트에서 활성화 된 아이템을 가져옵니다.
     */
    readonly activeItem: Item;

    /**
     * 현재 프로젝트에 색상 채널값을 가져오거나 설정합니다. (8, 16, 32)
     */
    bitsPerChannel: BitsPerChannelNumber;

    /**
     * 프로젝트에 시작 프레임 표시 여부를 가져오거나 설정합니다. (0, 1)
     */
    displayStartFrame: BooleanNumber;

    feetFramesFilmType: FeetFramesFilmType;

    /**
     * 해당 프로젝트 파일 객체를 가져옵니다.
     */
    readonly file: File;

    footageTimecodeDisplayStartType: FootageTimecodeDisplayStartType;

    framesCountType: FramesCountType;

    framesUseFeetFrames: boolean;

    /**
     * 프로젝트의 모든 아이템을 가져옵니다.
     */
    readonly items: ItemCollection;

    linearBlending: boolean;

    /**
     * 프로젝트에 있는 모든 아이템의 개수를 가져옵니다.
     */
    readonly numItems: number;

    /**
     * 렌더링 대기열을 가져옵니다.
     */
    readonly renderQueue: RenderQueue;

    /**
     * 프로젝트에서 최상위 그룹 폴더를 가져옵니다.
     */
    readonly rootFolder: FolderItem;

    /**
     * 프로젝트 내에서 선택된 모든 아이템을 배열의 형태로 가져옵니다.
     */
    readonly selection: Item[];

    /**
     * 프로젝트에서 사용하는 시간 형식을 가져오거나 설정합니다.
     */
    timeDisplayType: TimeDisplayType;

    transparencyGridThumbnails: boolean;

    xmpPacket: string;

    /**
     * 잘못된 표현식을 자동으로 수정합니다.
     * @param oldText 변경될 텍스트입니다.
     * @param newText 변경될 텍스트가 잘못되었다면, 해당 문구로 변경합니다.
     */
    autoFixExpressions(oldText: string, newText: string): void;

    /**
     * 프로젝트를 닫습니다.
     * @param closeOptions 프로젝트를 닫을 때에 프롬프트 창을 띄어 저장할건지, 저장하지 않고 닫을지 여부를 설정합니다.
     */
    close(closeOptions: CloseOptions): void;

    /**
     * 프로젝트에 포함된 모든 푸티지를 하나로 통합합니다.
     */
    consolidateFootage(): void;

    /**
     * 프로젝트에 파일을 추가합니다. (가져옵니다.)
     * @param importOptions 파일을 가져올 때 옵션값을 지정합니다.
     */
    importFile(importOptions: ImportOptions): FootageItem;

    /**
     * 파일 대화상자를 통해 파일을 프로젝트로 가져옵니다.
     */
    importFileWithDialog(): Item[];

    /**
     * 프로젝트에 Placeholder를 가져옵니다.
     * @param name 이름입니다.
     * @param width 오브젝트의 가로 크기입니다.
     * @param height 오브젝트의 세로 크기입니다.
     * @param frameRate 오브젝트의 프레임 비율입니다.
     * @param duration 오브젝트의 길이입니다.
     */
    importPlaceholder(
      name: String,
      width: number,
      height: number,
      frameRate: number,
      duration: number
    );

    /**
     * 프로젝트에서 아이템을 가져옵니다.
     * @param index 가져올 아이템의 위치입니다.
     */
    item(index: number): AfterEffectsItem;

    /**
     * 프로젝트를 줄입니다.
     * @param arrayOfItems 줄일 아이템 배열 객체입니다.
     * @return 프로젝트에서 제거된 아이템의 개수입니다.
     */
    reduceProject(arrayOfItems: Item[]): number;

    /**
     * 프로젝트에서 사용하지 않는 푸티지 파일을 자동으로 지웁니다. (원본 파일을 지워지지 않습니다.)
     */
    removeUnusedFootage(): void;

    /**
     * 프로젝트를 저장합니다.
     * @param file 다른 이름으로 저장할 경우 입력합니다.
     */
    save(file?: File);

    /**
     * 프로젝트를 대화상자를 통해 저장합니다.
     * @return 저장 여부를 반환합니다.
     */
    saveWithDialog(): boolean;

    /**
     * 프로젝트 패널 노출 여부를 설정합니다.
     * @param doShow true일 경우 프로젝트 패널을 노출합니다.
     */
    showWindow(doShow: boolean): void;
  }

  class PropertyBase extends AffectScriptInternalAPI {
    /**
     * 해당 레이어의 가시성 여부를 가져옵니다.
     */
    readonly active: boolean;

    readonly canSetEnabled: boolean;

    /**
     * 레이어가 숨김 레이어인지 가져옵니다.
     */
    readonly elided: boolean;

    enabled: boolean;

    /**
     * 속성값이 효과인지 여부를 가져옵니다.
     */
    readonly isEffect: boolean;

    /**
     * 속성값이 마스크인지 여부를 가져옵니다.
     */
    readonly isMask: boolean;

    /**
     * 속성값이 수정되었는지 확인합니다.
     */
    readonly isModified: boolean;

    readonly matchName: String;

    readonly propertyDepth: number;

    /**
     * 속성값의 이름을 가져오거나 설정합니다.
     */
    name: String;

    /**
     * 해당 속성값이 어떤 속성 그룹에 포함되어있는지 가져옵니다.
     */
    readonly parentProperty: PropertyGroup;

    /**
     * 속성 값의 위치를 가져옵니다.
     */
    readonly propertyIndex: number;

    /**
     * 속성 값의 타입을 가져옵니다.
     */
    readonly propertyType: PropertyType;

    /**
     * 해당 속성값을 선택하고 있는지 여부를 가져오거나 설정합니다.
     */
    selected: boolean;

    /**
     * 설정값을 복제합니다.
     */
    duplicated(): PropertyBase;

    moveTo(newIndex: number): void;

    /**
     * 속성 값을 가져옵니다.
     * @param param 가져올 속성값입니다.
     */
    property(param: number | string): Property;

    /**
     * 속성 값의 그룹 데이터를 가져옵니다.
     * @param countUp 옵션값입니다. 상위 계층을 얼만큼 거슬러 올라갈지 입니다.
     */
    propertyGroup(countUp?: number): PropertyGroup;

    /**
     * 속성 값을 제거합니다.
     */
    remove();
  }

  class PropertyGroup extends PropertyBase {
    /**
     * 속성 그룹에 사용할 수 있는 속성의 개수를 가져옵니다.
     */
    readonly numProperties: number;

    /**
     * 속성 그룹을 추가합니다.
     * @param name 추가할 속성 그룹입니다.
     */
    addProperty(name: string): Property;

    /**
     * 속성 값을 적용할 수 있는지 여부를 확인합니다.
     * @param name
     */
    canAddProperty(name: string): boolean;
  }

  class Property extends PropertyGroup {
    /**
     * 표현식을 사용할 수 있는지 여부를 가져옵니다.
     */
    readonly canSetExpression: boolean;

    readonly canVaryOverTime: boolean;

    dimensionsSeparated: boolean;

    /**
     * 표현식을 가져오거나 설정합니다.
     */
    expression: string;

    /**
     * 표현식이 활성화 되어있는지 여부를 가져오거나 설정합니다.
     */
    expressionEnabled: boolean;

    /**
     * 표현식의 오류 여부를 가져옵니다.
     */
    readonly expressionError: boolean;

    readonly hasMax: boolean;

    readonly hasMin: boolean;

    readonly isSeparationFollower: boolean;

    readonly isSeparationLeader: boolean;

    readonly isSpatial: boolean;

    readonly isTimeVarying: boolean;

    /**
     * 속성값의 최대 값을 가져옵니다.
     */
    readonly maxValue: number;

    /**
     * 속성값의 최소 값을 가져옵니다.
     */
    readonly minValue: number;

    /**
     * 키 값의 전체 개수를 가져옵니다.
     */
    readonly numKeys: number;

    /**
     * 속성 값의 위치를 가져옵니다.
     */
    readonly propertyIndex: number;

    /**
     * 속성의 종류를 가져오거나 설정합니다.
     */
    propertyValueType: PropertyValueType;

    /**
     * 선택된 모든 키의 위치를 가져옵니다.
     */
    readonly selectedKeys: number[];

    readonly separationDimension: number;

    readonly separationLeader: Property;

    readonly unitsText: string;

    /**
     * 속성 값을 가져옵니다.
     */
    readonly value: any;

    /**
     * 키프레임이나 마커를 추가합니다.
     * @param time 추가할 시간입니다.
     */
    addKey(time: number): number;

    getSeoarationFollower(dim: number): Property;

    isInterpolationTypeValid(type: KeyframeInterpolationType): boolean;

    /**
     * 키프레임의 애니메이션 그래프 종류를 선택합니다.
     * @param keyIndex 종류입니다.
     */
    keyInInterpolationType(keyIndex: number): KeyframeInterpolationType;

    keyInspatialTangent(keyIndex: number): number[];

    keyInTemporalEase(keytIndex: number): KeyframeEase[];

    keyOutInterpolationType(keyIndex: number): KeyframeInterpolationType;

    keyOutSpatialTangent(keyIndex: number): number;

    keyOutTemporalEase(keyIndex: number): KeyframeEase;

    keyRoving(keyIndex: number): boolean;

    /**
     * 키프레임이 선택되어 있는지 가져옵니다.
     * @param keyIndex 키프레임 위치입니다.
     */
    keySelected(keyIndex: number): boolean;

    keySpatialAutoBezier(keyIndex: number): boolean;

    keySpatialContinuous(keyIndex: number): boolean;

    keyTemporalAutoBezier(keyIndex: number): boolean;

    keyTemporalContinuous(keyIndex: number): boolean;

    keyTime(keyIndex): number;

    /**
     * 키 값을 가져옵니다.
     * @param keyIndex 키 위치입니다.
     */
    keyValue(keyIndex: number): MarkerValue;

    /**
     * 시간에 있는 키 위치를 가져옵니다.
     * @param time 시간입니다.
     */
    nearestKeyIndex(time: number): number;

    /**
     * 키 값을 제거합니다.
     * @param keyIndex 지울 키값의 위치입니다.
     */
    removeKey(keyIndex: number): void;

    setInterpolationTypeAtKey(
      keyIndex: number,
      inType: KeyframeInterpolationType,
      outType?: KeyframeInterpolationType
    ): void;

    setRovingAtKey(keyIndex: number, newVal: number): void;

    /**
     * 선택할 키를 설정합니다.
     * @param keyIndex 선택한 키 위치입니다.
     * @param onOff
     */
    setSelectedAtKey(keyIndex: number, onOff: boolean): void;

    setSpatialAutoBezierAtKey(keyIndex: number, newVal: number): void;

    setSpatialContinuousAtKey(keyIndex: number, newVal: number): void;

    setSpatialTangentsAtKey(
      keyIndex: number,
      inTangent: number[],
      outTangent?: number
    ): void;

    setTemporalAutoBezierAtKey(keyIndex: number, newVal: number): void;

    setTemporalContinuousAtKey(keyIndex: number, newVal: number): void;

    /**
     * 애니메이션 Ease-In, Ease-Out을 사용하여 키프레임을 생성합니다.
     * @param keyIndex 키프레임을 생성할 키 위치입니다.
     * @param inTemporalEase EaseIn 애니메이션 객체입니다.
     * @param outTemporalEase EaseOut 애니메이션 객체입니다.
     */
    setTemporalEaseAtKey(
      keyIndex: number,
      inTemporalEase: number[],
      outTemporalEase?: number[]
    ): void;

    /**
     * 값을 설정합니다.
     * @param newValue 설정할 값입니다.
     */
    setValue(
      newValue: number | string | number[] | string[] | any | any[]
    ): void;

    /**
     * 해당 키에 맞는 값을 설정합니다.
     * @param keyIndex 키의 위치입니다.
     * @param newValue 키애 겂울 설정합니다.
     */
    setValueAtKey(keyIndex: number, newValue: number | string): void;

    /**
     * 해당 시간에 있는 속성값을 설정합니다.
     * @param time 시간입니다.
     * @param newValue 설정 값입니다.
     */
    setValueAtTime(time: number, newValue: any): void;

    setValuesAtTimes(times: number[], newValues: number | string): void;

    valueAtTime(time: number, preExpression: string): Property;
  }

  class MaskPropertyGroup extends PropertyGroup {
    /**
     * 마스크의 색깔을 가져오거나 설정합니다.
     */
    color: number[];

    /**
     * 마스크가 반전상태인지 여부를 가져오거나 설정합니다.
     */
    inverted: boolean;

    /**
     * 마스크의 잠금 여부를 가져오거나 설정합니다.
     */
    locked: boolean;

    maskFeatherFalloff: MaskFeatherFalloff;

    /**
     * 마스크의 모드를 가져오거나 설정합니다.
     */
    maskMode: MaskMode;

    /**
     * 마스크 레이어에 모션 블러 모드 여부를 가져오거나 설정합니다.
     */
    maskMotionBlur: MaskMotionBlur;

    rotoBezier: boolean;
  }

  class RenderQueue extends AffectScriptInternalAPI {
    /**
     * 렌더링 대기열의 모든 항목을 가져옵니다.
     */
    readonly items: RQItemCollection;

    /**
     * 렌더링 대기열애 있는 항목의 개수를 가져옵니다.
     */
    readonly numItems: number;

    /**
     * 현재 렌더링 대기열이 렌더링 중인지 여부를 가져옵니다.
     */
    readonly rendering: boolean;

    /**
     * 렌더링 대기열의 항목을 가져옵니다.
     * @param index 가져올 항목입니다.
     */
    item(index: number): RenderQueueItem;

    /**
     * 렌더링을 일시정지하거나 재개합니다.
     * @param pause true일 경우 일시중지됩니다.
     */
    pauseRendering(pause: boolean): void;

    /**
     * 렌더링합니다.
     */
    render(): void;

    showWindow(): void;

    /**
     * 렌더링을 중지합니다.
     */
    stopRendering(): void;
  }

  class Settings extends AffectScriptInternalAPI {
    /**
     * After Effects의 설정값을 가져옵니다.
     * @param sectionName 설정 값의 섹션입니다.
     * @param keyName 가져올 설정 키 값입니다.
     */
    getSetting(sectionName: string, keyName: string): string;

    /**
     * After Effects에서 설정값이 있는지 가져옵니다.
     * @param sectionName 설정 값의 섹션입니다.
     * @param keyName 여부를 확인할 설정 키 값입니다.
     */
    haveSetting(sectionName: string, keyName: string): boolean;

    /**
     * 설정을 저장합니다.
     * @param sectionName 설정 값의 섹션입니다.
     * @param keyName 변경할 설정 키 값입니다.
     * @param value 설정 값입니다.
     */
    saveSetting(sectionName: string, keyName: string, value: string): void;
  }

  class Shape extends AffectScriptInternalAPI {
    closed: boolean;

    featherInterps: number[];

    featherRadii: number;

    featherRelCornerAngles: number[];

    featherRelSegLocs: number[];

    featherSegLocs: number[];

    featherTensions: number[];

    featherTypes: number[];

    inTangents: number[];

    outTangents: number[];

    vertices: [number[]];
  }

  class System {
    /**
     * 컴퓨터 이름을 가져옵니다.
     */
    readonly machineName: string;

    /**
     * 현재 운영체제 이름을 가져옵니다.
     */
    readonly osName: string;

    /**
     * 현재 운영체제 버전을 가져옵니다.
     */
    readonly osVersion: string;

    /**
     * 현재 사용자 계정 이름을 가져옵니다.
     */
    readonly userName: string;

    /**
     * 시스템 명령을 실행합니다.
     * @param cmdLineToExecute 명령 문자열입니다.
     */
    callSystem(cmdLineToExecute: string): string;
  }

  class TextDocument extends AffectScriptInternalAPI {
    /**
     * 텍스트 채우기 여부를 가져오가나 설정합니다.
     */
    applyFill: boolean;

    /**
     * 텍스트에 윤곽선 표시 여부를 가져오거나 설정합니다.
     */
    applyStroke: boolean;

    /**
     * 텍스트가 문단으로 이루어져있는지 여부를 가져오거나 설정합니다.
     */
    readonly boxText: boolean;

    /**
     * 텍스트 상자의 크기를 가져오거나 설정합니다.
     */
    boxTextSize: number[];

    /**
     *
     */
    fillColor: Color;

    /**
     * 텍스트의 폰트를 가져오거나 설정합니다.
     */
    font: string;

    /**
     * 텍스트의 크기를 가져오거나 설정합니다.
     */
    fontSize: number;

    /**
     * 텍스트의 정렬 종류를 가져오거나 설정합니다.
     */
    justification: ParagraphJustification;

    readonly pointText: boolean;

    /**
     * 텍스트의 윤곽선 색깔을 가져오거나 설정합니다.
     */
    strokeColor: Color;

    strokeOverFill: boolean;

    /**
     * 텍스트의 윤곽선의 가로 크기를 설정합니다.
     */
    strokeWidth: number;

    /**
     * 텍스트를 가져오거나 설정합니다.
     */
    text: string;

    tracking: number;

    /**
     * 텍스트에 설정된 스타일을 초기화합니다.
     */
    resetCharStyle(): void;

    /**
     * 텍스트의 문단 설정을 초기화합니다.
     */
    resetParagraphStyle(): void;
  }

  class Viewer extends AffectScriptInternalAPI {
    /**
     * 현재 뷰어가 활성화되어있는지 여부를 가져옵니다.
     */
    readonly active: boolean;

    /**
     * 뷰어 확장 여부를 가져오거나 설정합니다.
     */
    maximized: boolean;

    /**
     * 현재 뷰어의 종류를 가져옵니다.
     */
    readonly type: ViewerType;

    /**
     * 뷰어를 활성화 상태로 만듭니다.
     */
    setActive(): boolean;
  }

  class AffectScriptAPI extends AffectScriptInternalAPI {
    /**
     * 레이어를 컴포지션에 추가합니다.
     * @param compItem 대상 컴포지션입니다.
     */
    into(compItem: CompItem): void;
  }

  type LayerType =
    | 'Text'
    | 'Solid'
    | 'Light'
    | 'Camera'
    | 'Null'
    | 'Shape'
    | 'Adjustment';

  /**
   * Affect Script를 가리키는 변수입니다.
   */
  var app: Application;
  var system: System;

  /* STDLIB */

  /**
   * 프로젝트에서 사용할 스크립트 흑은 템플릿 스크립트를 렌더러한테 알립니다.
   * @param name 사용할 스크립트 이름입니다.
   */
  function useScript(name): void;

  /**
   * 프로젝트에서 사용할 플러그인을 렌더러한테 알립니다.
   * After Effects 기본 플러그인을 사용하거나 추가로 설치한 플러그인 일 수도 있습니다.
   * @param name
   */
  function usePlugin(name): void;

  /**
   * 파일을 불러옵니다.
   * @param path 파일 경로입니다.
   */
  function file(path: String): File;

  /**
   * 컴포지션을 추가합니다.
   * @param width 컴포지션 가로 크기입니다.
   * @param height 컴포지션 세로 크기입니다.
   * @param duration 컴포지션 길이입니다. (단위는 '초' 입니다)
   * @param fps 컴포지션에서 사용할 FPS 입니다.
   * @param name 컴포지션 이름입니다.
   */
  function composition(
    width: number,
    height: number,
    duration: number,
    fps: number,
    name: string
  ): CompItem;

  /**
   * 단색 레이어를 추가합니다.
   * @param color 색깔을 [R, G, B] 형태로 나타냅니다.
   * @param name 레이어 이름입니다.
   * @param width 레이어 가로크기 입니다.
   * @param height 레이어 세로크기 입니다.
   * @param duration 레이어 길이입니다. (초단위)
   * @param comp 레이어를 추가할 컴포지션 객체입니다.
   */
  function solid(
    color: Color,
    name: String,
    width: number,
    height: number,
    duration: number,
    comp: CompItem
  ): AVLayer;

  /**
   * 텍스트 레이어를 추가합니다.
   * @param sourceText 텍스트 내용을 입력합니다.
   * @param align 텍스트를 정렬합니다.
   * @param comp 텍스트를 추가할 컴포지션 객체입니다.
   */
  function text(
    sourceText: String,
    align: ParagraphJustification,
    comp: CompItem
  ): TextLayer;

  /**
   * 푸티지 파일을 가져옵니다.
   * @param path 푸티지 파일의 경로입니다.
   * @param comp 푸티지 파일을 추가할 컴포지션입니다.
   */
  function importFootage(path: String, comp: CompItem): Layer;

  /**
   * 레이어의 크기를 조절합니다.
   * @param width 가로크기의 백분율입니다.
   * @param height 세로크기의 백분율입니다.
   * @param layer 적용할 레이어 객체입니다.
   */

  function scale(width: number, height: number, layer: Layer): void;
  /**
   * 항목을 대상에 추가합니다.
   * @param object 항목입니다.
   */
  function add(object: Object): AffectScriptAPI;

  /**
   * 컴포지션을 렌더링합니다. (플레이그라운드에서만 사용할 수 있습니다.)
   * @param compItem 렌더링할 컴포지션입니다.
   */
  function render(compItem: CompItem): void;

  /**
   * 랜덤 수를 생성합니다.
   * @param start 시작 범위입니다.
   * @param end 끝 범위입니다.
   */
  function random(start: number, end: number): number;

  /**
   * 레이어에 효과를 추가합니다.
   * @param effectName 추가할 효과 이름입니다.
   * @param layer 추가할 대상 레이어 객체입니다.
   */
  function addEffect(effectName: String, layer: Layer): Property;

  /**
   * 레이어의 위치를 변경합니다. (애니메이션을 사용하려면 setPositionAnimation 을 사용하세요)
   * @param layer: 적용할 레이어입니다.
   * @param x: X 축입니다
   * @param y: Y 축입니다
   * @param z: Z 축입니다 (3D를 사용할 경우)
   */
  function setPosition(layer: Layer, x: number, y: number, z?: number);

  /**
   * 레이어의 X축 위치를 변경합니다.
   * @param layer 변경할 레이어입니다.
   * @param x 변경할 X축의 값입니다.
   */
  function setPositionX(layer: Layer, x: number): void;

  /**
   * 레이어의 Y축 위치를 변경합니다.
   * @param layer 변경할 레이어입니다.
   * @param y 변경할 y축의 값입니다.
   */
  function setPositionY(layer: Layer, y: number): void;

  /**
   * 레이어의 Z축 위치를 변경합니다.
   * @param layer 변경할 레이어입니다.
   * @param z 변경할 Z축의 값입니다.
   */
  function setPositionZ(layer: Layer, z: number): void;

  /**
   * 레이어의 X 위치를 구합니다.
   * @param layer 위치를 구할 레이어입니다.
   */
  function getPositionX(layer: Layer): number;

  /**
   * 레이어의 Y 위치를 구합니다.
   * @param layer 위치를 구할 레이어입니다.
   */
  function getPositionY(layer: Layer): number;

  /**
   * 레이어의 Z 위치를 구합니다.
   * @param layer 위치를 구할 레이어입니다.
   */
  function getPositionZ(layer: Layer): number;

  /**
   * 애니메이션을 사용하여 레이어의 위치를 변경합니다.
   * @param layer 적용할 레이어입니다.
   * @param smoothPositionProperty 애니메이션 속성값입니다.
   */
  function setPositionAnimation(
    layer: Layer,
    smoothPositionProperty: ISmoothPositionProperty
  ): void;

  /**
   * 지지직 거리는 효과를 추가합니다.
   * @param comp 추가할 컴포지션입니다.
   * @param start 효과가 적용될 시작 시간입니다.
   * @param end 효과가 끝날 시간입니다.
   * @param count 효과의 횟수 입니다. (0을 입력할 경우 계속 나옵니다.)
   */
  function glitchEffect(
    comp: CompItem,
    start: number,
    end: number,
    count: number
  ): void;

  /**
   * RGB 형태로 지지직 거리는 효과를 추가합니다.
   * @param comp 효과를 추가할 컴포지션입니다.
   * @param start 효과가 적용될 시작 시간입니다.
   * @param end 효과가 끝날 시간입니다.
   * @param count 효과의 횟수 입니다.
   */
  function colorGlitchEffect(comp, start, end, count): void;
}
