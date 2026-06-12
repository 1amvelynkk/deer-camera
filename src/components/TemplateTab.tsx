import { useState } from "react";
import { Search, ThumbsUp, Sparkles, Star } from "lucide-react";
import { MockTemplates } from "../data";
import { VideoTemplate } from "../types";

interface TemplateTabProps {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  onSelectTemplate: (template: VideoTemplate) => void;
  favorites: VideoTemplate[];
  onToggleFavorite: (template: VideoTemplate) => void;
  historyIds: string[];
  isLoggedIn: boolean;
  setShowLoginModal: (v: boolean) => void;
}

export default function TemplateTab({ 
  searchTerm,
  setSearchTerm,
  onSelectTemplate, 
  favorites, 
  onToggleFavorite, 
  historyIds,
  isLoggedIn,
  setShowLoginModal
}: TemplateTabProps) {
  const [filterType, setFilterType] = useState<"all" | "category">("all");
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  // Filter templates list dynamically
  const filteredTemplates = MockTemplates.filter((template) => {
    // 1. Search text filter
    if (searchTerm.trim() !== "") {
      const query = searchTerm.toLowerCase();
      const inTitle = template.title.toLowerCase().includes(query);
      const inStyle = template.style.toLowerCase().includes(query);
      const inTags = template.tags.some((tag) => tag.toLowerCase().includes(query));
      if (!inTitle && !inStyle && !inTags) {
        return false;
      }
    }

    // 2. Tab filter
    if (filterType === "category") {
      return selectedStyle ? template.style === selectedStyle : true;
    }
    
    return true; // "all" / "全能推荐"
  });

  return (
    <div id="template-tab" className="px-1 py-4 space-y-4 overflow-y-auto h-full pb-24 text-neutral-200">
      
      {/* Primary Category Buttons Container */}
      <div className="relative">
        <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-[11px] font-bold text-neutral-500">
          
          {/* Button: 全部模版 */}
          <button
            type="button"
            onClick={() => {
              setFilterType("all");
              setSelectedStyle(null);
            }}
            className={`px-2.5 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all border bg-transparent ${
              filterType === "all"
                ? "border-white text-white font-bold"
                : "border-neutral-700 text-neutral-400 hover:border-neutral-500"
            }`}
          >
            全部模版
          </button>

          {/* Category Buttons */}
          {[
            { label: "产品介绍", value: "产品介绍" },
            { label: "企业宣传", value: "企业宣传" },
            { label: "客户案例", value: "客户案例" },
            { label: "节日热点", value: "节日热点" },
            { label: "售后维保", value: "售后维保" },
          ].map((styleOption) => (
            <button
              key={styleOption.label}
              type="button"
              onClick={() => {
                setFilterType("category");
                setSelectedStyle(styleOption.value);
              }}
              className={`px-2.5 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all border bg-transparent ${
                filterType === "category" && selectedStyle === styleOption.value
                  ? "border-white text-white font-bold"
                  : "border-neutral-700 text-neutral-400 hover:border-neutral-500"
              }`}
            >
              {styleOption.label}
            </button>
          ))}

        </div>
      </div>

      {/* Template Card Grid - click opens preview */}
      {filteredTemplates.length === 0 ? (
        <div className="text-center py-10 bg-neutral-900/50 rounded-2xl border border-dashed border-neutral-700 text-neutral-500 text-xs flex flex-col items-center justify-center space-y-1.5 px-4 h-[150pt] select-none break-inside-avoid mt-2">
          <span className="text-xl">⭐️</span>
          <p className="font-bold text-neutral-300">暂无可显示的视频模板</p>
          <p className="text-[10px] text-neutral-500 leading-snug text-center max-w-[175pt]">
            {filterType === "category" && `在微信分类内筛选出满足您的各类视频格式模板。`}
            {searchTerm && `没有搜索到匹配 “${searchTerm}” 的成果，请试一试其它词汇。`}
          </p>
        </div>
      ) : (
        <div className="flex gap-1 items-start min-h-[160pt]">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-1">
            {filteredTemplates.filter((_, i) => i % 2 === 0).map((template) => {
              const isFav = favorites.some((f) => f.id === template.id);
              return (
                <div
                  key={template.id}
                  onClick={() => {
                    onSelectTemplate(template);
                  }}
                  className="group flex flex-col bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-5xs cursor-pointer active:scale-[0.99] hover:shadow-2xs transition-all relative select-none"
                >
                  {/* Thumbnail */}
                  <div className={`relative w-full overflow-hidden bg-neutral-900 shrink-0 ${template.isLandscape ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay styling & text style label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
                    
                    <span className="absolute top-2.5 left-2.5 bg-black/45 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-sm font-bold scale-90 origin-top-left">
                      {template.style}
                    </span>

                    <div className="absolute bottom-2.5 left-2.5 text-white space-y-0.5">
                      <h4 className="text-[11.5px] font-bold tracking-wide drop-shadow-sm">
                        {template.title}
                      </h4>
                      <p className="text-[8.5px] text-white/80 font-medium drop-shadow-xs">
                        {template.stats}
                      </p>
                    </div>

                    {/* FAVORITE ACTION STAR BUTTON IN THE TOP RIGHT AS REQUESTED */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // Avoid selecting template when liking
                        if (!isLoggedIn) {
                          setShowLoginModal(true);
                          return;
                        }
                        onToggleFavorite(template);
                      }}
                      className={`absolute top-2 right-2 rounded-full p-2.5 shadow-md transition-all active:scale-[0.8] z-20 flex items-center justify-center ${
                        isFav 
                          ? "bg-amber-400 text-white" 
                          : "bg-black/30 hover:bg-black/50 text-white backdrop-blur-xs"
                      }`}
                    >
                      <Star 
                        size={16} 
                        className={isFav ? "fill-white text-white" : "text-white/90"} 
                      />
                    </button>
                  </div>

                  {/* Bottom Tag list */}
                  <div className="p-2 bg-neutral-900 flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-1">
                      {template.tags.slice(0, 2).map((t, i) => (
                        <span
                          key={i}
                          className="bg-neutral-800/50 text-neutral-500 text-[8.5px] px-1.5 py-0.5 rounded-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-1">
            {filteredTemplates.filter((_, i) => i % 2 === 1).map((template) => {
              const isFav = favorites.some((f) => f.id === template.id);
              return (
                <div
                  key={template.id}
                  onClick={() => {
                    onSelectTemplate(template);
                  }}
                  className="group flex flex-col bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-5xs cursor-pointer active:scale-[0.99] hover:shadow-2xs transition-all relative select-none"
                >
                  {/* Thumbnail */}
                  <div className={`relative w-full overflow-hidden bg-neutral-900 shrink-0 ${template.isLandscape ? 'aspect-[16/9]' : 'aspect-[4/5]'}`}>
                    <img
                      src={template.image}
                      alt={template.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Overlay styling & text style label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
                    
                    <span className="absolute top-2.5 left-2.5 bg-black/45 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-sm font-bold scale-90 origin-top-left">
                      {template.style}
                    </span>

                    <div className="absolute bottom-2.5 left-2.5 text-white space-y-0.5">
                      <h4 className="text-[11.5px] font-bold tracking-wide drop-shadow-sm">
                        {template.title}
                      </h4>
                      <p className="text-[8.5px] text-white/80 font-medium drop-shadow-xs">
                        {template.stats}
                      </p>
                    </div>

                    {/* FAVORITE ACTION STAR BUTTON IN THE TOP RIGHT AS REQUESTED */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // Avoid selecting template when liking
                        if (!isLoggedIn) {
                          setShowLoginModal(true);
                          return;
                        }
                        onToggleFavorite(template);
                      }}
                      className={`absolute top-2 right-2 rounded-full p-2.5 shadow-md transition-all active:scale-[0.8] z-20 flex items-center justify-center ${
                        isFav 
                          ? "bg-amber-400 text-white" 
                          : "bg-black/30 hover:bg-black/50 text-white backdrop-blur-xs"
                      }`}
                    >
                      <Star 
                        size={16} 
                        className={isFav ? "fill-white text-white" : "text-white/90"} 
                      />
                    </button>
                  </div>

                  {/* Bottom Tag list */}
                  <div className="p-2 bg-neutral-900 flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-1">
                      {template.tags.slice(0, 2).map((t, i) => (
                        <span
                          key={i}
                          className="bg-neutral-800/50 text-neutral-500 text-[8.5px] px-1.5 py-0.5 rounded-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
