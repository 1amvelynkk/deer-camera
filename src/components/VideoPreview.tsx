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
  Award,
  Search,
  Forward,
  LogOut,
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

const VOICES_LIST = [
  { title: "大叔音", desc: "成熟稳重", duration: "00:15", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" },
  { title: "林志玲音", desc: "甜美温柔", duration: "00:22", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
  { title: "萝莉音", desc: "软萌可爱", duration: "00:18", img: "https://images.unsplash.com/photo-1544640808-32cb4fbadfac?auto=format&fit=crop&q=80&w=100" },
  { title: "青年音", desc: "阳光清爽", duration: "00:25", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
  { title: "老爷爷音", desc: "慈祥和蔼", duration: "00:30", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" },
  { title: "东北口音", desc: "幽默风趣", duration: "00:12", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100" },
];

const MUSIC_LIST = [
  { title: "Lucifer", artist: "Kloster 03", duration: "00:21", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=100" },
  { title: "Running out of time", artist: "DRANK 9!N3", duration: "00:57", img: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f4fc?auto=format&fit=crop&q=80&w=100" },
  { title: "National Treasures", artist: "Drake", duration: "01:01", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=100" },
];

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
  const [progress, setProgress] = useState(0); // Play from the start
  const [showMetadata, setShowMetadata] = useState(true); // Toggle between Image 2 & Image 3 states!
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);


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
  const safeActiveSegmentIndex = Math.max(0, Math.min(activeSegmentIndex, segments.length - 1));
  const currentSegment = segments[safeActiveSegmentIndex];
  const [subtitleSelected, setSubtitleSelected] = useState(true);
  const [editingSubtitleId, setEditingSubtitleId] = useState<
    string | number | null
  >(null);
  const [editingTab, setEditingTab] = useState<"keyboard" | "font" | "style">("keyboard");
  const [textStyles, setTextStyles] = useState<Record<string | number, { fontFamily: string; color: string; stroke: string; scale: number }>>({});
  const [isDraggingSubtitle, setIsDraggingSubtitle] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showBackgroundMusic, setShowBackgroundMusic] = useState(true);
  const [showVoice, setShowVoice] = useState(true);
  const [showMusicSheet, setShowMusicSheet] = useState(false);
  const [showVoiceSheet, setShowVoiceSheet] = useState(false);
  const [musicTab, setMusicTab] = useState<"推荐" | "热门" | "收藏">("推荐");
  const [selectedTrack, setSelectedTrack] = useState<string>("Lucifer");
  const [appliedTrack, setAppliedTrack] = useState<string>("Lucifer");
  const [voiceTab, setVoiceTab] = useState<"推荐" | "收藏">("推荐");
  const [selectedVoice, setSelectedVoice] = useState<string>("大叔音");
  const [appliedVoice, setAppliedVoice] = useState<string>("大叔音");
  const [favoriteVoices, setFavoriteVoices] = useState<string[]>([]);
  const [favoriteTracks, setFavoriteTracks] = useState<string[]>([]);
  const [bgmTrackRange, setBgmTrackRange] = useState<[number, number]>([0, 100]);
  const bgmContainerRef = useRef<HTMLDivElement>(null);
  const scaleSliderRef = useRef<HTMLDivElement>(null);

  const currentTextStyle = editingSubtitleId !== null ? (textStyles[editingSubtitleId] || { fontFamily: "默认字体", color: "white", stroke: "无", scale: 100 }) : { fontFamily: "默认字体", color: "white", stroke: "无", scale: 100 };

  const updateTextStyle = (updates: Partial<{ fontFamily: string; color: string; stroke: string; scale: number }>) => {
    if (editingSubtitleId === null) return;
    setHasUnsavedChanges(true);
    setTextStyles(prev => ({
      ...prev,
      [editingSubtitleId]: {
        ...(prev[editingSubtitleId] || { fontFamily: "默认字体", color: "white", stroke: "无", scale: 100 }),
        ...updates
      }
    }));
  };

  const getStyleForSubtitle = (id: string | number) => {
    const st = textStyles[id] || { fontFamily: "默认字体", color: "white", stroke: "无", scale: 100 };
    const strokeCSS = st.stroke === "无" ? "" : `1px 1px 0 ${st.stroke}, -1px -1px 0 ${st.stroke}, 1px -1px 0 ${st.stroke}, -1px 1px 0 ${st.stroke}`;
    return {
      fontFamily: st.fontFamily === "默认字体" ? undefined : st.fontFamily,
      color: st.color,
      textShadow: st.stroke === "无" ? "0px 1px 3px rgba(0,0,0,0.8)" : strokeCSS,
      fontSize: `${15 * (st.scale / 100)}px`
    };
  };

  const handleBgmPointerDown = (e: any, type: "start" | "end") => {
    e.preventDefault();
    e.stopPropagation();
    
    const handleBgmPointerMove = (moveEvent: PointerEvent) => {
      if (!bgmContainerRef.current) return;
      const rect = bgmContainerRef.current.getBoundingClientRect();
      const clickX = Math.max(0, Math.min(moveEvent.clientX - rect.left, rect.width));
      const percentage = (clickX / rect.width) * 100;
      
      setBgmTrackRange(prev => {
        if (type === "start") {
          return [Math.min(percentage, prev[1] - 5), prev[1]];
        } else {
          return [prev[0], Math.max(percentage, prev[0] + 5)];
        }
      });
      setHasUnsavedChanges(true);
    };
    
    const handleBgmPointerUp = () => {
      window.removeEventListener("pointermove", handleBgmPointerMove);
      window.removeEventListener("pointerup", handleBgmPointerUp);
    };
    
    window.addEventListener("pointermove", handleBgmPointerMove);
    window.addEventListener("pointerup", handleBgmPointerUp);
  };

  const handleScalePointerDown = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const handlePointerMove = (moveEvent: PointerEvent) => {
      if (!scaleSliderRef.current) return;
      const rect = scaleSliderRef.current.getBoundingClientRect();
      const clickX = Math.max(0, Math.min(moveEvent.clientX - rect.left, rect.width));
      const percentage = Math.round((clickX / rect.width) * 150 + 50); // Scale from 50% to 200%
      updateTextStyle({ scale: percentage });
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    
    // Call once to update immediately
    handlePointerMove(e);
  };

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
  const [clickedFrames, setClickedFrames] = useState<string[]>([]);

  const subtitleRef = useRef<HTMLDivElement>(null);
  const [showSaveKeyframeOverlay, setShowSaveKeyframeOverlay] = useState(false);
  const [keyframeScreenshot, setKeyframeScreenshot] = useState<string>("");
  const [savedKeyframeCategory, setSavedKeyframeCategory] = useState<string>("");
  const [isKeyframeSavedInOverlay, setIsKeyframeSavedInOverlay] = useState(false);
  const [pendingKeyframeSaveParams, setPendingKeyframeSaveParams] = useState<[string, string, string, string] | null>(null);

  const [pendingKeyframeClickData, setPendingKeyframeClickData] = useState<string | null>(null);

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
              className="absolute top-24 left-1/2 -translate-x-1/2 z-[999] bg-neutral-950/85 backdrop-blur-md text-white text-[10px] font-semibold px-4 py-2 rounded-xl text-center shadow-lg border border-neutral-800/50 flex items-center gap-1.5 max-w-[280px]"
            >
              <span className="truncate">{toastMessage}</span>
            </motion.div>
          )}
          {showSaveKeyframeOverlay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-[10%] flex flex-col items-center justify-center z-[1000] pointer-events-auto"
            >
              <div className="bg-black/60 backdrop-blur-3xl p-5 rounded-[28px] border border-white/20 shadow-2xl flex flex-col items-center gap-4 relative">
                {!isKeyframeSavedInOverlay && (
                  <button 
                    className="absolute top-3 right-3 p-1.5 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    onClick={() => {
                      setShowSaveKeyframeOverlay(false);
                      setIsPlaying(true);
                      setPendingKeyframeSaveParams(null);
                      setPendingKeyframeClickData(null);
                    }}
                  >
                    <X size={16} />
                  </button>
                )}
                {keyframeScreenshot && (
                  <img src={keyframeScreenshot} className="w-[240px] aspect-[3/4] rounded-2xl object-cover shadow-md mt-2" />
                )}
                <div className="flex items-center justify-center h-[40px] w-full">
                  {isKeyframeSavedInOverlay ? (
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-bold tracking-wide">已保存到我的关键帧 - {savedKeyframeCategory}</span>
                    </div>
                  ) : (
                    <button 
                      className="h-full bg-blue-600 active:scale-95 transition-transform rounded-full text-white font-bold text-[14px] w-full flex items-center justify-center"
                      onClick={() => {
                        if (onSaveKeyframe && pendingKeyframeSaveParams) {
                           onSaveKeyframe(...pendingKeyframeSaveParams);
                        }
                        if (pendingKeyframeClickData) {
                           setClickedFrames(prev => [...prev, pendingKeyframeClickData]);
                           setPendingKeyframeClickData(null);
                        }
                        setIsKeyframeSavedInOverlay(true);
                        setTimeout(() => {
                           setShowSaveKeyframeOverlay(false);
                           setIsPlaying(true);
                           setIsKeyframeSavedInOverlay(false);
                        }, 2000);
                      }}
                    >
                      保存
                    </button>
                  )}
                </div>
              </div>
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
              <div className="absolute -right-[46px] top-[2%] w-[48px] flex flex-col items-center gap-4 z-20">
                <div className="flex flex-col items-center gap-1 cursor-pointer group/btn active:scale-95 transition-transform" onClick={() => setShowVoiceSheet(true)}>
                  <button className="flex items-center justify-center bg-white/20 backdrop-blur-md shadow-md rounded-full w-9 h-9 border border-white/30 overflow-hidden relative">
                    {showVoice && appliedVoice ? (
                      <img src={VOICES_LIST.find(v => v.title === appliedVoice)?.img} className="w-full h-full object-cover" />
                    ) : (
                      <User size={16} className="text-white" />
                    )}
                  </button>
                  <span className="text-[9px] font-bold text-white/90 drop-shadow-sm">
                    音效
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 cursor-pointer group/btn active:scale-95 transition-transform" onClick={() => setShowMusicSheet(true)}>
                  <button className="flex items-center justify-center bg-white/20 backdrop-blur-md shadow-md rounded-full w-9 h-9 border border-white/30 overflow-hidden relative">
                    {showBackgroundMusic && appliedTrack ? (
                      <img src={MUSIC_LIST.find(m => m.title === appliedTrack)?.img} className="w-full h-full object-cover" />
                    ) : (
                      <Music size={16} className="text-white" />
                    )}
                  </button>
                  <span className="text-[9px] font-bold text-white/90 drop-shadow-sm whitespace-nowrap">
                    背景音乐
                  </span>
                </div>
                <AnimatePresence>
                  {onSaveKeyframe && segments.length > 0 && progress >= 6 && progress % 6 < 3 && (
                    <motion.div 
                      key="keyframe-buttons"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-3 mt-1"
                    >
                      {[
                        { label: "封面帧", category: "封面", icon: ImageIcon, ping: true },
                        { label: "荣誉帧", category: "企业荣誉", icon: Award, ping: true },
                        { label: "名片帧", category: "联系名片", icon: CreditCard, ping: true }
                      ].map((item, index) => {
                        const isClicked = clickedFrames.includes(`${activeSegmentIndex}-${item.label}`);
                        return (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
                          key={item.label} 
                          className="flex flex-col items-center gap-1 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isClicked) return;
                            let imgStr = currentSegment?.image || "";
                            if (videoRef.current) {
                              try {
                                const canvas = document.createElement("canvas");
                                canvas.width = videoRef.current.videoWidth;
                                canvas.height = videoRef.current.videoHeight;
                                const ctx = canvas.getContext("2d");
                                if (ctx) {
                                  ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                                  imgStr = canvas.toDataURL("image/jpeg");
                                }
                              } catch (err) {}
                            }
                            setPendingKeyframeSaveParams([`关键帧截图-${currentSegment?.id}-${item.label}`, currentSegment?.text || "", imgStr, item.category]);
                            setPendingKeyframeClickData(`${activeSegmentIndex}-${item.label}`);
                            setIsPlaying(false);
                            setKeyframeScreenshot("https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=800");
                            setSavedKeyframeCategory(item.category);
                            setIsKeyframeSavedInOverlay(false);
                            setShowSaveKeyframeOverlay(true);
                          }}
                        >
                          <div className="relative">
                            {!isClicked && item.ping && (
                              <motion.div
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{ scale: 1.5, opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                                className="absolute inset-0 bg-white/50 rounded-full"
                              />
                            )}
                            <button className={`relative flex items-center justify-center backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.3)] rounded-full w-9 h-9 border transition-colors ${isClicked ? 'bg-[#FA2A55] border-[#FA2A55]' : 'bg-white/30 border-white/50'}`}>
                              <item.icon size={16} className="text-white" />
                            </button>
                          </div>
                          <span className={`text-[9px] font-bold text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap ${(!isClicked && item.ping) ? 'animate-pulse' : ''} ${isClicked ? 'text-[#FA2A55]' : ''}`}>
                            {item.label}
                          </span>
                        </motion.div>
                      )})}
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
                  src={currentSegment?.video}
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
                                  className="font-bold tracking-wider block text-center"
                                  style={getStyleForSubtitle("main")}
                                >
                                  {segment.text}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <span
                              className="font-bold tracking-wider cursor-text hover:bg-white/10 px-2 py-0.5 rounded transition-all inline-block whitespace-nowrap text-center"
                              style={getStyleForSubtitle("main")}
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
                                className="font-bold tracking-wider block text-center"
                                style={getStyleForSubtitle(sub.id)}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      let accDuration = 0;
                      for (let i = 0; i < idx; i++) {
                        accDuration += segments[i].duration;
                      }
                      setProgress(accDuration + 0.1);
                      setIsPlaying(true);
                    }}
                    style={{
                      width: `${(seg.duration / totalDuration) * 100}%`,
                    }}
                    className={`relative shrink-0 rounded-[8px] overflow-hidden border-[2px] h-14 flex items-center justify-center p-0 transition-all cursor-pointer ${activeSegmentIndex === idx ? "border-[#ff4a11] shadow-[0_0_0_1px_rgba(255,74,17,0.3)] bg-[#ff4a11]" : "border-white/10 bg-white/5 hover:border-white/20"}`}
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
                    {activeSegmentIndex === idx && segments.length > 1 && (
                      <button 
                        className="absolute top-0.5 right-0.5 bg-black/60 hover:bg-[#FA2A55] text-white rounded p-[2px] transition-colors shadow-sm z-10 block"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (segments.length <= 1) return;
                          
                          setSegments(prev => {
                            const next = prev.filter((_, i) => i !== idx);
                            // Adjust segment identifiers or progress if needed
                            return next;
                          });
                          setHasUnsavedChanges(true);
                          
                          if (idx >= segments.length - 1) {
                            // Deleted last segment, move progress back
                            let newDuration = 0;
                            for(let i=0; i<segments.length-1; i++) {
                              newDuration += segments[i].duration;
                            }
                            setProgress(Math.max(0, newDuration - 0.1));
                          } else {
                            // Deleted a segment in middle, keep same progress which will point to next visually
                          }
                          
                        }}
                      >
                        <X size={10} strokeWidth={3} />
                      </button>
                    )}
                  </div>
                ))}
              </div>



              {/* Audio Track */}
              <div 
                ref={bgmContainerRef}
                className="mt-2 w-full relative z-10 h-7 bg-white/5 rounded-[6px]"
                onClick={(e) => e.stopPropagation()}
              >
                {showBackgroundMusic && (
                  <div 
                    className="absolute top-0 bottom-0 flex items-center justify-between group/bgm bg-blue-500/90 backdrop-blur-sm border border-blue-400/50 rounded-[6px] text-white text-[11px] font-bold shadow-[0_2px_8px_rgba(59,130,246,0.3)] transition-all"
                    style={{ left: `${bgmTrackRange[0]}%`, width: `${bgmTrackRange[1] - bgmTrackRange[0]}%` }}
                  >
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-3 cursor-col-resize hover:bg-white/20 transition-colors rounded-l-[4px]"
                      onPointerDown={(e) => handleBgmPointerDown(e, "start")}
                    />
                    
                    <span className="truncate px-3 pointer-events-none select-none flex items-center gap-1.5"><Music size={12} className="shrink-0" /> 背景音乐</span>
                    
                    <button
                      onClick={() => {
                        setShowBackgroundMusic(false);
                        setHasUnsavedChanges(true);
                      }}
                      className="opacity-0 group-hover/bgm:opacity-100 transition-opacity hover:bg-black/20 p-0.5 rounded-sm text-white ml-2 mr-5 z-10"
                      title="删除背景音乐"
                    >
                      <Trash2 size={12} />
                    </button>

                    <div 
                      className="absolute right-0 top-0 bottom-0 w-3 cursor-col-resize hover:bg-white/20 transition-colors rounded-r-[4px]"
                      onPointerDown={(e) => handleBgmPointerDown(e, "end")}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-1 w-full shrink-0">
              {hasUnsavedChanges ? (
                <button
                  onClick={() => {
                    setIsGenerating(true);
                    setGenerationProgress(0);
                    const interval = setInterval(() => {
                      setGenerationProgress(prev => {
                        if (prev >= 100) {
                          clearInterval(interval);
                          setIsGenerating(false);
                          setHasUnsavedChanges(false);
                          showToast("保存修改成功");
                          return 100;
                        }
                        return prev + 2;
                      });
                    }, 100);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-[16px] text-[15px] font-bold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all shadow-md"
                >
                   保存修改
                </button>
              ) : (
                <>
                  <button
                    onClick={onDownload}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-[16px] text-[15px] font-bold flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all shadow-md active:bg-blue-700"
                  >
                    <Download size={18} className="stroke-[2.5]" /> 下载视频
                  </button>
                  <button
                    onClick={onShare}
                    className="bg-[#2c2c2e] text-white w-[50px] rounded-[16px] flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-sm active:bg-[#3a3a3c]"
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M14 5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11v-4z" />
                    </svg>
                  </button>
                </>
              )}
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
                        ? currentSegment?.text || ""
                        : duplicatedSubtitles.find(
                            (s) => s.id === editingSubtitleId,
                          )?.text || ""
                    }
                    onChange={(e) => {
                      setHasUnsavedChanges(true);
                      if (editingSubtitleId === "main") {
                        const newSegments = [...segments];
                        newSegments[safeActiveSegmentIndex].text = e.target.value;
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
                  onClick={() => {
                    setEditingSubtitleId(null);
                    setHasUnsavedChanges(true);
                  }}
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
                <div 
                  className={`flex items-center gap-1.5 pb-1.5 cursor-pointer relative top-[2px] ${editingTab === "keyboard" ? "text-white border-b-[2.5px] border-white" : ""}`}
                  onClick={() => {
                    setEditingTab("keyboard");
                    setHasUnsavedChanges(true);
                  }}
                >
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
                <div 
                  className={`flex items-center gap-1.5 pb-1.5 cursor-pointer relative top-[2px] ${editingTab === "font" ? "text-white border-b-[2.5px] border-white" : ""}`}
                  onClick={() => {
                    setEditingTab("font");
                    setHasUnsavedChanges(true);
                  }}
                >
                  <span className="font-serif font-black text-[15px] tracking-tighter">
                    Aa
                  </span>{" "}
                  字体
                </div>
                <div 
                  className={`flex items-center gap-1.5 pb-1.5 cursor-pointer relative top-[2px] ${editingTab === "style" ? "text-white border-b-[2.5px] border-white" : ""}`}
                  onClick={() => {
                    setEditingTab("style");
                    setHasUnsavedChanges(true);
                  }}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-500 via-pink-500 to-yellow-500 border border-[#3c3c3e]" />
                  样式
                </div>
              </div>

              {/* Editing Tab Content */}
              <div className="bg-[#2a2a2c] mt-2 shadow-inner h-[236px] overflow-hidden w-full relative">
                {editingTab === "keyboard" && (
                  <div className="px-1.5 pt-3 pb-8 flex flex-col gap-2 h-full">
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
              )}
                {editingTab === "font" && (
                  <div className="px-4 pt-4 pb-8 flex justify-center flex-wrap gap-3 h-full content-start overflow-y-auto">
                  {[
                    { label: "默认字体", font: "ui-sans-serif, system-ui, sans-serif" },
                    { label: "宋体", font: `"SimSun", "STSong", serif` },
                    { label: "黑体", font: `"SimHei", "STHeiti", sans-serif` },
                    { label: "楷体", font: `"KaiTi", "STKaiti", serif` },
                    { label: "圆体", font: `"YouYuan", sans-serif` },
                    { label: "综艺体", font: `"STZhongsong", serif` }
                  ].map((fontItem, idx) => (
                    <div 
                      key={idx}
                      className={`px-4 py-2 rounded-md text-[14px] font-bold flex items-center justify-center cursor-pointer ${currentTextStyle.fontFamily === fontItem.font ? "border border-[#FA2A55] text-[#FA2A55]" : "bg-[#3a3a3c] text-white"}`}
                      style={{ fontFamily: fontItem.font }}
                      onClick={() => updateTextStyle({ fontFamily: fontItem.font })}
                    >
                      {fontItem.label}
                    </div>
                  ))}
                </div>
              )}
              {editingTab === "style" && (
                <div className="px-4 pt-4 pb-8 flex flex-col gap-4 h-full overflow-y-auto items-start">
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-white/80 text-[12px] font-bold">颜色</span>
                    <div className="flex items-center gap-3">
                      {[
                        { color: "white", bg: "bg-white" },
                        { color: "black", bg: "bg-black" },
                        { color: "#ef4444", bg: "bg-red-500" },
                        { color: "#facc15", bg: "bg-yellow-400" },
                        { color: "#22c55e", bg: "bg-green-500" },
                        { color: "#3b82f6", bg: "bg-blue-500" }
                      ].map((cItem, idx) => (
                        <div 
                          key={idx}
                          className={`w-8 h-8 rounded-full ${cItem.bg} border border-white/20 shadow-sm cursor-pointer ${currentTextStyle.color === cItem.color ? "border-[2px] border-[#FA2A55]" : ""}`}
                          onClick={() => updateTextStyle({ color: cItem.color })}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-white/80 text-[12px] font-bold">描边</span>
                    <div className="flex items-center gap-3">
                      <div 
                        className={`w-8 h-8 rounded-full shadow-sm cursor-pointer flex items-center justify-center text-white/50 text-[10px] bg-neutral-700/50 border ${currentTextStyle.stroke === "无" ? "border-[2px] border-[#FA2A55]" : "border-white/20"}`}
                        onClick={() => updateTextStyle({ stroke: "无" })}
                      >
                        无
                      </div>
                      <div 
                        className={`w-8 h-8 rounded-full bg-black shadow-sm cursor-pointer border ${currentTextStyle.stroke === "black" ? "border-[2px] border-[#FA2A55]" : "border-white/20"}`}
                        onClick={() => updateTextStyle({ stroke: "black" })}
                      />
                      <div 
                        className={`w-8 h-8 rounded-full bg-white shadow-sm cursor-pointer border ${currentTextStyle.stroke === "white" ? "border-[2px] border-[#FA2A55]" : "border-white/20"}`}
                        onClick={() => updateTextStyle({ stroke: "white" })}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full mt-2">
                    <span className="text-white/80 text-[12px] font-bold flex justify-between">大小 <span className="text-[#FA2A55]">{currentTextStyle.scale}%</span></span>
                    <div 
                      ref={scaleSliderRef}
                      className="w-full h-1.5 bg-black/50 rounded-full relative cursor-pointer"
                      onPointerDown={handleScalePointerDown}
                    >
                      <div className="h-full bg-[#FA2A55] rounded-full" style={{ width: `${(currentTextStyle.scale - 50) / 1.5}%` }} />
                      <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow border border-black/10 transition-transform" style={{ left: `calc(${(currentTextStyle.scale - 50) / 1.5}% - 8px)` }} />
                    </div>
                  </div>
                </div>
              )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Music Sheet Overlay */}
        <AnimatePresence>
          {showMusicSheet && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-[100] bg-black/40 backdrop-blur-sm"
                onClick={() => setShowMusicSheet(false)}
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute bottom-0 left-0 right-0 z-[110] flex flex-col bg-[#1c1c1e]/95 backdrop-blur-3xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] rounded-t-[20px] h-[65%] overflow-hidden"
              >
                {/* Drag handle */}
                <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mt-3 mb-2 shrink-0 pointer-events-none" />

                <div className="px-4 pb-2 shrink-0">
                  <div className="bg-white/10 rounded-lg px-3 py-2 flex items-center gap-2 text-white/40">
                    <Search size={16} />
                    <input 
                      type="text" 
                      placeholder="搜索歌名/歌手/歌词/情绪"
                      className="bg-transparent text-white outline-none flex-1 font-medium text-[13px] placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="flex border-b border-white/10 px-4 pt-1 shrink-0 bg-transparent z-10 sticky top-0 relative items-center">
                  <div className="flex gap-6 mr-auto">
                    {["推荐", "收藏"].map((tab) => (
                      <button 
                        key={tab}
                        onClick={() => setMusicTab(tab as any)}
                        className={`pb-3 font-bold text-[14px] relative transition-colors ${musicTab === tab ? "text-white" : "text-white/50"}`}
                      >
                        {tab}
                        {musicTab === tab && (
                          <motion.div 
                            layoutId="musicTabIndicator"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-white" 
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col pt-3">
                  {MUSIC_LIST.filter(track => musicTab === "收藏" ? favoriteTracks.includes(track.title) : true).map((track, i) => {
                    const isSelected = track.title === selectedTrack;
                    return (
                      <div 
                        key={i} 
                        className={`flex items-center gap-3 py-3 w-full border-b border-white/5 last:border-0 cursor-pointer active:bg-white/5 rounded-lg px-2 -mx-2 transition-colors ${isSelected ? "" : ""}`}
                        onClick={() => setSelectedTrack(track.title)}
                      >
                        <div className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-white/10 relative ${isSelected ? "border-[2px] border-[#FA2A55]" : ""}`}>
                          <img src={track.img} alt={track.title} className="w-full h-full object-cover opacity-90" />
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-[14px] font-bold truncate ${isSelected ? "text-[#FA2A55]" : "text-white"}`}>
                              {track.title}
                            </span>
                            {showBackgroundMusic && appliedTrack === track.title && !isSelected && (
                              <span className="text-[#FA2A55] text-[10px] bg-[#FA2A55]/10 px-1.5 py-0.5 rounded font-bold whitespace-nowrap shrink-0">使用中</span>
                            )}
                            {isSelected && (
                              <div className="flex items-end gap-[2px] h-[10px]">
                                <div className="w-[3px] h-[4px] bg-[#FA2A55] rounded-full animate-bounce" style={{ animationDelay: "0ms", animationDuration: "600ms" }} />
                                <div className="w-[3px] h-[8px] bg-[#FA2A55] rounded-full animate-bounce" style={{ animationDelay: "200ms", animationDuration: "600ms" }} />
                                <div className="w-[3px] h-[6px] bg-[#FA2A55] rounded-full animate-bounce" style={{ animationDelay: "400ms", animationDuration: "600ms" }} />
                              </div>
                            )}
                          </div>
                          <span className="text-[11px] font-medium text-white/50 mt-0.5 truncate">{track.artist} · {track.duration}</span>
                        </div>
                        
                        {isSelected && (
                          <div className="flex items-center gap-3 shrink-0 ml-2">
                            <button className="text-white/80 active:scale-95 transition-transform" onClick={(e) => { 
                                e.stopPropagation(); 
                                if (favoriteTracks.includes(track.title)) {
                                  setFavoriteTracks(prev => prev.filter(t => t !== track.title));
                                  showToast("已取消收藏");
                                } else {
                                  setFavoriteTracks(prev => [...prev, track.title]);
                                  showToast("已收藏");
                                }
                              }}>
                              <Star size={20} className={`stroke-[2.5] ${favoriteTracks.includes(track.title) ? "fill-[#FA2A55] stroke-[#FA2A55]" : ""}`} />
                            </button>
                            {showBackgroundMusic && appliedTrack === track.title ? (
                              <span className="text-[#FA2A55] text-[13px] font-bold px-2">正在使用</span>
                            ) : (
                              <button 
                                className="bg-[#FA2A55] text-white text-[13px] font-bold px-4 py-1.5 rounded-md active:scale-95 transition-transform"
                                onClick={(e) => { 
                                  e.stopPropagation(); 
                                  setAppliedTrack(track.title);
                                  setShowMusicSheet(false); 
                                  setShowBackgroundMusic(true);
                                  setHasUnsavedChanges(true);
                                  showToast("已应用背景音乐"); 
                                }}
                              >
                                使用
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Voice Sheet Overlay */}
        <AnimatePresence>
          {showVoiceSheet && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-[100] bg-black/40 backdrop-blur-sm"
                onClick={() => setShowVoiceSheet(false)}
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute bottom-0 left-0 right-0 z-[110] flex flex-col bg-[#1c1c1e]/95 backdrop-blur-3xl border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] rounded-t-[20px] h-[65%] overflow-hidden"
              >
                {/* Drag handle */}
                <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mt-3 mb-2 shrink-0 pointer-events-none" />

                <div className="px-4 pb-2 shrink-0">
                  <div className="bg-white/10 rounded-lg px-3 py-2 flex items-center gap-2 text-white/40">
                    <Search size={16} />
                    <input 
                      type="text" 
                      placeholder="搜索音效/场景/风格"
                      className="bg-transparent text-white outline-none flex-1 font-medium text-[13px] placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="flex border-b border-white/10 px-4 pt-1 shrink-0 bg-transparent z-10 sticky top-0 relative items-center">
                  <div className="flex gap-6 mr-auto">
                    {["推荐", "收藏"].map((tab) => (
                      <button 
                        key={tab}
                        onClick={() => setVoiceTab(tab as any)}
                        className={`pb-3 font-bold text-[14px] relative transition-colors ${voiceTab === tab ? "text-white" : "text-white/50"}`}
                      >
                        {tab}
                        {voiceTab === tab && (
                          <motion.div 
                            layoutId="voiceTabIndicator"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-white" 
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col pt-3">
                  {VOICES_LIST.filter(track => voiceTab === "收藏" ? favoriteVoices.includes(track.title) : true).map((track, i) => {
                    const isSelected = track.title === selectedVoice;
                    return (
                      <div 
                        key={i} 
                        className={`flex items-center gap-3 py-3 w-full border-b border-white/5 last:border-0 cursor-pointer active:bg-white/5 rounded-lg px-2 -mx-2 transition-colors ${isSelected ? "" : ""}`}
                        onClick={() => setSelectedVoice(track.title)}
                      >
                        <div className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-white/10 relative ${isSelected ? "border-[2px] border-[#FA2A55]" : ""}`}>
                          <img src={track.img} alt={track.title} className="w-full h-full object-cover opacity-90" />
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-[14px] font-bold truncate ${isSelected ? "text-[#FA2A55]" : "text-white"}`}>
                              {track.title}
                            </span>
                            {showVoice && appliedVoice === track.title && !isSelected && (
                              <span className="text-[#FA2A55] text-[10px] bg-[#FA2A55]/10 px-1.5 py-0.5 rounded font-bold whitespace-nowrap shrink-0">使用中</span>
                            )}
                            {isSelected && (
                              <div className="flex items-end gap-[2px] h-[10px]">
                                <div className="w-[3px] h-[4px] bg-[#FA2A55] rounded-full animate-bounce" style={{ animationDelay: "0ms", animationDuration: "600ms" }} />
                                <div className="w-[3px] h-[8px] bg-[#FA2A55] rounded-full animate-bounce" style={{ animationDelay: "200ms", animationDuration: "600ms" }} />
                                <div className="w-[3px] h-[6px] bg-[#FA2A55] rounded-full animate-bounce" style={{ animationDelay: "400ms", animationDuration: "600ms" }} />
                              </div>
                            )}
                          </div>
                          <span className="text-[11px] font-medium text-white/50 mt-0.5 truncate">{track.desc} · {track.duration}</span>
                        </div>
                        
                        {isSelected && (
                          <div className="flex items-center gap-3 shrink-0 ml-2">
                            <button className="text-white/80 active:scale-95 transition-transform" onClick={(e) => { 
                                e.stopPropagation(); 
                                if (favoriteVoices.includes(track.title)) {
                                  setFavoriteVoices(prev => prev.filter(t => t !== track.title));
                                  showToast("已取消收藏");
                                } else {
                                  setFavoriteVoices(prev => [...prev, track.title]);
                                  showToast("已收藏");
                                }
                              }}>
                              <Star size={20} className={`stroke-[2.5] ${favoriteVoices.includes(track.title) ? "fill-[#FA2A55] stroke-[#FA2A55]" : ""}`} />
                            </button>
                            {showVoice && appliedVoice === track.title ? (
                              <span className="text-[#FA2A55] text-[13px] font-bold px-2">正在使用</span>
                            ) : (
                              <button 
                                className="bg-[#FA2A55] text-white text-[13px] font-bold px-4 py-1.5 rounded-md active:scale-95 transition-transform"
                                onClick={(e) => { 
                                  e.stopPropagation(); 
                                  setAppliedVoice(track.title);
                                  setShowVoiceSheet(false); 
                                  setShowVoice(true);
                                  setHasUnsavedChanges(true);
                                  showToast("已应用音效"); 
                                }}
                              >
                                使用
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Generation Loading Overlay */}
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
            >
              <div className="bg-[#1c1c1e] rounded-[24px] p-6 flex flex-col items-center w-[240px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative">
                <button
                  onClick={() => setIsGenerating(false)}
                  className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors p-1"
                  title="退出"
                >
                  <LogOut size={16} />
                </button>

                <div className="relative w-[60px] h-[60px] mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <svg className="w-full h-full -rotate-90 filter drop-shadow-lg" viewBox="0 0 100 100">
                    <circle
                      className="text-white/5 stroke-current"
                      strokeWidth="6"
                      cx="50"
                      cy="50"
                      r="44"
                      fill="transparent"
                    ></circle>
                    <circle
                      className="text-blue-500 stroke-current transition-all duration-200 ease-out"
                      strokeWidth="6"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="44"
                      fill="transparent"
                      strokeDasharray="276"
                      strokeDashoffset={276 - (276 * generationProgress) / 100}
                    ></circle>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[14px] font-black text-white tracking-tighter">{Math.min(100, Math.round(generationProgress))}%</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-[14px] mb-1.5 tracking-wide">正在重新组合视频</h3>
                <p className="text-white/50 text-[10px] text-center px-1 leading-relaxed">
                  退出弹窗将会转入后台生成，可前往「我的页面-进行中」查看进度。
                </p>
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
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 z-[999] bg-neutral-950/85 backdrop-blur-md text-white text-[10px] font-semibold px-4 py-2 rounded-xl text-center shadow-lg border border-neutral-800/50 flex items-center gap-1.5 max-w-[280px]"
          >
            <span className="truncate">{toastMessage}</span>
          </motion.div>
        )}
        {showSaveKeyframeOverlay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-[10%] flex flex-col items-center justify-center z-[1000] pointer-events-auto"
          >
            <div className="bg-black/60 backdrop-blur-3xl p-5 rounded-[28px] border border-white/20 shadow-2xl flex flex-col items-center gap-4 relative">
              {!isKeyframeSavedInOverlay && (
                <button 
                  className="absolute top-3 right-3 p-1.5 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  onClick={() => {
                    setShowSaveKeyframeOverlay(false);
                    setIsPlaying(true);
                    setPendingKeyframeSaveParams(null);
                    setPendingKeyframeClickData(null);
                  }}
                >
                  <X size={16} />
                </button>
              )}
              {keyframeScreenshot && (
                <img src={keyframeScreenshot} className="w-[240px] aspect-[3/4] rounded-2xl object-cover shadow-md mt-2" />
              )}
                <div className="flex items-center justify-center h-[40px] w-full">
                  {isKeyframeSavedInOverlay ? (
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-bold tracking-wide">已保存到我的关键帧 - {savedKeyframeCategory}</span>
                    </div>
                  ) : (
                    <button 
                      className="h-full bg-blue-600 active:scale-95 transition-transform rounded-full text-white font-bold text-[14px] w-full flex items-center justify-center"
                      onClick={() => {
                        if (onSaveKeyframe && pendingKeyframeSaveParams) {
                           onSaveKeyframe(...pendingKeyframeSaveParams);
                        }
                        if (pendingKeyframeClickData) {
                           setClickedFrames(prev => [...prev, pendingKeyframeClickData]);
                           setPendingKeyframeClickData(null);
                        }
                        setIsKeyframeSavedInOverlay(true);
                        setTimeout(() => {
                           setShowSaveKeyframeOverlay(false);
                           setIsPlaying(true);
                           setIsKeyframeSavedInOverlay(false);
                        }, 2000);
                      }}
                    >
                      保存
                    </button>
                  )}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background Media Representation */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={isMyKeyframePreview ? `${import.meta.env.BASE_URL}mock.png` : template.image}
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
      
      {/* Generation Loading Overlay */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <div className="bg-[#1c1c1e] rounded-[24px] p-6 flex flex-col items-center w-[240px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative">
              <button
                onClick={() => setIsGenerating(false)}
                className="absolute top-3 right-3 text-white/40 hover:text-white transition-colors p-1"
                title="退出"
              >
                <LogOut size={16} />
              </button>

              <div className="relative w-[60px] h-[60px] mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <svg className="w-full h-full -rotate-90 filter drop-shadow-lg" viewBox="0 0 100 100">
                  <circle
                    className="text-white/5 stroke-current"
                    strokeWidth="6"
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-blue-500 stroke-current transition-all duration-200 ease-out"
                    strokeWidth="6"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    strokeDasharray="276"
                    strokeDashoffset={276 - (276 * generationProgress) / 100}
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[14px] font-black text-white tracking-tighter">{Math.min(100, Math.round(generationProgress))}%</span>
                </div>
              </div>
              <h3 className="text-white font-bold text-[14px] mb-1.5 tracking-wide">正在重新组合视频</h3>
              <p className="text-white/50 text-[10px] text-center px-1 leading-relaxed">
                退出弹窗将会转入后台生成，可前往「我的页面-进行中」查看进度。
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
