import React, { useState, useEffect, useRef } from "react";
import { 
  User, 
  Award, 
  ShieldCheck, 
  History, 
  Star, 
  Settings, 
  CreditCard, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Download, 
  Layers, 
  FolderLock, 
  Headphones, 
  Receipt, 
  X, 
  ChevronRight, 
  Trash2, 
  Edit3, 
  AlertCircle,
  Copy,
  Plus,
  LogOut,
  Smartphone,
  MessageCircle
} from "lucide-react";
import { VideoTemplate, ExportItem } from "../types";

interface MyTabProps {
  creationsCount: number;
  onSelectTemplate: (template: VideoTemplate) => void;
  favorites: VideoTemplate[];
  onToggleFavorite: (template: VideoTemplate) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
  showLoginModal: boolean;
  setShowLoginModal: (v: boolean) => void;
  initialTab?: "rendering" | "exports" | "favorites";
  exports: ExportItem[];
  setExports: React.Dispatch<React.SetStateAction<ExportItem[]>>;
}

interface RenderItem {
  id: string;
  title: string;
  progress: number;
  status: "rendering" | "queued" | "paused";
}

export default function MyTab({ creationsCount, onSelectTemplate, favorites, onToggleFavorite, isLoggedIn, setIsLoggedIn, showLoginModal, setShowLoginModal, initialTab, exports, setExports }: MyTabProps) {
  // 1. Account Settings States
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem("xiaolu_user_nickname") || "华康数智媒介专家";
  });
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [userAvatar, setUserAvatar] = useState<string>(() => {
    return localStorage.getItem("xiaolu_user_avatar") || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150";
  });
  const avatarUploadRef = useRef<HTMLInputElement>(null);

  // 2. Paid Subscription Box States
  const [currentPlan, setCurrentPlan] = useState<"standard" | "premium" | "unlimited">(() => {
    return (localStorage.getItem("xiaolu_current_plan") as any) || "premium";
  });
  const [remainingUsage, setRemainingUsage] = useState<number>(() => {
    const saved = localStorage.getItem("xiaolu_remaining_usage");
    return saved ? parseInt(saved, 10) : 85;
  });
  const [totalQuota, setTotalQuota] = useState<number>(() => {
    const saved = localStorage.getItem("xiaolu_total_quota");
    return saved ? parseInt(saved, 10) : 120;
  });

  const [showRechargeModal, setShowRechargeModal] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [showInvoicingModal, setShowInvoicingModal] = useState<boolean>(false);
  const [showAllExportsModal, setShowAllExportsModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"rendering" | "exports" | "favorites">(initialTab || "rendering");

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // 3. Render Status Queue (Generating)
  const [renders, setRenders] = useState<RenderItem[]>([
    { id: "render-1", title: "中药提取流水线智能特写视频", progress: 68, status: "rendering" },
    { id: "render-2", title: "高净空气流体力学制药车间实景", progress: 0, status: "queued" },
    { id: "render-3", title: "华康医药产品宣发视频1", progress: 0, status: "queued" },
    { id: "render-4", title: "华康医药工厂实力展示", progress: 0, status: "queued" }
  ]);

  // 5. Export History Records 
  // (Lifted to App.tsx)

  // Interactive Toast Bubble inside MyTab
  const [subToast, setSubToast] = useState<string | null>(null);
  const triggerToast = (msg: string) => {
    setSubToast(msg);
    setTimeout(() => setSubToast(null), 2500);
  };

  useEffect(() => {
    const handleAddRenderingItem = (e: any) => {
      setRenders(prev => [
        {
          id: "render-" + Date.now(),
          title: e.detail.title,
          progress: 5,
          status: "rendering"
        },
        ...prev
      ]);
    };
    
    window.addEventListener("add-rendering-item", handleAddRenderingItem);
    return () => window.removeEventListener("add-rendering-item", handleAddRenderingItem);
  }, []);

  // Automated Rendering Simulation inside profile page
  useEffect(() => {
    const interval = setInterval(() => {
      setRenders(prev => {
        let completedItems: typeof prev = [];
        
        const nextRenders = prev.map(item => {
          if (item.status === "rendering") {
            const nextProgress = item.progress + 4;
            if (nextProgress >= 100) {
              completedItems.push(item);
              return { ...item, progress: 100, status: "paused" };
            }
            return { ...item, progress: nextProgress };
          } else if (item.status === "queued" && Math.random() > 0.6) {
            return { ...item, status: "rendering", progress: 5 };
          }
          return item;
        });

        // Perform side effects outside of the strict map loop but still inside updater...
        // Wait, React StrictMode double-invokes the updater function.
        // To be completely safe, we shouldn't mutate external state here.
        // But since this is just a mockup, let's make it idempotent enough or just use a ref.
        // Or simply schedule the state update in a setTimeout to avoid React warnings during render sequence.
        if (completedItems.length > 0) {
          setTimeout(() => {
            completedItems.forEach(item => {
              const newExport: ExportItem = {
                id: "exp-" + Date.now() + "-" + Math.random().toString(36).substring(2, 9),
                title: item.title,
                resolution: "1080p (HD)",
                fileSize: `${(Math.random() * 20 + 15).toFixed(1)} MB`,
                date: "刚刚"
              };
              setExports(e => {
                // Prevent duplicate insertions caused by StrictMode
                if (e.some(existing => existing.title === item.title && existing.date === "刚刚")) return e;
                return [newExport, ...e];
              });
              triggerToast(`🎉 视频【${item.title}】渲染成功并移至导出记录！`);
            });
          }, 0);
        }

        return nextRenders.filter(item => item.progress < 100);
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleUpdateNickname = () => {
    if (!userName.trim()) return;
    localStorage.setItem("xiaolu_user_nickname", userName);
    setIsEditingName(false);
    triggerToast("✨ 账号昵称更新成功");
  };

  const handleSelectPlan = (plan: "standard" | "premium" | "unlimited", price: string, quota: number) => {
    setCurrentPlan(plan);
    setTotalQuota(quota);
    setRemainingUsage(quota);
    localStorage.setItem("xiaolu_current_plan", plan);
    localStorage.setItem("xiaolu_remaining_usage", quota.toString());
    localStorage.setItem("xiaolu_total_quota", quota.toString());
    setShowRechargeModal(false);
    triggerToast(`💰 成功订购 【${plan === "unlimited" ? "至尊无限版" : plan === "premium" ? "核心企业高级包" : "个人标准体验包"}】！`);
  };

  const handleDeleteExport = (id: string, name: string) => {
    setExports(prev => prev.filter(e => e.id !== id));
    triggerToast(`🗑️ 已删除生成记录【${name}】`);
  };

  const handleCancelRender = (id: string, name: string) => {
    setRenders(prev => prev.filter(r => r.id !== id));
    triggerToast(`🗑️ 已中止【${name}】的后台合成任务`);
  };

  const handleCopyDownloadUrl = (title: string) => {
    const fakeUrl = `https://xiaolu-storage.com/export/${Date.now().toString(36)}.mp4`;
    navigator.clipboard.writeText(fakeUrl);
    triggerToast(`📋 已安全拷贝【${title}】的4K超清下载直链！`);
  };

  const displayRenders = isLoggedIn ? renders : [];
  const displayExports = isLoggedIn ? exports : [];
  const displayFavorites = isLoggedIn ? favorites : [];

  return (
    <div id="reconstructed-my-tab" className="overflow-y-auto h-full text-neutral-200 bg-[#0a0a0b] select-none">
      <div className="flex flex-col min-h-full space-y-4 pt-4">
        
        {/* A. USER HIGHER PROFILE CARD (Account Settings Box) */}
      <div className="bg-neutral-900 rounded-2xl mx-4 p-4 mt-2 shadow-sm border border-neutral-800 relative pb-3 flex flex-col items-center">
        
        {/* Top-Right: Logout */}
        <div className="absolute top-3 right-3 flex flex-col items-center gap-1.5">
          {isLoggedIn && (
            <button
              onClick={() => {
                localStorage.setItem("xiaolu_is_logged_in_v3", "false");
                setIsLoggedIn(false);
                triggerToast("👋 已退出登录");
              }}
              className="w-6 h-6 bg-transparent hover:bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:text-red-500 cursor-pointer transition"
              title="退出登录"
            >
              <LogOut size={14} />
            </button>
          )}
        </div>

        {/* Circular Interactive Avatar */}
        <div 
          className="relative group shrink-0 cursor-pointer login-modal-content mt-3"
          onClick={() => {
            if (!isLoggedIn) {
              setShowLoginModal(true);
            } else {
              avatarUploadRef.current?.click();
            }
          }}
          title={isLoggedIn ? "点击上传小鹿拍拍专属头像" : "点击登录"}
        >
          <div className="w-[60pt] h-[60pt] rounded-full border-2 border-indigo-650/15 overflow-hidden shadow-3xs bg-neutral-800 flex items-center justify-center">
            {isLoggedIn ? (
              <img src={userAvatar} alt="user avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            ) : (
              <User size={40} className="text-neutral-500" />
            )}
          </div>
        </div>
        <input 
          type="file" 
          ref={avatarUploadRef} 
          accept="image/*" 
          className="hidden" 
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                const dataUrl = event.target.result as string;
                setUserAvatar(dataUrl);
                try { localStorage.setItem("xiaolu_user_avatar", dataUrl); } catch {}
                triggerToast("📸 头像上传成功！");
              }
            };
            reader.readAsDataURL(file);
          }} 
        />

        {/* Account Details / Nickname */}
        <div className="flex flex-col items-center gap-1.5 min-w-0 mt-3 mb-1 w-full relative">
          {!isLoggedIn ? (
            <button 
              onClick={() => setShowLoginModal(true)}
              className="text-[15px] font-black text-white leading-tight select-none cursor-pointer outline-none hover:text-blue-500 transition-colors login-modal-content mt-1"
            >
              立即登录
            </button>
          ) : (
            <>
              {/* Plan Badge */}
              <div className="flex justify-center w-full">
                <span className={`text-[8.5px] font-extrabold px-1.5 py-0.5 rounded-sm flex items-center justify-center gap-0.5 leading-none border ${
                  currentPlan === "unlimited" ? "bg-purple-50 text-purple-700 border-purple-200" :
                  currentPlan === "premium" ? "bg-yellow-50 text-amber-700 border-amber-200" :
                  "bg-gradient-to-r from-blue-950 to-black text-blue-100 border-blue-900 shadow-sm"
                }`}>
                  <Award size={9} className={currentPlan === "standard" ? "fill-blue-500/30 text-blue-300" : "fill-amber-600/10"} />
                  <span>{currentPlan === "unlimited" ? "至尊无限版" : currentPlan === "premium" ? "核心企业高级包" : "标准体验包"}</span>
                </span>
              </div>

              {/* Username row */}
              {isEditingName ? (
                <input 
                  type="text" 
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)} 
                  onBlur={() => {
                     setIsEditingName(false);
                     if (userName.trim()) localStorage.setItem("xiaolu_user_nickname", userName);
                  }}
                  onKeyDown={(e) => {
                     if (e.key === 'Enter') {
                        setIsEditingName(false);
                        if (userName.trim()) localStorage.setItem("xiaolu_user_nickname", userName);
                     }
                  }}
                  autoFocus
                  className="text-[15px] font-black text-white text-center border-b border-neutral-600 outline-none leading-tight bg-transparent max-w-[150px]"
                />
              ) : (
                <div 
                  className="flex items-center justify-center group cursor-pointer relative"
                  onClick={() => setIsEditingName(true)}
                >
                  <span className="text-[15px] font-black text-white leading-tight select-none text-center">
                    {userName}
                  </span>
                  <div className="absolute -right-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Edit3 size={12} className="text-neutral-400" />
                  </div>
                </div>
              )}
            </>
          )}
          
          {!isLoggedIn && (
            <span className="text-[10px] text-gray-400 mt-0.5">
              登录后体验更多强大功能
            </span>
          )}
        </div>


      </div>

      {/* B. UTILITIES (功能宫格) */}
      <div className="flex justify-between mx-4 my-2 gap-2">
        <button 
          onClick={() => isLoggedIn ? setShowRechargeModal(true) : setShowLoginModal(true)}
          className="flex-1 flex flex-row items-center justify-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer active:scale-[0.98] py-3 bg-[#1c1c1e] rounded-[12px] border border-white/5"
        >
          <Award size={15} className="text-white/90 fill-white/20" />
          <span className="text-[12px] font-medium text-white/90 tracking-wide">套餐充值</span>
        </button>
        
        <button 
          onClick={() => isLoggedIn ? setShowContactModal(true) : setShowLoginModal(true)}
          className="flex-1 flex flex-row items-center justify-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer active:scale-[0.98] py-3 bg-[#1c1c1e] rounded-[12px] border border-white/5"
        >
          <Headphones size={15} className="text-white/90 fill-white/20" />
          <span className="text-[12px] font-medium text-white/90 tracking-wide">人工客服</span>
        </button>

        <button 
          onClick={() => isLoggedIn ? setShowInvoicingModal(true) : setShowLoginModal(true)}
          className="flex-1 flex flex-row items-center justify-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer active:scale-[0.98] py-3 bg-[#1c1c1e] rounded-[12px] border border-white/5"
        >
          <Receipt size={15} className="text-white/90 fill-white/20" />
          <span className="text-[12px] font-medium text-white/90 tracking-wide">开发票</span>
        </button>
      </div>

      {/* C, D & E merged into TABS SECTION */}
      <div className="text-left overflow-hidden flex-1 flex flex-col">
        
        {/* Sub-tabs text row matching image 2 style */}
        <div className="flex border-b border-neutral-800/80 mt-2 sticky top-0 bg-[#0a0a0b] z-10 w-full">
            <div className="flex w-full justify-around px-2 pt-3">
                <button onClick={() => setActiveTab('rendering')} className={`flex items-center gap-1.5 text-[12px] pb-3 -mb-[2px] border-b-[2px] transition-colors relative z-10 outline-none [-webkit-tap-highlight-color:transparent] ${activeTab === 'rendering'? 'text-white font-bold border-white' : 'text-neutral-500 border-transparent'}`}>
                  <Clock size={16} />
                  <span>进行中 ({displayRenders.length})</span>
                </button>
                <button onClick={() => setActiveTab('exports')} className={`flex items-center gap-1.5 text-[12px] pb-3 -mb-[2px] border-b-[2px] transition-colors relative z-10 outline-none [-webkit-tap-highlight-color:transparent] ${activeTab === 'exports'? 'text-white font-bold border-white' : 'text-neutral-500 border-transparent'}`}>
                  <Download size={16} />
                  <span>已生成</span>
                </button>
                <button onClick={() => setActiveTab('favorites')} className={`flex items-center gap-1.5 text-[12px] pb-3 -mb-[2px] border-b-[2px] transition-colors relative z-10 outline-none [-webkit-tap-highlight-color:transparent] ${activeTab === 'favorites'? 'text-[#facc15] font-bold border-[#facc15]' : 'text-neutral-500 border-transparent'}`}>
                  <Star size={16} className={activeTab === 'favorites' ? "fill-[#facc15]" : ""} />
                  <span>收藏</span>
                </button>
            </div>
        </div>

        {/* Tab Content Body */}
        <div className="bg-[#0a0a0b] flex-1 flex flex-col min-h-[400px]">
          {activeTab === 'rendering' && (
            !isLoggedIn ? (
              <div className="text-center flex-1 flex flex-col justify-center items-center text-neutral-500 text-[10px] space-y-1.5 mx-1 mt-1 mb-2">
                <p>暂未登录，无法查看记录哦！</p>
              </div>
            ) : displayRenders.length === 0 ? (
              <div className="text-center flex-1 flex flex-col justify-center items-center text-neutral-500 text-[10px] space-y-1.5 mx-1 mt-1 mb-2">
                <p>🌟 暂无后台活跃渲染，极速引擎已空闲</p>
                <p className="text-[9px] text-neutral-600">您在“创作”标签生成的视频作品将在此显示实时进度</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-[1px] mt-0.5">
                {displayRenders.map(item => (
                  <div key={item.id} className="relative aspect-[3/4] bg-neutral-900 border border-blue-500/10 overflow-hidden group">
                     <div className="absolute inset-0 p-2 flex flex-col justify-between">
                       <span className="text-[11px] font-extrabold text-white text-left line-clamp-3 leading-snug">{item.title}</span>
                       <div className="w-full flex-1 flex flex-col items-center justify-center">
                         <div className="w-10 h-10 flex items-center justify-center relative mb-1">
                            <svg viewBox="0 0 40 40" className="w-full h-full absolute top-0 left-0 -rotate-90">
                               <circle cx="20" cy="20" r="17" fill="none" className="stroke-neutral-800" strokeWidth="3" />
                               {item.status === "rendering" && (
                                  <circle cx="20" cy="20" r="17" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="106.8" strokeDashoffset={106.8 - (106.8 * item.progress) / 100} strokeLinecap="round" className="transition-all duration-500 ease-linear" />
                               )}
                            </svg>
                               {item.status === "rendering" ? (
                                  <span className="text-[9px] text-blue-400 font-bold relative z-10">{item.progress}%</span>
                               ) : (
                                  <span className="text-[8px] text-orange-400 font-bold relative z-10 w-full text-center tracking-tighter scale-90 whitespace-nowrap">排队中</span>
                               )}
                         </div>
                       </div>

                       <div className="flex w-full justify-end items-end mt-auto">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCancelRender(item.id, item.title);
                            }}
                            className="w-5 h-5 rounded-full bg-black/50 text-neutral-400 hover:text-red-500 flex items-center justify-center shadow-sm transition-colors"
                          >
                            <Trash2 size={10} />
                          </button>
                       </div>
                     </div>
                  </div>
                ))}
              </div>
            )
          )}

          {activeTab === 'exports' && (
            !isLoggedIn ? (
              <div className="text-center flex-1 flex flex-col justify-center items-center text-neutral-500 text-[10px] space-y-1 mx-1 mt-1 mb-2">
                <p>暂未登录，无法查看记录哦！</p>
              </div>
            ) : displayExports.length === 0 ? (
              <div className="text-center flex-1 flex flex-col justify-center items-center text-neutral-500 text-[10px] space-y-1 mx-1 mt-1 mb-2">
                <p>空空如也，快去创作您的第一个作品吧！</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-[1px] mt-0.5">
                {displayExports.map((item) => (
                  <div 
                    key={item.id}
                    className="group cursor-pointer relative aspect-[3/4] bg-neutral-800 shrink-0 overflow-hidden"
                    onClick={() => {
                      onSelectTemplate({
                         id: "generated_from_history_" + item.id,
                         image: "/mock.png", 
                         title: item.title, 
                         stats: "您的AI作品",
                         tags: ["#AI生成", "#超清档案"], 
                         description: `这是您在创作区生成的历史记录片段：【${item.title}】。您可以再次回顾它的完整内容与分镜设定。`,
                         style: "创作记录",
                         durationSec: 15
                      }); 
                    }}
                  >
                    <div className="absolute inset-0 bg-neutral-900 border border-emerald-500/10 hover:border-emerald-500/30 transition-all"></div>
                    <div className="absolute inset-0 p-2 flex flex-col justify-between">
                       <div>
                         <span className="text-[11px] font-bold text-emerald-400 line-clamp-3 leading-snug">{item.title}</span>
                         <span className="text-[9px] text-neutral-400 font-mono scale-90 origin-left inline-block">{item.fileSize}</span>
                       </div>
                       <div className="flex w-full justify-between items-end mt-auto">
                          <span className="text-[9px] text-neutral-400 bg-black/40 px-1 py-0.5 rounded">{item.date}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteExport(item.id, item.title);
                            }}
                            className="w-5 h-5 rounded-full bg-black/50 text-neutral-400 hover:text-red-500 flex items-center justify-center transition-colors shadow-sm"
                          >
                            <Trash2 size={10} />
                          </button>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {activeTab === 'favorites' && (
            !isLoggedIn ? (
              <div className="text-center flex-1 flex flex-col justify-center items-center px-6 text-neutral-500 text-[10px] space-y-1 mx-1 mt-1 mb-2">
                <p className="leading-relaxed">暂未登录，无法查看记录哦！</p>
              </div>
            ) : displayFavorites.length === 0 ? (
              <div className="text-center flex-1 flex flex-col justify-center items-center px-6 text-neutral-500 text-[10px] space-y-1 mx-1 mt-1 mb-2">
                <p className="leading-relaxed">暂无收藏模板，您可以去“模板”页面挑一挑并点击缩略图的黄色星星收藏</p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-[1px] mt-0.5">
                {displayFavorites.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => onSelectTemplate(template)}
                    className="group bg-neutral-800 cursor-pointer overflow-hidden relative aspect-[3/4]"
                  >
                    <img 
                      src={template.image} 
                      alt={template.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[400ms] select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between">
                       <span className="self-start bg-black/45 backdrop-blur-xs text-white px-2 py-0.5 text-[9px] rounded-sm font-bold scale-90 origin-top-left mt-1.5 ml-1.5 absolute">
                         {template.style}
                       </span>
                       <div className="flex-1"></div>
                       <h4 className="text-[11px] font-bold text-neutral-100 p-2 tracking-tight leading-snug line-clamp-2">
                         {template.title}
                       </h4>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isLoggedIn) {
                          setShowLoginModal(true);
                          return;
                        }
                        onToggleFavorite(template);
                      }}
                      className={`absolute top-1.5 right-1.5 rounded-full p-2 shadow-md scale-90 transition-all active:scale-[0.8] z-20 flex items-center justify-center ${
                        favorites.some(f => f.id === template.id)
                          ? "bg-amber-400 text-white"
                          : "bg-black/30 hover:bg-black/50 text-white backdrop-blur-xs"
                      }`}
                    >
                      <Star 
                        size={15} 
                        className={favorites.some(f => f.id === template.id) ? "fill-white text-white" : "text-white/90"} 
                      />
                    </button>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>



      {/* H. FOOTER MARGINS / TECH BRAND (Humble minimal footer credit line only) */}
      <div className="text-center py-2 select-none">
        <p className="text-[8.5px] text-neutral-500 tracking-wider">
   
        </p>
      </div>




      {/* ==================== 1. Pricing / Recharge Modal Selection ==================== */}
      {showRechargeModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-6 select-none leading-relaxed">
          <div className="bg-gradient-to-br from-[#1c1c1e]/90 to-[#0c0c0e]/70 backdrop-blur-3xl rounded-[32px] p-5 text-neutral-200 border border-white/10 w-full max-w-xs shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.02)] relative select-none">
            
            <button 
              onClick={() => setShowRechargeModal(false)}
              className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-neutral-800/50 hover:bg-gray-150 flex items-center justify-center text-gray-400"
            >
              <X size={12} />
            </button>

            <div className="text-center space-y-1 mb-4">
              <span className="text-xs bg-blue-500/20 text-blue-300 font-extrabold px-2.5 py-0.5 rounded-full inline-block">会员与算力包充值</span>
              <h4 className="text-[13px] font-black text-white mt-1">请选择您的企业级额度计划</h4>
            </div>

            <div className="space-y-2.5">
              
              {/* Option 1: Standard */}
              <div 
                onClick={() => handleSelectPlan("standard", "¥99", 15)}
                className={`p-2.5 rounded-xl cursor-pointer active:scale-[0.98] transition-all flex justify-between items-center bg-gradient-to-br from-blue-950 via-slate-900 to-black border border-blue-900/50 shadow-md shadow-blue-900/10 hover:shadow-blue-900/40`}
              >
                <div className="text-left">
                  <h5 className="text-[9.5px] font-black text-white">个人标准尝鲜套餐</h5>
                  <p className="text-[8.5px] text-blue-200/60">包含 15 次 4K 极速无水印渲染</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-blue-400">¥99</span>
                </div>
              </div>

              {/* Option 2: Premium (Recommended) */}
              <div 
                onClick={() => handleSelectPlan("premium", "¥499", 120)}
                className="p-2.5 border-2 border-indigo-500 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 cursor-pointer active:scale-[0.98] transition-all flex justify-between items-center relative"
              >
                <span className="absolute -top-2 right-4 bg-indigo-600 text-[7.5px] text-white px-1.5 py-0.2 rounded-full font-black uppercase">
                  推荐性价比
                </span>
                <div className="text-left">
                  <h5 className="text-[9.5px] font-black text-indigo-100">深耕企业高级包 (最畅销)</h5>
                  <p className="text-[8.5px] text-indigo-300 font-bold">包含 120 次 + AI 专属配音方案</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-indigo-400">¥499</span>
                </div>
              </div>

              {/* Option 3: Unlimited */}
              <div 
                onClick={() => handleSelectPlan("unlimited", "¥1999", 1500)}
                className="p-2.5 border border-neutral-700 hover:border-amber-500 rounded-xl bg-neutral-800/50/50 hover:bg-amber-50/10 cursor-pointer active:scale-[0.98] transition-all flex justify-between items-center"
              >
                <div className="text-left">
                  <h5 className="text-[9.5px] font-black text-white">至尊定制无限大包</h5>
                  <p className="text-[8.5px] text-gray-400">包含 1500 次 4K + 离线训练模型授权</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-black text-amber-600">¥1999</span>
                </div>
              </div>

            </div>

            <p className="text-[8.5px] text-gray-400 text-center mt-3.5 leading-tight">
              支付将通过绑定的“微信商户通道”安全交易结算，支持对账。
            </p>
          </div>
        </div>
      )}

      {/* ==================== 2. Contact Invoicing Modal ==================== */}
      {showInvoicingModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-6 select-none leading-relaxed">
          <div className="bg-gradient-to-br from-[#1c1c1e]/90 to-[#0c0c0e]/70 backdrop-blur-3xl rounded-[32px] p-5 text-neutral-200 border border-white/10 w-full max-w-xs shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.02)] relative select-none">
            
            <button 
              onClick={() => setShowInvoicingModal(false)}
              className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-neutral-800/50 hover:bg-gray-150 flex items-center justify-center text-gray-400"
            >
              <X size={12} />
            </button>

            <div className="text-center space-y-1 mb-4">
              <span className="text-xs bg-purple-500/20 text-purple-300 font-extrabold px-2.5 py-0.5 rounded-full inline-block">发票开具与对账明细</span>
              <h4 className="text-[13px] font-black text-white mt-1">发票申请、订单管理</h4>
            </div>

            <div className="space-y-2 text-[10px] text-neutral-400 pb-2">
              <p className="font-extrabold text-neutral-300">1. 本月可开票总额：</p>
              <div className="bg-neutral-800/50 p-2.5 rounded-xl border border-neutral-700 font-mono text-xs font-black text-white flex justify-between">
                <span>累计￥499.00</span>
                <span className="text-emerald-500 font-bold text-[9.5px]">未开具</span>
              </div>
              
              <div className="bg-purple-500/10 p-2.5 rounded-xl border border-purple-500/20 text-purple-200 text-[8.5px] leading-relaxed">
                华康医药集团股份有限公司的纳税编码、开票名称已经在 **“企业关键帧”** 模块中维护。系统在您点击时自动匹配企业信息，无需重复填报，极速电子发票已接入税务局直连。
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowInvoicingModal(false);
                  triggerToast("⚡ 电子普通发票已秒级申请成功！正发送至 138-xxxx-3998绑定的微信卡包中");
                }}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold active:scale-[0.98] transition-all text-center mt-2.5 shadow-sm"
              >
                一键开具电子发票
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 3. Contact Support Modal ==================== */}
      {showContactModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-6 select-none leading-relaxed">
          <div className="bg-gradient-to-br from-[#1c1c1e]/90 to-[#0c0c0e]/70 backdrop-blur-3xl rounded-[32px] p-5 text-neutral-200 border border-white/10 w-full max-w-xs shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.02)] relative select-none">
            
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-neutral-800/50 hover:bg-gray-150 flex items-center justify-center text-gray-400"
            >
              <X size={12} />
            </button>

            <div className="text-center space-y-1 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mx-auto">
                <Headphones size={20} />
              </div>
              <h4 className="text-[13px] font-black text-white mt-1.5">联系您的专属客户顾问</h4>
            </div>

            <div className="space-y-3.5 text-center text-[10px] text-neutral-400">
              <div className="bg-neutral-800/50 p-3 rounded-2xl border border-neutral-800 text-left space-y-1">
                <p className="font-extrabold text-neutral-300">1v1 VIP 微信金质客服：</p>
                <p className="font-bold text-blue-400 select-all font-mono text-[10.5px]">微信 / Tel：xiaolupaipaicustomerservice</p>
                <p className="text-[8.5px] text-neutral-400">全天候 24H 随时在线响应视频模版定制、算力特调申请</p>
              </div>

              <div className="flex gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText("xiaolupaipaicustomerservice");
                    triggerToast("📋 微信号已黏贴至您的切板，请在微信中添加");
                    setShowContactModal(false);
                  }}
                  className="bg-blue-600 text-white rounded-full px-4 py-2 font-bold text-xs hover:bg-blue-700 active:scale-95 transition-all text-center"
                >
                  拷贝专属微信号
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="bg-neutral-800 text-neutral-300 rounded-full px-4 py-2 font-bold text-xs hover:bg-neutral-700 active:scale-95 transition-all text-center"
                >
                  关闭
                </button>
              </div>
            </div>

          </div>
        </div>
      )}



      {/* Internal interactive sub-toast alerts */}
      {subToast && (
        <div className="fixed top-1/4 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm text-white text-[9.5px] font-extrabold px-3 py-1.8 rounded-xl z-55 text-center shadow-lg border border-neutral-700 flex items-center gap-1 max-w-[200px]">
          <span className="truncate">{subToast}</span>
        </div>
      )}

    </div>
      </div>
  );
}
