import React, { useState, useRef } from "react";
import { X, Sparkles, Image as ImageIcon, Trash2, Plus } from "lucide-react";
import { VideoTemplate } from "../types";

interface SelectKeyframeModalProps {
  isOpen: boolean;
  onClose: () => void;
  myKeyframes: VideoTemplate[];
  myLogos: { title: string; url: string }[];
  mySlogans: { title: string; slogan: string }[];
  onSelect: (kfs: VideoTemplate[], materialUrl?: string) => void;
  onGoToKeyframes: () => void;
  onDeleteKeyframe?: (id: string) => void;
}

export default function SelectKeyframeModal({
  isOpen,
  onClose,
  myKeyframes = [],
  myLogos = [],
  mySlogans = [],
  onSelect,
  onGoToKeyframes,
  onDeleteKeyframe,
}: SelectKeyframeModalProps) {
  const [selectedKfs, setSelectedKfs] = useState<VideoTemplate[]>([]);
  const [step, setStep] = useState<1 | 2>(1);
  const [materialUrls, setMaterialUrls] = useState<string[]>([]);
  const uploadRef = useRef<HTMLInputElement>(null);
  const [modalActiveCategory, setModalActiveCategory] = useState<"封面" | "企业荣誉" | "联系名片" | "营销口号" | "水印元素">("封面");

  // Reset state when newly opened
  React.useEffect(() => {
    if (isOpen) {
      setSelectedKfs([]);
      setStep(1);
      setMaterialUrls([]);
    }
  }, [isOpen]);

  const handleMaterialUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []) as File[];
    if (files.length === 0) return;
    const newUrls: string[] = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setMaterialUrls((prev) => [...prev, event.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[70] rounded-[40px] select-none animate-fade-in p-5 pb-14">
      <div className="bg-[#1c1c1e] shadow-[0_16px_40px_rgba(0,0,0,0.5)] border border-white/10 w-full h-[85%] max-h-[680px] rounded-[32px] flex flex-col overflow-hidden relative text-white">
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#2c2c2e] z-10">
          <h3 className="text-[16px] font-black tracking-tight flex items-center gap-2 text-white/90">
            <Sparkles size={16} className="text-blue-500" />
            {step === 1 ? "选择我的关键帧" : "上传素材"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 bg-white/10 text-white/70 rounded-full hover:bg-white/20 active:scale-95 transition-all outline-none"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-hidden p-5 bg-[#1c1c1e] flex flex-col">
          {step === 1 ? (
            <>
              <div className="flex gap-1.5 overflow-x-auto pb-3 mb-2 scrollbar-none text-[11px] font-bold shrink-0">
                {(["封面", "联系名片", "企业荣誉", "营销口号", "水印元素"] as const).map((catName) => {
                  let activeStyles = "border-blue-500 text-blue-200 font-bold bg-blue-900/50 shadow-sm";
                  let defaultStyles = "bg-transparent border-neutral-800 text-slate-400 hover:border-blue-900/80 hover:text-blue-400";
                  return (
                    <button
                      key={catName}
                      type="button"
                      onClick={() => setModalActiveCategory(catName)}
                      className={`px-3 py-1.5 rounded-xl whitespace-nowrap cursor-pointer transition-all border ${
                        modalActiveCategory === catName ? activeStyles : defaultStyles
                      }`}
                    >
                      {catName}
                    </button>
                  );
                })}
              </div>
              {(() => {
                if (modalActiveCategory === "水印元素") {
                  if (myLogos.length === 0) {
                    return (
                      <div className="flex flex-col items-center justify-center h-full text-center space-y-4 pb-10 flex-1">
                        <Sparkles size={32} className="text-white/20" />
                        <p className="text-white/50 text-xs mt-2">暂无已保存的水印元素关键帧<br />先去生成一个吧！</p>
                        <button onClick={onGoToKeyframes} className="mt-4 text-[12px] font-bold bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 shadow-md shadow-blue-600/20 active:scale-95 transition-all">前往关键帧制作</button>
                      </div>
                    );
                  }
                  return (
                    <div className="flex flex-col h-full overflow-hidden">
                      <div className="flex-1 overflow-y-auto pb-4">
                        <div className="grid grid-cols-2 gap-3 pb-10">
                          {myLogos.map((logoObj, index) => {
                            const dummyKf: VideoTemplate = {
                              id: `logo_${index}`,
                              title: logoObj.title,
                              style: "水印元素",
                              image: logoObj.url,
                              stats: "", description: "", durationSec: 0, tags: []
                            };
                            return (
                              <div
                                key={`logo_${index}`}
                                onClick={() => {
                                  setSelectedKfs((prev) =>
                                    prev.some((p) => p.id === dummyKf.id)
                                      ? prev.filter((p) => p.id !== dummyKf.id)
                                      : [...prev, dummyKf],
                                  );
                                }}
                                className={`group bg-[#2c2c2e] rounded-xl overflow-hidden border cursor-pointer active:scale-[0.98] transition-all relative flex flex-col shadow-sm ${selectedKfs.some((p) => p.id === dummyKf.id) ? "border-blue-500 ring-2 ring-blue-500/30 shadow-md" : "border-white/10 hover:border-blue-500/50"}`}
                              >
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white shrink-0 p-3 flex items-center justify-center">
                                  <img src={logoObj.url} alt={logoObj.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="px-2.5 py-2.5 bg-[#2c2c2e] flex items-center justify-between border-t border-white/5">
                                  <h4 className="text-[11px] font-bold text-white/90 tracking-tight truncate flex-1">{logoObj.title}</h4>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex mt-2 shrink-0 pb-2 gap-2">
                        <button type="button" onClick={() => { onSelect(selectedKfs, undefined); }} className="w-full h-11 rounded-xl font-bold text-[13px] transition-all flex items-center justify-center gap-2 shadow-md bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-blue-600/20 cursor-pointer">
                          <span>确认选择</span>
                        </button>
                      </div>
                    </div>
                  );
                }

                if (modalActiveCategory === "营销口号") {
                  if (mySlogans.length === 0) {
                    return (
                      <div className="flex flex-col items-center justify-center h-full text-center space-y-4 pb-10 flex-1">
                        <Sparkles size={32} className="text-white/20" />
                        <p className="text-white/50 text-xs mt-2">暂无已保存的营销口号关键帧<br />先去生成一个吧！</p>
                        <button onClick={onGoToKeyframes} className="mt-4 text-[12px] font-bold bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 shadow-md shadow-blue-600/20 active:scale-95 transition-all">前往关键帧制作</button>
                      </div>
                    );
                  }
                  return (
                    <div className="flex flex-col h-full overflow-hidden">
                      <div className="flex-1 overflow-y-auto pb-4">
                        <div className="grid grid-cols-2 gap-3 pb-10">
                          {mySlogans.map((sloganObj, index) => {
                            const dummyKf: VideoTemplate = {
                              id: `slogan_${index}`,
                              title: sloganObj.title,
                              style: "营销口号",
                              image: `${import.meta.env.BASE_URL}logo2.png`,
                              description: sloganObj.slogan,
                              stats: "", durationSec: 0, tags: []
                            };
                            return (
                              <div
                                key={`slogan_${index}`}
                                onClick={() => {
                                  setSelectedKfs((prev) =>
                                    prev.some((p) => p.id === dummyKf.id)
                                      ? prev.filter((p) => p.id !== dummyKf.id)
                                      : [...prev, dummyKf],
                                  );
                                }}
                                className={`group bg-[#2c2c2e] rounded-xl overflow-hidden border cursor-pointer active:scale-[0.98] transition-all relative flex flex-col shadow-sm ${selectedKfs.some((p) => p.id === dummyKf.id) ? "border-blue-500 ring-2 ring-blue-500/30 shadow-md" : "border-white/10 hover:border-blue-500/50"}`}
                              >
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-red-950 to-red-800 shrink-0 p-3 flex flex-col justify-center gap-1 font-sans">
                                  <span className="text-white text-[12px] font-bold text-center leading-snug line-clamp-3">{sloganObj.slogan}</span>
                                </div>
                                <div className="px-2.5 py-2.5 bg-[#2c2c2e] flex items-center justify-between border-t border-white/5">
                                  <h4 className="text-[11px] font-bold text-white/90 tracking-tight truncate flex-1">{sloganObj.title}</h4>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex mt-2 shrink-0 pb-2 gap-2">
                        <button type="button" onClick={() => { onSelect(selectedKfs, undefined); }} className="w-full h-11 rounded-xl font-bold text-[13px] transition-all flex items-center justify-center gap-2 shadow-md bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-blue-600/20 cursor-pointer">
                          <span>确认选择</span>
                        </button>
                      </div>
                    </div>
                  );
                }

                const filteredFrames = myKeyframes.filter((kf) => kf.style === modalActiveCategory);
                if (filteredFrames.length === 0) {
                  return (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4 pb-10 flex-1">
                      <Sparkles size={32} className="text-white/20" />
                      <p className="text-white/50 text-xs mt-2">
                        暂无已保存的{modalActiveCategory}关键帧
                        <br />
                        先去生成一个吧！
                      </p>
                      <button
                        onClick={onGoToKeyframes}
                        className="mt-4 text-[12px] font-bold bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 shadow-md shadow-blue-600/20 active:scale-95 transition-all"
                      >
                        前往关键帧制作
                      </button>
                    </div>
                  );
                }
                return (
                  <div className="flex flex-col h-full overflow-hidden">
                    <div className="flex-1 overflow-y-auto pb-4">
                      <div className="grid grid-cols-3 gap-3 pb-10">
                        {filteredFrames.map((kf) => (
                      <div
                        key={kf.id}
                        onClick={() => {
                          setSelectedKfs((prev) =>
                            prev.some((p) => p.id === kf.id)
                              ? prev.filter((p) => p.id !== kf.id)
                              : [...prev, kf],
                          );
                        }}
                        className={`group bg-[#2c2c2e] rounded-xl overflow-hidden border cursor-pointer active:scale-[0.98] transition-all relative flex flex-col shadow-sm ${selectedKfs.some((p) => p.id === kf.id) ? "border-blue-500 ring-2 ring-blue-500/30 shadow-md" : "border-white/10 hover:border-blue-500/50"}`}
                      >
                        <div className="relative w-full aspect-[9/16] overflow-hidden bg-black/50 shrink-0">
                          <img
                            src={kf.image}
                            alt={kf.title}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2 left-2 bg-black/45 backdrop-blur-xs text-white px-2 py-0.5 text-[9px] rounded-sm font-bold scale-90 origin-top-left z-20">
                            {kf.style || "关键帧"}
                          </span>
                          {kf.isNew && (
                            <span className="absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 text-[8px] rounded-sm font-bold scale-90 origin-top-right z-20 shadow-sm animate-pulse">
                              NEW
                            </span>
                          )}
                        </div>
                        <div className="px-2.5 py-2.5 bg-[#2c2c2e] flex items-center justify-between border-t border-white/5">
                          <h4 className="text-[11px] font-bold text-white/90 tracking-tight truncate flex-1">
                            {kf.title.replace(/·/g, " ").trim()}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex mt-2 shrink-0 pb-2">
                  <button
                    type="button"
                    onClick={() => {
                      onSelect(selectedKfs, undefined);
                    }}
                    className="w-full h-11 rounded-xl font-bold text-[13px] transition-all flex items-center justify-center gap-2 shadow-md bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-blue-600/20 cursor-pointer"
                  >
                    <span>确认选择</span>
                  </button>
                </div>
              </div>
              );
            })()}
            </>
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <span className="text-[12px] text-white/50 font-bold block mb-3">
                  请上传您的图片或视频素材
                </span>
                <div
                  className={`w-full min-h-[140px] bg-[#2c2c2e] border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center overflow-hidden transition-colors shadow-sm ${materialUrls.length === 0 ? "hover:bg-white/5 cursor-pointer" : "p-3"}`}
                  onClick={() => {
                    if (materialUrls.length === 0) {
                      uploadRef.current?.click();
                    }
                  }}
                >
                  {materialUrls.length > 0 ? (
                    <div className="w-full grid grid-cols-4 gap-2">
                      {materialUrls.map((url, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-square w-full bg-black rounded-[14px] overflow-hidden border border-white/10 shadow-sm"
                        >
                          <img
                            src={url}
                            alt={`Material ${idx}`}
                            className="w-full h-full object-cover"
                          />
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              setMaterialUrls((prev) =>
                                prev.filter((_, i) => i !== idx),
                              );
                            }}
                            className="absolute top-1 right-1 w-6 h-6 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                          >
                            <X size={14} className="text-white" />
                          </div>
                        </div>
                      ))}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          uploadRef.current?.click();
                        }}
                        className="relative aspect-square w-full rounded-[14px] border border-white/10 bg-transparent flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors text-white/50"
                      >
                        <Plus size={28} className="text-white/40" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <ImageIcon size={32} className="text-white/20 mb-2" />
                      <span className="text-[11px] text-white/50 font-bold">
                        点击选择文件
                      </span>
                      <span className="text-[9px] text-white/30 mt-1">
                        支持 MP4 / MOV / JPG / PNG
                      </span>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  multiple
                  ref={uploadRef}
                  accept="image/*,video/*"
                  className="hidden"
                  onChange={handleMaterialUpload}
                />
              </div>

              <div className="flex mt-2 shrink-0 pb-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelect(selectedKfs, materialUrls[0] || "");
                  }}
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white rounded-xl font-bold text-[13px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/20"
                >
                  <Sparkles size={14} className="fill-white" />
                  <span>上传</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
