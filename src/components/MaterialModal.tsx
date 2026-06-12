import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Trash2 } from "lucide-react";

interface MaterialModalProps {
  isOpen: boolean;
  onClose: () => void;
  materials: (string | null)[];
  onAddMaterials: (index: number) => void;
  onDeleteMaterial: (index: number) => void;
  onNext?: () => void;
}

export default function MaterialModal({
  isOpen,
  onClose,
  materials,
  onAddMaterials,
  onDeleteMaterial,
  onNext
}: MaterialModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="material-manager-overlay"
        className="absolute inset-0 bg-black/50 backdrop-blur-xs z-40 flex flex-col justify-center items-center overflow-hidden rounded-[40px] p-5 pb-10"
        onClick={onClose}
      >
        {/* Semi-transparent Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-transparent"
        />

        {/* Panel Sheet */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-gradient-to-br from-[#1c1c1e]/90 to-[#0c0c0e]/70 backdrop-blur-3xl rounded-[32px] h-[70%] max-h-[600px] z-10 w-full overflow-hidden text-neutral-200 flex flex-col shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-1px_2px_rgba(255,255,255,0.02)] border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bottom sheet title bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
            <span className="text-[17px] font-bold text-white tracking-wide w-full text-center pl-6">
              素材管理
            </span>
            <button
              id="close-material-modal"
              onClick={onClose}
              className="p-1 rounded-full text-gray-400 hover:text-neutral-400 hover:bg-neutral-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Grid Container scroll view */}
          <div className="flex-1 overflow-y-auto px-6 py-6 font-sans">
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((index) => {
                const src = materials[index];
                const placeholders = ["上传企业产品", "上传企业荣誉", "上传工厂实拍"];
                if (src) {
                  return (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden group shadow-xs bg-[#1c1c1e] border border-white/10"
                    >
                      <img
                        src={src}
                        alt={`material-${index}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Delete Badge Bubble */}
                      <button
                        onClick={() => onDeleteMaterial(index)}
                        className="absolute -top-1 -right-1 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 transition-all scale-95"
                        title="删除素材"
                      >
                        <span className="text-[12px] font-bold leading-[0]">-</span>
                      </button>
                    </div>
                  );
                } else {
                  return (
                    <button
                      key={index}
                      onClick={() => onAddMaterials(index)}
                      className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-neutral-700 hover:border-violet-400 rounded-xl bg-neutral-800/50 active:bg-neutral-800 transition-all cursor-pointer group"
                    >
                      <div className="bg-neutral-900 p-2 rounded-lg shadow-xs group-hover:scale-105 transition-transform text-gray-400 group-hover:text-violet-400">
                        <Plus size={16} />
                      </div>
                      <span className="text-[9px] text-gray-400 mt-2 font-medium">
                        {placeholders[index]}
                      </span>
                    </button>
                  );
                }
              })}
            </div>

            {/* Quick Helper Tips */}
            <div className="mt-8 text-center text-[12px] text-gray-400">
              <p>已添加 {materials.filter(Boolean).length}/3 个素材</p>
              <p className="mt-1">
                点击上方右上角减号 <span className="inline-block bg-black text-white w-3.5 h-3.5 rounded-full text-[10px] leading-0 text-center font-bold">-</span> 可快速移除相应文件
              </p>
            </div>
            {onNext && (
              <div className="mt-6 flex justify-center pb-4">
                <button
                  onClick={onNext}
                  disabled={materials.filter(Boolean).length < 3}
                  className={`w-full py-3.5 rounded-full font-bold text-[14px] shadow-lg transition-all ${
                    materials.filter(Boolean).length >= 3
                      ? "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-blue-600/20 cursor-pointer"
                      : "bg-neutral-800 text-neutral-500 cursor-not-allowed shadow-none"
                  }`}
                >
                  下一步
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
