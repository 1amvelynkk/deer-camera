import React, { useState, useRef, useEffect } from "react";
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
} from "lucide-react";
import { VideoTemplate } from "../types";

import { KeyboardOverlay } from "./KeyboardOverlay";
import { VoiceRecordingOverlay } from "./VoiceRecordingOverlay";

interface CreateTabProps {
  onKeyframeModalOpen?: () => void;
  selectedKeyframes?: VideoTemplate[];
  onRemoveKeyframe?: (id: string) => void;
  onStartChat: (
    prompt: string,
    template: VideoTemplate | null,
    resolution: string,
    duration: string,
    isSmartStoryboard?: boolean,
    materials?: string[],
  ) => void;
  onSelectTemp: (temp: VideoTemplate) => void;
  isKeyboardOpen: boolean;
  setIsKeyboardOpen: (isOpen: boolean) => void;
  isLoggedIn: boolean;
  setShowLoginModal: (v: boolean) => void;
}

export default function CreateTab({
  onStartChat,
  isLoggedIn,
  setShowLoginModal,
  onKeyframeModalOpen,
  selectedKeyframes = [],
  onRemoveKeyframe,
  isKeyboardOpen,
  setIsKeyboardOpen,
}: CreateTabProps) {
  const [inputText, setInputText] = useState("");
  const [isSmartStoryboard, setIsSmartStoryboard] = useState(true);

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
  const [mediaFiles, setMediaFiles] = useState<{ url: string; name: string; size: number }[]>(
    [],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    if (files.length === 0) return;

    if (mediaFiles.length + files.length > 3) {
      alert("最多上传3个素材");
      return;
    }

    const hasOversizedFile = files.some(f => f.size > 10 * 1024 * 1024);
    if (hasOversizedFile) {
      alert("单个大小不超过10MB");
      return;
    }

    const newFiles = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
    }));
    setMediaFiles((prev) => [...prev, ...newFiles]);
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

    // MOCK: Simulate speech recognition result and append to input text
    const mockSpeechText =
      "我想通过语音生成一个高科技感的概念宣传片，节奏明快，极具视觉冲击力。";
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
    if (!inputText.trim() && selectedKeyframes.length === 0 && mediaFiles.length === 0) return;
    onStartChat(
      inputText || "生成优质视频",
      null,
      selectedResolution,
      selectedDuration,
      false,
      mediaFiles.map((m) => m.url),
    );
    setMediaFiles([]);
    setInputText("");
  };

  return (
    <div
      id="create-tab"
      className="flex flex-col h-full bg-[#0a0a0a] text-neutral-200 select-none overflow-y-auto overflow-x-hidden pb-12 w-full font-sans"
    >
      {/* Real-time Voice Recording overlay */}
      <VoiceRecordingOverlay isRecording={isRecording} />

      {/* Action Sheet overlay for Upload removed */}

      <div className="px-6 space-y-5 flex-1 w-full pb-20 mt-1 max-w-[380px] mx-auto">
        {/* Material Upload Box */}
        <div className="space-y-2 w-full">
          <h4 className="text-[14px] font-bold text-white px-1 flex justify-between items-center">
            <span>素材上传</span>
          </h4>
          <div
            onClick={() => {
              if (!isLoggedIn) {
                setShowLoginModal(true);
                return;
              }
              fileInputRef.current?.click();
            }}
            className="w-full bg-[#1c1c1e] rounded-[16px] border border-[#2c2c2e]/50 min-h-[90px] flex flex-col items-center justify-center p-3 cursor-pointer hover:bg-[#252528] transition-colors relative overflow-hidden"
          >
            {mediaFiles && mediaFiles.length > 0 ? (
              <div className="w-full grid grid-cols-4 gap-2">
                {mediaFiles.map((kf, i) => (
                  <div
                    key={i}
                    className="relative aspect-square w-full rounded-[14px] overflow-visible group"
                  >
                    <div className="w-full h-full overflow-hidden rounded-[14px] border border-[#3c3c3e] bg-white flex flex-col justify-center items-center relative">
                      <img
                        src={kf.url}
                        alt="Uploaded"
                        className="w-full h-auto max-h-full object-contain"
                      />
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setMediaFiles((prev) => prev.filter((_, idx) => idx !== i));
                      }}
                      className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-neutral-600/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-neutral-500 transition-colors shadow-sm z-10"
                    >
                      <X size={14} className="text-white" />
                    </div>
                  </div>
                ))}
                {mediaFiles.length < 3 && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="relative aspect-square w-full rounded-[14px] flex items-center justify-center border border-[#3c3c3e] bg-transparent text-neutral-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <Plus size={24} />
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center space-y-3">
                <Plus size={24} className="text-[#6c6c70] stroke-[2]" />
                <div className="text-[10px] text-[#6c6c70] font-medium leading-relaxed">
                  最多上传3个，单个大小不超过10MB
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Text Area Box */}
        <div className="space-y-2">
          <h4 className="text-[14px] font-bold text-white px-1">文生视频</h4>
          <div className="bg-[#1c1c1e] rounded-[16px] border border-[#2c2c2e]/50 flex flex-col min-h-[140px] focus-within:border-neutral-600 transition-colors relative">
            <textarea
              readOnly
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onClick={() => setIsKeyboardOpen(true)}
              placeholder="我想做一个产品售后维保的视频，体现专业、高效的服务态度，场景包含工人登入、检修设备、与客户微笑核验单据，结尾展现品牌Logo。"
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
            <div className="flex flex-wrap gap-2 px-3 pb-3 w-full">
              {[
                "科技风智能化制药生产线宣传视频",
                "现代风格十万级无菌车间介绍视频",
                "大气企业品牌科技感形象展示片",
              ].map((text, idx) => (
                <button
                  key={idx}
                  onClick={() => setInputText(text)}
                  className="bg-[#2c2c2e]/40 hover:bg-[#3c3c3e] border border-[#3c3c3e]/50 px-2.5 py-1 rounded-[8px] text-[10px] text-neutral-400 font-medium active:scale-95 transition-all text-left"
                >
                  {text}
                </button>
              ))}
            </div>
            
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
                     if (onKeyframeModalOpen) onKeyframeModalOpen();
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

        {/* Smart Storyboard Toggle Removed */}
      </div>

      {/* Floating Bottom Bar Container (fixed to bottom of viewport relative to tab) */}
      <div className="absolute bottom-16 sm:bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent pt-8">
        <div className="flex justify-end gap-3 h-[46px]">
          <button
            onClick={inputText.trim() ? handleGenerateClick : undefined}
            disabled={!inputText.trim()}
            className={`w-full rounded-full text-[14.5px] font-extrabold flex items-center justify-center gap-1.5 transition-all
              ${
                inputText.trim()
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:brightness-110 active:brightness-95 text-white shadow-[0_4px_16px_rgba(59,130,246,0.3)]"
                  : "bg-neutral-800 text-neutral-500"
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
          if (onKeyframeModalOpen) onKeyframeModalOpen();
        }}
      />
    </div>
  );
}
