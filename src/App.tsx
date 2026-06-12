import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Copy,
  Plus,
  MoreHorizontal,
  User,
  Award,
  Shield,
  Layers,
  HelpCircle,
  HardDrive,
  Smartphone,
  Layout,
  Smile,
  Sparkles,
  Star,
  ThumbsUp,
  CheckSquare,
  Circle,
  ChevronLeft,
  X,
  Download,
  PlayCircle,
  Share2,
  LogOut,
  Search,
} from "lucide-react";
import PhoneContainer from "./components/PhoneContainer";
import CreateTab from "./components/CreateTab";
import MyTab from "./components/MyTab";
import TemplateTab from "./components/TemplateTab";
import KeyframesTab from "./components/KeyframesTab";
import VideoPreview from "./components/VideoPreview";
import MaterialModal from "./components/MaterialModal";
import ChatView from "./components/ChatView";
import TemplateChatView from "./components/TemplateChatView";
import TemplateCreateTab from "./components/TemplateCreateTab";
import WeChatActionSheet from "./components/WeChatActionSheet";
import SelectKeyframeModal from "./components/SelectKeyframeModal";
import LoginModal from "./components/LoginModal";
import { VideoTemplate, AppTab } from "./types";
import { GlassBuildingTemplate, MockTemplates } from "./data";

export default function App() {
  const [showTemplateCreate, setShowTemplateCreate] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem("xiaolu_is_logged_in_v3") === "true";
  });
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  // Navigation states
  const [currentTab, setCurrentTab] = useState<AppTab>("template"); // starts on creation tab matching Image 8!
  const [myTabTarget, setMyTabTarget] = useState<
    "rendering" | "exports" | "drafts" | "favorites"
  >("rendering");
  const [templateSearchTerm, setTemplateSearchTerm] = useState("");

  const [activePreviewTemplate, setActivePreviewTemplate] =
    useState<VideoTemplate | null>(null);
  const [isPreviewingMyKeyframe, setIsPreviewingMyKeyframe] =
    useState<boolean>(false);
  const [isKeyframesFullScreen, setIsKeyframesFullScreen] =
    useState<boolean>(false);

  // AI Creation states
  const [chatPrompt, setChatPrompt] = useState<string | null>(null);
  const [chatRatio, setChatRatio] = useState<string>("9:16");
  const [chatDuration, setChatDuration] = useState<string>("10-20s");
  const [attachedTemplate, setAttachedTemplate] =
    useState<VideoTemplate | null>(GlassBuildingTemplate);

  // My Keyframes State
  const [myKeyframes, setMyKeyframes] = useState<VideoTemplate[]>(() => {
    try {
      const saved = localStorage.getItem("xiaolu_my_keyframes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const cleaned = parsed.map((kf, i) => ({
            ...kf,
            id: kf.id || `kf_${Date.now()}_${i}`,
            title: kf.title ? kf.title.replace(/·/g, " ").trim() : kf.title,
            style: kf.style === "商务风" ? "自定义" : kf.style,
          }));
          const uniqueDict = new Map<string, any>();
          cleaned.forEach(item => {
            if (!uniqueDict.has(item.id)) {
                uniqueDict.set(item.id, item);
            } else {
                const newId = item.id + "_" + Math.random().toString(36).substr(2, 5);
                uniqueDict.set(newId, { ...item, id: newId });
            }
          });
          return Array.from(uniqueDict.values());
        }
      }
    } catch {}
    return [];
  });

  // Keyframes Tab internal state
  const [keyframesInternalTab, setKeyframesInternalTab] = useState<
    "library" | "mine"
  >("library");

  // Materials & Upload logic
  const [uploadedMaterials, setUploadedMaterials] = useState<(string | null)[]>([null, null, null]);
  const [createChatMaterials, setCreateChatMaterials] = useState<string[]>([]);
  const [activeMaterialSlot, setActiveMaterialSlot] = useState<number | null>(null);
  const [showMaterialModal, setShowMaterialModal] = useState<boolean>(false);
  const [isSequencedGeneration, setIsSequencedGeneration] = useState<boolean>(false);
  const [showActionSheet, setShowActionSheet] = useState<
    "A" | "B" | "share" | null
  >(null);

  // Stats Counters
  const [creationsCount, setCreationsCount] = useState(3);
  const [favorites, setFavorites] = useState<VideoTemplate[]>([
    GlassBuildingTemplate,
  ]);
  const [historyIds, setHistoryIds] = useState<string[]>(["temp_delivery"]);
  const [exports, setExports] = useState<any[]>([
    {
      id: "exp-1",
      title: "高科技中草药加工流程展示",
      resolution: "4K (2160p)",
      fileSize: "42.8 MB",
      date: "今天 11:30",
    },
    {
      id: "exp-2",
      title: "中药生物制剂权威研发专利片",
      resolution: "1080p (60fps)",
      fileSize: "24.5 MB",
      date: "05-25",
    },
    {
      id: "exp-3",
      title: "企业首席科学家研发大楼推介",
      resolution: "1080p",
      fileSize: "19.1 MB",
      date: "05-21",
    },
  ]);

  // Video Generation loader states
  const [isAssembling, setIsAssembling] = useState<boolean>(false);
  const [assemblyProgress, setAssemblyProgress] = useState<number>(0);
  const [justGeneratedTemplate, setJustGeneratedTemplate] =
    useState<VideoTemplate | null>(null);
  const assembleTimeoutsRef = useRef<any[]>([]);

  // Keyboard open state for creation tab layout
  const [isCreateKeyboardOpen, setIsCreateKeyboardOpen] =
    useState<boolean>(false);
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState<boolean>(false);

  const [showSelectKeyframeModal, setShowSelectKeyframeModal] =
    useState<boolean>(false);

  // Toast / Overlay helpers
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Reset function back to out-of-the-box matching wireframe state
  const handleQuickReset = () => {
    setCurrentTab("create");
    setActivePreviewTemplate(null);
    setChatPrompt(null);
    setUploadedMaterials([null, null, null]);
    setCreateChatMaterials([]);
    setShowMaterialModal(false);
    setShowTemplateCreate(false);
    setShowActionSheet(null);
    setIsAssembling(false);
    setAssemblyProgress(0);
    setJustGeneratedTemplate(null);
    showToast("⚙️ 模拟器已重置到初始线框图配置");
  };

  // Triggering the AI Prompt Submission
  const handleStartChat = (
    promptText: string,
    t: VideoTemplate | null,
    resolution: string,
    d: string,
    isSmartStoryboard?: boolean,
    materials?: string[],
  ) => {
    if (isSmartStoryboard) {
      setShowSelectKeyframeModal(true);
    } else {
      setChatPrompt(promptText);
      setAttachedTemplate(t || null);
      setChatRatio(resolution);
      setChatDuration(d);
      if (materials && materials.length > 0) {
        setCreateChatMaterials(materials);
      } else {
        setCreateChatMaterials([]);
      }
    }
  };

  // Opening WeChat actionsheet menus
  const appMaterialUploadRef = useRef<HTMLInputElement>(null);

  const handleSlotAddMaterialsClick = (index?: number) => {
    setActiveMaterialSlot(typeof index === "number" ? index : null);
    // Shows Action Sheet Type A with "现在制作" like Image 11
    setShowActionSheet("A");
  };

  const handleAppMaterialUpload = (e: any) => {
    const files = Array.from(e.target.files || []) as File[];
    if (files.length === 0) return;
    const newAssets = files.map((file) => URL.createObjectURL(file));
    
    setUploadedMaterials((prev) => {
      const next = [...prev];
      if (activeMaterialSlot !== null && activeMaterialSlot >= 0 && activeMaterialSlot < 3) {
        next[activeMaterialSlot] = newAssets[0];
      } else {
        let i = 0;
        newAssets.forEach(asset => {
          while (i < 3 && next[i] !== null) i++;
          if (i < 3) {
            next[i] = asset;
            i++;
          }
        });
      }
      return next;
    });
    showToast(`📂 成功导入素材！`);
    if (appMaterialUploadRef.current) appMaterialUploadRef.current.value = "";
  };

  // Material upload actions choice
  const handleActionSheetOptionSelection = (option: string) => {
    if (option === "拍摄") {
      showToast("📸 摄像头已调用！请点击确定拍摄您的公司照片...");
      // Simulate taking a photo after 1 sec
      setTimeout(() => {
        const simulatedPhotos = [
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=350",
          "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=350",
        ];
        setUploadedMaterials((prev) => {
          const next = [...prev];
          if (activeMaterialSlot !== null && activeMaterialSlot >= 0 && activeMaterialSlot < 3) {
            next[activeMaterialSlot] = simulatedPhotos[0];
          } else {
            let i = 0;
            simulatedPhotos.forEach(asset => {
              while (i < 3 && next[i] !== null) i++;
              if (i < 3) {
                next[i] = asset;
                i++;
              }
            });
          }
          return next;
        });
        showToast("✅ 成功接入拍摄镜头，上传相册素材！");
      }, 1000);
    } else if (option === "上传") {
      appMaterialUploadRef.current?.click();
    } else if (option === "现在制作") {
      showToast("🚀 已极速载入智能默认媒体资产完成填充！");
      setUploadedMaterials([
        GlassBuildingTemplate.image,
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=250",
        null
      ]);
    }
  };

  // Deleting materials in upload manager gallery modal
  const handleDeleteMaterial = (idx: number) => {
    setUploadedMaterials((prev) => {
      const next = [...prev];
      next[idx] = null;
      return next;
    });
    showToast("🗑️ 成功移除了一个冗余文件素材");
  };

  // Completing the video script choice (Choosing 方案一 / 方案二)
  const handleChooseActiveSchema = (schemaNum: number, finalScript: string) => {
    setIsAssembling(true);
    setAssemblyProgress(10);

    // Clear any previous timeouts
    assembleTimeoutsRef.current.forEach(clearTimeout);
    assembleTimeoutsRef.current = [];

    // Simulate progressive automated video assets assembly loader steps
    const timer1 = setTimeout(() => setAssemblyProgress(35), 2400);
    const timer2 = setTimeout(() => setAssemblyProgress(70), 2900);
    const timer3 = setTimeout(() => {
      setAssemblyProgress(100);
      setCreationsCount((c) => c + 1);
      setIsAssembling(false);

      // Create event to tell MyTab to add an item
      const event = new CustomEvent("add-rendering-item", {
        detail: {
          title: attachedTemplate ? attachedTemplate.title : "企业宣传视频"
        }
      });
      window.dispatchEvent(event);

      // Update template content with generated output schemas!
      const customizedDraft: VideoTemplate = {
        id: "generated_id_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        title: attachedTemplate ? attachedTemplate.title : "企业宣传视频",
        style: attachedTemplate ? attachedTemplate.style : "自定义",
        image: attachedTemplate
          ? attachedTemplate.image
          : GlassBuildingTemplate.image,
        stats: "AI为您刚刚定制生成",
        tags: [
          "#AI智能推荐",
          "#品牌专区",
          `#方案${schemaNum === 1 ? "一" : "二"}`,
        ],
        description: finalScript,
        durationSec: chatDuration === "1-15s" ? 15 : 27,
      };

      setJustGeneratedTemplate(customizedDraft);
      setActivePreviewTemplate(customizedDraft);
      setChatPrompt(null); // safely close chat to preview generated content
      setCreateSelectedKeyframes([]);
      setTemplateSelectedKeyframes([]);
      setUploadedMaterials([]);
    }, 3600);

    assembleTimeoutsRef.current = [timer1, timer2, timer3];
  };

  const [createSelectedKeyframes, setCreateSelectedKeyframes] = useState<VideoTemplate[]>([]);
  const [templateSelectedKeyframes, setTemplateSelectedKeyframes] = useState<VideoTemplate[]>([]);

  const handleGenerateFromKeyframe = (
    kfs: VideoTemplate[],
    materialUrl?: string,
  ) => {
    setShowSelectKeyframeModal(false);

    if (showTemplateCreate) {
      setTemplateSelectedKeyframes((prev) => {
        const newKfs = kfs.filter((k) => !prev.some((p) => p.id === k.id));
        return [...prev, ...newKfs];
      });
      if (materialUrl) {
        setUploadedMaterials((prev) => [...prev, materialUrl]);
      }
      return;
    }

    if (isSequencedGeneration) {
      if (materialUrl) {
        setUploadedMaterials((prev) => [...prev, materialUrl]);
      }
      setTemplateSelectedKeyframes((prev) => {
        const newKfs = kfs.filter((k) => !prev.some((p) => p.id === k.id));
        return [...prev, ...newKfs];
      });
      setIsSequencedGeneration(false);
      setTimeout(() => {
        handleStartChat(
          "我想生成一个类似这个模版的视频",
          activePreviewTemplate || null,
          "16:9",
          "10-20s",
        );
      }, 300);
      return;
    }

    if (chatPrompt) {
      if (attachedTemplate) {
        setTemplateSelectedKeyframes((prev) => {
          const newKfs = kfs.filter((k) => !prev.some((p) => p.id === k.id));
          return [...prev, ...newKfs];
        });
      } else {
        setCreateSelectedKeyframes((prev) => {
          const newKfs = kfs.filter((k) => !prev.some((p) => p.id === k.id));
          return [...prev, ...newKfs];
        });
      }
      if (materialUrl) {
        setUploadedMaterials((prev) => [...prev, materialUrl]);
      }
      return;
    } else if (currentTab === "create") {
      setCreateSelectedKeyframes((prev) => {
        const newKfs = kfs.filter((k) => !prev.some((p) => p.id === k.id));
        return [...prev, ...newKfs];
      });
      if (materialUrl) {
        setUploadedMaterials((prev) => [...prev, materialUrl]);
      }
      return;
    }

    setActivePreviewTemplate(null);
    setChatPrompt(null);

    setIsAssembling(true);
    setAssemblyProgress(10);

    assembleTimeoutsRef.current.forEach(clearTimeout);
    assembleTimeoutsRef.current = [];

    const timer1 = setTimeout(() => setAssemblyProgress(35), 2400);
    const timer2 = setTimeout(() => setAssemblyProgress(70), 2900);
    const timer3 = setTimeout(() => {
      setAssemblyProgress(100);
      setCreationsCount((c) => c + 1);
      setIsAssembling(false);

      const customizedDraft: VideoTemplate = {
        id: "generated_id_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        title:
          kfs.length > 0 ? kfs[0].title || "混合关键帧视频" : "AI 生成视频",
        style: kfs.length > 0 ? kfs[0].style || "合成风" : "合成风",
        image: materialUrl || (kfs.length > 0 ? kfs[0].image : "/mock.png"),
        stats: "基于您的关键帧自动生成",
        tags: ["#AI智能推荐", "#精选素材"],
        description: `使用您保存的关键帧生成的高清视频。`,
        durationSec: 15,
      };

      setJustGeneratedTemplate(customizedDraft);
      setActivePreviewTemplate(customizedDraft);
    }, 3600);

    assembleTimeoutsRef.current = [timer1, timer2, timer3];
  };

  // Select screen name string to render on the simulator console sidebar
  const getSimulatedScreenName = () => {
    if (activePreviewTemplate)
      return `全屏视频预览 [${activePreviewTemplate.title}]`;
    if (chatPrompt) return "AI 剧本生成对话框 (视频生成)";
    if (currentTab === "template") return "微信标签 - 视频模板选择";
    if (currentTab === "create") return "微信标签 - 智能AI创作面板";
    if (currentTab === "keyframes") return "微信标签 - 关键帧编辑器";
    if (currentTab === "mine") return "微信标签 - Smiley 个人中心";
    return "微信小程序";
  };

  // Handle double clicks to simulate likes or shortcuts
  const handleCardDblClick = (template: VideoTemplate) => {
    if (favorites.some((f) => f.id === template.id)) {
      setFavorites((prev) => prev.filter((f) => f.id !== template.id));
      showToast("🤍 已取消收藏此视频格式文件件");
    } else {
      setFavorites((prev) => [...prev, template]);
      showToast("⭐️ 成功加入了我的个人资料收藏夹");
    }
  };

  const handleToggleFavorite = (t: VideoTemplate) => {
    if (favorites.some((f) => f.id === t.id)) {
      setFavorites((prev) => prev.filter((f) => f.id !== t.id));
      showToast("🤍 已取消收藏该模板");
    } else {
      setFavorites((prev) => [...prev, t]);
      showToast("⭐ 收藏成功");
    }
  };

  return (
    <PhoneContainer
      activeScreenName={getSimulatedScreenName()}
      onQuickReset={handleQuickReset}
    >
      {/* 2. Primary WeChat UI Frame space */}
      <div
        id="wechat-mini-program-viewport"
        className={`w-full h-full flex flex-col justify-between relative bg-transparent`}
      >
        {/* WeChat Standard Top App Title (hidden if Full screen preview is open) */}
        {!activePreviewTemplate && !chatPrompt && !isKeyframesFullScreen && (
          <div
            className={`bg-transparent pt-11 pb-3 flex items-center justify-between shrink-0 select-none relative ${currentTab === "template" ? "pl-[14px] pr-6" : "px-6"}`}
          >
            <div
              className={`flex-1 flex items-center ${currentTab === "template" ? "pr-3" : "pr-4"}`}
            >
              {currentTab === "template" && (
                <div className="relative w-full translate-y-[3px]">
                  <input
                    type="text"
                    value={templateSearchTerm}
                    onChange={(e) => setTemplateSearchTerm(e.target.value)}
                    placeholder="搜索视频模板关键词..."
                    className="w-full bg-neutral-800/80 text-white placeholder-gray-500 text-[11px] rounded-xl pl-7 pr-3 py-[7px] outline-none border border-transparent focus:border-neutral-700 focus:bg-neutral-800 transition-all font-sans"
                  />
                  <Search
                    size={12}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-500"
                  />
                </div>
              )}

              {currentTab === "keyframes" && (
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5 justify-center z-10 pointer-events-auto">
                  <button
                    type="button"
                    onClick={() => setKeyframesInternalTab("library")}
                    className={`relative pb-1 text-[14px] transition-all whitespace-nowrap outline-none [-webkit-tap-highlight-color:transparent] ${
                      keyframesInternalTab === "library"
                        ? "text-white font-bold scale-110 shadow-sm"
                        : "text-neutral-400 font-medium"
                    }`}
                  >
                    关键帧
                    {keyframesInternalTab === "library" && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-blue-500 rounded-full" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setKeyframesInternalTab("mine")}
                    className={`relative pb-1 text-[14px] transition-all whitespace-nowrap outline-none [-webkit-tap-highlight-color:transparent] ${
                      keyframesInternalTab === "mine"
                        ? "text-white font-bold scale-110 shadow-sm"
                        : "text-neutral-400 font-medium"
                    }`}
                  >
                    我的
                    {keyframesInternalTab === "mine" && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-blue-500 rounded-full" />
                    )}
                  </button>
                </div>
              )}
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
        )}

        {/* Tab content renderer router */}
        <div className="flex-1 overflow-hidden relative">
          {!activePreviewTemplate && !chatPrompt && (
            <>
              {currentTab === "template" && (
                <TemplateTab
                  searchTerm={templateSearchTerm}
                  setSearchTerm={setTemplateSearchTerm}
                  onSelectTemplate={(t) => {
                    // Record in history
                    if (!historyIds.includes(t.id)) {
                      setHistoryIds((prev) => [...prev, t.id]);
                    }
                    setIsPreviewingMyKeyframe(false);
                    setShowTemplateCreate(false);
                    setActivePreviewTemplate(t);
                  }}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  historyIds={historyIds}
                  isLoggedIn={isLoggedIn}
                  setShowLoginModal={setShowLoginModal}
                />
              )}
              {currentTab === "create" && (
                <CreateTab
                  onStartChat={handleStartChat}
                  onKeyframeModalOpen={() => setShowSelectKeyframeModal(true)}
                  selectedKeyframes={createSelectedKeyframes}
                  onRemoveKeyframe={(id) => {
                    setCreateSelectedKeyframes((prev) =>
                      prev.filter((kf) => kf.id !== id),
                    );
                  }}
                  onSelectTemp={(t) => {
                    setIsPreviewingMyKeyframe(false);
                    setShowTemplateCreate(false);
                    setActivePreviewTemplate(t);
                  }}
                  isKeyboardOpen={isCreateKeyboardOpen}
                  setIsKeyboardOpen={setIsCreateKeyboardOpen}
                  isLoggedIn={isLoggedIn}
                  setShowLoginModal={setShowLoginModal}
                />
              )}
              {currentTab === "keyframes" && (
                <KeyframesTab
                  internalTab={keyframesInternalTab}
                  setInternalTab={setKeyframesInternalTab}
                  myKeyframes={myKeyframes}
                  onFullScreenChange={setIsKeyframesFullScreen}
                  onPreviewMyKeyframe={(t) => {
                    setIsPreviewingMyKeyframe(true);
                    setShowTemplateCreate(false);
                    setActivePreviewTemplate(t);
                  }}
                  onSynthesize={(t) => {
                    setJustGeneratedTemplate(t);
                    setCreationsCount((c) => c + 1);
                    setIsPreviewingMyKeyframe(false);
                    setShowTemplateCreate(false);
                    setActivePreviewTemplate(t);
                  }}
                  onDeleteKeyframe={(id) => {
                    const updated = myKeyframes.filter((kf) => kf.id !== id);
                    setMyKeyframes(updated);
                    localStorage.setItem(
                      "xiaolu_my_keyframes",
                      JSON.stringify(updated),
                    );
                    showToast("🗑️ 关键帧已删除");
                  }}
                  onUpdateKeyframe={(id, newTitle) => {
                    const updated = myKeyframes.map((kf) =>
                      kf.id === id ? { ...kf, title: newTitle } : kf,
                    );
                    setMyKeyframes(updated);
                    localStorage.setItem(
                      "xiaolu_my_keyframes",
                      JSON.stringify(updated),
                    );
                    showToast("✅ 已保存对关键帧的修改");
                  }}
                  isLoggedIn={isLoggedIn}
                  setShowLoginModal={setShowLoginModal}
                />
              )}
              {currentTab === "mine" && (
                <MyTab
                  initialTab={myTabTarget}
                  creationsCount={creationsCount}
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                  onSelectTemplate={(t) => {
                    setIsPreviewingMyKeyframe(false);
                    setShowTemplateCreate(false);
                    setActivePreviewTemplate(t);
                  }}
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  showLoginModal={showLoginModal}
                  setShowLoginModal={setShowLoginModal}
                  exports={exports}
                  setExports={setExports}
                />
              )}
            </>
          )}

          {/* CHAT GENERATOR OVERLAY (Images 5, 6, 7) */}
          {chatPrompt && (
            attachedTemplate ? (
              <TemplateChatView
                prompt={chatPrompt}
                attachedTemplate={attachedTemplate}
                selectedRatio={chatRatio}
                selectedDuration={chatDuration}
                uploadedMaterials={createChatMaterials}
                selectedKeyframes={templateSelectedKeyframes}
                onRemoveKeyframe={(id) => {
                  setTemplateSelectedKeyframes((prev) =>
                    prev.filter((kf) => kf.id !== id),
                  );
                }}
                onBack={() => {
                  setChatPrompt(null);
                  setTemplateSelectedKeyframes([]);
                }}
                onMaterialModalOpen={() => setShowMaterialModal(true)}
                onKeyframeModalOpen={() => setShowSelectKeyframeModal(true)}
                onChooseActiveSchema={handleChooseActiveSchema}
                onGoToRenderingBox={() => {
                  setChatPrompt(null);
                  setTemplateSelectedKeyframes([]);
                  setCurrentTab("mine");
                  setMyTabTarget("rendering");
                  setActivePreviewTemplate(null);
                }}
              />
            ) : (
              <ChatView
                prompt={chatPrompt}
                attachedTemplate={attachedTemplate}
                selectedRatio={chatRatio}
                selectedDuration={chatDuration}
                uploadedMaterials={createChatMaterials}
                selectedKeyframes={createSelectedKeyframes}
                onRemoveKeyframe={(id) => {
                  setCreateSelectedKeyframes((prev) =>
                    prev.filter((kf) => kf.id !== id),
                  );
                }}
                onBack={() => {
                  setChatPrompt(null);
                  setCreateSelectedKeyframes([]);
                }}
                onMaterialModalOpen={() => setShowMaterialModal(true)}
                onKeyframeModalOpen={() => setShowSelectKeyframeModal(true)}
                onChooseActiveSchema={handleChooseActiveSchema}
                onGoToRenderingBox={() => {
                  setChatPrompt(null);
                  setCreateSelectedKeyframes([]);
                  setCurrentTab("mine");
                  setMyTabTarget("rendering");
                  setActivePreviewTemplate(null);
                }}
              />
            )
          )}

          {/* VIDEO DETAIL FULL ACTION PREVIEW VIEW (Images 2 & 3) */}
          {activePreviewTemplate && !chatPrompt && (
            showTemplateCreate ? (
              <TemplateCreateTab
                template={activePreviewTemplate}
                onStartChat={handleStartChat}
                myKeyframes={myKeyframes}
                selectedKeyframes={templateSelectedKeyframes}
                onAddKeyframes={(kfs) => {
                  setTemplateSelectedKeyframes((prev) => {
                    const newKfs = kfs.filter((k) => !prev.some((p) => p.id === k.id));
                    return [...prev, ...newKfs];
                  });
                }}
                onRemoveKeyframe={(id) => {
                  setTemplateSelectedKeyframes((prev) =>
                    prev.filter((kf) => kf.id !== id),
                  );
                }}
                isKeyboardOpen={isCreateKeyboardOpen}
                setIsKeyboardOpen={setIsCreateKeyboardOpen}
                isLoggedIn={isLoggedIn}
                setShowLoginModal={setShowLoginModal}
                onBack={() => setShowTemplateCreate(false)}
              />
            ) : (
            <VideoPreview
              template={activePreviewTemplate}
              isMyKeyframePreview={isPreviewingMyKeyframe}
              onBack={() => {
                if (activePreviewTemplate.id.startsWith("generated_id_")) {
                  const newExport = {
                    id: Date.now().toString(),
                    title: activePreviewTemplate.title,
                    resolution: "1080p (HD)",
                    fileSize: `${(Math.random() * 20 + 15).toFixed(1)} MB`,
                    date: "刚刚",
                  };
                  setExports((e) => {
                    if (
                      e.some(
                        (existing) =>
                          existing.title === newExport.title &&
                          existing.date === "刚刚",
                      )
                    )
                      return e;
                    return [newExport, ...e];
                  });
                  showToast("✅ 视频已自动保存到 '我的-已生成'");
                }
                if (activePreviewTemplate.id.startsWith("generated_from_history_")) {
                  setMyTabTarget("exports");
                  setCurrentTab("mine");
                }
                setActivePreviewTemplate(null);
              }}
              onMakeNow={() => {
                setShowTemplateCreate(true);
              }}
              onSaveKeyframe={(title, desc, image, style) => {
                if (isPreviewingMyKeyframe) {
                  const updatedFrames = myKeyframes.map((kf) =>
                    kf.id === activePreviewTemplate.id
                      ? {
                          ...kf,
                          title: title || kf.title,
                          description: desc || kf.description,
                          image: image || kf.image,
                          style: style || kf.style,
                        }
                      : kf,
                  );
                  setMyKeyframes(updatedFrames);
                  localStorage.setItem(
                    "xiaolu_my_keyframes",
                    JSON.stringify(updatedFrames),
                  );
                  showToast("✅ 已保存对关键帧的修改");
                  return;
                }

                const isCustomSaved = !!title || !!desc || !!image;
                const newTemplate = { 
                  ...activePreviewTemplate, 
                  id: "kf_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
                  isNew: true,
                  title: title || activePreviewTemplate.title,
                  description: desc || activePreviewTemplate.description,
                  style: style ? style : (isCustomSaved ? "自定义" : activePreviewTemplate.style),
                  image: image ? image : activePreviewTemplate.image,
                };
                const oldTemplates = myKeyframes.map((kf) => ({
                  ...kf,
                  isNew: false,
                }));
                const updated = [newTemplate, ...oldTemplates];
                setMyKeyframes(updated);
                localStorage.setItem(
                  "xiaolu_my_keyframes",
                  JSON.stringify(updated),
                );
                showToast("✅ 已保存到我的关键帧");
                if (!activePreviewTemplate.id.startsWith("generated_")) {
                  setKeyframesInternalTab("mine");
                  setCurrentTab("keyframes");
                  setActivePreviewTemplate(null);
                }
              }}
              isLoggedIn={isLoggedIn}
              setShowLoginModal={setShowLoginModal}
              isFavorited={favorites.some(
                (f) => f.id === activePreviewTemplate.id,
              )}
              onToggleFavorite={() =>
                handleToggleFavorite(activePreviewTemplate)
              }
              onShare={() => setShowActionSheet("share")}
              onDownload={() => {
                if (activePreviewTemplate.id.startsWith("generated_id_")) {
                  const newExport = {
                    id: Date.now().toString(),
                    title: activePreviewTemplate.title,
                    resolution: "1080p (HD)",
                    fileSize: `${(Math.random() * 20 + 15).toFixed(1)} MB`,
                    date: "刚刚",
                  };
                  setExports((e) => {
                    if (
                      e.some(
                        (existing) =>
                          existing.title === newExport.title &&
                          existing.date === "刚刚",
                      )
                    )
                      return e;
                    return [newExport, ...e];
                  });
                  showToast("✅ 下载成功并已保存！跳转到我的-已生成");
                  setMyTabTarget("exports");
                  setCurrentTab("mine");
                  setActivePreviewTemplate(null);
                } else {
                  showToast("✅ 下载成功，已保存到我的本地相册");
                }
              }}
            />
            )
          )}

          <SelectKeyframeModal
            isOpen={showSelectKeyframeModal}
            onClose={() => {
              setShowSelectKeyframeModal(false);
              setIsSequencedGeneration(false);
            }}
            myKeyframes={myKeyframes}
            onSelect={handleGenerateFromKeyframe}
            onDeleteKeyframe={(id) => {
              const updated = myKeyframes.filter((kf) => kf.id !== id);
              setMyKeyframes(updated);
              localStorage.setItem(
                "xiaolu_my_keyframes",
                JSON.stringify(updated),
              );
              showToast("🗑️ 关键帧已删除");
            }}
            onGoToKeyframes={() => {
              setShowSelectKeyframeModal(false);
              setActivePreviewTemplate(null);
              setKeyframesInternalTab("library");
              setCurrentTab("keyframes");
            }}
          />

          {/* MATERIAL GALLERY SHEET MODAL (Image 4) */}
          <input
            type="file"
            multiple
            ref={appMaterialUploadRef}
            className="hidden"
            accept="image/*,video/*"
            onChange={handleAppMaterialUpload}
          />
          <MaterialModal
            isOpen={showMaterialModal}
            onClose={() => {
              setShowMaterialModal(false);
              setIsSequencedGeneration(false);
            }}
            materials={uploadedMaterials}
            onAddMaterials={handleSlotAddMaterialsClick}
            onDeleteMaterial={handleDeleteMaterial}
            onNext={isSequencedGeneration ? () => {
              setShowMaterialModal(false);
              setUploadedMaterials([null, null, null]);
              setTimeout(() => {
                setShowSelectKeyframeModal(true);
              }, 300); // small delay to allow closing animation
            } : undefined}
          />

          {/* WECHAT TRIGGER POPUP MENU ACTION SHEETS (Image 11 & 12) */}
          <WeChatActionSheet
            isOpen={showActionSheet !== null}
            type={showActionSheet}
            onClose={() => setShowActionSheet(null)}
            onSelectOption={handleActionSheetOptionSelection}
          />
        </div>

        {/* 3. Bottom WeChat mini-program Tabbar Navigation panel */}
        {(chatPrompt || !activePreviewTemplate) &&
          !isCreateKeyboardOpen &&
          !isKeyframesFullScreen && (
            <div className="bg-black/95 backdrop-blur-md p-2 pb-5 flex justify-around items-center text-center select-none relative z-10 shrink-0 rounded-b-[40px] h-[84px]">
              {/* Tab 1: 关键帧 (Keyframes editor) */}
              <button
                id="tab-keyframes"
                onClick={() => {
                  setChatPrompt(null);
                  setShowTemplateCreate(false);
                  setActivePreviewTemplate(null);
                  setCurrentTab("keyframes");
                }}
                className={`flex flex-col items-center justify-center py-1.5 w-16 transition-all text-neutral-400 active:scale-95 cursor-pointer`}
              >
                {currentTab === "keyframes" ? (
                  /* Selected: Timeline line with active keyframe diamond */
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <div className="w-5 h-[2px] bg-white rounded-full" />
                    <div className="absolute left-[2px] w-2 h-2 bg-neutral-400 rounded-xs rotate-45" />
                    <div className="absolute left-[8px] w-2.5 h-2.5 bg-white border border-black rounded-xs rotate-45 scale-110 shadow-xs" />
                    <div className="absolute right-[2px] w-2 h-2 bg-neutral-400 rounded-xs rotate-45" />
                  </div>
                ) : (
                  /* Unselected: Outline neutral diamonds on line */
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    <div className="w-5 h-[2px] bg-neutral-700 rounded-full" />
                    <div className="absolute left-[2px] w-1.5 h-1.5 border-[1.5px] border-neutral-500 bg-black rotate-45" />
                    <div className="absolute left-[8px] w-1.5 h-1.5 border-[1.5px] border-neutral-500 bg-black rotate-45" />
                    <div className="absolute right-[2px] w-1.5 h-1.5 border-[1.5px] border-neutral-500 bg-black rotate-45" />
                  </div>
                )}
                <span
                  className={`text-[10px] mt-1 font-extrabold ${currentTab === "keyframes" ? "text-white" : "text-neutral-500"}`}
                >
                  关键帧
                </span>
              </button>

              {/* Tab 2: 创作 (Create / Template Segmented Control) */}
              <div className="relative flex items-center justify-center w-[160px] h-[60px]">
                <div className="flex bg-neutral-900/80 rounded-full p-1 items-center shadow-inner mt-1 absolute">
                  <button
                    onClick={() => {
                      setChatPrompt(null);
                      setShowTemplateCreate(false);
                      setActivePreviewTemplate(null);
                      setCurrentTab("template");
                    }}
                    className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                      currentTab === "template"
                        ? "bg-neutral-800 shadow-sm text-white"
                        : "text-neutral-400 hover:text-neutral-300"
                    }`}
                  >
                    模板
                  </button>
                  <button
                    onClick={() => {
                      setChatPrompt(null);
                      setShowTemplateCreate(false);
                      setActivePreviewTemplate(null);
                      setCurrentTab("create");
                    }}
                    className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                      currentTab === "create"
                        ? "bg-neutral-800 shadow-sm text-white"
                        : "text-neutral-400 hover:text-neutral-300"
                    }`}
                  >
                    生成
                  </button>
                </div>
              </div>

              {/* Tab 3: 我的 (Smiley setup) */}
              <button
                id="tab-mine"
                onClick={() => {
                  setChatPrompt(null);
                  setShowTemplateCreate(false);
                  setActivePreviewTemplate(null);
                  setCurrentTab("mine");
                  setMyTabTarget("rendering");
                }}
                className={`flex flex-col items-center justify-center py-1.5 w-16 transition-all text-neutral-400 active:scale-95 cursor-pointer`}
              >
                {currentTab === "mine" ? (
                  /* Selected: CircleUser */
                  <Smile size={21} strokeWidth={2.5} className="text-white" />
                ) : (
                  /* Unselected: CircleUser */
                  <Smile
                    size={21}
                    strokeWidth={2}
                    className="text-neutral-500"
                  />
                )}
                <span
                  className={`text-[10px] mt-1 font-extrabold ${currentTab === "mine" ? "text-white" : "text-neutral-500"}`}
                >
                  我的
                </span>
              </button>
            </div>
          )}

        {/* 4. Automated Video Assembling Loader dialog overlay */}
        {isAssembling && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center z-50 px-6 select-none animate-fade-in">
            <div className="bg-[#1c1c1e] rounded-3xl relative pt-8 pb-6 px-6 text-center space-y-4 w-full max-w-xs shadow-2xl text-neutral-200 border border-neutral-800">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                {/* Spinning loader ring */}
                <div className="absolute inset-0 border-4 border-neutral-800 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin" />
                <span className="text-[10px] font-black text-blue-500 font-mono">
                  {assemblyProgress}%
                </span>
              </div>
              <div className="space-y-1">
                <blockquote className="text-[13px] font-black text-white">
                  正在生成渲染您的视频...
                </blockquote>
                <p className="text-[10px] text-neutral-400 leading-normal">
                  小鹿拍拍正在为您挑选精细素材剪辑、融合脚本，退出可在我的页面进行中查看...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 5. Microtoast Alert bubble */}
        {toastMessage && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-neutral-950/85 backdrop-blur-md text-white text-[10px] font-semibold px-4 py-2 rounded-xl z-[999] text-center shadow-lg border border-neutral-800/50 flex items-center gap-1.5 max-w-[280px]">
            <span className="truncate">{toastMessage}</span>
          </div>
        )}

        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={() => {
              localStorage.setItem("xiaolu_is_logged_in_v3", "true");
              setIsLoggedIn(true);
              setShowLoginModal(false);
            }}
            triggerToast={showToast}
          />
        )}
      </div>
    </PhoneContainer>
  );
}
