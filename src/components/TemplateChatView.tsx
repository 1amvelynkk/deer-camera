import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { KeyboardOverlay } from "./KeyboardOverlay";
import { VoiceRecordingOverlay } from "./VoiceRecordingOverlay";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Circle,
  RefreshCw,
  ChevronUp,
  ChevronDown,
  Plus,
  HardDrive,
  Sparkles,
  CheckCircle2,
  Mic,
  Camera,
  Image as ImageIcon,
  Edit2,
  SkipForward,
} from "lucide-react";
import { VideoTemplate } from "../types";

interface ProposalData {
  theme: string;
  suitability: string;
  proposal1: string;
  proposal2: string;
  tags: string[];
}

interface ChatViewProps {
  prompt: string;
  isDraftMode?: boolean;
  attachedTemplate: VideoTemplate | null;
  selectedRatio: string;
  selectedDuration: string;
  onBack: () => void;
  onMaterialModalOpen: () => void;
  uploadedMaterials: string[];
  selectedKeyframes?: VideoTemplate[];
  onRemoveKeyframe?: (id: string) => void;
  onChooseActiveSchema: (schemaNum: number, finalScript: string) => void;
  onKeyframeModalOpen: () => void;
  onGoToRenderingBox: () => void;
}

export default function TemplateChatView({
  prompt,
  isDraftMode,
  attachedTemplate,
  selectedRatio,
  selectedDuration,
  onBack,
  onMaterialModalOpen,
  uploadedMaterials,
  selectedKeyframes = [],
  onRemoveKeyframe,
  onChooseActiveSchema,
  onKeyframeModalOpen,
  onGoToRenderingBox,
}: ChatViewProps) {
  // AI Script Synthesis States
  const [isGenerating, setIsGenerating] = useState(true);
  const [activeTab, setActiveTab] = useState<1 | 2>(1);
  const [isDescExpanded, setIsDescExpanded] = useState(true);
  const [isResourceExpanded, setIsResourceExpanded] = useState(true);
  const [isKeyframeExpanded, setIsKeyframeExpanded] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isUploadComplete, setIsUploadComplete] = useState(true);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [userFinalMessage, setUserFinalMessage] = useState<string | null>(null);
  const [showFinalResponse, setShowFinalResponse] = useState(false);
  const [isGeneratingFinalResponse, setIsGeneratingFinalResponse] = useState(false);
  const [isEditingProposal, setIsEditingProposal] = useState(false);
  
  interface ChatTurn {
    id: string;
    sender: "user" | "ai";
    text?: string;
    imageUrl?: string;
    imageUrls?: string[];
    isAiThinking?: boolean;
  }

  const [extraTurns, setExtraTurns] = useState<ChatTurn[]>([]);
  const [stagedImages, setStagedImages] = useState<string[]>([]);

  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    if (files.length === 0) return;
    const urls = files.map(file => URL.createObjectURL(file));
    
    if (isUploadComplete) {
      setStagedImages(prev => [...prev, ...urls]);
    } else {
      if (urls.length > 0) {
        if (!localFile1) setLocalFile1(urls[0]);
        else if (!localFile2) setLocalFile2(urls[0]);
        else setLocalFile3(urls[0]);
      }
    }

    if (e.target) e.target.value = "";
  };

  const [aiResult, setAiResult] = useState<ProposalData>({
    theme: "展现华康医药品牌特色",
    suitability: "适合首次对外介绍公司、官网 / 招商 / 展会使用",
    proposal1:
      "【画外音：在这条漫长而精彩的路上，每一次探索都源于内心的热爱。】\n【画面：朝阳跃过城市地平线，镜头温暖移近工作台】\n【脚本详情】：我们追求卓越，执着于每一个细节的雕琢。针对第一视角采访式温情还原，结合精修画质，打动每一个潜在加盟或合作商户。。，我们摒弃传统的沉重框架，融入智慧高能交互思维。我们的理念是，用科技重写生活质感，在每一公里、每一个像素点，为您兑现精益求精。这里没有繁复套路，只有真心诚意的技术与卓越服务体验。",
    proposal2:
      "健康没有多余路径，华康医药以守护大众生命旅程为最高纲领。科技点亮人道，品质开创新纪元。华康医药研发团队，致力于智慧型复合药机研制。每一粒药片、每次装载、每道严谨工段检验，是对健康生命的最高敬畏。守护千家万户的健康，就在现在！",
    tags: ["#公司介绍", "#自定义", "#业务推广"],
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(scrollToBottom, 50);
    return () => clearTimeout(timer);
  }, [isGenerating, userFinalMessage, showFinalResponse, aiResult, isUploadComplete, isGeneratingFinalResponse, extraTurns]);

  useEffect(() => {
    if (isEditingProposal && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [isEditingProposal, aiResult.proposal1]);

  const [localFile1, setLocalFile1] = useState<string | null>(null);
  const [localFile2, setLocalFile2] = useState<string | null>(null);
  const [localFile3, setLocalFile3] = useState<string | null>(null);

  const handleSingleUpload = (
    setter: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e: any) => {
      const file = e.target.files?.[0];
      if (file) {
        setter(URL.createObjectURL(file));
      }
    };
    input.click();
  };

  const handleVoiceStart = () => {
    setIsRecording(true);
    if (navigator.vibrate) navigator.vibrate(50);
  };

  const handleVoiceEnd = () => {
    if (isRecording) {
      setIsRecording(false);
    }
  };

  const handleVoiceCancel = () => {
    setIsRecording(false);
  };

  // Call backend on startup to generate personalized scripts!
  useEffect(() => {
    let active = true;
    const abortController = new AbortController();

    // GitHub Pages is a static host without the Express API.
    // Keep the existing mock aiResult in production.
    if (import.meta.env.PROD && !isDraftMode) {
      setIsGenerating(false);
      return;
    }

    if (isDraftMode) {
      setIsGenerating(false);
      setExtraTurns([
        {
          id: "draft-msg-1",
          sender: "user",
          text: `帮我完善一下这个视频的内容和配图要求：${prompt}`,
        },
        {
          id: "draft-msg-2",
          sender: "ai",
          text: `已收到，这部分文案需要相关的素材支持，请上传相关图片或视频。`,
        }
      ]);
      return;
    }

    const fetchScript = async () => {
      const startTime = Date.now();

      try {
        const response = await fetch("/api/gemini/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
          signal: abortController.signal,
        });
        if (response.ok && active) {
          const data = await response.json();
          setAiResult(data);
        }
      } catch (err) {
        // Silently fallback if timeout or error
      } finally {
        if (active) {
          const elapsed = Date.now() - startTime;
          const remaining = Math.max(0, 4000 - elapsed);
          setTimeout(() => {
            setIsGenerating(false);
          }, remaining);
        }
      }
    };

    // Cap the entire fetch process at 3.9 seconds so it triggers finally and finishes by 4s.
    const overallTimeoutId = setTimeout(() => abortController.abort(), 3900);

    fetchScript().finally(() => clearTimeout(overallTimeoutId));
    return () => {
      active = false;
      clearTimeout(overallTimeoutId);
      abortController.abort();
    };
  }, [prompt]);

  const handleRefresh = async () => {
    setIsGenerating(true);

    // Static production demo: simulate regeneration without calling the backend.
    if (import.meta.env.PROD) {
      setTimeout(() => {
        setAiResult((prev) => ({
          ...prev,
          theme: prev.theme === "展现华康医药品牌特色"
            ? "突出华康医药的专业实力与创新价值"
            : "展现华康医药品牌特色",
          tags: prev.tags.includes("#品牌实力")
            ? ["#公司介绍", "#自定义", "#业务推广"]
            : ["#品牌实力", "#科技创新", "#业务推广"],
        }));
        setIsGenerating(false);
      }, 1500);
      return;
    }

    const abortController = new AbortController();
    const startTime = Date.now();
    const overallTimeoutId = setTimeout(() => abortController.abort(), 3900);

    try {
      const response = await fetch("/api/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt + "，请换一个侧重方向和不同亮点词汇",
        }),
        signal: abortController.signal,
      });
      if (response.ok) {
        const data = await response.json();
        setAiResult(data);
      }
    } catch (err) {
      // Silently fallback on timeout or error
    } finally {
      clearTimeout(overallTimeoutId);
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 4000 - elapsed);
      setTimeout(() => {
        setIsGenerating(false);
      }, remaining);
    }
  };

  const isMaterialComplete = uploadedMaterials.length >= 1;
  const hasUploadedContent = !!(
    localFile1 ||
    localFile2 ||
    localFile3 ||
    selectedKeyframes.length > 0 ||
    stagedImages.length > 0
  );

  const handleSkip = () => {
    setUserFinalMessage(null);
    setShowFinalResponse(true);
    setIsGeneratingFinalResponse(false);
  };

  const handleSendMessage = () => {
    if (inputText.trim() || stagedImages.length > 0) {
      const text = inputText;
      const images = [...stagedImages];
      setInputText("");
      setStagedImages([]);
      setIsKeyboardOpen(false);

      // Append user text and optional images turn
      const userTurnId = `user_${Date.now()}`;
      setExtraTurns(prev => [
        ...prev, 
        { 
          id: userTurnId, 
          sender: "user", 
          text: text || undefined, 
          imageUrl: images.length > 0 ? images[0] : undefined,
          imageUrls: images.length > 1 ? images : undefined
        }
      ]);

      // Append AI thinking / processing turn
      const aiThinkingId = `ai_thinking_${Date.now()}`;
      setTimeout(() => {
        setExtraTurns(prev => [...prev, { id: aiThinkingId, sender: "ai", isAiThinking: true }]);

        setTimeout(() => {
          setExtraTurns(prev => {
            const filtered = prev.filter(t => t.id !== aiThinkingId);
            return [
              ...filtered,
              {
                id: `ai_${Date.now()}`,
                sender: "ai",
                text: "素材信息已齐全，正在排队等待自动生成"
              }
            ];
          });
        }, 1500);
      }, 400);
    } else {
      setIsKeyboardOpen(false);
    }
  };

  const hasSubsequentMessages = showFinalResponse || extraTurns.length > 0 || userFinalMessage !== null;

  return (
    <div
      id="chat-assistant-screen"
      className="h-full w-full bg-[#0c1017] z-20 flex flex-col justify-between overflow-hidden font-sans relative"
    >
      {/* 1. WeChat Header Title section with AI subtitle sub-line */}
      <div className="bg-neutral-900 shrink-0 pt-11 pb-3 px-4 border-b border-neutral-800 flex items-center justify-between shadow-3xs relative">
        <button
          id="chat-back"
          onClick={onBack}
          className="p-1 -ml-1.5 mr-1 hover:bg-neutral-800 active:scale-90 rounded-full transition-all inline-flex items-center justify-center cursor-pointer text-white"
        >
          <ChevronLeft size={18} className="stroke-[2.5]" />
        </button>

        <div className="overflow-hidden flex-1 flex items-center">
          <span className="text-[15px] font-black tracking-wide text-white truncate">
            {attachedTemplate ? attachedTemplate.title : "生成视频"}
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

      {/* 2. Scrollable Body containing Chat timeline bubble cards */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* 3. AI Reply Assistant or Loader States */}
        {isGenerating ? (
          /* "小鹿思考中" Loader State matching Image 7 visual */
          <div className="flex items-start gap-2 max-w-[85%]">
            {/* Logo avatar bubble */}
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#1c1c1e] flex items-center justify-center shadow-3xs border border-[#3a3a3c] overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="logo" className="w-[85%] h-[85%] object-contain" />
            </div>

            <div className="bg-[#2c2c2e] px-4 py-3 rounded-2xl rounded-tl-xs shadow-sm border border-[#3a3a3c] flex items-center gap-2.5">
              <span className="text-[11px] font-bold text-blue-400">
                小鹿拍拍正在分析
              </span>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-dot-1" />
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-dot-2" />
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-dot-3" />
              </div>
            </div>
          </div>
        ) : (
          /* Fully structured AI Script Card results as in Image 5 & 6 */
          <div className="flex items-start gap-2 max-w-[85%]">
            {/* Bot Profile Avatar */}
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#1c1c1e] flex items-center justify-center shadow-3xs border border-[#3a3a3c] overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="logo" className="w-[85%] h-[85%] object-contain" />
            </div>

            {/* AI Speech container card */}
            <div className="flex-1 bg-[#2c2c2e] rounded-2xl rounded-tl-xs border border-[#3a3a3c] shadow-sm p-4 space-y-4 text-left">
              <div className="space-y-3 text-[12px] text-white leading-relaxed text-left select-text">
                <p>我已经收到您的素材啦！结合您的模板，我为您构思了一个视频脚本：</p>
                
                <div className="relative group">
                  {!isEditingProposal ? (
                    <div className="relative">
                      <div className="w-full text-[11px] text-neutral-400 bg-[#1c1c1e] border border-neutral-600 p-3 rounded-xl whitespace-pre-wrap font-serif min-h-[140px]">
                        {aiResult.proposal1}
                      </div>
                      <button
                        onClick={() => !hasSubsequentMessages && setIsEditingProposal(true)}
                        disabled={hasSubsequentMessages}
                        className={`absolute top-2 right-2 p-2 rounded-lg transition-all shadow-md backdrop-blur-md ${
                          hasSubsequentMessages
                            ? "hidden"
                            : "bg-blue-500/20 border border-blue-500/40 text-blue-400 opacity-100 hover:bg-blue-500/30 hover:text-blue-300"
                        }`}
                        title="编辑文字"
                      >
                        <Edit2 size={14} />
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <textarea
                        ref={textareaRef}
                        value={aiResult.proposal1}
                        onChange={(e) => setAiResult({ ...aiResult, proposal1: e.target.value })}
                        onBlur={() => setIsEditingProposal(false)}
                        autoFocus
                        className="w-full text-[11px] text-white bg-[#1c1c1e] border border-blue-500/50 p-3 rounded-xl whitespace-pre-wrap font-serif min-h-[140px] resize-none focus:outline-none ring-1 ring-blue-500/30 overflow-hidden"
                      />
                    </div>
                  )}
                </div>

                {uploadedMaterials.length === 0 ? (
                  <p>关于您上传的产品，在分镜中需要具体参数、型号，请您在对话框回答我。</p>
                ) : (
                  <p>素材信息充足，如果无需补充，您可以直接点击跳过进行下一步。</p>
                )}
              </div>

              {/* Options Trigger at the bottom */}
              <div className="flex justify-end mt-2 gap-2">
                <button
                  onClick={hasSubsequentMessages ? undefined : handleSkip}
                  disabled={hasSubsequentMessages}
                  className={`flex items-center justify-center transition-all px-6 w-20 h-7 rounded-md ${
                    hasSubsequentMessages
                      ? "bg-neutral-800/50 text-neutral-600 cursor-not-allowed"
                      : "text-white cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-sm shadow-blue-500/30 active:scale-95"
                  }`}
                  title="跳过"
                >
                  <span className="text-[11px] font-bold whitespace-nowrap">跳过</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- DYNAMIC EXTRA CHAT TURNS --- */}
        {extraTurns.map((turn) => {
          if (turn.sender === "user") {
            return (
              <div key={turn.id} className="flex justify-end w-full animate-fade-in">
                <div className="bg-blue-600 px-4 py-3 rounded-2xl rounded-tr-xs shadow-sm max-w-[85%] border border-blue-500 space-y-2">
                  {turn.text && (
                    <div className="text-[12px] font-medium text-white leading-relaxed text-left select-text">
                      {turn.text}
                    </div>
                  )}
                  {turn.imageUrl && !turn.imageUrls && (
                    <div className="rounded-xl overflow-hidden border border-white/20 max-w-[200px] shadow-sm ml-auto">
                      <img
                        src={turn.imageUrl}
                        alt="Uploaded content"
                        className="w-full object-contain max-h-40 rounded-lg"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  {turn.imageUrls && (
                    <div className="flex flex-wrap gap-1.5 justify-end max-w-[240px] ml-auto">
                      {turn.imageUrls.map((url, index) => (
                        <div key={index} className="rounded-xl overflow-hidden border border-white/20 w-[70px] h-[70px] shadow-sm">
                          <img
                            src={url}
                            alt={`Uploaded index ${index}`}
                            className="w-full h-full object-cover rounded-lg"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <div key={turn.id} className="flex items-start gap-2 max-w-[85%] animate-fade-in">
                <div className="w-8 h-8 shrink-0 rounded-full bg-[#1c1c1e] flex items-center justify-center shadow-3xs border border-[#3a3a3c] overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="logo" className="w-[85%] h-[85%] object-contain" />
                </div>
                <div className="bg-[#2c2c2e] px-4 py-3 rounded-2xl rounded-tl-xs shadow-sm border border-[#3a3a3c] flex items-center gap-2.5 text-left select-text">
                  {turn.isAiThinking ? (
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-bold text-blue-400">
                        小鹿拍拍正在分析
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-dot-1" />
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-dot-2" />
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-dot-3" />
                      </div>
                    </div>
                  ) : turn.text?.includes("正在排队等待自动生成") ? (
                    <div className="flex flex-col min-w-[220px] w-full">
                      <div className="text-[12px] text-white leading-relaxed mb-3">
                        素材信息已齐全，正在排队等待自动生成
                      </div>
                      <div className="border-t border-[#4a4a4c] pt-2.5 w-full flex flex-row items-center justify-between">
                        <span className="text-[11px] text-[#a0a0a5]">可进入"进行中"查看进度</span>
                        <button 
                          onClick={onGoToRenderingBox}
                          className="px-3 py-1 bg-[#1c1c1e] border border-[#4a4a4c] focus:outline-none hover:bg-[#323234] active:bg-[#222224] rounded-full text-[11px] text-[#e0e0e0] active:scale-95 transition-all cursor-pointer flex items-center gap-0.5">
                          <span>查看</span>
                          <ChevronRight size={12} className="opacity-70" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-[12px] text-white leading-relaxed">
                      {turn.text}
                    </div>
                  )}
                </div>
              </div>
            );
          }
        })}

        {/* --- USER FINAL MESSAGE --- */}
        {userFinalMessage && (
          <div className="flex justify-end w-full animate-fade-in">
            <div className="bg-blue-600 px-4 py-3 rounded-2xl rounded-tr-xs shadow-sm max-w-[85%] border border-blue-500">
              <div className="text-[12px] font-medium text-white leading-relaxed">
                {userFinalMessage}
              </div>
            </div>
          </div>
        )}

        {/* --- FINAL ASSISTANT MESSAGE --- */}
        {showFinalResponse && (
          <div className="flex items-start gap-2 max-w-[85%] animate-fade-in">
            <div className="w-8 h-8 shrink-0 rounded-full bg-[#1c1c1e] flex items-center justify-center shadow-3xs border border-[#3a3a3c] overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}logo2.png`} alt="logo" className="w-[85%] h-[85%] object-contain" />
            </div>
            <div className="bg-[#2c2c2e] px-4 py-3 rounded-2xl rounded-tl-xs shadow-sm border border-[#3a3a3c] flex items-center gap-2.5">
              {isGeneratingFinalResponse ? (
                <div className="flex items-center gap-1.5 h-4 px-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-70"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-40"
                  />
                </div>
              ) : (
                <div className="flex flex-col min-w-[220px] w-full">
                  <div className="text-[12px] text-white leading-relaxed mb-3">
                    素材信息已齐全，正在排队等待自动生成
                  </div>
                  <div className="border-t border-[#4a4a4c] pt-2.5 w-full flex items-center justify-between">
                    <span className="text-[12px] text-[#a0a0a5]">可进入"进行中"查看进度</span>
                    <button 
                      onClick={onGoToRenderingBox}
                      className="px-3 py-1 bg-[#1c1c1e] border border-[#4a4a4c] focus:outline-none hover:bg-[#323234] active:bg-[#222224] rounded-full text-[12px] text-[#e0e0e0] active:scale-95 transition-all cursor-pointer flex items-center gap-0.5">
                      <span>查看</span>
                      <ChevronRight size={12} className="opacity-70" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} className="h-2 flex-shrink-0" />
      </div>

      {/* Real-time Voice Recording overlay */}
      <VoiceRecordingOverlay isRecording={isRecording} />

      {/* 4. Chat Input Box */}
      <div className="bg-neutral-900 border-t border-neutral-800 shrink-0 p-3 flex flex-col relative z-10 w-full gap-2">
        {showFinalResponse || extraTurns.some(t => t.text?.includes("素材信息已齐全")) ? (
          <div className="py-2 text-center text-[13px] text-neutral-500 w-full tracking-wide">
            本次对话已结束
          </div>
        ) : (
          <>
            {/* Staged Images Preview */}
            {stagedImages.length > 0 && !isKeyboardOpen && isUploadComplete && (
              <div className="flex gap-2 px-1 py-1 overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full">
            {stagedImages.map((url, i) => (
              <div key={i} className="relative w-14 h-14 shrink-0 rounded-[8px] border border-[#3c3c3e] overflow-hidden bg-black/40">
                <img src={url} className="w-full h-full object-cover" alt="staged" />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setStagedImages(prev => prev.filter((_, idx) => idx !== i));
                  }}
                  className="absolute top-0 right-0 z-10 w-4 h-4 bg-neutral-800 rounded-full flex items-center justify-center cursor-pointer opacity-90 transition-opacity m-0.5"
                >
                  <span className="text-white text-[10px] leading-none">×</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Chat Input Box ALWAYS enabled since materials are pre-uploaded */}
        <div className="flex w-full gap-2">
          <div className="flex-1 bg-black/40 border border-neutral-800 rounded-full flex items-center px-4 py-1.5 relative">
            <input
              readOnly
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onClick={() => setIsKeyboardOpen(true)}
              placeholder="输入对话、补充要求..."
              className="w-full bg-transparent text-white outline-none placeholder-gray-500 text-[14px] pr-8 cursor-pointer"
            />
            {!isKeyboardOpen && (
                <button
                  onMouseDown={handleVoiceStart}
                  onMouseUp={handleVoiceEnd}
                  onTouchStart={handleVoiceStart}
                  onTouchEnd={handleVoiceEnd}
                  onMouseLeave={handleVoiceCancel}
                  className={`absolute right-1.5 w-7 h-7 flex items-center justify-center rounded-full transition-colors cursor-pointer select-none ${
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
            <div className={`relative flex items-center justify-center ${isKeyboardOpen ? "hidden" : ""}`}>
              <button
                onClick={(e) => {
                   e.preventDefault();
                   fileInputRef.current?.click();
                }}
                className="flex items-center justify-center w-[34px] h-[34px] rounded-full hover:bg-white/10 transition-colors cursor-pointer text-[#aaaaaa] shrink-0 active:scale-95"
                title="相册上传"
              >
                <ImageIcon size={22} />
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="px-4 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0 active:scale-95 transition-all outline-none"
            >
              发送
            </button>
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
          </>
        )}
      </div>

      {/* Keyboard Overlay reused from Subtitle Editor */}
      <KeyboardOverlay
        isOpen={isKeyboardOpen}
        value={inputText}
        onChange={setInputText}
        onClose={() => setIsKeyboardOpen(false)}
        onSubmit={handleSendMessage}
        isRecording={isRecording}
        onVoiceStart={handleVoiceStart}
        onVoiceEnd={handleVoiceEnd}
        onVoiceCancel={handleVoiceCancel}
        onUploadClick={() => fileInputRef.current?.click()}
        uploadType="image"
        mediaFiles={stagedImages.map((url, idx) => ({ url, name: `image_${idx}.jpg` }))}
        onRemoveMediaFile={(idx) => setStagedImages(prev => prev.filter((_, i) => i !== idx))}
      />
    </div>
  );
}
