import { motion, AnimatePresence } from "motion/react";
import { X, Link as LinkIcon, MoreHorizontal as MoreHorizontalIcon, Download, AlertTriangle } from "lucide-react";
import { WechatIcon, ApertureIcon, QQIcon } from "./VideoPreview"; // We exported them in previous step

interface WeChatActionSheetProps {
  isOpen: boolean;
  type: "A" | "B" | "share" | null; // A has "现在制作" (new badge), B does not, share is the share modal
  onClose: () => void;
  onSelectOption: (option: string) => void;
}

export default function WeChatActionSheet({
  isOpen,
  type,
  onClose,
  onSelectOption,
}: WeChatActionSheetProps) {
  if (!isOpen || !type) return null;

  if (type === "share") {
    return (
      <AnimatePresence>
        <div 
          id="share-action-sheet-overlay"
          className="absolute inset-0 bg-black/40 z-[70] flex flex-col justify-end overflow-hidden rounded-[40px] font-sans"
          onClick={onClose}
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-transparent"
          />

          {/* Floating Panel Sheet */}
          <motion.div
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ y: 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative bg-gradient-to-t from-[#1A1A1A]/90 to-[#2c2c2e]/70 backdrop-blur-3xl rounded-t-[32px] pb-10 pt-6 px-4 w-full text-white shadow-[0_-16px_40px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.15)] border-t border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8 px-2">
              <div className="w-6" /> {/* Spacer for centering */}
              <h3 className="text-[16px] font-medium tracking-wider">分享</h3>
              <button onClick={onClose} className="p-1 active:scale-95 transition-transform text-white/80 cursor-pointer">
                <X size={22} className="stroke-[2]" />
              </button>
            </div>

              <div className="grid grid-cols-5 gap-y-6 gap-x-1 px-1 pb-2">
                {[
                  { label: "微信好友", icon: <WechatIcon className="w-7 h-7" /> },
                  { label: "微信朋友圈", icon: <ApertureIcon className="w-7 h-7" /> },
                  { label: "下载", icon: <Download size={20} className="stroke-[2.5]" /> },
                  { label: "分享Gif", icon: <span className="font-bold text-[12px] tracking-wide">GIF</span> },
                  { label: "链接", icon: <LinkIcon size={18} className="stroke-[2.5]" /> },
                  { label: "更多", icon: <MoreHorizontalIcon size={20} className="stroke-[2.5]" /> },
                ].map((item: any) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      onSelectOption(item.label);
                      onClose();
                    }}
                    className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-all"
                  >
                    <div className="w-[48px] h-[48px] bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] text-white/80 whitespace-nowrap">{item.label}</span>
                  </button>
                ))}
              </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <div 
        id="wechat-action-sheet-overlay"
        className="absolute inset-0 bg-black/60 z-[70] flex flex-col justify-end overflow-hidden rounded-[40px]"
        onClick={onClose}
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-transparent"
        />

        {/* Floating Panel Sheet */}
        <motion.div
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          exit={{ y: 300 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative bg-gradient-to-t from-[#1A1A1A]/90 to-[#2c2c2e]/70 backdrop-blur-3xl rounded-t-[32px] pb-8 z-10 w-full text-white shadow-[0_-16px_40px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.1)] border-t border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col text-center text-[17px]">
            {/* Shoot */}
            <button
              id="action-btn-shoot"
              onClick={() => {
                onSelectOption("拍摄");
                onClose();
              }}
              className="py-4 bg-transparent active:bg-white/10 transition-colors font-medium border-b border-white/10 text-white"
            >
              拍摄
            </button>

            {/* Upload */}
            <button
              id="action-btn-upload"
              onClick={() => {
                onSelectOption("上传");
                onClose();
              }}
              className="py-4 bg-transparent active:bg-white/10 transition-colors font-medium text-white"
            >
              上传
            </button>

            {/* Divider spacer */}
            <div className="h-2 bg-black/40" />

            {/* Cancel Action */}
            <button
              id="action-btn-cancel"
              onClick={onClose}
              className="py-4 bg-transparent active:bg-white/10 transition-colors font-semibold text-neutral-400"
            >
              取消
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
