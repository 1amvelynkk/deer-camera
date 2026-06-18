import React, { useState, useRef } from "react";
import {
  Sparkles,
  Building2,
  RefreshCw,
  Trash2,
  Edit3,
  Smartphone,
  ArrowRight,
  Eye,
  ShieldAlert,
  CheckCircle2,
  ChevronDown,
  X,
  ChevronLeft,
  Plus,
} from "lucide-react";
import { VideoTemplate } from "../types";

// Premium high-fidelity mock image assets
const MOCK_LEAF_LOGO =
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=150";
const MOCK_REPRESENTATIVE_WOMAN =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500";

interface BrandConfig {
  logoUrl: string;
  companyName: string;
  slogan: string;
  address: string;
  contact: string;
}

const DEFAULT_BRAND_CONFIG: BrandConfig = {
  logoUrl: "",
  companyName: "杭州绿境保洁科技有限公司",
  slogan: "",
  address: "杭州市上城区滨江路100号",
  contact: "13175017711",
};

interface TemplatePreset {
  id: string;
  title: string;
  category: "联系名片" | "封面" | "企业荣誉" | "营销口号" | "水印元素";
  aspectRatio?: "9:16" | "16:9";
  desc: string;
  bgGradient: string;
  pillColor: string;
  textColor: string;
  badgeText: string;
  coverImage?: string; // High-fidelity static cover image URL
}

const PRESET_TEMPLATES: TemplatePreset[] = [
  {
    id: "temp_greeland_clean_16_9",
    title: "横版轻雅封面",
    category: "封面",
    aspectRatio: "16:9",
    desc: "16:9 优雅绿意高透，经典高亮药丸，打造极简绿色清新质感",
    bgGradient: "from-white through-emerald-50/10 to-emerald-50/30",
    pillColor: "bg-[#22c55e] text-white border-emerald-500",
    textColor: "text-white",
    badgeText: "推荐",
    coverImage: "/coverl1.png",
  },
  {
    id: "temp_greeland_clean",
    title: "绿境轻雅封面",
    category: "封面",
    aspectRatio: "9:16",
    desc: "优雅绿意高透，经典高亮药丸，搭载典雅代言大图，打造极简绿色清新质感",
    bgGradient: "from-white through-emerald-50/10 to-emerald-50/30",
    pillColor: "bg-[#22c55e] text-white border-emerald-500",
    textColor: "text-white",
    badgeText: "推荐",
    coverImage: "/cover1.png",
  },
  {
    id: "temp_intro_clean",
    title: "极光高透封面",
    category: "封面",
    aspectRatio: "9:16",
    desc: "经典双重渐变高透，瞬间吸引眼球和注意力，轻便极简配置",
    bgGradient: "from-sky-50 to-blue-50/50",
    pillColor: "bg-blue-600 text-white border-blue-500",
    textColor: "text-white",
    badgeText: "精选",
    coverImage: "/cover2.png",
  },
  {
    id: "temp_intro_dark",
    title: "领袖尊贵封面",
    category: "封面",
    aspectRatio: "9:16",
    desc: "配合大气的深夜商务渐变色，尊享深沉高端奢昂排版格局",
    bgGradient: "from-slate-900 to-black",
    pillColor: "bg-amber-500 text-slate-950 border-amber-600",
    textColor: "text-white",
    badgeText: "高端",
    coverImage: "/cover3.jpeg",
  },
  {
    id: "temp_special_feature_16_9",
    title: "横版极智荣誉",
    category: "企业荣誉",
    aspectRatio: "16:9",
    desc: "16:9 暖白清雅科技风，强调重要参数与产品特点高光透出",
    bgGradient: "from-neutral-50 to-orange-50/40",
    pillColor: "bg-orange-600 text-white border-orange-500",
    textColor: "text-white",
    badgeText: "核心",
    coverImage: "/awal1.png",
  },
  {
    id: "temp_special_feature",
    title: "高亮极智荣誉",
    category: "企业荣誉",
    aspectRatio: "9:16",
    desc: "暖白清雅科技风，强调重要参数与产品特点高光透出",
    bgGradient: "from-neutral-50 to-orange-50/40",
    pillColor: "bg-orange-600 text-white border-orange-500",
    textColor: "text-white",
    badgeText: "核心",
    coverImage: "/awa1.png",
  },
  {
    id: "temp_outro_guard",
    title: "悬浮透亮联系名片",
    category: "联系名片",
    aspectRatio: "9:16",
    desc: "绿意工业风，精细工艺一目了然",
    bgGradient: "from-emerald-950 to-emerald-900",
    pillColor: "bg-emerald-600 text-white border-emerald-450",
    textColor: "text-white",
    badgeText: "经典",
    coverImage: "/con1.png",
  },
  {
    id: "temp_outro_guard_16_9_1",
    title: "横版经典黑金名片",
    category: "联系名片",
    aspectRatio: "16:9",
    desc: "16:9 经典黑金名片，高端大气",
    bgGradient: "from-slate-950 to-slate-900",
    pillColor: "bg-amber-600 text-white border-amber-500",
    textColor: "text-slate-100",
    badgeText: "高端",
    coverImage: "/conl1.jpeg",
  },
  {
    id: "temp_outro_guard_16_9_2",
    title: "横版通透名片",
    category: "联系名片",
    aspectRatio: "16:9",
    desc: "16:9 悬浮透亮联系名片，工业与科技",
    bgGradient: "from-blue-950 to-emerald-900",
    pillColor: "bg-blue-600 text-white border-blue-450",
    textColor: "text-white",
    badgeText: "精选",
    coverImage: "/conl2.png",
  },
  {
    id: "temp_slogan_1",
    title: "营销通栏横幅",
    category: "营销口号",
    aspectRatio: "16:9",
    desc: "冲击力极强的营销横幅，快速抓住用户眼球",
    bgGradient: "from-red-950 to-red-800",
    pillColor: "bg-red-600 text-white border-red-500",
    textColor: "text-white",
    badgeText: "热门",
    coverImage: "/slogan1.png",
  },
  {
    id: "temp_slogan_2",
    title: "活动促销海报",
    category: "营销口号",
    aspectRatio: "9:16",
    desc: "竖版活动海报，适合展示主推优惠",
    bgGradient: "from-orange-900 to-orange-700",
    pillColor: "bg-orange-600 text-white border-orange-500",
    textColor: "text-white",
    badgeText: "新款",
    coverImage: "/slogan2.png",
  },
  {
    id: "temp_slogan_3",
    title: "品牌宣言版式",
    category: "营销口号",
    aspectRatio: "16:9",
    desc: "凸显品牌价值主张的横版宣言",
    bgGradient: "from-purple-900 to-purple-800",
    pillColor: "bg-purple-600 text-white border-purple-500",
    textColor: "text-white",
    badgeText: "精选",
    coverImage: "/slogan3.png",
  },
  {
    id: "temp_watermark_2",
    title: "护航光棒元素",
    category: "水印元素",
    aspectRatio: "9:16",
    desc: "赛博朋克光棒边框，为内容添加炫彩点缀",
    bgGradient: "from-slate-800 to-black",
    pillColor: "bg-white/10 text-white border-white/20",
    textColor: "text-white",
    badgeText: "新款",
    coverImage: "/stick1.png",
  },
];

const renderTemplateInner = (presetId: string, config: BrandConfig) => {
  const company = config.companyName || "未输入公司名";
  const slogan = config.slogan || "专业服务 高效省心";
  const address = config.address || "未配置服务地址";
  const contact = config.contact || "13175017711";

  // Split slogan into pills if possible, or use defaults
  let pills = ["专业团队", "服务高效", "省时省力"];
  if (config.slogan && config.slogan.trim()) {
    const customPills = config.slogan.split(/[,，\s、]+/).filter(Boolean);
    if (customPills.length > 0) {
      pills = customPills.slice(0, 3);
    }
  }

  switch (presetId) {
    case "temp_outro_guard": {
      const isGreenBrand = company.includes("绿境");
      const displayName = isGreenBrand
        ? "绿境保洁服务"
        : company.length > 6
          ? company.substring(0, 6)
          : company;
      return (
        <div
          id="temp-outro-guard-preview"
          className="w-full h-full relative flex flex-col items-center justify-between p-1.5 select-none bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400')",
          }}
        >
          {/* Subtle dark tint to improve contrast */}
          <div className="absolute inset-0 bg-black/15 z-0" />

          {/* Centered vertical white-green card matching uploaded image exactly */}
          <div className="w-[88%] bg-neutral-900 rounded border-[1.5px] border-[#61b147]/45 shadow-md flex flex-col overflow-hidden my-auto z-10 text-neutral-200">
            {/* Card Header Section: Leaf logo + text */}
            <div className="bg-neutral-900 px-2 py-1.5 flex flex-col items-center justify-center border-b border-dashed border-[#61b147]/20">
              <div className="flex items-center gap-1.5 justify-center">
                {config.logoUrl ? (
                  <img
                    src={config.logoUrl}
                    alt="Logo"
                    className="w-5 h-5 rounded-full object-cover shrink-0 border border-neutral-800"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-300 via-green-400 to-[#59b042] flex items-center justify-center shrink-0 shadow-5xs relative overflow-hidden">
                    <span className="text-[6.5px] text-white font-black leading-none drop-shadow-5xs">
                      绿
                    </span>
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-yellow-300/40 blur-4xs" />
                  </div>
                )}
                <div className="flex flex-col text-left leading-none -space-y-0.5">
                  <span className="text-[8px] font-black tracking-tight text-[#4e9737] truncate max-w-[70px]">
                    {displayName}
                  </span>
                  <span className="text-[4px] font-extrabold text-slate-400 scale-[0.85] origin-left">
                    GREEN SERVICE
                  </span>
                </div>
              </div>
            </div>

            {/* Manager info section */}
            <div className="py-4 px-1 flex flex-col items-center justify-center text-center">
              <span className="text-[#519f3b] text-[12px] font-black tracking-wide leading-none">
                赵经理
              </span>

              {/* Green separator */}
              <div className="w-12 h-[1px] bg-[#61b147]/30 my-1 rounded" />

              <span className="text-white text-[11px] font-black font-sans tracking-tight leading-none">
                {contact}
              </span>
            </div>

            {/* Green Bottom details brand block */}
            <div className="bg-[#59b042] px-2 py-2 text-center text-white space-y-0.5 shrink-0 border-t border-[#61b147]/10">
              <p className="text-[6px] font-black tracking-wider truncate leading-tight">
                {company}
              </p>
              <p className="text-[5px] font-bold text-emerald-100 truncate tracking-wide leading-none scale-[0.85] origin-center">
                {address}
              </p>
            </div>
          </div>

          {/* Light Translucent floating caption banner */}
          <div className="w-[88%] mb-2.5 bg-neutral-900/90 border border-neutral-700/50 rounded shadow-5xs py-1 px-1.5 text-left z-10 text-[6px] font-black text-neutral-300 flex items-center gap-1.5 leading-none">
            <div className="bg-blue-600 text-white text-[5px] font-black px-1 py-0.5 rounded-xs shrink-0 scale-[0.85] origin-center">
              效
            </div>
            <span className="text-neutral-300 tracking-wider">
              抓紧联系我们吧！
            </span>
          </div>
        </div>
      );
    }

    case "temp_greeland_clean":
      return (
        <div
          id="temp-greeland-clean-preview"
          className="w-full h-full bg-gradient-to-b from-white via-emerald-50/10 to-emerald-50/25 relative flex flex-col justify-between p-2 select-none"
        >
          {/* Logo Header */}
          <div className="flex items-center gap-1 shrink-0">
            {config.logoUrl ? (
              <img
                src={config.logoUrl}
                alt="Logo"
                className="w-3.5 h-3.5 rounded-full object-cover shrink-0 border border-neutral-700"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <span className="text-[5.5px] text-white font-black">绿</span>
              </div>
            )}
            <div className="flex flex-col leading-none -space-y-0.5">
              <span className="text-[6px] font-black tracking-tighter text-neutral-200 scale-[0.85] origin-left truncate max-w-[50px]">
                {company}
              </span>
              <span className="text-[3.5px] font-bold text-slate-400 scale-[0.7] origin-left">
                GREEN SERVICE
              </span>
            </div>
          </div>

          {/* Stacked Green Pills */}
          <div className="flex flex-col gap-1 items-end absolute top-[30px] right-1.5 z-10">
            {pills.map((pill, idx) => (
              <div
                key={idx}
                className="bg-[#22c55e] text-white font-black rounded-sm px-1.5 py-0.5 text-[5.5px] tracking-tighter text-center border border-emerald-500 shadow-4xs scale-[0.85] origin-right"
              >
                {pill}
              </div>
            ))}
          </div>

          {/* Bottom Portrait Woman Photo */}
          <div className="absolute right-0 bottom-0 left-0 h-[70%] overflow-hidden flex items-end justify-center">
            <img
              src={MOCK_REPRESENTATIVE_WOMAN}
              alt="Rep"
              className="w-[72px] h-[95px] object-cover object-top filter contrast-[1.02] brightness-[1.03]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Transparent Glass Subtitle Banner overlay on the bottom */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[92%] bg-neutral-900/90 backdrop-blur-3xs px-1 py-0.5 border border-neutral-800 rounded-md shadow-4xs text-center z-25">
            <p className="text-[5.5px] font-extrabold text-[#15803d] truncate scale-[0.85] leading-normal">
              {company} <span className="text-neutral-300">真诚为您服务</span>
            </p>
          </div>
        </div>
      );

    case "temp_intro_clean":
      return (
        <div
          id="temp-intro-clean-preview"
          className="w-full h-full bg-gradient-to-b from-sky-50 via-indigo-50/10 to-blue-50/30 relative flex flex-col justify-between p-2 select-none"
        >
          {/* Logo Header */}
          <div className="flex items-center gap-1">
            {config.logoUrl ? (
              <img
                src={config.logoUrl}
                alt="Logo"
                className="w-3.5 h-3.5 rounded-full object-cover shrink-0 border border-neutral-700"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-3.5 h-3.5 rounded-full bg-blue-150 flex items-center justify-center shrink-0">
                <Building2 size={7} className="text-blue-600" />
              </div>
            )}
            <span className="text-[6px] font-black text-neutral-200 truncate tracking-tighter scale-[0.85] origin-left">
              {company}
            </span>
          </div>

          {/* Slogan details */}
          <div className="flex-1 my-1 flex flex-col justify-center items-center text-center px-1">
            <span className="bg-blue-600 text-white rounded-xs text-[4.5px] font-black px-1 scale-[0.8] mb-0.5">
              封面推荐
            </span>
            <p className="text-[6.5px] font-extrabold text-blue-900 tracking-tight leading-snug line-clamp-3">
              {slogan}
            </p>
          </div>

          {/* Glass footer fields */}
          <div className="bg-neutral-900/95 border border-slate-150 py-0.5 px-1 rounded-sm shadow-4xs text-left max-w-full">
            <p className="text-[5px] text-neutral-500 font-medium truncate scale-90 origin-left">
              📍 {address}
            </p>
            <p className="text-[5px] text-white font-bold truncate scale-90 origin-left">
              📞 {contact}
            </p>
          </div>
        </div>
      );

    case "temp_intro_dark":
      return (
        <div
          id="temp-intro-dark-preview"
          className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-950 to-black relative flex flex-col justify-between p-2 text-white border border-white/5 select-none"
        >
          {/* Logo Header */}
          <div className="flex items-center gap-1">
            {config.logoUrl ? (
              <img
                src={config.logoUrl}
                alt="Logo"
                className="w-3.5 h-3.5 rounded-full object-cover shrink-0 border border-slate-700"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-3.5 h-3.5 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
                <Building2 size={7} className="text-slate-950" />
              </div>
            )}
            <span className="text-[6px] font-black text-amber-400 truncate tracking-tighter scale-[0.85] origin-left">
              {company}
            </span>
          </div>

          {/* Slogan */}
          <div className="flex-1 my-1 flex flex-col justify-center items-center text-center px-1">
            <span className="border border-amber-500/50 text-amber-400 bg-amber-500/10 rounded px-1 text-[4.5px] font-bold scale-[0.8] mb-0.5">
              尊贵极夜
            </span>
            <p className="text-[6.5px] font-black text-white tracking-widest leading-snug line-clamp-3">
              {slogan}
            </p>
          </div>

          {/* Dark footer details with gold border */}
          <div className="bg-slate-950/95 border border-amber-500/20 py-0.5 px-1 rounded-sm shadow-4xs text-left">
            <p className="text-[4.5px] text-slate-400 truncate leading-tight">
              📍 {address}
            </p>
            <p className="text-[4.5px] text-amber-350 font-bold truncate leading-tight">
              📞 {contact}
            </p>
          </div>
        </div>
      );

    case "temp_special_feature":
      return (
        <div
          id="temp-special-feature-preview"
          className="w-full h-full bg-gradient-to-b from-neutral-50 via-orange-50/10 to-orange-50/20 relative flex flex-col justify-between p-2 select-none"
        >
          {/* Top header */}
          <div className="flex items-center gap-1">
            {config.logoUrl ? (
              <img
                src={config.logoUrl}
                alt="Logo"
                className="w-3.5 h-3.5 rounded-full object-cover shrink-0 border border-neutral-700"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-3.5 h-3.5 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-[5px] text-orange-600 font-bold">🎖</span>
              </div>
            )}
            <span className="text-[6px] font-bold text-neutral-200 truncate tracking-tighter scale-[0.85] origin-left">
              {company}
            </span>
          </div>

          {/* Highlight certification or title */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-1 leading-snug">
            <span className="bg-orange-600 text-white font-extrabold text-[4.5px] px-1 rounded scale-[0.8] mb-0.5">
              荣誉推荐
            </span>
            <p className="text-[6.5px] font-black text-[#c2410c]">{company}</p>
            <p className="text-[5.5px] text-neutral-500 font-semibold line-clamp-2 mt-0.5 leading-snug">
              荣获行业十佳清洁保障服务
            </p>
          </div>

          {/* Feature points mini-list */}
          <div className="bg-neutral-900/80 border border-orange-100 p-1 rounded-sm text-left text-[5px] space-y-0.5 shadow-5xs">
            <div className="flex items-center gap-1 text-slate-605">
              <span className="text-orange-500 font-bold">✔</span>
              <span className="truncate">{slogan || "贴心家政专业清洁"}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-605">
              <span className="text-orange-500 font-bold">✔</span>
              <span className="truncate">客户真实五星高分好评</span>
            </div>
          </div>
        </div>
      );

    case "temp_special_tech":
      return (
        <div
          id="temp-special-tech-preview"
          className="w-full h-full bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 relative flex flex-col justify-between p-2 text-white border border-white/5 select-none font-mono"
        >
          {/* Top logo */}
          <div className="flex items-center gap-1">
            {config.logoUrl ? (
              <img
                src={config.logoUrl}
                alt="Logo"
                className="w-3.5 h-3.5 rounded-full object-cover shrink-0 border border-slate-800"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-3.5 h-3.5 bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                <span className="text-[4.5px] text-cyan-400 font-black">⚙</span>
              </div>
            )}
            <span className="text-[6px] font-black text-cyan-400 truncate tracking-tighter scale-[0.9] origin-left">
              {company}
            </span>
          </div>

          {/* Technology parameter display */}
          <div className="flex-1 flex flex-col justify-center items-left text-left px-1 mt-0.5 leading-none">
            <span className="text-cyan-400 text-[4.5px] font-bold tracking-widest scale-[0.8] origin-left">
              TECH STYLES
            </span>
            <div className="h-[1px] bg-cyan-500/20 my-0.5 w-full" />
            <p className="text-[6px] text-white font-semibold truncate">
              {slogan}
            </p>
            <p className="text-[4.5px] text-slate-400 mt-0.5">
              STATUS: CERTIFIED
            </p>
          </div>

          {/* Sci-fit neon border box */}
          <div className="bg-slate-900 border border-cyan-500/15 p-1 rounded font-mono text-left text-[4px] tracking-tighter leading-tight text-slate-300">
            <p className="truncate">LOC: {address}</p>
            <p className="text-cyan-400 font-black truncate">CALL: {contact}</p>
          </div>
        </div>
      );

    case "temp_slogan_1":
      return (
        <div
          className="w-full h-full relative flex items-center justify-center p-4 select-none bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=400')",
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          <span className="text-white text-base font-black text-center tracking-wider drop-shadow-2xl z-10 leading-relaxed md:text-xl relative max-w-[80%]">
            {slogan || "极简设计，极致体验"}
          </span>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-slate-150 text-slate-400 flex items-center justify-center text-[9px] select-none font-bold">
          暂未配置
        </div>
      );
  }
};

interface KeyframesTabProps {
  internalTab: "library" | "mine";
  setInternalTab: (tab: "library" | "mine") => void;
  myKeyframes: VideoTemplate[];
  myLogos: { title: string; url: string }[];
  setMyLogos: React.Dispatch<React.SetStateAction<{ title: string; url: string }[]>>;
  mySlogans: { title: string; slogan: string }[];
  setMySlogans: React.Dispatch<React.SetStateAction<{ title: string; slogan: string }[]>>;
  onSynthesize: (customTemplate: VideoTemplate) => void;
  onPreviewMyKeyframe: (template: VideoTemplate) => void;
  onDeleteKeyframe: (id: string) => void;
  onUpdateKeyframe?: (id: string, newTitle: string) => void;
  onAddKeyframe?: (newKf: VideoTemplate) => void;
  isLoggedIn: boolean;
  setShowLoginModal: (v: boolean) => void;
  onFullScreenChange?: (isFull: boolean) => void;
}

const isHorizontalItem = (kf: any) => {
  if (kf.isLandscape !== undefined) return kf.isLandscape;
  if (kf.aspectRatio) return kf.aspectRatio === "16:9";
  const strMatch = [kf.image || '', kf.title || ''].join(' ');
  // Exclude 'awa' to avoid classifying awa1.png as horizontal
  return strMatch.includes('l1') || strMatch.includes('l2') || strMatch.includes('home1') || strMatch.includes('16_9') || strMatch.includes('横版') || strMatch.includes('横幅') || strMatch.includes('slogan');
};

const getLayoutCols = (items: any[]) => {
  const leftCol: any[] = [];
  const rightCol: any[] = [];

  items.forEach((kf) => {
    const isH = isHorizontalItem(kf);
    
    let leftHeight = 0;
    let leftLastIsH = false;
    leftCol.forEach((k) => {
      const isKH = isHorizontalItem(k);
      leftHeight += isKH ? 0.56 : 1.77;
      leftLastIsH = isKH;
    });

    let rightHeight = 0;
    let rightLastIsH = false;
    rightCol.forEach((k) => {
      const isKH = isHorizontalItem(k);
      rightHeight += isKH ? 0.56 : 1.77;
      rightLastIsH = isKH;
    });

    if (isH) {
      if (leftHeight <= rightHeight) {
        if (leftLastIsH && !rightLastIsH) {
          rightCol.push(kf);
        } else {
          leftCol.push(kf);
        }
      } else {
        if (rightLastIsH && !leftLastIsH) {
          leftCol.push(kf);
        } else {
          rightCol.push(kf);
        }
      }
    } else {
      if (leftHeight <= rightHeight) {
        leftCol.push(kf);
      } else {
        rightCol.push(kf);
      }
    }
  });

  return { leftCol, rightCol };
};

export default function KeyframesTab({
  internalTab,
  setInternalTab,
  myKeyframes,
  myLogos,
  setMyLogos,
  mySlogans,
  setMySlogans,
  onSynthesize,
  onPreviewMyKeyframe,
  onDeleteKeyframe,
  onUpdateKeyframe,
  onAddKeyframe,
  isLoggedIn,
  setShowLoginModal,
  onFullScreenChange,
}: KeyframesTabProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState<string>("");

  // Load configuration from localStorage
  const [config, setConfig] = useState<BrandConfig>(() => {
    const saved = localStorage.getItem("xiaolu_compact_brand_v3");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_BRAND_CONFIG;
      }
    }
    return DEFAULT_BRAND_CONFIG;
  });

  // Current selected active preset id
  const [selectedPresetId, setSelectedPresetId] = useState<string>(
    "temp_greeland_clean",
  );

  // Category switching (the three buttons)
  const [activeCategory, setActiveCategory] = useState<
    "联系名片" | "封面" | "企业荣誉" | "营销口号" | "水印元素"
  >("封面");

  // Aspect ratio state
  const [aspectRatio] = useState<"9:16">("9:16");

  const [usedPresets, setUsedPresets] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("xiaolu_used_presets");
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  const [savedPresets, setSavedPresets] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("xiaolu_saved_presets");
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Config Modal State
  const [expandedPresetId, _setExpandedPresetId] = useState<string | null>(null);
  const setExpandedPresetId = React.useCallback((id: string | null) => {
    _setExpandedPresetId(id);
    if (onFullScreenChange) onFullScreenChange(!!id);
  }, [onFullScreenChange]);
  
  const [isConfigModalOpen, setIsConfigModalOpen] = useState<boolean>(false);
  const [previewingMyKf, setPreviewingMyKf] = useState<VideoTemplate | null>(null);
  const [configModalStep, setConfigModalStep] = useState<1 | 2>(1);

  // Compiling progress status
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [compileProgress, setCompileProgress] = useState<number>(0);

  // Picture selections file/camera inputs reference
  const logoUploadRef = useRef<HTMLInputElement>(null);
  const keyframeUploadRef = useRef<HTMLInputElement>(null);
  const myLogoUploadRef = useRef<HTMLInputElement>(null);
  const [keyframeUrl, setKeyframeUrl] = useState<string>("");
  const [showLogoInputPrompt, setShowLogoInputPrompt] = useState(false);
  const [logoPromptMode, setLogoPromptMode] = useState<"new" | "edit">("new");
  const [editingLogoIndex, setEditingLogoIndex] = useState<number>(-1);
  const [tempLogoTitleInput, setTempLogoTitleInput] = useState("");
  const [tempLogoUrl, setTempLogoUrl] = useState<string>("");
  const [showSloganInputPrompt, setShowSloganInputPrompt] = useState(false);
  const [sloganPromptMode, setSloganPromptMode] = useState<"new" | "edit">("new");
  const [editingSloganIndex, setEditingSloganIndex] = useState<number>(-1);
  const [tempSloganInput, setTempSloganInput] = useState("");
  const [tempSloganTitleInput, setTempSloganTitleInput] = useState("");

  const saveConfig = (updated: BrandConfig) => {
    localStorage.setItem("xiaolu_compact_brand_v3", JSON.stringify(updated));
  };

  const updateField = (field: keyof BrandConfig, value: string) => {
    const updated = { ...config, [field]: value };
    setConfig(updated);
    saveConfig(updated);
  };

  const handleImageUploaded = (
    field: keyof BrandConfig,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        updateField(field, event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleKeyframeUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setKeyframeUrl(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleMyLogoUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setTempLogoUrl(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCategoryChange = (
    cat: "联系名片" | "封面" | "企业荣誉" | "营销口号" | "水印元素",
  ) => {
    setActiveCategory(cat);
  };

  React.useEffect(() => {
    const availablePresets = PRESET_TEMPLATES.filter(
      (p) => p.category === activeCategory,
    );
    if (
      availablePresets.length > 0 &&
      !availablePresets.find((p) => p.id === selectedPresetId)
    ) {
      setSelectedPresetId(availablePresets[0].id);
    }
  }, [activeCategory, selectedPresetId]);

  const startSynthesis = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setIsCompiling(true);
    setCompileProgress(0);
    const interval = setInterval(() => {
      setCompileProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsCompiling(false);
            setIsConfigModalOpen(false);
            setExpandedPresetId(null);

            const activePreset =
              PRESET_TEMPLATES.find((p) => p.id === selectedPresetId) ||
              PRESET_TEMPLATES[0];

            const newUsedPresets = Array.from(
              new Set([...usedPresets, activePreset.id]),
            );
            setUsedPresets(newUsedPresets);
            localStorage.setItem(
              "xiaolu_used_presets",
              JSON.stringify(newUsedPresets),
            );

            const newSavedPresets = Array.from(
              new Set([...savedPresets, activePreset.id]),
            );
            setSavedPresets(newSavedPresets);
            localStorage.setItem(
              "xiaolu_saved_presets",
              JSON.stringify(newSavedPresets),
            );

            const customTitle = config.companyName
              ? `${config.companyName.substring(0, 10)} ${activePreset.title}`
              : activePreset.title;

            const compiledVideo: VideoTemplate = {
              id: "compiled_" + Date.now(),
              title: customTitle,
              style: activePreset.category,
              image: config.logoUrl || MOCK_LEAF_LOGO,
              stats: "小鹿拍拍智造视频已完美输出",
              tags: [config.companyName, config.slogan]
                .map((item) => "#" + item.trim())
                .slice(0, 2),
              description: `【生成报告】一键生成的「${activePreset.title}」高保真关键帧打包。
企业名称：${config.companyName}
广告语：${config.slogan}
地址：${config.address}
联系名片：${config.contact}`,
              durationSec: 15,
            };

            onSynthesize(compiledVideo);
          }, 350);
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  const resetData = () => {
    const emptyConfig = {
      logoUrl: "",
      companyName: "",
      slogan: "",
      address: "",
      contact: "",
    };
    setConfig(emptyConfig);
    saveConfig(emptyConfig);
    const newSavedPresets = savedPresets.filter(
      (id) => id !== selectedPresetId,
    );
    setSavedPresets(newSavedPresets);
    localStorage.setItem(
      "xiaolu_saved_presets",
      JSON.stringify(newSavedPresets),
    );
  };

  const activePreset =
    PRESET_TEMPLATES.find((p) => p.id === selectedPresetId) ||
    PRESET_TEMPLATES[0];

  return (
    <div
      id="keyframes-tab-panel"
      className="px-1 py-4 space-y-5 overflow-y-auto h-full pb-4 text-neutral-200 bg-[#0a0a0b] flex flex-col"
    >
      {/* ==================== UPPER MODULE: "关键帧模版" ==================== */}
      <div className="select-none space-y-4 flex-1 flex flex-col">
        {/* Category Switch Buttons Row */}
        <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-[11px] font-bold text-neutral-500 border-b border-neutral-800 shrink-0">
          {(
            [
              "封面",
              "联系名片",
              "企业荣誉",
              "营销口号",
              "水印元素",
            ] as const
          ).map((catName) => {
            let activeStyles = "border-white text-white font-bold";
            let defaultStyles = "border-neutral-700 text-neutral-400 hover:border-neutral-500";
            return (
            <button
              key={catName}
              type="button"
              onClick={() => handleCategoryChange(catName)}
              className={`px-2.5 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all border bg-transparent ${
                activeCategory === catName
                  ? activeStyles
                  : defaultStyles
              }`}
            >
              {catName}
            </button>
            );
          })}
        </div>

        {internalTab === "library" ? (
          <>

            {/* Live miniature template choices grid */}
            {(() => {
              const filteredPresets = PRESET_TEMPLATES.filter((p) => p.category === activeCategory);
              const { leftCol: presetLeft, rightCol: presetRight } = getLayoutCols(filteredPresets);

              return (
              <div className="flex gap-1 items-start mt-2.5 pb-2 select-none min-h-[160pt]">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-1">
                  {presetLeft
                    .map((preset) => {
                      const isSelected = selectedPresetId === preset.id;
                      return (
                        <div
                          key={preset.id}
                          onClick={() => {
                            if (!isLoggedIn) {
                              setShowLoginModal(true);
                              return;
                            }
                            setSelectedPresetId(preset.id);
                            setExpandedPresetId(preset.id);
                            setConfigModalStep(1);
                            setKeyframeUrl("");
                            setIsConfigModalOpen(false);
                          }}
                          className={`group flex flex-col bg-neutral-900 rounded-xl overflow-hidden border cursor-pointer active:scale-[0.99] hover:shadow-2xs transition-all relative select-none ${
                            isSelected
                              ? "border-blue-600 ring-[1px] ring-blue-500/20 shadow-md"
                              : "border-neutral-800 shadow-5xs"
                          }`}
                        >
                          {/* Live template vertical poster thumbnail wrapper with dynamic aspect ratio */}
                          <div
                            className={`relative w-full overflow-hidden shrink-0 select-none ${preset.category === "营销口号" ? "bg-[#1c1c1e]" : "bg-neutral-800"} ${preset.aspectRatio === "16:9" ? "aspect-[16/9]" : "aspect-[9/16]"}`}
                          >
                            {preset.coverImage ? (
                              <img
                                src={preset.coverImage}
                                alt={preset.title}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              renderTemplateInner(
                                preset.id,
                                DEFAULT_BRAND_CONFIG,
                              )
                            )}

                            {/* Header Tag Info inside image */}
                            {usedPresets.includes(preset.id) && (
                              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[9px] rounded-sm font-bold scale-90 origin-top-left z-20 transition-colors bg-blue-600 text-white shadow-sm">
                                曾用过
                              </span>
                            )}
                          </div>

                          {/* Bottom Bar instead of overlay */}
                          <div className="px-2 py-2.5 bg-neutral-900 flex flex-1 items-center justify-between">
                            <h4
                              className={`text-[10.5px] font-bold tracking-tight truncate ${isSelected ? "text-blue-700" : "text-neutral-200"} flex items-center gap-1`}
                            >
                              {preset.title}
                              {savedPresets.includes(preset.id) && (
                                <span className="text-[8px] bg-neutral-800 text-neutral-500 px-1 py-0.5 rounded font-normal shrink-0">
                                  已保存
                                </span>
                              )}
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col gap-1">
                  {presetRight
                    .map((preset) => {
                      const isSelected = selectedPresetId === preset.id;
                      return (
                        <div
                          key={preset.id}
                          onClick={() => {
                            if (!isLoggedIn) {
                              setShowLoginModal(true);
                              return;
                            }
                            setSelectedPresetId(preset.id);
                            setExpandedPresetId(preset.id);
                            setConfigModalStep(1);
                            setKeyframeUrl("");
                            setIsConfigModalOpen(false);
                          }}
                          className={`group flex flex-col bg-neutral-900 rounded-xl overflow-hidden border cursor-pointer active:scale-[0.99] hover:shadow-2xs transition-all relative select-none ${
                            isSelected
                              ? "border-blue-600 ring-[1px] ring-blue-500/20 shadow-md"
                              : "border-neutral-800 shadow-5xs"
                          }`}
                        >
                          {/* Live template vertical poster thumbnail wrapper with dynamic aspect ratio */}
                          <div
                            className={`relative w-full overflow-hidden shrink-0 select-none ${preset.category === "营销口号" ? "bg-[#1c1c1e]" : "bg-neutral-800"} ${preset.aspectRatio === "16:9" ? "aspect-[16/9]" : "aspect-[9/16]"}`}
                          >
                            {preset.coverImage ? (
                              <img
                                src={preset.coverImage}
                                alt={preset.title}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              renderTemplateInner(
                                preset.id,
                                DEFAULT_BRAND_CONFIG,
                              )
                            )}

                            {/* Header Tag Info inside image */}
                            {usedPresets.includes(preset.id) && (
                              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[9px] rounded-sm font-bold scale-90 origin-top-left z-20 transition-colors bg-blue-600 text-white shadow-sm">
                                曾用过
                              </span>
                            )}
                          </div>

                          {/* Bottom Bar instead of overlay */}
                          <div className="px-2 py-2.5 bg-neutral-900 flex flex-1 items-center justify-between">
                            <h4
                              className={`text-[10.5px] font-bold tracking-tight truncate ${isSelected ? "text-blue-700" : "text-neutral-200"} flex items-center gap-1`}
                            >
                              {preset.title}
                              {savedPresets.includes(preset.id) && (
                                <span className="text-[8px] bg-neutral-800 text-neutral-500 px-1 py-0.5 rounded font-normal shrink-0">
                                  已保存
                                </span>
                              )}
                            </h4>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              );
            })()}

          </>
        ) : (
          <div className="mt-4 max-h-full overflow-y-auto flex-1 flex flex-col">
            <div className="flex flex-col flex-1">
              {(() => {
                const filteredFrames = myKeyframes.filter((kf) => kf.style === activeCategory);
                if (!isLoggedIn || filteredFrames.length === 0) {
                  return (
                    <div className="flex flex-col items-center justify-center p-8 text-center space-y-3 flex-1 h-full">
                      <Sparkles size={24} className="text-slate-300" />
                      <p className="text-slate-400 text-xs mt-2">
                        {!isLoggedIn ? (
                          <>
                            暂未登录，
                            <br />
                            无法查看已保存的关键帧哦！
                          </>
                        ) : (
                          <>
                            暂无已保存的{activeCategory}关键帧，
                            <br />
                            快去生成一个吧！
                          </>
                        )}
                      </p>
                      <button
                        onClick={() => {
                          if (!isLoggedIn) {
                            setShowLoginModal(true);
                            return;
                          }
                          setInternalTab("library");
                        }}
                        className="mt-2 text-[10px] bg-neutral-900 border border-neutral-700 text-neutral-400 px-3 py-1.5 rounded-full hover:bg-neutral-800/50"
                      >
                        {!isLoggedIn ? "立即登录" : "去生成关键帧"}
                      </button>
                    </div>
                  );
                }
                const { leftCol: myLeft, rightCol: myRight } = getLayoutCols(filteredFrames);
                
                return (
                  <div className="flex gap-1 items-start w-full select-none">
                    <div className="flex-1 flex flex-col gap-1">
                      {myLeft.map((kf) => {
                        const isHorizontal = isHorizontalItem(kf);
                        return (
                        <div
                          key={kf.id}
                          onClick={() => {
                            if (!isLoggedIn) {
                              setShowLoginModal(true);
                              return;
                            }
                            setPreviewingMyKf(kf);
                            const originalPreset = PRESET_TEMPLATES.find(
                              (p) => p.category === kf.style && kf.id.startsWith(p.id)
                            ) || PRESET_TEMPLATES.find((p) => p.category === kf.style);
                            if (originalPreset) {
                              setSelectedPresetId(originalPreset.id);
                              setExpandedPresetId(originalPreset.id);
                              setConfigModalStep(1);
                              setKeyframeUrl("");
                            }
                          }}
                          className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 cursor-pointer active:scale-[0.99] hover:shadow-sm transition-all relative flex flex-col"
                        >
                          <div className={`relative w-full ${isHorizontal ? "aspect-[16/9]" : "aspect-[9/16]"} overflow-hidden bg-neutral-800 shrink-0`}>
                            <img
                              src={kf.image}
                              alt={kf.title}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-2 left-2 bg-black/45 backdrop-blur-xs text-white px-2 py-0.5 text-[9px] rounded-sm font-bold scale-90 origin-top-left z-20">
                              {kf.style}
                            </span>
                            {kf.isNew && (
                              <span className="absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 text-[8px] rounded-sm font-bold scale-90 origin-top-right z-20 shadow-sm animate-pulse">
                                NEW
                              </span>
                            )}
                          </div>
                        <div
                          className="px-2 py-2 bg-neutral-900 flex items-center justify-between min-h-[36px]"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!isLoggedIn) {
                              setShowLoginModal(true);
                              return;
                            }
                            setEditingId(kf.id);
                            setEditingName(kf.title.replace(/·/g, " ").trim());
                          }}
                        >
                          {editingId === kf.id ? (
                            <div className="flex items-center w-full gap-1">
                              <input
                                type="text"
                                autoFocus
                                className="text-[10.5px] font-bold text-neutral-200 tracking-tight w-full outline-none border-b border-blue-400 bg-blue-50/50 px-1 py-0.5 rounded-[2px]"
                                value={editingName}
                                onChange={(e) => setEditingName(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    e.stopPropagation();
                                    if (onUpdateKeyframe)
                                      onUpdateKeyframe(kf.id, editingName);
                                    setEditingId(null);
                                  }
                                }}
                                onBlur={() => {
                                  if (onUpdateKeyframe)
                                    onUpdateKeyframe(kf.id, editingName);
                                  setEditingId(null);
                                }}
                              />
                            </div>
                          ) : (
                            <>
                              <h4 className="text-[10.5px] font-bold text-neutral-200 tracking-tight truncate flex-1">
                                {kf.title.replace(/·/g, " ").trim()}
                              </h4>
                              <div className="flex items-center gap-1.5 ml-1 shrink-0">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isLoggedIn) {
                                      setShowLoginModal(true);
                                      return;
                                    }
                                    onDeleteKeyframe(kf.id);
                                  }}
                                  className="text-gray-300 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      )})}
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      {myRight.map((kf) => {
                        const isHorizontal = isHorizontalItem(kf);
                        return (
                        <div
                          key={kf.id}
                          onClick={() => {
                            if (!isLoggedIn) {
                              setShowLoginModal(true);
                              return;
                            }
                            setPreviewingMyKf(kf);
                            const originalPreset = PRESET_TEMPLATES.find(
                              (p) => p.category === kf.style && kf.id.startsWith(p.id)
                            ) || PRESET_TEMPLATES.find((p) => p.category === kf.style);
                            if (originalPreset) {
                              setSelectedPresetId(originalPreset.id);
                              setExpandedPresetId(originalPreset.id);
                              setConfigModalStep(1);
                              setKeyframeUrl("");
                            }
                          }}
                          className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 cursor-pointer active:scale-[0.99] hover:shadow-sm transition-all relative flex flex-col"
                        >
                          <div className={`relative w-full ${isHorizontal ? "aspect-[16/9]" : "aspect-[9/16]"} overflow-hidden bg-neutral-800 shrink-0`}>
                            <img
                              src={kf.image}
                              alt={kf.title}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-2 left-2 bg-black/45 backdrop-blur-xs text-white px-2 py-0.5 text-[9px] rounded-sm font-bold scale-90 origin-top-left z-20">
                              {kf.style}
                            </span>
                            {kf.isNew && (
                              <span className="absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 text-[8px] rounded-sm font-bold scale-90 origin-top-right z-20 shadow-sm animate-pulse">
                                NEW
                              </span>
                            )}
                          </div>
                        <div
                          className="px-2 py-2 bg-neutral-900 flex items-center justify-between min-h-[36px]"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (!isLoggedIn) {
                              setShowLoginModal(true);
                              return;
                            }
                            setEditingId(kf.id);
                            setEditingName(kf.title.replace(/·/g, " ").trim());
                          }}
                        >
                          {editingId === kf.id ? (
                            <div className="flex items-center w-full gap-1">
                              <input
                                type="text"
                                autoFocus
                                className="text-[10.5px] font-bold text-neutral-200 tracking-tight w-full outline-none border-b border-blue-400 bg-blue-50/50 px-1 py-0.5 rounded-[2px]"
                                value={editingName}
                                onChange={(e) => setEditingName(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    e.stopPropagation();
                                    if (onUpdateKeyframe)
                                      onUpdateKeyframe(kf.id, editingName);
                                    setEditingId(null);
                                  }
                                }}
                                onBlur={() => {
                                  if (onUpdateKeyframe)
                                    onUpdateKeyframe(kf.id, editingName);
                                  setEditingId(null);
                                }}
                              />
                            </div>
                          ) : (
                            <>
                              <h4 className="text-[10.5px] font-bold text-neutral-200 tracking-tight truncate flex-1">
                                {kf.title.replace(/·/g, " ").trim()}
                              </h4>
                              <div className="flex items-center gap-1.5 ml-1 shrink-0">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isLoggedIn) {
                                      setShowLoginModal(true);
                                      return;
                                    }
                                    onDeleteKeyframe(kf.id);
                                  }}
                                  className="text-gray-300 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      )})}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>

      {expandedPresetId && (
        <div className="absolute inset-0 z-[100] flex flex-col animate-fade-in font-sans overflow-hidden rounded-[40px] xl:rounded-[44px] transform-gpu mix-blend-normal">
          {/* Frosted Glass Background */}
          <div className="absolute inset-0 z-0 pointer-events-none rounded-[40px] xl:rounded-[44px] overflow-hidden transform-gpu bg-neutral-800" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>
          </div>

          <div className="relative z-40 px-6 pt-11 flex items-center justify-between pointer-events-auto">
            <button
              onClick={() => {
                setExpandedPresetId(null);
                setIsConfigModalOpen(false);
                setPreviewingMyKf(null);
              }}
              className="min-touch flex items-center justify-center text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer"
            >
              <ChevronLeft size={22} className="stroke-[2.5]" />
            </button>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-1.5 flex items-center justify-center text-white text-[13px] font-bold shadow-md">
              {activePreset.title}
            </div>
            <div className="w-8 shrink-0"></div>
          </div>

          <div className={`absolute w-full z-0 flex items-center justify-center ${activePreset.coverImage ? "top-[90px] bottom-[100px] px-0 pointer-events-auto" : "inset-0 h-full pointer-events-none"} ${activeCategory === "营销口号" ? "bg-[#1c1c1e]" : ""}`}>
            {activePreset.coverImage ? (
              <>
                <img
                  src={
                    activePreset.coverImage === "/cover1.png" ? "/cover1empty.png" : 
                    activePreset.coverImage === "/coverl1.png" ? "/coverl1empty.png" : 
                    activePreset.coverImage === "/cover2.png" ? "/cover2empty.png" :
                    activePreset.coverImage === "/cover3.jpeg" ? "/cover3empty.png" :
                    activePreset.coverImage === "/con1.png" ? "/con1empty.png" :
                    activePreset.coverImage === "/conl2.png" ? "/conl2empty.png" :
                    activePreset.coverImage === "/awa1.png" ? "/awa1empty.png" :
                    activePreset.coverImage
                  }
                  alt={activePreset.title}
                  className={`w-full h-full object-contain shadow-[0_12px_40px_rgb(0,0,0,0.5)] transform-gpu ${activePreset.aspectRatio === "16:9" ? "rounded-none" : "rounded-md"}`}
                  referrerPolicy="no-referrer"
                />
                {activeCategory === "水印元素" && (
                  <div className="absolute top-12 left-6 right-6 flex items-center gap-2 pointer-events-none z-10 p-2 mix-blend-plus-lighter">
                    {config.logoUrl && (
                      <div className="w-8 h-8 rounded-full bg-white/20 p-0.5 overflow-hidden backdrop-blur shrink-0">
                        <img src={config.logoUrl} className="w-full h-full object-cover rounded-full" />
                      </div>
                    )}
                    {(config.companyName || config.logoUrl) && (
                      <span className="text-white text-lg font-bold drop-shadow-md truncate">
                        {config.companyName || "公司名称"}
                      </span>
                    )}
                  </div>
                )}
              </>
            ) : (
              renderTemplateInner(activePreset.id, config)
            )}
          </div>

          {!isConfigModalOpen && (
            <div className="absolute flex-col bottom-10 left-6 right-6 z-40 flex gap-3 animate-fade-in pointer-events-auto">
              {activeCategory === "营销口号" && !previewingMyKf && (
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="输入营销口号..."
                    value={config.slogan || ""}
                    onChange={(e) => updateField("slogan", e.target.value)}
                    className="w-full bg-[#2a2a2c]/90 backdrop-blur-md text-white placeholder-neutral-400 text-sm rounded-2xl px-4 py-3.5 pr-10 outline-none border border-neutral-700/50 focus:border-blue-500 transition-all font-bold shadow-lg"
                  />
                  {config.slogan && (
                    <button
                      onClick={() => updateField("slogan", "")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
              )}
              {activeCategory === "水印元素" && !previewingMyKf && (
                <div className="flex gap-2 w-full">
                  <div
                    className="h-[48px] w-[48px] shrink-0 bg-[#2a2a2c]/90 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center cursor-pointer border border-neutral-700/50 shadow-lg overflow-hidden relative transition-all hover:bg-neutral-800"
                    onClick={() => {
                      const el = document.getElementById('quick-logo-upload');
                      if (el) el.click();
                    }}
                  >
                    {config.logoUrl ? (
                      <img src={config.logoUrl} className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <span className="text-[10px] text-neutral-400 font-bold leading-tight text-center">上传<br/>标徽</span>
                      </>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="请输入公司名称..."
                    value={config.companyName || ""}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    className="flex-1 bg-[#2a2a2c]/90 backdrop-blur-md text-white placeholder-neutral-400 text-sm rounded-2xl px-4 h-[48px] outline-none border border-neutral-700/50 focus:border-blue-500 transition-all font-bold shadow-lg"
                  />
                  <input
                    id="quick-logo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUploaded("logoUrl", e)}
                  />
                </div>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (previewingMyKf) {
                    setExpandedPresetId(null);
                    setPreviewingMyKf(null);
                  } else {
                    if (onAddKeyframe) {
                      const emptyImgMap: Record<string, string> = {
                        "/cover1.png": "/cover1empty.png",
                        "/coverl1.png": "/coverl1empty.png",
                        "/cover2.png": "/cover2empty.png",
                        "/cover3.jpeg": "/cover3empty.png",
                        "/con1.png": "/con1empty.png",
                        "/conl2.png": "/conl2empty.png",
                        "/awa1.png": "/awa1empty.png",
                      };
                      const finalImage = activePreset.coverImage ? (emptyImgMap[activePreset.coverImage] || activePreset.coverImage) : "";

                      onAddKeyframe({
                        id: `${activePreset.id}_${Date.now()}`,
                        title: activePreset.title,
                        style: activePreset.category,
                        description: activePreset.desc || "",
                        image: finalImage,
                        stats: "0",
                        tags: [],
                        durationSec: 15,
                        isNew: true,
                        isLandscape: activePreset.aspectRatio === "16:9"
                      } as any);
                    }
                    setExpandedPresetId(null);
                    setPreviewingMyKf(null);
                  }
                }}
                className="w-full bg-blue-600 text-white shadow-blue-600/30 shadow-lg rounded-[20px] py-3.5 font-bold text-[15px] hover:bg-blue-700 active:scale-[0.98] transition-transform flex justify-center items-center gap-2 cursor-pointer"
              >
                {previewingMyKf ? "保存" : "保存到我的关键帧"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Custom Logo Input Modal */}
      {showLogoInputPrompt && (
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 select-none animate-fade-in px-6">
          <div className="bg-neutral-900 rounded-3xl p-5 w-full max-w-[320px] shadow-2xl relative animate-scale-up border border-neutral-800">
            <h3 className="text-sm font-bold text-white mb-4">
              {logoPromptMode === "edit" ? "修改水印元素" : "新建水印元素"}
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-[10px] text-neutral-400 font-bold mb-1.5 block">上传图片</label>
                <div 
                  className="h-24 w-full bg-neutral-800/80 rounded-xl border border-neutral-700 hover:border-blue-500 overflow-hidden flex items-center justify-center relative cursor-pointer transition-all" 
                  onClick={() => myLogoUploadRef.current?.click()}
                >
                  {tempLogoUrl ? (
                    <img src={tempLogoUrl} alt="Preview" className="w-full h-full object-contain p-2" />
                  ) : (
                    <div className="text-neutral-500 flex flex-col items-center">
                      <Plus size={20} className="mb-1" />
                      <span className="text-[10px] font-bold">点击上传图片</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/svg+xml"
                    className="hidden"
                    ref={myLogoUploadRef}
                    onChange={handleMyLogoUploaded}
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] text-neutral-400 font-bold mb-1.5 block">名称</label>
                <input
                  type="text"
                  placeholder="例如：标准企业标徽"
                  value={tempLogoTitleInput}
                  onChange={(e) => setTempLogoTitleInput(e.target.value)}
                  className="w-full bg-neutral-800/80 text-white placeholder-neutral-500 text-xs rounded-xl px-3 outline-none border border-neutral-700 focus:border-blue-500 transition-all font-sans font-bold py-2.5"
                />
              </div>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={() => setShowLogoInputPrompt(false)}
                className="flex-1 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-full text-xs font-bold transition-all"
              >
                取消
              </button>
              <button
                onClick={() => {
                  if (tempLogoUrl) {
                    const titleVal = tempLogoTitleInput.trim() || "自定义水印";
                    if (logoPromptMode === "new") {
                      setMyLogos((prev) => [...prev, { title: titleVal, url: tempLogoUrl }]);
                    } else if (editingLogoIndex >= 0) {
                      setMyLogos((prev) => prev.map((l, i) => i === editingLogoIndex ? { title: titleVal, url: tempLogoUrl } : l));
                      if (config.logoUrl === myLogos[editingLogoIndex].url) {
                        updateField("logoUrl", tempLogoUrl);
                      }
                    }
                    setShowLogoInputPrompt(false);
                  }
                }}
                disabled={!tempLogoUrl}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white shadow shadow-blue-600/30 rounded-full text-xs font-bold transition-all disabled:opacity-50"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Slogan Input Modal */}
      {showSloganInputPrompt && (
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 select-none animate-fade-in px-6">
          <div className="bg-neutral-900 rounded-3xl p-5 w-full max-w-[320px] shadow-2xl relative animate-scale-up border border-neutral-800">
            <h3 className="text-sm font-bold text-white mb-4">
              {sloganPromptMode === "edit" ? "修改营销口号" : "新建营销口号"}
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-[10px] text-neutral-400 font-bold mb-1.5 block">口号内容</label>
                <textarea
                  autoFocus
                  rows={3}
                  placeholder="例如：极简设计，极致体验"
                  value={tempSloganInput}
                  onChange={(e) => setTempSloganInput(e.target.value)}
                  className="w-full bg-neutral-800/80 text-white placeholder-neutral-500 text-xs rounded-xl px-3 outline-none border border-neutral-700 focus:border-blue-500 transition-all font-sans font-bold py-3 resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && tempSloganInput.trim()) {
                      e.preventDefault();
                      const val = tempSloganInput.trim();
                      const titleVal = tempSloganTitleInput.trim() || "自定义营销口号";
                      if (sloganPromptMode === "new") {
                        setMySlogans((prev) => [...prev, { title: titleVal, slogan: val }]);
                      } else if (editingSloganIndex >= 0) {
                        setMySlogans((prev) => prev.map((s, i) => i === editingSloganIndex ? { title: titleVal, slogan: val } : s));
                        if (config.slogan === mySlogans[editingSloganIndex].slogan) {
                          updateField("slogan", val);
                        }
                      }
                      setShowSloganInputPrompt(false);
                    }
                  }}
                />
              </div>
              <div>
                <label className="text-[10px] text-neutral-400 font-bold mb-1.5 block">名称</label>
                <input
                  type="text"
                  placeholder="例如：主打口号"
                  value={tempSloganTitleInput}
                  onChange={(e) => setTempSloganTitleInput(e.target.value)}
                  className="w-full bg-neutral-800/80 text-white placeholder-neutral-500 text-xs rounded-xl px-3 outline-none border border-neutral-700 focus:border-blue-500 transition-all font-sans font-bold py-2.5"
                />
              </div>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={() => setShowSloganInputPrompt(false)}
                className="flex-1 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-full text-xs font-bold transition-all"
              >
                取消
              </button>
              <button
                onClick={() => {
                  if (tempSloganInput.trim()) {
                    const val = tempSloganInput.trim();
                    const titleVal = tempSloganTitleInput.trim() || "自定义营销口号";
                    if (sloganPromptMode === "new") {
                      setMySlogans((prev) => [...prev, { title: titleVal, slogan: val }]);
                    } else if (editingSloganIndex >= 0) {
                      setMySlogans((prev) => prev.map((s, i) => i === editingSloganIndex ? { title: titleVal, slogan: val } : s));
                      if (config.slogan === mySlogans[editingSloganIndex].slogan) {
                        updateField("slogan", val);
                      }
                    }
                    setShowSloganInputPrompt(false);
                  }
                }}
                disabled={!tempSloganInput.trim()}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white shadow shadow-blue-600/30 rounded-full text-xs font-bold transition-all disabled:opacity-50"
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Config Modal */}
      {isConfigModalOpen && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-40 select-none animate-fade-in">
          <div className="bg-neutral-900 rounded-3xl p-5 w-full max-w-[320px] shadow-2xl relative animate-scale-up border border-neutral-800 mx-5 max-h-[90%] overflow-y-auto scrollbar-none">
            {/* Header Title with quick recovery tools */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4 sticky top-0 bg-neutral-900 z-10">
              <div className="flex items-center gap-1.5">
                <Building2 size={15} className="text-emerald-600" />
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  {configModalStep === 1 ? "企业信息" : "素材上传"}
                  {configModalStep === 1 &&
                    savedPresets.includes(selectedPresetId) && (
                      <span className="text-[9px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-normal font-sans tracking-normal">
                        已保存
                      </span>
                    )}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={resetData}
                  className="text-[11px] text-gray-400 hover:text-red-500 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <Trash2 size={11} />
                  <span>清空</span>
                </button>
                <button
                  onClick={() => setIsConfigModalOpen(false)}
                  className="text-slate-400 hover:text-neutral-400 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Step 1: Corporate Info */}
            {configModalStep === 1 && (
              <>
                {/* Section A: Company Logo upload block */}
                <div className="space-y-1.5 text-left mb-4">
                  <span className="text-[12px] text-neutral-400 font-bold block">
                    公司标徽
                  </span>
                  <div
                    className="h-16 w-16 bg-neutral-800/50 border border-neutral-700/60 hover:bg-neutral-800 cursor-pointer rounded-xl flex flex-col items-center justify-center shrink-0 overflow-hidden relative shadow-5xs transition-colors"
                    onClick={() => logoUploadRef.current?.click()}
                  >
                    {config.logoUrl ? (
                      <img
                        src={config.logoUrl}
                        alt="Logo"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <>
                        <Building2 size={20} className="text-slate-400 mb-1" />
                        <span className="text-[9px] text-neutral-500 font-bold">
                          上传
                        </span>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={logoUploadRef}
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUploaded("logoUrl", e)}
                  />
                </div>

                {/* Section B: Textual Field Blocks with unified template styling */}
                <div className="flex flex-col gap-4 text-left mb-5">
                  <div className="space-y-1.5">
                    <span className="text-[12px] text-neutral-400 font-bold block">
                      公司全称
                    </span>
                    <input
                      type="text"
                      value={config.companyName || ""}
                      onChange={(e) =>
                        updateField("companyName", e.target.value)
                      }
                      placeholder="请输入公司全称..."
                      className="w-full bg-neutral-800/50 text-neutral-200 placeholder-gray-400 text-xs rounded-xl px-3.5 py-3 outline-none border border-neutral-700/60 focus:bg-neutral-900 focus:border-blue-400 transition-all font-sans font-bold shadow-5xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[12px] text-neutral-400 font-bold block">
                      {activePreset.category === "企业荣誉"
                        ? "荣誉奖项"
                        : "核心宣传语"}
                    </span>
                    <input
                      type="text"
                      value={config.slogan || ""}
                      onChange={(e) => updateField("slogan", e.target.value)}
                      placeholder={
                        activePreset.category === "企业荣誉"
                          ? "请输入荣誉奖项..."
                          : "输入营销口号..."
                      }
                      className="w-full bg-neutral-800/50 text-neutral-200 placeholder-gray-400 text-xs rounded-xl px-3.5 py-3 outline-none border border-neutral-700/60 focus:bg-neutral-900 focus:border-blue-400 transition-all font-sans font-bold shadow-5xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[12px] text-neutral-400 font-bold block">
                      地址
                    </span>
                    <input
                      type="text"
                      value={config.address || ""}
                      onChange={(e) => updateField("address", e.target.value)}
                      placeholder="请输入住所/营业地址..."
                      className="w-full bg-neutral-800/50 text-neutral-200 placeholder-gray-400 text-xs rounded-xl px-3.5 py-3 outline-none border border-neutral-700/60 focus:bg-neutral-900 focus:border-blue-400 transition-all font-sans font-bold shadow-5xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[12px] text-neutral-400 font-bold block">
                      联系名片
                    </span>
                    <input
                      type="text"
                      value={config.contact || ""}
                      onChange={(e) => updateField("contact", e.target.value)}
                      placeholder="请输入联系电话/方式..."
                      className="w-full bg-neutral-800/50 text-neutral-200 placeholder-gray-400 text-xs rounded-xl px-3.5 py-3 outline-none border border-neutral-700/60 focus:bg-neutral-900 focus:border-blue-400 transition-all font-sans font-bold shadow-5xs"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Step 2: Keyframe upload */}
            {configModalStep === 2 && (
              <div className="flex flex-col gap-4 text-left mb-5">
                <div className="space-y-1.5">
                  <span className="text-[12px] text-neutral-400 font-bold block">
                    上传关键帧（视频或图片）
                  </span>
                  <div
                    className="w-full aspect-video bg-neutral-800/50 border border-dashed border-slate-300 hover:bg-neutral-800 cursor-pointer rounded-xl flex flex-col items-center justify-center shrink-0 overflow-hidden relative transition-colors"
                    onClick={() => keyframeUploadRef.current?.click()}
                  >
                    {keyframeUrl ? (
                      <img
                        src={keyframeUrl}
                        alt="Keyframe Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <Building2 size={24} className="text-slate-400 mb-2" />
                        <span className="text-[10px] text-neutral-500 font-bold">
                          点击上传
                        </span>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={keyframeUploadRef}
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={handleKeyframeUploaded}
                  />
                  <p className="text-[9px] text-slate-400">
                    支持上传图片或视频作为关键帧背景
                  </p>
                </div>
              </div>
            )}

            {/* Section C: Synthesis Activation Button */}
            <div className="flex gap-3">
              {configModalStep === 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      const newSavedPresets = Array.from(
                        new Set([...savedPresets, selectedPresetId]),
                      );
                      setSavedPresets(newSavedPresets);
                      localStorage.setItem(
                        "xiaolu_saved_presets",
                        JSON.stringify(newSavedPresets),
                      );
                      setIsConfigModalOpen(false);
                      setExpandedPresetId(null);
                    }}
                    className="w-1/3 h-12 bg-neutral-800 hover:bg-slate-200 active:scale-[0.98] text-neutral-300 rounded-[14px] font-bold text-sm transition-all flex items-center justify-center cursor-pointer shadow-5xs"
                  >
                    保存
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const newSavedPresets = Array.from(
                        new Set([...savedPresets, selectedPresetId]),
                      );
                      setSavedPresets(newSavedPresets);
                      localStorage.setItem(
                        "xiaolu_saved_presets",
                        JSON.stringify(newSavedPresets),
                      );
                      setConfigModalStep(2);
                    }}
                    className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white rounded-[14px] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/20"
                  >
                    <span>下一步</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setConfigModalStep(1)}
                    className="w-1/3 h-12 bg-neutral-800 hover:bg-slate-200 active:scale-[0.98] text-neutral-300 rounded-[14px] font-bold text-sm transition-all flex items-center justify-center cursor-pointer shadow-5xs"
                  >
                    返回
                  </button>
                  <button
                    type="button"
                    onClick={startSynthesis}
                    className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white rounded-[14px] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/20"
                  >
                    <Sparkles size={14} className="fill-white" />
                    <span>生成关键帧</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Compile overlay simulation loading card screen */}
      {isCompiling && (
        <div className="absolute inset-0 bg-black/85 backdrop-blur-xs flex items-center justify-center z-50 px-6 select-none animate-fade-in">
          <div className="bg-neutral-900 rounded-2xl p-5 text-center space-y-3.5 max-w-[240px] shadow-2xl text-neutral-200 border border-neutral-800 animate-scale-up">
            <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 border-3 border-neutral-800 rounded-full" />
              <div className="absolute inset-0 border-3 border-t-blue-600 rounded-full animate-spin" />
              <span className="text-[10px] font-black text-blue-600 font-mono">
                {compileProgress}%
              </span>
            </div>
            <div className="space-y-1">
              <h4 className="text-[12px] font-black text-slate-950">
                正在合成最新关键帧画面...
              </h4>
              <p className="text-[9px] text-slate-400 leading-normal">
                一键拼装注入Logo、特色药丸和广告图，正在极速输出1080P视频流。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
