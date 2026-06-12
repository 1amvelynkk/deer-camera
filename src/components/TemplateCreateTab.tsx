import React, { useState, useRef } from "react";
import {
  X,
  ChevronDown,
  Sparkles,
  BookA,
  Wand2,
  Info,
  Plus,
  ArrowUp,
  Mic,
  Camera,
  Image as ImageIcon,
  Check,
  ChevronLeft,
  MoreHorizontal,
  Circle
} from "lucide-react";
import { VideoTemplate } from "../types";

import { KeyboardOverlay } from "./KeyboardOverlay";
import { VoiceRecordingOverlay } from "./VoiceRecordingOverlay";

interface TemplateCreateTabProps {
  template: VideoTemplate;
  myKeyframes?: VideoTemplate[];
  selectedKeyframes?: VideoTemplate[];
  onAddKeyframes?: (kfs: VideoTemplate[]) => void;
  onRemoveKeyframe?: (id: string) => void;
  onStartChat: (
    prompt: string,
    template: VideoTemplate | null,
    resolution: string,
    duration: string,
    isSmartStoryboard?: boolean,
    materials?: string[],
  ) => void;
  isKeyboardOpen: boolean;
  setIsKeyboardOpen: (isOpen: boolean) => void;
  isLoggedIn: boolean;
  setShowLoginModal: (v: boolean) => void;
  onBack: () => void;
}

export default function TemplateCreateTab({
  template,
  onStartChat,
  isLoggedIn,
  setShowLoginModal,
  myKeyframes = [],
  selectedKeyframes = [],
  onAddKeyframes,
  onRemoveKeyframe,
  isKeyboardOpen,
  setIsKeyboardOpen,
  onBack
}: TemplateCreateTabProps) {
  const [inputText, setInputText] = useState(template.description || template.title || "");
  const [showKeyframeModal, setShowKeyframeModal] = useState(false);
  const [localSelectedKfs, setLocalSelectedKfs] = useState<VideoTemplate[]>([]);

  React.useEffect(() => {
    if (showKeyframeModal) {
      setLocalSelectedKfs(selectedKeyframes || []);
    }
  }, [showKeyframeModal, selectedKeyframes]);

  // Settings
  const [selectedResolution, setSelectedResolution] = useState<
    "1080p" | "4K" | "720p"
  >("1080p");
  const [selectedDuration, setSelectedDuration] = useState<
    "10-20s" | "1-15s" | "自动"
  >("10-20s");

  const [showResolutionPicker, setShowResolutionPicker] = useState(false);
  const [showDurationPicker, setShowDurationPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showUploadMenu, setShowUploadMenu] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [mediaFiles, setMediaFiles] = useState<
    ({ url: string; name: string } | null)[]
  >([null, null, null]);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    if (files.length === 0 || activeSlot === null) return;
    
    const hasOversizedFile = files.some(f => f.size > 10 * 1024 * 1024);
    if (hasOversizedFile) {
      alert("单个大小不超过10MB");
      return;
    }

    const newFiles = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setMediaFiles((prev) => {
      const next = [...prev];
      next[activeSlot] = newFiles[0];
      return next;
    });
    setActiveSlot(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleVoiceStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setIsRecording(true);
  };

  const handleVoiceEnd = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isRecording) return;
    setIsRecording(false);

    const mockSpeechText =
      "通过语音补充要求。";
    setInputText((prev) =>
      prev ? prev + " " + mockSpeechText : mockSpeechText,
    );
  };

  const handleVoiceCancel = () => {
    if (isRecording) {
      setIsRecording(false);
    }
  };

  const handleGenerateClick = () => {
    handleSendPrompt();
  };

  const handleSendPrompt = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    onStartChat(
      inputText || "生成优质视频",
      template,
      selectedResolution,
      selectedDuration,
      false,
      mediaFiles.filter(Boolean).map((m) => m!.url),
    );
    setMediaFiles([null, null, null]);
  };

  return (
    <div
      id="template-create-tab"
      className="flex flex-col h-full bg-[#0a0a0a] text-neutral-200 select-none overflow-y-auto overflow-x-hidden pb-12 w-full font-sans"
    >
      <div className="bg-[#0a0a0a] shrink-0 pt-11 pb-3 px-4 border-b border-[#1c1c1e] flex items-center justify-between shadow-3xs sticky top-0 z-20">
        <button
          onClick={onBack}
          className="p-1 -ml-1.5 mr-1 hover:bg-neutral-800 active:scale-90 rounded-full transition-all inline-flex items-center justify-center cursor-pointer text-white"
        >
          <ChevronLeft size={18} className="stroke-[2.5]" />
        </button>

        <div className="overflow-hidden flex-1 flex items-center">
          <span className="text-[15px] font-black tracking-wide text-white truncate">
            基于模版生成
          </span>
        </div>
        
        {/* WeChat Standard capsule keys ... o */}
        <div className="border rounded-full px-3 py-1 flex items-center gap-2.5 shadow-3xs scale-95 translate-y-[2px] border-neutral-700 bg-neutral-800 text-white shrink-0">
          <MoreHorizontal
            size={14}
            className="cursor-pointer hover:opacity-75"
          />
          <div className="w-[1px] h-3 bg-neutral-600" />
          <div className="relative flex items-center justify-center text-inherit">
            <Circle size={8} className="fill-current stroke-current" />
            <Circle
              size={12}
              className="absolute stroke-current stroke-[1.2]"
            />
          </div>
        </div>
      </div>

      <VoiceRecordingOverlay isRecording={isRecording} />

      <div className="px-6 space-y-5 flex-1 w-full pb-20 mt-4 max-w-[380px] mx-auto">
        <div className="space-y-2 w-full pt-2">
          <h4 className="text-[14px] font-bold text-white px-1 flex justify-between items-center">
            <span>素材上传</span>
            <span className="text-neutral-500 font-normal text-[10px]">最多上传3个，单个大小不超过10MB</span>
          </h4>
          <div
            className="w-full bg-[#1c1c1e] rounded-[16px] border border-[#2c2c2e]/50 flex flex-col items-center justify-center p-3 relative overflow-hidden"
          >
            <div className="w-full grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => {
                const media = mediaFiles[i];
                const labels = ["上传产品1图片", "上传企业门头", "上传工厂实拍"];
                return (
                  <div
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!media) {
                        if (!isLoggedIn) {
                          setShowLoginModal(true);
                          return;
                        }
                        setActiveSlot(i);
                        fileInputRef.current?.click();
                      }
                    }}
                    className="relative aspect-square w-full rounded-[14px] bg-[#2c2c2e]/40 flex flex-col items-center justify-center border border-[#3c3c3e] cursor-pointer hover:bg-[#3c3c3e]/60 transition-colors"
                  >
                    {media ? (
                      <>
                        <div className="w-full h-full overflow-hidden rounded-[14px] bg-white flex flex-col justify-center items-center relative">
                          <img
                            src={media.url}
                            alt="Uploaded"
                            className="w-full h-auto max-h-full object-contain"
                          />
                        </div>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setMediaFiles((prev) => {
                              const next = [...prev];
                              next[i] = null;
                              return next;
                            });
                          }}
                          className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-neutral-600/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-500 transition-colors shadow-sm z-10"
                        >
                          <X size={14} className="text-white" />
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center space-y-1.5 opacity-60">
                        <Plus size={20} className="text-[#8c8c90] stroke-[2.5]" />
                        <span className="text-[9px] text-[#8c8c90] font-medium leading-relaxed px-1">{labels[i]}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-[14px] font-bold text-white px-1">文生视频</h4>
          <div className="bg-[#1c1c1e] rounded-[16px] border border-[#2c2c2e]/50 flex flex-col min-h-[140px] focus-within:border-neutral-600 transition-colors relative">
            <textarea
              readOnly
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onClick={() => setIsKeyboardOpen(true)}
              placeholder="添加你想要的指令..."
              className="w-full flex-1 bg-transparent resize-none outline-none text-[13px] text-white placeholder-[#6c6c70] p-3.5 pr-12 leading-relaxed cursor-pointer"
              rows={4}
            />
            {!isKeyboardOpen && (
              <button
                onMouseDown={handleVoiceStart}
                onMouseUp={handleVoiceEnd}
                onTouchStart={handleVoiceStart}
                onTouchEnd={handleVoiceEnd}
                onMouseLeave={handleVoiceCancel}
                className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer select-none ${isRecording ? "text-blue-500 bg-white/10" : "text-neutral-400 hover:text-white hover:bg-white/10"}`}
                title="按住说话，松开结束"
              >
                <Mic size={18} />
              </button>
            )}

            {selectedKeyframes && selectedKeyframes.length > 0 && (
              <div className="px-3 pb-3 flex flex-wrap gap-2">
                 {selectedKeyframes.map((kf, i) => (
                    <div key={i} className="relative w-12 h-12 rounded-md overflow-hidden bg-white/10 group">
                       <img src={kf.image} className="w-full h-full object-cover" />
                       <div 
                          className="absolute top-0 right-0 z-10 w-4 h-4 bg-neutral-800 rounded-full flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity m-0.5"
                          onClick={(e) => {
                             e.stopPropagation();
                             if (onRemoveKeyframe) onRemoveKeyframe(kf.id);
                          }}
                       >
                         <X size={10} className="text-white font-bold"/>
                       </div>
                    </div>
                 ))}
              </div>
            )}
            <div className="flex justify-between items-center px-3 pb-3 text-[#aaaaaa]">
              <div className="flex items-center gap-2 relative">
                <button
                  onClick={() => {
                    setShowResolutionPicker(!showResolutionPicker);
                    setShowDurationPicker(false);
                  }}
                  className="flex items-center gap-1 bg-[#2c2c2e]/60 hover:bg-[#3c3c3e] px-2.5 py-1.5 rounded-[8px] text-[11px] text-white transition-colors"
                >
                  <span>{selectedResolution}</span>
                  <ChevronDown size={13} />
                </button>
                {showResolutionPicker && (
                  <div className="absolute top-8 left-0 bg-[#2c2c2e] border border-[#3c3c3e] shadow-xl rounded-xl p-1.5 w-24 z-30 space-y-1">
                    {["1080p", "4K", "720p"].map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setSelectedResolution(r as "1080p" | "4K" | "720p");
                          setShowResolutionPicker(false);
                        }}
                        className="w-full text-left text-[11px] px-2.5 py-2 hover:bg-[#3c3c3e] hover:text-white rounded-lg flex items-center justify-between font-bold text-[#aaaaaa]"
                      >
                        <span>{r}</span>
                        {selectedResolution === r && (
                          <Check size={12} className="text-white" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => {
                    setShowDurationPicker(!showDurationPicker);
                    setShowResolutionPicker(false);
                  }}
                  className="flex items-center gap-1 bg-[#2c2c2e]/60 hover:bg-[#3c3c3e] px-2.5 py-1.5 rounded-[8px] text-[11px] text-white transition-colors"
                >
                  <span>{selectedDuration}</span>
                  <ChevronDown size={13} />
                </button>
                {showDurationPicker && (
                  <div className="absolute top-8 left-16 bg-[#2c2c2e] border border-[#3c3c3e] shadow-xl rounded-xl p-1.5 w-28 z-30 space-y-1">
                    {["10-20s", "1-15s", "自动"].map((d) => (
                      <button
                        key={d}
                        onClick={() => {
                          setSelectedDuration(d as "10-20s" | "1-15s" | "自动");
                          setShowDurationPicker(false);
                        }}
                        className="w-full text-left text-[11px] px-2.5 py-2 hover:bg-[#3c3c3e] hover:text-white rounded-lg flex items-center justify-between font-bold text-[#aaaaaa]"
                      >
                        <span>{d}</span>
                        {selectedDuration === d && (
                          <Check size={12} className="text-white" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className={`relative ${isKeyboardOpen ? "hidden" : ""}`}>
                <button
                  onClick={(e) => {
                     e.preventDefault();
                     if (!isLoggedIn) {
                        setShowLoginModal(true);
                        return;
                     }
                     setShowKeyframeModal(true);
                  }}
                  className="flex items-center justify-center bg-violet-500/20 text-violet-300 px-2.5 py-1.5 rounded-[12px] text-[11px] font-bold border border-violet-500/30 hover:bg-violet-500/30 transition-colors whitespace-nowrap active:scale-95"
                >
                  <span>选择关键帧</span>
                </button>
              </div>
            </div>
          </div>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/jpeg,image/png,video/mp4,video/quicktime"
            className="hidden"
          />
          <input
            type="file"
            ref={cameraInputRef}
            onChange={handleFileChange}
            accept="image/jpeg,image/png,video/mp4,video/quicktime"
            capture="environment"
            className="hidden"
          />
        </div>
      </div>

      <div className="absolute bottom-16 sm:bottom-[10px] left-0 w-full p-4 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent pt-8">
        <div className="flex justify-end gap-3 h-[46px]">
          <button
            onClick={mediaFiles.filter(Boolean).length >= 1 ? handleGenerateClick : undefined}
            disabled={mediaFiles.filter(Boolean).length < 1}
            className={`w-full rounded-full text-[14.5px] font-extrabold flex items-center justify-center gap-1.5 transition-all
              ${
                mediaFiles.filter(Boolean).length >= 1
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:brightness-110 active:brightness-95 text-white shadow-[0_4px_16px_rgba(59,130,246,0.3)]"
                  : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
              }`}
          >
            下一步
          </button>
        </div>
      </div>

      <KeyboardOverlay
        isOpen={isKeyboardOpen}
        value={inputText}
        onChange={setInputText}
        onClose={() => setIsKeyboardOpen(false)}
        onSubmit={() => {
          setIsKeyboardOpen(false);
          handleGenerateClick();
        }}
        isRecording={isRecording}
        onVoiceStart={handleVoiceStart}
        onVoiceEnd={handleVoiceEnd}
        onVoiceCancel={handleVoiceCancel}
        mediaFiles={selectedKeyframes?.map((kf) => ({ url: kf.image, name: kf.style || "keyframe", id: kf.id }))}
        onRemoveMediaFile={(id) => {
          if (onRemoveKeyframe) onRemoveKeyframe(id);
        }}
        onUploadClick={(e) => {
          e.preventDefault();
          if (!isLoggedIn) {
            setShowLoginModal(true);
            return;
          }
          setShowKeyframeModal(true);
        }}
      />

      {/* Select Keyframe Modal for TemplateCreateTab */}
      {showKeyframeModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[70] rounded-[40px] select-none animate-fade-in p-5 pb-14">
          <div className="bg-[#1c1c1e] shadow-[0_16px_40px_rgba(0,0,0,0.5)] border border-white/10 w-full h-[85%] max-h-[680px] rounded-[32px] flex flex-col overflow-hidden relative text-white">
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#2c2c2e] z-10">
              <h3 className="text-[16px] font-black tracking-tight flex items-center gap-2 text-white/90">
                <Sparkles size={16} className="text-blue-500" />
                选择我的关键帧
              </h3>
              <button
                type="button"
                onClick={() => setShowKeyframeModal(false)}
                className="p-1.5 bg-white/10 text-white/70 rounded-full hover:bg-white/20 active:scale-95 transition-all outline-none"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 bg-[#1c1c1e]">
              {myKeyframes.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 pb-10">
                  <Sparkles size={32} className="text-white/20" />
                  <p className="text-white/50 text-xs mt-2">
                    您还没有保存的关键帧
                  </p>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="flex-1 overflow-y-auto pb-4">
                    <div className="grid grid-cols-3 gap-3 pb-10">
                      {myKeyframes.map((kf) => (
                        <div
                          key={kf.id}
                          onClick={() => {
                            setLocalSelectedKfs((prev) =>
                              prev.some((p) => p.id === kf.id)
                                ? prev.filter((p) => p.id !== kf.id)
                                : [...prev, kf],
                            );
                          }}
                          className={`group bg-[#2c2c2e] rounded-xl overflow-hidden border cursor-pointer active:scale-[0.98] transition-all relative flex flex-col shadow-sm ${localSelectedKfs.some((p) => p.id === kf.id) ? "border-blue-500 ring-2 ring-blue-500/30 shadow-md" : "border-white/10 hover:border-blue-500/50"}`}
                        >
                          <div className="relative w-full aspect-[9/16] overflow-hidden bg-black/50 shrink-0">
                            <img
                              src={kf.image}
                              alt={kf.title}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-black/45 backdrop-blur-xs text-white px-2 py-0.5 text-[9px] rounded-sm font-bold scale-90 origin-top-left z-20">
                              {kf.style || "关键帧"}
                            </span>
                          </div>
                          <div className="px-2.5 py-2.5 bg-[#2c2c2e] flex items-center justify-between border-t border-white/5">
                            <h4 className="text-[11px] font-bold text-white/90 tracking-tight truncate flex-1">
                              {kf.title.replace(/·/g, " ").trim()}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex mt-2 shrink-0 pb-2">
                    <button
                      type="button"
                      onClick={() => {
                        setShowKeyframeModal(false);
                        if (onAddKeyframes) {
                          onAddKeyframes(localSelectedKfs);
                        }
                      }}
                      className="w-full h-11 rounded-xl font-bold text-[13px] transition-all flex items-center justify-center gap-2 shadow-md bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-blue-600/20 cursor-pointer"
                    >
                      <span>确认选择</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
