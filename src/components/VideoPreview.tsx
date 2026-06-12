import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  MoreHorizontal,
  Circle,
  Star,
  Share2,
  Play,
  Pause,
  Sparkles,
  X,
  Link as LinkIcon,
  MoreHorizontal as MoreHorizontalIcon,
  Volume2,
  VolumeX,
  ChevronDown,
  Download,
  CheckCircle2,
  User,
  Music,
  Trash2,
  Bookmark,
  Image as ImageIcon,
  CreditCard,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { VideoTemplate } from "../types";

export function WeiboIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.14,10.41A7.64,7.64,0,0,0,16.59,4a8.31,8.31,0,0,0-1.89.2A11.75,11.75,0,0,0,9,2.44,11.39,11.39,0,0,0,5.78,2,6,6,0,0,0,4.64,2.11C2.51,2.54.54,4.2.09,6.72a6.45,6.45,0,0,0,.68,4c-1,1.54-1.42,3-.94,4.42,1.38,3.95,7,7.09,13.23,7.09,7.6,0,11.45-4.46,11.45-8.55A6.09,6.09,0,0,0,23.14,10.41ZM14.15,19.34C9.53,19.86,5.33,17.43,4.78,14a4.13,4.13,0,0,1,1.52-3.8c1.69-1.29,4.42-1.39,6.54-1.1-1.31-.63-2.61-1.55-2.22-2.58.33-.87,1.75-.82,3.32-.4,0,0-.43-1.07-.15-1.55.43-.72,1.9.15,3,1.31,3.46,3.61,1.14,9.22-2.64,9.46Zm-2.1-4c-2,.2-3.88-1-4.14-2.7S9,9.43,11,9.22s3.88,1,4.14,2.7S14.07,15.11,12.05,15.31Zm-2.3-2.14a1,1,0,0,0,.15-1.42,1,1,0,0,0-1.41-.14,1.06,1.06,0,0,0-.15,1.42A1,1,0,0,0,9.75,13.17Z" />
    </svg>
  );
}

export function QQIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.56,15.82a17.2,17.2,0,0,0-1.78-2.64A7.47,7.47,0,0,0,21.5,10c0-6-5-10-9.5-10S2.5,4,2.5,10a7.47,7.47,0,0,0,.72,3.18,17.2,17.2,0,0,0-1.78,2.64A2,2,0,0,0,3,18.78c1.37.56,3.23.83,5,1-1,.47-1.3,1.37-1,2S8.93,23,12,23s4-1.12,4.36-2a2.31,2.31,0,0,0-1-2c1.78-.17,3.64-.44,5-1a2,2,0,0,0,1.56-2.94C21.65,14.65,22.25,15.35,22.56,15.82ZM12,19.22a5.45,5.45,0,0,1-4.8-2.58A6,6,0,0,1,12,17a6,6,0,0,1,4.8-.38A5.45,5.45,0,0,1,12,19.22Z" />
    </svg>
  );
}

export function WechatIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.94,11.53c-2.42,0-4.38-1.57-4.38-3.5S14.52,4.53,16.94,4.53s4.38,1.57,4.38,3.5S19.36,11.53,16.94,11.53Zm-.52-4.9a.74.74,0,1,1-.75.74A.75.75,0,0,1,16.42,6.63Zm1.84,0a.74.74,0,1,1-.74.74A.74.74,0,0,1,18.26,6.63Z" />
      <path d="M8.88,14.4c.16,0,.31,0,.47,0,3.32,0,6-2.18,6-4.87a4.67,4.67,0,0,0-.73-2.5C14.07,3.58,10.82,1,7.05,1A7,7,0,0,0,0,8c0,2.15,1.21,4,3.08,5.27L2.43,15.5l2.42-1.28A7.83,7.83,0,0,0,7.05,15C7.65,15,8.27,14.77,8.88,14.4Zm-3.52-8.3a1,1,0,1,1-1,.9A1,1,0,0,1,5.36,6.1Zm3.69,0a1,1,0,1,1-.95.9A1,1,0,0,1,9,6.1Z" />
      <path d="M24,14.8c0-2.31-2.29-4.18-5.11-4.18a5.55,5.55,0,0,0-4.16,1.86,5.37,5.37,0,0,0-1,3.22A4.28,4.28,0,0,0,17.7,19a6.66,6.66,0,0,0,2.1.28,4.92,4.92,0,0,0,2-.37l1.7.92-.47-1.63A4.25,4.25,0,0,0,24,14.8Zm-6.52-2a.66.66,0,1,1-.65.65.65.65,0,0,1,.65-.65Zm3.08,0a.66.66,0,1,1-.65.65A.65.65,0,0,1,20.56,12.8Z" />
    </svg>
  );
}

export function ApertureIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m14.31 8 5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="m7.38 12 5.74-9.94" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="m16.62 12-5.74 9.94" />
    </svg>
  );
}

interface VideoPreviewProps {
  template: VideoTemplate;
  onBack: () => void;
  onMakeNow: () => void;
  onSaveKeyframe?: (title?: string, desc?: string, image?: string, style?: string) => void;
  isMyKeyframePreview?: boolean;
  isLoggedIn: boolean;
  setShowLoginModal: (v: boolean) => void;
  isFavorited?: boolean;
  onToggleFavorite?: () => void;
  onShare?: () => void;
  onDownload?: () => void;
}

export default function VideoPreview({
  template,
  onBack,
  onMakeNow,
  onSaveKeyframe,
  isMyKeyframePreview,
  isLoggedIn,
  setShowLoginModal,
  isFavorited = false,
  onToggleFavorite,
  onShare,
  onDownload,
}: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(7); // default 00:07 like photo or 00:20
  const [showMetadata, setShowMetadata] = useState(true); // Toggle between Image 2 & Image 3 states!

  // Editing state for my keyframes
  const [editedTitle, setEditedTitle] = useState(
    template.title.replace(/·/g, " ").trim(),
  );
  const [editedDesc, setEditedDesc] = useState(template.description);

  // Segment sequences for generated video
  const [segments, setSegments] = useState([
    {
      id: 1,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400",
      text: "欢迎来到未来科技的沉浸体验",
      duration: 12.0,
    },
    {
      id: 2,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
      text: "顶尖的数据处理中心与运算能力",
      duration: 8.5,
    },
    {
      id: 3,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      text: "微小芯片驱动万物互联的每一步",
      duration: 10.2,
    },
    {
      id: 4,
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400",
      text: "模块化设计，从这里开始了解",
      duration: 9.3,
    },
  ]);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const [subtitleSelected, setSubtitleSelected] = useState(true);
  const [editingSubtitleId, setEditingSubtitleId] = useState<
    string | number | null
  >(null);
  const [isDraggingSubtitle, setIsDraggingSubtitle] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showBackgroundMusic, setShowBackgroundMusic] = useState(true);
  const [segmentTransforms, setSegmentTransforms] = useState<
    Record<number | string, { scale: number; rotation: number }>
  >({});
  useEffect(() => {
    setSubtitleSelected(true);
  }, [activeSegmentIndex]);

  const currentScale = segmentTransforms[activeSegmentIndex]?.scale ?? 1;
  const currentRotation = segmentTransforms[activeSegmentIndex]?.rotation ?? 0;
  const [toastMessage, setToastMessage] = useState("");
  const [duplicatedSubtitles, setDuplicatedSubtitles] = useState<any[]>([]);

  const subtitleRef = useRef<HTMLDivElement>(null);
  const [showSaveKeyframeOverlay, setShowSaveKeyframeOverlay] = useState(false);
  const [keyframeScreenshot, setKeyframeScreenshot] = useState<string>("");

  const transformState = useRef({
    isTransforming: false,
    startX: 0,
    startY: 0,
    startScale: 1,
    startRotation: 0,
    centerX: 0,
    centerY: 0,
  });

  const handleTransformPointerDown = (
    e: any,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (!subtitleRef.current) return;

    setIsDraggingSubtitle(true);

    const rect = subtitleRef.current.getBoundingClientRect();
    transformState.current = {
      isTransforming: true,
      startX: e.clientX,
      startY: e.clientY,
      startScale: currentScale,
      startRotation: currentRotation,
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
    };

    const handlePointerMove = (moveEvent: PointerEvent) => {
      moveEvent.preventDefault();

      const { centerX, centerY, startX, startY, startScale, startRotation } =
        transformState.current;

      const startDist = Math.hypot(startX - centerX, startY - centerY);
      const currentDist = Math.hypot(
        moveEvent.clientX - centerX,
        moveEvent.clientY - centerY,
      );

      const scaleDelta = startDist > 0 ? currentDist / startDist : 1;
      const newScale = Math.max(0.5, Math.min(3, startScale * scaleDelta));

      const startAngle = Math.atan2(startY - centerY, startX - centerX);
      const currentAngle = Math.atan2(
        moveEvent.clientY - centerY,
        moveEvent.clientX - centerX,
      );

      let newRotation =
        startRotation + (currentAngle - startAngle) * (180 / Math.PI);

      setSegmentTransforms((prev) => ({
        ...prev,
        [activeSegmentIndex]: {
          scale: newScale,
          rotation: newRotation,
        },
      }));
    };

    const handlePointerUp = () => {
      transformState.current.isTransforming = false;
      setTimeout(() => setIsDraggingSubtitle(false), 50);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000);
  };

  const totalDuration = segments.reduce((acc, curr) => acc + curr.duration, 0);

  // Simple video player simulator progression
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= totalDuration) {
            return 0; // loop
          }
          return prev + 0.1 * playbackRate; // update every 100ms
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalDuration, playbackRate]);

  // Sync progress to active segment
  useEffect(() => {
    let acc = 0;
    for (let i = 0; i < segments.length; i++) {
      acc += segments[i].duration;
      if (progress <= acc) {
        if (activeSegmentIndex !== i) {
          setActiveSegmentIndex(i);
        }
        break;
      }
    }
  }, [progress, segments, activeSegmentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
      videoRef.current.playbackRate = playbackRate;
    }
  }, [isPlaying, activeSegmentIndex, playbackRate]);

  const formatTime = (sec: number) => {
    const s = Math.floor(sec);
    return `00:${s < 10 ? "0" + s : s}`;
  };

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  };

  const isGeneratedSuccess = template.id.startsWith("generated_");

  if (isGeneratedSuccess) {
    return (
      <div
        id="generated-video-result"
        className="absolute inset-0 bg-[#18181b] z-30 flex flex-col justify-between overflow-hidden rounded-[40px] font-sans"
      >
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-[13px] font-medium shadow-lg whitespace-nowrap"
            >
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 px-6 pt-11 pb-3 flex items-center justify-between border-b border-white/10 shrink-0 bg-[#18181b] shadow-sm">
          <button
            onClick={onBack}
            className="flex items-center justify-center text-white transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft size={24} className="stroke-[2.5]" />
          </button>
          <div className="text-[17px] font-extrabold text-white tracking-tight">
            生成结果
          </div>
          <div className="w-6" /> {/* Placeholder for balance */}
        </div>

        {/* Video Area */}
        <div className="flex-1 min-h-0 relative flex flex-col bg-transparent">
          {/* Center 9:16 Video Box */}
          <div className="flex-1 min-h-0 w-full flex items-center justify-center p-3 pb-0">
            {/* Center 9:16 Video Box Static Wrapper for Absolute Positioning */}
            <div className="relative h-full aspect-[9/16] shrink-0 max-w-full">
              {/* Floating Side Buttons (Moved outside scaling wrapper) */}
              <div className="absolute -right-[46px] top-[15%] w-[48px] flex flex-col items-center gap-4 z-20">
                <div className="flex flex-col items-center gap-1 cursor-pointer group/btn active:scale-95 transition-transform">
                  <button className="flex items-center justify-center bg-white/20 backdrop-blur-md shadow-md rounded-full w-9 h-9 border border-white/30">
                    <User size={16} className="text-white" />
                  </button>
                  <span className="text-[9px] font-bold text-white/90 drop-shadow-sm">
                    音效
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer group/btn active:scale-95 transition-transform">
                  <button className="flex items-center justify-center bg-white/20 backdrop-blur-md shadow-md rounded-full w-9 h-9 border border-white/30">
                    <Music size={16} className="text-white" />
                  </button>
                  <span className="text-[9px] font-bold text-white/90 drop-shadow-sm whitespace-nowrap">
                    背景音乐
                  </span>
                </div>
                <AnimatePresence>
                  {onSaveKeyframe && segments.length > 0 && progress >= 6 && progress % 6 < 2 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center gap-1 cursor-pointer group/btn active:scale-95 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(false);
                        
                        if (videoRef.current) {
                          try {
                            const canvas = document.createElement("canvas");
                            canvas.width = videoRef.current.videoWidth;
                            canvas.height = videoRef.current.videoHeight;
                            const ctx = canvas.getContext("2d");
                            if (ctx) {
                              ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                              setKeyframeScreenshot(canvas.toDataURL("image/jpeg"));
                            } else {
                              setKeyframeScreenshot(segments[activeSegmentIndex].image || "");
                            }
                          } catch (err) {
                            setKeyframeScreenshot(segments[activeSegmentIndex].image || "");
                          }
                        } else {
                          setKeyframeScreenshot(segments[activeSegmentIndex].image || "");
                        }
                        
                        setShowSaveKeyframeOverlay(true);
                      }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/50 rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
                        <button className="relative flex items-center justify-center bg-white/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full w-9 h-9 border border-white/50">
                          <Bookmark size={16} className="text-white" />
                        </button>
                      </div>
                      <span className="text-[9px] font-bold text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap animate-pulse">
                        保存关键帧
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Center 9:16 Video Box Wrapper that scales */}
              <div
                className={`relative w-full h-full group transition-all duration-300 ease-out ${
                  editingSubtitleId !== null
                    ? "scale-[0.68] origin-top translate-y-1"
                    : "scale-100 origin-center translate-y-0"
                }`}
                onClick={(e) => {
                  if (editingSubtitleId !== null) {
                    // Prevent the click from propagating to the play button or subtitle input focus again
                    setEditingSubtitleId(null);
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                {/* Video Content */}
              <div className="w-full h-full relative bg-black overflow-hidden rounded-[20px] shadow-lg border border-white/10">
                <video
                  ref={videoRef}
                  src={segments[activeSegmentIndex].video}
                  className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                  autoPlay={isPlaying}
                  loop
                  muted={isMuted}
                  playsInline
                />
                <div className="absolute inset-0 flex flex-col justify-end p-5 pb-8 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
                  {/* Subtitles Container - we make this position relative so dragged subtitles stay inside */}
                  <div className="absolute inset-x-0 bottom-[10%] h-0 z-20 pointer-events-none flex justify-center items-end">
                    {/* Main Subtitles (mapped to preserve drag state) */}
                    {segments.map((segment, idx) => {
                      const isActive = idx === activeSegmentIndex;
                      const isSelected = subtitleSelected && isActive;
                      const scale = segmentTransforms[idx]?.scale ?? 1;
                      const rotation = segmentTransforms[idx]?.rotation ?? 0;

                      return (
                        <motion.div
                          key={`main-sub-${segment.id}`}
                          drag
                          dragMomentum={false}
                          onDragStart={() => setIsDraggingSubtitle(true)}
                          style={{
                            scale,
                            rotate: rotation,
                            display: isActive ? "inline-flex" : "none",
                          }}
                          onDragEnd={() =>
                            setTimeout(() => setIsDraggingSubtitle(false), 50)
                          }
                          className="pointer-events-auto justify-center relative"
                        >
                          {isSelected ? (
                            <div
                              ref={subtitleRef}
                              className="inline-block relative"
                            >
                              {/* Top Left: Cancel */}
                              <div
                                className="absolute -top-3 -left-3 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-md z-10 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!isDraggingSubtitle) {
                                    setSubtitleSelected(false);
                                    setEditingSubtitleId(null);
                                  }
                                }}
                              >
                                <X
                                  size={12}
                                  className="text-gray-900"
                                  strokeWidth={3}
                                />
                              </div>

                              {/* Top Right: Edit Pencil */}
                              <div
                                className="absolute -top-3 -right-3 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-md z-10 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!isDraggingSubtitle) {
                                    setIsPlaying(false);
                                    setEditingSubtitleId("main");
                                  }
                                }}
                              >
                                <svg
                                  width="11"
                                  height="11"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="text-gray-900"
                                >
                                  <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
                                </svg>
                              </div>

                              {/* Bottom Left: +1 */}
                              <div
                                className="absolute -bottom-3 -left-3 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-md z-10 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!isDraggingSubtitle) {
                                    showToast("字幕已复制");
                                    setDuplicatedSubtitles((prev) => [
                                      ...prev,
                                      {
                                        id: Date.now(),
                                        segmentIndex: activeSegmentIndex,
                                        text: segment.text,
                                        scale,
                                        yOffset: -60,
                                      },
                                    ]);
                                  }
                                }}
                              >
                                <span className="text-[9px] font-black tracking-tighter text-gray-900 pr-[1px] pt-[1px]">
                                  +1
                                </span>
                              </div>

                              {/* Bottom Right: Scale */}
                              <div
                                className="absolute -bottom-3 -right-3 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-md z-10 cursor-pointer"
                                onPointerDown={handleTransformPointerDown}
                              >
                                <svg
                                  width="11"
                                  height="11"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-gray-900"
                                >
                                  <polyline points="6 11 6 6 11 6"></polyline>
                                  <polyline points="18 13 18 18 13 18"></polyline>
                                </svg>
                              </div>

                              <div
                                className="border border-white/90 px-3 py-1.5 min-w-[120px] cursor-pointer transition-all"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (!isDraggingSubtitle) {
                                    setIsPlaying(false);
                                    setEditingSubtitleId("main");
                                  }
                                }}
                              >
                                <span
                                  className="text-white text-[15px] font-bold tracking-wider block text-center"
                                  style={{
                                    textShadow: "0px 1px 3px rgba(0,0,0,0.8)",
                                  }}
                                >
                                  {segment.text}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <span
                              className="text-white text-[15px] font-bold tracking-wider cursor-text hover:bg-white/10 px-2 py-0.5 rounded transition-all inline-block whitespace-nowrap text-center"
                              style={{
                                textShadow: "0px 1px 3px rgba(0,0,0,0.8)",
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isDraggingSubtitle) {
                                  setSubtitleSelected(true);
                                }
                              }}
                            >
                              {segment.text}
                            </span>
                          )}
                        </motion.div>
                      );
                    })}

                    {/* Duplicated Subtitles (mapped completely to preserve drag state) */}
                    {duplicatedSubtitles.map((sub) => (
                        <motion.div
                          key={`dup-sub-${sub.id}`}
                          layout
                          drag
                          dragMomentum={false}
                          onDragStart={() => setIsDraggingSubtitle(true)}
                          onDragEnd={() =>
                            setTimeout(() => setIsDraggingSubtitle(false), 50)
                          }
                          style={{
                            scale: sub.scale,
                            display: sub.segmentIndex === activeSegmentIndex ? "inline-flex" : "none",
                          }}
                          initial={{ y: sub.yOffset, x: 0 }}
                          className="pointer-events-auto justify-center absolute"
                        >
                          <div className="inline-block relative">
                            {/* Top Left: Cancel for duplicates */}
                            <div
                              className="absolute -top-3 -left-3 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-md z-10 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isDraggingSubtitle) {
                                  setDuplicatedSubtitles((prev) =>
                                    prev.filter((s) => s.id !== sub.id),
                                  );
                                }
                              }}
                            >
                              <X
                                size={12}
                                className="text-gray-900"
                                strokeWidth={3}
                              />
                            </div>

                            {/* Top Right: Edit Pencil for duplicates */}
                            <div
                              className="absolute -top-3 -right-3 w-[22px] h-[22px] bg-white rounded-full flex items-center justify-center shadow-md z-10 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isDraggingSubtitle) {
                                  setIsPlaying(false);
                                  setEditingSubtitleId(sub.id);
                                }
                              }}
                            >
                              <svg
                                width="11"
                                height="11"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-gray-900"
                              >
                                <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
                              </svg>
                            </div>

                            <div
                              className="border border-white/90 px-3 py-1.5 min-w-[120px] cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!isDraggingSubtitle) {
                                  setIsPlaying(false);
                                  setEditingSubtitleId(sub.id);
                                }
                              }}
                            >
                              <span
                                className="text-white text-[15px] font-bold tracking-wider block text-center"
                                style={{
                                  textShadow: "0px 1px 3px rgba(0,0,0,0.8)",
                                }}
                              >
                                {sub.text}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>

                {/* Play button overlay in the middle of video */}
                <div
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity bg-black/10 cursor-pointer ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
                >
                  {isPlaying ? (
                    <Pause
                      size={40}
                      className="text-white/80"
                      fill="currentColor"
                    />
                  ) : (
                    <Play
                      size={40}
                      className="text-white/80"
                      fill="currentColor"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline and Tracks Area */}
        <div className="bg-black/40 backdrop-blur-xl px-4 pb-4 pt-3 shrink-0 flex flex-col gap-2 rounded-t-[20px] mt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] z-10 border-t border-white/10">
            {/* Playback Controls */}
            <div className="flex items-center gap-3 w-full">
              <div
                onClick={() => setIsPlaying(!isPlaying)}
                className="cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
              >
                {isPlaying ? (
                  <Pause size={16} className="fill-white text-white" />
                ) : (
                  <Play size={16} className="fill-white text-white" />
                )}
              </div>
              <span className="text-[11px] font-bold text-white/90">
                {formatTime(progress)}{" "}
                <span className="text-white/40 font-medium">
                  / {formatTime(totalDuration)}
                </span>
              </span>
              <div className="flex-1" />
              <button
                onClick={() => {
                  setPlaybackRate((prev) => {
                    if (prev === 1) return 1.5;
                    if (prev === 1.5) return 2;
                    if (prev === 2) return 0.5;
                    return 1;
                  });
                }}
                className="border border-white/20 rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white flex items-center justify-center hover:bg-white/10 transition-colors w-10"
                title="调整播放速度"
              >
                {playbackRate}x
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-7 h-7 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                title={isMuted ? "取消静音" : "静音"}
              >
                {isMuted ? (
                  <VolumeX size={13} className="text-white fill-white stroke-[2.5]" />
                ) : (
                  <Volume2 size={13} className="text-white fill-white stroke-[2.5]" />
                )}
              </button>
            </div>

            {/* Tracks Thumbnail Strip */}
            <div 
              className="relative pt-2 pb-1 cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                const percentage = clickX / rect.width;
                setProgress(percentage * totalDuration);
                setIsPlaying(true);
              }}
            >
              {/* Timeline playhead indicator (down arrow with black line) */}
              <div
                className="absolute top-0 w-[2px] h-full bg-white z-20 shadow-sm pointer-events-none transition-all duration-100 ease-linear"
                style={{
                  left: `${Math.min(98, (progress / totalDuration) * 100)}%`,
                }}
              >
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-white drop-shadow-sm" />
              </div>

              {/* Images row */}
              <div className="flex gap-1 relative z-10 snap-x w-full">
                {segments.map((seg, idx) => (
                  <div
                    key={seg.id}
                    style={{
                      width: `${(seg.duration / totalDuration) * 100}%`,
                    }}
                    className={`relative shrink-0 rounded-[8px] overflow-hidden border-[2px] h-14 flex items-center justify-center p-0 transition-all ${activeSegmentIndex === idx ? "border-[#ff4a11] shadow-[0_0_0_1px_rgba(255,74,17,0.3)] bg-[#ff4a11]" : "border-white/10 bg-white/5 hover:border-white/20"}`}
                  >
                    <img
                      src={seg.image}
                      className={`w-full h-full object-cover ${activeSegmentIndex === idx ? "opacity-90" : "opacity-100"}`}
                    />
                    <div
                      className={`absolute bottom-1 left-1 shadow-sm w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${activeSegmentIndex === idx ? "bg-white text-[#ff4a11]" : "bg-[#2c2c2e] text-white/90"}`}
                    >
                      {seg.id}
                    </div>
                    {activeSegmentIndex === idx && (
                      <div className="absolute bottom-1 right-1 bg-[#2c2c2e] shadow-sm px-1.5 py-0.5 rounded text-[9px] font-black text-white/90">
                        {seg.duration}s
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Audio Track */}
              {showBackgroundMusic && (
                <div className="mt-2.5 flex items-center justify-between w-full relative z-10 group/bgm">
                  <div className="flex items-center justify-between bg-blue-500/90 backdrop-blur-sm border border-blue-400/50 rounded-[6px] text-white text-[11px] font-bold px-2 py-1 w-full shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all">
                    <span className="truncate">🎵 背景音乐</span>
                    <button
                      onClick={() => setShowBackgroundMusic(false)}
                      className="opacity-0 group-hover/bgm:opacity-100 transition-opacity hover:bg-black/20 p-0.5 rounded-sm text-white"
                      title="删除背景音乐"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-1 w-full shrink-0">
              <button
                onClick={onShare}
                className="flex-1 bg-white/10 text-white py-3 rounded-[12px] text-[13px] font-bold active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <Share2 size={14} className="stroke-[2.5]" /> 分享视频
              </button>
              <button
                onClick={onDownload}
                className="flex-1 bg-blue-600 text-white py-3 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all shadow-md active:bg-blue-700"
              >
                <Download size={14} className="stroke-[2.5]" /> 下载视频
              </button>
            </div>
          </div>
        </div>

        {/* Subtitle Keyboard Overlay */}
        <AnimatePresence>
          {editingSubtitleId !== null && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 z-50 flex flex-col bg-[#1c1c1e] shadow-[0_-10px_30px_rgba(0,0,0,0.5)] rounded-t-[20px] overflow-hidden"
            >
              {/* Input bar */}
              <div className="flex items-center gap-3 p-3 pb-2 pt-4">
                <div className="flex-1 bg-[#2c2c2e] rounded-[10px] px-3 py-2.5 flex items-center shadow-inner relative">
                  <input
                    type="text"
                    value={
                      editingSubtitleId === "main"
                        ? segments[activeSegmentIndex].text
                        : duplicatedSubtitles.find(
                            (s) => s.id === editingSubtitleId,
                          )?.text || ""
                    }
                    onChange={(e) => {
                      if (editingSubtitleId === "main") {
                        const newSegments = [...segments];
                        newSegments[activeSegmentIndex].text = e.target.value;
                        setSegments(newSegments);
                      } else {
                        setDuplicatedSubtitles((prev) =>
                          prev.map((s) =>
                            s.id === editingSubtitleId
                              ? { ...s, text: e.target.value }
                              : s,
                          ),
                        );
                      }
                    }}
                    className="bg-transparent text-white text-[15px] outline-none w-full font-medium flex items-center"
                  />
                </div>
                <button
                  onClick={() => setEditingSubtitleId(null)}
                  className="w-[42px] h-[42px] bg-[#e5e5e7] rounded-[10px] flex items-center justify-center shrink-0 active:scale-95 transition-transform"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-center px-4 pb-2 text-[14px] font-bold text-gray-400 gap-6 border-b border-[#2c2c2e]/50 mt-1">
                <div className="flex items-center gap-1.5 text-white border-b-[2.5px] border-white pb-1.5 relative top-[2px]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" y1="8" x2="6" y2="8"></line>
                    <line x1="10" y1="8" x2="10" y2="8"></line>
                    <line x1="14" y1="8" x2="14" y2="8"></line>
                    <line x1="18" y1="8" x2="18" y2="8"></line>
                    <line x1="6" y1="12" x2="6" y2="12"></line>
                    <line x1="10" y1="12" x2="10" y2="12"></line>
                    <line x1="14" y1="12" x2="14" y2="12"></line>
                    <line x1="18" y1="12" x2="18" y2="12"></line>
                    <line x1="7" y1="16" x2="17" y2="16"></line>
                  </svg>
                  键盘
                </div>
                <div className="flex items-center gap-1.5 pb-1.5 cursor-pointer">
                  <Sparkles size={14} /> 模板
                </div>
                <div className="flex items-center gap-1.5 pb-1.5 cursor-pointer">
                  <span className="font-serif font-black text-[15px] tracking-tighter">
                    Aa
                  </span>{" "}
                  字体
                </div>
                <div className="flex items-center gap-1.5 pb-1.5 cursor-pointer">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-500 via-pink-500 to-yellow-500 border border-[#3c3c3e]" />
                  样式
                </div>
              </div>

              {/* Keyboard Mock */}
              <div className="px-1.5 pt-3 pb-8 flex flex-col gap-2 bg-[#2a2a2c] mt-2 shadow-inner">
                <div className="flex justify-between px-1 gap-1.5">
                  {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(
                    (k) => (
                      <div
                        key={k}
                        className="flex-1 h-[42px] bg-[#4a4a4c] rounded-[6px] flex items-center justify-center text-white text-[19px] shadow-sm uppercase font-medium"
                      >
                        {k}
                      </div>
                    ),
                  )}
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
                  <div className="flex-1 h-[42px] bg-[#4a4a4c] rounded-[6px] flex items-center justify-end text-neutral-400 text-[13px] font-bold shadow-sm pr-3 pb-1">
                    拼
                  </div>
                  <div className="w-16 h-[42px] bg-[#3a3a3c] rounded-[6px] flex items-center justify-center text-white shadow-sm shrink-0">
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
                      <path d="M9 10l-5 5 5 5" />
                      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Save Keyframe Overlay */}
        <AnimatePresence>
          {showSaveKeyframeOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[60] bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-6 overflow-hidden"
            >
              {/* Top Left Return Button */}
              <div 
                className="absolute top-12 left-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 active:scale-95 transition-all shadow-md z-20"
                onClick={() => {
                  setShowSaveKeyframeOverlay(false);
                  setIsPlaying(true);
                }}
              >
                <ChevronLeft size={22} className="text-white relative right-[1px]" />
              </div>

              {/* Current Page Screenshot */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="w-[62%] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl mb-8 border border-white/10 relative mt-2 z-10"
              >
                <img src={keyframeScreenshot} alt="screenshot" className="w-full h-full object-cover" />
              </motion.div>

              {/* Bottom gradient semi-circle background to emphasize it */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, y: "50%" }}
                animate={{ opacity: 1, scale: 1, y: "40%" }}
                exit={{ opacity: 0, scale: 0.5, y: "50%" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-white/10 via-black/40 to-transparent pointer-events-none"
              />

              <div 
                className="absolute bottom-[44px] left-1/2 -translate-x-1/2 text-white/80 text-[13px] font-medium tracking-wider z-20 whitespace-nowrap"
              >
                选择你的关键帧类型
              </div>

              <div className="absolute bottom-[56px] left-1/2 w-px h-px z-10 pointer-events-none">
                {/* 封面 (Cover) */}
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: 1, x: -100, y: -80, scale: 1 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                  transition={{ delay: 0.05, type: "spring", stiffness: 250, damping: 20 }}
                  className="absolute pointer-events-auto flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    onClick={() => {
                      if (onSaveKeyframe) {
                        onSaveKeyframe(`关键帧截图-${segments[activeSegmentIndex].id}`, segments[activeSegmentIndex].text, keyframeScreenshot, "封面");
                      }
                      setShowSaveKeyframeOverlay(false);
                      setIsPlaying(true);
                    }}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all shadow-lg"
                  >
                    <ImageIcon size={24} strokeWidth={1.5} />
                  </button>
                  <span className="text-white/90 drop-shadow-md text-[11px] font-medium whitespace-nowrap tracking-wide">封面</span>
                </motion.div>

                {/* 名片 (Business Card) */}
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: 1, x: 0, y: -110, scale: 1 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 250, damping: 20 }}
                  className="absolute pointer-events-auto flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    onClick={() => {
                      if (onSaveKeyframe) {
                        onSaveKeyframe(`关键帧截图-${segments[activeSegmentIndex].id}`, segments[activeSegmentIndex].text, keyframeScreenshot, "名片");
                      }
                      setShowSaveKeyframeOverlay(false);
                      setIsPlaying(true);
                    }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 hover:scale-105 active:scale-95 transition-all shadow-xl"
                  >
                    <CreditCard size={28} strokeWidth={1.5} />
                  </button>
                  <span className="text-white/90 drop-shadow-md text-[11px] font-medium whitespace-nowrap tracking-wide">名片</span>
                </motion.div>

                {/* 联系方式 (Contact) */}
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                  animate={{ opacity: 1, x: 100, y: -80, scale: 1 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 250, damping: 20 }}
                  className="absolute pointer-events-auto flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2"
                >
                  <button
                    onClick={() => {
                      if (onSaveKeyframe) {
                        onSaveKeyframe(`关键帧截图-${segments[activeSegmentIndex].id}`, segments[activeSegmentIndex].text, keyframeScreenshot, "联系方式");
                      }
                      setShowSaveKeyframeOverlay(false);
                      setIsPlaying(true);
                    }}
                    className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 active:scale-95 transition-all shadow-lg"
                  >
                    <Phone size={24} strokeWidth={1.5} />
                  </button>
                  <span className="text-white/90 drop-shadow-md text-[11px] font-medium whitespace-nowrap tracking-wide">联系方式</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      id="video-preview-screen"
      className="absolute inset-0 bg-[#0c1017] z-30 flex flex-col justify-between overflow-hidden rounded-[40px] font-sans"
    >
      {/* Background Media Representation */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={isMyKeyframePreview ? "/mock.png" : template.image}
          alt={template.title}
          className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${
            isPlaying ? "scale-105" : "scale-100"
          }`}
          referrerPolicy="no-referrer"
        />
        {/* Shadow overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
      </div>

      {/* Top Header Section */}
      <div className="relative z-10 px-6 pt-11 flex items-center justify-between">
        {/* Back Button */}
        <button
          id="preview-back-button"
          onClick={onBack}
          className="min-touch flex items-center justify-center text-white bg-black/30 backdrop-blur-md rounded-full shadow-md hover:bg-black/50 transition-all cursor-pointer"
        >
          <ChevronLeft size={22} className="stroke-[2.5]" />
        </button>

        {/* Device Center State Title (Optional status toggle) */}
        <div className="text-white/60 text-xs font-medium bg-black/20 backdrop-blur-xs px-3 py-1 rounded-full flex gap-2">
          <button
            id="toggle-image3-overlay"
            onClick={() => setShowMetadata(!showMetadata)}
            className={`transition-colors cursor-pointer ${showMetadata ? "text-cyan-300 font-bold" : "text-white/80"}`}
          >
            {showMetadata ? "原型图3-文字详情" : "原型图2-纯净播放"}
          </button>
        </div>

        {/* WeChat standard Capsule Button ... O */}
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-3 text-white shadow-md">
          <MoreHorizontal
            size={16}
            className="cursor-pointer hover:opacity-80"
          />
          <div className="w-[1px] h-3 bg-white/20" />
          <div className="relative flex items-center justify-center">
            <Circle size={10} className="fill-white stroke-white" />
            <Circle size={15} className="absolute stroke-white stroke-[1.5]" />
          </div>
        </div>
      </div>

      {/* Central big Play/Pause Tap target overlay */}
      <div
        id="preview-tap-play-overlay"
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute inset-[15%] flex items-center justify-center z-10 cursor-pointer group"
      >
        {!isPlaying && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white shadow-2xl group-hover:bg-white/30 transition-all"
          >
            <Play size={28} className="fill-white translate-x-0.5" />
          </motion.div>
        )}
      </div>

      {/* Bottom Interface */}
      <div className="relative z-10 flex flex-col gap-3 px-5 pb-5 w-full">
        {/* Image 3 Detailed overlay details text or Edit Fields */}
        {showMetadata && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-black/25 backdrop-blur-md p-4 rounded-2xl border border-white/5 text-left text-white ${isMyKeyframePreview ? "space-y-4" : "space-y-2.5"}`}
          >
            {isMyKeyframePreview ? (
              <>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-white/80">
                    标题
                  </span>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-white/80">
                    小标题文字
                  </span>
                  <textarea
                    value={editedDesc}
                    onChange={(e) => setEditedDesc(e.target.value)}
                    rows={2}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none mb-1"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Tagline headers */}
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600/90 text-white text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">
                    免费使用
                  </span>
                  <span className="text-white/80 text-[11px] font-semibold">
                    {template.stats}
                  </span>
                </div>

                {/* Script Intro description */}
                <p className="text-[12px] text-white/90 leading-relaxed font-normal">
                  {template.description}
                </p>

                {/* Hashtag pills */}
                <div className="flex flex-wrap gap-1 text-[11px] font-medium text-cyan-300">
                  {template.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="mr-1 hover:underline cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}

        {/* Slider timeline counter progress indicator */}
        {!isMyKeyframePreview && (
          <div className="flex items-center justify-between text-[11px] text-white/80 px-1">
            {/* Slider line layout matching Image 2 */}
            <div className="flex-1 mr-4 relative flex items-center h-4 group cursor-pointer">
              <div className="w-full h-[2px] bg-white/20 rounded-full" />
              <div
                className="absolute top-[7px] left-0 h-[2px] bg-white rounded-full transition-all"
                style={{ width: `${(progress / template.durationSec) * 100}%` }}
              />
              <div
                className="absolute w-2 h-2 bg-white rounded-full transition-all shadow-md"
                style={{
                  left: `calc(${(progress / template.durationSec) * 100}% - 4px)`,
                }}
              />
            </div>

            <span className="font-mono bg-black/20 backdrop-blur-xs px-2 py-0.5 rounded-md">
              {formatTime(progress)} / {formatTime(template.durationSec)}
            </span>
          </div>
        )}

        {/* Buttons tray matching Image 2 */}
        <div className="flex items-center justify-between gap-4 pt-1 border-t border-white/5">
          {/* Action Button */}
          {isMyKeyframePreview ? (
            <button
              onClick={() => {
                if (!isLoggedIn) {
                  setShowLoginModal(true);
                  return;
                }
                if (onSaveKeyframe) onSaveKeyframe(editedTitle, editedDesc);
              }}
              className="flex-1 bg-blue-600 text-white font-semibold py-3.5 px-5 rounded-full text-[14px] flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] hover:bg-blue-700 transition-all cursor-pointer"
            >
              <span>保存</span>
            </button>
          ) : template.id.startsWith("compiled_") && onSaveKeyframe ? (
            <button
              onClick={() => {
                if (!isLoggedIn) {
                  setShowLoginModal(true);
                  return;
                }
                onSaveKeyframe();
              }}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-semibold py-3.5 px-5 rounded-full text-[14px] flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] active:brightness-95 hover:brightness-105 transition-all cursor-pointer"
            >
              <span>保存到我的关键帧</span>
            </button>
          ) : (
            <button
              id="make-video-by-template"
              onClick={() => {
                if (!isLoggedIn) {
                  setShowLoginModal(true);
                  return;
                }
                onMakeNow();
              }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold py-3.5 px-5 rounded-full text-[14px] flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] active:brightness-95 hover:brightness-105 transition-all cursor-pointer"
            >
              <Sparkles size={16} className="fill-white" />
              <span>立马做一个</span>
            </button>
          )}

          {/* Star Favorite Button */}
          {!isMyKeyframePreview &&
            !(template.id.startsWith("compiled_") && onSaveKeyframe) && (
              <button
                id="preview-fav-action"
                onClick={handleFavoriteClick}
                className="flex flex-col items-center justify-center text-white/90 active:scale-95 transition-all w-11 cursor-pointer hover:text-yellow-400 group"
              >
                <Star
                  size={20}
                  className={`transition-all ${isFavorited ? "fill-yellow-400 stroke-yellow-400 scale-110" : "stroke-[2]"}`}
                />
                <span className="text-[10px] mt-0.5 font-medium">收藏</span>
              </button>
            )}

          {/* Share button */}
          {!isMyKeyframePreview &&
            !(template.id.startsWith("compiled_") && onSaveKeyframe) && (
              <button
                id="preview-share-action"
                onClick={() => {
                  if (onShare) onShare();
                }}
                className="flex flex-col items-center justify-center text-white/90 active:scale-95 transition-all w-11 cursor-pointer hover:text-cyan-300"
              >
                <Share2 size={20} className="stroke-[2]" />
                <span className="text-[10px] mt-0.5 font-medium">分享</span>
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
