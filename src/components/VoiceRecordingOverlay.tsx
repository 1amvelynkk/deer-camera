import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface VoiceRecordingOverlayProps {
  isRecording: boolean;
}

export function VoiceRecordingOverlay({ isRecording }: VoiceRecordingOverlayProps) {
  const [mountedNode, setMountedNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Attempt to mount specifically to the WeChat viewport, or fallback to document.body
    const vp = document.getElementById("wechat-mini-program-viewport");
    setMountedNode(vp || document.body);
  }, []);

  if (!isRecording || !mountedNode) return null;

  return createPortal(
    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-end z-[100] rounded-[38px] animate-fade-in pointer-events-none overflow-hidden">
      {/* Bottom Gradient Overlay */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[400px] flex flex-col items-center justify-end pb-12"
        style={{
          background: "radial-gradient(circle at center bottom, rgba(14,165,233,1) 0%, rgba(14,165,233,0.8) 40%, transparent 70%)"
        }}
      >
        <p className="text-white text-[14px] font-medium tracking-wide mb-8 drop-shadow-md">
          松手发送，上移取消
        </p>
        
        {/* Sound Wave Dots */}
        <div className="flex items-center justify-center gap-[3px] h-6 px-4">
          {Array.from({ length: 45 }).map((_, i) => {
            // Some slight random variation for a "voice" feel but mostly standard height
            const height = Math.random() > 0.5 ? 5 : 4;
            return (
              <div 
                key={i}
                className="w-1 bg-white/90 rounded-full transition-all duration-75"
                style={{ height: `${height}px` }}
              />
            )
          })}
        </div>
      </div>
    </div>,
    mountedNode
  );
}

