import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ChevronDown, Mic, Image as ImageIcon, Camera, X } from "lucide-react";
import { createPortal } from "react-dom";

interface KeyboardOverlayProps {
  isOpen: boolean;
  value: string;
  onChange: (val: string) => void;
  onClose: () => void;
  onSubmit?: () => void;
  placeholder?: string;
  isRecording?: boolean;
  onVoiceStart?: (e: React.SyntheticEvent) => void;
  onVoiceEnd?: (e: React.SyntheticEvent) => void;
  onVoiceCancel?: (e: React.SyntheticEvent) => void;
  onUploadClick?: (e: React.SyntheticEvent) => void;
  uploadType?: "keyframe" | "image";
  mediaFiles?: { url: string; name: string; id?: string }[];
  onRemoveMediaFile?: (indexOrId: any) => void;
}

export function KeyboardOverlay({
  isOpen,
  value,
  onChange,
  onClose,
  onSubmit,
  placeholder = "输入对话...",
  isRecording,
  onVoiceStart,
  onVoiceEnd,
  onVoiceCancel,
  onUploadClick,
  uploadType = "keyframe",
  mediaFiles,
  onRemoveMediaFile,
}: KeyboardOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [mountedNode, setMountedNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Attempt to mount specifically to the WeChat viewport, or fallback to document.body
    const vp = document.getElementById("wechat-mini-program-viewport");
    setMountedNode(vp || document.body);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus({ preventScroll: true });
      }, 50);
    }
  }, [isOpen]);

  if (!mountedNode) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
  
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 z-50 flex flex-col bg-[#1c1c1e] shadow-[0_-10px_30px_rgba(0,0,0,0.5)] rounded-t-[20px] overflow-hidden"
        >
          {/* Media Files Preview */}
          {mediaFiles && mediaFiles.length > 0 && (
            <div className="flex gap-2 px-4 pt-3 pb-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {mediaFiles.map((m, i) => (
                <div key={i} className="relative w-14 h-14 shrink-0 rounded-[8px] border border-[#3c3c3e] overflow-hidden bg-black/40">
                  {m.url.startsWith("data:video") ? (
                    <video src={m.url} className="w-full h-full object-cover" />
                  ) : (
                    <img src={m.url} className="w-full h-full object-cover" alt="media" />
                  )}
                  <div 
                    className="absolute top-0 right-0 z-10 w-4 h-4 bg-neutral-800 rounded-full flex items-center justify-center cursor-pointer opacity-90 transition-opacity m-0.5"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onRemoveMediaFile) onRemoveMediaFile(m.id !== undefined ? m.id : i);
                    }}
                  >
                    <X size={10} className="text-white font-bold"/>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Input bar */}
          <div className="flex items-center gap-2 p-3 pb-2 pt-2">
            <div className="flex-1 bg-black/40 border border-neutral-800 rounded-full flex items-center px-4 py-1.5 relative">
              <input
                ref={inputRef}
                inputMode="none"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-transparent text-white outline-none placeholder-gray-500 text-[14px] pr-8"
              />
              {onVoiceStart && (
                <button
                  onMouseDown={onVoiceStart}
                  onMouseUp={onVoiceEnd}
                  onTouchStart={onVoiceStart}
                  onTouchEnd={onVoiceEnd}
                  onMouseLeave={onVoiceCancel}
                  className={`absolute right-1 w-7 h-7 flex items-center justify-center rounded-full transition-colors cursor-pointer select-none ${
                    isRecording
                      ? "text-blue-500 bg-white/10"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="按住说话，松开结束"
                >
                  <Mic size={16} />
                </button>
              )}
            </div>
            {onUploadClick && (
              <button
                onClick={onUploadClick}
                className={uploadType === "keyframe" ? "flex items-center justify-center bg-violet-500/20 text-violet-300 px-2.5 py-1.5 rounded-[12px] text-[11px] font-bold border border-violet-500/30 hover:bg-violet-500/30 transition-colors whitespace-nowrap active:scale-95" : "w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-neutral-400 cursor-pointer active:scale-95 transition-all"}
              >
                {uploadType === "keyframe" ? (
                  <span>选择关键帧</span>
                ) : (
                  <ImageIcon size={18} />
                )}
              </button>
            )}
            <button
              onClick={onClose}
              className="w-[34px] h-[34px] flex items-center justify-center text-neutral-400 shrink-0 active:scale-95 transition-transform"
            >
              <ChevronDown size={28} />
            </button>
          </div>

          {/* Keyboard Mock */}
          <div className="px-1.5 pt-3 pb-8 flex flex-col gap-2 bg-[#2a2a2c] mt-2 shadow-inner">
            <div className="flex justify-between px-1 gap-1.5">
              {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((k) => (
                <div
                  key={k}
                  className="flex-1 h-[42px] bg-[#4a4a4c] rounded-[6px] flex items-center justify-center text-white text-[19px] shadow-sm uppercase font-medium"
                >
                  {k}
                </div>
              ))}
            </div>
            <div className="flex justify-between px-3 gap-1.5">
              {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((k) => (
                <div
                  key={k}
                  className="flex-1 h-[42px] bg-[#4a4a4c] rounded-[6px] flex items-center justify-center text-white text-[19px] shadow-sm uppercase font-medium"
                >
                  {k}
                </div>
              ))}
            </div>
            <div className="flex justify-between gap-1.5 px-0.5">
              <div className="w-10 h-[42px] bg-[#3a3a3c] rounded-[6px] flex items-center justify-center text-white shadow-sm shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5" />
                  <path d="M5 12l7-7 7 7" />
                </svg>
              </div>
              {["z", "x", "c", "v", "b", "n", "m"].map((k) => (
                <div
                  key={k}
                  className="flex-1 h-[42px] bg-[#4a4a4c] rounded-[6px] flex items-center justify-center text-white text-[19px] shadow-sm uppercase font-medium"
                >
                  {k}
                </div>
              ))}
              <div
                className="w-10 h-[42px] bg-[#3a3a3c] rounded-[6px] flex items-center justify-center text-white shadow-sm shrink-0 cursor-pointer active:bg-neutral-600"
                onClick={() => onChange(value.slice(0, -1))}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                  <line x1="18" y1="9" x2="12" y2="15"></line>
                  <line x1="12" y1="9" x2="18" y2="15"></line>
                </svg>
              </div>
            </div>
            <div className="flex gap-1.5 px-0.5 mt-0.5">
              <div className="w-10 h-[42px] bg-[#3a3a3c] rounded-[6px] flex items-center justify-center text-white font-medium text-[15px] shadow-sm shrink-0">
                123
              </div>
              <div className="w-10 h-[42px] bg-[#3a3a3c] rounded-[6px] flex items-center justify-center text-white shadow-sm shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <div
                className="flex-1 h-[42px] bg-[#4a4a4c] rounded-[6px] flex items-center justify-center text-neutral-400 text-[13px] font-bold shadow-sm px-3 pb-1"
                onClick={() => onChange(value + " ")}
              >
                <span className="w-1/2 h-1 bg-[#2a2a2c] rounded-full mx-auto self-end mb-2 border border-[#4a4a4c]"></span>
              </div>
              <div
                className="w-16 h-[42px] bg-blue-600 rounded-[6px] flex items-center justify-center text-white font-bold shadow-sm shrink-0 cursor-pointer active:scale-95"
                onClick={onSubmit}
              >
                发送
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    mountedNode
  );
}
